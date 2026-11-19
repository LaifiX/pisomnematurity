// Slohové útvary písomnej formy internej časti maturitnej skúšky (PFIČ MS) zo SJL.
// Obsah: prezentácie Mgr. Petra Beňa „Rukoväť na písanie slohovej práce“ (SOŠ podnikania Trenčín, 2014),
// upravené a doplnené; výklad je nový návrh (garant ho skontroluje).
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
      title: 'Sociálna internetová sieť, náš sluha či pán?',
      note: 'Ukážka žiackej práce z prezentácie (3. ročník, SOŠ podnikania Trenčín, šk. rok 2013/2014). Téma maturity 2013.',
      paras: [
        'Považujete internetovú sieť za potrebnú v dnešnej dobe? Dokáže človek žijúci v tejto dobe bez nej prežiť?',
        'V dnešnej dobe je internetová sieť používaná skoro vo všetkých krajinách sveta a je určite každému známa. Ľudia používajú internet v robote, doma, v škole, vo voľnom čase, prosto stále a všade. Niektorí ani nevedia bez nej existovať. A pritom ľudia o takejto veci pred niekoľkými rokmi ani len nerozmýšľali.',
        'Internetová sieť má niekoľko výhod. Používame ju na vyhľadávanie informácií potrebných do školy, práce, ale aj ku každodennému životu. Používame ju na konverzáciu medzi priateľmi a známymi, na zoznamovanie sa cez Facebook, Twitter a iné internetové služby. Ale ako skoro pri všetkom, aj internetová sieť má svoje nevýhody.',
        'Dnešní ľudia, a najmä mládež, trávia až príliš veľa voľného času surfovaním po internete. Namiesto chodenia von s priateľmi, poznávania nových ľudí a získavania zážitkov si ľudia pridávajú svojich akože priateľov na Facebooku a nič o nich nevedia. Častým trávením času za počítačmi sa ľudia menej pohybujú, priberajú, a preto rastú aj ich zdravotné problémy. Rodičia nechávajú svoje deti sedieť za počítačmi, tabletmi a mobilnými telefónmi, ktoré im sami kupujú, a nepošlú ich radšej von zabaviť sa s ďalšími deťmi.',
        'Dnešný svet sa točí väčšinou okolo internetu. Ľudia by ho mali obmedziť a radšej ísť von s priateľmi alebo si prečítať nejakú dobrú knihu, o ktorej ani nevedia, že ju majú vo svojej domácej knižnici. Mali by si chodiť požičiavať knihy aj do knižníc a vzdelávať sa, pretože ak budú doma len sedieť za počítačom alebo televízorom, tieto budovy o niekoľko rokov ani nebudú potrebné. Potom sa budeme zamýšľať nad tým, kde a kedy sme spravili chybu, nemyslíte?'
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
          { term: 'Porovnávacia', text: 'charakterizuje a porovnáva najmenej dve postavy alebo skupiny (zhody a protiklady)' }
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
      note: 'Ukážka porovnávacej charakteristiky z prezentácie – študentská práca (zdroj: zones.sk, cit. 4. 3. 2014; jazykovo upravené).',
      paras: [
        'Túto otázku som si položila už veľakrát. Síce to máme na papieri, často však pochybujem o tom, že sme súrodenci.',
        'Navonok sme dva veľké protiklady. Ja – čierna – som od útleho detstva tmavovláska s olivovozelenými očami a pre mňa typickou gestikuláciou. On – biela – je modrooký blondín s bledou pokožkou, nepoužívajúci žiadnu mimiku a gestikuláciu. Keď však začneme rozprávať, máte pocit, akoby hovorila jedna osoba. Sme rovnako nezodpovední, no jeho nezodpovednosť už dávno predstihla tú moju. Zatiaľ čo ja v dôležitej veci beriem zodpovednosť na seba a splním svoje záväzky, on ich ignoruje.',
        'Po vstupe do jeho izby máte pocit, že ste sa ocitli v chlieve. Môj brat sa totiž riadi heslom: „Poriadok je len pre hlupákov. Inteligentný človek sa vyzná v chaose.“ Hneď vedľa jeho izby nájdete izbu takmer vždy upratanú a farebne dokonale zladenú. Tá patrí mne. Často mám pocit, že Ivova úloha je robenie neporiadku a tá moja behanie za ním a upratovanie. Ja míňam vreckové na kozmetiku, on si potrpí na tom, aby mal vždy najnovší mobil a tenisky všetkých možných farieb a štýlov, ktoré aj tak po mesiaci prestane nosiť.',
        'Líšia sa aj naše záľuby. On bol vždy skôr technický typ, zaujímajúci sa o počítače a autá, a ja typ športový so zmyslom pre umenie. Rozdielne sú aj naše ambície. Možno je to skoro, ale ja už teraz myslím na svoju budúcnosť a snažím sa ju postupne budovať.',
        'On stále žije len prítomnosťou, v ktorej nič nie je problémom a v ktorej budúcnosť zatiaľ miesto nemá. V niečom sme úplne odlišní, v niečom rovnakí. To však nič nemení na našej súrodeneckej láske.'
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
      obsah: ['dodržanie témy', 'enumerácia vlastností osoby vo vzťahu k sebe, k obdobiu, k práci', 'komplexná charakteristika z viacerých uhlov pohľadu'],
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
      note: 'Ukážka umeleckého opisu z prezentácie – študentská práca (zdroj: zones.sk, cit. 14. 3. 2014; jazykovo upravené).',
      paras: [
        'S prvým vdýchnutím mrazivého vzduchu a nesmelou vločkou skrytou v dlani spoznáte, že prichádzajú Vianoce. Tlmený jas žiari nielen z preplnených výkladov, ale odráža sa i v očiach ľudí. Teplo, neha, láska… Nastal čas, keď tie najvzácnejšie city ožívajú, aby aj v dušiach ľahostajných prebudili zvyšky dobra, ktoré často skrývame…',
        'Severák si už hvízda svoju veternú koledu, roztopašne kradne deťom čiapky. Vyštípané líca. Horúca červeň prebudená chladom. Nedozerné hĺbky vôd, teraz v škrupine krehkej a tajomnej zároveň. Čo sa skrýva pod hladinou?',
        'Mocná príroda si zachováva vlastné čarokrásno, čakajúce na objavenie tými, čo sú vnímaví k nepolapiteľnému pôvabu zimného podvečera. Komu telo neobjíme mrazivá obruč, studená, tvrdá, naliehavá, keď sa všade navôkol prestrel hmlistý závoj mliečnobielej chumelice? Ešte vždy je tu záchrana. Svetielko v diaľke. Mámi, pozýva bližšie…',
        'Získať ho nie je samozrejmé. Iskierka ľahko nepreskočí. Hrejivý pocit radosti zo stretnutí s rodinou, ten treba hľadať v sebe. Hravý plamienok má najradšej srdcia detí. Potešenie, čisté a neskalené, vpečatí drobným tváram onen výraz, za ktorý by dospelí zaplatili pokladmi sveta. Načo siahať do vreciek, načo mince, trblietavé odlesky drahokamu? Tajomstvo Vianoc prebýva vo voňavom ihličí, šíri sa s arómou škorice, vanilky…',
        'Dar? Z hĺbky srdca. Komu? Tým, pre ktorých stojí za to žiť. Čo? Úsmev a objatie. Bozk pod imelom, dychtivým svedkom zblíženia. Kto dá viac? Ten, čo cíti na jazyku opojnú chuť medu. Kúzlo bez prútika čarodeja, bez omamných odvarov, krištáľových gulí. Všetko máme skryté v dlaniach, zbrázdených cestičkami dotykov. Bytosti potrebujú vnímať ľudské teplo po svojom boku… Nielen v čas vianočný.'
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
            term: 'Reč postáv',
            text: 'výpovede osôb, ktoré hodnotia a komentujú príbeh, vnášajú doň úvahy a subjektívne pocity. Realizuje sa priamo (graficky: dvojbodka, úvodzovky, pomlčky, osobitný odsek) alebo nepriamo (nepriama a polopriama reč)'
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
            text: 'pred priamou rečou naznačuje pokojný, intelektuálny priebeh; za priamou rečou pôsobí expresívne a dynamicky v citovo napätej komunikácii',
            example: 'Mišo skríkol: „A polieval si ju?“ · „Vivat a vivat, kde budeme bývať,“ ozvalo sa z druhého boku záhrady. (J. Kalinčiak)'
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
      note: 'Ukážka rozprávania z prezentácie – študentská práca (zdroj: zones.sk, cit. 18. 2. 2014; jazykovo upravené).',
      paras: [
        'Kto by si nepamätal na tú zmes pocitov a vôní, ktorá sa spája s prvým dňom v škole? Doteraz vidím všetky tie tváre a pohľady, ktoré na mňa boli upreté… a viem si živo predstaviť aj neutíchajúci tlkot môjho srdca. Strach z niečoho nového a hneď za tým aj zvedavosť. Otázky sa mi rodili v hlave a hneď si hľadali aj odpovede. Nič som nevnímal. Prípravy na tento veľkolepý deň sa konali už niekoľko mesiacov predtým. Otravné nákupy, z ktorých mala mamina väčšiu radosť ako ja. Nekonečné otázky, akej farby má byť moja prvá školská taška, ma privádzali k zúfalstvu už v takom mladom veku. Potom nasledovali dlhé prednášky o tom, ako sa smiem a ako nesmiem správať. Poviem vám, bolo to naozaj únavné. Už od svojich skorých liet som bol dosť živé dieťa a predstava tichého sedenia v školskej lavici sa mi nezdala veľmi lákavou.',
        'Vedel som presne, čoho sa budem musieť vzdať. Poobedňajšieho spánku. Dopoludňajšieho prehrabovania v pieskovisku. A, pravdaže, aj sladkého hrania. Mala vraj nastať zmena. Radikálna. Aspoň tak ma určitý čas strašili.',
        'Prišiel deň D. Bolo skoré ráno. Mama ma obliekla a dávala mi aj posledné rady: „Nie, aby si vykrikoval neslušné slová… v lavici sa nevrť… hovor, len keď sa ťa pani učiteľka niečo spýta…“ Dôležito som prikyvoval svojou malou hlávkou, až kým mi mama nezapla košeľu tesne pod krk. Bol som pripravený. Tašku som si však na plecia nemohol vziať, pretože by ma s najväčšou pravdepodobnosťou stiahla k zemi.',
        'Malými krôčikmi som kráčal celou cestou do školy za mamou. Nikam som sa neponáhľal a ani mama nie. Boli sme tam aj tak prví. A tak som mal možnosť všetko podrobne sledovať. Príchody detí, slzy v očiach tých ustráchanejších, úsmev na perách tých živších, roztržité pohľady ich rodičov, ktoré sa pýtali: „Kde to nechávam svoje dieťa?“ Aj v očiach mojej mamy sa zračil ten pohľad… ale rýchlo zmizol, len čo sa ku mne otočila, aby sa rozlúčila. Až teraz po rokoch som pochopil, že mi tým len nechcela nahnať ešte väčší strach, než aký som pociťoval. Dala mi pusu na čelo, čo je asi typickým rozlúčkovým gestom všetkých mám.',
        'Zostal som stáť na školskom dvore sám. Pomaly som sa obzeral vôkol, až som neďaleko zbadal skupinu svojich kamarátov. Človeku je hneď veselšie, keď vie, že nemusí nové situácie prežívať sám. Spolu sme sa dokonca dostali aj do jednej triedy a ja som vedel, že to už vôbec nebude také zlé, ako som si sprvu myslel.',
        'Pani učiteľka mala na tvári úsmev, ktorý si aj po rokoch pamätám – úsmev, ktorý hovoril: „Ste v bezpečí, nemáte sa čoho báť. Som tu na to, aby ste prišli ku mne, keď sa budete báť alebo keď budete potrebovať pomoc.“ Dve hodiny ubehli ako voda. Spoznal som svojich spolužiakov, našiel nových priateľov a zistil som, že možno aj pre mňa bude platiť heslo: „Škola hrou.“',
        'Z triedy som vyšiel s úsmevom na perách. Vložil som svoju dlaň do maminej a vedel som, že aj keď už zo mňa rastie chlap, tú teplú dlaň budem ešte v niektorých okamihoch svojho života potrebovať. Doma bol malý vypočúvací štáb: „Tak ako bolo? Aj si plakal? Dúfam, že si sa nebil hneď prvý deň!“ Oco a mama mali na mňa „more“ otázok, ale ja som bol aj tak mysľou inde. Cítil som, že sa práve v tento deň začína nová etapa môjho života, v ktorej budem čoraz viac zodpovedný sám za seba a za svoje činy. A pravdupovediac, začal som sa na to aj tešiť.'
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
      note: 'Ukážka diskusného príspevku z prezentácie – študentská práca (zdroj: zones.sk, cit. 19. 2. 2014; jazykovo upravené).',
      paras: [
        'Vážení prítomní!',
        'Dovoľte mi, aby som aj ja vyjadrila svoj názor na nový školský zákon, ktorý prednedávnom schválili v parlamente.',
        'Podľa mňa zákon obsahuje množstvo dobrých zmien, ale sú v ňom, bohužiaľ, aj zmeny, ktoré nie sú podľa môjho názoru veľmi prospešné. Zníženie počtu žiakov v triedach je veľmi dobré, čo môžem potvrdiť na základe vlastnej skúsenosti. Na základnej škole nás bolo v triede sedemnásť. Učitelia sa nám mohli viac venovať, mali sme viac príležitostí poopravovať si zlé známky. A teraz? Chodím na gymnázium, v triede nás je tridsaťšesť, a to je podľa mňa už veľa. Je pravda, že keď je nás tak hojne, je to väčšia zábava a menšia šanca, že nás profesor vyvolá odpovedať, keď náhodou nie sme pripravení. Ale aj tak sa mi to veľmi nepozdáva. Teraz by som síce nechcela, aby nás rozdelili, pretože na spolužiakov som si zvykla a obľúbila som si ich, ale v budúcnosti by bolo skutočne dobré, keby bol počet žiakov v triedach nižší.',
        'Časť zákona o redukcii učebných osnov považujem za pozitívnu, pretože občas mám pocit, že sa učíme veci, ktoré väčšina z nás nebude nikdy v živote potrebovať a ktoré aj tak zabudneme. Myslím si, že profesori by túto zmenu tiež privítali. Som si vedomá toho, že na úpravu osnov a vydanie nových učebníc treba veľa času, odborníkov, ktorí sa toho ujmú, a taktiež veľa peňazí, ale keď sa to už začalo, nech je to poriadne.',
        'Dúfam, že sa reforma školstva všetkým zainteresovaným napriek nedostatku času podarí zrealizovať a všetci budú v škole spokojnejší.',
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
        id: 'osnova',
        title: 'Osnova na precvičenie',
        lead: 'Napíš vlastný beletrizovaný životopis podľa osnovy a inšpiruj sa formuláciami v zátvorkách.',
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
      note: 'Ukážka beletrizovaného životopisu z prezentácie – študentská práca (zdroj: zones.sk, cit. 7. 3. 2014; jazykovo upravené).',
      paras: [
        'Bolo nádherné decembrové ráno, keď moje oči po prvýkrát zazreli svetlo života. Vonku husto snežilo a pomaly prichádzala vianočná atmosféra. Rodičia a aj celá moja rodina sa na mňa veľmi tešili. Vlastne som bola pre nich jeden veľký vianočný darček! A tu sa začala moja cesta životom. Spočiatku som bola malé tiché bábätko, ktoré len tak nenápadne vnímalo okolie. Ale mesiace pribúdali a ja som urobila svoj prvý krôčik. Moji rodičia boli veľmi šťastní, ale ešte nevedeli, čo ich čaká.',
        'Malé tiché bábätko sa zmenilo na chodiaci kazisvet. Všetko som len rozbíjala a ničila. O niečo neskôr som začala navštevovať škôlku. Priam som milovala to miesto, pretože som tam spoznala svojich prvých kamarátov. Aj keď v škôlke bolo veľmi dobre, v kútiku srdca som už túžila stať sa žiačkou. Ani to dlho nepotrvalo a zrazu nadišiel aj ten dlho očakávaný deň. Moja mamička ma chytila za ručičku a išli sme do školy. Pred jej bránami sa mi roztriasli nožičky a zmocnil sa ma strach. Len čo nás však privítala naša prvá pani učiteľka, strach zo mňa úplne opadol a mohol sa začať život žiaka. Učenie bolo hračkou, kým sme dostávali do žiackych knižiek včeličky a samé pochvaly.',
        'Asi v treťom ročníku som sa po prvýkrát zúčastnila atletickej súťaže. Pretekala som aj ja a súťaž som s veľkým náskokom vyhrala. Od tej chvíle sa mi začal venovať náš učiteľ telesnej výchovy. V atletike sa veľmi dobre vyznal, keďže sa jej sám venoval. Avšak atletika nebola mojím jediným koníčkom. Neskôr som sa začala venovať aj športovej streľbe a dievčenskému futbalu. Bolo toho na mňa veľa a pomaly som trávila viac času na súťažiach ako v škole. Aj keď som nechcela, musela som sa vzdať futbalu. Súťaže som mala neskutočne rada. Chodili sme tam vždy s nadšením a s túžbou vyhrať. Všetci sme sa navzájom podporovali, a preto vznikli medzi nami kamarátstva, ktoré trvajú až dodnes a verím, že budú trvať navždy! Hoci na našej škole bola aj menšina, ktorá nám závidela a neustále sa pýtala, načo je v živote dobrý šport, my sme sa nimi nezaoberali. Za nás hovorili naše výsledky.',
        'Čas však plynul neuveriteľnou rýchlosťou a my sme si mali vybrať stredné školy. Priznám sa, vôbec som netušila, kam chcem ísť ďalej. Tak som do prihlášky uviedla školy, ktoré navštevovali moje staršie kamarátky. Keď sa to dozvedeli učitelia, boli zhrození. Hneď na druhý deň prišli za mnou, dali mi na výber športové gymnáziá a povedali mi: „Nezahadzuj svoj talent!“ Spočiatku som o tom nechcela ani počuť. Neskôr som nad tým pouvažovala a zistila som, že majú pravdu a mala by som to skúsiť. Podporovali ma nielen v škole, ale aj doma a medzi priateľmi. Rozhodla som sa pre športové gymnázium v Nitre. Poctivo som sa pripravovala na talentové skúšky, ktoré som bez problémov zvládla.',
        'Bola som šťastná, že sa mi to podarilo, a hneď v ten deň sme to s kamarátkami poriadne oslávili. Posledný rok na základnej škole sme si užívali a robili samé šialené veci. Riaditeľňu sme navštevovali pravidelne každý týždeň a od učiteľov sme neustále počúvali, akí sme zlí a uletení. Nás to však vôbec nerušilo. Čas však stále len plynul a plynul.',
        'A potom to prišlo! Práve to, čoho sme sa tak neuveriteľne báli – rozlúčka so školou. Už len pomyslenie na to, že sa naše cesty rozdelia a že budem tráviť s mojimi najlepšími kamarátkami menej času, bolo hrozné. Keď sme už stáli na chodbe a naša pani riaditeľka prednášala svoj príhovor, len so slzami v očiach sme pozerali na našich kamarátov, rodičov a učiteľov, ktorí nám pomáhali celých deväť rokov. Teraz som už na škole, na ktorú ma dostali ľudia, ktorým na mne záleží, a za to im veľmi ďakujem. Ako a kde budem pokračovať, to ešte vôbec netuším. Viem len toľko, že chcem ukončiť vysokú školu a založiť si šťastnú rodinu. Už mi len držte palce, aby sa mi moje sny splnili!'
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
      { label: 'Slohový postup', value: 'výkladový' },
      { label: 'Štýl', value: 'náučný (odborný)' },
      { label: 'Osoba', value: '1. os. pl. alebo 3. os. sg.' }
    ],
    sections: [
      {
        id: 'znaky',
        title: 'Čo je výklad',
        list: [
          'Odpovedá na otázky <strong>prečo, ako, aké sú príčiny a dôsledky</strong>.',
          'Je <strong>objektívny</strong> – nejde o tvoj pocit, ale o overiteľné poznatky. Tým sa líši od úvahy.',
          'Pracuje s pojmami: najprv ich vymedzí, potom ich rozoberá, porovnáva a zovšeobecňuje.',
          'Opiera sa o argumenty, príklady, citáty a odkazy na zdroje.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Úvod', text: 'Vymedz tému a pojem – čo budeš vysvetľovať a prečo je to dôležité.' },
          { term: 'Jadro', text: 'Postupne vysvetľuj: znaky, príčiny, dôsledky, súvislosti. Každej myšlienke venuj odsek, podopri ju argumentom alebo príkladom.' },
          { term: 'Záver', text: 'Zhrň hlavné poznatky a vyvoď z nich všeobecný záver.' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk výkladu',
        cards: [
          { term: 'Odborné termíny', text: 'presné pomenovania z daného odboru; pri prvom použití ich vysvetli' },
          { term: 'Neutrálne slová', text: 'bez citového zafarbenia a bez hovorových výrazov' },
          { term: 'Autorský plurál', text: '1. os. pl. (<em>uvedieme, vidíme</em>) alebo neosobné vyjadrenie v 3. os.' },
          { term: 'Zložené súvetia', text: 'príčinné, dôsledkové, podmienkové; polovetné konštrukcie' },
          { term: 'Spájacie výrazy', text: 'zabezpečia logickú nadväznosť', example: 'preto, teda, v dôsledku toho, na rozdiel od, napríklad' },
          { term: 'Citáty a zdroje', text: 'odkaz na autora či dielo zvyšuje dôveryhodnosť' }
        ]
      }
    ],
    tips: [
      'Neprepadni úvahe: vyhni sa vetám typu „podľa mňa“, „cítim“. Vysvetľuj, nehodnoť.',
      'Pred písaním si urob osnovu – výklad stojí na logickom poradí myšlienok.',
      'Ku každému tvrdeniu pridaj príklad, fakt alebo citát.',
      'Pri literárnej téme (napr. 2015: znaky tvorby spisovateľov obdobia) uvádzaj konkrétnych autorov a diela.'
    ],
    checklist: [
      'Úvod vymedzuje pojem alebo problém.',
      'Vysvetľujem príčiny, dôsledky a súvislosti.',
      'Každé tvrdenie podopiera argument alebo príklad.',
      'Používam odborné termíny a neutrálny jazyk.',
      'Píšem v 1. os. pl. alebo neosobne, nie „podľa mňa“.',
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
    lead: 'Jeden z najpôsobivejších jazykových prejavov (spolu so smútočným prejavom). Je to hovorená hodnotiaca úvaha, ktorá dáva rečníkovi priestor ukázať talent a rečnícke schopnosti. Aj keď môže mať spoločné znaky s výkladom, úvahové prvky v ňom prevládajú.',
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
            example: 'Stužková slávnosť je slávnosťou študentov už od 16. storočia… · Štyri roky, ktoré sme prežili… · Najväčšia vďaka patrí… · Po dnešnom slávnostnom dni precítime slová básnika: „Postoj, chvíľa, si krásna!“ · Som presvedčený, že všetci z nás…'
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
      note: 'Ukážka slávnostného prejavu z prezentácie – študentská práca (zdroj: zones.sk, cit. 18. 2. 2014; jazykovo upravené).',
      paras: [
        'Drahá oslávenkyňa, milí hostia!',
        'Keď otváram svoj kalendár a listujem v ňom, vidím v ňom mnoho kolónok s menami a číslami dní, mnoho mojich poznámok, mnoho sviatočných dní vyznačených osobitne červeným písmom. Zastavím sa na augustovej strane. Vyzerá to ako ďalšia nudná strana plná všedných dní a každodenných povinností. No odrazu mi do očí padne deň označený krikľavým výkričníkom, ktorý v mojom kalendáriku označuje niečo výnimočné a nezvyčajné. Hneď zbystrím pozornosť. V kolónke „Sobota 20. august 2008“ mi výraznou farbou svieti nápis „Maminka – päťdesiatka“.',
        'Tak ako som ja pred dvomi týždňami listovala vo svojom kalendári, tak aj čas listuje v knihách našich životov, kde každá strana znamená jeden rok, a každý deň do nich svojím perom vpisuje slová minulosti. Dnes sa však čas akoby na chvíľu zastavil a dovolil mi, milá mamička, nazrieť do tvojej knihy života a prečítať z nej pár riadkov.',
        'Prvýkrát si svetlo tohto sveta uzrela v krásny slnečný augustový deň. Hoci si sa narodila ako štvrté dieťa, vždy si bola zahŕňaná rovnakou rodičovskou láskou ako tvoji súrodenci. Roky sa však míňali a s nimi aj dni plné šťastného detského smiechu, no aj sĺz vyplakaných nad rozbitými kolenami. Prišiel čas dospelosti, čas mnohých nových povinností, ale aj radostí, priateľov a lások. Láska do tvojho života priviedla i muža, ktorého si si zvolila za svojho jediného. Z vášho spoločného citu ste darovali život dvom novým bytostiam – mne a môjmu bratovi.',
        'Odo dňa, keď som prišla na svet, pevne stojíš pri mne, keď zablúdim, vždy mi veríš, keď ma odsudzujú, a si jediná, ktorá ma miluje, keď ma ostatní nenávidia. Si pre mňa najlepšou kamarátkou, spoľahlivou osobou a milujúcou matkou, rovnako ako si pre ostatných vernou priateľkou.',
        'Dnes presne o polnoci čas v tvojej knihe života obráti ďalšiu stranu. Od tejto chvíle pero času začne písať svoje riadky na päťdesiatu stranu, čo je pre nás znakom zastaviť sa aspoň na moment vo víre všednosti a neodkladných povinností a dopriať peru času napísať na úvod tejto strany krasopisným písmom slová: „Všetko najlepšie!“ Dnes je ten čas, keď aj ja môžem tu pred tebou vysloviť tieto slová spolu so slovami vďaky a obdivu za to, akou si skvelou matkou, manželkou a priateľkou.',
        'Tak, milí priatelia, pozdvihnime poháre a pripime na zdravie tejto jedinečnej osoby a týmto gestom jej ešte raz poďakujme a do ďalšieho života poprajme len to najlepšie!'
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
    ukazky: ['Ukážka <em>Sme naozaj brat a sestra?</em> – študentská práca, zones.sk (cit. 4. 3. 2014).']
  },
  'umelecky-opis': {
    prezentacia: 'Rukoväť na písanie slohovej práce – umelecký opis',
    literatura: ['weidler', 'hincova', 'caltikovaEnigma'],
    ukazky: ['Ukážka <em>Čaro Vianoc</em> – študentská práca, zones.sk (cit. 14. 3. 2014).']
  },
  rozpravanie: {
    prezentacia: 'Rukoväť na písanie slohovej práce – rozprávanie',
    literatura: ['caltikova3', 'hincova', 'weidler'],
    ukazky: ['Ukážka <em>Prvý deň v škole</em> – študentská práca, zones.sk (cit. 18. 2. 2014).']
  },
  'diskusny-prispevok': {
    prezentacia: 'Rukoväť na písanie slohovej práce – diskusný príspevok',
    literatura: ['caltikovaEnigma', 'hincova', 'weidler'],
    ukazky: ['Ukážka <em>Od septembra v školách po novom</em> – študentská práca, zones.sk (cit. 19. 2. 2014).']
  },
  'beletrizovany-zivotopis': {
    prezentacia: 'Rukoväť na písanie slohovej práce – beletrizovaný životopis',
    literatura: ['weidler', 'hincova', 'caltikova3'],
    ukazky: ['Ukážka <em>Moja cesta životom</em> – študentská práca, zones.sk (cit. 7. 3. 2014).'],
    video: 'k9z7-3RXGFE'
  },
  vyklad: { prezentacia: null, literatura: [] },
  'slavnostny-prejav': {
    prezentacia: 'Rukoväť na písanie slohovej práce – slávnostný prejav',
    literatura: ['caltikova4', 'hincova'],
    ukazky: ['Ukážka <em>Slávnostný prejav – 50. narodeniny</em> – študentská práca, zones.sk (cit. 18. 2. 2014).'],
    video: 'RKjHqJs5PwE'
  }
};

/** Oficiálne dokumenty NIVaM, z ktorých sú kritériá a témy */
export const ZDROJE_NIVAM = [
  'NIVaM: <em>Kritériá na hodnotenie písomnej formy internej časti maturitnej skúšky zo slovenského jazyka a literatúry, maďarského jazyka a literatúry a ukrajinského jazyka a literatúry.</em> Február 2026.',
  'NIVaM (NÚCEM): <em>Témy PFIČ MS – slovenský jazyk a literatúra</em>, ročníky 2014 – 2026. Dostupné na <a href="https://www2.nucem.sk/sk/merania/narodne-merania/maturita" target="_blank" rel="noopener noreferrer">www2.nucem.sk</a>.'
];
