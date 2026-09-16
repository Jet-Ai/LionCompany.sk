"use client";
import BeforeAfter from './components/BeforeAfter';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
const services=[
  ['01','Servis okien a dverí','Okná drhnú alebo sa ťažko zatvárajú? Nastavíme kovanie a opravíme opotrebované diely.','Plastové, drevené a hliníkové okná|Nastavenie a výmena kovania|Balkónové a vchodové dvere','/servis-okien-a-dveri-bratislava'],
  ['02','Výmena tesnení','Zastavte nepríjemný prievan. Nové tesnenie pomôže udržať teplo tam, kam patrí.','Tesnenia na okná aj dvere|Obmedzenie prefukovania|Lepšia tepelná izolácia','/vymena-tesnenia-okien-bratislava'],
  ['03','Tieniaca technika','Príjemná teplota a súkromie. Navrhneme a namontujeme tienenie na mieru.','Vonkajšie a interiérové žalúzie|Rolety a elektrické motory|Smart Home ovládanie','/tieniaca-technika-bratislava'],
  ['04','Sieťky proti hmyzu','Čerstvý vzduch bez nezvaných návštevníkov. Riešenie pre okná aj dvere.','Pevné, rolovacie a plisované sieťky|Dverové sieťky na mieru|Montáž a výmena sieťoviny','/sietky-proti-hmyzu-bratislava'],
];
export default function Home(){
  return <>
    <Header/>
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow">SERVIS OKIEN · TIENENIE · SIEŤKY</span>
          <h1>Vaše okná.<br/>Opäť v <em>najlepšej<br/>forme.</em></h1>
          <p>Opravíme, nastavíme a vylepšíme vaše okná a dvere. Pre domov bez prievanu, s príjemným tieňom a väčším pohodlím.</p>
          <div className="actions"><a className="btn" href="#kontakt">Objednať servis <b>↗</b></a><a className="link" href="#kontakt">Získať bezplatnú cenovú ponuku →</a></div>
          <div className="trust">✓ Bezplatná obhliadka <span>✓ Cenová ponuka na mieste</span></div>
        </div>
        <div className="hero-img">
          <img src="/media/hero.jpg" alt="Detail servisu okenného kovania"/>
          <div className="note"><span>↗</span><div><strong>Malá oprava. Veľký rozdiel.</strong><small>Predĺžte životnosť svojich okien.</small></div></div>
          <div className="photo-label">LION / STAROSTLIVOSŤ O VÁŠ DOMOV</div>
        </div>
      </section>
      <div className="benefits wrap"><span>Bezplatná obhliadka</span><span>Menej prievanu</span><span>Viac pohodlia</span><span>Dlhšia životnosť</span></div>
      <section className="section wrap" id="sluzby">
        <div className="heading"><div><span className="eyebrow">ČO PRE VÁS UROBÍME</span><h2>Jeden kontakt.<br/>Kompletná starostlivosť.</h2></div><p>Od zaseknutej kľučky po inteligentné tienenie. Postaráme sa o funkčnosť aj komfort vášho domova.</p></div>
        <div className="cards">{services.map(([n,t,d,l,href])=><article key={n}><span className="number">{n}<b>↗</b></span><h3>{t}</h3><p>{d}</p><ul>{l.split('|').map(x=><li key={x}>✓ {x}</li>)}</ul><a href={href}>Viac o tejto službe <span>↗</span></a></article>)}</div>
        <p className="services-more"><a href="/sluzby">Prehľad všetkých služieb vrátane modernizácie a komponentov →</a></p>
      </section>
      <section className="work" id="praca">
        <div className="wrap">
          <div className="heading"><div><span className="eyebrow">MALÁ OPRAVA. VIDITEĽNÝ ROZDIEL.</span><h2>Pred servisom.<br/><em>Po správnej starostlivosti.</em></h2></div><p>Posuňte deliacu čiaru a pozrite si ilustračnú ukážku výmeny opotrebovaného tesnenia.</p></div>
          <div className="reveal-project">
            <BeforeAfter/>
            <div className="reveal-copy">
              <span className="eyebrow">01 / VÝMENA TESNENIA</span><h3>Detail, ktorý mení<br/>pohodlie domova.</h3><p>Popraskané a uvoľnené tesnenie už nemusí správne doliehať. Nové tesnenie vybrané podľa typu okna pomáha obmedziť prefukovanie.</p>
              <ul><li>Kontrola pôvodného tesnenia</li><li>Vyčistenie drážky a rámu</li><li>Výmena a kontrola dosadnutia</li></ul>
              <a className="btn" href="#kontakt">Chcem servis okien <b>↗</b></a>
              <a className="link" href="/realizacie">Skutočné fotografie našej práce ↗</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section wrap about" id="o-nas">
        <div><span className="eyebrow">PREČO LION COMPANY</span><h2>Vaše okná nemusia<br/>byť nové.<br/><em>Stačí správna starostlivosť.</em></h2><p>Špecializujeme sa na servis, údržbu a modernizáciu okien a dverí. Najprv sa pozrieme na problém a navrhneme zmysluplné riešenie pre váš domov.</p><a href="tel:+421945454277" className="link">Porozprávajme sa o vašich oknách ↗</a></div>
        <div className="steps">{[
          ['Necháte nám kontakt','Zavoláte alebo necháte na seba kontakt a stručne popíšete, čo vás trápi.'],
          ['Dohodneme bezplatnú obhliadku','Obchodný zástupca príde k vám, urobí kontrolnú revíziu okien alebo dverí.'],
          ['Cenová ponuka na mieste','Po obhliadke pripravíme cenovú ponuku rovno u vás, bez čakania na spätné volanie.'],
          ['Termín a realizácia','Po odsúhlasení dohodneme termín a naši technici vykonajú servis alebo montáž.'],
        ].map(([t,d],i)=><div className="step" key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
      </section>
      <section className="contact-bg" id="kontakt">
        <div className="contact wrap">
          <div>
            <span className="eyebrow">ZAČNIME JEDNÝM KONTAKTOM</span><h2>Čo môžeme<br/>urobiť pre<br/><em>váš domov?</em></h2>
            <p>Nechajte nám číslo a stručný opis problému.<br/>Obhliadka a cenová ponuka sú bezplatné.</p>
            <a className="big-phone" href="tel:+421945454277">0945 454 277 ↗</a>
            <span className="location">Bratislava a okolie</span>
            <a className="location" href="mailto:lion_company_info@proton.me">lion_company_info@proton.me</a>
          </div>
          <ContactForm/>
        </div>
      </section>
      <section className="section wrap faq">
        <span className="eyebrow">DOBRÉ VEDIEŤ</span><h2>Často sa nás pýtate</h2>
        {[
          ['Servisujete aj staršie okná?','Áno, venujeme sa plastovým, dreveným aj hliníkovým oknám. Možnosti opravy a dostupnosť dielov posúdime podľa konkrétneho typu a stavu.'],
          ['Koľko stojí servis okien?','Cena závisí od problému, rozsahu prác a potrebných komponentov. Obhliadka je bezplatná a cenovú ponuku pripravíme priamo na mieste, ešte pred realizáciou.'],
          ['V akej oblasti pôsobíte?','Poskytujeme servis a montáž v Bratislave a okolí. Napíšte nám svoju obec a dohodneme možnosti výjazdu.'],
          ['Viete doplniť elektrické alebo smart ovládanie?','Ponúkame dodávku a montáž elektrických motorov aj Smart Home ovládanie tieniacej techniky. Vhodnosť overíme podľa existujúceho systému.'],
          ['Musím vás k sebe pustiť domov, aby ste okná posúdili?','Obhliadku si dohodneme vopred na konkrétny čas. Ak vám to pomôže, môžete nám najprv poslať fotku problému na e-mail a spoločne posúdime, či je obhliadka potrebná.'],
        ].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
      </section>
    </main>
    <Footer/>
  </>;
}
