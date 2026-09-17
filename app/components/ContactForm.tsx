"use client";
import {useState} from 'react';
const services=['Bezplatná kontrola okien','Servis okien a dverí','Výmena tesnení','Tieniaca technika','Sieťky proti hmyzu','Modernizácia a komponenty','Poradenstvo a iné služby'];
export default function ContactForm({heading='Ozvite sa nám. My sa ozveme vám.',initialService='Servis okien a dverí'}:{heading?:string;initialService?:string}){
  const[status,T]=useState('');
  const[busy,B]=useState(false);
  async function send(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const f=e.currentTarget;
    B(true);T('');
    try{
      const data=Object.fromEntries(new FormData(f));
      const r=await fetch('/api/dopyt',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,consent:f.consent instanceof HTMLInputElement?f.consent.checked:false})});
      if(!r.ok)throw Error();
      T('Ďakujeme. Dopyt sme prijali. Ozveme sa vám na uvedené číslo.');
      f.reset();
    }catch{
      T('Odoslanie sa nepodarilo. Skúste znova alebo volajte +421 945 454 277.');
    }finally{B(false)}
  }
  return <form onSubmit={send}>
    <h3>{heading}</h3>
    <div className="form-grid">
      <label>Vaše meno<input name="name" placeholder="Meno a priezvisko" autoComplete="name" required maxLength={100}/></label>
      <label>Telefónne číslo<input name="phone" type="tel" placeholder="+421" autoComplete="tel" required minLength={9} maxLength={25}/></label>
    </div>
    <div className="form-grid">
      <label>E-mail<input name="email" type="email" placeholder="vas@email.sk" autoComplete="email" required maxLength={200}/></label>
      <label>Obec / mesto<input name="location" autoComplete="address-level2" placeholder="Kde nás potrebujete?" required maxLength={100}/></label>
    </div>
    <label>O akú službu máte záujem?<select name="service" defaultValue={initialService}>{services.map(s=><option key={s}>{s}</option>)}</select></label>
    <label>Čo potrebujete vyriešiť? <small>(nepovinné)</small><textarea name="message" placeholder="Napríklad: balkónové dvere sa ťažko zatvárajú…" rows={3} maxLength={2000}/></label>
    <p className="photo-hint">Problém je jednoduchšie posúdiť na fotke. Pokojne nám ju pošlite priamo na <a href="mailto:lion_company_info@proton.me">lion_company_info@proton.me</a> spolu s vaším menom.</p>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <label className="consent"><input type="checkbox" name="consent" required/> Súhlasím so spracovaním mojich osobných údajov na účely vybavenia tohto dopytu v súlade s <a href="/ochrana-udajov">informáciami o ochrane údajov</a>.</label>
    <button className="btn" disabled={busy}>{busy?'Odosielam…':'Odoslať dopyt'} <b>↗</b></button>
    <p role="status" className="status">{status}</p>
  </form>;
}
