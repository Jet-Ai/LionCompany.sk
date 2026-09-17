'use client';
import {useState} from 'react';
const url='https://lion-company.sk/realizacie?utm_source=share&utm_medium=organic&utm_campaign=bezplatna_kontrola';
const text='Okná sa ťažko zatvárajú? Pozrite si prácu LION Company a objednajte si bezplatnú kontrolu v Bratislave a okolí.';
export default function WorkShare(){
 const [status,setStatus]=useState('');
 async function share(){try{if(navigator.share){await navigator.share({title:'Bezplatná kontrola okien | LION Company',text,url});}else{await navigator.clipboard.writeText(url);setStatus('Odkaz je skopírovaný.');}}catch(error){if(!(error instanceof Error&&error.name==='AbortError'))setStatus('Odkaz môžete skopírovať z poľa nižšie.');}}
 return <div className="work-share"><h3>Poznáte niekoho, komu okná neslúžia?</h3><p>Pošlite mu ukážky práce a možnosť bezplatnej kontroly.</p><div className="share-actions"><button type="button" className="btn" onClick={share}>Zdieľať alebo kopírovať odkaz</button><a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}>Facebook ↗</a><a target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(text+' '+url)}`}>WhatsApp ↗</a></div><label className="share-url">Odkaz na zdieľanie<input readOnly value={url} onFocus={e=>e.currentTarget.select()}/></label><p role="status">{status}</p></div>;
}
