import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const title='Tieniaca technika Bratislava | Vonkajšie žalúzie a rolety | LION Company';
const description='Vonkajšie žalúzie, rolety a interiérové tienenie na mieru v Bratislave a okolí. Elektrické motory, Smart Home ovládanie. Bezplatná obhliadka.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/tieniaca-technika-bratislava'},
  openGraph:{title,description,url:'https://lion-company.sk/tieniaca-technika-bratislava',type:'website'},
};
const service={'@context':'https://schema.org','@type':'Service',name:'Tieniaca technika',areaServed:'Bratislava a okolie',provider:{'@type':'HomeAndConstructionBusiness',name:'LION Company.sk s. r. o.'},description};
export default function Page(){
  return <>
    <Header/>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(service)}}/>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / <a href="/sluzby">Služby</a> / Tieniaca technika</p>
        <h1>Tieniaca technika Bratislava</h1>
        <p>Vonkajšie žalúzie, rolety a interiérové tienenie navrhneme a namontujeme na mieru podľa vášho domu. Vieme doplniť aj elektrické motory a Smart Home ovládanie.</p>
      </div>
      <section className="section wrap">
        <div className="heading"><div><h2>Čo ponúkame</h2></div></div>
        <div className="cards">
          <article><h3>Vonkajšie žalúzie</h3><p>Ochrana pred slnkom aj pohľadmi zvonka, na mieru podľa okien vášho domu.</p></article>
          <article><h3>Rolety a elektrické motory</h3><p>Rolety s možnosťou doplnenia elektrického pohonu pre pohodlné ovládanie.</p></article>
          <article><h3>Smart Home ovládanie</h3><p>Prepojenie tieniacej techniky so smart home systémom, kde je to technicky možné.</p></article>
        </div>
      </section>
      <section className="section wrap faq">
        <h2>Časté otázky k tieniacej technike</h2>
        {[
          ['Viete namontovať žalúzie na existujúce okná?','Áno, riešenie navrhneme priamo pri obhliadke podľa typu a rozmerov vašich okien.'],
          ['Dá sa doplniť elektrický pohon k existujúcim roletám?','V mnohých prípadoch áno, vhodnosť overíme pri obhliadke podľa existujúceho mechanizmu.'],
          ['Ponúkate aj interiérové tienenie?','Áno, popri vonkajších žalúziách riešime aj interiérové žalúzie a rolety.'],
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
