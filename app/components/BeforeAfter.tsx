"use client";
import {useId, useState} from 'react';

export default function BeforeAfter(){
  const [position,setPosition]=useState(50);
  const id=useId();
  return <figure className="comparison">
    <div className="comparison-stage">
      {/* Matching full-size layers keep the camera framing fixed while revealing. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/window-seal-after.webp" alt="Ilustrácia čistého okenného rámu s vymeneným tesnením" width={1536} height={1024} loading="lazy" draggable={false}/>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="comparison-before" src="/media/window-seal-before.webp" alt="Ilustrácia opotrebovaného a uvoľneného okenného tesnenia pred opravou" width={1536} height={1024} loading="lazy" draggable={false} style={{clipPath:`inset(0 ${100-position}% 0 0)`}}/>
      <span className="comparison-label comparison-label-before">PRED</span>
      <span className="comparison-label comparison-label-after">PO</span>
      <div className="comparison-divider" style={{left:`${position}%`}} aria-hidden="true"><span>‹&nbsp; ›</span></div>
      <input className="comparison-range" type="range" min={0} max={100} value={position} onChange={event=>setPosition(Number(event.target.value))} aria-label="Porovnať okno pred a po výmene tesnenia" aria-valuetext={`${position} percent pôvodného stavu`} aria-describedby={id}/>
    </div>
    <figcaption id={id}><span>↔ Potiahnite posuvník a odhaľte rozdiel.</span><small>Ilustračné obrázky vytvorené pomocou AI. Nejde o fotografie konkrétnej realizácie.</small></figcaption>
  </figure>;
}
