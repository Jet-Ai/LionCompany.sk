import {readdirSync,mkdirSync,statSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import sharp from 'sharp';
const root=path.resolve('..');
const source=path.join(root,'Media');
const output=path.resolve('public/media/realizacie');
mkdirSync(output,{recursive:true});
const photos=[['19.33.55','skorodovany-pant'],['19.34.09','pant-pocas-servisu'],['19.34.32','korozia-kovania'],['19.36.20','opotrebovane-kovanie'],['19.37.11','stare-tesnenie'],['19.38.57','detail-ramu'],['19.40.27','vymena-tesnenia'],['19.41.20','okno-po-servise']];
for(const [time,name] of photos) await sharp(path.join(source,`WhatsApp Image 2026-09-16 at ${time}.jpeg`)).rotate().resize({width:1200,withoutEnlargement:true}).webp({quality:82}).toFile(path.join(output,`${name}.webp`));
for(const name of ['insect-screen-comparison','blinds-comparison']) await sharp(path.join(root,`campaign-assets/${name}.png`)).resize({width:1600,withoutEnlargement:true}).webp({quality:85}).toFile(path.join(output,`${name}.webp`));
const bin=path.join(root,'media-tools/imageio_ffmpeg/binaries');
const ffmpeg=path.join(bin,readdirSync(bin).find(n=>n.endsWith('.exe')));
const videos=[['19.32.10','dverova-siet'],['19.32.24','kontrola-okna'],['19.33.06','detail-kovania'],['19.39.59','lamelove-zaluzie'],['19.42.24','otvaravo-sklopne-dvere'],['19.43.05','otvaravo-sklopne-okno']];
for(const [time,name] of videos){
 const file=path.join(source,`WhatsApp Video 2026-09-16 at ${time}.mp4`);
 for(const args of [
 ['-i',file,'-vf','scale=720:-2','-c:v','libx264','-preset','fast','-crf','26','-pix_fmt','yuv420p','-an','-movflags','+faststart',path.join(output,`${name}.mp4`)],
 ['-ss','1','-i',file,'-vf','scale=540:-2','-frames:v','1',path.join(output,`${name}-poster.jpg`)]
 ]) {const r=spawnSync(ffmpeg,['-hide_banner','-loglevel','error','-y',...args],{encoding:'utf8'}); if(r.status!==0)throw Error(r.stderr);}
 console.log(`${name}: ${(statSync(path.join(output,`${name}.mp4`)).size/1024/1024).toFixed(1)} MB`);
}
