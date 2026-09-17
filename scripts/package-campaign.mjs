import {mkdir,copyFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const target=path.resolve('../campaign-ready');
await mkdir(path.join(target,'media'),{recursive:true});
await copyFile('campaign/POSTS-SK.md',path.join(target,'POSTS-SK.md'));
await copyFile('../campaign-assets/comparison-prompts.txt',path.join(target,'comparison-prompts.txt'));
for(const file of await readdir('public/media/realizacie')){
 const src=path.join('public/media/realizacie',file);
 await copyFile(src,path.join(target,'media',file));
 if(file.endsWith('.webp')) await sharp(src).jpeg({quality:90}).toFile(path.join(target,'media',file.replace('.webp','.jpg')));
}
for(const file of ['insect-screen-comparison.png','blinds-comparison.png']) await copyFile(path.join('../campaign-assets',file),path.join(target,'media',file));
console.log(target);
