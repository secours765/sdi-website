import fs from 'node:fs/promises';
import path from 'node:path';
import {load} from 'cheerio';
import assert from 'node:assert/strict';
const root=path.resolve('dist'),base=(process.env.SDI_BASE||'/').replace(/\/$/,'');
async function walk(dir){const out=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){if(e.isDirectory())out.push(...await walk(path.join(dir,e.name)));else out.push(path.join(dir,e.name));}return out;}
const files=await walk(root),html=files.filter(f=>f.endsWith('.html')),errors=[];
let checked=0;
for(const file of html){
 const $=load(await fs.readFile(file,'utf8'));
 assert.equal($('html').attr('lang'),'de',file);
 assert.equal($('h1').length,1,'Genau eine H1: '+file);
 assert.equal($('a[href^="mailto:"],a[href*="mitmachen"]').length,0,'Entfernte Aktionslinks: '+file);
 assert(!$('select option').toArray().some(el=>$(el).text()==='Mitmachen'),'Entfernte Kategorie: '+file);
 for(const el of $('a[href],img[src],script[src],link[href]').toArray()){
  const ref=$(el).attr('href')||$(el).attr('src');
  if(!ref||/^(https?:|mailto:|tel:|data:)/.test(ref))continue;
  if(/^(file:|javascript:)/.test(ref)){errors.push(file+': unerlaubtes Ziel '+ref);continue;}
  const [raw,fragment]=ref.split('#');let candidate;
  if(!raw)candidate=file;
  else if(raw.startsWith('/')){
   if(base&&!(raw===base||raw.startsWith(base+'/'))){errors.push('Unterpfad fehlt: '+ref);continue;}
   candidate=path.join(root,decodeURIComponent(raw.slice(base.length).split('?')[0]));
  }else candidate=path.resolve(path.dirname(file),decodeURIComponent(raw.split('?')[0]));
  try{
   const stat=await fs.stat(candidate);if(stat.isDirectory())candidate=path.join(candidate,'index.html');
   await fs.access(candidate);
   if(fragment&&candidate.endsWith('.html')){const target=load(await fs.readFile(candidate,'utf8'));if(!target('[id]').toArray().some(e=>target(e).attr('id')===decodeURIComponent(fragment)))errors.push('Anker fehlt: '+ref);}
  }catch{errors.push(path.relative(root,file)+': fehlt '+ref);}
  if(el.tagName==='img'&&!$(el).attr('alt')&&$(el).attr('alt')!=='')errors.push('Alternativtext fehlt: '+ref);
  checked++;
 }
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
const total=(await Promise.all(files.map(f=>fs.stat(f)))).reduce((a,s)=>a+s.size,0);
assert(total<1_000_000_000,'Build überschreitet 1 GB');
console.log(html.length+' HTML-Seiten; '+checked+' interne Ziele geprüft; Build '+(total/1024/1024).toFixed(1)+' MiB.');
