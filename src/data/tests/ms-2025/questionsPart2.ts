import type { QuestionData } from '../../types';

// Úlohy 33 – 64. Odpovede podľa kľúča NIVaM k testu 25 1403 (Maturita 2025, riadny marcový termín).

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

// Všetky pravopisne správne kombinácie antoným pre úlohu 38 (v oboch poradiach, v 3. os. aj neurčitku, s „sa“ aj bez „sa“)
const ANTO_PAIRS_38: [string, string][] = [
  ['začína sa', 'končí sa'],
  ['končí sa', 'začína sa'],
  ['sa začína', 'sa končí'],
  ['sa končí', 'sa začína'],
  ['začína', 'končí'],
  ['končí', 'začína'],
  ['začínať sa', 'končiť sa'],
  ['končiť sa', 'začínať sa'],
  ['začínať', 'končiť'],
  ['končiť', 'začínať']
];
const ANTO_SEPS_38 = [' - ', '-', ', ', ',', '; ', ';', ' / ', '/', ' '];
const ACCEPTED_38: string[] = ANTO_PAIRS_38.flatMap(([a, b]) => ANTO_SEPS_38.map((sep) => `${a}${sep}${b}`));

export const questionsPart2: QuestionData[] = [
  // ---------------- Ukážka 5 – Paolo Coelho: Alchymista
  {
    id: 33,
    code: '33',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Z ukážky 5 vyplýva, že chlapec Santiago',
    options: [
      { key: 'A', text: 'pátra po tajomstvách pyramíd.' },
      { key: 'B', text: 'sa pýta, ako naplniť svoj sen.' },
      { key: 'C', text: 'počúva, čo vraví Duša sveta.' },
      { key: 'D', text: 'hľadá staroveké artefakty.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozri sa na chlapcove otázky na začiatku úryvku („Čo mám robiť teraz?“) a na to, o čom mu Alchymista odpovedá (poklad, uskutočnenie sna, lekcie na ceste za splnením snov).',
    solutionSteps: [
      {
        title: 'Porozumenie dialógu',
        text: 'Chlapec Santiago sa obracia na Alchymistu s otázkou //„Čo mám robiť teraz?“// a Alchymista ho usmerňuje na ceste k pokladu a **uskutočneniu jeho sna** (//„vždy, ešte pred uskutočnením sna… keď ideme za splnením snov“//). Santiago sa teda pýta, ako naplniť svoj sen.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – pyramídy sú len miestom, kam smeruje jeho cesta za pokladom, nepátra po ich tajomstvách.\nC – Santiago nepočúva hlas Duše sveta priamo; o Duši sveta mu rozpráva Alchymista.\nD – hľadá poklad a naplnenie osobného sna, nie archeologické staroveké artefakty.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 34,
    code: '34',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré tvrdenie o Alchymistovi vyplýva z ukážky 5?',
    options: [
      { key: 'A', text: 'Sprevádza chlapca na cestách.' },
      { key: 'B', text: 'Radí všetkým pocestným.' },
      { key: 'C', text: 'Ovláda jazyk púšte.' },
      { key: 'D', text: 'Je osamelým pustovníkom.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si pozorne tretiu vetu od konca v dlhšom Alchymistovom prehovore – začína sa slovami „My v našej…“.',
    solutionSteps: [
      {
        title: 'Doklad v texte',
        text: 'Alchymista hovorí: //„My v našej reči púšte tomu hovoríme ‚zomrieť vo chvíli, keď na obzore už vidieť datľové háje‘.“// Z jeho slov jednoznačne vyplýva, že **ovláda jazyk (reč) púšte**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – chlapca posiela ďalej v jednotnom čísle (//„Pokračuj v ceste k pyramídam…“//), z ukážky nevyplýva, že s ním putuje ďalej.\nB – radí len Santiagovi, o všetkých pocestných text nehovorí.\nD – v ukážke sa nikde nepíše, že je osamelým pustovníkom (navyše sa stotožňuje so spoločenstvom: //„My v našej reči púšte“//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 35,
    code: '35',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré vysvetlenie zodpovedá poslednej vete ukážky 5?',
    options: [
      { key: 'A', text: 'Niekedy aj cesta môže byť cieľom.' },
      { key: 'B', text: 'Tesne pred dosiahnutím cieľa sa niet čoho obávať.' },
      { key: 'C', text: 'Blížiacemu sa cieľu predchádzajú ťažkosti.' },
      { key: 'D', text: 'Človek sa často vzdáva pred cieľom.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Posledná veta znie: „Hovorí, že najtemnejšia noc je práve pred svitaním.“ Čo v tomto prísloví obrazne predstavuje „svitanie“ a čo „najtemnejšia noc“ tesne pred ním? Pozor: vyber vysvetlenie samotnej poslednej vety, nie predchádzajúceho odseku!',
    solutionSteps: [
      {
        title: 'Význam príslovia v poslednej vete',
        text: 'V prísloví //„najtemnejšia noc je práve pred svitaním“// predstavuje **svitanie** blížiaci sa cieľ (úspech, splnenie sna) a **najtemnejšia noc** najťažšie chvíle a prekážky, ktoré prichádzajú tesne pred jeho dosiahnutím. Presne tomu zodpovedá vysvetlenie: **Blížiacemu sa cieľu predchádzajú ťažkosti**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – o tom, že by cieľom bola samotná cesta, príslovie nehovorí.\nB – tvrdí pravý opak príslovia (noc pred svitaním je práve najtemnejšia, plná skúšok).\nD – pozor na pascu: to, že sa ľudia vzdávajú pred cieľom, hovoril Alchymista v predchádzajúcom odseku, no v samotnom prísloví v poslednej vete sa o vzdávaní nehovorí.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 36,
    code: '36',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Čo Alchymista Santiagovi __neporadil__?',
    options: [
      { key: 'A', text: 'Sleduj pozorne cestu, všeličo ti môže odhaliť cieľ.' },
      { key: 'B', text: 'Používaj vždy rozum, ten je na ceste najdôležitejší.' },
      { key: 'C', text: 'Vytrvaj na ceste, aj keď je dosiahnutie cieľa náročné.' },
      { key: 'D', text: 'Ver vlastnému citu, ten ťa povedie správnym smerom.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Porovnaj možnosti s prvým a druhým Alchymistovým prehovorom: čo mu podľa neho ukáže, kde je poklad – chladný rozum, alebo srdce a znamenia?',
    solutionSteps: [
      {
        title: 'Porovnanie s radami Alchymistu',
        text: 'Alchymista chlapcovi kladie na srdce presný opak chladného rozumu – odkazuje ho na intuíciu a cit: //„Tvoje **srdce** ti ukáže, kde je poklad.“// O používaní rozumu ako najdôležitejšieho vodidla v texte nepadne ani slovo, možnosť **B** mu teda **neporadil**.'
      },
      {
        title: 'Čo mu naozaj poradil',
        text: 'A – //„A naďalej si všímaj znamenia.“//\nC – //„Pokračuj v ceste k pyramídam“// a varovanie pred okamihom skúšky dobyvateľa, keď sa väčšina ľudí vzdá.\nD – //„Tvoje srdce ti ukáže, kde je poklad.“//'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 37,
    code: '37',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Rozprávač v ukážke 5 je',
    options: [
      { key: 'A', text: 'vševediaci a nezúčastňuje sa na deji.' },
      { key: 'B', text: 'objektívny a do deja zasahuje okrajovo.' },
      { key: 'C', text: 'subjektívny a zúčastňuje sa na deji.' },
      { key: 'D', text: 'priamy a do deja zasahuje okrajovo.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'V akej slovesnej osobe je písané pásmo rozprávača („spýtal sa chlapec“, „Santiago si spomenul“)? Vystupuje rozprávač ako postava v príbehu, alebo stojí mimo deja a dokonca vidí Santiagovi do hlavy (vie, na čo si v duchu spomenul)?',
    solutionSteps: [
      {
        title: 'Určenie typu rozprávača',
        text: 'Rozprávanie je vedené v **3. osobe jednotného čísla** (on-rozprávanie: //spýtal sa chlapec, odvetil Alchymista//) – rozprávač nie je žiadnou z postáv a **na deji sa nezúčastňuje**.\nZároveň však pozná aj nevyslovené myšlienky a spomienky postavy (//„Santiago si spomenul na staré príslovie svojho rodného kraja.“//). Rozprávač, ktorý stojí nad príbehom a vidí postavám do vnútra, je **vševediaci (autorský) rozprávač**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'Možnosti B, C a D tvrdia, že rozprávač sa zúčastňuje na deji alebo doň zasahuje (priamy rozprávač rozpráva v 1. osobe – ja-rozprávanie, kým objektívny/oko kamery len opisuje vonkajšie konanie a nepozná myšlienky postáv, no ani ten do deja nezasahuje).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 38,
    code: '38',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_5',
    questionText: 'Vypíšte z poslednej priamej reči dvojicu slov s opačným významom.',
    placeholder: 'Vypíš dvojicu slov',
    correctAnswerDisplay: 'začína sa – končí sa',
    acceptedAnswers: ACCEPTED_38,
    commonMistakes: [
      {
        pattern: 'za[cč]iato[cč]n[ií]k.*dobyvate[lľ]|dobyvate[lľ].*za[cč]iato[cč]n[ií]k',
        hint: 'Slová „začiatočník“ a „dobyvateľ“ netvoria pravú dvojicu slov s opačným významom (antonymá). Pozri sa v tých istých dvoch vetách na slovesá!'
      },
      {
        pattern: 'noc.*svitan|svitan.*noc',
        hint: 'Pozor na zadanie! Slová „noc“ a „svitanie“ sú až v poslednom odseku v reči rozprávača, nie v poslednej priamej reči Alchymistu.'
      },
      {
        pattern: '(?:^|\\s)a(?:\\s|$)',
        hint: 'Vypíš iba samotnú dvojicu slov oddelenú pomlčkou alebo čiarkou (bez spojky „a“).'
      }
    ],
    hint: 'Nájdi poslednú priamu reč (dlhší prehovor Alchymistu s pomlčkou na začiatku) a pozri sa na jej posledné dve krátke vety: „Každé hľadanie … A vždy …“. Ktoré dve slovesá v nich majú presne opačný význam (antonymá)?',
    solutionSteps: [
      {
        title: 'Hľadanie v poslednej priamej reči',
        text: 'Posledná priama reč v ukážke 5 patrí Alchymistovi a uzatvárajú ju vety:\n//„Každé hľadanie **sa začína** šťastím začiatočníka. A vždy **sa končí** skúškou dobyvateľa.“//\nSlovami s opačným významom (antonymami / opozitami) sú slovesá **začína sa – končí sa**.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Obidve slová musia byť vypísané **pravopisne správne** (v 3. osobe //začína sa – končí sa// alebo v neurčitku //začínať sa – končiť sa//, v ľubovoľnom poradí, pričom kľúč uznáva odpoveď aj bez zvratného //sa//: **začína – končí**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **začína sa – končí sa** (príp. **začína – končí** / **začínať sa – končiť sa**).'
  },
  {
    id: 39,
    code: '39',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_5',
    questionText: 'Rozdeľte slovo //lekcia// správne na slabiky. Slabiky jednoznačne oddeľte (napr. pomocou spojovníka alebo výraznou medzerou)!',
    placeholder: 'Rozdeľ slovo na slabiky',
    correctAnswerDisplay: 'lek-ci-a',
    acceptedAnswers: ['lek-ci-a'],
    orderedWords: ['lek', 'ci', 'a'],
    commonMistakes: [
      {
        pattern: '^lek[\\s\\-./|,;:·•]+cia$',
        hint: 'V cudzom slove „lekcia“ nie je slovenská dvojhláska ia – vyslovujeme ho so vsunutým j ako [lek-ci-ja], preto samohlásky i a a tvoria dve samostatné slabiky!'
      },
      {
        pattern: '^le[\\s\\-./|,;:·•]+kci',
        hint: 'Na hranici skupiny spoluhlások -kc- vedie rozdelenie medzi nimi: prvá slabika sa končí spoluhláskou k (lek-).'
      }
    ],
    hint: 'Vyslov si nahlas a pomaly cudzie slovo „lekcia“ – v prevzatých slovách zakončených na -cia, -zia, -gia (napr. po-lí-ci-a) nejde o slovenskú dvojhlásku ia, ale o dve samostatné samohlásky so vsunutým [j] vo výslovnosti! Koľko slabík má teda toto slovo?',
    solutionSteps: [
      {
        title: 'Prečo v slove lekcia nie je dvojhláska ia',
        text: 'V domácich a zdomácnených slovenských slovách (napr. //č**ia**-ra, V**ia**-no-ce//) tvorí dvojhláska //ia// jednu slabiku. Slovo //lekcia// je však **cudzie (prevzaté) slovo** zakončené na //-cia// (podobne ako //polícia, demokracia, biológia//).\nV takýchto prevzatých slovách sa spojenie //i + a// vyslovuje ako [i-ja] ([lek-ci-ja]) – nejde o dvojhlásku, ale o **dve samostatné samohlásky v dvoch rôznych slabikách**!'
      },
      {
        title: 'Rozdelenie na slabiky',
        text: '1. Hranica medzi spoluhláskami //-kc-// prechádza medzi nimi: **lek-**.\n2. Samohláska //-i-// tvorí druhú slabiku: **-ci-**.\n3. Koncová samohláska //-a// tvorí samostatnú tretiu slabiku: **-a**.\nSprávne rozdelenie na tri slabiky je: **lek-ci-a**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **lek-ci-a**.'
  },
  {
    id: 40,
    code: '40',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_5',
    questionText: 'Pomenujte vetnú melódiu, ktorou sa vyznačuje nasledujúca veta z ukážky 5.\n//Čo mám robiť teraz?//',
    placeholder: 'Napíš druh vetnej melódie',
    correctAnswerDisplay: 'klesavá (konkluzívna kadencia)',
    acceptedAnswers: [
      'klesavá',
      'klesavá melódia',
      'klesajúca',
      'klesajúca melódia',
      'kadencia',
      'konkluzívna kadencia',
      'konkluzívna',
      'klesavá kadencia',
      'klesavá konkluzívna kadencia',
      'uspokojivá končiaca',
      'uspokojivá končiaca melódia',
      'uspokojivo končiaca',
      'uspokojivo končiaca melódia',
      'uspokojivá končiaca kadencia',
      'uspokojivo končiaca kadencia'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'st[uú]pav|st[uú]paj[uú]c|antikadenc',
        hint: 'Nenechaj sa pomýliť otáznikom! Stúpavú melódiu majú len zisťovacie otázky bez opytovacieho zámena (odpoveď áno/nie, napr. „Mám to urobiť?“). Otázka začínajúca sa opytovacím zámenom „Čo“ má vrchol na začiatku a na konci hlas klesá!'
      },
      {
        pattern: 'opytovac',
        hint: '„Opytovacia“ je druh vety podľa zámeru hovoriaceho, ale úloha sa pýta na vetnú melódiu – teda či hlas na konci vety stúpa, alebo klesá.'
      }
    ],
    hint: 'Pozor na otáznik! Nie každá opytovacia veta má stúpavú melódiu. Rozlišujeme zisťovacie otázky (odpoveď áno/nie: „Mám niečo robiť?“) a dopĺňacie otázky, ktoré sa začínajú opytovacím zámenom alebo príslovkou (kto, čo, kde, kedy, prečo). Prečítaj si prirodzene nahlas vetu „Čo mám robiť teraz?“ – stúpa ti hlas na slove „teraz“, alebo klesá?',
    solutionSteps: [
      {
        title: 'Dva druhy otázok a ich melódia',
        text: 'V slovenčine majú opytovacie vety dvojakú melódiu:\n1. **Zisťovacie otázky** (bez opytovacieho slova, odpovedáme //áno / nie//, napr. //Ešte toto som sa mal naučiť?//) majú **stúpavú melódiu** (//antikadenciu//).\n2. **Dopĺňacie otázky** (začínajú sa opytovacím zámenom alebo príslovkou //kto, **čo**, kde, kedy, ako, prečo//) majú tónový vrchol hneď na začiatku na opytovacom slove (**Čo**) a ku koncu vety hlas prirodzene **klesá** – rovnako ako pri oznamovacej vete!'
      },
      {
        title: 'Pomenovanie melódie a hodnotenie kľúča',
        text: 'Veta //„**Čo** mám robiť teraz?“// je dopĺňacia opytovacia veta, a preto má **klesavú melódiu** (odborne **konkluzívnu kadenciu** alebo **uspokojivú končiacu melódiu**). Kľúč uznáva aj tvar **klesajúca** a prihliada na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **klesavá melódia** (konkluzívna kadencia).'
  },

  // ---------------- Ukážka 6 – Milan Lasica, Július Satinský: Soirée
  {
    id: 41,
    code: '41',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktoré tvrdenie o L je podľa ukážky 6 pravdivé?',
    options: [
      { key: 'A', text: 'Podieľal sa na vynáleze výťahu.' },
      { key: 'B', text: 'Prial si cestovať a spoznávať tak svet.' },
      { key: 'C', text: 'Túžil po skonštruovaní lietadla.' },
      { key: 'D', text: 'Chcel na vlastnej koži zažiť voľný pád.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozri sa na prvú a tretiu repliku postavy L: prečo si doma aj v noci robil nákresy a výpočty?',
    solutionSteps: [
      {
        title: 'Doklad v texte',
        text: 'Hneď na konci svojho prvého prehovoru L hovorí: //„Robil som nákresy. Chcel som objaviť lietadlo.“// Neskôr dodáva: //„Keby mi ich učiteľ nebol zhabal, tak dnes nesedíme tu, ale v mojom lietadle sa vznášame nad Himalájami.“// Túžil teda po **skonštruovaní lietadla**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – na skutočnom vynáleze výťahu sa nepodieľal, len o svojom bizarnom prístroji vyhlásil, že je //spola výťah, spola lietadlo a ešte sa to dá použiť aj ako kladivo//.\nB – po svete chodil S (//„Vy ste chodili po svete a ja som sedel doma…“//), L nechcel cestovať ako turista, ale zostrojiť vlastný stroj.\nD – voľný pád nechcel zažiť na vlastnej koži, skúmal ho tak, že v škole podkladal nohy spolužiakom!'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 42,
    code: '42',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Humor v ukážke 6 je postavený predovšetkým na',
    options: [
      { key: 'A', text: 'zobrazovaných komických situáciách.' },
      { key: 'B', text: 'navonok nezmyselnej konverzácii.' },
      { key: 'C', text: 'idealizovaných postavách.' },
      { key: 'D', text: 'typizovaných postavách.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Spomeň si na štýl autorského divadla Lasicu a Satinského a pozri sa na ich rozhovor v ukážke: odohráva sa na scéne bláznivý dej plný pádov, alebo sa dvaja partneri s vážnou tvárou rozprávajú o absurdných nezmysloch?',
    solutionSteps: [
      {
        title: 'Podstata humoru Lasicu a Satinského',
        text: 'Dramatická tvorba Milana Lasicu a Júliusa Satinského (napr. //Soirée//, //Nečakanie na Godota//) stojí na intelektuálnom, slovnom a absurdnom humore. Postavy vedú **navonok nezmyselnú konverzáciu** – celkom vážne rozoberajú nelogické nápady (objavovanie dávno objaveného lietadla, prepadnutie víza nad Himalájami, výťah s 32 gombíkmi v päťposchodovom dome).'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – nejde o situačnú komédiu (postavy len sedia a rozprávajú sa).\nC, D – L a S nie sú romanticky idealizované postavy ani klasicistické či realistické typizované postavy, ale autorské komické masky.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 43,
    code: '43',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Prekvapujúci komický nápad porušujúci logiku situácie, ktorý často využívali aj Lasica a Satinský, sa nazýva',
    options: [
      { key: 'A', text: 'hyperbola.' },
      { key: 'B', text: 'derniéra.' },
      { key: 'C', text: 'pointa.' },
      { key: 'D', text: 'gag.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Odlíš od seba štyri ponúkané pojmy: umelecké zveličenie, úplne posledné uvedenie divadelnej hry, záverečné myšlienkové vyvrcholenie a krátky anglický termín pre nečakaný komický prvok, ktorý náhle poruší logiku situácie.',
    solutionSteps: [
      {
        title: 'Literárny a divadelný pojem gag',
        text: '**Gag** (vyslovujeme [geg]) je prekvapujúci komický nápad (slovný alebo pohybový), ktorý nečakane naruší bežnú logiku situácie a vyvolá smiech – v ukážke 6 napr. náhly prechod z rozhovoru priamo do letu //„(Obaja letia nad Himalájami.)“// alebo vysvetlenie, že výťah v 5-poschodovom dome vyvezie človeka na 32. poschodie vďaka 32 gombíkom.'
      },
      {
        title: 'Význam ostatných pojmov',
        text: 'A – **hyperbola**: umelecké zveličenie (nadsázka).\nB – **derniéra**: úplne posledné uvedenie divadelnej inscenácie pred jej stiahnutím z repertoáru (opak premiéry).\nC – **pointa**: vtipné alebo prekvapivé myšlienkové vyvrcholenie na samom konci diela (nemusí porušovať logiku situácie).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 44,
    code: '44',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktoré tvrdenie o absurdnej dráme je pravdivé?',
    options: [
      { key: 'A', text: 'Má veľa postáv, ktoré bohato komunikujú.' },
      { key: 'B', text: 'Porušuje kompozíciu klasickej drámy.' },
      { key: 'C', text: 'Uprednostňuje cit pred rozumom.' },
      { key: 'D', text: 'Má súvislý dej s rozuzlením.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Spomeň si na najznámejšiu absurdnú drámu „Čakanie na Godota“ (preto sa absurdná dráma volá aj antidráma): má klasický príbeh s úvodom, zápletkou a jasným rozuzlením, alebo práve túto tradičnú stavbu hry búra?',
    solutionSteps: [
      {
        title: 'Znaky absurdnej drámy (antidrámy)',
        text: '**Absurdná dráma** (napr. S. Beckett: //Čakanie na Godota//, E. Ionesco: //Plešatá speváčka//; na Slovensku jej prvky tvorivo využívali Lasica a Satinský) sa nazýva aj **antidráma**, pretože zámerne **porušuje kompozíciu klasickej drámy**: nemá tradičnú dejovú líniu (expozíciu, kolíziu, krízu, peripetiu a katastrofu/rozuzlenie).'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – v absurdnej dráme vystupuje málo postáv a ich komunikácia je prázdna, útržkovitá a zlyháva.\nC – uprednostňovanie citu pred rozumom je znakom **romantizmu** (a preromantizmu), nie absurdnej drámy 20. storočia.\nD – súvislý dej a jasné rozuzlenie v nej práve chýbajú (často má kruhovú kompozíciu a nikam nesmeruje).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 45,
    code: '45',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktoré tvrdenie o vonkajšej kompozícii divadelnej hry je pravdivé?',
    options: [
      { key: 'A', text: 'Dejstvo sa člení na výstupy.' },
      { key: 'B', text: 'Výstup sa člení na dejstvá.' },
      { key: 'C', text: 'Replika sa skladá z dialógu.' },
      { key: 'D', text: 'Monológ sa skladá z replík.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Zoraď si časti divadelnej hry od najväčšej po najmenšiu: čo je väčší celok oddelený spustením opony (dejstvo) a čo menšia časť, ktorá sa mení pri príchode alebo odchode postavy z javiska (výstup)?',
    solutionSteps: [
      {
        title: 'Vonkajšia stavba divadelnej hry',
        text: 'Divadelná hra sa navonok člení od väčších celkov k menším:\n1. **dejstvá** (akty – oddelené prestávkou alebo spustením opony),\n2. prípadne **obrazy** (zmena scénického prostredia/kulís),\n3. **výstupy** (zmena počtu osôb na javisku – príchod alebo odchod postavy).\nPlatí teda, že väčšie **dejstvo sa člení na menšie výstupy**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'B – poradie je opačné (výstup je menšia časť než dejstvo).\nC – je to presne naopak: **dialóg** sa skladá zo striedajúcich sa **replík** (jednotlivých prehovorov postáv).\nD – **monológ** je súvislý prehovor jednej postavy, neskladá sa zo striedania replík.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 46,
    code: '46',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'Doplňte na základe textu ukážky 6 do nasledujúcej vety jedno vhodné podstatné meno.',
    fillSentenceHtml: 'L obhajoval svoju nevedomosť tým, že bol {{blank}}.',
    placeholder: 'Doplň podstatné meno',
    correctAnswerDisplay: 'vidiečan / z vidieka',
    acceptedAnswers: [
      'vidiečan',
      'dedinčan',
      'vidiečanom',
      'dedinčanom',
      'z vidieka',
      'z vidieku',
      'z dediny',
      's vidieka',
      's dediny',
      'zo vidieka',
      'zo dediny',
      'L obhajoval svoju nevedomosť tým, že bol vidiečan',
      'L obhajoval svoju nevedomosť tým, že bol dedinčan',
      'L obhajoval svoju nevedomosť tým, že bol vidiečanom',
      'L obhajoval svoju nevedomosť tým, že bol dedinčanom',
      'L obhajoval svoju nevedomosť tým, že bol z vidieka',
      'L obhajoval svoju nevedomosť tým, že bol z dediny',
      'L obhajoval svoju nevedomosť tým, že bol s vidieka',
      'L obhajoval svoju nevedomosť tým, že bol s dediny'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^doma$',
        hint: 'Slovo „doma“ je príslovka miesta, ale zadanie vyžaduje doplniť podstatné meno! Prečítaj si začiatok druhej repliky postavy L: „To som práve nevedel. K nám na … sa to nedostalo.“'
      },
      {
        pattern: 'vidieck|dedinsk',
        hint: 'Napísal(a) si prídavné meno, ale zadanie žiada doplniť podstatné meno (pomenovanie obyvateľa tohto prostredia alebo predložkové spojenie podstatného mena)!'
      }
    ],
    hint: 'Keď S zvolá „Lietadlo už dávno objavili!“, L sa vyhovára: „To som práve nevedel. K nám na … sa to nedostalo.“ Utvor z tohto miesta jedno vhodné podstatné meno (pomenovanie obyvateľa tohto prostredia), aby veta dávala zmysel!',
    solutionSteps: [
      {
        title: 'Miesto v ukážke 6',
        text: 'Na upozornenie, že lietadlo už dávno objavili, postava L reaguje: //„To som práve nevedel. K nám **na vidiek** sa to nedostalo.“//'
      },
      {
        title: 'Tvorba podstatného mena a hodnotenie kľúča',
        text: 'Keďže zadanie vyžaduje doplniť **podstatné meno** po slovese //bol//, správnou odpoveďou je obyvateľské meno **vidiečan** / **dedinčan** (alebo v inštrumentáli **vidiečanom** / **dedinčanom**), prípadne predložkový tvar podstatného mena **z vidieka** / **z dediny**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **vidiečan** / **dedinčan** (príp. **z vidieka** / **z dediny**).'
  },
  {
    id: 47,
    code: '47',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Napíšte skloňovací vzor pomnožného podstatného mena z ukážky 6.',
    placeholder: 'Napíš skloňovací vzor',
    correctAnswerDisplay: 'ulica',
    acceptedAnswers: [
      'ulica',
      'vzor ulica',
      'podľa vzoru ulica',
      'Himaláje - ulica',
      'Himaláje, ulica',
      'Himaláje (ulica)',
      'Himaláje: ulica',
      'Himaláje - vzor ulica',
      'Himaláje, vzor ulica',
      'ulica (Himaláje)',
      'ulica - Himaláje',
      'ulica, Himaláje',
      'Himalájami - ulica',
      'Himalájami, ulica',
      'Himalájach - ulica',
      'Himalájach, ulica',
      'nad Himalájami - ulica',
      'nad Himalájami, ulica',
      'na Himalájach - ulica',
      'na Himalájach, ulica'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^himal[aá]j[ea]?$|^himal[aá]jami$|^himal[aá]jach$',
        hint: 'Správne si v texte našiel/našla pomnožné podstatné meno „Himaláje“, ale úloha žiada napísať jeho skloňovací vzor!'
      },
      {
        pattern: 'stroj',
        hint: 'Pozor! V texte je lokál „na Himalájach“ (nie *na Himalájoch!), nejde teda o mužský vzor stroj, ale o ženský vzor pre mäkké zakončenie.'
      },
      {
        pattern: 'dla[nň]',
        hint: 'Zemepisné pomnožné mená typu Košice, Alpy, Tatry, Himaláje sa neskloňujú podľa vzoru dlaň, ale podľa vzorov žena (tvrdé: Tatry) alebo … (mäkké: Košice, Himaláje).'
      }
    ],
    hint: 'Najprv nájdi v ukážke 6 pomnožné podstatné meno – je to názov veľhôr, ktorý má tvar množného čísla, hoci pomenúva jedno pohorie. Potom si pozri jeho zakončenie (mäkká spoluhláska j + prípona -e) a tvar lokálu priamo v texte („na …-ach“, nie „-och“!). Ktorý ženský vzor má v množnom čísle prípony -e, -am/-iam, -ach/-iach?',
    solutionSteps: [
      {
        title: '1. Nájdenie pomnožného podstatného mena',
        text: '**Pomnožné podstatné meno** má len tvary množného čísla, hoci pomenúva jeden predmet alebo jedno pohorie (napr. //nožnice, Tatry, Košice//). V ukážke 6 je ním vlastné meno pohoria **Himaláje** (v texte sa vyskytujú tvary //Himaláje, nad Himalájami, na Himalájach//).'
      },
      {
        title: '2. Určenie rodu a skloňovacieho vzoru',
        text: '• V texte vidíme tvar lokálu //„na Himaláj**ach**“// (a v datíve //Himaláj**am**//) – prípony //-am, -ach// jednoznačne dokazujú **ženský rod** (mužský vzor //stroj// by mal //strojom, na strojoch//).\n• Kmeň slova //Himaláj-e// je zakončený na **mäkkú spoluhlásku j** a v nominatíve má príponu **-e** (v datíve a lokáli je //-am, -ach// namiesto //-iam, -iach// pre pravidlo o rytmickom krátení po dlhej slabike //-lá-//).\n• Ženské pomnožné podstatné mená s mäkkým zakončením (ako //Košice, Kysuce, nožnice, nohavice, Himaláje//) sa skloňujú podľa vzoru **ulica**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **ulica**.'
  },
  {
    id: 48,
    code: '48',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Koľko autorských poznámok obsahuje ukážka 6?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '1 (jednu)',
    acceptedAnswers: [
      '1',
      'jednu',
      'jedna',
      'jeden',
      '1 autorskú poznámku',
      'jednu autorskú poznámku',
      '1 poznámku',
      'jednu poznámku',
      '1 autorská poznámka',
      'jedna autorská poznámka'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(0|nula|[zž]iadn)',
        hint: 'Pozri sa pozorne do druhej repliky postavy L – je tam veta v zátvorke, ktorá opisuje, čo postavy práve robia!'
      },
      {
        pattern: '^(2|dve|dva)$',
        hint: 'Údaj „(úryvok, upravené)“ pod nadpisom nie je scénická poznámka autora divadelnej hry, ale redakčná poznámka zostavovateľov testu! Rátaj len scénickú poznámku priamo v texte dialógu.'
      }
    ],
    hint: 'Autorská (scénická) poznámka v divadelnej hre je text v zátvorke uprostred alebo na začiatku repliky, ktorým autor opisuje pohyb, gestá alebo dianie na scéne (pozor: údaj „(úryvok, upravené)“ pod nadpisom k nej nepatrí!). Spočítaj ich v ukážke 6.',
    solutionSteps: [
      {
        title: 'Čo je autorská (scénická) poznámka',
        text: '**Autorská (scénická) poznámka** v dramatickom texte slúži hercom, režisérovi a čitateľovi – v zátvorke (a odlišným rezom písma) zachytáva konanie postáv na javisku, mimiku, intonáciu či zmenu scény.'
      },
      {
        title: 'Vyhľadanie v ukážke 6',
        text: 'V druhej replike postavy L sa nachádza presne **1 (jedna)** autorská poznámka: //„(Obaja letia nad Himalájami.)“//.\n(Poznámka //(úryvok, upravené)// pod názvom diela je len redakčný údaj zostavovateľov maturitného testu.)'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **1** (jednu).'
  },

  // ---------------- Ukážka 7 – Valaská škola mravúv stodola
  {
    id: 49,
    code: '49',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Čo tvrdí autor v ukážke 7?',
    options: [
      { key: 'A', text: 'Chutná a sýta strava je cestou k zdraviu.' },
      { key: 'B', text: 'Najdôležitejším jedlom počas dňa je obed.' },
      { key: 'C', text: 'Ak sa dobre navečeriame, žalúdku to prospeje.' },
      { key: 'D', text: 'Ak denne vynecháme raňajky, budeme dobre spať.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si záverečné štvorveršie básne, najmä posledné dva verše: „Zlý obed, hojná večera posluhuje k zdraví, / neb žalúdek v nočném spaní lépej jídlo tráví.“ Čo podľa autora prospieva žalúdku?',
    solutionSteps: [
      {
        title: 'Myšlienka v poslednej strofe',
        text: 'Autor v treťom štvorverší vysvetľuje, že prázdny žalúdok v noci môže pálčivosťou uškodiť krvi, a uzatvára: //„Zlý obed, **hojná večera posluhuje k zdraví, / neb žalúdek v nočném spaní lépej jídlo tráví**.“//\nPodľa autora teda výdatná (hojná) večera – keď sa dobre navečeriame – prospieva žalúdku, ktorý v spánku jedlo lepšie strávi.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – o chutnosti stravy sa v texte nehovorí a sýty obed autor neodporúča.\nB – presný opak: Hippokrates //nikdy obeda nejedal// a autor radí //Zlý (= skromný, slabý) obed//.\nD – raňajky sa v celej básni vôbec nespomínajú.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 50,
    code: '50',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré tvrdenie z ukážky 7 __nevyplýva__?',
    options: [
      { key: 'A', text: 'Salernus sa vyjadril k stravovacím návykom ľudí.' },
      { key: 'B', text: 'Vhodné množstvo jedla skvalitňuje človeku život.' },
      { key: 'C', text: 'Autor spochybňuje údajnú príčinu Hippokratovej smrti.' },
      { key: 'D', text: 'Autor vidí súvislosť medzi činnosťou žalúdka a zdravím krvi.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozri sa na prvé dva verše druhej strofy: „Nikdy nemoci necítil, snad by byl dluhšej žil, / kdyby se byl z pritrefení z rebríka nezabil.“ Spochybňuje autor, že sa Hippokrates zabil pádom z rebríka, alebo to berie ako hotovú vec?',
    solutionSteps: [
      {
        title: 'Hippokratova smrť v druhej strofe',
        text: 'Vo veršoch //„Nikdy nemoci necítil, snad by byl dluhšej žil, / kdyby se byl z pritrefení z rebríka nezabil“// autor hovorí, že Hippokrates by bol žil ešte dlhšie, keby sa nebol náhodou (//z pritrefení//) zabil pádom z rebríka. Príčinu jeho smrti berie ako úsmevný fakt a **nijako ju nespochybňuje** – tvrdenie C z ukážky **nevyplýva**.'
      },
      {
        title: 'Overenie zvyšných tvrdení (z ukážky vyplývajú)',
        text: 'A – vyplýva zo slov //„Salernusové prísloví… že krátká večera nočnej lehkosti osoží.“//\nB – vyplýva z nadpisu //Dobrá dieta prodlužuje letá// aj z prvej a tretej strofy.\nD – vyplýva z veršov //„jestli žalúdek nemá čo tráviti, / múže ze svú pálčivosťú krvi uškoditi.“//'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 51,
    code: '51',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré tvrdenie o diele //Valaská škola mravúv stodola// je pravdivé?',
    options: [
      { key: 'A', text: 'Je to rozsiahla zbierka sonetov písaných časomerným veršom.' },
      { key: 'B', text: 'Často sa v ňom využíva zložitá náboženská symbolika.' },
      { key: 'C', text: 'Do určitej miery je inšpirované ľudovou múdrosťou.' },
      { key: 'D', text: 'Ide o súbor básní predstavujúcich všetky druhy lyriky.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Premýšľaj o samotnom názve „Valaská škola mravúv stodola“ (škola pastierov, stodola mravov) aj o ukážke 7: pre koho bolo dielo určené a odkiaľ čerpalo praktické životné rady a príslovia?',
    solutionSteps: [
      {
        title: 'Charakteristika diela Valaská škola mravúv stodola',
        text: 'Dielo //Valaská škola mravúv stodola// („životná múdrosť pastierov“) je rozsiahla didakticko-reflexívna (mravoučná) skladba určená prostému ľudu. Autor v nej dáva praktické mravné a životné rady a v bohatej miere **čerpá z ľudovej múdrosti** – z ľudových prísloví, porekadiel a skúseností bežných ľudí.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – nejde o sonety (má 12-veršové básne so schémou troch štvorverší, nie 14-veršové sonety 4+4+3+3) a nie je písané časomerným, ale **sylabickým** veršom.\nB – namiesto zložitej symboliky využíva zrozumiteľné, názorné a zemité vyjadrovanie.\nD – neobsahuje všetky druhy lyriky (napr. intímnu ľúbostnú či čisto prírodnú lyriku), ide o mravoučnú (didakticko-reflexívnu) poéziu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 52,
    code: '52',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'Jazykom diela //Valaská škola mravúv stodola// je',
    options: [
      { key: 'A', text: 'jedna z podôb kultúrnej predspisovnej slovenčiny.' },
      { key: 'B', text: 'prvý variant kodifikovaného slovenského jazyka.' },
      { key: 'C', text: 'biblická čeština používaná slovenskými evanjelikmi.' },
      { key: 'D', text: 'neidentifikovateľné slovenské zemepisné nárečie.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Dielo vzniklo v roku 1755 – teda ešte pred prvým uzákonením (kodifikáciou) spisovnej slovenčiny Antonom Bernolákom v roku 1787! Všimni si typické západoslovenské tvary v ukážke („s večerú“, „žalúdek“, „múže“, „pálčivosťú“). Ako v dejinách jazyka voláme takúto kultivovanú podobu jazyka spred kodifikácie?',
    solutionSteps: [
      {
        title: 'Kultúrna západoslovenčina (predspisovné obdobie)',
        text: 'Dielo //Valaská škola mravúv stodola// vzniklo v polovici 18. storočia (1755), teda ešte v **predspisovnom období** (pred Bernolákovou kodifikáciou z roku 1787). Je napísané v tzv. **kultúrnej západoslovenčine** (s prvkami češtiny a západoslovenských nárečí, napr. //s večerú, múže, pálčivosťú, prísloví// namiesto dvojhlások a tvary ako //mravúv, žalúdek//), čo je **jedna z troch podôb kultúrnej predspisovnej slovenčiny**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'B – prvým kodifikovaným variantom bola až **bernolákovčina** (1787).\nC – autor bol katolícky kňaz (františkán), nepoužíval biblickú češtinu slovenských evanjelikov.\nD – jazyk diela je jazykovedne presne určený (západoslovenská kultúrna slovenčina).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 53,
    code: '53',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré tvrdenie o slovách //krátká// a //tráví// z ukážky 7 je pravdivé?',
    options: [
      { key: 'A', text: 'Dodržiava sa v nich pravidlo o rytmickom krátení.' },
      { key: 'B', text: 'Majú slabiku tvorenú slabikotvornou spoluhláskou.' },
      { key: 'C', text: 'Patria k plnovýznamovým slovným druhom.' },
      { key: 'D', text: 'Patria k neohybným slovným druhom.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Urči najprv slovný druh oboch slov: „krátká“ (aká?) a „tráví“ (čo robí?). Sú to plnovýznamové a ohybné slovné druhy? A pre kontrolu si všimni dĺžne v oboch slabikách týchto historických tvarov!',
    solutionSteps: [
      {
        title: 'Určenie slovných druhov',
        text: '• //krátká// (v dnešnej slovenčine //krátka//) je **prídavné meno**,\n• //tráví// (v dnešnej slovenčine //trávi//) je **sloveso**.\nPrídavné mená aj slovesá majú samostatný vecný význam a sú vetnými členmi – patria k **plnovýznamovým** (a zároveň ohybným) slovným druhom.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – v historických tvaroch //krát-ká// aj //trá-ví// nasledujú dve dlhé slabiky bezprostredne za sebou, takže pravidlo o rytmickom krátení sa v nich práveže **nedodržiava**!\nB – spoluhláska //r// v slovách //krátká// a //tráví// stojí pred samohláskou //á//, takže nositeľom slabičnosti je samohláska //á//, nie slabikotvorné //r// (slabikotvorné //r// stojí medzi spoluhláskami, napr. v slove //kr-vi//).\nD – prídavné mená sa skloňujú a slovesá časujú, sú to teda **ohybné** slovné druhy.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 54,
    code: '54',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Napíšte **meno a priezvisko** autora diela //Valaská škola mravúv stodola//.',
    placeholder: 'Napíš meno a priezvisko',
    correctAnswerDisplay: 'Hugolín Gavlovič',
    acceptedAnswers: [
      'Hugolín Gavlovič',
      'Hugolin Gavlovič',
      'HUGOLÍN GAVLOVIČ',
      'HUGOLIN GAVLOVIČ',
      'Martin Gavlovič',
      'MARTIN GAVLOVIČ'
    ],
    caseSensitive: true,
    caseHint: 'Meno aj priezvisko autora sú vlastné mená – musia mať veľké začiatočné písmená.',
    commonMistakes: [
      {
        pattern: '^(h\\.\\s*)?gavlovi[cč]$',
        hint: 'Zadanie zvýraznene vyžaduje napísať celé meno a priezvisko autora – samotné priezvisko alebo skratka krstného mena nestačí!'
      },
      {
        pattern: '^hugol[ií]n$|^martin$',
        hint: 'Zadanie vyžaduje napísať meno aj priezvisko autora.'
      },
      {
        pattern: 'bernol[aá]k|bajza|f[aá]ndly|koll[aá]r|holl[yý]',
        hint: 'Títo autori pôsobili neskôr v období osvietenstva a klasicizmu. Autor Valaskej školy (1755) bol františkánsky mních z Pruského pri Ilave, ktorého rehoľné meno sa začína na H.'
      }
    ],
    hint: 'Spomeň si na najvýznamnejšieho predstaviteľa slovenskej didakticko-reflexívnej poézie 18. storočia – bol to františkánsky mních pôsobiaci v Pruskom pri Ilave, ktorého rehoľné meno sa začína na písmeno H a priezvisko na G. Nezabudni napísať celé meno aj priezvisko s veľkými začiatočnými písmenami!',
    solutionSteps: [
      {
        title: 'Autor diela Valaská škola mravúv stodola',
        text: 'Autorom veršovanej skladby //Valaská škola mravúv stodola// (1755) je františkánsky kňaz a kazateľ **Hugolín Gavlovič** (1712 – 1787), vlastným (občianskym) menom **Martin Gavlovič**.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Musí byť uvedené **meno aj priezvisko** s veľkými začiatočnými písmenami (príp. zapísané celé veľkými písmenami): **Hugolín Gavlovič** (uznáva sa aj **Hugolin Gavlovič** a občianske meno **Martin Gavlovič**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **Hugolín Gavlovič**.'
  },
  {
    id: 55,
    code: '55',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Doplňte správny názov literárnohistorického obdobia do nasledujúcej vety.',
    fillSentenceHtml: 'Dielo //Valaská škola mravúv stodola// patrí do literatúry obdobia {{blank}}.',
    placeholder: 'Doplň názov obdobia',
    correctAnswerDisplay: 'baroka (barok)',
    acceptedAnswers: [
      'barok',
      'baroka',
      'barokového',
      'baroková',
      'barokovej',
      'baroko',
      'obdobia baroka',
      'obdobia barok',
      'obdobia barokového',
      'baroková literatúra',
      'barokovej literatúry',
      'Dielo Valaská škola mravúv stodola patrí do literatúry obdobia baroka',
      'Dielo Valaská škola mravúv stodola patrí do literatúry obdobia barok',
      'Dielo Valaská škola mravúv stodola patrí do literatúry obdobia baroko'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'klasiciz|osvieten',
        hint: 'Klasicizmus a osvietenstvo nastúpili v slovenskej literatúre až koncom 18. storočia (od 80. rokov 18. storočia). Valaská škola (1755) uzatvára predchádzajúce literárne obdobie staršej slovenskej literatúry!'
      },
      {
        pattern: 'humaniz|renesan',
        hint: 'Humanizmus a renesancia prebiehali v 16. a na začiatku 17. storočia. Ako sa volá umelecké obdobie, ktoré nasledovalo po renesancii (polovica 17. – koniec 18. storočia)?'
      }
    ],
    hint: 'Zopakuj si poradie období staršej literatúry: stredovek → humanizmus a renesancia → … (polovica 17. storočia až cca 1780, pred nástupom klasicizmu a osvietenstva). Do tohto obdobia patrí didakticko-reflexívna poézia Valaskej školy!',
    solutionSteps: [
      {
        title: 'Zaradenie do literárnohistorického obdobia',
        text: 'Dielo //Valaská škola mravúv stodola// (1755) je vrcholným dielom slovenskej didakticko-reflexívnej poézie obdobia **baroka** (slovenský literárny **barok**, cca 1650 – 1780).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznávajú sa tvary **baroka**, **barok**, **barokového**, **baroková**, **barokovej** aj **baroko** (vrátane zapojenia do vety, s prihliadnutím na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **baroka** (**barok**).'
  },
  {
    id: 56,
    code: '56',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'Prepíšte podčiarknuté slovné spojenie //Salernusové prísloví// z ukážky 7 podľa súčasných pravidiel pravopisu a gramatiky.',
    placeholder: 'Prepíš slovné spojenie',
    correctAnswerDisplay: 'Salernovo príslovie / Salernusovo príslovie',
    acceptedAnswers: [
      'Salernovo príslovie',
      'Salernusovo príslovie',
      'Salemovo príslovie',
      'Salemusovo príslovie'
    ],
    caseSensitive: true,
    caseHint: 'Privlastňovacie prídavné meno utvorené od osobného mena (Salernovo/Salernusovo) sa píše s veľkým začiatočným písmenom S a slovo príslovie s malým p (zápis samými veľkými písmenami sa neuznáva).',
    commonMistakes: [
      {
        pattern: '^sale(rn|m)(us)?ov[eé]\\s+pr[ií]slov',
        hint: 'Pozor na príponu privlastňovacieho prídavného mena podľa vzoru otcov! Slovo „príslovie“ je v jednotnom čísle stredného rodu (to príslovie → otcovo príslovie), preto musí mať krátku príponu -ovo (nikdy nie -ove ani dlhé -ové)!'
      },
      {
        pattern: 'pr[ií]slov[ií]$',
        hint: 'Nezabudni upraviť podľa dnešnej spisovnej slovenčiny aj druhé slovo: podstatné meno stredného rodu má podľa vzoru vysvedčenie tvar „príslovie“.'
      },
      {
        pattern: 'pr[ií]slovia$',
        hint: 'V ukážke nasleduje len jedno konkrétne príslovie („že krátká večera nočnej lehkosti osoží“) – ide o akuzatív jednotného čísla (to príslovie), nie množného čísla!'
      }
    ],
    hint: 'Skontroluj si obe slová krok za krokom: 1. Druhé slovo „prísloví“ označuje v texte jednu ľudovú múdrosť (akuzatív jednotného čísla stredného rodu – vzor vysvedčenie). 2. Prvé slovo je individuálne privlastňovacie prídavné meno od osobného mena Salernus (skloňuje sa podľa vzoru otcov: v strednom rode jednotného čísla hovoríme „otcovo mesto“, nikdy nie s -é!). Píše sa s veľkým S a pri menách na -us môže prípona -us aj vypadnúť.',
    solutionSteps: [
      {
        title: '1. Podstatné meno v jednotnom čísle stredného rodu',
        text: 'Vo verši //„Salernusové prísloví opakujú mnozí: že krátká večera nočnej lehkosti osoží“// ide o jedno konkrétne príslovie v akuzatíve jednotného čísla. Západoslovenský tvar //prísloví// má v dnešnej spisovnej slovenčine dvojhlásku //-ie// podľa vzoru //vysvedčenie//: **príslovie** (s malým //p//).'
      },
      {
        title: '2. Privlastňovacie prídavné meno podľa vzoru otcov (-ovo!)',
        text: 'Od mužského osobného mena //Salernus// tvoríme privlastňovacie prídavné meno s **veľkým S** podľa vzoru **otcov** (latinská koncovka //-us// sa pri tvorení zvyčajne odčleňuje: //Salernus → Salernov//, kľúč však uznáva aj tvar so zachovaným //-us-//: //Salernusov//).\nPodľa //Pravidiel slovenského pravopisu// má vzor **otcov** v nominatíve a akuzatíve jednotného čísla stredného rodu vždy **krátku príponu -ovo**: //otc**ovo** príslovie// → **Salernovo príslovie** / **Salernusovo príslovie**. (Prípona //-ove// patrí len množnému číslu a dlhé //-ové// vo vzoroch //otcov/matkin// v spisovnej slovenčine neexistuje!)'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznáva sa iba tvar s veľkým **S**, príponou **-ovo** a malým **p** v slove **príslovie**: **Salernovo príslovie** alebo **Salernusovo príslovie** (kľúč toleruje aj preklep //Salemovo / Salemusovo// pri čítaní písmen //rn//, neuznáva však zápis samými veľkými písmenami).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **Salernovo príslovie** (alebo **Salernusovo príslovie**).'
  },

  // ---------------- Ukážka 8 – Romain Rolland: Peter a Lucia
  {
    id: 57,
    code: '57',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré tvrdenie o Petrovi a Lucii vyplýva z ukážky 8?',
    options: [
      { key: 'A', text: 'Prilákal ich spev chrámového zboru.' },
      { key: 'B', text: 'Chceli byť chvíľku celkom sami.' },
      { key: 'C', text: 'Chceli navštíviť smutného priateľa.' },
      { key: 'D', text: 'Prišli sa symbolicky zosobášiť.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si posledný odsek ukážky – čo Peter a Lucia držiac sa za ruky v chráme súčasne šepkajú („pred tvojou tvárou si ho beriem, pred tvojou tvárou si ju beriem. Spoj nás!“)?',
    solutionSteps: [
      {
        title: 'Sľub v závere ukážky',
        text: 'Peter a Lucia (v texte označení ako //„dvaja mladí pohania“//, teda neveriaci) sa v chráme držia za ruky a spoločne šepkajú manželský sľub: //„Ty veľký náš priateľ, pred tvojou tvárou si ho beriem, pred tvojou tvárou si ju beriem. Spoj nás! Vidíš naše srdcia.“// Bez oficiálneho obradu sa teda prišli do chrámu **symbolicky zosobášiť**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – o tom, že by ich dovnútra prilákal spev zboru, sa v texte nepíše.\nB – v chráme neboli sami (//„ukrytí pred pohľadmi ostatných ľudí“//) a neprišli tam len kvôli samote, ale kvôli sľubu lásky.\nC – spojenie //„veľký priateľ“// v chráme označuje nepriamo Ježiša Krista (Boha), nie bežného smutného kamaráta (do smútku bol ponorený samotný chrám).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 58,
    code: '58',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré zmyslové vnemy sú zachytené v ukážke 8?',
    options: [
      { key: 'A', text: 'Iba vnemy sluchom a hmatom.' },
      { key: 'B', text: 'Aj vnemy sluchom a zrakom.' },
      { key: 'C', text: 'Iba vnemy zrakom a hmatom.' },
      { key: 'D', text: 'Vnemy všetkými zmyslami.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Nájdi v texte, čo postavy počujú, čo vidia a čoho sa dotýkajú – a potom si daj veľký pozor na vymedzovacie slovíčka „Iba“, „Aj“ a „všetkými“ na začiatku možností!',
    solutionSteps: [
      {
        title: 'Zmyslové vnemy v ukážke 8',
        text: 'V úryvku sú zachytené tri druhy zmyslových vnemov:\n• **sluch:** //hrkútal holub, Posledný zvuk zvonku, Paríž zmĺkol, Velebné tóny organa, spevy plakali, tíško šeptali//,\n• **zrak:** //zdvihli zrak, videli štít oltára, kríž a farebné obloky bočnej kaplnky//,\n• **hmat:** //držali sa za ruky//.'
      },
      {
        title: 'Rozhodujúce slovíčka „iba“, „aj“, „všetkými“',
        text: '• Možnosť **B** (//**Aj** vnemy sluchom a zrakom//) je pravdivá – v texte sú okrem hmatu zachytené aj vnemy sluchom a zrakom.\n• Možnosť A (//Iba// sluchom a hmatom) klame, lebo v texte je aj zrak.\n• Možnosť C (//Iba// zrakom a hmatom) klame, lebo v texte je aj sluch.\n• Možnosť D (//všetkými// piatimi zmyslami) klame, lebo chýbajú vnemy čuchom a chuťou.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 59,
    code: '59',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktorý umelecký prostriedok sa nachádza v nasledujúcej vete z ukážky 8?\n//Paríž zmĺkol.//',
    options: [
      { key: 'A', text: 'inotaj' },
      { key: 'B', text: 'symbol' },
      { key: 'C', text: 'protiklad' },
      { key: 'D', text: 'metonymia' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Čo v skutočnosti zmĺklo, keď za Petrom a Luciou zapadli dvere chrámu – kamenné mesto Paríž, alebo ruch ulíc a ľudia v Paríži? Ako voláme prenesenie pomenovania z miesta na ľudí a dianie v ňom (na základe vecnej súvislosti)?',
    solutionSteps: [
      {
        title: 'Prenesenie významu na základe vnútornej súvislosti',
        text: 'Vo vete //„Paríž zmĺkol.“// autor nepomenúva samotné geografické mesto, ale **ľudí, dopravu a pouličný ruch v Paríži**, ktorý stíchol po vstupe milencov do chrámu.\nPrenesenie pomenovania z miesta na obyvateľov alebo dianie v ňom na základe **vecnej (priestorovej, vnútornej) súvislosti** sa nazýva **metonymia** (podobne ako //Celá dedina bola na nohách// alebo //Čítam Rollanda//).'
      },
      {
        title: 'Ostatné umelecké prostriedky',
        text: 'A – **inotaj (alegória)**: utajený zmysel celého príbehu, napr. v bájkach.\nB – **symbol**: konkrétny znak zastupujúci ustálený abstraktný pojem (napr. //srdce// = láska).\nC – **protiklad (antitéza / kontrast)**: spojenie dvoch slov alebo myšlienok s opačným významom.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 60,
    code: '60',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'V ktorej vete z ukážky 8 sa nachádza nepriame pomenovanie?',
    options: [
      { key: 'A', text: '//Nad hlavami im hrkútal holub.//' },
      { key: 'B', text: '//A obidvaja súčasne tíško šeptali…//' },
      { key: 'C', text: '//Držali sa za ruky pred svojím veľkým priateľom…//' },
      { key: 'D', text: '//Schúlili sa vo výklenku piliera na schodoch…//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Nepriame (obrazné) pomenovanie nepomenúva vec či bytosť jej vlastným menom, ale obrazne alebo opisom. V ktorej z týchto štyroch viet nechápeme všetky slová úplne doslovne?',
    solutionSteps: [
      {
        title: 'Odhalenie nepriameho pomenovania',
        text: 'Vo vete **C** //„Držali sa za ruky pred svojím veľkým priateľom…“// nestoja Peter a Lucia v chráme pred nijakým fyzickým kamarátom, ale pred oltárom a krížom – slovné spojenie **veľký priateľ** je tu použité ako **nepriame (obrazné, opisné – perifrastické) pomenovanie** pre Ježiša Krista / Boha.'
      },
      {
        title: 'Priame pomenovania v ostatných možnostiach',
        text: 'Vo vetách A, B a D sú všetky slová použité vo svojom základnom, priamom význame (skutočný holub v chráme, tichý šepot milencov, schúlenie sa vo výklenku piliera na schodoch).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 61,
    code: '61',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Po druhej svetovej vojne dosiahol vrchol svojej literárnej tvorby',
    options: [
      { key: 'A', text: 'Jerome David Salinger.' },
      { key: 'B', text: 'Erich Maria Remarque.' },
      { key: 'C', text: 'Jozef Cíger Hronský.' },
      { key: 'D', text: 'Milo Urban.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Spomeň si na najznámejšie diela týchto štyroch prozaikov: „Kto chytá v žite“, „Na západe nič nové“, „Jozef Mak“ a „Živý bič“. Ktorí traja patrili do medzivojnovej literatúry a ktorý autor vydal svoj slávny román až v roku 1951?',
    solutionSteps: [
      {
        title: 'Zaradenie autorov do literárnych období',
        text: 'Americký prozaik **Jerome David Salinger** (1919 – 2010) patrí do svetovej literatúry **po druhej svetovej vojne** – jeho vrcholný psychologicko-spoločenský román o dospievajúcom Holdenovi Caulfieldovi //Kto chytá v žite// vyšiel v roku **1951** (a zbierka //Deväť poviedok// v roku 1953).'
      },
      {
        title: 'Medzivojnoví autori (prečo neplatia B, C, D)',
        text: 'Ostatní traja spisovatelia dosiahli vrchol svojej tvorby už v **medzivojnovom období** (1918 – 1945):\n• **E. M. Remarque** – //Na západe nič nové// (1929), //Traja kamaráti// (1936),\n• **J. C. Hronský** – //Jozef Mak// (1933),\n• **M. Urban** – //Živý bič// (1927).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 62,
    code: '62',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Pomenujte umelecký jazykový prostriedok, ktorý predstavuje zvýraznené slovo v prvom odseku ukážky 8.',
    placeholder: 'Napíš umelecký prostriedok',
    correctAnswerDisplay: 'epiteton (básnický prívlastok)',
    acceptedAnswers: [
      'epiteton',
      'epiteton ornans',
      'epiteton constans',
      'básnický prívlastok',
      'umelecký prívlastok',
      'ozdobný prívlastok'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(zhodn[yý]\\s+)?pr[ií]vlastok$',
        hint: 'Samotné slovo „prívlastok“ je syntaktický termín (vetný člen). Úloha však žiada pomenovať umelecký jazykový prostriedok z teórie literatúry – aký prívlastok (alebo ako sa volá gréckym termínom)?'
      },
      {
        pattern: 'metafor|personifik',
        hint: 'Zvýraznené je len prídavné meno „Velebné“ pred podstatným menom „tóny“ – je to citovo a esteticky zafarbený prívlastok!'
      }
    ],
    hint: 'V prvom odseku je zvýraznené prídavné meno „Velebné“ (v spojení „Velebné tóny organa“). Neurčuje vlastnosť len vecne, ale vnáša do textu vznešenosť, cit a krásu. Ako sa v literárnej teórii volá takýto obrazný, citovo zafarbený prívlastok?',
    solutionSteps: [
      {
        title: 'Rozbor zvýrazneného slova Velebné',
        text: 'V spojení //„**Velebné** tóny organa“// stojí pred podstatným menom //tóny// prídavné meno //velebné// (= vznešené, posvätné). Má výrazné citové, hodnotiace a estetické zafarbenie – v umeleckom texte predstavuje **epiteton** (po slovensky **básnický prívlastok**).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznáva sa odpoveď **epiteton** (aj //epiteton ornans//) a slovenské pomenovanie **básnický prívlastok**, pričom sa prihliada na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **epiteton** (**básnický prívlastok**).'
  },
  {
    id: 63,
    code: '63',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Vypíšte z úryvku diela //Peter a Lucia// prvé slovo jednočlennej mennej/neslovesnej vety.',
    placeholder: 'Vypíš prvé slovo vety',
    correctAnswerDisplay: 'Posledný',
    acceptedAnswers: ['Posledný', 'Posledný zvuk zvonku'],
    commonMistakes: [
      {
        pattern: '^velebn[eé]$',
        hint: 'Pozri sa na celú túto vetu až po bodku: „Velebné tóny organa, veľké klenby, kamenná a zvuková opona ich oddelila od sveta.“ Na konci má sloveso „oddelila“, nie je teda neslovesná! Hľadaj kratšiu vetu o kúsok vyššie v 1. odseku, v ktorej vôbec nie je sloveso.'
      },
      {
        pattern: '^zvuk$',
        hint: 'Slovo „zvuk“ je síce jadrom tejto mennej vety, ale prečítaj si pozorne zadanie: vypíš prvé slovo tejto vety!'
      }
    ],
    hint: 'Jednočlenná menná (neslovesná) veta je taká veta medzi dvoma bodkami, v ktorej sa nenachádza vôbec žiadne určité sloveso a jej základom je podstatné meno! Prejdi si vety v prvom odseku jednu po druhej, nájdi vetu bez slovesa a vypíš jej úplne prvé slovo.',
    solutionSteps: [
      {
        title: 'Čo je jednočlenná menná (neslovesná) veta',
        text: '**Jednočlenná menná (neslovesná) veta** nemá podmet a prísudok a neobsahuje určité sloveso – jej vetným základom je meno (najčastejšie podstatné meno v nominatíve, ktoré vyjadruje vnem, nápis alebo jav, napr. //Ticho. Noc.//).'
      },
      {
        title: 'Kontrola viet v 1. odseku ukážky 8',
        text: '• //Vošli do chrámu.// – obsahuje sloveso //vošli//.\n• //Nad hlavami im hrkútal holub.// – obsahuje sloveso //hrkútal//.\n• //**Posledný** zvuk zvonku.// – v celej tejto vete **nie je žiadne sloveso**! Jej jadrom je podstatné meno //zvuk// rozvité prívlastkami //posledný// a //zvonku//. Ide o jedinú jednočlennú mennú vetu v ukážke.\nJej prvým slovom je **Posledný** (kľúč uznáva aj vypísanie celej vety //Posledný zvuk zvonku//; slovo musí byť napísané pravopisne správne).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **Posledný**.'
  },
  {
    id: 64,
    code: '64',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Koľko viet obsahuje podčiarknuté súvetie v ukážke 8?',
    placeholder: 'Napíš počet viet',
    correctAnswerDisplay: '3 (tri)',
    acceptedAnswers: ['3', 'tri', '3 vety', 'tri vety'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(2|dve)$',
        hint: 'Spočítaj pozorne všetky určité slovesné tvary (prísudky) v podčiarknutom súvetí: „boli obrátení“, „zdvihli“ a ešte jeden po druhej čiarke!'
      },
      {
        pattern: '^(4|[sš]tyri|5|p[aä][tť])$',
        hint: 'Nenechaj sa pomýliť poslednou čiarkou! V časti „videli štít oltára, kríž a farebné obloky bočnej kaplnky“ je len jeden prísudok „videli“ a za ním trojnásobný predmet (štít, kríž a obloky), nie ďalšie samostatné vety.'
      }
    ],
    hint: 'Zlaté pravidlo zo skladby: v súvetí je presne toľko jednoduchých viet, koľko je v ňom prísudkov (určitých slovesných tvarov)! Nájdi a spočítaj všetky prísudky v podčiarknutom súvetí (pozor: čiarka medzi slovami „štít oltára, kríž“ oddeľuje len viacnásobný vetný člen, nie novú vetu).',
    solutionSteps: [
      {
        title: 'Vyhľadanie prísudkov v podčiarknutom súvetí',
        text: 'Počet jednoduchých viet v súvetí určujeme podľa počtu **prísudkov**:\n1. //Chrbtom **boli obrátení** k chóru,// → 1. hlavná veta (slovesno-menný prísudok //boli obrátení//),\n2. //a keď **zdvihli** zrak,// → vedľajšia príslovková veta časová (slovesný prísudok //zdvihli//),\n3. //**videli** štít oltára, kríž a farebné obloky bočnej kaplnky.// → 2. hlavná veta (slovesný prísudok //videli//; slová //štít, kríž a obloky// tvoria len viacnásobný predmet v jednej vete).'
      },
      {
        title: 'Výsledný počet',
        text: 'Tri prísudky znamenajú, že podčiarknuté zložené súvetie obsahuje **3 (tri)** jednoduché vety.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **3** (**tri** vety).'
  }
];
