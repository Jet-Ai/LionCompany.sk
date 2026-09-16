"use client";
import {useEffect,useState} from 'react';

const photos=[
  ['hero.jpg','Detail servisu okenného kovania'],
  ['window.jpg','Starostlivosť o okenné rámy'],
  ['door.jpg','Servis balkónových dverí'],
  ['hardware.jpg','Komponenty okenného a dverového kovania'],
];

export default function HeroSlideshow(){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const [reducedMotion,setReducedMotion]=useState(true);
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change',update);
    return ()=>preference.removeEventListener('change',update);
  },[]);
  useEffect(()=>{
    if(paused||reducedMotion)return;
    const timer=window.setInterval(()=>{
      if(!document.hidden)setActive(current=>(current+1)%photos.length);
    },1000);
    return ()=>window.clearInterval(timer);
  },[paused,reducedMotion]);
  return <div className="hero-img" role="region" aria-label="Fotografie našej práce" aria-roledescription="prezentácia">
    {photos.map(([src,alt],index)=>(
      // These local photos are preloaded together to avoid gaps in the one-second rotation.
      // eslint-disable-next-line @next/next/no-img-element
      <img key={src} className={`hero-slide${index===active?' is-active':''}`} src={`/media/${src}`} alt={alt} aria-hidden={index!==active} fetchPriority={index===0?'high':'low'} decoding="async"/>
    ))}
    <div className="hero-slide-controls">
      <div className="hero-slide-dots">{photos.map(([,alt],index)=><button key={alt} type="button" onClick={()=>{setActive(index);setPaused(true)}} aria-label={`Zobraziť fotografiu: ${alt}`} aria-pressed={active===index}><span/></button>)}</div>
      {!reducedMotion&&<button type="button" className="hero-slide-pause" onClick={()=>setPaused(value=>!value)} aria-label={paused?'Spustiť prezentáciu':'Pozastaviť prezentáciu'}>{paused?'▶ Spustiť':'Ⅱ Pozastaviť'}</button>}
    </div>
    <div className="note"><span>↗</span><div><strong>Malá oprava. Veľký rozdiel.</strong><small>Predĺžte životnosť svojich okien.</small></div></div>
    <div className="photo-label">LION / STAROSTLIVOSŤ O VÁŠ DOMOV</div>
  </div>;
}
