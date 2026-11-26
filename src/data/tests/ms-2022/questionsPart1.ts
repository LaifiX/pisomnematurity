import type { QuestionData } from '../../types';

// Úlohy 01 – 32. Odpovede podľa kľúča NIVaM k testu 20 1403 (Maturita 2022, riadny termín).
// lenient: kľúč hovorí „prihliadať na vecnú správnosť, uznať aj odpoveď s pravopisnými chybami“.

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart1: QuestionData[] = [
  // ---------------- Ukážka 1 – Puškin
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Básnik v básni //Desiate prikázanie//',
    options: [
      { key: 'A', text: 'nepovažuje túžbu po priateľovej družke za porušenie desiateho prikázania.' },
      { key: 'B', text: 'nevedel odolať pokušeniu a pobozkal priateľovu manželku.' },
      { key: 'C', text: 'potlačil svoje osobné city a nenaplnil svoju skrytú túžbu.' },
      { key: 'D', text: 'sa rovnako správa k všetkým ženám bez ohľadu na ich postavenie.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si posledné štyri verše a všimni si, ako lyrický subjekt naloží so svojimi citmi a túžbou.',
    solutionSteps: [
      { title: 'Záver básne', text: '„Hľadím a trpím neprestajne, / no prísny zákon ctiť si viem, / zavraciam srdce: skrotni, driem – / mlčím… a vzdychám, blčím tajne.“ Lyrický subjekt túži, ale city potláča a mlčí.' },
      { title: 'Prečo nie ostatné', text: 'A – práve preto, že túžbu cíti ako hriech, prosí o odpustenie („odpusť mi, že mu závidím“).\nB – priateľovu družku nepobozkal (iba na ňu hľadí a tajne vzdychá); o „krádeži bozku“ uvažuje len podmienečne, a aj to pri „nevoľnej peknoočke“, nie pri priateľovej družke.\nD – báseň, naopak, rozlišuje jeho postoj podľa postavenia ženy: pri „nevoľnej peknoočke“ by si bozk dovolil, kým pri priateľovej „milej družke“ city potláča a mlčí.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti sa nachádza metafora?',
    options: [
      { key: 'A', text: '//nechcem jeho statky//' },
      { key: 'B', text: '//majetok v úcte mať//' },
      { key: 'C', text: '//dvor s dobytkom//' },
      { key: 'D', text: '//hlas svedomia//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Metafora je prenesené pomenovanie na základe podobnosti. Ktoré spojenie nemožno chápať doslova?',
    solutionSteps: [
      { title: 'Prenesený význam', text: 'Svedomie nemá hlas v doslovnom zmysle. Jeho pôsobenie (to, že nás „napomína“) sa prirovnáva k hlasu, ktorý k nám hovorí – ide o metaforu.' },
      { title: 'Ostatné možnosti', text: 'Spojenia A (//nechcem jeho statky//) a C (//dvor s dobytkom//) sú pomenovania vo vlastnom, doslovnom význame; spojenie B (//majetok v úcte mať// = vážiť si majetok) je použité v bežnom, neprenesenom význame (nejde o metaforu).' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti je uvedený správny počet slabík vo **zvýraznenom štvorverší** ukážky 1?',
    options: [
      { key: 'A', text: '9, 9, 8, 8' },
      { key: 'B', text: '9, 8, 8, 9' },
      { key: 'C', text: '8, 9, 9, 8' },
      { key: 'D', text: '9, 8, 9, 8' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Počet slabík = počet samohlások, dvojhlások a slabikotvorných r, ŕ, l, ĺ. Spočítaj každý verš osobitne.',
    solutionSteps: [
      { title: 'Rozdelenie na slabiky', text: 'A ak sa zav-še aj tak sta-ne, = 9\nže mi-lú druž-ku vi-dím s ním, = 8 (predložka //s// je neslabičná)\nod-pusť mi, že mu zá-vi-dím = 8\nan-je-la je-ho, kris-te-pa-ne. = 9' },
      { title: 'Výsledok', text: 'Prvý a štvrtý verš majú zhodne po 9 slabík, druhý a tretí po 8 slabík (postupnosť **9, 8, 8, 9**).' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti sa nachádza epiteton z básne //Desiate prikázanie//?',
    options: [
      { key: 'A', text: '//anjela jeho//' },
      { key: 'B', text: '//zvodná chvíľa//' },
      { key: 'C', text: '//majetok cudzí//' },
      { key: 'D', text: '//prísny zákon//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Epiteton je básnický prívlastok, ktorý má citový, umelecký význam – nielen vecne určuje vlastnosť.',
    solutionSteps: [
      { title: 'Básnický prívlastok', text: 'V spojení „zvodná chvíľa“ (vo verši „Kto nie je rabom zvodnej chvíle?“) prídavné meno zvodná nesie citové, zmyselné zafarbenie – chvíľu oživuje a hodnotí. Je to epiteton.' },
      { title: 'Ostatné spojenia', text: 'A – jeho je privlastňovacie zámeno, nie prívlastok s citovým významom.\nC, D – cudzí a prísny sú vecné, logické prívlastky (určujú, čí je majetok a aký je zákon).' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktorý druh rýmu použil A. S. Puškin v básni //Desiate prikázanie//?',
    options: [
      { key: 'A', text: 'striedavý' },
      { key: 'B', text: 'združený' },
      { key: 'C', text: 'prerývaný' },
      { key: 'D', text: 'obkročný' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Porovnaj konce prvých štyroch veršov: mať – vžitý – city – dodržať.',
    solutionSteps: [
      { title: 'Schéma rýmu', text: 'mať (a) – vžitý (b) – city (b) – dodržať (a). Schéma abba: prvý verš sa rýmuje so štvrtým a druhý s tretím. Rovnako aj vo zvýraznenom štvorverší: stane – s ním – závidím – kristepane.' },
      { title: 'Pomenovanie', text: 'Rým abba sa nazýva obkročný. Striedavý = abab, združený = aabb, prerývaný = abcb.' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'Do ktorého literárneho smeru sa zaraďuje prevažná časť tvorby A. S. Puškina?',
    placeholder: 'Napíš literárny smer',
    correctAnswerDisplay: 'romantizmus',
    acceptedAnswers: [
      'romantizmus',
      'do romantizmu',
      'romantizmu',
      'preromantizmus',
      'do preromantizmu',
      'preromantizmu',
      'romantický',
      'romantický smer',
      'romantismus',
      'do romantismu',
      'romantismu',
      'preromantismus',
      'do preromantismu',
      'preromantismu'
    ],
    lenient: true,
    hint: 'Všimni si rok vzniku básne (1821) – Puškin žil v rokoch 1799 – 1837 a napísal aj román vo veršoch Eugen Onegin. Ktorý literárny smer sa v prvej polovici 19. storočia v Európe rozvíjal?',
    solutionSteps: [
      { title: 'Zaradenie autora', text: 'A. S. Puškin je najvýznamnejší ruský romantický básnik (Eugen Onegin, Cigáni, Kaukazský zajatec). Jeho neskoršia próza (Kapitánova dcéra) už smeruje k realizmu, no prevažná časť tvorby patrí romantizmu.' },
      { title: 'Ako hodnotí kľúč', text: 'Uznáva sa odpoveď romantizmus (aj preromantizmus), aj s pravopisnou chybou.' }
    ],
    solutionConclusion: 'Správna odpoveď: romantizmus.'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíšte z básne //Desiate prikázanie// plnovýznamové zložené slovo.',
    placeholder: 'Vypíš slovo z básne',
    correctAnswerDisplay: 'peknoočku',
    acceptedAnswers: ['peknoočku', 'peknoočka'],
    commonMistakes: [
      {
        pattern: '^kristepane$',
        hint: 'Slovo „kristepane“ je síce zložené, ale je to neplnovýznamové citoslovce – zadanie žiada plnovýznamové zložené slovo.'
      },
      {
        pattern: '^pekno[cč]k',
        hint: 'Pozor na pravopis: na hranici častí „pekn-o-očk-a“ sa stretávajú dve samohlásky o (peknoočka).'
      }
    ],
    hint: 'Zložené slovo vzniklo spojením dvoch slovných základov. Hľadaj podstatné meno, ktoré pomenúva krásnu ženu.',
    solutionSteps: [
      { title: 'Rozbor slova', text: '„No ak má doma peknoočku…“ – slovo //peknoočka// vzniklo spojením základov //pekn-//(ý) a //oč-//(i/ko) pomocou spájacej samohlásky //-o-// (//pekn-o-očk-a//): žena s peknými očami. Je to zložené slovo a zároveň plnovýznamové (podstatné meno).' },
      { title: 'Prečo nie kristepane', text: 'Slovo kristepane v básni je síce tiež zložené slovo, ale ide o citoslovce (neplnovýznamový slovný druh), preto nevyhovuje zadaniu (plnovýznamové zložené slovo).' },
      { title: 'Pozor na pravopis', text: 'Slovo musí byť napísané pravopisne správne – s dvoma o: peknoočka (pekn-o-očk-a).' }
    ],
    solutionConclusion: 'Správna odpoveď: peknoočku (peknoočka).'
  },
  {
    id: 8,
    code: '08',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíšte z básne //Desiate prikázanie// vokalizovanú predložku.',
    placeholder: 'Vypíš predložku',
    correctAnswerDisplay: 'odo',
    acceptedAnswers: ['odo'],
    commonMistakes: [
      {
        pattern: '^odo\\s+m[nň]a$',
        hint: 'Spojenie „odo mňa“ tvorí predložka a zámeno – vypíš iba samotnú vokalizovanú predložku.'
      }
    ],
    hint: 'Vokalizovaná predložka má pridanú samohlásku, aby sa ľahšie vyslovovala (napr. k – ku, z – zo, s – so, v – vo).',
    solutionSteps: [
      { title: 'Nájdenie predložky', text: 'Verš „odo mňa nedočká sa krivdy“ – predložka od dostala pred zámenom mňa samohlásku o: odo mňa.' },
      { title: 'Prečo', text: 'Vokalizácia uľahčuje výslovnosť skupiny spoluhlások (od mňa → odo mňa).' }
    ],
    solutionConclusion: 'Správna odpoveď: odo.'
  },

  // ---------------- Ukážka 2 – Marčok
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Odkedy sa podľa ukážky 2 v kontexte európskej literárnej kritiky používa pojem postmoderna?',
    options: [
      { key: 'A', text: 'od 50. rokov 20. storočia' },
      { key: 'B', text: 'od 70. rokov 19. storočia' },
      { key: 'C', text: 'od 70. rokov 20. storočia' },
      { key: 'D', text: 'od 50. rokov 19. storočia' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Nájdi v prvom odseku vetu o tom, kedy sa označenie „udomácnilo“ v európskej kritike. Nezamieňaj ju s americkou.',
    solutionSteps: [
      { title: 'Miesto v texte', text: '„…v európskej literárnej kritike sa udomácnilo v 70. rokoch.“ Z kontextu (diskusia sa v Amerike začala v roku 1959) ide o 20. storočie.' },
      { title: 'Pasca', text: 'Rok 1959 a „šesťdesiate roky“ sa týkajú americkej kritiky, nie európskej.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Z ukážky 2 vyplýva, že postmoderna',
    options: [
      { key: 'A', text: 'čerpala svoje podnety najmä z tzv. druhých avantgárd.' },
      { key: 'B', text: 'je menej literárne vybrúsená a oceňovaná ako avantgarda.' },
      { key: 'C', text: 'má svoje korene v juhoamerickej literatúre, najmä v próze.' },
      { key: 'D', text: 'sa formovala v literárnej produkcii viacerých autorov súčasne.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Ako podľa autora postmoderna vznikala? Hľadaj slovo „nepozorovane“.',
    solutionSteps: [
      { title: 'Doklad v texte', text: '„Vznikala doslova nepozorovane v dielach neraz veľmi rozdielnych autorov, ktorí o sebe ani nevedeli.“ Formovala sa teda u viacerých autorov súčasne.' },
      { title: 'Prečo nie ostatné', text: 'A – postmoderna prišla až po vyčerpaní podnetov druhých avantgárd.\nB – o „vybrúsenosti“ ani hodnote text nehovorí, len o menšej ideovej a tvarovej vyhranenosti.\nC – juhoamerický magický realizmus je len jeden z jej prúdov, nie jej koreň.' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Postmodernu charakterizuje podľa ukážky 2 aj',
    options: [
      { key: 'A', text: 'revolta voči prísnemu racionalizmu.' },
      { key: 'B', text: 'obdiv ku konzumnému spôsobu života.' },
      { key: 'C', text: 'odpor voči prejavom pluralizmu v literatúre.' },
      { key: 'D', text: 'podpora náboženského fanatizmu.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Druhý odsek vymenúva, proti čomu postmoderna vystupuje. Ktorá možnosť sa s ním zhoduje?',
    solutionSteps: [
      { title: 'Výpočet v texte', text: 'Postmoderna vystupuje „proti ideológii, historickému determinizmu, strohému racionalizmu, technologickému i konzumnému prinucovaniu…“. Revolta voči prísnemu (strohému) racionalizmu zodpovedá textu.' },
      { title: 'Opačné tvrdenia', text: 'B a D tvrdia opak (postmoderna je proti konzumu aj fanatizmu). C – pluralizmus je, naopak, jej znakom („manifestácia pluralizmu života“).' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti sa **nenachádza** skratka?',
    options: [
      { key: 'A', text: '//tzv.//' },
      { key: 'B', text: '//napr.//' },
      { key: 'C', text: '//-izmus//' },
      { key: 'D', text: '//t. j.//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Ustálené (administratívne) skratky sú skráteným zápisom slova alebo slovného spojenia, píšu sa s bodkou a pri čítaní sa vyslovujú v plnom znení. V ktorej možnosti nejde o skratku, ale len o časť slova?',
    solutionSteps: [
      { title: 'Skratky', text: 'tzv. (takzvaný), napr. (napríklad), t. j. (to jest) sú ustálené (administratívne) skratky – píšu sa s bodkou a čítajú sa v plnom znení.' },
      { title: '-izmus', text: '-izmus je prípona (slovotvorný formant), ktorou sa tvoria názvy smerov (romantizmus, realizmus). Spojovník naznačuje, že ide o časť slova, nie o skratku.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 13,
    code: '13',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré z uvedených interpunkčných znamienok **nie je** použité v prvom odseku ukážky 2?',
    options: [
      { key: 'A', text: 'pomlčka' },
      { key: 'B', text: 'spojovník' },
      { key: 'C', text: 'úvodzovky' },
      { key: 'D', text: 'výkričník' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Rozlišuj dlhšiu pomlčku (–), ktorá oddeľuje časti vety (s medzerami z oboch strán), od kratšieho spojovníka (-). Prejdi si prvý odsek po jednotlivých znamienkach.',
    solutionSteps: [
      { title: 'Znamienka v 1. odseku', text: 'Spojovník: „nový -izmus“. Úvodzovky: „postmodernizmus“. Výkričník: „… ‚postmodernizmus‘ mätúce!“ Okrem nich zátvorky, čiarky a bodky.' },
      { title: 'Chýbajúce znamienko', text: 'Pomlčka sa v prvom odseku nenachádza.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorý slohový postup prevláda v ukážke 2?',
    placeholder: 'Napíš slohový postup',
    correctAnswerDisplay: 'výkladový',
    acceptedAnswers: [
      'výkladový',
      'výkladový postup',
      'výkladový slohový postup',
      'úvahový',
      'úvahový postup',
      'úvahový slohový postup',
      'výkladovo-úvahový',
      'výkladovo-úvahový postup',
      'výkladovo-úvahový slohový postup',
      'úvahovo-výkladový',
      'úvahovo-výkladový postup',
      'úvahovo-výkladový slohový postup',
      'výkladový a úvahový',
      'úvahový, výkladový',
      'úvahový a výkladový',
      'výkladový, úvahový',
      'víkladový'
    ],
    lenient: true,
    hint: 'Text nerozpráva príbeh ani neopisuje vec – vysvetľuje pojem, jeho vznik, príčiny a súvislosti.',
    solutionSteps: [
      { title: 'Znaky textu', text: 'Autor vymedzuje pojem postmoderna, vysvetľuje, kedy a ako vznikla, porovnáva ju s avantgardou a uvádza jej znaky. Vysvetľovanie príčin a súvislostí je znakom výkladového slohového postupu.' },
      { title: 'Ako hodnotí kľúč', text: 'Uznáva sa výkladový, úvahový aj ich spojenie.' }
    ],
    solutionConclusion: 'Správna odpoveď: výkladový (úvahový).'
  },
  {
    id: 15,
    code: '15',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorý jazykový štýl sa uplatnil v ukážke 2?',
    placeholder: 'Napíš jazykový štýl',
    correctAnswerDisplay: 'náučný',
    acceptedAnswers: [
      'náučný',
      'odborný',
      'populárno-náučný',
      'náučný štýl',
      'odborný štýl',
      'populárnonáučný',
      'populárno-náučný štýl',
      'populárnonáučný štýl',
      'populárno náučný',
      'vedecký',
      'vedecký štýl'
    ],
    lenient: true,
    hint: 'Ukážka pochádza z knihy o slovenskej literatúre a využíva odborné (najmä literárnovedné) termíny (avantgarda, konkretizmus, neorealizmus, determinizmus).',
    solutionSteps: [
      { title: 'Znaky štýlu', text: 'Odborné termíny, presnosť, vecnosť, skratky (tzv., t. j.), odkazy na kritikov a obdobia – to sú znaky náučného (odborného) štýlu.' },
      { title: 'Ako hodnotí kľúč', text: 'Uznáva sa náučný, odborný aj populárno-náučný.' }
    ],
    solutionConclusion: 'Správna odpoveď: náučný (odborný).'
  },
  {
    id: 16,
    code: '16',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Určte druh vedľajšej vety v nasledujúcom súvetí.\n//Postmoderna je teda taká literatúra, ktorá vystupuje proti akémukoľvek politickému diktátu.//',
    placeholder: 'Napíš druh vedľajšej vety',
    correctAnswerDisplay: 'prívlastková',
    acceptedAnswers: [
      'prívlastková',
      'prívlastková vedľajšia veta',
      'vedľajšia veta prívlastková',
      'vv prívlastková',
      'prívlastková veta',
      'prívlastkovú',
      'prývlastková'
    ],
    lenient: true,
    hint: 'Ktoré slovo v hlavnej vete táto vedľajšia veta rozvíja? Akou otázkou sa na vedľajšiu vetu opýtaš?',
    solutionSteps: [
      { title: 'Otázka', text: 'Hlavná veta: „Postmoderna je teda taká literatúra“. Vedľajšia veta „ktorá vystupuje proti…“ rozvíja podstatné meno literatúra a odpovedá na otázku aká (literatúra)?' },
      { title: 'Určenie', text: 'Vedľajšia veta, ktorá rozvíja podstatné meno (alebo zámeno) a vyjadruje prívlastok, je prívlastková. Typicky ju uvádza vzťažné zámeno ktorý, ktorá, ktoré.' }
    ],
    solutionConclusion: 'Správna odpoveď: prívlastková.'
  },

  // ---------------- Ukážka 3 – Kesey
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Z ukážky 3 vyplýva, že McMurphy',
    options: [
      { key: 'A', text: 'vyhral túto stávku a zhrabol všetky peniaze.' },
      { key: 'B', text: 'vždy vyhral v kartových hrách nad protihráčmi.' },
      { key: 'C', text: 'sa pokúsil o nemožné, ale stávku nevyhral.' },
      { key: 'D', text: 'nepohol pultom, ba ešte si spôsobil prietrž.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozri sa na úplne poslednú vetu ukážky. Čo z nej vyplýva o výsledku stávky?',
    solutionSteps: [
      { title: 'Posledná veta', text: '„Ale aspoň som to skúsil,“ pripomenie. Slová „ale aspoň“ ukazujú, že sa mu to nepodarilo – pult nezdvihol a stávku prehral. Pokus bol podľa ostatných nemožný („to hebedo nikto nezodvihne“).' },
      { title: 'Prečo nie ostatné', text: 'A – stávku nevyhral. B – chlapcov pobil „toľko ráz“, nie vždy. D – prietrž iba predpovedá Harding, text nehovorí, že nastala.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktorá z postáv v ukážke 3 neveriacky ironizuje?',
    options: [
      { key: 'A', text: '//McMurphy//' },
      { key: 'B', text: '//Fredrickson//' },
      { key: 'C', text: '//Cheswick//' },
      { key: 'D', text: '//Harding//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Irónia znamená povedať opak toho, čo si myslíme. Kto „súhlasí“ tak, že v skutočnosti McMurphyho zosmiešňuje?',
    solutionSteps: [
      { title: 'Ironická replika', text: '„Samozrejme, možno ho tak uhovorí, že sa sám zodvihne,“ odvrkne Fredrickson. Navonok súhlasí („samozrejme“), v skutočnosti dáva najavo, že tomu neverí – pult sa predsa nemôže zdvihnúť sám.' },
      { title: 'Ostatní', text: 'Cheswick pripúšťa, že to možno dokáže („možno to aj dokáže“), Harding ho odhovára („nebláznite“), McMurphy sa vychvaľuje.' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 3?',
    options: [
      { key: 'A', text: 'Všetci prítomní McMurphymu veria, a preto ho podporujú v jeho stávke.' },
      { key: 'B', text: 'Väčšina prítomných McMurphyho zosmiešňuje pre jeho zjavnú nafúkanosť.' },
      { key: 'C', text: 'Niektorí prítomní McMurphyho odhovárajú od zjavne zbytočného pokusu.' },
      { key: 'D', text: 'Nikto z prítomných sa neobáva, že si McMurphy môže fyzicky ublížiť.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si Hardingovu repliku. Čo McMurphymu radí a prečo?',
    solutionSteps: [
      { title: 'Odhováranie', text: 'Harding: „Ale pravdepodobnejšie je, že si nadobudne utešenú prietrž… Počujte, McMurphy, nebláznite; to hebedo nikto nezodvihne.“ Odhovára ho od pokusu, ktorý považuje za zbytočný.' },
      { title: 'Prečo nie ostatné', text: 'A – chlapci podpisujú úpisy, lebo sú si istí, že prehrá. B – zosmiešňuje ho najmä Fredrickson, nie väčšina. D – Harding sa obáva prietrže, teda zranenia.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 20,
    code: '20',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti sa nachádza združené pomenovanie?',
    options: [
      { key: 'A', text: '//mozoľnaté dlane//' },
      { key: 'B', text: '//dlžobné úpisy//' },
      { key: 'C', text: '//správny nástroj//' },
      { key: 'D', text: '//dospelí muži//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Združené pomenovanie je viacslovný ustálený názov jedného pojmu – slová spolu tvoria jedno pomenovanie (napr. hlavné mesto).',
    solutionSteps: [
      { title: 'Ustálený názov', text: 'Dlžobný úpis je ustálený názov listiny, ktorou sa niekto zaväzuje splatiť dlh. Dve slová spolu pomenúvajú jeden pojem – je to združené pomenovanie.' },
      { title: 'Voľné spojenia', text: 'Mozoľnaté dlane, správny nástroj, dospelí muži sú voľné slovné spojenia – prídavné meno len opisuje vlastnosť a dá sa nahradiť iným (veľké dlane, starší muži).' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 21,
    code: '21',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Koľko viet obsahuje súvetie vo **zvýraznenej časti** ukážky 3?',
    options: [
      { key: 'A', text: '6' },
      { key: 'B', text: '5' },
      { key: 'C', text: '4' },
      { key: 'D', text: '7' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Počet viet v súvetí zistíš podľa počtu prísudkov (určitých slovesných tvarov).',
    solutionSteps: [
      { title: 'Prísudky', text: '„Ale keď všetci prítomní podpíšu dlžobné úpisy, podíde k pultu, zosadí z neho Billyho Bibbita, napľuje si do mohutných mozoľnatých dlaní, tleskne do nich a napne svaly na pleciach.“\nPrísudky: podpíšu – podíde – zosadí – napľuje – tleskne – napne.' },
      { title: 'Výsledok', text: 'Šesť prísudkov = šesť viet (jedna vedľajšia časová „keď… podpíšu“ a päť hlavných viet v priraďovacom vzťahu).' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 22,
    code: '22',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktorý druh melódie na konci vety sa uplatňuje v nasledujúcej vete?\n//Teraz bude pukať betón a lietať oceľ.//',
    placeholder: 'Napíš druh melódie',
    correctAnswerDisplay: 'klesavá (konkluzívna) kadencia',
    acceptedAnswers: [
      'klesavá',
      'klesavý',
      'klesavá kadencia',
      'klesavá melódia',
      'uspokojivá končiaca',
      'uspokojivo končiaca',
      'uspokojivý končiaci',
      'uspokojivo končiaci',
      'uspokojivá končiaca melódia',
      'uspokojivo končiaca melódia',
      'uspokojivá končiaca kadencia',
      'uspokojivo končiaca kadencia',
      'uspokojivá kadencia',
      'konkluzívna kadencia',
      'konkluzívna melódia',
      'konkluzívna',
      'konkluzívny',
      'kadencia',
      'klesavá konkluzívna kadencia'
    ],
    lenient: true,
    hint: 'Urči modálnosť vety (zámer hovoriaceho) podľa znamienka na konci, prečítaj si ju nahlas a pomenuj smer pohybu hlasu v jej závere (prípadne použi odborný názov kadencie).',
    solutionSteps: [
      { title: 'Typ vety', text: 'Veta je oznamovacia a ukončená – nič už nenasleduje.' },
      { title: 'Vetná melódia', text: 'Na konci oznamovacej vety hlas klesá. Takáto melódia sa volá klesavá, uspokojivo končiaca – konkluzívna kadencia. (Stúpavá melódia – antikadencia – je typická pre zisťovacie otázky.)' }
    ],
    solutionConclusion: 'Správna odpoveď: klesavá (konkluzívna) kadencia.'
  },
  {
    id: 23,
    code: '23',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíšte z ukážky 3 slovo, na ktoré v nej odkazuje **zvýraznené** slovné spojenie //to hebedo//.',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'pult',
    acceptedAnswers: ['pult', 'pultom', 'pultu'],
    hint: 'Čo sa v ukážke nedá zdvihnúť? Harding tú vec len inak, expresívne pomenúva.',
    solutionSteps: [
      { title: 'Odkazovanie v texte', text: 'McMurphy sa chystá zdvihnúť ťažký pult („aby ktosi pohol tým pultom“, „podíde k pultu“). Harding potom hovorí: „to hebedo nikto nezodvihne“ – expresívne slovo hebedo odkazuje na pult.' },
      { title: 'Zápis odpovede', text: 'Kľúč uznáva tvar pult, pultom aj pultu, napísaný pravopisne správne.' }
    ],
    solutionConclusion: 'Správna odpoveď: pult.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíšte z ukážky 3 ustálené slovné spojenie/vetu, ktoré/á vyjadruje odvahu riskovať úspech či neúspech.',
    placeholder: 'Vypíš slovné spojenie',
    correctAnswerDisplay: 'Hop alebo trop',
    acceptedAnswers: [
      'Hop alebo trop',
      'Hop alebo trop…',
      'Hop alebo trop...',
      'Hop alebo trop.',
      '„Hop alebo trop.“',
      '„Hop alebo trop…“',
      '„Hop alebo trop“',
      'hop alebo trop'
    ],
    hint: 'Hľadaj krátky rýmujúci sa frazeologizmus v úvodných replikách ukážky.',
    solutionSteps: [
      { title: 'Frazeologizmus', text: '„Kto chce prehrať päť dolárov? Hop alebo trop…“ – Hop alebo trop znamená: buď sa to podarí, alebo nie; riskujem.' },
      { title: 'Zápis', text: 'Spojenie musí byť vypísané pravopisne správne.' }
    ],
    solutionConclusion: 'Správna odpoveď: Hop alebo trop.'
  },

  // ---------------- Ukážka 4 – Taragel
  {
    id: 25,
    code: '25',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti je správne uvedený literárny žáner a nosná téma diela //Rozum// spomínaného v ukážke 4?',
    options: [
      { key: 'A', text: 'denník Slobodu o jeho problémoch v osobnom živote' },
      { key: 'B', text: 'filmový scenár analyzujúci Slobodove rodinné problémy' },
      { key: 'C', text: 'román detailne zobrazujúci rodinný život muža v strednom veku' },
      { key: 'D', text: 'kniha poviedok zachytávajúca úvahy manžela o chorobe manželky' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Ako dielo nazýva posledný odsek ukážky a o kom je rozprávanie?',
    solutionSteps: [
      { title: 'Žáner a téma', text: '„Celý román však stojí na rozprávaní bezmenného štyridsiatnika, ktorý… rieši rodinné problémy s manželkou…, dospievajúcou dcérou…“ – žáner je román, téma rodinný život muža v strednom veku.' },
      { title: 'Pasce', text: 'A – Sloboda si denník prestal písať. B – námet na filmový scenár sa v románe iba snaží vytvoriť hlavný hrdina, samotné dielo //Rozum// nie je filmový scenár. D – nejde o poviedky.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Z ukážky 4 vyplýva, že novátorským sa v slovenskej literatúre stalo dielo, ktoré',
    options: [
      { key: 'A', text: 'vyzdvihuje rozum ako základnú životnú istotu.' },
      { key: 'B', text: 'vykreslilo reálny život Jána Hodžu alias autora.' },
      { key: 'C', text: 'rieši problém Slobodovho násilného správania.' },
      { key: 'D', text: 'zaujalo svojou priamosťou a nefalšovanosťou.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečo bol Rozum pre časť čitateľov „závanom sviežeho vzduchu“? Pozri sa na prvú vetu predposledného odseku.',
    solutionSteps: [
      { title: 'Doklad', text: '„Jeho rozprávanie je také úprimné a autentické…“ – úprimnosť a autentickosť = priamosť a nefalšovanosť. V dobe „pozitívnych“ normalizačných románov to bolo nové.' },
      { title: 'Prečo nie ostatné', text: 'A – „rozum“ je v úvodzovkách ironicky, hrdina preň (práve svojím „rozumom“) veci ešte viac skomplikuje. B – príbeh Jána Hodžu je vymyslený. C – otázka o násilí je len jednou z neveriackych reakcií čitateľov, nie nosnou témou diela.' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Normalizačnú literatúru na základe ukážky 4 predstavujú',
    options: [
      { key: 'A', text: 'diela zachytávajúce negatíva i pozitíva socializmu.' },
      { key: 'B', text: 'optimisticky ladené spoločenské antiromány.' },
      { key: 'C', text: 'diela s množstvom dobovo kladne chápaných postáv.' },
      { key: 'D', text: 'knihy vykresľujúce problémy pri budovaní socializmu.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Čo podľa druhého odseku vychádzalo počas normalizácie? Všimni si úvodzovky pri slove pozitívnych.',
    solutionSteps: [
      { title: 'Doklad', text: '„…vychádzali len romány plné ‚pozitívnych‘ hrdinov a budovateľov socializmu či pseudohistorické zlátaniny.“ Pozitívni hrdinovia a budovatelia = postavy, ktoré dobová ideológia chápala ako kladné.' },
      { title: 'Prečo nie ostatné', text: 'A, D – negatíva a problémy socializmu tieto diela nezobrazovali. B – antiromán je opakom tradičného románu, s normalizáciou nesúvisí.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 28,
    code: '28',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti sa nachádzajú iba prozaici?',
    options: [
      { key: 'A', text: 'D. Dušek, A. Bednár, L. Mňačko' },
      { key: 'B', text: 'I. Bukovčan, J. D. Salinger, J. Urban' },
      { key: 'C', text: 'J. C. Hronský, E. M. Remarque, I. Krasko' },
      { key: 'D', text: 'M. Rúfus, M. Válek, P. Jilemnický' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'V každej nesprávnej možnosti je aspoň jeden básnik alebo dramatik. Nájdi ho.',
    solutionSteps: [
      { title: 'Prozaici', text: 'Dušan Dušek (//Kufor na sny//), Alfonz Bednár (zbierka noviel //Hodiny a minúty// s novelou //Kolíska//, román //Sklený vrch//), Ladislav Mňačko (//Smrť sa volá Engelchen//) – všetci sú prozaici.' },
      { title: 'Vylúčenie', text: 'B – Ivan Bukovčan je dramatik, Jozef Urban básnik. C – Ivan Krasko je básnik. D – Milan Rúfus a Miroslav Válek sú básnici.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 29,
    code: '29',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktorá z uvedených možností najlepšie vystihuje **zvýraznené** slovo v slovnom spojení //**pseudohistorické** zlátaniny// z ukážky 4?',
    options: [
      { key: 'A', text: 'zdanlivo historické' },
      { key: 'B', text: 'antihistorické' },
      { key: 'C', text: 'skryto historické' },
      { key: 'D', text: 'predhistorické' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Aký význam má predpona pseudo- (pseudonym, pseudoveda)?',
    solutionSteps: [
      { title: 'Význam predpony', text: 'Pseudo- (z gréčtiny) znamená nepravý, falošný, zdanlivý. Pseudohistorické diela sa tvária ako historické, no skutočnosť skresľujú.' },
      { title: 'Ostatné predpony', text: 'anti- = proti, pred- (pre-) = pred niečím. Skryto historické nevystihuje význam „falošnosti“.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 30,
    code: '30',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte z ukážky 4 názov literárneho žánru, ktorý je založený na pravidelných zápisoch.',
    placeholder: 'Vypíš názov žánru',
    correctAnswerDisplay: 'denník',
    acceptedAnswers: ['denník', 'denníku'],
    commonMistakes: [
      {
        pattern: '^den[ií]k$',
        hint: 'Pozor na pravopis: slovo „denník“ je utvorené od slova „denný“ príponou -ík, preto sa v ňom píšu dve n.'
      }
    ],
    hint: 'V ukážke sa spomína viacero žánrov – pozri sa do tretieho odseku a nájdi ten, ktorý má osobnejší, chronologicky zaznamenávaný charakter.',
    solutionSteps: [
      { title: 'Miesto v texte', text: '„Sloboda si prestal robiť záznamy vo svojom denníku…“ – denník je žáner založený na pravidelných (dátumovaných) zápisoch.' },
      { title: 'Zápis', text: 'Kľúč uznáva denník aj denníku, pravopisne správne.' }
    ],
    solutionConclusion: 'Správna odpoveď: denník.'
  },
  {
    id: 31,
    code: '31',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte zo **zvýraznenej časti** ukážky 4 činné príčastie.',
    placeholder: 'Vypíš príčastie',
    correctAnswerDisplay: 'trpiacou',
    acceptedAnswers: ['trpiacou', 'trpiaca'],
    commonMistakes: [
      {
        pattern: '^dospievaj[uú]c',
        hint: 'Príčastie „dospievajúcou“ sa síce v ukážke nachádza, ale stojí až za zvýraznenou časťou textu!'
      }
    ],
    hint: 'Činné príčastie prítomné sa v základnom tvare končí na -úci/-uci, -iaci/-aci (spievajúci, píšuci, robiaci) – v texte však môže byť vyskloňované.',
    solutionSteps: [
      { title: 'Hľadanie tvaru', text: 'Vo zvýraznenej časti: „…s manželkou trpiacou na schizofréniu“. Príčastie **trpiaca** (v texte v tvare **trpiacou**) je utvorené od slovesa //trpieť// príponou //-iaci//.' },
      { title: 'Pozor', text: 'Dospievajúcou je tiež činné príčastie, no stojí už mimo zvýraznenej časti.' }
    ],
    solutionConclusion: 'Správna odpoveď: trpiacou (trpiaca).'
  },
  {
    id: 32,
    code: '32',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte z nasledujúcej vety slovo, ktoré sa v nej v prúde reči spodobuje/znelostne asimiluje.\n//… bolo toto dielo nestráviteľné a čudovali sa, ako vôbec mohlo vyjsť.//',
    placeholder: 'Vypíš slovo',
    correctAnswerDisplay: 'vôbec',
    acceptedAnswers: ['vôbec'],
    hint: 'Hľadaj slovo, ktoré sa končí neznelou spoluhláskou a po ňom nasleduje slovo začínajúce sa znelou spoluhláskou alebo samohláskou.',
    solutionSteps: [
      { title: 'Spodobovanie na hranici slov', text: 'V spojení „vôbec mohlo“ sa koncové neznelé **c** pred znelou nepárovou (zvučnou) spoluhláskou **m** na hranici slov spodobuje a vyslovuje znelo ako **dz**: **[vôbedz mohlo]**.' },
      { title: 'Ostatné slová', text: 'Ostatné slová sa končia samohláskou alebo v nich spodobovanie nenastáva (napr. „vyjsť“ sa končí už neznelou spoluhláskou ť, pred ktorou stojí tiež neznelé s).' }
    ],
    solutionConclusion: 'Správna odpoveď: vôbec.'
  }
];
