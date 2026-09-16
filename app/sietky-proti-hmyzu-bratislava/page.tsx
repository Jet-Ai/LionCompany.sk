import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const title='Sieťky proti hmyzu Bratislava | Na mieru na okná a dvere | LION Company';
const description='Sieťky proti hmyzu na mieru pre okná a dvere v Bratislave a okolí. Pevné, rolovacie aj plisované prevedenie. Bezplatná obhliadka.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/sietky-proti-hmyzu-bratislava'},
  openGraph:{title,description,url:'https://lion-company.sk/sietky-proti-hmyzu-bratislava',type:'website'},
};
const service={'@context':'https://schema.org','@type':'Service',name:'Sieťky proti hmyzu',areaServed:'Bratislava a okolie',provider:{'@type':'HomeAndConstructionBusiness',name:'LION Company.sk s. r. o.'},description};
export default function Page(){
  return <>
    <Header/>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(service)}}/>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / <a href="/sluzby">Služby</a> / Sieťky proti hmyzu</p>
        <h1>Sieťky proti hmyzu Bratislava</h1>
        <p>Čerstvý vzduch bez nezvaných návštevníkov. Sieťky proti hmyzu vyrobíme na mieru pre okná aj dvere — pevné, rolovacie aj plisované prevedenie.</p>
      </div>
      <section className="section wrap">
        <div className="heading"><div><h2>Typy sieťok, ktoré riešime</h2></div></div>
        <div className="cards">
          <article><h3>Pevné sieťky na okná</h3><p>Jednoduché a spoľahlivé riešenie na mieru pre bežné okná.</p></article>
          <article><h3>Rolovacie a plisované sieťky</h3><p>Sieťky, ktoré sa dajú kedykoľvek zložiť, keď ich práve nepotrebujete.</p></article>
          <article><h3>Dverové sieťky na mieru</h3><p>Riešenie pre balkónové a vchodové dvere podľa ich rozmerov.</p></article>
        </div>
      </section>
      <section className="section wrap faq">
        <h2>Časté otázky k sieťkam proti hmyzu</h2>
        {[
          ['Viete vyrobiť sieťku na netradičný rozmer okna?','Áno, sieťky vyrábame na mieru podľa presného rozmeru okna alebo dverí.'],
          ['Dá sa vymeniť len poškodená sieťovina?','Áno, ak je rám v poriadku, väčšinou stačí vymeniť samotnú sieťovinu.'],
          ['Ponúkate aj sieťky na balkónové dvere?','Áno, riešime dverové sieťky na mieru vrátane pojazdných variantov.'],
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
