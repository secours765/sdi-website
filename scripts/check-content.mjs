import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {checkQr} from './qr.mjs';
const read=async name=>JSON.parse(await fs.readFile(new URL('../src/data/'+name+'.json',import.meta.url),'utf8'));
const projects=await read('projects'),docs=await read('downloads'),team=await read('team');
assert.equal(projects.length,3);
assert.equal(projects.find(p=>p.slug==='suedsudan').status,'In Vorbereitung');
assert(projects.find(p=>p.slug==='suedsudan').current.includes('nicht bestätigt'));
for(const person of team)assert(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email));
assert.equal(new Set(docs.map(d=>d.id)).size,docs.length,'Doppelte Dokument-IDs');
assert.equal(new Set(docs.map(d=>d.originalUrl)).size,docs.length,'Doppelte Quell-URLs');
for(const d of docs){
 assert(d.title&&d.category&&d.language&&(d.retrievedAt||d.availability==='protected')&&d.originalUrl,'Unvollständiger Katalogeintrag');
 for(const id of [...d.relatedIds,...(d.duplicateOf?[d.duplicateOf]:[])])assert(docs.some(x=>x.id===id),'Unbekannter Dokumentverweis '+id);
 if(d.availability==='local'){
  assert(d.publicEligible&&d.localHref&&!d.localHref.includes('..'));
  const data=await fs.readFile(new URL('../public/'+d.localHref,import.meta.url));
  assert.equal(data.length,d.sizeBytes,d.id+' Größe');
  assert.equal(createHash('sha256').update(data).digest('hex'),d.sha256,d.id+' SHA256');
  assert(data.length<100*1024*1024,'Datei überschreitet Git-Limit');
  if(d.format==='PDF')assert.equal(data.subarray(0,5).toString(),'%PDF-',d.id+' PDF-Signatur');
 }
 if(d.availability==='release')assert(d.downloadUrl.startsWith('https://github.com/secours765/sdi-website/releases/download/'));
 if(['protected','source-only','unavailable','withdrawn'].includes(d.availability))assert(!d.localHref,'Ausnahme unzulässig lokal bereitgestellt');
}
for(const file of await fs.readdir(new URL('../public/images/',import.meta.url))){
 const m=await sharp(new URL('../public/images/'+file,import.meta.url).pathname.replace(/^\/([A-Z]:)/,'$1').replaceAll('%20',' ')).metadata();
 assert(!m.exif&&!m.xmp&&!m.iptc,'Unnötige Bildmetadaten: '+file);
}
await checkQr();
const workflows=await fs.readdir(new URL('../.github/workflows/',import.meta.url));
for(const f of workflows){
 const text=await fs.readFile(new URL('../.github/workflows/'+f,import.meta.url),'utf8');
 if(f!=='pages.yml'){assert(!/deploy-pages|pages:\s*write|id-token:\s*write|upload-pages-artifact/.test(text),'Deployment außerhalb des Pages-Workflows');continue;}
 assert(!/pull_request|pull_request_target|workflow_run/.test(text),'Keine PR-Deployments');
 assert(text.includes('branches: [main]')&&text.includes('workflow_dispatch:'),'Produktionstrigger');
 const guard="if: github.ref == 'refs/heads/main' && (github.event_name == 'push' || github.event_name == 'workflow_dispatch')";
 assert.equal(text.split(guard).length-1,2,'Beide Jobs auf main und erlaubte Ereignisse begrenzen');
 assert(text.includes('permissions: {}')&&text.includes('name: github-pages')&&text.includes('needs: build'));
 assert(text.indexOf('actions/configure-pages@')<text.indexOf('npm run build'),'Pages-Adresse vor Build');
 assert(text.includes('SDI_SITE: $'+'{{ steps.pages.outputs.origin }}')&&text.includes('SDI_BASE: $'+'{{ steps.pages.outputs.base_path }}'));
 assert(text.includes('npm run build && npm run check:links')&&text.includes('path: dist')&&text.includes('npm ci')&&text.includes('npm run check'));
 const build=text.split('  deploy:')[0];assert(!/pages:\s*write|id-token:\s*write/.test(build),'Build ohne Veröffentlichungsrechte');
}
console.log('Inhaltsprüfung erfolgreich: '+projects.length+' Projekte, '+docs.length+' Dokumentverweise, lokale Hashes, Bildmetadaten, QR und begrenzter Pages-Workflow.');
