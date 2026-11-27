import fs from 'node:fs/promises';
import path from 'node:path';
import {load} from 'cheerio';
import assert from 'node:assert/strict';
const root=path.resolve('dist'),base='/' + (process.env.SDI_BASE||'').replace(/^\/+|\/+$/g,'');
const prefix=base==='/'?'':base,origin=process.env.SDI_SITE||'https://secours765.github.io';
async function walk(dir){const out=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){if(e.isDirectory())out.push(...await walk(path.join(dir,e.name)));else out.push(path.join(dir,e.name));}return out;}
const files=await walk(root),exactFiles=new Set(files),html=files.filter(f=>f.endsWith('.html')),errors=[],titles=new Set(),descriptions=new Set(),canonicals=[];
const dimensions=JSON.parse(await fs.readFile('src/data/image-dimensions.json','utf8'));
let checked=0;
for(const file of html){
 const source=await fs.readFile(file,'utf8'),$=load(source),is404=path.relative(root,file)==='404.html';
 assert(!/localhost|127\.0\.0\.1|[A-Z]:\\(?:Users|Windows)|file:\/\/|Abnahmehinweis|Noch nicht veröffentlicht|zur Abnahme ergänzt/i.test(source),'Entwurfs-/Rechnerdaten: '+file);
 assert.equal($('html').attr('lang'),'de',file);
 assert.equal($('h1').length,1,'Genau eine H1: '+file);
 assert.equal($('a[href^="mailto:"],a[href*="mitmachen"]').length,0,'Entfernte Aktionslinks: '+file);
 assert.equal($('.draft-bar').length,0,'Entwurfsleiste');
 assert(!$('select option').toArray().some(el=>$(el).text()==='Mitmachen'),'Entfernte Kategorie');
 const title=$('title').text(),description=$('meta[name="description"]').attr('content');
 assert(title&&description&&!titles.has(title)&&!descriptions.has(description),'Eindeutige Metadaten: '+file);titles.add(title);descriptions.add(description);
 assert.equal($('meta[property="og:title"]').attr('content'),title);
 assert.equal($('meta[property="og:description"]').attr('content'),description);
 assert.equal($('meta[name="twitter:card"]').attr('content'),'summary_large_image');
 const image=$('meta[property="og:image"]').attr('content');
 assert(image.startsWith(origin+prefix+'/images/'),'Social-Bildadresse: '+file);
 assert(exactFiles.has(path.join(root,new URL(image).pathname.slice(prefix.length))),'Social-Bild fehlt');
 if(is404){assert($('meta[name="robots"]').attr('content').includes('noindex'));assert.equal($('link[rel="canonical"]').length,0);}
 else{
  assert.equal($('meta[name="robots"]').attr('content'),'index, follow');
  const relative=path.relative(root,file).replaceAll(path.sep,'/').replace(/index\.html$/,'');
  const expected=origin.replace(/\/$/,'')+prefix+'/'+relative;
  assert.equal($('link[rel="canonical"]').attr('href'),expected,'Canonical: '+file);
  assert.equal($('meta[property="og:url"]').attr('content'),expected);canonicals.push(expected);
 }
 const refs=$('a[href],img[src],script[src],link[href]').toArray().map(el=>({el,ref:$(el).attr('href')||$(el).attr('src')}));
 for(const el of $('img[srcset]').toArray())for(const entry of $(el).attr('srcset').split(','))refs.push({el,ref:entry.trim().split(/\s+/)[0],variant:true});
 for(const {el,ref,variant} of refs){
  if(!ref||/^(https?:|mailto:|tel:|data:)/.test(ref))continue;
  if(/^(file:|javascript:)/.test(ref)){errors.push(file+': unerlaubtes Ziel '+ref);continue;}
  const [raw,fragment]=ref.split('#');let candidate;
  if(!raw)candidate=file;
  else if(raw.startsWith('/')){
   if(prefix&&!(raw===prefix||raw.startsWith(prefix+'/'))){errors.push('Unterpfad fehlt: '+ref);continue;}
   candidate=path.join(root,decodeURIComponent(raw.slice(prefix.length).split('?')[0]));
  }else candidate=path.resolve(path.dirname(file),decodeURIComponent(raw.split('?')[0]));
  if(!exactFiles.has(candidate))candidate=path.join(candidate,'index.html');
  if(!exactFiles.has(candidate)){errors.push(path.relative(root,file)+': fehlt oder Schreibweise abweichend '+ref);continue;}
  if(fragment&&candidate.endsWith('.html')){const target=load(await fs.readFile(candidate,'utf8'));if(!target('[id]').toArray().some(e=>target(e).attr('id')===decodeURIComponent(fragment)))errors.push('Anker fehlt: '+ref);}
  if(el.tagName==='img'&&!variant){
   assert($(el).attr('alt')!==undefined,'Alternativtext fehlt: '+ref);
   const info=dimensions[path.relative(root,candidate).replaceAll(path.sep,'/')];
   assert(info,'Bildmaße fehlen: '+ref);
   assert.equal(Number($(el).attr('width')),info.width,ref+' Breite');
   assert.equal(Number($(el).attr('height')),info.height,ref+' Höhe');
  }
  checked++;
 }
}
const sitemap=load(await fs.readFile(path.join(root,'sitemap.xml'),'utf8'),{xmlMode:true});
assert.deepEqual(sitemap('loc').toArray().map(el=>sitemap(el).text()).sort(),canonicals.sort(),'Sitemap umfasst alle Inhaltsseiten ohne 404');
const robots=await fs.readFile(path.join(root,'robots.txt'),'utf8');assert(!/Disallow:\s*\//.test(robots));assert(robots.includes('Sitemap: '+origin.replace(/\/$/,'')+prefix+'/sitemap.xml'));
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
const total=(await Promise.all(files.map(f=>fs.stat(f)))).reduce((a,s)=>a+s.size,0);assert(total<1_000_000_000,'Build überschreitet 1 GB');
console.log(html.length+' HTML-Seiten; '+checked+' interne Ziele mit exakter Schreibweise, Bildmaße, eindeutige Metadaten, Canonicals, Sitemap und robots geprüft; Build '+(total/1024/1024).toFixed(1)+' MiB.');
