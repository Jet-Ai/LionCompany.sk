import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
const title='Realizácie a ukážky práce | LION Company Bratislava';
const description='Ukážky zo servisných zásahov LION Company — servis okien, dverí a kovania v Bratislave a okolí.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/realizacie'},
  openGraph:{title,description,url:'https://lion-company.sk/realizacie',type:'website'},
};
const photos=[
  ['hero.jpg','Servis okenného kovania','Detail nastavenia kovania počas servisného zásahu.'],
  ['window.jpg','Starostlivosť o okenné rámy','Detail okna počas servisných prác.'],
  ['door.jpg','Servis balkónových dverí','Demontáž krídla a práca na kovaní balkónových dverí priamo u zákazníka.'],
  ['hardware.jpg','Výmena komponentov kovania','Ukážka komponentov pri servisnom zásahu.'],
];
export default function Page(){
  return <>
    <Header/>
    <main>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / Realizácie</p>
        <h1>Realizácie a ukážky práce</h1>
        <p>Skutočné zábery zo servisných zásahov LION Company. Galériu priebežne dopĺňame o ďalšie ukážky z tienenia a sieťok proti hmyzu.</p>
      </div>
      <section className="section wrap">
        <div className="gallery-grid">{photos.map(([src,alt,caption])=><figure key={src}><img src={'/media/'+src} alt={alt} loading="lazy"/><figcaption>{caption}</figcaption></figure>)}</div>
        <p className="services-more">Viac fotografií nájdete aj na <a href="https://www.facebook.com/100064733659141/photos/" target="_blank" rel="noopener noreferrer">našom Facebooku ↗</a></p>
      </section>
    </main>
    <Footer/>
  </>;
}
