// Doména stránky (zmena aj v public/robots.txt). Stránky majú noindex, kým ALLOW_INDEXING nie je true.
export const SITE_URL = 'https://pisomnematurity.sk';
export const SITE_DOMAIN = 'pisomnematurity.sk';
// Indexovanie vyhľadávačmi (robots index + kanonické adresy). false = všetky stránky noindex (napr. pri testovacom nasadení).
export const ALLOW_INDEXING = true;
export const SITE_NAME = 'Písomné maturity';
/** Doplnok k názvu (hlavička, pätička) */
export const SITE_TAGLINE = 'Slovenský jazyk a literatúra';
// Náhľadový obrázok pri zdieľaní (zdroj HTML na úpravu nie je v repozitári – obrázok sa dá prekresliť podľa neho)
export const OG_IMAGE = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Písomné maturity – maturita zo slovenčiny na skutočných testoch, s nápovedou, postupom riešenia a slohovými útvarmi'
};
export const MATH_SITE_URL = 'https://monitormatika.sk';
// Contact address for questions and error reports (shown as a mail icon, never as plain text on the page)
export const CONTACT_EMAIL = 'peter.beno85@gmail.com';
// Official source of the EČ MS tests (required NIVaM attribution)
export const NIVAM_SOURCE_URL = 'https://www2.nucem.sk/sk/merania/narodne-merania/maturita';
export const NIVAM_URL = 'https://www.nivam.sk';
