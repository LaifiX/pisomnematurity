// Slohové útvary písomnej formy internej časti maturitnej skúšky (PFIČ MS) zo SJL.
// Obsah: prezentácie Mgr. Petra Beňa „Rukoväť na písanie slohovej práce“ (SOŠ podnikania Trenčín, 2014),
// upravené a doplnené o vzorový výklad.
// Kritériá hodnotenia: NIVaM, Kritériá na hodnotenie PFIČ MS – SJL, MJL, UJL, február 2026.
// Témy 2014 – 2026: oficiálne PDF NIVaM (zdroje-nivam/temy-pfic), 2007 – 2013: prezentácie.
// Texty sú dôveryhodné HTML reťazce (môžu obsahovať <strong>, <em>).

export type SlohSlug =
  | 'uvaha'
  | 'charakteristika'
  | 'umelecky-opis'
  | 'rozpravanie'
  | 'diskusny-prispevok'
  | 'beletrizovany-zivotopis'
  | 'vyklad'
  | 'slavnostny-prejav';

export interface SlohSection {
  id: string;
  title: string;
  lead?: string;
  /** odrážky */
  list?: string[];
  /** karty: pojem + vysvetlenie (druhy, prostriedky…) */
  cards?: { term: string; text: string; example?: string }[];
  /** kroky kompozície */
  steps?: { term: string; text: string; example?: string }[];
  /** odstavce */
  paras?: string[];
}

export interface SlohSample {
  title: string;
  note: string;
  paras: string[];
}

export interface SlohovyUtvar {
  slug: SlohSlug;
  name: string;
  short: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: SlohSection[];
  tips: string[];
  sample?: SlohSample;
  samples?: SlohSample[];
  criteria: { obsah: string[]; kompozicia: string[]; jazyk: string[]; styl: string[] };
  /** kontrolný zoznam pred odovzdaním – špecifický pre útvar */
  checklist: string[];
}

// ---------------------------------------------------------------- témy
export interface SlohTema {
  year: number;
  slug: SlohSlug;
  title: string;
  author?: string;
  /** spresnenie v zátvorke, ak sa líši od názvu útvaru */
  spec?: string;
}

export const YEARS = Array.from({ length: 2026 - 2007 + 1 }, (_, i) => 2007 + i);
/** Roky, keď sa písomná forma v riadnom termíne nekonala (pandémia COVID-19) */
export const NO_EXAM_YEARS = [2020, 2021];

const t = (year: number, slug: SlohSlug, title: string, extra: Partial<SlohTema> = {}): SlohTema => ({ year, slug, title, ...extra });
const ORBEN = '„Máme dosť ľudí, čo vravia, aké to je – no zišli by sa takí, čo by povedali, aké to môže byť.“';

export const temy: SlohTema[] = [
  t(2007, 'uvaha', ORBEN, { author: 'Robert Orben' }),
  t(2007, 'umelecky-opis', 'Táto ulica mi je známa…'),
  t(2007, 'rozpravanie', 'Gaudeamus igitur', { spec: 'Rozprávanie o mojej ceste k dospelosti' }),
  t(2007, 'diskusny-prispevok', 'Blogeri sú obrazom spoločnosti'),

  t(2008, 'uvaha', 'Ako správne zvládnuť stres?'),
  t(2008, 'charakteristika', 'Don Quijote 21. storočia'),
  t(2008, 'rozpravanie', 'Dôkaz mojej dospelosti'),
  t(2008, 'beletrizovany-zivotopis', 'Volám sa Jozef Mak'),

  t(2009, 'uvaha', '„Myslíte, že v horách je vzduch bez chemikálií, keď komíny sú vysoké? A ste si istí, že voda z prameňa je pramenitá?“', { author: 'Ján Zambor' }),
  t(2009, 'umelecky-opis', 'Aj zima má svoje čaro'),
  t(2009, 'rozpravanie', 'Odišiel/Odišla som, hoci som mal/mala zostať'),
  t(2009, 'diskusny-prispevok', 'Ťapákovci v nás a okolo nás'),

  t(2010, 'uvaha', 'Bol by Holden Caulfield prototyp mladého rebela aj dnes?'),
  t(2010, 'umelecky-opis', 'Môj svet', { spec: 'Umelecký opis školy' }),
  t(2010, 'charakteristika', 'Môj obľúbený filmový alebo literárny hrdina'),
  t(2010, 'diskusny-prispevok', 'Úroveň spoločnosti sa posudzuje podľa toho, ako sa dokáže správať voči svojim najbezbrannejším'),

  t(2011, 'uvaha', ORBEN, { author: 'Robert Orben' }),
  t(2011, 'umelecky-opis', 'Táto ulica mi je známa…'),
  t(2011, 'rozpravanie', 'Gaudeamus igitur', { spec: 'Rozprávanie o mojej ceste k dospelosti' }),
  t(2011, 'diskusny-prispevok', 'Blogeri sú obrazom spoločnosti'),

  t(2012, 'uvaha', 'Výdobytky modernej techniky – ovládame my ich alebo ony nás?'),
  t(2012, 'charakteristika', 'Nemám ju rád/rada, ale musím s ňou žiť', { spec: 'Charakteristika personifikovanej vlastnosti' }),
  t(2012, 'beletrizovany-zivotopis', 'Som jednoducho smoliar', { spec: 'Fiktívny beletrizovaný životopis' }),
  t(2012, 'diskusny-prispevok', '„Budeme sa prepadať od hanby, keď si spomenieme, na čo sme sa pozerali, čo sme čítali a čo sme počúvali.“', {
    author: 'Boris Filan',
    spec: 'Diskusný príspevok o súčasných hodnotách'
  }),

  t(2013, 'uvaha', 'Sociálna internetová sieť – náš sluha či pán?'),
  t(2013, 'rozpravanie', 'I malé meškanie môže spôsobiť veľké problémy'),
  t(2013, 'diskusny-prispevok', '„Kto teba, pes, smie nazvať psom? Ty si môj priateľ milý. Dobre by bolo, keby ťa dejiny pochopili.“', {
    author: 'Ján Smrek',
    spec: 'Diskusný príspevok o spolužití človeka a zvieraťa'
  }),
  t(2013, 'slavnostny-prejav', 'Slávnostný prejav pri príležitosti 100. výročia založenia knižnice'),

  t(2014, 'uvaha', '„Veľkosť každého človeka sa meria jeho stratou.“', { author: 'Alfred de Vigny', spec: 'Úvaha o (ne)schopnosti človeka uvedomiť si vlastné šťastie' }),
  t(2014, 'rozpravanie', 'Ten pohľad mi vyrazil dych'),
  t(2014, 'diskusny-prispevok', 'Umenie dokáže človeka zmeniť'),
  t(2014, 'slavnostny-prejav', 'Základným predpokladom ľudského spolunažívania je komunikácia', { spec: 'Prejav pri príležitosti otvorenia školského týždňa tolerancie' }),

  t(2015, 'uvaha', '„Zármutok znesieš sám, ale o radosť sa musíš podeliť.“', { author: 'Elbert Hubbard' }),
  t(2015, 'umelecky-opis', 'Pohľad z okna vlaku'),
  t(2015, 'rozpravanie', 'Čo keby sme ušli?'),
  t(2015, 'vyklad', 'Znaky tvorby spisovateľov ľubovoľného literárneho obdobia'),

  t(2016, 'uvaha', '„Najjasnejšie pojmy sú často zatemňované zložitými úvahami.“', { author: 'Cicero' }),
  t(2016, 'charakteristika', 'To najkrajšie bolo v nej/v ňom ukryté…'),
  t(2016, 'rozpravanie', 'Dnes som mal/mala rande so svojím mestom…'),
  t(2016, 'diskusny-prispevok', 'Jeden deň bez zlozvyku/zlozvykov!'),

  t(2017, 'diskusny-prispevok', 'Zmeny v spoločnosti sú rýchlejšie než naša schopnosť adaptovať sa na ne'),
  t(2017, 'uvaha', '„Načo je knižka,“ pomyslela si Alica, „keď nemá ani obrázky…?“', { author: 'Lewis Carroll, Alica v krajine zázrakov' }),
  t(2017, 'slavnostny-prejav', 'Začiatok či koniec?', { spec: 'Slávnostný príhovor pri príležitosti ukončenia stredoškolského štúdia' }),
  t(2017, 'rozpravanie', 'Vtedy som si uvedomil/uvedomila, že na to mám'),

  t(2018, 'diskusny-prispevok', '„A načo je sloboda, ak nie na to, aby si sa angažoval?“', { author: 'J. P. Sartre' }),
  t(2018, 'uvaha', 'Spoločnosť sa mení, ale ľudská závisť a radosť zostávajú stále rovnaké'),
  t(2018, 'slavnostny-prejav', 'Učiteľ ti môže otvoriť dvere, ale vstúpiť do nich musíš ty sám', { spec: 'Slávnostný príhovor pri príležitosti ukončenia stredoškolského štúdia' }),
  t(2018, 'rozpravanie', 'Priateľ mi podal ruku v pravý čas'),

  t(2019, 'diskusny-prispevok', 'Základný zdravotnícky výcvik by mal byť povinný'),
  t(2019, 'umelecky-opis', 'Môj mikrosvet', { spec: 'Umelecký opis miesta, kde žijem' }),
  t(2019, 'uvaha', 'Je smutné, že obeťami podvodníkov sa stávajú tí najzraniteľnejší'),
  t(2019, 'rozpravanie', 'Ten odkaz prišiel v pravej chvíli'),

  t(2022, 'umelecky-opis', 'Čaro roviny'),
  t(2022, 'diskusny-prispevok', '„Príroda je stále nekonečne populárnejšia než dejiny.“', { author: 'Karel Čapek' }),
  t(2022, 'uvaha', 'Kde je vlastne náš domov?'),
  t(2022, 'beletrizovany-zivotopis', 'Som Ofélia', { spec: 'Beletrizovaný životopis literárnej postavy z diela Hamlet od W. Shakespeara' }),

  t(2023, 'umelecky-opis', 'V zime na vidieku'),
  t(2023, 'vyklad', 'Bezpečne na sociálnych sieťach'),
  t(2023, 'rozpravanie', 'Hľadel/Hľadela som ako vyoraná myš!'),
  t(2023, 'diskusny-prispevok', 'Má zmysel kandidovať do školského parlamentu?'),

  t(2024, 'charakteristika', 'Aký pán, taký pes'),
  t(2024, 'rozpravanie', 'Vtedy som si pripadal/pripadala ako v počítačovej hre'),
  t(2024, 'uvaha', 'Dobro a zlo sú v každom človeku, voľba je však na tebe…'),
  t(2024, 'slavnostny-prejav', 'Prejav študenta/študentky pri príležitosti návštevy partnerskej školy v inom regióne'),

  t(2025, 'beletrizovany-zivotopis', 'Od detstva žijem na inej planéte'),
  t(2025, 'slavnostny-prejav', '„Príklad jeden, ktorý je opravdivý, platí viac než tisíc rýchle zapadajúcich slov.“', { author: 'Ľudovít Štúr', spec: 'Slávnostný prejav pred udeľovaním vyznamenaní' }),
  t(2025, 'rozpravanie', 'Urobil/Urobila by som to znovu'),
  t(2025, 'uvaha', 'Ako nájsť rovnováhu medzi online a offline svetom?'),

  t(2026, 'charakteristika', 'Človek, ktorý ma urobil lepším/lepšou'),
  t(2026, 'diskusny-prispevok', 'Sú postavy v počítačových hrách porovnateľné s literárnymi postavami?'),
  t(2026, 'rozpravanie', 'Už viem, čo je to charita'),
  t(2026, 'uvaha', '„Nie je šťastie nad druhými sa vypínať a druhých utláčať, šťastie je s druhými žiť – rovne vzdelanými, rovne šťastnými, rovne spokojnými.“', {
    author: 'Ľudovít Štúr (upravené)'
  })
];

export const temyPre = (slug: SlohSlug) => temy.filter((x) => x.slug === slug);

// ---------------------------------------------------------------- spoločné hodnotenie (NIVaM 2026)
export const CRITERIA_COMMON = {
  vonkajsia: [
    'prepísanie práce z konceptu do čistopisu',
    'čitateľnosť – zreteľné veľké a malé písmená, dôsledná diakritika',
    'zreteľné grafické členenie odsekov',
    'čistota textu – bez škrtania',
    'dodržiavanie okrajov'
  ],
  pravopis: [
    { range: '0 – 2 chyby', points: 4 },
    { range: '3 – 6 chýb', points: 3 },
    { range: '7 – 10 chýb', points: 2 },
    { range: '11 – 14 chýb', points: 1 },
    { range: '15 a viac', points: 0 }
  ],
  dojem: ['nelogické názory', 'protispoločenské postoje', 'antihumánne a neetické názory', 'názory propagujúce poškodzovanie ľudského zdravia'],
  minWords: 200
};

const JAZYK_ZAKLAD = [
  'správne využitie slovných druhov typických pre daný slohový postup, resp. útvar',
  'syntaktická a morfologická správnosť použitých jazykových prostriedkov'
];

// ---------------------------------------------------------------- útvary
export const slohoveUtvary: SlohovyUtvar[] = [
  {
    slug: 'uvaha',
    name: 'Úvaha',
    short: 'Zamyslenie nad problémom, vlastný postoj a argumenty.',
    lead: 'Najnáročnejší slohový útvar. Prejavuje sa v ňom tvoje myslenie, zrelosť, pohľad na svet, vzdelanie aj skúsenosti. Nezhromažďuješ fakty – posudzuješ známe javy z nového uhla a zaujímaš k nim osobný postoj.',
    facts: [
      { label: 'Slohový postup', value: 'výkladový (úvahový)' },
      { label: 'Štýl', value: 'publicistický, umelecký, náučný' },
      { label: 'Osoba', value: '1. os. sg. alebo pl.' }
    ],
    sections: [
      {
        id: 'znaky',
        title: 'Čo je úvaha',
        list: [
          'Autor sa zamýšľa nad závažnými filozofickými, spoločenskými, vedeckými alebo umeleckými otázkami.',
          'Nezhromažďuje ani nerozoberá fakty, ale posudzuje <strong>známe javy z nového zorného uhla</strong> – odkrýva skryté významy a vyvodzuje všeobecné závery.',
          'Môže pôsobiť na city, presviedčať a formovať mienku čitateľa. Neopiera sa len o fakty, ale aj o vlastné životné skúsenosti, zážitky, svoje názory či názory iných ľudí.',
          'Zaujíma <strong>osobný postoj</strong>, nepoučuje. Často necháva nastolené otázky otvorené a ponecháva na čitateľovi, aby ich sám doriešil – tým ho nenásilne a pôsobivo ovplyvňuje.'
        ]
      },
      {
        id: 'styly',
        title: 'Úvaha v jazykových štýloch',
        cards: [
          { term: 'Hovorový štýl', text: 'jednoduché krátke zamyslenie, príslovie' },
          { term: 'Umelecký štýl', text: 'uvažovanie rozprávača alebo postáv, úvahová (reflexívna) lyrika' },
          { term: 'Náučný štýl', text: 'recenzia, diskusný príspevok, odborné a populárno-náučné články' },
          { term: 'Publicistický štýl', text: 'úvodník, komentár, glosa, recenzia, stĺpček' }
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Úvod', text: 'Vychádzaš z istých faktov, ktoré jasne pomenuješ, alebo zo všeobecného problému. Na začiatku môže stáť otázka.' },
          { term: 'Jadro', text: 'Skúmané fakty hodnotíš, zaujímaš k nim postoj, rozvíjaš vlastné myšlienky.' },
          { term: 'Záver', text: 'Dokazuješ svoje tvrdenia, argumentuješ, vyvodzuješ závery alebo necháš problém otvorený.' }
        ],
        paras: ['Úvaha zachováva obsahové členenie na úvod, jadro a záver, no hranice medzi nimi nie sú výrazné. <strong>Má toľko odsekov, koľko má myšlienkových celkov.</strong>']
      },
      {
        id: 'jazyk',
        title: 'Jazyk úvahy',
        lead: 'Úvaha je založená na uvažovaní a premýšľaní, preto kladie veľké nároky na presnosť vyjadrovania. Musíš vedieť javy a problémy pomenovať, odlíšiť ich medzi sebou, vystihnúť charakteristické znaky a výstižne ich posúdiť.',
        cards: [
          {
            term: 'Hodnotiace výrazy',
            text: 'podstatné mená, prídavné mená, príslovky a slovesá s hodnotiacim významom',
            example: 'úpadok, vzostup, pád, kríza, kult · jedinečný, absurdný, neúprosný · dôkladne, povrchne, zbabelo · oceniť, zaujať, očariť'
          },
          { term: 'Citovo neutrálne slová', text: 'základná bezpríznaková vrstva slovnej zásoby, pri ktorej vyniknú hodnotiace a príznakové výrazy podľa témy úvahy' },
          {
            term: 'Expresívne výrazy',
            text: 'štylisticky príznakové slová s kladným alebo záporným citovým zafarbením (v priamom aj prenesenom zmysle) a slangové slová',
            example: 'pajzel (prenesene podnik či byt pod úrovňou) · nervák, solina'
          },
          {
            term: 'Archaizmy',
            text: 'zastarané slová, ktoré dnes nahrádzame novšími výrazmi – zámerne vyvolávajú emotívnu spätosť s obdobím, o ktorom je reč',
            example: 'rok meruôsmy (revolučný rok), švec (obuvník)'
          },
          {
            term: 'Historizmy',
            text: 'označenia predmetov alebo dejov vyradené z aktuálneho slovníka, pretože sa už v bežnom živote nepoužívajú',
            example: 'pltnica (cesta pltníka plťou), mušketier, zbojník'
          },
          {
            term: 'Neologizmy',
            text: 'nové slová pomenúvajúce nové predmety, javy a úkony',
            example: 'lízing (strednodobý až dlhodobý prenájom), ombudsman (ochranca ľudských práv a slobôd)'
          }
        ]
      },
      {
        id: 'vety',
        title: 'Vetná stavba',
        list: [
          'Základom dobrej úvahy je presné vyjadrovanie <strong>príčinných vzťahov a logických súvislostí</strong> – používajú sa vety dôvodové, podmienkové, účelové, prípustkové a dôsledkové.',
          'Kontakt s čitateľom nadviažeš a udržíš zvolacími, rozkazovacími a opytovacími vetami – využiť môžeš <strong>rozvažovacie otázky</strong> (uvažuješ a hľadáš odpoveď) aj <strong>rečnícke otázky</strong>.',
          '<strong>Rečnícka otázka</strong> pôsobí sugestívne a dôrazne, nečaká odpoveď – obracia sa priamo na čitateľa ako výzva či apel: <em>Bolo mu to treba?</em> (Jégé) · <em>Naozaj chceme, aby vládli u nás drogy a kriminalita?</em>',
          'Striedaj jednočlenné a dvojčlenné vety, krátke a dlhé vety, rôznu modálnosť a dbaj na správne väzby slovies a pádové koncovky.'
        ]
      }
    ],
    tips: [
      'Reaguj na <strong>všetky kľúčové slová</strong> v zadaní – ak je téma citát, vysvetli ho a vráť sa k nemu aj v závere.',
      'Píš z pohľadu dnešného človeka (aktualizácia) a používaj 1. osobu – úvaha je subjektívna.',
      'Nemoralizuj a nepoučuj. Otázky, ktoré nastolíš, môžu ostať otvorené.',
      'Vyhýbaj sa frázam. Jeden vlastný, konkrétny príklad presvedčí viac ako tri všeobecné.'
    ],
    sample: {
      title: 'Sociálna internetová sieť – náš sluha či pán?',
      note: 'Ukážka žiackej práce z prezentácie (3. ročník, SOŠ podnikania Trenčín, šk. rok 2013/2014; jazykovo a štylisticky upravené). Téma maturity 2013.',
      paras: [
        'Dokážeme si ešte predstaviť bežný deň bez jediného pohľadu na obrazovku a bez kontroly nových správ na sociálnej sieti? Kde leží neviditeľná hranica medzi chvíľou, keď nám virtuálny svet poslušne slúži, a okamihom, keď nad naším časom potichu preberá moc?',
        'Sociálne siete sa v priebehu jedinej generácie stali neodmysliteľnou súčasťou nášho súkromného, školského i pracovného života. Sprevádzajú nás od ranného prebudenia až po večerné zaspávanie – doma, v autobuse aj cez školské prestávky. To, čo kedysi vzniklo ako nevinný nástroj na udržiavanie kontaktu so spolužiakmi, dnes výrazne formuje naše názory, náladu aj predstavu o svete.',
        'Niet pochýb o tom, že v rozumných rukách dokáže byť sociálna sieť výborným sluhom. V priebehu niekoľkých sekúnd nás spojí s blízkymi na opačnom konci sveta, pripomenie dôležitú udalosť v triede alebo pomôže zdieľať študijné materiály. Pre hanblivejších rovesníkov býva dokonca prvým mostom k zoznámeniu, ktorý by zoči-voči len ťažko prekonali.',
        'Odvrátenej tvári tohto pomocníka však čelíme vtedy, keď sa z nástroja stane nenápadný pán nášho voľného času. Namiesto živých rozhovorov vonku s kamarátmi zbierame na profiloch stovky virtuálnych priateľov, o ktorých skutočných radostiach či trápeniach takmer nič netušíme. Hodiny strávené bezcieľnym posúvaním príspevkov oberajú mladých ľudí o prirodzený pohyb, spánok aj sústredenie. Neraz aj rodičia v snahe dopriať si chvíľu ticha radšej vložia deťom do rúk tablet či telefón, než aby ich vypravili na ihrisko medzi rovesníkov.',
        'Keď sa náš pohľad čoraz častejšie upiera len do rozsvieteného displeja, v domácej knižnici zapadajú prachom neprečítané knihy a spolu s nimi sa vytráca aj pokojné sústredenie a blízkosť skutočných stretnutí. Sociálna sieť sama osebe nie je ani dobrá, ani zlá – len verne odráža mieru, akú jej vo svojom živote dovolíme. Ostane naším užitočným sluhom, alebo sa raz obzrieme späť a spýtame sa sami seba, kedy sme jej dobrovoľne odovzdali kľúče od vlastného času?'
      ]
    },
    checklist: [
      'Úvod nastoľuje problém alebo otázku z témy.',
      'Mám vlastný postoj a vyjadrujem ho v 1. osobe.',
      'Javy hodnotím z pohľadu dnešného človeka.',
      'Odseky zodpovedajú myšlienkovým celkom.',
      'Použil/a som rečnícke otázky a rôzne typy viet.',
      'Vyhol/Vyhla som sa frázam a moralizovaniu.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'aktualizácia – pohľad dnešného človeka', 'hodnotiace prvky primerané veku', 'subjektívnosť'],
      kompozicia: ['výkladový (úvahový) slohový postup', 'nadväznosť a logickosť textu', 'členenie textu'],
      jazyk: [...JAZYK_ZAKLAD, 'syntaktické prostriedky – jednočlenné vety, príčinno-následkové vety, slovosled, rôzna modálnosť a dĺžka viet'],
      styl: ['tvorivé využitie lexiky všetkých štýlov (vyšší, stredný, nižší)', 'subjektívnosť – 1. os. sg. alebo 1. os. pl.', 'originálnosť, nie frázovitosť']
    }
  },

  {
    slug: 'charakteristika',
    name: 'Charakteristika osoby',
    short: 'Vonkajšie aj vnútorné vlastnosti, priama aj nepriama.',
    lead: 'Charakteristika (z gréc. <em>charaktér</em> – vryté znamenie) je opis vlastností alebo podstatných znakov osoby, veci či javu. Okrem typických vonkajších znakov sa sústreďuje najmä na povahové, morálne a vnútorné vlastnosti osoby (prípadne zvieraťa, prostredia či personifikovanej vlastnosti).',
    facts: [
      { label: 'Slohový postup', value: 'opisný' },
      { label: 'Štýl', value: 'umelecký, náučný, hovorový' },
      { label: 'Patrí k', value: 'opisu – ako samostatný druh' }
    ],
    sections: [
      {
        id: 'znaky',
        title: 'Hlavné znaky',
        list: [
          'Pričleňuje sa k opisu ako jeho samostatný druh – zachytáva podstatné a príznačné znaky osoby, zvieraťa, prostredia, veci alebo javu.',
          '<strong>Vonkajšia charakteristika</strong> zachytáva výzor, chôdzu, oblečenie, mimiku a gestikuláciu.',
          '<strong>Vnútorná charakteristika</strong> zachytáva povahové, duševné a morálne vlastnosti, postoje a správanie.',
          'Môže obsahovať hodnotenie, ale <strong>nemá byť súdom</strong>. Často sa završuje zamyslením či úvahou.'
        ]
      },
      {
        id: 'druhy',
        title: 'Druhy charakteristiky',
        cards: [
          { term: 'Priama', text: 'vlastnosti postavy vymenúva priamo pomocou prídavných a podstatných mien', example: 'je čestný, kamarátsky, svedomitý…' },
          { term: 'Nepriama', text: 'vlastnosť vyplynie z konania a správania postavy v situáciách', example: 'nepovieš, že je lenivá – v deji iba polihuje a nič neurobí' },
          { term: 'Vonkajšia', text: 'zameraná na opis výrazných fyzických čŕt, postavy, chôdze a oblečenia' },
          { term: 'Vnútorná', text: 'zameraná na opis povahových, morálnych a duševných vlastností' },
          { term: 'Subjektívna a objektívna', text: 'autor využíva vlastnosti aj na osobné hodnotenie / nezainteresovane ich vymenúva' },
          { term: 'Statická a vývojová', text: 'povaha je hotová, ucelená a nemenná / sleduje sa vývin postavy v priebehu deja' },
          { term: 'Individuálna a skupinová', text: 'charakteristika jednej osoby / celej skupiny (napr. hudobnej kapely, triedy)' },
          { term: 'Porovnávacia', text: 'charakterizuje a porovnáva najmenej dve postavy alebo skupiny (zhody a protiklady)' },
          { term: 'Autocharakteristika', text: 'charakteristika seba samého – autor s odstupom aj sebakriticky hodnotí vlastný výzor, povahu, silné a slabé stránky' },
          { term: 'Karikatúra', text: 'zámerné zveličenie niektorej výraznej vonkajšej črty alebo povahovej vlastnosti s humorným či satirickým zámerom' }
        ]
      },
      {
        id: 'crty',
        title: 'Čo si na osobe všímať',
        cards: [
          {
            term: 'Temperament',
            text: 'reaguje na podnety pokojne, uvážlivo, hĺbavo – alebo skôr popudlivo, splašene, povrchne? Sangvinik, cholerik, flegmatik, melancholik, introvert či extrovert?'
          },
          {
            term: 'Vzťah k ľuďom',
            text: 'je srdečná, ochotná, obetavá, úprimná, vnímavá, pozorná – alebo skôr škodoradostná, neznášanlivá, hádavá, podozrievavá?'
          },
          {
            term: 'Vzťah k sebe',
            text: 'je skromná, nenáročná, vyrovnaná, zdravo ctižiadostivá – alebo pyšná, povýšenecká, domýšľavá? Je kritická aj sebakritická, dokáže priznať omyl a ospravedlniť sa, alebo je zaťatá, tvrdohlavá, vzťahovačná? Je čistotná a upravená, alebo zanedbáva zovňajšok?'
          },
          {
            term: 'Záujmy a schopnosti',
            text: 'zaujíma sa o šport, umenie, domáce práce, prírodné vedy, cudzie jazyky či hudbu? Venuje sa záujmom trvalo, alebo ich často strieda? Je plná elánu a dokáže strhnúť ostatných? V čom vyniká a v čom zaostáva?'
          },
          {
            term: 'Vzťah k práci a povinnostiam',
            text: 'ako prospieva v škole a aké výsledky dosahuje v práci? Pracuje samostatne a tvorivo, má organizačné schopnosti, alebo ju treba usmerňovať a kontrolovať? Je usilovná, dôsledná, snaživá, trpezlivá, sústredená – alebo lenivá, nesústavná, netrpezlivá, neporiadna?'
          },
          {
            term: 'Ďalšie vlastnosti',
            text: 'je optimista alebo pesimista? Nadšená, odvážna, plná elánu, alebo večne nahnevaná? Veriaca, neveriaca, pochybujúca? Nesie následky za svoje rozhodnutia, alebo sa večne sťažuje a zvaľuje chyby na iných?'
          }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk charakteristiky',
        list: [
          'Slovník charakteristiky je všeobecne zrozumiteľný.',
          'Prevládajú <strong>prídavné mená s hodnotiacim významom</strong> a podstatné mená, pri nepriamej charakteristike aj dejové slovesá: <em>Nikdy som nevidela brata plakať. Babička sa pri každých správach trasie od strachu.</em>',
          'Často sa uplatňujú <strong>citovo zafarbené slová</strong>: <em>Bol to dobrý človek. Miška bola taký mamičkin maznáčik.</em>',
          'Synonymá podčiarkujú charakterizovanú vlastnosť, antonymá a kontrast ju môžu zdramatizovať: <em>Keď bolo treba v reštaurácii zaplatiť za obed, okamžite bol z neho chudobný boháč: nikdy nemal pri sebe dosť peňazí.</em>'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Úvod', text: 'Predstav osobu a svoj vzťah k nej – prečo práve ona.' },
          { term: 'Jadro', text: 'Vychádzaj z opisu, ktorý zvoľna prechádza do charakteristiky. Spájaj povahu človeka so záujmami, rodinným zázemím, prostredím, v ktorom žije, a vzťahmi k ľuďom.' },
          { term: 'Záver', text: 'Všetky poznatky postupne ulož do jednotiaceho celkového pohľadu. Môžeš ho zavŕšiť hodnotením alebo zamyslením (úvahou).' }
        ]
      },
      {
        id: 'zadania',
        title: 'Špecifické maturitné zadania',
        cards: [
          { term: 'Blízka osoba z okolia', text: 'vychádzaj z osobnej skúsenosti, no vyhni sa jednostrannému idealizovaniu; povahu ukáž na drobných každodenných situáciách (napr. 2026: Človek, ktorý ma urobil lepším/lepšou)' },
          { term: 'Literárna alebo filmová postava', text: 'drž sa reálií diela a autorovho zámeru, prípadne typové črty hrdinu prenes do súčasnosti (napr. 2008: Don Quijote 21. storočia, 2010: Môj obľúbený hrdina)' },
          { term: 'Personifikovaná vlastnosť', text: 'abstraktnú vlastnosť (lenivosť, tréma, zábudlivosť) premeň na živú bytosť či „spolubývajúcu“ s vlastným výzorom, zvykmi a prejavmi (napr. 2012: Nemám ju rád/rada, ale musím s ňou žiť)' },
          { term: 'Porovnávacia dvojica', text: 'striedavo alebo zrkadlovo porovnávaj zhodné a protikladné črty dvoch postáv či človeka a jeho domáceho miláčika (napr. 2024: Aký pán, taký pes)' }
        ]
      }
    ],
    tips: [
      'Komplexnosť: ukáž osobu z viacerých uhlov – vzťah k sebe, k ľuďom, k práci.',
      'Kombinuj priamu a nepriamu charakteristiku. Krátka príhoda povie o povahe viac ako zoznam vlastností.',
      'Ak téma žiada charakteristiku personifikovanej vlastnosti alebo zvieraťa, drž sa jej – nepíš o inom.',
      'Hodnoť, ale nesúď.'
    ],
    sample: {
      title: 'Sme naozaj brat a sestra?',
      note: 'Ukážka porovnávacej charakteristiky z prezentácie – študentská práca (zdroj: zones.sk, cit. 4. 3. 2014; jazykovo a štylisticky upravené).',
      paras: [
        'Túto otázku som si položila už veľakrát. Hoci to máme čierne na bielom, neraz s úsmevom pochybujem o tom, že sme naozaj súrodenci.',
        'Navonok sme dva veľké protiklady. Ja – čierna – som od útleho detstva živá tmavovláska s olivovozelenými očami a výraznou gestikuláciou. On – biela – je pokojný modrooký blondín s bledou pokožkou a takmer nehybnou tvárou. Len čo však začneme rozprávať, prebudí sa v nás rovnaký zmysel pre humor – dopĺňame si vety, smejeme sa na tých istých maličkostiach a medzi priateľmi ani jeden z nás nepokazí zábavu. V prístupe k povinnostiam sa však naše cesty znova rozchádzajú. Obaja síce občas odkladáme úlohy na poslednú chvíľu, no kým vo vážnej chvíli beriem zodpovednosť na seba a svoje sľuby dodržím, Ivo nad nimi len bezstarostne mávne rukou.',
        'Po vstupe do jeho kráľovstva nadobudnete dojem, že sa cezeň prehnala víchrica. Môj brat sa totiž riadi heslom: „Poriadok je len pre hlupákov. Inteligentný človek sa vyzná v chaose.“ Hneď za stenou sa však otvára presný opak – moja izba, takmer vždy starostlivo uprataná a farebne zladená. Občas sa mi zdá, že Ivo sa narodil na to, aby neporiadok vyrábal, a ja zas na to, aby som ho po ňom trpezlivo odpratávala. Líši sa aj náš vzťah k peniazom: kým ja míňam vreckové na knihy a kozmetiku, on si potrpí na to, aby mal vždy najnovší mobil a tenisky všetkých možných farieb, ktoré aj tak po mesiaci odloží do kúta.',
        'Rovnako odlišné sú aj naše záľuby. Ivo je odjakživa technický typ – hodiny dokáže sedieť nad počítačmi či motormi áut, no treba mu uznať, že kedykoľvek sa mne alebo kamarátom pokazí notebook či bicykel, bez slova pomôže a všetko opraví. Mňa to, naopak, ťahá k športu a umeniu. Rozchádzajú sa aj naše predstavy o budúcnosti: hoci je na veľké plány možno priskoro, ja už dnes premýšľam, kam pôjdem študovať, a cieľavedome si idem za svojím.',
        'Môj brat zatiaľ žije výlučne prítomnosťou, v ktorej nič nie je neprekonateľným problémom a starosti zajtrajška v nej nemajú miesto. V mnohom sme ako deň a noc, v niečom zas z jedného cesta – a práve táto pestrá zmes protikladov drží našu súrodeneckú lásku pohromade.'
      ]
    },
    checklist: [
      'Opisujem vonkajšie aj vnútorné vlastnosti.',
      'Ukazujem osobu z viacerých uhlov – vzťah k sebe, k ľuďom, k práci.',
      'Kombinujem priamu a nepriamu charakteristiku.',
      'Držím sa zvoleného kompozičného plánu.',
      'Používam hodnotiace prídavné mená a synonymá.',
      'Hodnotím, ale nesúdim.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'enumerácia vlastností osoby vo vzťahu k sebe, k okoliu, k práci', 'komplexná charakteristika z viacerých uhlov pohľadu'],
      kompozicia: ['opisný slohový postup (dodržanie žánrovej formy)', 'dodržanie zvoleného kompozičného plánu'],
      jazyk: [...JAZYK_ZAKLAD, 'vety s viacnásobným vetným členom', 'prídavné mená, príslovky, synonymá'],
      styl: ['tvorivé využitie lexiky všetkých štýlov (vyšší, stredný, nižší)', 'štylistické prostriedky priamej a nepriamej charakteristiky']
    }
  },

  {
    slug: 'umelecky-opis',
    name: 'Umelecký opis',
    short: 'Subjektívny obraz miesta, osoby či veci cez zmysly.',
    lead: 'Umelecký opis nie je presný prenos videného, ale jeho premena cez tvoje vnímanie. Je náladový – môže vyvolať dojem pokoja, strachu, hrôzy či šťastia. Objekt často opisuje nepriamo, cez básnické obrazy.',
    facts: [
      { label: 'Slohový postup', value: 'opisný (dynamický)' },
      { label: 'Štýl', value: 'umelecký' },
      { label: 'Kľúč', value: 'zmysly a obrazné pomenovania' }
    ],
    sections: [
      {
        id: 'postup',
        title: 'Opisný slohový postup',
        list: [
          'Sústreďuje sa na zachytenie vlastností osôb, predmetov a javov, prípadne zachytáva aj následnosť činností. Vlastnosti vymenúva, ale nevysvetľuje.',
          'Poradie komponentov sa môže meniť – môžeš opísať najprv park, potom budovy na námestí, alebo presne naopak (výnimkou je <strong>návod, recept a opis pracovného postupu</strong>, kde je poradie krokov záväzné).',
          'Základom umeleckého opisu nie je mechanický prenos videného, ale transformácia na základe tvojho vnímania – vyskytuje sa v literatúre a v subjektívne zafarbených prejavoch.'
        ]
      },
      {
        id: 'druhy',
        title: 'Druhy opisu',
        cards: [
          { term: 'Statický opis', text: 'opisuje nehybné (statické) predmety, zvyčajne odborne; využíva veľa podstatných a prídavných mien' },
          { term: 'Dynamický opis', text: 'dokáže „rozpohybovať“ aj statický predmet – väčším počtom slovies, personifikáciou a metaforou; zvyčajne umelecký opis' },
          { term: 'Jednoduchý opis', text: 'vyskytuje sa v hovorovom štýle a bežnej komunikácii, napr. opis pekného kabáta vo výklade' },
          { term: 'Odborný opis', text: 'súčasť výkladu v náučnom štýle; zovretejší, veľa mien a málo slovies, odborné termíny, trpný rod, nákresy, tabuľky a schémy' },
          {
            term: 'Opis pracovného postupu',
            text: 'má znaky odborného opisu (návod, recept); obracia sa na konkrétneho adresáta a jeho časti nemožno svojvoľne vymieňať',
            example: '1. os. pl. (pridáme soľ) · 2. os. pl. rozkaz. sp. (pridajte soľ)'
          },
          {
            term: 'Umelecký (lyrický) opis',
            text: 'využíva prostriedky lyriky; výrazné miesto má v poézii (prírodná lyrika) a realistickej próze, v rozprávaní spomaľuje a brzdí dej (naturizmus, lyrizovaná próza)'
          }
        ]
      },
      {
        id: 'prostriedky',
        title: 'Výrazové prostriedky',
        cards: [
          {
            term: 'Básnické prirovnanie',
            text: 'menej známy alebo menej výrazný objekt sa osvetlí prirovnaním k známejšiemu pomocou spojok ako, než, sťa',
            example: 'rýchly ako blesk, vysoký ako topoľ'
          },
          {
            term: 'Epiteton constans (stály)',
            text: 'básnický prívlastok (z gréc. pridaný) s citovým významom, ktorý tvorí s podstatným menom ustálené, automatické spojenie',
            example: 'biele húsky, vysoká Poľana, zelená trávička, švárny šuhaj'
          },
          {
            term: 'Epiteton ornans (ozdobný)',
            text: 'náročnejší, neobvyklý prívlastok – originálne a prekvapivé spojenie prídavného a podstatného mena, ktoré dráždi fantáziu',
            example: 'Živý bič, pásikavé more, smaragdová tráva'
          },
          {
            term: 'Metafora',
            text: 'nepriame obrazné pomenovanie (z gréc. prenesenie) založené na vonkajšej podobnosti dvoch javov',
            example: 'pršalo lístie, z očí jej tiekli potoky sĺz, jar života'
          },
          {
            term: 'Metonymia',
            text: 'nepriame obrazné pomenovanie (z gréc. zámena mena menom) na základe vnútornej alebo vecnej súvislosti',
            example: 'čítam Kukučína (jeho dielo), počúvam Rytmusa (jeho hudbu), pijem Kozla'
          },
          {
            term: 'Synekdocha',
            text: 'druh metonymie založený na vzťahu časti k celku alebo celku za časť',
            example: 'prišlo tam celé mesto, Žilina vyhrala, ulička drieme'
          },
          {
            term: 'Personifikácia',
            text: 'zosobnenie (z lat. persona + facere) – oživenie neživých vecí a pripisovanie ľudských vlastností',
            example: 'mesiačik sa usmieval, les plakal nad tou stratou, hory zastonali'
          },
          {
            term: 'Hyperbola',
            text: 'štylistická ozdoba založená na zámernom zveličovaní a preháňaní (z gréc. zveličenie)',
            example: 'sto rokov čakám na autobus, už som ti to tisíckrát hovorila, božský Goethe!'
          },
          {
            term: 'Litotes',
            text: 'básnické zjemnenie (z gréc. jednoduchosť, zdržanlivosť) – popretie protikladnej vlastnosti, časté aj z taktnosti v bežnom živote',
            example: 'nie je najmúdrejší (namiesto hlúpy), nemladá (namiesto stará)'
          },
          {
            term: 'Eufemizmus',
            text: 'snaha povedať nepríjemnú alebo drsnú skutočnosť miernejším spôsobom (z gréc. dobre hovorím), aj cez zdrobneniny',
            example: 'zaspal naveky (namiesto zomrel), Ty môj truľko! (namiesto truľo)'
          }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk opisu',
        list: [
          'Základom je presné, vecné a výstižné pomenovanie – uplatňujú sa najmä <strong>podstatné mená</strong>.',
          'Vlastnosti zachytávajú <strong>prídavné mená</strong>, v dynamickom opise vo väčšej miere <strong>slovesá</strong>.',
          'Keďže objekt opisujeme v priestorových a iných vzťahoch, dôležité sú <strong>príslovky, predložky a spojky</strong>.',
          'V náučnom a odbornom opise sa vyskytujú aj <strong>číslovky</strong> (presný počet a výpočet častí objektu).',
          'V umeleckom opise zapoj všetky zmysly – farby, zvuky, vône, chute, dotyky.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Celkový pohľad', text: 'Najprv priblíž, ako objekt celkovo vyzerá, ako zapadá do súvislostí, aké sú jeho miery či farba a akú náladu vyvoláva.' },
          { term: 'Jednotlivosti', text: 'Zvoľ miesto, odkiaľ sa začínaš pozerať, a postupuj sústavne: zhora dole, zdola hore, zľava doprava, spredu dozadu alebo od stredu smerom k obvodu.' },
          { term: 'Záverečný dojem', text: 'Vráť sa k celku a k pocitu, ktorý v tebe miesto alebo vec zanecháva.' }
        ]
      }
    ],
    tips: [
      'Nevymenúvaj ako v inventúre – vyber detaily, ktoré vytvárajú náladu.',
      'Drž sa zvoleného smeru pohľadu, aby čitateľ nestratil orientáciu.',
      'Opis nie je rozprávanie: dej nech je len náznakom, hlavné sú obrazy.',
      'Obrazné pomenovania používaj tvorivo – vlastné, nie otrepané.'
    ],
    sample: {
      title: 'Čaro Vianoc',
      note: 'Ukážka umeleckého opisu z prezentácie – študentská práca (zdroj: zones.sk, cit. 14. 3. 2014; jazykovo a kompozične upravené).',
      paras: [
        'S prvým vdýchnutím mrazivého vzduchu a nesmelou vločkou, ktorá sa tíško roztopí v dlani, prichádza do tichých ulíc čaro Vianoc. Na spiace mestečko sadá modrastý zimný súmrak a premieňa všedné chodníky na mäkký striebristý koberec. Tlmený jas pouličných lámp a sviatočne vyzdobených výkladov sa zrkadlí v čerstvom snehu i v očiach okoloidúcich. Všade navôkol vládne tichá, sviatočná nálada plná pokoja a očakávania.',
        'Nad strechami si už Severák hvízda svoju veternú koledu a roztopašne strháva deťom pletené čiapky. Na vyštípaných lícach im kvitne horúca červeň prebudená chladom a pod topánkami veselo vŕzga zamrznutý sneh. O kus ďalej, pod starým kamenným mostom, odpočívajú tmavé hĺbky potoka uzavreté v krehkej sklenenej škrupine ľadu, na ktorej sa ligocú posledné odlesky podvečera.',
        'Keď sa nad krajinou rozprestrie hmlistý závoj mliečnobielej chumelice, mrazivá obruč zimy zovrie celú ulicu do bieleho ticha. Uprostred hustého tanca vločiek však zrazu zažiari teplé jantárové svetielko v zarosenom okne rodinného domu. Mäkko presvitá cez čipku ľadových kvetov na skle, mámi uzimeného chodca a pozýva ho dnu, do bezpečia vyhriateho domova.',
        'Hneď za prahom vystrieda štípajúci mráz príjemné sálajúce teplo a vôňa domova. V kúte obývačky sa týči štíhla jedlička odetá do trblietavých ozdôb a drobných svetielok. Celou izbou sa nesie živicová vôňa čerstvého ihličia, ktorá splýva so sladkastou arómou škorice, klinčekov a čerstvo upečeného vanilkového pečiva. Na sviatočne prestretom stole sa mihá hravý plamienok sviečky a do rozžiarených detských tvárí vtláča výraz čistej, neskalenej radosti.',
        'Pod zelenou vetvičkou imela nad dverami sa na bielom obruse lesknú tenké vianočné oblátky so zlatistou kvapkou medu, ktorého opojná, sladká chuť sa pomaly rozplýva na jazyku. V tichu izby počuť len jemné praskanie vosku a pokojný dych blízkych zoskupených okolo stola. Zimný mráz ostal stáť za oknami – dnu kraľuje len mäkké svetlo, vôňa ihličia a hrejivé čaro vianočného večera.'
      ]
    },
    checklist: [
      'Začínam celkovým pohľadom a postupujem sústavne.',
      'Zapojil/a som viac zmyslov – farby, zvuky, vône.',
      'Použil/a som vlastné obrazné pomenovania.',
      'Opis vyvoláva náladu, nie je to inventúra.',
      'Text je subjektívny a emotívny.',
      'Neprešiel/Neprešla som do rozprávania.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'enumerácia zobrazovaných javov', 'subjektívnosť pohľadu na zobrazované javy'],
      kompozicia: ['opisný slohový postup (dodržanie žánrovej formy)', 'dodržanie zvoleného kompozičného plánu', 'logické členenie textu'],
      jazyk: [...JAZYK_ZAKLAD, 'vety s viacnásobným vetným členom', 'prídavné mená, príslovky, synonymá'],
      styl: ['pestrosť použitých jazykových prostriedkov', 'tvorivé využitie umeleckých jazykových prostriedkov', 'emocionálnosť']
    }
  },

  {
    slug: 'rozpravanie',
    name: 'Rozprávanie',
    short: 'Príbeh s dejovou líniou, napätím a priamou rečou.',
    lead: 'Najčastejšia forma ľudskej komunikácie a základ epických diel (rozprávok, povestí, poviedok či románov). Sústreďuješ sa na udalosť – zápletku, konflikt a jeho riešenie. Príbeh vykresľuješ ako jedinečný a neopakovateľný, no zároveň charakteristický pre isté typy ľudí, dobu či prostredie.',
    facts: [
      { label: 'Slohový postup', value: 'rozprávací' },
      { label: 'Štýl', value: 'umelecký' },
      { label: 'Musí mať', value: 'príbeh s pointou' }
    ],
    sections: [
      {
        id: 'druhy',
        title: 'Druhy rozprávania',
        lead: 'Spolu s opisom, charakteristikou a úvahou je rozprávanie základným kompozičným prostriedkom výstavby literárneho textu – nezachytáva len samotnú udalosť, ale aj prostredie, charaktery osôb, motívy ich konania a reč.',
        cards: [
          { term: 'Ústne', text: 'najstarší typ, predpokladá bezprostredný kontakt rozprávača a poslucháča; v literatúre priame rozprávanie v 1. os. sg.' },
          { term: 'Jednoduché', text: 'bežná komunikácia, rodinné prostredie a školská prax – vlastný príbeh so súvislou dejovou líniou bez rozsiahlych opisov a úvah' },
          { term: 'Komplexné', text: 'popri dejovej línii využíva aj opis, charakteristiku prostredia a postáv a prvky úvahy' },
          { term: 'Reprodukcia', text: 'prerozprávaný dej prečítanej knihy, videného filmu či divadelnej hry' }
        ]
      },
      {
        id: 'principy',
        title: 'Kompozičné princípy',
        lead: 'Umelecké rozprávanie sa nemusí rozvíjať iba v prirodzenej časovej následnosti – dôležité je, aby bolo kompozične prehľadne usporiadané.',
        cards: [
          {
            term: 'Chronologický princíp',
            text: 'najčastejší postup – udalosti nasledujú v tom slede, ako išli za sebou; dej sa vyvíja plynulo, vyplýva jedna udalosť z druhej a príbeh je prehľadný'
          },
          {
            term: 'Retrospektívny princíp',
            text: 'čitateľ už vie, ako sa príbeh skončil, no nevie, čo sa odohralo predtým (spomienky na minulosť). Kladie dôraz na hľadanie príčin udalosti či postojov postáv namiesto samotného napätia deja',
            example: 'film Forrest Gump (spomienky od detstva po dospelosť)'
          },
          {
            term: 'Reťazový princíp',
            text: 'na jednu udalosť nadväzujú mnohé nové s voľnejšími väzbami, ktoré spája najmä hlavný hrdina. Časté je tzv. falošné rozuzlenie – čitateľ má dojem, že sa príbeh už skončil, no rozprávanie bolo len prerušené'
          },
          {
            term: 'In medias res',
            text: 'rozprávanie bez úvodu – čitateľ sa priamo ocitá v centre deja či príhody'
          }
        ]
      },
      {
        id: 'kompozicia',
        title: 'Stavba umeleckého rozprávania',
        steps: [
          { term: 'Expozícia', text: 'Vykreslenie prostredia, doby, hlavných postáv a náznaky konfliktu.' },
          { term: 'Kolízia', text: 'Zápletka – odohrá sa udalosť, ktorá má rozhodujúci vplyv na dej; objaví sa konfliktná postava, dej začína gradovať a lexika je expresívnejšia.' },
          {
            term: 'Kríza',
            text: 'Vyvrcholenie deja a rozporov. Postava sa dostáva do konfliktu s inou postavou (medziľudské vzťahy), so spoločnosťou (spoločenský konflikt) alebo sama so sebou (osobný konflikt).'
          },
          { term: 'Peripetia', text: 'Nečakaný dejový zvrat – nepredpokladaná zmena situácie, dej sa zrýchľuje a smeruje k rozuzleniu konfliktu.' },
          { term: 'Rozuzlenie', text: 'Dobrý alebo zlý koniec a pointa (v antických dielach tragické riešenie konfliktu – katastrofa).' }
        ],
        paras: ['Pri jednoduchom rozprávaní stačí úvod, jadro a záver – udalosť zachytená v časovom slede.']
      },
      {
        id: 'rec',
        title: 'Reč rozprávača a reč postáv',
        cards: [
          {
            term: 'Autorská reč (reč rozprávača)',
            text: 'založená na epickej objektívnosti a nadhľade – ako objektív fotoaparátu či kamery: sleduje aj zblízka, ale neposudzuje. Zvyčajne má minulý čas a spisovnú podobu',
            example: 'Bača ho uistil, že všetko povie Jergušovi. (Ľ. Ondrejov)'
          },
          {
            term: 'Priama, nepriama a polopriama reč',
            text: '<strong>priama reč</strong> doslovne cituje výpoveď postavy v úvodzovkách; <strong>nepriama reč</strong> ju reprodukuje autorskou rečou vo vedľajšej vete so spojkou <em>že/aby</em>; <strong>polopriama reč</strong> zachytáva vnútorný monológ a pocity postavy v 3. osobe bez úvodzoviek',
            example: 'Nepriama: Povedala, že príde. · Polopriama: Zastal pri dverách. Vari naňho zabudli?'
          },
          {
            term: 'On-rozprávanie (er-forma)',
            text: 'rozprávačom príbehu je sám autor v 3. osobe',
            example: '„A ako lozil, ako sa mu beznádejne hlúpo cnelo, v neprístupnom kúte v jednej z čakární zazrel ženu. Prišla alebo odchádzala? Zaujala ho. Bola v čiernom…“'
          },
          {
            term: 'Ja-rozprávanie (ich-forma)',
            text: 'dej rozpráva priamo niektorá z postáv v 1. osobe',
            example: '„Ocitol som sa v spoločnosti seberovných. Oči mi hneď pritiahla čierna, dúhovomodrá hlava a sivý, svietivý pohľad. Len čo som sa jej dotkol pohľadom, zaklonila hlavu…“'
          },
          {
            term: 'Priama a uvádzacia reč',
            text: 'priama reč doslovne cituje postavy (vety sú kratšie než v autorskej reči, typicky v dialógu). Uvádzacia reč prejav uvádza, komentuje a dopĺňa pomocou slovies dicendi a sentiendi',
            example: 'slovesá dicendi: povedať, pošepnúť, zakričať, odvrknúť · sentiendi: myslieť, uvažovať, cítiť'
          },
          {
            term: 'Poloha uvádzacej vety',
            text: 'pred priamou rečou pôsobí pokojne a pripravuje čitateľa na výpoveď; za priamou rečou alebo uprostred nej pôsobí dynamicky a expresívne v citovo napätej komunikácii',
            example: 'Otec sa pokojne spýtal: „A polieval si ju?“ · „Vivat a vivat, kde budeme bývať,“ ozvalo sa z druhého boku záhrady. (J. Kalinčiak)'
          }
        ]
      },
      {
        id: 'zapis',
        title: 'Zápis a interpunkcia priamej reči',
        lead: 'Priamu reč zvyčajne vyčleňujeme do nového odseku a uzatvárame do dolných a horných úvodzoviek („…“). Daj si pozor na tri základné polohy:',
        steps: [
          {
            term: 'Uvádzacia veta pred priamou rečou',
            text: 'Za uvádzacou vetou píšeme dvojbodku, priama reč sa začína veľkým písmenom a koncové znamienko (bodka, otáznik, výkričník) stojí pred hornými úvodzovkami.',
            example: 'Mama mi kládla na srdce: „V lavici sa nevrť!“'
          },
          {
            term: 'Uvádzacia veta za priamou rečou',
            text: 'Ak je priama reč oznamovacia, namiesto bodky píšeme pred hornými úvodzovkami čiarku (otáznik a výkričník ostávajú) a uvádzacia veta pokračuje malým písmenom.',
            example: '„Ono sa tam schovalo,“ pípol som previnilo. · „Čie je to auto?“ spýtala sa učiteľka.'
          },
          {
            term: 'Uvádzacia veta vložená do priamej reči',
            text: 'Vloženú uvádzaciu vetu oddeľujeme z oboch strán čiarkami; ak priama reč pokračuje tou istou vetou, začína sa po dolných úvodzovkách malým písmenom.',
            example: '„Tak a je po mne,“ prebleslo mi hlavou, „hneď prvý deň ma vylúčia!“'
          }
        ]
      },
      {
        id: 'jazyk',
        title: 'Slovník a syntax',
        list: [
          'Slovník rozprávania je neobmedzený – slová majú byť významovo bohaté, výrazné a pôsobivé.',
          '<strong>Slovesá</strong> dodajú deju dynamiku, mená presnosť pri pomenovaní a hodnotení, citoslovcia a častice živosť, príslovky okolnosti času a miesta. Ani <strong>spojky</strong> nie sú zanedbateľné – môžu dej spomaliť alebo stupňovať.',
          'Aj keď prevažuje oznamovací spôsob, uplatňujú sa tiež <strong>opytovacie a zvolacie vety</strong>, ktoré výstižne charakterizujú medziľudskú komunikáciu.',
          'Popri jednoduchých vetách primerane zastúp aj súvetia; striedaj krátke a dlhé vety, jednočlenné slovesné (<em>Prší. Straší. Chutí mi. Je mi dusno. Bolo mi do smiechu.</em>) s neslovesnými (<em>Pohov! Ticho!</em>).'
        ]
      }
    ],
    tips: [
      'Zaujmi príbehom. Nič nie je horšie ako pomalé, nudné a zdĺhavé rozprávanie bez pevnej stavby.',
      'Zbytočne „neodskakuj“ od deja – to si môžu dovoliť len skúsení spisovatelia.',
      'Pracuj len s toľkými postavami, s koľkými si dokážeš poradiť.',
      'Neboj sa fantázie a nečakaného – no aj fantázia musí mať svoju logiku a pravdu.',
      'Ohybnosť a plastickosť príbehu spočíva v tom, že nerozprávaš len strohý dej: vykresli prostredie a výstižne charakterizuj hrdinu.',
      'Použi priamu reč postáv – hodnotí sa aj členenie na pásmo rozprávača a pásmo postáv.'
    ],
    sample: {
      title: 'Prvý deň v škole',
      note: 'Ukážka rozprávania z prezentácie – študentská práca (zdroj: zones.sk, cit. 18. 2. 2014; jazykovo a kompozične upravené).',
      paras: [
        'Kto by si nepamätal tú zmes zvedavosti, vône nových zošitov a neutíchajúceho tlkotu srdca, ktorá sa spája s prvým dňom v škole? Týždne predtým sa u nás doma niesli v znamení nekonečných nákupov a prednášok o tom, že poobedňajšiemu spánku a bezstarostným hrám v pieskovisku definitívne odzvonilo. Odmalička som bol neposedné šidlo, a tak sa mi predstava tichého sedenia v lavici vôbec nezdala lákavá.',
        'Napokon nadišiel deň D. Mama mi zapínala bielu košeľu až tesne pod krk a kládla mi na srdce posledné rady: „Nie aby si v triede vykrikoval! V lavici sa nevrť, hračky nechaj doma a hovor, len keď sa ťa pani učiteľka niečo opýta!“ Dôležito som prikyvoval, hoci ma vo vrecku nohavíc potajomky hrialo malé červené autíčko – môj talizman pre prípad núdze. Obrovskú aktovku musela niesť mama, inak by ma určite prevážila k zemi.',
        'Pred školou sa to už hmýrilo vyobliekanými prváčikmi a dojatými rodičmi. Mama mi pri dverách vtisla bozk na čelo, v očiach sa jej mihla slza a ja som odrazu zostal stáť uprostred cudzej triedy. Našťastie sa na mňa z prednej lavice usmial kamarát zo škôlky a pred tabuľu predstúpila mladá pani učiteľka s takým láskavým pohľadom, že zo mňa prvý strach okamžite opadol.',
        'Všetko šlo hladko až do chvíle, keď nás vyzvala, aby sme si z tašky vyložili peračník. Horlivo som trhol zipsom, no nešikovne som pritom zavadil o vrecko nohavíc. Červené autíčko vyletelo von, cinklo o kovovú nohu lavice a so zradným hrkotom sa rozbehlo po podlahe. Hrŕŕ! Zastavilo sa presne pri špičke topánky pani učiteľky. V triede nastalo hrobové ticho. Krv mi udrela do líc a v hrdle mi navrela hrča. <em>Tak a je po mne,</em> prebleslo mi hlavou, <em>hneď prvý deň ma vylúčia zo školy!</em>',
        'Pani učiteľka sa pomaly zohla, vzala autíčko do dlane a skúmavo zdvihla obočie.',
        '„Čie je toto pretekárske auto, ktoré tu jazdí bez vodičského preukazu?“ opýtala sa vážnym hlasom, no v kútikoch úst jej pohrával úsmev.',
        '„M-moje, prosím,“ pípol som previnilo a očami som vŕtal do dlážky. „Ono sa tam… samo schovalo.“',
        'Triedou prebehol tichý chichot, no pani učiteľka namiesto pokarhania položila autíčko na katedru a povedala: „Výborne! Aspoň nám dnešné zoznamovanie pôjde veselšie – ku komu autíčko pošlem, ten nám povie svoje meno.“',
        'Napätie razom vyprchalo, z hanby sa stala spoločná hra a dve vyučovacie hodiny ubehli ako voda. Z triedy som vychádzal s novými kamarátmi a s pocitom, že škola vôbec nebude takým väzením, akým ma doma ľakali. Keď ma popoludní vo dverách privítal zvedavý otec otázkou: „Tak ako, prváčik, dúfam, že si hneď prvý deň nevyrobil nejaký malér?“, len som si vo vrecku potajomky stisol červené autíčko, spiklenecky som sa usmial a vyhlásil: „Kdeže, oco! Pani učiteľka vravela, že bez môjho auta by to dnes vôbec nešlo.“'
      ]
    },
    checklist: [
      'Príbeh má zápletku, vyvrcholenie a rozuzlenie.',
      'Príbeh má pointu.',
      'Je tam pásmo rozprávača aj priama reč postáv.',
      'Priamu reč som správne graficky zapísal/a.',
      'Striedam typy viet, používam častice a citoslovcia.',
      'Dej neodbieha od hlavnej línie.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'príbeh s pointou'],
      kompozicia: [
        'rozprávací slohový postup (dodržanie žánrovej formy)',
        'vnútorná stavba – zápletka, vyvrcholenie, nečakaný obrat, rozuzlenie; pri jednoduchom rozprávaní úvod, jadro, záver',
        'členenie textu na pásmo rozprávača a pásmo postáv'
      ],
      jazyk: [...JAZYK_ZAKLAD, 'rôznorodosť syntaktických prostriedkov', 'použitie častíc a citosloviec'],
      styl: ['rôznorodosť modálnej stavby viet', 'tvorivé využitie lexiky všetkých štýlov (vyšší, stredný, nižší)', 'pútavosť']
    }
  },

  {
    slug: 'diskusny-prispevok',
    name: 'Diskusný príspevok',
    short: 'Reakcia v diskusii, argumenty a kontakt s publikom.',
    lead: 'Replikový útvar rečníckeho štýlu: v diskusii sa strieda viac diskutujúcich a odpovedajú na to, čo zaznelo v referáte alebo v inom príspevku. Vyjadruješ v ňom vlastný názor a presviedčaš argumentmi.',
    facts: [
      { label: 'Slohový postup', value: 'výkladový s prvkami úvahy' },
      { label: 'Štýl', value: 'rečnícky (aj náučný)' },
      { label: 'Nezabudni', value: 'oslovenie a poďakovanie' }
    ],
    sections: [
      {
        id: 'znaky',
        title: 'Čo je diskusný príspevok',
        list: [
          'Patrí medzi replikové útvary rečníckeho štýlu – v diskusii sa strieda viac diskutujúcich a odpovedajú na to, čo zaznelo v referáte alebo v inom príspevku.',
          'Diskusia je súhrn všetkých diskusných príspevkov k prerokovaným bodom programu schôdze, zasadnutia, pracovného stretnutia či seminára. Môže byť aj útvarom náučného štýlu – napr. na vedeckom sympóziu.',
          'Diskusiu vedie poverený človek, udeľuje diskutujúcim slovo a dbá, aby prebiehala kultivovane.',
          'Platí zásada: diskutuje sa vždy <strong>k tomu, čo je na programe</strong>.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          {
            term: 'Oslovenie',
            text: 'Najčastejšie s výkričníkom. V texte ho môžeš niekoľkokrát zopakovať; uprostred vety je oddelené čiarkami.',
            example: 'Vážení prítomní!'
          },
          {
            term: 'Nadviazanie',
            text: 'Nadviaž na to, čo zaznelo v referáte, v predchádzajúcom diskusnom príspevku alebo pri kontrole uznesení.',
            example: 'Chcem sa aj ja vyjadriť k slovám, ktoré tu pred chvíľou povedal náš kolega… · Nedá mi, aby som nedoplnil referát o to, čo malo byť jeho najdôležitejším bodom… · Nemôžem nechať bez povšimnutia tvrdenia môjho predrečníka…'
          },
          {
            term: 'Vyjadrenie vlastného názoru',
            text: 'Vysvetli svoj názor, argumentuj, odvolávaj sa na literatúru, cituj – táto časť má veľa spoločných znakov s výkladom a úvahou.',
            example: 'Ja si myslím… · Podľa mojej mienky… · Domnievam sa, že…'
          },
          {
            term: 'Poďakovanie za slovo',
            text: 'Na rozdiel od slávnostného prejavu v diskusii poďakovanie byť má, pretože ti vedúci schôdze udelil slovo a pozval ťa za rečnícky pult.',
            example: 'Ďakujem za pozornosť.'
          }
        ]
      },
      {
        id: 'obraty',
        title: 'Ako kultivovane súhlasiť, polemizovať a argumentovať',
        lead: 'V diskusii hodnotíme myšlienky a argumenty, nikdy nie osobu predrečníka. Pomôžu ti ustálené rečnícke obraty:',
        cards: [
          {
            term: 'Súhlas a doplnenie',
            text: 'nadviazanie na myšlienku predrečníka a jej obohatenie o ďalší uhol pohľadu',
            example: 'Plne sa stotožňujem so slovami predrečníka a rád by som doplnil… · Nadväzujúc na úvodný referát, chcem poukázať aj na…'
          },
          {
            term: 'Vecný nesúhlas (polemika)',
            text: 'zdvorilé spochybnenie tvrdenia pomocou protiargumentu bez osobných útokov',
            example: 'Dovoľte mi polemizovať s názorom, že… · Rozumiem tomuto pohľadu, no fakty ukazujú, že…'
          },
          {
            term: 'Uvedenie argumentu a citátu',
            text: 'opretie vlastnej mienky o overiteľný údaj, literatúru alebo výrok autority',
            example: 'Svoje tvrdenie môžem doložiť príkladom… · Ako výstižne pripomenul už…'
          },
          {
            term: 'Kontakt a výzva v závere',
            text: 'vtiahnutie publika do uvažovania cez rečnícku otázku, oslovenie a záverečný apel',
            example: 'Položme si, milí spolužiaci, úprimnú otázku: … · Preto vás chcem vyzvať, aby sme…'
          }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk a štýl',
        list: [
          'Hovor za seba v 1. osobe jednotného čísla: <em>ja si myslím, podľa mojej mienky, domnievam sa</em>. 1. osobu množného čísla použi len vtedy, ak ťa konkrétna skupina poverila hovoriť za ňu – nepatrí sa ukrývať za anonymných ľudí (<em>my si myslíme, že…; my – učitelia; my – študenti</em>).',
          'Argument = tvrdenie s dôkazom. Pridaj citát, fakt, príklad zo života.',
          '<strong>Presviedčacie prvky</strong> podnecujúce a motivujúce poslucháčov: rečnícke otázky, výzvy, opätovné oslovenie publika.',
          'Vo výkladovej časti zložené súvetia (príčinno-následkové, dôsledkové) a polovetné konštrukcie; v úvahovej časti pestrá modalita viet.'
        ]
      }
    ],
    tips: [
      'Hneď na začiatku jasne povedz, k čomu sa vyjadruješ a aký máš postoj.',
      'Ku každému tvrdeniu pridaj dôkaz alebo príklad – argumenty sa hodnotia v obsahu.',
      'Ak je téma citát, pracuj s ním: vysvetli ho, súhlas s ním alebo polemizuj.',
      'Kontroluj kompozíciu: oslovenie – úvod – jadro – záver – poďakovanie.'
    ],
    sample: {
      title: 'Od septembra v školách po novom',
      note: 'Ukážka diskusného príspevku z prezentácie – študentská práca (zdroj: zones.sk, cit. 19. 2. 2014; jazykovo a kompozične upravené).',
      paras: [
        'Vážení prítomní!',
        'Dovoľte mi, aby som nadviazala na úvodný referát aj na slová môjho predrečníka a vyjadrila svoj názor na pripravované zmeny v školskom zákone. Hoci novela prináša viacero krokov správnym smerom, domnievam sa, že niektoré opatrenia sa zavádzajú príliš narýchlo a bez dostatočnej prípravy.',
        'Za jednoznačné pozitívum považujem zníženie maximálneho počtu žiakov v triedach, čo môžem potvrdiť z vlastnej skúsenosti. Na základnej škole nás bolo v triede sedemnásť, vďaka čomu sa nám učitelia mohli venovať individuálne a mali sme priestor pýtať sa priamo na hodine. Porovnávajúc vtedajšie vyučovanie s dnešnou realitou na gymnáziu, kde nás v laviciach sedí tridsaťjeden, jasne vidím ten rozdiel – pri jazykových či odborných predmetoch je takýto počet priveľký. Je síce pravda, že vo veľkom kolektíve býva cez prestávky veselšie a klesá aj šanca, že vyučujúci vyvolá odpovedať práve toho, kto sa nestihol pripraviť. Svojich terajších spolužiakov som si obľúbila a nechcela by som, aby nás teraz rozdeľovali, no pre budúcich prvákov by menšie triedy znamenali citeľne kvalitnejšiu výučbu.',
        'Rovnako vítam zámer zredukovať preplnené učebné osnovy. Už rímsky filozof Seneca výstižne pripomenul: „Neučíme sa pre školu, ale pre život.“ Načo sú nám, milí spolužiaci a vážení učitelia, desiatky encyklopedických poučiek, ktoré po písomke okamžite pustíme z hlavy, ak nám potom chýba čas na praktické úlohy a kritické myslenie? Práve pri osnovách však vidím najväčšie negatívum celej reformy. Zmeny majú v školách platiť už od septembra, hoci nové učebnice ani metodické príručky ešte neexistujú. Ako majú pedagógovia učiť po novom, keď dostanú do rúk len rámcové ciele a materiály si musia pripravovať po večeroch na úkor vlastného voľna? Zmysluplná premena vzdelávania si vyžaduje dostatok času, odborníkov z praxe i premyslené financovanie, nie unáhlený štart, pri ktorom sa pravidlá menia za pochodu.',
        'Podľa mojej mienky teda nestačí hodnotiť školský zákon len podľa sľubných cieľov na papieri. Zaujímajme sa spoločne o to, v akých podmienkach reforma do škôl prichádza, diskutujme na pôde školského parlamentu a podporme kroky, ktoré dajú učiteľom aj študentom reálny priestor na prípravu. Až keď pôjde dobrý úmysel ruka v ruke s kvalitnými učebnicami, budeme od septembra v triedach naozaj spokojnejší.',
        'Ďakujem za pozornosť.'
      ]
    },
    checklist: [
      'Začínam oslovením.',
      'Nadväzujem na predchádzajúci príspevok alebo tému diskusie.',
      'Mám jasný názor a podopieram ho argumentmi.',
      'Použil/a som citát alebo fakt.',
      'Mám presviedčacie prvky – rečnícke otázky, výzvy.',
      'Končím poďakovaním za slovo.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'vlastné hodnotenie problémov s využitím aktuálnych poznatkov (subjektívno-objektívny prístup)', 'argumenty (tvrdenia s dôkazmi) a citáty s cieľom presvedčiť poslucháčov'],
      kompozicia: ['zodpovedajúci slohový postup (dodržanie žánrovej formy)', 'nadväznosť a logickosť textu', 'členenie: oslovenie, úvod, jadro, záver, poďakovanie'],
      jazyk: [...JAZYK_ZAKLAD, 'zložené súvetia a polovetné konštrukcie vo výkladovej časti, pestrá modalita v úvahovej časti'],
      styl: ['lexika typická pre daný štýl (napr. odborné termíny)', 'presviedčacie prvky – napr. rečnícke otázky', 'subjektívna interpretácia objektívnych faktov (1. os. sg. alebo pl.)']
    }
  },

  {
    slug: 'beletrizovany-zivotopis',
    name: 'Beletrizovaný životopis',
    short: 'Životný príbeh osobnosti podaný umeleckým štýlom.',
    lead: 'Hybridný útvar umeleckého štýlu. Vychádza z objektívnych faktov o vlastnom živote alebo živote inej osoby, no podáva ich obrazne. Od úradného životopisu sa líši tým, že sa v ňom uplatňuje fantázia a fikcia.',
    facts: [
      { label: 'Slohové postupy', value: 'informačný, opisný, rozprávací, výkladový' },
      { label: 'Štýl', value: 'umelecký' },
      { label: 'Minimum', value: '5 faktov zo života' }
    ],
    sections: [
      {
        id: 'zadania',
        title: 'Úradný verzus beletrizovaný a typy zadaní',
        lead: 'Kým úradný (štruktúrovaný) životopis patrí do administratívneho štýlu a stroho vypočítava fakty v heslách, beletrizovaný životopis premieňa životopisné údaje na umelecký príbeh. Na maturite sa stretneš s tromi typmi zadaní:',
        cards: [
          {
            term: 'Vlastný beletrizovaný životopis',
            text: 'vychádzaš zo skutočných míľnikov svojho života (narodenie, rodina, škola, záľuby, plány), ktoré podávaš s nadhľadom, humorom alebo obraznosťou'
          },
          {
            term: 'Životopis literárnej postavy',
            text: 'píšeš v 1. osobe z pohľadu hrdinu knihy či drámy; musíš dodržať dejové fakty, charakter postavy aj dobové prostredie diela (napr. 2008: Volám sa Jozef Mak, 2022: Som Ofélia)'
          },
          {
            term: 'Fiktívny beletrizovaný životopis',
            text: 'vytváraš vymyslený životný príbeh s dávkou fantázie či nadsázky, no stále v ňom musí byť čitateľných aspoň 5 životopisných oporných bodov (napr. 2012: Som jednoducho smoliar, 2025: Od detstva žijem na inej planéte)'
          },
          {
            term: 'Ako „zahmliť“ suchý fakt',
            text: 'namiesto presného dátumu a adresy použi obraz, metaforu alebo príhodu, z ktorej čitateľ údaj vyčíta medzi riadkami',
            example: 'Úradne: Narodil som sa 15. 12. 2007 v Nitre. → Umelecky: Do mrazivého decembrového rána pod Zoborom som sa ohlásil prvým plačom krátko pred Vianocami.'
          }
        ]
      },
      {
        id: 'postupy',
        title: 'Ako kombinuje slohové postupy',
        lead: 'Vychádza z objektívnych údajov o vlastnom živote alebo o živote inej (aj fiktívnej či literárnej) osoby, ktoré však umelecky „zahmlieva“ a vyjadruje sa o nich obrazne.',
        cards: [
          { term: 'Informačný', text: 'prináša základné údaje zo života – narodenie, rodinné zázemie, škola, míľniky' },
          { term: 'Opisný', text: 'opisuje a charakterizuje osobu, blízkych ľudí a prostredie' },
          { term: 'Rozprávací', text: 'dôležité fázy a príhody zo života môžu byť prerozprávané ako príbeh' },
          { term: 'Výkladový', text: 'vysvetľuje súvislosti, motívy rozhodnutí a životné postoje' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazykové prostriedky',
        cards: [
          { term: 'Neutrálne slová', text: 'základná bezpríznaková slovná zásoba pre pomenovanie faktov', example: 'mama, otec' },
          { term: 'Hovorové slová (spisovné)', text: 'dodávajú rozprávaniu prirodzenosť a bezprostrednosť', example: 'elektrika, panelák' },
          { term: 'Citovo zafarbené slová', text: 'zdrobneniny a expresívne slová vyjadrujúce osobný vzťah', example: 'mamička, otecko' },
          { term: 'Knižné slová', text: 'intelektuálne a štylisticky vyššie pomenovania', example: 'nonsens, milieu (prostredie), potecha' },
          { term: 'Poetizmy', text: 'básnické slová ozvláštňujúce umelecký prejav', example: 'luna, sťa, vesna, Slovač, sto liet' },
          { term: 'Biblizmy', text: 'slová a ustálené spojenia z biblických textov', example: 'svätyňa, zem zasľúbená, rozjímať' }
        ],
        paras: [
          'Popri pestrej slovnej zásobe sa naplno uplatňujú <strong>básnické trópy a figúry</strong> – metafora, metonymia, personifikácia či epiteton, ktoré premieňajú faktografické údaje na pútavý príbeh.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Úvod (zrod a korene)', text: 'Originálne, bez ošúchaných fráz predstav príchod na svet, miesto narodenia a rodinné zázemie, do ktorého si vstúpil/a.' },
          { term: 'Jadro (životná cesta v čase)', text: 'V premyslenej časovej postupnosti (chronologicky alebo retrospektívne) rozviň kľúčové etapy – detstvo, školské roky, objavenie záľub, úspechy, omyly aj križovatky, ktoré ťa sformovali.' },
          { term: 'Záver (prítomnosť a obzor budúcnosti)', text: 'Prepoj doterajšiu cestu s dneškom, vyslov svoje životné krédo a obrazne naznač sny, ciele alebo ambície do ďalších kapitol života.' }
        ]
      },
      {
        id: 'osnova',
        title: 'Osnova na precvičenie',
        lead: 'Napíš vlastný beletrizovaný životopis podľa osnovy a inšpiruj sa úvodnými vetami pri jednotlivých bodoch.',
        steps: [
          { term: 'Narodenie', text: '„Bolo načase, že som sa narodil – ja, jeden…“' },
          { term: 'Detstvo', text: '„Päť rokov to ani nevyzeralo, že čakali len na mňa…“' },
          { term: 'Škola', text: '„Mašinéria školstva ma na dvanásť rokov…“' },
          { term: 'Stredná škola', text: '„Ak mi niekto povie, že prežívam najkrajšie roky svojho…“' },
          { term: 'Predsavzatie na záver', text: '„Svet ešte netuší, čo ho čaká…“' }
        ]
      }
    ],
    tips: [
      'Zakomponuj <strong>aspoň 5 faktov</strong> – narodenie, rodinné zázemie, štúdium, záujmy, schopnosti, ambície do budúcnosti.',
      'Drž časovú postupnosť podľa vopred zvoleného plánu.',
      'Fakty nevymenúvaj – „zahmli“ ich a podaj obrazne, príbehovo.',
      'Pozor na zadanie: môže ísť o fiktívnu osobu alebo literárnu postavu (napr. 2022: Som Ofélia).'
    ],
    sample: {
      title: 'Moja cesta životom',
      note: 'Ukážka beletrizovaného životopisu z prezentácie – študentská práca (zdroj: zones.sk, cit. 7. 3. 2014; jazykovo a štylisticky upravené).',
      paras: [
        'Písalo sa mrazivé decembrové ráno a za oknami pôrodnice tancovali husté snehové vločky, akoby zima chystala mestu slávnostnú kulisu. Do vône ihličia a blížiacich sa sviatkov som sa v náručí mamičky a otecka ohlásila prvým plačom – trocha predčasný vianočný balíček bez mašle, no o to vrúcnejšie vítaný. Spočiatku som svet pozorovala len spoza perinky ako tichý, zvedavý uzlíček. Len čo sa však kalendár prehupol cez prvý rok a moje neisté nôžky objavili čaro rovnováhy, pokojná idylka v našej obývačke sa skončila. Rodičia s dojatím tlieskali môjmu prvému krôčiku, netušiac, že práve odštartovali môj celoživotný šprint.',
        'Z pokojného bábätka vyrástlo neposedné šidlo, pred ktorým žiadna váza na spodnej poličke nebola v bezpečí. Energiu som skrotila až v škôlke – v kráľovstve farebných kociek, popoludňajších ležadiel a prvých detských priateľstiev. Hoci mi tam bolo dobre, v kútiku duše som už poškuľovala po školskej aktovke. Keď však napokon nadišlo vytúžené septembrové ráno a kráčala som ruka v ruke s mamou k vysokej bráne základnej školy, odvaha sa mi odrazu skotúľala až do topánok. Stačil však vľúdny úsmev našej prvej pani učiteľky, napätie zo mňa opadlo sťa ranná hmla a začala sa moja školská kapitola – spočiatku sladká ako usilovné včeličky v žiackej knižke.',
        'Skutočný zlom priniesol tretí ročník, keď som sa prvý raz postavila na štartovú čiaru školských atletických pretekov a cieľovú pásku preťala s výrazným náskokom. Môj prirodzený ťah na bránku neunikol pozornému oku telocvikára, bývalého atléta, ktorý podchytil môj talent a zasvätil ma do tajov tréningovej driny. Červený tartan mi však nestačil – čoskoro mi učarovala aj presná muška pri športovej streľbe a dievčenský futbal. Keďže som na štadiónoch a strelniciach trávila pomaly viac hodín než nad zošitmi, musela som napokon kopačky s ťažkým srdcom zavesiť na klinec a zostať verná kráľovnej športov. Súťažná atmosféra sa stala mojím živlom. V spoločnom potení aj radosti z medailí sa zrodili priateľstvá pevné ako štafetová odovzdávka, ktoré pretrvali dodnes. A kým hŕstka večných pochybovačov na školskej chodbe ohŕňala nosom a pýtala sa, načo je komu v živote behanie dookola, my sme odpovedali bez slov – výsledkami na stupňoch víťazov.',
        'Roky základnej školy sa rozbehli tempom stovkárskeho šprintu a deviaty ročník ma postavil pred prvú vážnu križovatku. Keďže som netušila, ktorým smerom sa vybrať, do cvičných prihlášok som bezhlavo vpísala školy svojich starších kamarátok. V zborovni to vyvolalo malé zemetrasenie. Hneď na druhý deň si ma učitelia zavolali a položili predo mňa ponuku športových gymnázií s jedinou vetou: „Nezahadzuj svoj dar!“ Spočiatku som sa zdráhala vykročiť do neznáma, no po dlhých večerných rozhovoroch doma i s priateľmi dozrelo vo mne rozhodnutie zamieriť na športové gymnázium pod Zoborom. Nasledovali týždne poctivého potu na dráhe a napokon deň talentových skúšok, ktorými som preletela s ľahkosťou vetra v chrbte.',
        'S prijatím vo vrecku prišla bezstarostná deviatacka jar. S kamarátkami sme si vychutnávali každú spoločnú prestávku a naša prekypujúca energia občas pridelila triednej učiteľke nejednu vrásku na čele, hoci nám naše drobné huncútstva napokon vždy s povzdychom odpustila. O to ťažšie potom padol júnový zvonček poslednej rozlúčky. Keď sme nastúpení na školskej chodbe počúvali slávnostný príhovor pani riaditeľky, pri predstave, že sa naše cesty rozídu a so svojimi najlepšími priateľkami budem tráviť menej chvíľ, sa mi v hrdle usadila hrča. So slzami v očiach sme hľadeli na svojich rodičov a učiteľov, ktorí nás deväť rokov trpezlivo formovali.',
        'Dnes už deriem lavice i bežecký ovál školy, ku ktorej ma nasmerovali ľudia veriaci vo mňa viac, než som si vtedy verila sama – a za tento impulz im v duchu neprestávam ďakovať. Kam ma vietor zaveje po maturite, zatiaľ presne neviem; v cieľovej rovinke svojich predstáv však vidím vysokoškolský diplom, zmysluplnú prácu a raz aj vlastnú harmonickú rodinu. Moja trať zďaleka nekončí – držte mi palce, nech si až do cieľa ustrážim správne tempo!'
      ]
    },
    checklist: [
      'Zakomponoval/a som aspoň 5 faktov zo života.',
      'Dodržiavam časovú postupnosť.',
      'Fakty podávam obrazne, príbehovo.',
      'Používam umelecké jazykové prostriedky.',
      'Text zodpovedá zadaniu – vlastný, fiktívny alebo životopis postavy.',
      'Text je originálny, nie frázovitý.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'príbehovosť', 'faktografickosť – umelecky zakomponovaných aspoň 5 najdôležitejších faktov'],
      kompozicia: ['zodpovedajúci slohový postup (dodržanie žánrovej formy)', 'členenie textu', 'časová postupnosť podľa vopred zvoleného plánu'],
      jazyk: [...JAZYK_ZAKLAD],
      styl: ['tvorivé využitie lexiky umeleckého štýlu', 'originálnosť']
    }
  },

  {
    slug: 'vyklad',
    name: 'Výklad',
    short: 'Vysvetlenie javu, jeho príčin a súvislostí.',
    lead: 'Útvar náučného štýlu, ktorý jav nielen opisuje, ale <strong>vysvetľuje</strong> – jeho podstatu, príčiny, dôsledky a súvislosti. Je vecný, logický a objektívny. Nehodnotíš pocitmi, ale argumentmi a faktmi.',
    facts: [
      { label: 'Slohový postup', value: 'výkladový (aj odborný opis)' },
      { label: 'Štýl', value: 'náučný (odborný)' },
      { label: 'Osoba', value: '1. os. pl. alebo 3. os.' }
    ],
    sections: [
      {
        id: 'znaky',
        title: 'Čo je výklad a aké má druhy',
        lead: 'Výklad nesie najviac znakov <strong>výkladového slohového postupu</strong>; sprievodne sa v ňom uplatňuje aj <strong>opisný postup</strong> (odborný opis štruktúry či vlastností javu) a <strong>informačný postup</strong> (fakty, čísla, dátumy). Jeho hlavnou funkciou je zachytiť vnútornú logiku skutočnosti – odpovedá na otázky <strong>prečo, ako, aké sú príčiny a dôsledky</strong>.',
        list: [
          'Vyznačuje sa <strong>objektívnosťou</strong> (overiteľné poznatky namiesto osobných pocitov) a vysokým stupňom <strong>kohéznosti</strong> – myšlienkovou zovretosťou a presnou logickou nadväznosťou viet.',
          'Je určený <strong>všeobecnému adresátovi</strong>: autor sa neprihovára jednotlivcovi a čitateľa v písanom texte neoslovuje.',
          'Podľa cieľa a okruhu prijímateľov rozlišujeme <strong>vedecký (vedecko-náučný) výklad</strong> pre odborníkov (prináša nové vedecké poznatky – štúdia, monografia), <strong>školský (didaktický, učebnicový) výklad</strong> (najčastejší v učebniciach aj na maturite – systematicky a zrozumiteľne vysvetľuje známe poznatky) a <strong>populárno-vedecký (populárno-náučný) výklad</strong> pre širšiu verejnosť.',
          'Hovorenou podobou výkladu je <strong>prednáška</strong> (prípadne <strong>referát</strong>), v ktorej už rečník nadväzuje kontakt s publikom.'
        ]
      },
      {
        id: 'postupy',
        title: 'Logické postupy vo výklade',
        lead: 'V jadre výkladu vysvetľujeme jav na základe postupov logického myslenia:',
        cards: [
          { term: 'Induktívny postup (indukcia)', text: 'postup od jednotlivostí k celku: najprv uvedieme konkrétne pozorovania, fakty a znaky javu a až v závere z nich vyvodíme všeobecnú poučku alebo definíciu' },
          { term: 'Deduktívny postup (dedukcia)', text: 'postup od celku k jednotlivostiam: na začiatku uvedieme všeobecnú definíciu alebo tézu a následne vysvetľujeme jednotlivé znaky, príklady a dôsledky' },
          { term: 'Analýza a syntéza', text: 'myšlienkové rozčlenenie javu na jednotlivé zložky, skúmanie vzťahov medzi nimi (analýza) a následné zjednotenie čiastkových zistení do uceleného záveru (syntéza)' },
          { term: 'Komparácia a klasifikácia', text: 'porovnávanie spoločných a odlišných znakov dvoch či viacerých javov (komparácia) a triedenie javov do skupín a podskupín podľa jednotného kritéria (klasifikácia)' },
          { term: 'Exemplifikácia a enumerácia', text: 'doloženie vysvetľovanej poučky na výstižných konkrétnych príkladoch (exemplifikácia) a prehľadné, systematické vymenúvanie faktov alebo vlastností (enumerácia)' },
          { term: 'Analógia', text: 'usudzovanie na základe podobnosti dvoch javov, ktorým si autor pomáha priblížiť menej známy jav alebo vytvoriť hypotézu; sama osebe však nie je úplným dôkazom, lebo nezohľadňuje všetky odchýlky' }
        ]
      },
      {
        id: 'argumentacia',
        title: 'Argumentácia vo výklade',
        lead: 'Výklad je typickým <strong>argumentačným textom</strong> – jeho cieľom je čitateľa nielen poučiť, ale aj presvedčiť dokázaním pravdivosti predkladaných tvrdení.',
        steps: [
          { term: 'Téza', text: 'Jasne sformulovaná východisková myšlienka alebo tvrdenie, ktorého pravdivosť ideme dokázať.' },
          { term: 'Argumentovanie (dokazovanie)', text: 'Uvádzanie vecných dôkazov a príkladov, ktorými preukazujeme platnosť tézy a objasňujeme príčinno-následkové súvislosti.' },
          { term: 'Zhrňujúce tvrdenie', text: 'Logické vyústenie argumentácie – potvrdenie platnosti tézy vyplývajúce z predložených dôkazov.' }
        ],
        paras: [
          'Vo výklade využívame objektívne – <strong>priame aj nepriame – argumenty</strong>: overené fakty, štatistické a historické údaje, ukážky z diel či citácie odborných autorít a literatúry (priame dôkazy), ako aj vedecké poučky, definície, prírodné a spoločenské zákonitosti, právne normy či logický úsudok (nepriame dôkazy). Na rozdiel od úvahy a diskusného príspevku sa v písanom výklade <strong>neodvolávame na vlastnú osobnú skúsenosť ani na neoverenú verejnú mienku</strong>.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Úvod', text: 'Uveď čitateľa do problematiky a vymedz základný pojem alebo tému – čo budeš vysvetľovať a prečo je daný jav dôležitý.' },
          { term: 'Jadro', text: 'Postupne vysvetľuj nový alebo menej známy jav: jeho znaky, príčiny, dôsledky a súvislosti (deduktívne alebo induktívne). Každej myšlienke venuj samostatný odsek, podopri ju argumentom alebo príkladom.' },
          { term: 'Záver', text: 'Zhrň hlavné poznatky a vyvoď z nich všeobecný záver.' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk, syntax a grafické členenie',
        lead: 'Náučný štýl je <strong>nominálny (menný)</strong> – používa viac podstatných a prídavných mien než plnovýznamových slovies a vyžaduje premyslenú, jednoznačnú stavbu každej vety.',
        cards: [
          { term: 'Pojmové slová a termíny', text: 'bezpríznaková (neutrálna) slovná zásoba bez citového zafarbenia, domáce aj internacionálne odborné termíny; pri prvom použití menej známy pojem vysvetli' },
          { term: 'Menné vyjadrovanie a predložky', text: 'abstraktné podstatné mená, viacslovné pomenovania a časté druhotné predložky (pozor: predložka <em>kvôli</em> v spisovnej slovenčine nevyjadruje príčinu, ale len účel)', example: 'vzhľadom na, v dôsledku, na základe, v súvislosti s, na rozdiel od' },
          { term: 'Autorský plurál a trpný rod', text: 'neosobnosť zabezpečuje 1. os. pl. (autorský plurál) alebo 3. os. spolu s frekventovanými konštrukciami v opisnom a zvratnom trpnom rode', example: 'rozumieme, rozlišujeme · údaje sú spracúvané, jav sa člení' },
          { term: 'Zložené súvetia a polovetné konštrukcie', text: 'dlhšie súvetia vyjadrujúce kauzálne (príčinné a dôsledkové), podmienkové či prípustkové vzťahy a príčastníkové alebo prechodníkové polovetné konštrukcie', example: 'pretože, lebo, keďže, preto, v dôsledku čoho, ak, hoci' },
          { term: 'Oznamovacia modalita', text: 'výklad stojí na oznamovacích vetách (v školskom výklade sa môže výnimočne objaviť vecná prieskumná otázka uvádzajúca problém); nepoužívajú sa zvolacie vety ani nedopovedané tri bodky (…)' },
          { term: 'Grafické prostriedky a zdroje', text: 'prehľadnosť podporujú odseky, zátvorky, pomlčky, dvojbodky a číselné členenie (v odborných textoch aj tabuľky, schémy, grafy či výpočty); dôveryhodnosť zvyšujú citáty a odkazy na zdroje' }
        ]
      }
    ],
    tips: [
      'Neprepadni úvahe: vyhni sa vetám typu „podľa mňa“, „cítim“. Vysvetľuj, nehodnoť.',
      'Pred písaním si urob osnovu – výklad stojí na logickom poradí myšlienok.',
      'Ku každému tvrdeniu pridaj príklad, fakt alebo citát.',
      'Pri literárnej téme (napr. 2015: znaky tvorby spisovateľov obdobia) uvádzaj konkrétnych autorov a diela.'
    ],
    sample: {
      title: 'Bezpečne na sociálnych sieťach',
      note: 'Vzorová ukážka výkladu spracovaná k maturitnej téme PFIČ MS 2023.',
      paras: [
        'Sociálnymi sieťami rozumieme digitálne platformy, ktoré umožňujú registrovaným používateľom vytvárať verejné alebo poloverejné profily, nadväzovať kontakty a uverejňovať či šíriť multimediálny obsah. Hoci tieto služby slúžia predovšetkým na komunikáciu a výmenu informácií, ich fungovanie je založené na zhromažďovaní a algoritmickom spracúvaní osobných údajov. Práve preto sa bezpečnosť na sociálnych sieťach stáva jednou zo základných súčastí kybernetickej hygieny v 21. storočí.',
        'Základnou príčinou zraniteľnosti používateľov v online priestore je takzvaná digitálna stopa, teda súhrn všetkých záznamov, ktoré človek na internete vedome či nevedome zanecháva. Na rozdiel od bežného ústneho rozhovoru zostávajú fotografie, komentáre aj údaje o polohe uložené na vzdialených serveroch a môžu byť kedykoľvek vyhľadané alebo skopírované tretími stranami. V dôsledku neuváženého zverejňovania citlivých informácií – napríklad adresy bydliska, osobných dokladov či aktuálneho pohybu – tak vzniká priestor na zásah do súkromia i majetkovú ujmu.',
        'V odbornej praxi rozlišujeme technické a manipulatívne hrozby, pričom obe skupiny sa na sociálnych sieťach často prelínajú. Medzi najrozšírenejšie formy útokov patrí phishing, pri ktorom sa páchateľ snaží vylákať prihlasovacie údaje prostredníctvom falošného odkazu napodobňujúceho prihlasovaciu stránku služby. Využívajúc metódy sociálneho inžinierstva, útočníci zneužívajú aj cudzie odcudzené účty, z ktorých oslovujú priateľov obete so žiadosťou o zaslanie peňazí alebo overovacieho kódu. Ako vo svojich metodických odporúčaniach upozorňuje Národné centrum kybernetickej bezpečnosti SK-CERT, „najzraniteľnejším článkom informačnej bezpečnosti nie je technológia, ale nepozorný používateľ“.',
        'Účinná prevencia spočíva v kombinácii technického zabezpečenia účtu a zodpovedného správania. Technický základ predstavuje silné, jedinečné heslo doplnené o dvojfaktorovú autentifikáciu, pri ktorej systém okrem hesla vyžaduje aj druhý nezávislý prvok, napríklad jednorazový kód v mobilnej aplikácii alebo biometrické overenie. Ak by útočník heslo aj získal, bez prístupu k druhému faktoru sa do účtu neprihlási. Rovnako dôležité je obmedzenie viditeľnosti profilu len pre okruh známych osôb a dôsledné overovanie zdrojov pred kliknutím na externé odkazy.',
        'Z uvedených poznatkov vyplýva, že bezpečný pohyb na sociálnych sieťach nie je jednorazovým nastavením, ale súborom návykov spájajúcich technickú ochranu s kritickým myslením. Keďže digitálne hrozby sa neustále vyvíjajú, znalosť princípov ochrany osobných údajov predstavuje v súčasnej informačnej spoločnosti nevyhnutnú podmienku bezpečnej online komunikácie.'
      ]
    },
    checklist: [
      'Úvod vymedzuje pojem alebo problém.',
      'Vysvetľujem príčiny, dôsledky a súvislosti (deduktívne alebo induktívne).',
      'Každú tézu podopiera objektívny argument, fakt, citát alebo príklad.',
      'Používam odborné termíny, neutrálny jazyk a zložené súvetia.',
      'Píšem v 1. os. pl. alebo v 3. os. (bez „podľa mňa“, zvolacích viet a troch bodiek).',
      'Záver zhŕňa hlavné poznatky.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'jasné vysvetlenie problému', 'argumenty (tvrdenia s dôkazmi)', 'citáty, bibliografické záznamy a pod.', 'objektívnosť'],
      kompozicia: ['výkladový slohový postup (dodržanie žánrovej formy)', 'nadväznosť a logickosť textu', 'členenie textu'],
      jazyk: [...JAZYK_ZAKLAD, 'zložené súvetia, polovetné konštrukcie'],
      styl: ['lexika typická pre náučný štýl – odborné termíny, neutrálnosť', 'objektívnosť – 1. os. pl. alebo 3. os. sg.']
    }
  },

  {
    slug: 'slavnostny-prejav',
    name: 'Slávnostný prejav',
    short: 'Rečnícky prejav k príležitosti, oslovenie a pátos.',
    lead: 'Jeden z najpôsobivejších jazykových prejavov (spolu so smútočným prejavom). Je to hovorená hodnotiaca úvaha, ktorá dáva rečníkovi priestor ukázať talent a rečnícke schopnosti. Aj keď môže mať spoločné znaky s výkladom (napr. v jubilejnom prejave k výročiu osobnosti, školy či knižnice sa približujú míľniky a hodnotí sa tvorba alebo prínos), úvahové prvky v ňom vždy prevládajú.',
    facts: [
      { label: 'Slohový postup', value: 'výkladový s prvkami úvahy' },
      { label: 'Štýl', value: 'rečnícky' },
      { label: 'Pozor', value: 'na konci bez poďakovania za slovo' }
    ],
    sections: [
      {
        id: 'styl',
        title: 'Rečnícky štýl a jeho znaky',
        lead: 'Ak chceš slávnostný prejav pochopiť a dobre napísať, je dobré si najprv zopakovať rečnícky štýl, do ktorého patrí. Komunikantmi sú <strong>rečník a publikum</strong> a jeho funkciou je presviedčať, informovať, prezentovať, komentovať, agitovať, sprevádzať slávnostnou atmosférou, zapôsobiť na city poslucháča aj zabávať.',
        cards: [
          {
            term: 'Komunikačná sféra',
            text: 'verejná (slávnostné zhromaždenia, oslavy výročí, moderovanie v masmédiách), pracovná (pracovné zhromaždenia, vedecké konferencie) aj súkromná (rodinné slávnosti)'
          },
          {
            term: 'Verejnosť',
            text: 'štýl verejnej komunikácie, ktorý sa realizuje aj v súkromí; využíva výhradne spisovný jazyk a pre širokú verejnosť len všeobecne známe cudzie slová (napr. sympatia)'
          },
          {
            term: 'Ústnosť a písomnosť',
            text: 'väčšina prejavov sa vopred písomne pripraví a následne prednesie; rečník prispôsobuje lexiku a skladbu vety publiku a využíva zvukové prostriedky reči'
          },
          {
            term: 'Sugestívnosť',
            text: 'snaha zapôsobiť na city poslucháča, získať ho, presvedčiť a ovplyvniť – nadnesený pátos, opakovanie slov, oslovovanie publika, dramatické pauzy a výzva v závere'
          },
          {
            term: 'Adresnosť',
            text: 'prejavy majú zvyčajne kolektívneho príjemcu (<em>Milí naši hostia!</em>), len niektoré sú venované oslave jedného človeka (<em>Drahý náš dedko!</em>)'
          },
          {
            term: 'Názornosť',
            text: 'využíva sa najmä na prednáške a prezentácii – modely, prezentácie, portréty, videonahrávky a iný sprievodný materiál'
          }
        ]
      },
      {
        id: 'zanre',
        title: 'Žánre a slohové postupy',
        list: [
          '<strong>Agitačné žánre</strong> (cieľom je agitovať a presvedčiť): agitačný prejav, obžaloba, obhajoba, diplomatická reč, politická reč, súdna reč.',
          '<strong>Náučné žánre</strong> (cieľom je naučiť, prezentovať, informovať a vzdelávať): prednáška, referát, diskusia, polemika, kázeň.',
          '<strong>Príležitostné žánre</strong> (cieľom je vytvoriť atmosféru, vzbudiť emócie a sprevádzať podujatím): privítací, otvárací, pozdravný, <strong>slávnostný</strong>, sobášny či pohrebný prejav a prípitok.',
          '<strong>Výkladový postup</strong> je dominantným výstavbovým princípom (prvky výkladu v prednáške a referáte; prvky úvahy v slávnostnom prejave, príhovore či diskusnom príspevku).',
          '<strong>Opisný a rozprávací postup</strong> sa uplatňuje v častiach textu (výpočet dobrých vlastností a činov jubilanta, príhoda v spomienkovom prejave); <strong>informačný postup</strong> v prezentácii, vedeckom referáte či súdnej reči.'
        ]
      },
      {
        id: 'prostriedky',
        title: 'Výrazové prostriedky',
        lead: 'Výrazové prostriedky sú bohaté a rôznorodé – slúžia na získanie publika. Väčšina slov patrí medzi spisovné, no častejšie než neutrálne sa vyskytujú slová štylisticky príznakové a emocionálne.',
        cards: [
          {
            term: 'Lexikálne prostriedky',
            text: 'synonymá, homonymá, knižné a zastarané slová, biblizmy, všeobecne známe cudzie slová, citovo príznakové slová, eufemizmy a frazeologizmy',
            example: 'vyhrávať – víťaziť, pole – roľa · roh (zvieraťa, budovy, hudobný nástroj)'
          },
          {
            term: 'Antonymá a kontrast',
            text: 'zdôrazňovaním protikladných vlastností predmetov, dejov či myšlienok vytvárajú kontrast a nabádajú poslucháča zamyslieť sa',
            example: 'príchody – odchody, živý – mŕtvy, plusy – mínusy'
          },
          {
            term: 'Obrazné pomenovania (trópy)',
            text: 'metafory, prirovnania, epitetá, parafrázy a citáty, okrídlené výrazy, exemplá, aforizmy a bonmoty',
            example: 'potoky sĺz, smädná dúha, černejší v černi noci'
          },
          {
            term: 'Anafora a paralelizmus',
            text: 'hromadenie a opakovanie výrazov znásobuje myšlienku; anafora opakuje slová na začiatku viet, paralelizmus rovnakú vetnú stavbu',
            example: 'My s láskou prijímame vaše priateľstvo, váš cit, vašu oddanosť.'
          },
          {
            term: 'Epanastrofa',
            text: 'opakovanie toho istého slova alebo skupiny slov na konci jednej vety a na začiatku nasledujúcej vety',
            example: 'Záleží nám na vašom šťastí. Na šťastí, ktoré bude sprevádzať vašu lásku.'
          },
          {
            term: 'Syntaktické prostriedky',
            text: 'rečnícka a básnická otázka, rečnícka odpoveď, zvolacie vety, vytýčený vetný člen, vsuvky a série jednočlenných viet',
            example: 'Treba toto všetko ešte dôraznejšie podčiarkovať? Treba, pretože aj zrejmé pravdy niektorí ľudia nechcú počuť.'
          },
          {
            term: 'Zvukové prostriedky',
            text: 'pri ústnom prednese rozhoduje práca s hlasom – melódia viet, tempo reči, dôraz a dramatická pauza'
          },
          {
            term: 'Neverbálne prostriedky',
            text: 'sila hlasu, mimika, gestika, postoj tela (posturika), celkový vzhľad (imidž), vzdialenosť medzi komunikantmi (proxemika) či využitie hudby popri reči'
          }
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        lead: 'Slávnostný prejav má trojčlennú stavbu (úvod, jadro, záver); v krátkych príležitostných prejavoch býva prvá veta úvodom a posledná záverom.',
        steps: [
          {
            term: 'Oslovenie',
            text: 'Píše sa ako osobitný odsek odsadený od ľavej zvislice, za ním nasleduje výkričník alebo čiarka. Ak sú prítomní funkčne na rovnakej úrovni, prednosť majú ženy; vo funkčne zmiešanej spoločnosti oslovujeme ako prvého najvyššie postaveného človeka (vymenúvanie viacerých osôb sa nazýva enumeratívne oslovenie). V prejave ho môžeme funkčne zopakovať – uprostred vety ho vyčleníme čiarkami.',
            example: 'Vážený pán minister, vážená pani riaditeľka, vážený profesorský zbor, milí spolužiaci!'
          },
          {
            term: 'Pomenovanie príležitosti',
            text: 'Vo všetkých rečníckych útvaroch musíme hneď po oslovení objasniť príležitosť, pri ktorej sa slávnosť koná.',
            example: 'Stretli sme sa dnes na slávnosti, na ktorú sme tak dlho čakali…'
          },
          {
            term: 'Jadro',
            text: 'Postupuje v štyroch krokoch: a) objasnenie pojmov, b) analýza – rozoberanie témy a hodnotenie obdobia, c) porovnanie, zovšeobecnenie a podloženie tvrdenia citátom, d) vyslovenie predpokladu, viery či presvedčenia autora.',
            example: 'Stužková slávnosť je slávnosťou študentov už od 16. storočia… · Štyri roky, ktoré sme prežili… · Najväčšia vďaka patrí… · Ako by sme dnes mohli nespomenúť… · Stojíme tu pred vami ako tisíce iných… · Po dnešnom slávnostnom dni precítime slová básnika: „Postoj, chvíľa, si krásna!“ · Som presvedčený, že všetci z nás…'
          },
          {
            term: 'Záver',
            text: 'Zhrnutie, výzvy, želanie príjemného večera či úspechov do budúcnosti, zopakovanie vďaky oslávencovi alebo rodičom a vyjadrenie úcty (bez poďakovania za slovo).'
          }
        ]
      }
    ],
    tips: [
      'Oslovenie a pomenovanie príležitosti nesmú chýbať – sú súčasťou hodnotenia kompozície.',
      'Pracuj s emóciami, no nie frázami. Citát alebo okrídlený výraz musí sedieť k príležitosti.',
      'Píš tak, aby sa prejav dal nahlas predniesť – rytmus, opakovanie, pauzy.',
      'Na rozdiel od diskusného príspevku na konci za slovo neďakuješ.'
    ],
    sample: {
      title: 'Slávnostný prejav – 50. narodeniny',
      note: 'Ukážka slávnostného prejavu z prezentácie – študentská práca (zdroj: zones.sk, cit. 18. 2. 2014; jazykovo a štylisticky upravené).',
      paras: [
        'Drahá oslávenkyňa, milí hostia!',
        'Keď som pred niekoľkými dňami listovala vo svojom kalendári, míňala som v ňom desiatky kolónok s menami, číslami a každodennými povinnosťami. Zastavila som sa až na augustovej strane. Spočiatku vyzerala ako mnohé iné, plná bežných letných dní, no odrazu mi do očí padol dátum označený červeným výkričníkom. V okienku „Sobota 20. augusta“ svietil nápis, pri ktorom sa mi okamžite rozžiaril úsmev: „Maminka – päťdesiatka!“ A práve táto vzácna chvíľa nás dnes všetkých priviedla k spoločnému slávnostnému stolu.',
        'Tak ako my listujeme v stolovom kalendári, listuje aj neúprosný čas v knihách našich životov, kde každá strana znamená jeden rok a každý deň do nej vpisuje nové riadky. Čo je však päťdesiat rokov v živote človeka, ktorý ich naplnil láskou a obetavosťou? Nie je to len okrúhle číslo, ale predovšetkým bohatý príbeh. Dnes sa čas akoby na okamih zastavil a dovolil mi, milá mamička, s úctou nazrieť do tvojej knihy života.',
        'Svoju prvú kapitolu si začala písať v slnečný augustový deň ako štvrté dieťa v rodine, no rodičia ťa od prvej chvíle zahŕňali rovnakou láskou ako tvojich starších súrodencov. Roky sa míňali a s nimi aj bezstarostné dni plné detského smiechu i drobných sĺz nad rozbitými kolenami. Prišiel čas dospelosti – čas nových povinností, priateľstiev a veľkej lásky. Lásky, ktorá ti do cesty priviedla muža tvojho života, s ktorým ste darovali život a bezpečný domov dvom deťom – mne a môjmu bratovi.',
        'Odvtedy, čo si pamätám, stojíš pevne pri mne, keď zablúdim, veríš mi, keď iní pochybujú, a podržíš ma, keď si sama neviem rady. Si pre mňa láskavou matkou, si pre mňa najlepšou priateľkou, si pre celú našu rodinu neochvejnou oporou. Niet divu, že francúzsky spisovateľ Honoré de Balzac napísal: „Srdce matky je priepasť, na dne ktorej sa vždy nájde odpustenie.“ Presne takouto hĺbkou lásky a porozumenia nás i svojich priateľov obdarúvaš každý jeden deň.',
        'Dnes čas v tvojej knihe života slávnostne uzatvára prvých päťdesiat popísaných strán a otvára novú, čistú kapitolu. Je to vzácny míľnik, pri ktorom sa môžeme zastaviť uprostred zhonu všedných dní a dopriať peru času, aby na úvod ďalšej päťdesiatky vpísalo krasopisom slová vďaky, obdivu a úprimného želania: „Všetko najlepšie!“',
        'Pozdvihnime teda, milí priatelia, čaše a pripime na pevné zdravie, šťastie a spokojnosť našej drahej oslávenkyne – nech sú všetky nasledujúce strany jej životnej knihy naplnené slnkom, radosťou a láskou nás všetkých!'
      ]
    },
    checklist: [
      'Začínam oslovením v osobitnom odseku.',
      'Pomenoval/a som príležitosť.',
      'Jadro hodnotí, porovnáva a obsahuje citát.',
      'Použil/a som rečnícke figúry – anaforu, rečnícku otázku.',
      'Záver obsahuje výzvu alebo želanie.',
      'Na konci neďakujem za slovo.'
    ],
    criteria: {
      obsah: ['dodržanie témy', 'vlastné hodnotenie aktuálnych javov (subjektívno-objektívny prístup)'],
      kompozicia: ['zodpovedajúci slohový postup (dodržanie žánrovej formy)', 'nadväznosť a logickosť textu', 'členenie: oslovenie, úvod, jadro, záver'],
      jazyk: [...JAZYK_ZAKLAD, 'pestrá modalita viet'],
      styl: ['emocionálne pôsobiace prvky', 'parafrázovanie a citovanie, okrídlené výrazy, exemplá, aforizmy, bonmoty', 'tvorivé využitie lexiky', 'subjektívnosť pohľadu', 'originálnosť, nie frázovitosť']
    }
  }
];

export const utvarBySlug = Object.fromEntries(slohoveUtvary.map((u) => [u.slug, u])) as Record<SlohSlug, SlohovyUtvar>;

// ---------------------------------------------------------------- pôvod a zdroje
// Údaje z titulných a záverečných snímok prezentácií (Desktop/sloh, 2014). Literatúra a zdroje ukážok
// sú prepísané tak, ako ich uvádzajú prezentácie; študentské ukážky sú jazykovo upravené.

/** Projekt, v ktorom prezentácie vznikli (text z titulných snímok) */
export const PROJEKT = {
  name: 'Moderná škola – základ úspechu',
  scope: 'v rámci inovácie obsahu, metód a foriem vzdelávania',
  program: 'Moderné vzdelávanie pre vedomostnú spoločnosť',
  funding: 'Projekt je spolufinancovaný zo zdrojov EÚ',
  series: 'Rukoväť na písanie slohovej práce',
  author: 'Mgr. Peter Beňo',
  school: 'Stredná odborná škola podnikania, Veľkomoravská 14, Trenčín',
  year: 2014,
  /** rok poslednej aktualizácie obsahu na webe */
  updated: 2026,
  /** podľa log na titulnej snímke */
  operacnyProgram: 'Operačný program Vzdelávanie',
  fond: 'Európsky sociálny fond'
};

/** Logá z titulnej snímky prezentácií (public/images/projekt-eu), v pôvodnom poradí */
export const PROJEKT_LOGA = [
  { src: '/images/projekt-eu/op-vzdelavanie.jpg', alt: 'Operačný program Vzdelávanie', width: 268, height: 268 },
  { src: '/images/projekt-eu/asfeu.jpg', alt: 'Agentúra Ministerstva školstva, vedy, výskumu a športu SR pre štrukturálne fondy EÚ', width: 669, height: 154 },
  { src: '/images/projekt-eu/eu-esf.jpg', alt: 'Európska únia – Európsky sociálny fond', width: 291, height: 270 }
];

export type LitKey = 'weidler' | 'hincova' | 'caltikova3' | 'caltikova4' | 'caltikovaEnigma' | 'interne';

/** Použitá literatúra zo záverečných snímok prezentácií (HTML: <em> pre názov diela) */
export const LITERATURA: Record<LitKey, string> = {
  caltikova3: 'CALTÍKOVÁ, M.: <em>Slovenský jazyk 3 pre stredné školy.</em> Bratislava: Orbis Pictus Istropolitana 2010, 64 s. ISBN 978-80-81-20017-5',
  caltikova4: 'CALTÍKOVÁ, M.: <em>Slovenský jazyk 4 pre stredné školy.</em> Bratislava: Orbis Pictus Istropolitana 2009, 64 s. ISBN 978-80-81-20017-5',
  caltikovaEnigma: 'CALTÍKOVÁ, M.: <em>Slovenský jazyk a literatúra.</em> Bratislava: Enigma 2010, 369 s. ISBN 978-80-89132-93-5',
  hincova: 'HINCOVÁ, K. – HÚSKOVÁ, A.: <em>Slovenský jazyk pre 1. – 4. ročník stredných škôl.</em> Bratislava: Slovenské pedagogické nakladateľstvo 2008. ISBN 978-80-10-01557-3',
  weidler: 'WEIDLEROVÁ, A. – WEIDLER, E.: <em>Sloh na dlani.</em> Druhé vydanie. Bratislava: Príroda 2005. ISBN 80-07-01332-6',
  interne: 'Interné materiály SOŠ podnikania Trenčín (ukážka žiackej práce).'
};

/** Poradie v súhrnnom zozname literatúry (abecedne podľa autora) */
export const LITERATURA_PORADIE: LitKey[] = ['caltikova3', 'caltikova4', 'caltikovaEnigma', 'hincova', 'weidler', 'interne'];

export interface SlohZdroj {
  /** názov prezentácie, z ktorej útvar vychádza; null = text bez predlohy v prezentáciách */
  prezentacia: string | null;
  literatura: LitKey[];
  /** zdroje ukážok uvedené na záverečnej snímke prezentácie */
  ukazky?: string[];
  /** ID krátkeho výukového videa na YouTube (youtu.be/<id>) – neformálna podoba učiva, na stránke útvaru ako „Na oživenie“ */
  video?: string;
}

export const youtubeUrl = (id: string) => `https://youtu.be/${id}`;

/** Ku každému útvaru: prezentácia a literatúra uvedená na jej poslednej snímke */
export const ZDROJE: Record<SlohSlug, SlohZdroj> = {
  uvaha: { prezentacia: 'Rukoväť na písanie slohovej práce – úvaha', literatura: ['caltikova3', 'hincova', 'weidler', 'interne'], video: 'CUef75lLeBo' },
  charakteristika: {
    prezentacia: 'Rukoväť na písanie slohovej práce – charakteristika',
    literatura: ['weidler', 'hincova', 'caltikova3'],
    ukazky: ['Ukážka <em>Sme naozaj brat a sestra?</em> – študentská práca, zones.sk (cit. 4. 3. 2014; jazykovo a štylisticky upravené).']
  },
  'umelecky-opis': {
    prezentacia: 'Rukoväť na písanie slohovej práce – umelecký opis',
    literatura: ['weidler', 'hincova', 'caltikovaEnigma'],
    ukazky: ['Ukážka <em>Čaro Vianoc</em> – študentská práca, zones.sk (cit. 14. 3. 2014; jazykovo a kompozične upravené).']
  },
  rozpravanie: {
    prezentacia: 'Rukoväť na písanie slohovej práce – rozprávanie',
    literatura: ['caltikova3', 'hincova', 'weidler'],
    ukazky: ['Ukážka <em>Prvý deň v škole</em> – študentská práca, zones.sk (cit. 18. 2. 2014; jazykovo a kompozične upravené).']
  },
  'diskusny-prispevok': {
    prezentacia: 'Rukoväť na písanie slohovej práce – diskusný príspevok',
    literatura: ['caltikovaEnigma', 'hincova', 'weidler'],
    ukazky: ['Ukážka <em>Od septembra v školách po novom</em> – študentská práca, zones.sk (cit. 19. 2. 2014; jazykovo a kompozične upravené).']
  },
  'beletrizovany-zivotopis': {
    prezentacia: 'Rukoväť na písanie slohovej práce – beletrizovaný životopis',
    literatura: ['weidler', 'hincova', 'caltikova3'],
    ukazky: ['Ukážka <em>Moja cesta životom</em> – študentská práca, zones.sk (cit. 7. 3. 2014; jazykovo a štylisticky upravené).'],
    video: 'k9z7-3RXGFE'
  },
  vyklad: {
    prezentacia: null,
    literatura: ['caltikova3', 'caltikovaEnigma', 'hincova', 'weidler'],
    ukazky: ['Vzorová ukážka <em>Bezpečne na sociálnych sieťach</em> – spracované k maturitnej téme PFIČ MS 2023.']
  },
  'slavnostny-prejav': {
    prezentacia: 'Rukoväť na písanie slohovej práce – slávnostný prejav',
    literatura: ['caltikova4', 'hincova'],
    ukazky: ['Ukážka <em>Slávnostný prejav – 50. narodeniny</em> – študentská práca, zones.sk (cit. 18. 2. 2014; jazykovo a štylisticky upravené).'],
    video: 'RKjHqJs5PwE'
  }
};

/** Oficiálne dokumenty NIVaM, z ktorých sú kritériá a témy */
export const ZDROJE_NIVAM = [
  'NIVaM: <em>Kritériá na hodnotenie písomnej formy internej časti maturitnej skúšky zo slovenského jazyka a literatúry, maďarského jazyka a literatúry a ukrajinského jazyka a literatúry.</em> Február 2026.',
  'NIVaM (NÚCEM): <em>Témy PFIČ MS – slovenský jazyk a literatúra</em>, ročníky 2014 – 2026. Dostupné na <a href="https://www2.nucem.sk/sk/merania/narodne-merania/maturita" target="_blank" rel="noopener noreferrer">www2.nucem.sk</a>.'
];
