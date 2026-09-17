"use client";
import {useState} from 'react';
import Link from 'next/link';
const nav:[string,string][]=[['/#sluzby','Naše služby'],['/realizacie','Naša práca'],['/#o-nas','Prečo LION'],['/realizacie#obhliadka','Bezplatná kontrola']];
export default function Header(){const[menu,M]=useState(false);return <><div className="top"><div className="wrap"><span>Servis, ktorý dá vašim oknám nový život.</span><span>Bratislava a okolie</span></div></div><header><div className="wrap nav"><Link className="logo" href="/">LION<small>COMPANY.SK</small></Link><nav className={menu?'open':''}>{nav.map(([href,t])=><a key={href} href={href} onClick={()=>M(false)}>{t}</a>)}</nav><a className="phone" href="tel:+421945454277">↗ 0945 454 277</a><button className="menu" onClick={()=>M(!menu)} aria-expanded={menu} aria-label="Menu">{menu?'✕':'☰'}</button></div></header></>}
