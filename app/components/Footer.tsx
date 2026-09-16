import Link from 'next/link';
const serviceLinks:[string,string][]=[
  ['/servis-okien-a-dveri-bratislava','Servis okien a dverí'],
  ['/vymena-tesnenia-okien-bratislava','Výmena tesnení'],
  ['/tieniaca-technika-bratislava','Tieniaca technika'],
  ['/sietky-proti-hmyzu-bratislava','Sieťky proti hmyzu'],
];
export default function Footer(){return <><footer><div className="wrap footer-top"><Link className="logo" href="/">LION<small>COMPANY.SK</small></Link><p>Servis okien a dverí. Tienenie. Sieťky.<br/>Starostlivosť, na ktorú sa môžete obrátiť.</p><a href="tel:+421945454277">+421 945 454 277</a><a href="mailto:lion_company_info@proton.me">lion_company_info@proton.me</a><nav className="footer-services" aria-label="Služby">{serviceLinks.map(([href,t])=><a key={href} href={href}>{t}</a>)}</nav><div className="social-links"><a href="https://www.instagram.com/lion_company.sk/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.facebook.com/p/Lion-company-100064733659141/" target="_blank" rel="noopener noreferrer">Facebook ↗</a></div></div><div className="wrap footer-bottom"><span>© 2026 LION Company.sk s. r. o.</span><span><a href="https://www.finstat.sk/47582898" target="_blank" rel="noopener noreferrer" aria-label="Firemné údaje LION Company na FinState">IČO 47582898 ↗</a> · Cukrovarská 256/29, Sládkovičovo</span><a href="/ochrana-udajov">Ochrana údajov</a></div></footer><a className="mobile-call" href="tel:+421945454277">Zavolať servis ↗</a></>}
