import type {Metadata} from 'next';
import './globals.css';
const title='Servis okien a dverí Bratislava | LION Company';
const description='Servis a modernizácia okien a dverí v Bratislave a okolí. Výmena tesnení, oprava kovania, žalúzie a sieťky na mieru. Volajte 0945 454 277.';
export const metadata:Metadata={
  title,description,
  metadataBase:new URL('https://lion-company.sk'),
  icons:{icon:'/favicon.svg'},
  openGraph:{title,description,url:'https://lion-company.sk',siteName:'LION Company.sk',locale:'sk_SK',type:'website',images:[{url:'/og-image.jpg',width:1200,height:630,alt:'LION Company - servis okien a dverí Bratislava'}]},
  twitter:{card:'summary_large_image',title,description,images:['/og-image.jpg']},
};
const business={'@context':'https://schema.org','@type':'HomeAndConstructionBusiness',name:'LION Company.sk s. r. o.',telephone:'+421945454277',url:'https://lion-company.sk',sameAs:['https://www.instagram.com/lion_company.sk/','https://www.facebook.com/p/Lion-company-100064733659141/','https://www.finstat.sk/47582898'],areaServed:'Bratislava a okolie',address:{'@type':'PostalAddress',streetAddress:'Cukrovarská 256/29',addressLocality:'Sládkovičovo',postalCode:'925 21',addressCountry:'SK'},hasOfferCatalog:{'@type':'OfferCatalog',name:'Servis okien a dverí, tienenie a sieťky',itemListElement:['Servis okien a dverí','Výmena tesnení','Tieniaca technika','Sieťky proti hmyzu'].map(name=>({'@type':'Offer',itemOffered:{'@type':'Service',name}}))}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="sk"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business)}}/>{children}</body></html>}

