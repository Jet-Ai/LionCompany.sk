import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
const title='Naše služby | Servis okien, tesnenia, tienenie, sieťky | LION Company';
const description='Prehľad služieb LION Company: servis okien a dverí, výmena tesnení, tieniaca technika, sieťky proti hmyzu a modernizácia komponentov. Bratislava a okolie.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/sluzby'},
  openGraph:{title,description,url:'https://lion-company.sk/sluzby',type:'website'},
};
const services=[
  ['Servis okien a dverí','Kompletný servis plastových, drevených a hliníkových okien a dverí — nastavenie kovania, oprava drhnutia, netesnosti aj poškodených dielov.','/servis-okien-a-dveri-bratislava'],
  ['Výmena tesnení','Profesionálna výmena tesnenia na oknách aj dverách pre lepšiu tepelnú izoláciu a menej prievanu.','/vymena-tesnenia-okien-bratislava'],
  ['Tieniaca technika','Vonkajšie žalúzie, rolety, interiérové tienenie, elektrické motory a Smart Home ovládanie na mieru.','/tieniaca-technika-bratislava'],
  ['Sieťky proti hmyzu','Pevné, rolovacie a plisované sieťky na okná a dvere, vyrobené na mieru.','/sietky-proti-hmyzu-bratislava'],
];
export default function Page(){
  return <>
    <Header/>
    <main>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / Služby</p>
        <h1>Naše služby</h1>
        <p>Servis, údržba a modernizácia okien a dverí v Bratislave a okolí. Jeden kontakt, kompletná starostlivosť o váš domov.</p>
      </div>
      <section className="section wrap">
        <div className="cards">{services.map(([t,d,href])=><article key={t}><h3>{t}</h3><p>{d}</p><a href={href}>Viac o tejto službe <span>↗</span></a></article>)}</div>
      </section>
      <section className="section wrap about">
        <div>
          <span className="eyebrow">MODERNIZÁCIA A KOMPONENTY</span>
          <h2>Aj drobné komponenty rozhodujú o funkčnosti okna</h2>
          <p>Popri servise a tienení riešime aj výmenu a doplnenie jednotlivých komponentov okien a dverí, montáž bezpečnostných a detských poistiek, a poradenstvo pri modernizácii starších okien. Rozsah posúdime priamo pri bezplatnej obhliadke.</p>
          <Link href="/#kontakt" className="link">Dohodnúť bezplatnú obhliadku ↗</Link>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
