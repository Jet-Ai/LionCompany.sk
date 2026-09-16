import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const title='Servis okien a dverí Bratislava | Oprava a nastavenie kovania | LION Company';
const description='Servis a oprava okien a dverí v Bratislave a okolí. Nastavenie kovania, oprava tesnenia, plastové, drevené aj hliníkové okná. Bezplatná obhliadka.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/servis-okien-a-dveri-bratislava'},
  openGraph:{title,description,url:'https://lion-company.sk/servis-okien-a-dveri-bratislava',type:'website'},
};
const service={'@context':'https://schema.org','@type':'Service',name:'Servis okien a dverí',areaServed:'Bratislava a okolie',provider:{'@type':'HomeAndConstructionBusiness',name:'LION Company.sk s. r. o.'},description};
export default function Page(){
  return <>
    <Header/>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(service)}}/>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / <a href="/sluzby">Služby</a> / Servis okien a dverí</p>
        <h1>Servis okien a dverí Bratislava</h1>
        <p>Okná alebo dvere drhnú, ťažko sa zatvárajú, alebo cítite prievan? Riešime servis a opravu okien a dverí v Bratislave a okolí — plastové, drevené aj hliníkové. Obhliadka je bezplatná, cenovú ponuku pripravíme priamo na mieste.</p>
      </div>
      <section className="section wrap">
        <div className="heading"><div><h2>Čo pri servise riešime</h2></div></div>
        <div className="cards">
          <article><h3>Nastavenie a oprava kovania</h3><p>Okná a dvere, ktoré drhnú, netesnia alebo sa ťažko ovládajú, najčastejšie potrebujú len správne nastavenie kovania — nie výmenu celého okna.</p></article>
          <article><h3>Balkónové a vchodové dvere</h3><p>Servis ťažko chodiacich, prevísnutých alebo netesniacich balkónových a vchodových dverí vrátane výmeny opotrebovaných dielov.</p></article>
          <article><h3>Bezpečnostné a detské poistky</h3><p>Doplnenie bezpečnostného kovania a detských poistiek na existujúce okná a dvere.</p></article>
        </div>
      </section>
      <section className="section wrap about">
        <div><h2>Ako obhliadka a servis prebiehajú</h2>
          <div className="steps">{[
            ['Kontakt','Zavoláte alebo necháte na seba kontakt, opíšete problém.'],
            ['Bezplatná obhliadka','Prídeme k vám a urobíme kontrolnú revíziu okien a dverí.'],
            ['Cenová ponuka na mieste','Po obhliadke rovno pripravíme cenovú ponuku, bez čakania.'],
            ['Servis podľa dohodnutého termínu','Po odsúhlasení vykonáme servis a skontrolujeme funkčnosť.'],
          ].map(([t,d])=><div className="step" key={t}><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
        </div>
      </section>
      <section className="section wrap faq">
        <h2>Časté otázky k servisu okien a dverí</h2>
        {[
          ['Oplatí sa servis, alebo je lepšie kúpiť nové okná?','Väčšinu problémov s prievanom, drhnutím alebo netesnosťou vyrieši nastavenie kovania a výmena tesnenia — bez nutnosti meniť celé okno.'],
          ['Servisujete aj staré okná od výrobcov, ktorí už neexistujú?','Áno, kovanie a tesnenia posúdime podľa typu profilu priamo pri obhliadke a navrhneme dostupné riešenie.'],
          ['Ako rýchlo viete prísť na obhliadku?','Obhliadku sa snažíme dohodnúť čo najskôr po prvom kontakte, podľa aktuálnej kapacity v Bratislave a okolí.'],
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
