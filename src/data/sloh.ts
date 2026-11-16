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

export interface SlohovyUtvar {
  slug: SlohSlug;
  name: string;
  short: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: SlohSection[];
  tips: string[];
  sample?: { title: string; note: string; paras: string[] };
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
    lead: 'Najnáročnejší slohový útvar. Prejavuje sa v ňom tvoje myslenie, zrelosť, pohľad na svet, vzdelanie aj skúsenosti. Nezhromažďuješ fakty – posudzuješ známe javy z nového uhla a zaujímaš k nim osobný postoj.',
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
          'Môže pôsobiť na city, presviedčať a formovať mienku čitateľa. Využíva poznatky, ale aj vlastné skúsenosti, zážitky a názory.',
          'Zaujíma <strong>osobný postoj</strong>, nepoučuje. Často necháva otázky otvorené a ponecháva na čitateľovi, aby ich sám doriešil.'
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
        paras: ['Úvaha zachováva členenie na úvod, jadro a záver, no hranice medzi nimi nie sú výrazné. <strong>Má toľko odsekov, koľko má myšlienkových celkov.</strong>']
      },
      {
        id: 'jazyk',
        title: 'Jazyk úvahy',
        lead: 'Úvaha je založená na premýšľaní, preto kladie veľké nároky na presnosť vyjadrovania. Musíš vedieť javy pomenovať, odlíšiť a výstižne posúdiť.',
        cards: [
          { term: 'Hodnotiace výrazy', text: 'podstatné mená, prídavné mená, príslovky a slovesá s hodnotiacim významom', example: 'úpadok, kríza, kult · jedinečný, absurdný · dôkladne, povrchne · oceniť, očariť' },
          { term: 'Expresívne slová', text: 'slová s kladným alebo záporným citovým zafarbením, aj slang – podľa témy', example: 'pajzel, nervák' },
          { term: 'Archaizmy', text: 'zastarané slová, ktoré vyvolajú spätosť s obdobím, o ktorom je reč', example: 'rok meruôsmy, švec' },
          { term: 'Historizmy', text: 'pomenovania vecí a dejov, ktoré sa už v živote nepoužívajú', example: 'mušketier, pltnica, zbojník' },
          { term: 'Neologizmy', text: 'nové slová pre nové predmety a javy', example: 'lízing, ombudsman' }
        ]
      },
      {
        id: 'vety',
        title: 'Vetná stavba',
        list: [
          'Základom dobrej úvahy je presné vyjadrenie <strong>príčinných vzťahov a logických súvislostí</strong> – vety dôvodové, podmienkové, účelové, prípustkové a dôsledkové.',
          'Kontakt s čitateľom udržíš zvolacími, rozkazovacími a opytovacími vetami.',
          '<strong>Rečnícka otázka</strong> nečaká odpoveď – je výzvou, apelom: <em>Naozaj chceme, aby vládli u nás drogy a kriminalita?</em>',
          'Striedaj jednočlenné a dvojčlenné vety, krátke a dlhé vety, rôznu modálnosť.'
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
      note: 'Ukážka žiackej práce (3. ročník, šk. rok 2013/2014). Téma maturity 2013.',
      paras: [
        'Považujete internetovú sieť za potrebnú v dnešnej dobe? Dokáže človek žijúci v tejto dobe bez nej prežiť?',
        'V dnešnej dobe je internetová sieť používaná skoro vo všetkých krajinách sveta a je určite každému známa. Ľudia používajú internet v robote, doma, v škole, vo voľnom čase, proste stále a všade. Niektorí ani nevedia bez nej existovať. A pritom o takejto veci ľudia pred niekoľkými rokmi ani len nerozmýšľali.',
        'Internetová sieť má niekoľko výhod. Používame ju na vyhľadávanie informácií potrebných do školy, práce, ale aj ku každodennému životu. Používame ju na konverzáciu medzi priateľmi a známymi, na zoznamovanie sa cez Facebook, Twitter a iné internetové služby. Ale ako skoro pri všetkom, aj internetová sieť má svoje nevýhody.',
        'Dnešní ľudia, a najmä mládež, trávia až príliš veľa voľného času surfovaním po internete. Namiesto chodenia von s priateľmi, poznávania nových ľudí a získavania zážitkov si pridávajú svojich akože priateľov na Facebooku a nič o nich nevedia. Častým trávením času za počítačmi sa ľudia menej pohybujú, priberajú, a preto rastú aj ich zdravotné problémy.',
        'Dnešný svet sa točí väčšinou okolo internetu. Ľudia by ho mali obmedziť a radšej ísť von s priateľmi alebo si prečítať nejakú dobrú knihu, o ktorej ani nevedia, že ju majú vo svojej domácej knižnici. Potom sa budeme zamýšľať nad tým, kde a kedy sme spravili chybu, nemyslíte?'
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
    lead: 'Charakteristika (z gréc. <em>charaktér</em> – vryté znamenie) je opis vlastností alebo podstatných znakov osoby. Okrem výzoru sa sústreďuje najmä na povahové, morálne a príznačné vlastnosti.',
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
          'Pričleňuje sa k opisu ako jeho samostatný druh.',
          '<strong>Vonkajšia charakteristika</strong> zachytáva výzor, chôdzu, oblečenie, gestá.',
          '<strong>Vnútorná charakteristika</strong> zachytáva povahu, morálne vlastnosti, postoje a správanie.',
          'Môže obsahovať hodnotenie, ale <strong>nemá byť súdom</strong>. Môže sa zavŕšiť zamyslením.'
        ]
      },
      {
        id: 'druhy',
        title: 'Druhy charakteristiky',
        cards: [
          { term: 'Priama', text: 'vlastnosti vymenúva priamo', example: 'je čestný, kamarátsky…' },
          { term: 'Nepriama', text: 'vlastnosť vyplynie z konania osoby', example: 'nepovieš, že je lenivá – v deji iba polihuje' },
          { term: 'Vonkajšia / vnútorná', text: 'výrazné fyzické črty / povahové a duševné vlastnosti' },
          { term: 'Subjektívna / objektívna', text: 'vlastnosti aj hodnotí / nezainteresovane ich vymenúva' },
          { term: 'Statická / vývojová', text: 'povaha je hotová a nemenná / sleduje sa vývoj postavy' },
          { term: 'Individuálna / skupinová', text: 'jedna osoba / skupina, napr. hudobná skupina, trieda' },
          { term: 'Porovnávacia', text: 'porovnáva najmenej dve postavy alebo skupiny' }
        ]
      },
      {
        id: 'crty',
        title: 'Čo si na osobe všímať',
        cards: [
          { term: 'Temperament', text: 'reaguje pokojne, uvážlivo, hĺbavo – alebo popudlivo, splašene? Sangvinik, cholerik, flegmatik, melancholik, introvert, extrovert?' },
          { term: 'Vzťah k ľuďom', text: 'je srdečná, ochotná, obetavá, úprimná – alebo škodoradostná, hádavá, podozrievavá?' },
          { term: 'Vzťah k sebe', text: 'je skromná, vyrovnaná – alebo pyšná, domýšľavá? Dokáže priznať omyl a ospravedlniť sa?' },
          { term: 'Záujmy a schopnosti', text: 'o čo sa zaujíma, venuje sa záujmom trvalo, dokáže strhnúť ostatných? V čom vyniká, v čom zaostáva?' },
          { term: 'Vzťah k práci', text: 'pracuje samostatne a tvorivo, je dôsledná, trpezlivá – alebo lenivá, neporiadna?' },
          { term: 'Ďalšie vlastnosti', text: 'optimista či pesimista? Nesie následky svojich rozhodnutí, alebo zvaľuje chyby na iných?' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk charakteristiky',
        list: [
          'Slovník je všeobecne zrozumiteľný.',
          'Prevládajú <strong>prídavné mená s hodnotiacim významom</strong> a podstatné mená, pri nepriamej charakteristike aj dejové slovesá: <em>Nikdy som nevidela brata plakať.</em>',
          'Často sa uplatňujú <strong>citovo zafarbené slová</strong>: <em>Miška bola taký mamičkin maznáčik.</em>',
          'Synonymá podčiarknu vlastnosť, antonymá ju môžu zdramatizovať: <em>Keď bolo treba zaplatiť, okamžite bol z neho chudobný boháč.</em>'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Úvod', text: 'Predstav osobu a svoj vzťah k nej – prečo práve ona.' },
          { term: 'Jadro', text: 'Začni opisom, ktorý zvoľna prechádza do charakteristiky. Spájaj povahu so záujmami, rodinným zázemím, prostredím a vzťahmi k ľuďom.' },
          { term: 'Záver', text: 'Všetky poznatky ulož do jednotiaceho celkového pohľadu. Môžeš ho zavŕšiť hodnotením alebo zamyslením.' }
        ]
      }
    ],
    tips: [
      'Komplexnosť: ukáž osobu z viacerých uhlov – vzťah k sebe, k ľuďom, k práci.',
      'Kombinuj priamu a nepriamu charakteristiku. Krátka príhoda povie o povahe viac ako zoznam vlastností.',
      'Ak téma žiada charakteristiku vlastnosti alebo zvieraťa, drž sa jej – nepíš o inom.',
      'Hodnoť, ale nesúď.'
    ],
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
    lead: 'Umelecký opis nie je presný prenos videného, ale jeho premena cez tvoje vnímanie. Je náladový – môže vyvolať dojem pokoja, strachu, šťastia. Objekt často opisuje nepriamo, cez básnické obrazy.',
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
          'Sústreďuje sa na zachytenie vlastností osôb, predmetov a javov. Vlastnosti vymenúva, ale nevysvetľuje.',
          'Poradie častí sa môže meniť – môžeš opísať najprv park, potom budovy na námestí, alebo naopak.'
        ]
      },
      {
        id: 'druhy',
        title: 'Druhy opisu',
        cards: [
          { term: 'Statický', text: 'opisuje nehybné predmety, zvyčajne odborne; veľa podstatných a prídavných mien' },
          { term: 'Dynamický', text: 'aj nehybný predmet „rozpohybuje“ – viac slovies, personifikácia, metafora. Zvyčajne umelecký opis' },
          { term: 'Jednoduchý', text: 'hovorový štýl, napr. opis kabáta vo výklade' },
          { term: 'Odborný', text: 'súčasť výkladu, termíny, trpný rod, nákresy; aj návod či recept' },
          { term: 'Umelecký (lyrický)', text: 'prostriedky lyriky – metafora, personifikácia, epitetá, prirovnania; v próze spomaľuje dej' }
        ]
      },
      {
        id: 'prostriedky',
        title: 'Výrazové prostriedky',
        cards: [
          { term: 'Prirovnanie', text: 'menej známe sa osvetlí známejším; spojky ako, než, sťa', example: 'rýchly ako blesk, vysoký ako topoľ' },
          { term: 'Epiteton', text: 'básnický prívlastok s citovým významom; stály (constans) alebo ozdobný (ornans)', example: 'zelená trávička · smaragdová tráva, pásikavé more' },
          { term: 'Metafora', text: 'prenesenie pomenovania na základe vonkajšej podobnosti', example: 'pršalo lístie, jar života' },
          { term: 'Metonymia', text: 'prenesenie na základe vecnej súvislosti', example: 'čítam Kukučína – jeho dielo' },
          { term: 'Synekdocha', text: 'druh metonymie – časť za celok', example: 'prišlo celé mesto, ulička drieme' },
          { term: 'Personifikácia', text: 'neživé veci dostávajú ľudské vlastnosti', example: 'mesiačik sa usmieval, les plakal' },
          { term: 'Hyperbola', text: 'zveličenie', example: 'sto rokov čakám na autobus' },
          { term: 'Litotes a eufemizmus', text: 'zjemnenie, nepríjemná vec povedaná miernejšie', example: 'nie je najmúdrejší · zaspal naveky' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk opisu',
        list: [
          'Základom je presné a výstižné pomenovanie – <strong>podstatné mená</strong>.',
          'Vlastnosti vyjadria <strong>prídavné mená</strong>, v dynamickom opise viac <strong>slovies</strong>.',
          'Vzťahy v priestore vyjadria príslovky, predložky a spojky.',
          'V umeleckom opise zapoj všetky zmysly – farby, zvuky, vône, chute, dotyky.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Celkový pohľad', text: 'Ako objekt pôsobí, ako zapadá do súvislostí, nálada, ktorú vyvoláva.' },
          { term: 'Jednotlivosti', text: 'Zvoľ miesto, odkiaľ sa pozeráš, a postupuj sústavne: zhora dole, zdola hore, zľava doprava, spredu dozadu alebo od stredu k okrajom.' },
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
    lead: 'Najčastejšia forma ľudskej komunikácie a základ epických diel. Sústreďuješ sa na udalosť – zápletku, konflikt a jeho riešenie. Príbeh je jedinečný, no zároveň charakteristický pre istý typ ľudí, dobu či prostredie.',
    facts: [
      { label: 'Slohový postup', value: 'rozprávací' },
      { label: 'Štýl', value: 'umelecký' },
      { label: 'Musí mať', value: 'príbeh s pointou' }
    ],
    sections: [
      {
        id: 'druhy',
        title: 'Druhy rozprávania',
        cards: [
          { term: 'Ústne', text: 'najstarší typ, bezprostredný kontakt rozprávača a poslucháča; v literatúre priame rozprávanie v 1. osobe' },
          { term: 'Jednoduché', text: 'bežná komunikácia, školská prax – vlastný príbeh, dejová línia bez rozsiahlych opisov' },
          { term: 'Komplexné', text: 'využíva aj opis, charakteristiku prostredia a postáv a prvky úvahy' },
          { term: 'Reprodukcia', text: 'prerozprávaný dej knihy, filmu, divadelnej hry' }
        ]
      },
      {
        id: 'principy',
        title: 'Kompozičné princípy',
        cards: [
          { term: 'Chronologický', text: 'najčastejší – udalosti v poradí, ako išli za sebou; príbeh je prehľadný' },
          { term: 'Retrospektívny', text: 'čitateľ vie, ako sa príbeh skončil, nevie, čo sa stalo predtým; spomienky, hľadanie príčin', example: 'film Forrest Gump' },
          { term: 'Reťazový', text: 'na jednu udalosť nadväzujú ďalšie, spája ich najmä hlavný hrdina; častý je falošný koniec' },
          { term: 'In medias res', text: 'bez úvodu – čitateľ sa ocitne priamo v centre deja' }
        ]
      },
      {
        id: 'kompozicia',
        title: 'Stavba umeleckého rozprávania',
        steps: [
          { term: 'Expozícia', text: 'Prostredie, doba, hlavné postavy, náznaky konfliktu.' },
          { term: 'Kolízia', text: 'Zápletka – udalosť, ktorá rozhodne o deji. Objaví sa konflikt, dej začína gradovať.' },
          { term: 'Kríza', text: 'Vyvrcholenie deja. Konflikt s inou postavou, so spoločnosťou alebo so sebou samým.' },
          { term: 'Peripetia', text: 'Nečakaný zvrat, dej sa zrýchľuje a smeruje k rozuzleniu.' },
          { term: 'Rozuzlenie', text: 'Dobrý alebo zlý koniec – a pointa.' }
        ],
        paras: ['Pri jednoduchom rozprávaní stačí úvod, jadro a záver – udalosť zachytená v časovom slede.']
      },
      {
        id: 'rec',
        title: 'Reč rozprávača a reč postáv',
        cards: [
          { term: 'Reč rozprávača', text: 'epická objektívnosť, nadhľad – ako objektív kamery: sleduje, ale neposudzuje; zvyčajne minulý čas, spisovná podoba' },
          { term: 'Er-forma / ich-forma', text: 'rozpráva autor (on-forma) alebo niektorá z postáv (ja-forma)' },
          { term: 'Priama reč', text: 'doslovná reč postáv v úvodzovkách, kratšie vety, najčastejšie v dialógu', example: 'Mišo skríkol: „A polieval si ju?“' },
          { term: 'Uvádzacia veta', text: 'pred priamou rečou pôsobí pokojne, za ňou dynamicky a expresívne', example: '„Vivat a vivat, kde budeme bývať,“ ozvalo sa z druhého boku záhrady.' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Slovník a syntax',
        list: [
          'Slovník je neobmedzený – slová majú byť významovo bohaté a pôsobivé.',
          '<strong>Slovesá</strong> dodajú dynamiku, mená presnosť, citoslovcia a častice živosť. Aj spojky môžu dej spomaliť alebo stupňovať.',
          'Popri oznamovacích vetách používaj opytovacie a zvolacie.',
          'Striedaj jednoduché vety a súvetia, krátke a dlhé, jednočlenné slovesné (<em>Prší.</em>) aj neslovesné (<em>Pohov!</em>).'
        ]
      }
    ],
    tips: [
      'Zaujmi príbehom. Nič nie je horšie ako pomalé, nudné rozprávanie bez pevnej stavby.',
      'Zbytočne „neodskakuj“ od deja.',
      'Pracuj len s toľkými postavami, s koľkými si poradíš.',
      'Neboj sa fantázie a nečakaného – no aj fantázia musí mať logiku.',
      'Nerozprávaj len strohý dej: vykresli prostredie a výstižne charakterizuj hrdinu.',
      'Použi priamu reč postáv – hodnotí sa aj členenie na pásmo rozprávača a pásmo postáv.'
    ],
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
          'Diskusia je súčasťou programu schôdze, zasadnutia, pracovného stretnutia či seminára. Diskusný príspevok môže byť aj útvarom náučného štýlu – napr. na vedeckom sympóziu.',
          'Diskusiu vedie poverený človek, udeľuje slovo a dbá, aby prebiehala kultivovane.',
          'Diskutuje sa vždy <strong>k tomu, čo je na programe</strong>.'
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          { term: 'Oslovenie', text: 'Najčastejšie s výkričníkom. V texte ho môžeš zopakovať; uprostred vety ho oddeľ čiarkami.', example: 'Vážení prítomní!' },
          { term: 'Nadviazanie', text: 'Nadviaž na to, čo zaznelo v referáte alebo v predchádzajúcom príspevku.', example: 'Nemôžem nechať bez povšimnutia tvrdenia môjho predrečníka…' },
          { term: 'Vlastný názor', text: 'Vysvetli svoj názor, argumentuj, odvolávaj sa na literatúru, cituj. Táto časť má veľa spoločného s výkladom a úvahou.', example: 'Domnievam sa, že… Podľa mojej mienky…' },
          { term: 'Poďakovanie za slovo', text: 'Na rozdiel od slávnostného prejavu v diskusii poďakovanie byť má – niekto ti udelil slovo.', example: 'Ďakujem za pozornosť.' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazyk a štýl',
        list: [
          'Hovor za seba: <em>myslím si, domnievam sa</em>. 1. osobu množného čísla použi, len ak ťa skupina poverila, aby si hovoril za ňu – neschovávaj sa za anonymné „my“.',
          'Argument = tvrdenie s dôkazom. Pridaj citát, fakt, príklad zo života.',
          '<strong>Presviedčacie prvky</strong>: rečnícke otázky, výzvy, oslovenie publika.',
          'Vo výkladovej časti zložené súvetia (príčinno-následkové, dôsledkové), polovetné konštrukcie; v úvahovej časti pestrá modalita viet.'
        ]
      }
    ],
    tips: [
      'Hneď na začiatku jasne povedz, k čomu sa vyjadruješ a aký máš postoj.',
      'Ku každému tvrdeniu pridaj dôkaz alebo príklad – argumenty sa hodnotia v obsahu.',
      'Ak je téma citát, pracuj s ním: vysvetli ho, súhlas s ním alebo polemizuj.',
      'Kontroluj kompozíciu: oslovenie – úvod – jadro – záver – poďakovanie.'
    ],
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
        cards: [
          { term: 'Informačný', text: 'údaje zo života – narodenie, škola, rodina' },
          { term: 'Opisný', text: 'opisuje a charakterizuje osobu a prostredie' },
          { term: 'Rozprávací', text: 'dôležité fázy života môžu byť prerozprávané ako príbeh' },
          { term: 'Výkladový', text: 'vysvetľuje súvislosti a údaje' }
        ]
      },
      {
        id: 'jazyk',
        title: 'Jazykové prostriedky',
        cards: [
          { term: 'Hovorové (spisovné) slová', text: '', example: 'elektrika, panelák' },
          { term: 'Citovo zafarbené slová', text: '', example: 'mamička, otecko' },
          { term: 'Knižné slová', text: '', example: 'nonsens, milieu, potecha' },
          { term: 'Poetizmy', text: '', example: 'luna, sťa, vesna, sto liet' },
          { term: 'Biblizmy', text: '', example: 'zem zasľúbená, rozjímať' },
          { term: 'Básnické prostriedky', text: 'metafora, metonymia, personifikácia, epiteton' }
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
      'Zakomponuj <strong>aspoň 5 faktov</strong> – narodenie, rodinné zázemie, štúdium, záujmy, schopnosti, plány.',
      'Drž časovú postupnosť podľa vopred zvoleného plánu.',
      'Fakty nevymenúvaj – „zahmli“ ich a podaj obrazne, príbehovo.',
      'Pozor na zadanie: môže ísť o fiktívnu osobu alebo literárnu postavu (napr. 2022: Som Ofélia).'
    ],
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
    lead: 'Jeden z najpôsobivejších jazykových prejavov. Je to hovorená hodnotiaca úvaha, ktorá dáva rečníkovi priestor ukázať talent. Patrí medzi príležitostné žánre rečníckeho štýlu – vytvára atmosféru a vzbudzuje emócie.',
    facts: [
      { label: 'Slohový postup', value: 'výkladový s prvkami úvahy' },
      { label: 'Štýl', value: 'rečnícky' },
      { label: 'Pozor', value: 'na konci bez poďakovania za slovo' }
    ],
    sections: [
      {
        id: 'styl',
        title: 'Rečnícky štýl',
        cards: [
          { term: 'Verejnosť', text: 'spisovný jazyk; cudzie slová len všeobecne známe' },
          { term: 'Ústnosť / písomnosť', text: 'prejav sa vopred napíše a potom prednesie; dôraz, melódia, pauzy' },
          { term: 'Sugestívnosť', text: 'rečník chce zapôsobiť na city a presvedčiť – pátos, opakovanie, výzva v závere' },
          { term: 'Adresnosť', text: 'kolektívny príjemca (<em>Milí naši hostia!</em>), niekedy jeden človek (<em>Drahý náš dedko!</em>)' }
        ]
      },
      {
        id: 'prostriedky',
        title: 'Výrazové prostriedky',
        cards: [
          { term: 'Antonymá a kontrast', text: 'zdôraznia myšlienku a nabádajú poslucháča zamyslieť sa', example: 'príchody – odchody, plusy – mínusy' },
          { term: 'Anafora', text: 'opakovanie slova na začiatku za sebou idúcich viet', example: 'My s láskou prijímame vaše priateľstvo, váš cit, vašu oddanosť.' },
          { term: 'Epanastrofa', text: 'slovo z konca vety sa zopakuje na začiatku ďalšej', example: 'Záleží nám na vašom šťastí. Na šťastí, ktoré…' },
          { term: 'Rečnícka otázka', text: 'a rečnícka odpoveď', example: 'Treba to ešte podčiarkovať? Treba, pretože…' },
          { term: 'Obrazné pomenovania', text: 'metafory, prirovnania, citáty, okrídlené výrazy, aforizmy' }
        ]
      },
      {
        id: 'kompozicia',
        title: 'Kompozícia',
        steps: [
          {
            term: 'Oslovenie',
            text: 'Osobitný odsek, za ním výkričník alebo čiarka. Prednosť majú ženy; v zmiešanej spoločnosti najvyššie postavený človek. Uprostred vety oslovenie vyčleň čiarkami.',
            example: 'Vážený pán minister, vážená pani riaditeľka, milí spolužiaci!'
          },
          { term: 'Pomenovanie príležitosti', text: 'Hneď po oslovení objasni, pri akej príležitosti sa slávnosť koná.', example: 'Stretli sme sa dnes na slávnosti, na ktorú sme dlho čakali…' },
          {
            term: 'Jadro',
            text: 'Objasnenie pojmov, analýza – hodnotenie obdobia, porovnanie a zovšeobecnenie, citát, vyslovenie presvedčenia.',
            example: 'Štyri roky, ktoré sme prežili… Som presvedčený, že všetci z nás…'
          },
          { term: 'Záver', text: 'Zhrnutie, výzva, želanie, vyjadrenie úcty.' }
        ]
      }
    ],
    tips: [
      'Oslovenie a pomenovanie príležitosti nesmú chýbať – sú súčasťou hodnotenia kompozície.',
      'Pracuj s emóciami, no nie frázami. Citát alebo okrídlený výraz musí sedieť k príležitosti.',
      'Píš tak, aby sa prejav dal nahlas predniesť – rytmus, opakovanie, pauzy.',
      'Na rozdiel od diskusného príspevku na konci za slovo neďakuješ.'
    ],
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
// Údaje z titulných a záverečných snímok prezentácií (Desktop/sloh, 2014). Literatúra je prepísaná
// tak, ako ju uvádzajú prezentácie; ukážky zo zones.sk sa na webe nepoužívajú, preto tu nie sú.

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
  /** ID krátkeho výukového videa na YouTube (youtu.be/<id>) – neformálna podoba učiva, na stránke útvaru ako „Na oživenie“ */
  video?: string;
}

export const youtubeUrl = (id: string) => `https://youtu.be/${id}`;

/** Ku každému útvaru: prezentácia a literatúra uvedená na jej poslednej snímke */
export const ZDROJE: Record<SlohSlug, SlohZdroj> = {
  uvaha: { prezentacia: 'Rukoväť na písanie slohovej práce – úvaha', literatura: ['caltikova3', 'hincova', 'weidler', 'interne'], video: 'CUef75lLeBo' },
  charakteristika: { prezentacia: 'Rukoväť na písanie slohovej práce – charakteristika', literatura: ['weidler', 'hincova', 'caltikova3'], video: 'C1qRQk0qglI' },
  'umelecky-opis': { prezentacia: 'Rukoväť na písanie slohovej práce – umelecký opis', literatura: ['weidler', 'hincova', 'caltikovaEnigma'] },
  rozpravanie: { prezentacia: 'Rukoväť na písanie slohovej práce – rozprávanie', literatura: ['caltikova3', 'hincova', 'weidler'] },
  'diskusny-prispevok': { prezentacia: 'Rukoväť na písanie slohovej práce – diskusný príspevok', literatura: ['caltikovaEnigma', 'hincova', 'weidler'] },
  'beletrizovany-zivotopis': { prezentacia: 'Rukoväť na písanie slohovej práce – beletrizovaný životopis', literatura: ['weidler', 'hincova', 'caltikova3'], video: 'k9z7-3RXGFE' },
  vyklad: { prezentacia: null, literatura: [] },
  'slavnostny-prejav': { prezentacia: 'Rukoväť na písanie slohovej práce – slávnostný prejav', literatura: ['caltikova4', 'hincova'], video: 'RKjHqJs5PwE' }
};

/** Oficiálne dokumenty NIVaM, z ktorých sú kritériá a témy */
export const ZDROJE_NIVAM = [
  'NIVaM: <em>Kritériá na hodnotenie písomnej formy internej časti maturitnej skúšky zo slovenského jazyka a literatúry, maďarského jazyka a literatúry a ukrajinského jazyka a literatúry.</em> Február 2026.',
  'NIVaM (NÚCEM): <em>Témy PFIČ MS – slovenský jazyk a literatúra</em>, ročníky 2014 – 2026. Dostupné na <a href="https://www2.nucem.sk/sk/merania/narodne-merania/maturita" target="_blank" rel="noopener noreferrer">www2.nucem.sk</a>.'
];
