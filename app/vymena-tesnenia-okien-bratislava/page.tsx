import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const title='Výmena tesnenia okien Bratislava | LION Company';
const description='Výmena tesnenia okien a dverí v Bratislave a okolí. Zastavte prievan, zlepšite tepelnú izoláciu. Bezplatná obhliadka, cenová ponuka na mieste.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/vymena-tesnenia-okien-bratislava'},
  openGraph:{title,description,url:'https://lion-company.sk/vymena-tesnenia-okien-bratislava',type:'website'},
};
const service={'@context':'https://schema.org','@type':'Service',name:'Výmena tesnení okien a dverí',areaServed:'Bratislava a okolie',provider:{'@type':'HomeAndConstructionBusiness',name:'LION Company.sk s. r. o.'},description};
export default function Page(){
  return <>
    <Header/>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(service)}}/>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / <a href="/sluzby">Služby</a> / Výmena tesnení</p>
        <h1>Výmena tesnenia okien Bratislava</h1>
        <p>Staré, tvrdé alebo popraskané tesnenie je najčastejšou príčinou prievanu a úniku tepla. Vymeníme tesnenie na oknách aj dverách v Bratislave a okolí a pomôžeme znížiť náklady na vykurovanie.</p>
      </div>
      <section className="section wrap">
        <div className="heading"><div><h2>Prečo vymeniť tesnenie</h2></div></div>
        <div className="cards">
          <article><h3>Menej prievanu</h3><p>Nové tesnenie obmedzí prefukovanie okolo krídla okna aj dverí.</p></article>
          <article><h3>Lepšia tepelná izolácia</h3><p>Kvalitné tesnenie pomáha udržať teplo v interiéri a znižuje tepelné straty.</p></article>
          <article><h3>Väčší komfort bývania</h3><p>Menej hluku zvonka a stabilnejšia teplota v miestnosti.</p></article>
        </div>
      </section>
      <section className="section wrap faq">
        <h2>Časté otázky k výmene tesnenia</h2>
        {[
          ['Ako spoznám, že potrebujem vymeniť tesnenie?','Tesnenie, ktoré je tvrdé, popraskané alebo sa drobí, stráca svoju funkciu. Posúdime to priamo pri bezplatnej obhliadke.'],
          ['Dá sa tesnenie vymeniť na všetkých typoch okien?','Vo väčšine prípadov áno — typ tesnenia vyberieme podľa profilu a stavu vašich okien alebo dverí.'],
          ['Ako dlho výmena tesnenia trvá?','Väčšinou ide o zásah v rámci jednej návštevy, presný čas závisí od počtu okien a dverí.'],
        ].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
      </section>
      <section className="contact-bg" id="kontakt">
        <div className="contact wrap">
          <div><h2>Objednajte si bezplatnú obhliadku</h2><p>Necháte nám číslo, my sa ozveme a dohodneme termín.</p><a className="big-phone" href="tel:+421945454277">0945 454 277 ↗</a></div>
          <ContactForm/>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
