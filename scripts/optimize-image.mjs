import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs/promises';
const [input,output]=process.argv.slice(2);
if(!input||!output){console.error('Aufruf: node scripts/optimize-image.mjs <Originalbild> <Ziel.webp>');process.exit(1);}
if(path.resolve(input)===path.resolve(output))throw new Error('Original niemals überschreiben.');
await fs.mkdir(path.dirname(output),{recursive:true});
await sharp(input).rotate().resize({width:1600,withoutEnlargement:true}).webp({quality:84}).toFile(output);
await sharp(input).rotate().resize({width:600,withoutEnlargement:true}).webp({quality:78}).toFile(output.replace(/\.webp$/i,'-thumb.webp'));
console.log('WebP und Vorschau erzeugt; EXIF/XMP/IPTC nicht übernommen.');
