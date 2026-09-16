import Link from 'next/link';
import type {Metadata} from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const title='Kontakt a cenová ponuka | LION Company Bratislava';
const description='Kontaktujte LION Company — servis okien a dverí, tesnenia, tienenie a sieťky proti hmyzu v Bratislave a okolí. Bezplatná obhliadka a cenová ponuka na mieste.';
export const metadata:Metadata={
  title,description,
  alternates:{canonical:'https://lion-company.sk/kontakt'},
  openGraph:{title,description,url:'https://lion-company.sk/kontakt',type:'website'},
};
export default function Page(){
  return <>
    <Header/>
    <main>
      <div className="wrap page-hero">
        <p className="breadcrumbs"><Link href="/">Domov</Link> / Kontakt</p>
        <h1>Kontakt</h1>
        <p>Necháte nám číslo a stručný opis problému. Obhliadka je bezplatná, cenovú ponuku pripravíme priamo na mieste.</p>
      </div>
      <section className="contact-bg">
        <div className="contact wrap">
          <div>
            <span className="eyebrow">LION COMPANY.SK S. R. O.</span>
            <a className="big-phone" href="tel:+421945454277">0945 454 277 ↗</a>
            <span className="location">Bratislava a okolie</span>
            <a className="location" href="mailto:lion_company_info@proton.me">lion_company_info@proton.me</a>
            <p className="privacy">IČO 47582898 · Cukrovarská 256/29, 925 21 Sládkovičovo</p>
          </div>
          <ContactForm/>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
