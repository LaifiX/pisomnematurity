import type { QuestionData } from '../../types';

// Úlohy 01 – 32. Odpovede podľa oficiálneho kľúča NIVaM k testu 26 1403 (Maturita 2026, marcový termín).

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart1: QuestionData[] = [
  // ---------------- Ukážka 1 – E. A. Poe: Vražda v ulici Morgue
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Priezvisko Dupin v ukážke 1 patrí',
    options: [
      { key: 'A', text: 'prírodovedcovi.' },
      { key: 'B', text: 'detektívovi.' },
      { key: 'C', text: 'čitateľovi.' },
      { key: 'D', text: 'svedkovi.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si v poslednom odseku, čo sa Dupin usiluje urobiť so záhadou vraždy a kto, naopak, číta pasáž z odbornej knihy či svedčí o výkrikoch.',
    solutionSteps: [
      {
        title: 'Úloha postavy v texte',
        text: 'Dupin porovnáva stopy z miesta činu (náčrtok prstov, chumáč srsti, výpovede svedkov) a v poslednom odseku hovorí: //„Nádej, že záhadu celkom rozlúštim, som preto staval najmä na týchto svojich slovách.“// Rekonštruuje priebeh zločinu a lúšti záhadu – je teda **detektív** (C. Auguste Dupin je známy detektív z poviedok E. A. Poea).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – prírodovedcom (autorom opisu orangutana) je **Cuvier**, nie Dupin.\nC – pasáž z Cuviera číta **rozprávač** (Dupinov priateľ: //„povedal som, keď som dočítal“//).\nD – svedkom v texte je cukrár **Montani**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 1?',
    options: [
      { key: 'A', text: 'Francúza prítomného na mieste činu poznali viacerí ľudia vrátane cukrára Montaniho.' },
      { key: 'B', text: 'Na svedecké výpovede sa v prípade zločinov v ulici Morgue nebolo možné spoliehať.' },
      { key: 'C', text: 'Vraždu spáchal niekto so znalosťou anatómie orangutana z Východoindických ostrovov.' },
      { key: 'D', text: 'Druhý hlas začutý občanmi z ulice Morgue sa pri vyšetrovaní zatiaľ nepodarilo identifikovať.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si záver 3. odseku: koľko hlasov občania počuli a pri koľkých z nich vedeli určiť, komu patril?',
    solutionSteps: [
      {
        title: 'Doklad v texte',
        text: 'Rozprávač v 3. odseku pripomína: //„Okrem toho občania počuli dva hlasy a jeden z nich patril nepochybne Francúzovi.“// Prvý hlas teda svedkovia podľa slov //Mon Dieu!// priradili Francúzovi, no pôvod druhého hlasu sa pri dovtedajšom vyšetrovaní ešte nepodarilo určiť.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – Francúza osobne nepoznali, Dupin o ňom hovorí neurčito ako o //„akomsi Francúzovi“// a Montani iba charakterizoval tón jeho výkriku.\nB – svedecké výpovede sa, naopak, //„temer jednomyseľne“// zhodovali a Dupin práve na nich postavil rozlúštenie.\nC – krvavé činy spáchal samotný utečený orangutan; o jeho anatómii len písal prírodovedec Cuvier v knihe.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'Rozprávač v ukážke 1 je',
    options: [
      { key: 'A', text: 'vševediaci a zúčastňuje sa na deji.' },
      { key: 'B', text: 'nespoľahlivý a okrajovo sa zúčastňuje na deji.' },
      { key: 'C', text: 'priamy a zúčastňuje sa na deji.' },
      { key: 'D', text: 'v 1. osobe a nezúčastňuje sa na deji.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si slovesnú osobu, v ktorej je príbeh vyrozprávaný, či rozprávač sám vystupuje ako postava v scéne a či pozná všetky súvislosti vopred, alebo mu záhadu vysvetľuje Dupin. Ako sa v teórii literatúry nazýva takýto typ rozprávača?',
    solutionSteps: [
      {
        title: 'Určenie typu rozprávača',
        text: 'Príbeh je podaný v **1. osobe jednotného čísla** (ja-rozprávanie): //„V tej chvíli som pochopil…“//, //„povedal som, keď som dočítal“//. Rozprávač je zároveň priamo prítomný v scéne – číta knihu a rozpráva sa s Dupinom. V literárnej teórii sa rozprávač v 1. osobe, ktorý je sám postavou deja, nazýva **priamy rozprávač**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – vševediaci rozprávač rozpráva v 3. osobe a pozná aj skryté myšlienky všetkých postáv; tu rozprávač sám priznáva: //„jednotlivosti tejto hrôzyplnej záhady ešte vždy neviem pochopiť“//.\nB – rozprávač nezavádza čitateľa (nie je nespoľahlivý), vecne opisuje rozhovor s Dupinom.\nD – rozprávač v deji priamo vystupuje ako jedna z postáv rozhovoru.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej časti ukážky 1 je vyjadrená pravdepodobnosť aj istota?',
    options: [
      {
        key: 'A',
        text: '//Ozrutnú postavu, úžasnú silu a obratnosť, neskrotnú divosť a napodobňovacie schopnosti tohto cicavca každý dobre pozná. V tej chvíli som pochopil všetku hrôzu vraždy.//'
      },
      {
        key: 'B',
        text: '//Opis prstov sa presne zhoduje s vaším náčrtkom. Aj chumáč žltohnedej srsti zodpovedá zvieraťu, o ktorom píše Cuvier.//'
      },
      {
        key: 'C',
        text: '//Lenže jednotlivosti tejto hrôzyplnej záhady ešte vždy neviem pochopiť. Okrem toho občania počuli dva hlasy a jeden z nich patril nepochybne Francúzovi.//'
      },
      {
        key: 'D',
        text: '//Orangutan mu asi ušiel; vystopoval ho až do izby, je však vylúčené, aby sa mu ho podarilo dolapiť v rozruchu, ktorý nastal.//'
      }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pravdepodobnosť (domnienku) vyjadrujú slová ako možno, zrejme, pravdepodobne; istotu zasa výrazy ako určite, bezpochyby, celkom isto. Hľadaj úryvok, v ktorom nájdeš obidva významy naraz.',
    solutionSteps: [
      {
        title: 'Pravdepodobnosť aj istota v jednej výpovedi',
        text: 'V možnosti **D** vyjadruje častica **asi** (//„Orangutan mu asi ušiel“//) domnienku, čiže **pravdepodobnosť**, a obrat **je však vylúčené** (//„je však vylúčené, aby sa mu ho podarilo dolapiť“//) vyjadruje stopercentné presvedčenie, že sa to určite nestalo, čiže **istotu**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A, B – obsahujú len oznamovanie istých skutočností (//každý dobre pozná//, //sa presne zhoduje//), chýba v nich pravdepodobnosť.\nC – slovo //nepochybne// vyjadruje iba istotu a //neviem pochopiť// nevedomosť, nie pravdepodobnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: '//Akýsi Francúz vie o vražde.//\nUvedená veta obsahuje',
    options: [
      { key: 'A', text: 'dva priraďovacie sklady.' },
      { key: 'B', text: 'dva určovacie sklady.' },
      { key: 'C', text: 'jeden priraďovací sklad.' },
      { key: 'D', text: 'jeden určovací sklad.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Vo vete poznáme tri druhy syntaktických skladov: prisudzovací (podmet + prísudok), priraďovací (viacnásobný vetný člen, napr. otec a mama) a určovací (nadradený člen + rozvíjajúci člen, na ktorý sa pýtame). Rozober si vetu po dvojiciach slov.',
    solutionSteps: [
      {
        title: 'Rozbor vetných členov',
        text: 'Najprv určíme základné a rozvíjajúce vetné členy:\n• **Francúz** – podmet (kto? čo?)\n• **vie** – slovesný prísudok (čo robí?)\n• **akýsi** – zhodný prívlastok, rozvíja podmet (aký Francúz? → akýsi)\n• **o vražde** – predmet v lokáli, rozvíja prísudok (vie o čom? → o vražde; predložka //o// tvorí s podstatným menom jeden vetný člen).'
      },
      {
        title: 'Určenie syntaktických skladov',
        text: 'Medzi vetnými členmi vznikli tri sklady:\n1. **prisudzovací sklad**: //Francúz ↔ vie// (podmet + prísudok),\n2. **prvý určovací sklad**: //akýsi ← Francúz// (prívlastok určuje podmet),\n3. **druhý určovací sklad**: //vie → o vražde// (predmet bližšie určuje prísudok).\nVo vete nie je žiadny viacnásobný vetný člen, takže priraďovací sklad sa v nej nenachádza. Veta teda obsahuje **dva určovacie sklady**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Koľko postáv sa zhovára v ukážke 1?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '2 (dve)',
    acceptedAnswers: ['2', 'dve', 'dva', '2 postavy', 'dve postavy', 'dvaja', '2 osoby', 'dve osoby', 'dvaja ľudia'],
    lenient: true,
    hint: 'Pozor na rozdiel medzi postavami, ktoré sa v ukážke priamo rozprávajú (vedú dialóg v úvodzovkách), a ľuďmi, o ktorých počas rozhovoru iba hovoria.',
    solutionSteps: [
      {
        title: 'Kto v ukážke vedie dialóg',
        text: 'Pozrieme sa na uvádzacie vety pri priamej reči: v 1. odseku čítame //„odvetil Dupin“//, v 3. odseku //„povedal som“// (rozprávač) a vo 4. odseku opäť odpovedá Dupin. Priamo sa v ukážke zhovárajú len **2 postavy** – detektív Dupin a rozprávač.'
      },
      {
        title: 'Prečo sa ostatné mená nepočítajú',
        text: 'Prírodovedec Cuvier, cukrár Montani ani neznámy Francúz v tejto scéne nevystupujú a nerozprávajú sa – Dupin s priateľom ich v rozhovore iba spomínajú.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 2 (dve postavy).'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'Pomenujte umelecký prostriedok, ktorý sa nachádza v podčiarknutej časti v ukážke 1.',
    placeholder: 'Napíš názov umeleckého prostriedku',
    correctAnswerDisplay: 'metonymia',
    acceptedAnswers: ['metonymia', 'metonimia'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^metafora$',
        hint: 'Metafora prenáša význam na základe vonkajšej podobnosti. Tu je však meno autora (Cuvier) použité namiesto jeho knihy – ide o prenesenie významu na základe vecnej súvislosti.'
      }
    ],
    hint: 'Pozri sa na podčiarknutú časť „pasáž z Cuviera“: číta rozprávač naozaj človeka Cuviera, alebo knihu, ktorú Cuvier napísal? Spomeň si, ako sa volá tróp založený na vnútornej vecnej súvislosti (autor namiesto diela).',
    solutionSteps: [
      {
        title: 'Vysvetlenie obrazného spojenia',
        text: 'Spojenie //„pasáž z Cuviera“// v skutočnosti znamená //pasáž z knihy (spisu), ktorú napísal prírodovedec Cuvier//. Rovnako bežne hovoríme //čítať Hviezdoslava// alebo //počúvať Mozarta//.'
      },
      {
        title: 'Pomenovanie trópu',
        text: 'Prenesenie významu z jedného predmetu na druhý na základe **vnútornej (vecnej, logickej) súvislosti** – napríklad pomenovanie diela menom jeho autora – sa v literatúre nazýva **metonymia** (na rozdiel od metafory, ktorá stojí na vonkajšej podobnosti).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: metonymia.'
  },
  {
    id: 8,
    code: '08',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Koľko odsekov obsahuje ukážka 1?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '4 (štyri)',
    acceptedAnswers: ['4', 'štyri', 'štyry', 'štiry', '4 odseky', 'štyri odseky'],
    lenient: true,
    hint: 'Odsek je ucelená časť textu, ktorej prvý riadok sa začína zarážkou (odsadením zľava). Nadpis s menom autora a poznámku v zátvorke pod ním do počtu odsekov nerátaj – spočítaj aj krátku jednovetovú repliku na začiatku.',
    solutionSteps: [
      {
        title: 'Ako spoznáme odsek',
        text: 'Každý odsek v prozaickom texte sa začína na novom riadku odsadením zľava (aj vtedy, keď ho tvorí iba jedna veta v priamej reči). Titulok ukážky a poznámka //(úryvok, upravené)// sú nadpisové prvky, nie odseky vlastného textu.'
      },
      {
        title: 'Spočítanie odsekov v ukážke 1',
        text: '1. odsek: //„Prečítajte teraz,“ odvetil Dupin, „túto pasáž z Cuviera.“//\n2. odsek: //Bol to podrobný anatomický i všeobecný opis…//\n3. odsek: //„Opis prstov,“ povedal som, keď som dočítal…//\n4. odsek: //„Pravdaže, a iste sa pamätáte…“//\nSpolu má teda ukážka **4 odseky**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 4 (štyri odseky).'
  },

  // ---------------- Ukážka 2 – R. Dilong: Helena nosí ľaliu (H. R.)
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'V ukážke 2 možno nájsť aj',
    options: [
      { key: 'A', text: 'motív žitia v spojení s tradíciou.' },
      { key: 'B', text: 'tému žitia v spojení s prírodou.' },
      { key: 'C', text: 'motív žitia v súlade s prítomnosťou.' },
      { key: 'D', text: 'tému žitia v súlade s nádejou.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si, aký opakujúci sa okruh obrazov sprevádza postavy (dieťa, chlapca, Helenu) naprieč básňou a akú snovú náladu navodzuje slovo „keby“.',
    solutionSteps: [
      {
        title: 'Hlavná téma básne',
        text: 'Ľudské postavy (//dieťa, chlapca, Helenu//) básnik v 3. – 5. strofe prepája s obrazmi prírody prestupujúcimi všetky strofy: //ľalie//, //kvetná poľná rovina//, //ker spanilý//, //vtáčik malučký//, //oblaky//, //chlapec vtelený do potokov a zelení//. Celou ukážkou sa tak nesie **téma žitia v spojení s prírodou**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – báseň neopisuje ľudové zvyky ani spoločenské tradície.\nC – prevláda v nej snová, želacia poloha (//keby bol…//), nie ukotvenie v reálnej prítomnosti.\nD – v básni nejde o očakávanie budúcnosti či nádej v ťažkej situácii, ale o snovú harmóniu človeka, prírody a duchovnej čistoty.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Ľalia v ukážke 2 je',
    options: [
      { key: 'A', text: 'symbol.' },
      { key: 'B', text: 'prirovnanie.' },
      { key: 'C', text: 'zosobnenie.' },
      { key: 'D', text: 'kontrast.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Spomeň si, čo v kresťanskej kultúre a v poézii tradične zastupuje biely kvet ľalie (podobne ako srdce zastupuje lásku alebo holubica mier).',
    solutionSteps: [
      {
        title: 'Význam ľalie v poézii',
        text: '**Symbol** je konkrétny predmet alebo znak, ktorý na základe ustálenej predstavy zastupuje abstraktný pojem. Biela **ľalia** je v európskej a kresťanskej tradícii ustáleným **symbolom** nevinnosti, čistoty a duchovnej krásy – preto ju v básni rozsypali anjeli a spája sa s modlitbou Zdravas.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – prirovnanie porovnáva dve veci pomocou spojky //ako, sťa, jak, ani// (v básni je prirovnaním napr. //tak biele ako spodníky// alebo //s krásou jak Zdravas//, nie samotná ľalia).\nC – zosobnenie (personifikácia) prenáša ľudské vlastnosti na neživé predmety, prírodné javy, rastliny či zvieratá (ľalia v básni nekoná ako človek).\nD – kontrast je postavenie dvoch protikladných javov proti sebe.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o tretej strofe ukážky 2 je pravdivé?',
    options: [
      { key: 'A', text: 'Na rozdiel od ostatných strof sa v nej objavujú anafora a asociácia.' },
      { key: 'B', text: 'Autor v nej opakovane využil prvky z duchovnej i z čistej lyriky.' },
      { key: 'C', text: 'Na rozdiel od ostatných strof sa v nej uplatnil časomerný veršový systém.' },
      { key: 'D', text: 'Autor v nej z rytmických dôvodov použil netypické tvary slov.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Porovnaj tretiu strofu s ostatnými: over, či sa v nej oproti zvyšku básne naozaj mení veršový systém, tematika alebo použité figúry, a skontroluj počet slabík aj konkrétnu podobu slov v jej veršoch.',
    solutionSteps: [
      {
        title: 'Rytmus a tvary slov v 3. strofe',
        text: 'Všetky štyri verše 3. strofy sú osemslabičné:\n//Ke-by bol vtá-čik ma-luč-ký// (8)\n//die-ťa-ťu sa-dol na rúč-ky,// (8)\n//ke-by to die-ťa ve-de-lo,// (8)\n//čo **ku** ob-la-kom le-te-lo.// (8)\nV bežnej spisovnej slovenčine je pred slovom //oblakom// neslabičná predložka //k// (//k oblakom//), lenže verš by mal potom iba 7 slabík. Básnik preto z rytmických dôvodov použil vokalizovaný tvar **ku oblakom** (a v 1. verši aj menej zvyčajný tvar zdrobneniny **malučký**, aby sa rýmoval so slovom //rúčky//).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – anafora (opakovanie //Keby… / keby…// na začiatku veršov) aj voľné asociácie sa nachádzajú aj vo 4. strofe, teda nie „na rozdiel od ostatných strof“.\nB – v 3. strofe nie sú nijaké náboženské (duchovné) prvky; tie sú v 1. a 5. strofe (//anjel//, //Zdravas//).\nC – celá báseň vrátane 3. strofy má rovnaký sylabický veršový systém s osemslabičným veršovým rozmerom, nie časomerný systém.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré slovo slúži v ukážke 2 na vyjadrenie túžob a hypotetických situácií?',
    options: [
      { key: 'A', text: '//keď//' },
      { key: 'B', text: '//anjel//' },
      { key: 'C', text: '//keby//' },
      { key: 'D', text: '//snivé//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Hypotetická situácia pomenúva predstavu „čo by sa stalo v prípade, že…“ a spája sa s podmieňovacím spôsobom. Ktoré slovo v básni opakovane uvádza takéto želania?',
    solutionSteps: [
      {
        title: 'Funkcia slova v texte',
        text: 'Želacia častica (v súvetí podmienková spojka) **keby** sa v básni opakuje šesťkrát (//keby bol závoj hmlovinou//, //Keby bol spal ker spanilý//, //Keby bol vtáčik malučký…//) a v spojení s minulým l-ovým tvarom slovesa (//bol, spal, sadol, vedelo, podobali sa//) vytvára podmieňovací spôsob. Vyjadruje neskutočnú podmienku, snovú predstavu (**hypotetickú situáciu**) a zároveň tiché želanie (**túžbu**).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – spojka //keď// v poslednej strofe (//keď raz… leteli//) vyjadruje časovú okolnosť, nie podmienku či želanie.\nB, D – podstatné meno //anjel// a prídavné meno //snivé// pomenúvajú bytosť a vlastnosť, netvoria gramatickú stavbu želacej či podmienkovej vety.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 13,
    code: '13',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'V básnickej tvorbe Rudolfa Dilonga nájdeme aj prvky',
    options: [
      { key: 'A', text: 'nadrealizmu/surrealizmu.' },
      { key: 'B', text: 'existencializmu.' },
      { key: 'C', text: 'sociálno-kritického realizmu.' },
      { key: 'D', text: 'socialistického realizmu.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Rudolf Dilong bol síce kľúčovým básnikom katolíckej moderny, no inšpiroval sa aj medzivojnovou avantgardou. Všimni si snové, nelogicky splývajúce obrazy v básni (chlapec vtelený do potokov a zelení) – pre ktorý avantgardný smer je typický sen a voľné asociácie?',
    solutionSteps: [
      {
        title: 'Literárne zaradenie R. Dilonga',
        text: 'Rudolf Dilong (1905 – 1986) patril k hlavným predstaviteľom **slovenskej katolíckej moderny**. Vo svojej poézii však tvorivo nadväzoval aj na medzivojnové avantgardné smery – poetizmus a predovšetkým **nadrealizmus (surrealizmus)**. Dokladom sú snové predstavy, uvoľnená obraznosť a prekvapivé asociácie (napr. //chlapec vtelený do potokov a zelení//, //chodníky tak biele ako spodníky//).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – existencializmus rieši úzkosť, odcudzenie a absurditu ľudskej existencie (napr. J.-P. Sartre, A. Camus).\nC – sociálno-kritický realizmus zobrazuje biedu a spoločenské krivdy najmä v próze a dráme 19. a začiatku 20. storočia.\nD – socialistický realizmus bol u nás po roku 1948 štátom presadzovaná ideologická metóda; Dilong ako františkánsky rehoľník žil už od roku 1945 v emigrácii.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_2',
    questionText: 'V poradí v ktorej strofe (1. až 5.) v ukážke 2 sa vyskytujú zdrobneniny?',
    placeholder: 'Napíš poradie strofy',
    correctAnswerDisplay: 'v 3. strofe (3 / tretia)',
    acceptedAnswers: [
      '3',
      '3.',
      'v 3.',
      'v 3',
      'tretia',
      'tretej',
      'v tretej',
      'v tretej strofe',
      'tretej strofe',
      'v 3. strofe',
      'v 3 strofe',
      '3. strofa',
      '3. strofe',
      'tretia strofa',
      'III',
      'III.',
      'v III.',
      'v III',
      'III. strofa',
      'III. strofe',
      'v III. strofe'
    ],
    lenient: true,
    hint: 'Zdrobnenina (deminutívum) je slovo odvodené príponou, ktoré pomenúva niečo malé a zvyčajne vyjadruje nežný, láskavý vzťah (napr. dom → domček, strom → stromček). Prejdi strofu po strofe a hľadaj takéto zdrobnené slová.',
    solutionSteps: [
      {
        title: 'Čo sú zdrobneniny',
        text: 'Zdrobneniny (deminutíva) sú slová zvyčajne s kladným citovým zafarbením, ktoré označujú malý rozmer alebo nežný vzťah k pomenovanej veci (tvoria sa príponami ako //-ik/-ík, -ček, -ka/-čka, -učký//).'
      },
      {
        title: 'Nájdenie v básni',
        text: 'Pozrime sa na **tretiu strofu**:\n//Keby bol **vtáčik** **malučký** / dieťaťu sadol na **rúčky**…//\nNachádzajú sa tu hneď tri zdrobnené výrazy: podstatné mená **vtáčik** (od //vták//) a **rúčky** (od //ruky//) aj zdrobnené prídavné meno **malučký** (od //malý//). V ostatných strofách zdrobneniny nie sú.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: v 3. strofe (tretia / 3.).'
  },
  {
    id: 15,
    code: '15',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Pomenujte umelecký prostriedok, ktorý predstavuje zvýraznené slovo v slovnom spojení //po **sladkej** nedeli//.',
    placeholder: 'Napíš názov umeleckého prostriedku',
    correctAnswerDisplay: 'epiteton (básnický prívlastok)',
    acceptedAnswers: ['epiteton', 'epiteton ornans', 'epiteton constans', 'básnický prívlastok'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^metafora$',
        hint: 'Metafora je prenesenie významu na základe podobnosti; tu ide o obrazné, citovo zafarbené prídavné meno rozvíjajúce podstatné meno – spomeň si na literárnovedný termín pre takýto prívlastok.'
      }
    ],
    hint: 'Slovo „sladkej“ je prídavné meno, ktoré rozvíja podstatné meno „nedeli“. Nedeľa však nemá skutočnú sladkú chuť – prídavné meno jej dodáva obrazný, citovo zafarbený význam. Ako sa v literárnej teórii nazýva takýto obrazný umelecký prívlastok?',
    solutionSteps: [
      {
        title: 'Rozbor slovného spojenia',
        text: 'V spojení //po **sladkej** nedeli// stojí pred podstatným menom //nedeľa// prídavné meno **sladká** (vo funkcii zhodného prívlastku). Neurčuje bežnú vecnú vlastnosť (ako napr. //minulá nedeľa//), ale obrazne vyjadruje príjemný, blažený, citovo zafarbený dojem.'
      },
      {
        title: 'Literárnovedné pomenovanie',
        text: 'Obrazný, umelecký prívlastok s citovým významom sa nazýva **epiteton** (alebo slovensky **básnický prívlastok**; kľúč uznáva aj odborné (grécko-latinské) pomenovania //epiteton ornans// a //epiteton constans//, neuznáva však odpoveď //metafora//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: epiteton (básnický prívlastok).'
  },
  {
    id: 16,
    code: '16',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Doplňte do nasledujúcej vety chýbajúcu časť literárnovedného termínu.',
    fillSentenceHtml: 'V ukážke 2 autor využil {{blank}} rým.',
    placeholder: 'Doplň druh rýmu',
    correctAnswerDisplay: 'združený',
    acceptedAnswers: [
      'združený',
      'združený rým',
      'združený AABB',
      'združený (AABB)',
      'združený - AABB',
      'združený rým AABB',
      'združený rým (AABB)',
      'združený rým - AABB',
      'AABB združený',
      'AABB (združený)',
      'AABB - združený',
      'AABB - združený rým',
      'V ukážke 2 autor využil združený rým'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^a\\s*a\\s*b\\s*b(\\s+r[yý]m)?$',
        hint: 'Samotná schéma rýmu nestačí – napíš slovné pomenovanie druhu rýmu.'
      }
    ],
    hint: 'Pozri sa na posledné slová veršov v jednotlivých strofách (napr. spanilý – chránili, chodníky – spodníky; malučký – rúčky, vedelo – letelo). Ktoré dvojice veršov sa rýmujú a ako sa tento rým volá?',
    solutionSteps: [
      {
        title: 'Určenie rýmovej schémy',
        text: 'Porovnajme si zakončenia veršov v strofách:\n• 1. strofa: //ľalie// (**a**) – //malý je// (**a**) – //hmlovinou// (**b**) – //rovinou// (**b**),\n• 2. strofa: //spanilý// (**a**) – //chránili// (**a**) – //chodníky// (**b**) – //spodníky// (**b**),\n• 3. strofa: //malučký// (**a**) – //rúčky// (**a**) – //vedelo// (**b**) – //letelo// (**b**),\n• 4. strofa: //vtelený// (**a**) – //zelení// (**a**) – //zelene// (**b**) – //Helene// (**b**),\n• 5. strofa: //ľaliu// (**a**) – //rozsypali ju// (**a**) – //nedeli// (**b**) – //leteli// (**b**).\nRýmujú sa vždy dva susedné verše za sebou podľa schémy **AABB**.'
      },
      {
        title: 'Pomenovanie druhu rýmu',
        text: 'Rým so schémou AABB (prvý verš s druhým, tretí so štvrtým) sa volá **združený rým**. (Pre porovnanie: striedavý = ABAB, obkročný = ABBA, prerývaný = ABCB. Kľúč neuznáva samotnú schému //AABB// bez slovného pomenovania.)'
      }
    ],
    solutionConclusion: 'Správna odpoveď: združený (rým).'
  },

  // ---------------- Ukážka 3 – Najlepšie bryndzové halušky?
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 3?',
    options: [
      { key: 'A', text: 'Uvarené zemiaky je potrebné spracovať na cesto.' },
      { key: 'B', text: 'Kvalitnú bryndzu možno posúdiť podľa jej farby.' },
      { key: 'C', text: 'Na prípravu halušiek je potrebná preosiata ražná múka.' },
      { key: 'D', text: 'Na prípravu bryndzových halušiek jestvuje viac receptov.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Porovnaj jednotlivé možnosti s presným znením surovín, postupu „Ako na to“ a s úvodnými odsekmi, v ktorých sa spomína rodinný recept či pridávanie smotany.',
    solutionSteps: [
      {
        title: 'Čo skutočne vyplýva z textu',
        text: 'V úvode autor kladie otázku //„Vmiešavate do bryndze smotanu, keď robíte halušky?“// a dodáva, že od Slavomíra Reľovského vymámili jeho //„rodinný recept na najlepšie bryndzové halušky“// (//„A tu je jeho top recept!“//). Z toho jasne vyplýva, že ľudia pripravujú bryndzové halušky rôznymi spôsobmi – **jestvuje na ne viac receptov**.'
      },
      {
        title: 'Prečo sú ostatné možnosti nepravdivé',
        text: 'A – v 1. bode postupu sa nastrúhajú a vyžmýkajú **očistené** (surové) zemiaky, nie uvarené.\nB – kvalita bryndze sa v texte posudzuje podľa toho, že sa na teplých haluškách rozpustí, obalí ich a zacítite ju na jazyku – o jej farbe sa nepíše.\nC – v surovinách je uvedená **polohrubá múka**, nie preosiata ražná múka.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Nevyhnutnými zložkami v rodinnom recepte Slavomíra Reľovského sú aj',
    options: [
      { key: 'A', text: 'slanina, bryndza, výpek.' },
      { key: 'B', text: 'soľ, múka, ovčia bryndza.' },
      { key: 'C', text: 'zemiaky, soľ, smotana.' },
      { key: 'D', text: 'zemiakové cesto, bryndza, pažítka.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozri sa na časť „Suroviny“ a na 3. krok postupu („Ak chcete…“). Ktoré prísady sú len voliteľné podľa chuti a bez ktorých sa halušky vôbec nedajú uvariť?',
    solutionSteps: [
      {
        title: 'Povinné verzus voliteľné suroviny',
        text: 'Základnými a nevyhnutnými surovinami v recepte sú **zemiaky, polohrubá múka, 100-percentná ovčia bryndza a soľ** – z nich sa pripraví cesto, osolí voda a ochutia halušky. Možnosť **B** (//soľ, múka, ovčia bryndza//) obsahuje výlučne takéto nevyhnutné zložky.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A, D – //opečená slaninka, výpek a nasekaná pažítka// sú iba voliteľné doplnky pri servírovaní: v surovinách majú poznámku //(podľa chuti)// a 3. bod sa začína slovami //„Ak chcete…“//.\nC – **smotana** do tohto receptu vôbec nepatrí (podľa Slavomíra Reľovského 100-percentná ovčia bryndza smotanu nepotrebuje).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_3',
    questionText: 'V podčiarknutej vete v ukážke 3 sa vyskytuje',
    options: [
      { key: 'A', text: 'metaforické vyjadrenie.' },
      { key: 'B', text: 'protikladné vyjadrenie.' },
      { key: 'C', text: 'nárečový výraz.' },
      { key: 'D', text: 'frazeologický výraz.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prečítaj si podčiarknutú vetu: „lebo stopercentná ovčia nepotrebuje spoločnosť“. Môže potravina doslova potrebovať alebo nepotrebovať spoločnosť ako človek?',
    solutionSteps: [
      {
        title: 'Obrazný význam vety',
        text: 'V podčiarknutej časti //„lebo stopercentná ovčia nepotrebuje spoločnosť“// sa o ovčej bryndzi hovorí ako o živej bytosti (človeku), ktorá si vystačí sama a nepotrebuje spoločníka (smotanu). Prenesenie ľudských vlastností a správania na neživú vec (personifikácia) je druhom **metaforického vyjadrenia**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – vo vete nie sú postavené do protikladu nijaké pojmy.\nC – všetky slová vo vete sú spisovné, nenachádza sa v nej žiadne nárečové slovo.\nD – nejde o ustálené slovné spojenie (frazeologizmus), ale o autorské obrazné (metaforické) vyjadrenie.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 20,
    code: '20',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré tvrdenie o vete //Bryndzu na nich nevidíte!// je pravdivé?',
    options: [
      { key: 'A', text: 'Ide o dvojčlennú vetu úplnú.' },
      { key: 'B', text: 'Ide o jednočlennú vetu slovesnú.' },
      { key: 'C', text: 'Z hľadiska obsahu je rozkazovacia.' },
      { key: 'D', text: 'Z hľadiska obsahu je oznamovacia.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Skontroluj dve veci: 1. stavbu vety – či si k slovesu vieme doplniť podmet a či je vo vete priamo slovne vyjadrený (úplná veta), alebo zamlčaný (neúplná veta); 2. zámer hovoriaceho – pozor, výkričník na konci vety môže označovať iba zvolaciu intonáciu, rozhodujúci je slovesný spôsob slovesa „nevidíte“.',
    solutionSteps: [
      {
        title: 'Veta podľa obsahu (zámeru hovoriaceho)',
        text: 'Sloveso **nevidíte** je v **oznamovacom spôsobe** (rozkazovací spôsob by znel //neviďte!//). Hovoriaci nám nič neprikazuje, iba nám s prekvapením a dôrazom **oznamuje** skutočnosť, že kvalitná bryndza splynie s haluškami. Výkričník na konci vyjadruje len zvolaciu intonáciu (citové zafarbenie). Z hľadiska obsahu je to teda **oznamovacia veta**.'
      },
      {
        title: 'Prečo nie možnosti A, B a C',
        text: 'A – k prísudku //nevidíte// patrí zamlčaný (nevyjadrený) podmet //(vy)//. Dvojčlenná veta, v ktorej podmet nie je priamo slovne vyjadrený, je **dvojčlenná neúplná**, nie úplná (úplná by bola //Vy na nich bryndzu nevidíte!//).\nB – keďže si podmet //vy// vieme zo slovesného tvaru jednoznačne doplniť, nejde o jednočlennú vetu (jednočlenná je v texte napr. veta //Preto ju takmer nevidno//).\nC – výkričník ešte nerobí z vety rozkazovaciu; chýba v nej rozkazovací spôsob aj zámer niekomu niečo prikázať.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 21,
    code: '21',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti sú pravopisne správne napísané slovné spojenia //4 porcie// a //5 až 8 minút//?',
    options: [
      { key: 'A', text: 'štyri porcie, 5 – 8 min.' },
      { key: 'B', text: 'štiry porcie, 5/8 min' },
      { key: 'C', text: 'štyri porcie, 5 - 8 m' },
      { key: 'D', text: 'štyry porcie, 5 / 8 m.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Skontroluj tri veci podľa Pravidiel slovenského pravopisu: 1. i/y v číslovke 4 napísanej slovom, 2. aké znamienko sa píše namiesto slova „až“ medzi číslami (pomlčka s medzerami, spojovník alebo lomka?), 3. ako sa píše bežná skratka slova minúta na rozdiel od značky metra.',
    solutionSteps: [
      {
        title: 'Tri pravopisné pravidlá (podľa PSP)',
        text: '1. **Číslovka štyri**: po tvrdej spoluhláske //t// píšeme v koreni slova **y**, no v koncovke (rovnako ako v číslovke //tri//) je mäkké **i** → **štyri**.\n2. **Číselné rozpätie (5 až 8)**: vo význame //„od – do / až“// sa medzi číslami píše **pomlčka oddelená medzerami** → **5 – 8**.\n3. **Skratka slova minúta**: administratívna a bežná textová skratka slova //minúta// sa píše s bodkou na konci → **min.**'
      },
      {
        title: 'Prečo sú ostatné možnosti chybné',
        text: 'B – chybný pravopis //štiry// a lomka //5/8// namiesto pomlčky (tvar //min// bez bodky je navyše fyzikálna značka jednotky času, kým v bežnom texte píšeme skratku //min.// s bodkou).\nC – kratší spojovník //-// namiesto pomlčky a **m** bez bodky je značka **metra**, nie minúty.\nD – chybný pravopis //štyry//, lomka namiesto pomlčky a nesprávna skratka //m.//'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 22,
    code: '22',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Doplňte do nasledujúcej vety chýbajúcu časť jazykovedného termínu.',
    fillSentenceHtml: 'V časti //Ako na to// sa uplatnil {{blank}} slohový postup.',
    placeholder: 'Doplň slohový postup',
    correctAnswerDisplay: 'opisný',
    acceptedAnswers: ['opisný', 'opisný postup', 'opisný slohový postup', 'V časti Ako na to sa uplatnil opisný slohový postup'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^opis$',
        hint: 'Opis je slohový útvar – zadanie sa pýta na slohový postup (prídavné meno zakončené na -ný).'
      }
    ],
    hint: 'Nezamieňaj si slohový útvar ani jazykový štýl so slohovým postupom (prídavné meno zakončené na -ný/-cí/-ový; v štylistike rozlišujeme štyri základné). Časť „Ako na to“ v kuchárskom recepte zachytáva pracovný postup krok za krokom – ktorý zo štyroch slohových postupov zachytáva znaky predmetu alebo následnosť pracovných činností?',
    solutionSteps: [
      {
        title: 'Recept ako opis pracovného postupu',
        text: 'Časť //Ako na to// postupne a v časovej následnosti vymenúva jednotlivé pracovné úkony pri varení (//nastrúhajte, vyžmýkajte, prisypte, vypracujte cesto, hádžte, sceďte, premiešajte//). Takýto návod sa v štylistike volá **opis pracovného postupu** (dynamický opis).'
      },
      {
        title: 'Slohový postup verzus slohový útvar',
        text: 'Základom opisu pracovného postupu je **opisný slohový postup** (pozor: tvar //opis// neuznávame, pretože //opis// je slohový útvar, kým slohový postup vyjadrujeme prídavným menom **opisný**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: opisný (slohový postup).'
  },
  {
    id: 23,
    code: '23',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíšte z úvodnej časti ukážky 3 nesklonné prídavné meno.',
    placeholder: 'Vypíš slovo z textu',
    correctAnswerDisplay: 'top',
    acceptedAnswers: ['top'],
    hint: 'Nesklonné prídavné meno (často prevzaté z cudzieho jazyka, napr. super, fajn, blond) si vo všetkých pádoch zachováva ten istý tvar bez pádovej prípony. Hľadaj takéto krátke cudzie slovo v prvých dvoch odsekoch ukážky.',
    solutionSteps: [
      {
        title: 'Čo je nesklonné prídavné meno',
        text: 'Väčšina slovenských prídavných mien sa skloňuje (//dobrý recept – bez dobrého receptu – o dobrom recepte//). **Nesklonné prídavné mená** sú spravidla prevzaté z cudzích jazykov a v žiadnom páde, rode ani čísle nepriberajú pádové prípony (napr. //super, fajn, extra, khaki, blond//).'
      },
      {
        title: 'Nájdenie v úvodnej časti ukážky 3',
        text: 'V 1. a 2. odseku čítame: //„A tu je jeho **top** recept!“// a //„jeden z **top** na celom svete“// (v druhom príklade s vypusteným podstatným menom //syrov//). Slovo **top** (vo význame //špičkový, najlepší//) tu určuje vlastnosť podstatného mena a pri skloňovaní sa vôbec nemení (//top recept, z top receptu, o top recepte//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: top.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Doplňte do nasledujúcej vety chýbajúcu časť jazykovedného termínu.',
    fillSentenceHtml: 'Pre vyjadrenia Slavomíra Reľovského v ukážke 3 je príznačný {{blank}} jazykový štýl.',
    placeholder: 'Doplň jazykový štýl',
    correctAnswerDisplay: 'hovorový',
    acceptedAnswers: [
      'hovorový',
      'hovorový jazykový štýl',
      'hovorový štýl',
      'Pre vyjadrenia Slavomíra Reľovského v ukážke 3 je príznačný hovorový jazykový štýl'
    ],
    lenient: true,
    hint: 'Všimni si slová, ktoré Slavomír Reľovský používa v priamej reči: „frflete“, „zacítite až-až“, „jeden z top“, „nepotrebuje spoločnosť“. Sú to knižné a odborné výrazy, alebo uvoľnené slová z bežnej každodennej komunikácie?',
    solutionSteps: [
      {
        title: 'Rozbor jazykových prostriedkov v citátoch',
        text: 'Hoci celý článok vyšiel na kulinárskom publicistickom portáli, samotné priame vyjadrenia Slavomíra Reľovského v úvodzovkách sú uvoľnené, spontánne a citovo zafarbené: používa expresívne a hovorové výrazy ako //frflete//, //zacítite až-až//, //jeden z top// či vtipné obrazné vyjadrenie o bryndzi, ktorá //nepotrebuje spoločnosť//.'
      },
      {
        title: 'Určenie jazykového štýlu',
        text: 'Spontánnosť, živá ústna podoba a hovorová slovná zásoba sú typickými znakmi **hovorového jazykového štýlu**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: hovorový (jazykový štýl).'
  },

  // ---------------- Ukážka 4 – J. Beňová: Ľudovít Štúr a slovenské divadlo
  {
    id: 25,
    code: '25',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Z ukážky 4 vyplýva, že //True Štúr// je',
    options: [
      { key: 'A', text: 'dokumentárny seriál zachytávajúci dobové vyšetrovanie nešťastnej udalosti.' },
      { key: 'B', text: 'hraný film o živote a smrti Ľudovíta Štúra v hlavnej úlohe s Róbertom Rothom.' },
      { key: 'C', text: 'televízny dokument spracovaný atraktívnou formou detektívneho príbehu.' },
      { key: 'D', text: 'historický film venovaný záhadným okolnostiam smrti Ľudovíta Štúra.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Nájdi predposlednú vetu ukážky. Pozorne rozlíš, čo bolo televíznym seriálom z roku 1991, čím je dielo True Štúr a koho v ňom v skutočnosti stvárnil herec Róbert Roth.',
    solutionSteps: [
      {
        title: 'Presné znenie v texte',
        text: 'Predposledná veta uvádza: //„Po známom televíznom seriáli Štúrovci (1991) vznikol v rámci RTVS **dokument** s názvom True Štúr, v ktorom vyšetrovateľ (stvárnil ho Róbert Roth) rieši okolnosti úmrtia Ľudovíta Štúra **v televíznom formáte detektívky**.“// Ide teda o televízny dokument (vznikol v RTVS) spracovaný formou detektívky.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – seriálom boli //Štúrovci// (1991), //True Štúr// nie je dokumentárny seriál o dobovom vyšetrovaní.\nB – nejde o hraný životopisný film o živote a smrti Štúra, ale o televízny dokument o okolnostiach jeho úmrtia, v ktorom Róbert Roth stvárnil **vyšetrovateľa** (nie samotného Štúra).\nD – v texte je dielo výslovne označené ako //dokument//, nie historický hraný film.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Posledná veta ukážky 4 sa viaže',
    options: [
      { key: 'A', text: 'k 180. výročiu narodenia Ľudovíta Štúra.' },
      { key: 'B', text: 'k 200. výročiu narodenia Ľudovíta Štúra.' },
      { key: 'C', text: 'k 180. výročiu úmrtia Ľudovíta Štúra.' },
      { key: 'D', text: 'k 200. výročiu úmrtia Ľudovíta Štúra.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Spoj si prvú a poslednú vetu ukážky: prvá veta prezrádza, či ide o výročie narodenia alebo úmrtia, a posledná uvádza jubilejný rok 2015. V ktorom roku sa Ľudovít Štúr narodil?',
    solutionSteps: [
      {
        title: 'Spojenie informácií z textu a dejín literatúry',
        text: 'Hneď prvá veta ukážky napovedá, že impulzom na spomínanie je **výročie jeho narodenia**, a posledná veta spomína **jubilejný rok 2015**. Ľudovít Štúr sa narodil **28. októbra 1815** v Uhrovci (a zomrel v januári 1856 v Modre).'
      },
      {
        title: 'Výpočet výročia',
        text: 'Od roku narodenia 1815 do jubilejného roku 2015 uplynulo presne **200 rokov** (2015 − 1815 = 200). Posledná veta sa teda viaže **k 200. výročiu narodenia Ľudovíta Štúra**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti sú správne uvedené znaky jazykového štýlu, do ktorého patrí ukážka 4?',
    options: [
      { key: 'A', text: 'dialogickosť, súkromný styk, prevažne písomná forma' },
      { key: 'B', text: 'monologickosť, súkromný styk, prevažne ústna forma' },
      { key: 'C', text: 'monologickosť, verejný styk, prevažne písomná forma' },
      { key: 'D', text: 'dialogickosť, verejný styk, písomná i ústna forma' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Urči najprv, do ktorého jazykového štýlu patrí ukážka z odbornej publikácie, a potom si vybav jeho tri základné mimojazykové znaky: spôsob komunikácie, sféru styku a prevládajúcu formu.',
    solutionSteps: [
      {
        title: 'Určenie štýlu a jeho znakov',
        text: 'Ukážka 4 pochádza z odbornej (vedeckej) publikácie o Ľudovítovi Štúrovi, patrí teda do **náučného štýlu** (s publicistickými prvkami). Pre tento štýl platia tri základné znaky:\n• **monologickosť** – súvislý výklad jednej autorky bez replík partnera,\n• **verejný styk** – text je určený širokej/odbornej verejnosti, nie súkromnej osobe,\n• **prevažne písomná forma** – štúdie, články a knihy vznikajú a šíria sa písomne.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A, D – dialogickosť je typická pre rozhovor (napr. v hovorovom štýle alebo v dramatickom texte), v ukážke 4 žiadny dialóg nie je.\nB – súkromný styk a prevažne ústna forma sú znakmi **hovorového štýlu**, nie náučného textu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 28,
    code: '28',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktoré tvrdenie o štúrovskej slovenčine je __nepravdivé__?',
    options: [
      { key: 'A', text: 'Všetky podstatné mená sa písali s veľkým začiatočným písmenom.' },
      { key: 'B', text: 'Dvojhlásky //ia//, //ie//, //iu//, //ô// sa nepísali ako dnes, ale ako //ja//, //je//, //ju//, //uo//.' },
      { key: 'C', text: 'Mäkkosť hlások sa v nej dôsledne vyznačovala mäkčeňmi.' },
      { key: 'D', text: 'Mäkké //ľ// v nej neexistovalo, používalo sa iba tvrdé //l//.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozor, hľadáš nepravdivé tvrdenie! Spomeň si na hlavnú zásadu Štúrovej kodifikácie (1843) – fonetický pravopis „píš, ako počuješ“, ktorý upravoval zapisovanie samohlások, dvojhlások a mäkkých či tvrdých spoluhlások podľa výslovnosti. Ktoré zo štyroch pravidiel s výslovnosťou hlások vôbec nesúvisí a v štúrovskej slovenčine neplatilo?',
    solutionSteps: [
      {
        title: 'Odhalenie nepravdivého tvrdenia',
        text: 'Písanie všetkých podstatných mien s veľkým začiatočným písmenom sa podľa vzoru **nemčiny** (napr. //das Haus, die Schule//) uplatňovalo v staršej **bernolákovčine** (1787), no v štúrovskej slovenčine (1843) už neplatilo. Tvrdenie **A** je teda **nepravdivé**.'
      },
      {
        title: 'Zopakujme si hlavné pravidlá štúrovskej slovenčiny (B, C, D sú pravdivé)',
        text: 'Štúrova kodifikácia (1843, spis //Nauka reči slovenskej//, 1846) vychádzala zo stredoslovenského nárečia a uplatňovala **fonetický princíp** (//píš, ako počuješ//):\n• písalo sa iba mäkké **i / í**, ypsilon (**y / ý**) sa vôbec nepoužíval,\n• dvojhlásky sa zapisovali ako **ja, je, ju, uo** (napr. //vjac, bjeli, muoj//),\n• mäkké spoluhlásky **ď, ť, ň** sa dôsledne písali s mäkčeňom aj pred //e, i// (napr. //ďeťi, ňebo//),\n• mäkké **ľ** neexistovalo, všade sa písalo len **l** (napr. //lud, král//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 29,
    code: '29',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti je združené pomenovanie?',
    options: [
      { key: 'A', text: 'slovenské divadlo' },
      { key: 'B', text: 'terminológia súčasníkov' },
      { key: 'C', text: 'jedálny lístok' },
      { key: 'D', text: 'životný osud' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Združené pomenovanie je viacslovný ustálený názov, ktorý ako celok pomenúva jednu konkrétnu vec alebo pojem (napr. stredná škola, osobný vlak, krstné meno). Vyskúšaj, v ktorom spojení tvoria dve slová nerozlučný ustálený názov jedného predmetu.',
    solutionSteps: [
      {
        title: 'Čo je združené pomenovanie',
        text: '**Združené pomenovanie** je ustálené viacslovné (najčastejšie dvojslovné) spojenie bez obrazného významu, ktoré pomenúva **jeden celistvý pojem**. Keby sme prídavné meno vynechali alebo nahradili, zmenil by sa samotný pomenovaný predmet.'
      },
      {
        title: 'Porovnanie možností',
        text: '• **jedálny lístok** (C) – ustálený názov konkrétnej tlačoviny s ponukou jedál v reštaurácii (rovnako //nápojový lístok, cestovný lístok//) → **združené pomenovanie**.\n• //slovenské divadlo// (A), //terminológia súčasníkov// (B) a //životný osud// (D) sú len bežné **voľné slovné spojenia**, v ktorých prívlastok voľne spresňuje podstatné meno (divadlo môže byť aj //ochotnícke, moderné//; osud //ťažký, ľudský//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 30,
    code: '30',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte z podčiarknutej časti v ukážke 4 to slovo, ktoré zdôrazňuje po ňom nasledujúcu informáciu.',
    placeholder: 'Vypíš slovo z podčiarknutej časti',
    correctAnswerDisplay: 'dokonca',
    acceptedAnswers: ['dokonca'],
    hint: 'Prečítaj si záver podčiarknutého súvetia, kde autorka stupňuje prekvapivé fakty o Štúrovej popularite až k nečakanému vrcholu. Hľadaj tam neohybné slovo (vytyčovaciu časticu), ktoré zdôrazňuje poslednú uvedenú informáciu.',
    solutionSteps: [
      {
        title: 'Vyhľadanie v podčiarknutej vete',
        text: 'Na konci podčiarknutej časti v ukážke 4 čítame: //„…natočili o ňom viacero filmov i dokumentov a nedávno bol **dokonca** zaregistrovaný ako obchodná značka.“//'
      },
      {
        title: 'Slovnodruhová platnosť',
        text: 'Slovo **dokonca** je **vytyčovacia (zdôrazňovacia) častica** – upozorňuje na prekvapivý vrchol výpočtu a zdôrazňuje informáciu, ktorá bezprostredne nasleduje za ňou (//dokonca zaregistrovaný ako obchodná značka//). Slovo musí byť vypísané pravopisne správne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: dokonca.'
  },
  {
    id: 31,
    code: '31',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'Utvorte zo slova //portrét// sloveso v neurčitku a napíšte ho gramaticky a pravopisne správne.',
    placeholder: 'Napíš sloveso v neurčitku',
    correctAnswerDisplay: 'portrétovať (sportrétovať)',
    acceptedAnswers: ['portrétovať', 'sportrétovať', 'portrétovať sa', 'sportrétovať sa'],
    commonMistakes: [
      {
        pattern: '^zportr[eé]tova[tť]',
        hint: 'Pred neznelou spoluhláskou p sa v dokonavom slovese píše predpona s- (podobne ako spracovať, spísať), nie z-.'
      }
    ],
    hint: 'Neurčitok slovesa sa v slovenčine končí príponou -ť (robiť, maľovať). Od podstatného mena portrét utvor sloveso s významom „zobrazovať niekoho na portréte“ – nezabudni zachovať dĺžeň v základe slova (a ak pridáš predponu, daj pozor na pravopis predpony s-/z- pred neznelou spoluhláskou p).',
    solutionSteps: [
      {
        title: 'Tvorenie slovesa v neurčitku',
        text: 'Od prevzatého podstatného mena **portrét** tvoríme nedokonavé sloveso slovotvornou príponou **-ovať**: **portrétovať** (prípadne zvratnú podobu **portrétovať sa**). Dokonavý náprotivok tvoríme predponou **s-**: **sportrétovať** (**sportrétovať sa**).'
      },
      {
        title: 'Pozor na pravopis',
        text: '1. Dĺžeň na **é** zo základového slova //portrét// ostáva pri odvodzovaní príponou //-ovať// podľa kodifikácie zachovaný (**portrétovať**).\n2. Ak použijeme predponu, pred neznelou spoluhláskou **p** sa podľa Pravidiel slovenského pravopisu píše predpona **s-** (//sportrétovať//, rovnako ako //spracovať, spísať//), nikdy nie //z-//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: portrétovať / sportrétovať (aj so sa).'
  },
  {
    id: 32,
    code: '32',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Napíšte **jednoslovný** názov literárneho smeru, do ktorého zaraďujeme tvorbu štúrovských básnikov.',
    placeholder: 'Napíš literárny smer',
    correctAnswerDisplay: 'romantizmus',
    acceptedAnswers: [
      'romantizmus',
      'slovenský romantizmus',
      'do romantizmu',
      'do slovenského romantizmu',
      'romantizmu',
      'slovenského romantizmu'
    ],
    lenient: true,
    hint: 'Štúrovská generácia (Samo Chalupka, Janko Kráľ, Andrej Sládkovič, Ján Botto) tvorila v polovici 19. storočia – uprednostňovala cit, ideál slobody, ľudovú slovesnosť a hrdinskú minulosť. Ako sa jedným slovom volá tento literárny smer?',
    solutionSteps: [
      {
        title: 'Zaradenie štúrovskej poézie',
        text: 'Generácia okolo Ľudovíta Štúra (S. Chalupka, J. Kráľ, A. Sládkovič, J. Botto) vystúpila v 40. rokoch 19. storočia a tvorila až do 70. rokov 19. storočia (slovenský romantizmus vymedzujeme rokmi 1836 – 1875). V slovenskej literatúre predstavuje vrchol **romantizmu**, pre ktorý sú typické inšpirácia ľudovou piesňou a baladou, sylabický verš, rozpor medzi snom/ideálom a skutočnosťou či národnooslobodzovací zápas.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Hľadaný jednoslovný názov smeru je **romantizmus** (kľúč uznáva aj spojenie //slovenský romantizmus// či odpoveď v predložkovom páde //do romantizmu//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: romantizmus.'
  }
];
