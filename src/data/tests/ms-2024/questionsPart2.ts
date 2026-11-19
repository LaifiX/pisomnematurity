import type { QuestionData } from '../../types';

// Úlohy 33 – 64. Odpovede podľa kľúča NIVaM k testu 24 1403 (Maturita 2024, marcový termín).
// lenient: kľúč uvádza „Prihliadať na vecnú správnosť odpovede, uznať aj odpoveď s pravopisnými či gramatickými chybami.“

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart2: QuestionData[] = [
  // ---------------- Ukážka 5 – Taťjana Lehenová: Vybraná spoločnosť
  {
    id: 33,
    code: '33',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Žena v básni z ukážky 5',
    options: [
      { key: 'A', text: 'vyhľadáva dobrú spoločnosť.' },
      { key: 'B', text: 'organizuje večierok pre známych.' },
      { key: 'C', text: 'strávi večer osamote.' },
      { key: 'D', text: 'sa venuje maľovaniu.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si celú báseň až po posledný verš. Prečo žena vešia na dvere ceduľky „Nerušiť!“ a „Zatvorené pre všetkých!“ a kam sa v závere obracia?',
    solutionSteps: [
      {
        title: 'Porozumenie zmyslu básne',
        text: 'Lyrická hrdinka sa uzatvára pred vonkajším svetom (ceduľky //„Nerušiť!“// a //„Zatvorené pre všetkých!“//), zapáli si sviečku, naleje si pohár vína a večer prežije sama vo svojom vnútri (//„obrátená do seba“//) – **strávi teda večer osamote** (**C**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A, B** – hoci v úvode ironicky hovorí o //spoločenskom večere pre vybranú spoločnosť//, nikoho cudzieho k sebe nepúšťa a žiaden večierok pre známych neorganizuje.\n**D** – nápis //„Nie sme doma, spíme a maľujeme!“// je len žartovný odkaz na dverách, ktorý má odradiť návštevy; v skutočnosti nemaľuje.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 34,
    code: '34',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_5',
    questionText: '**Zvýraznené** slovo //malý// možno pri zachovaní vyznenia básne z ukážky 5 nahradiť slovom',
    options: [
      { key: 'A', text: 'útly.' },
      { key: 'B', text: 'komorný.' },
      { key: 'C', text: 'drobný.' },
      { key: 'D', text: 'banálny.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Dosaď si jednotlivé prídavné mená do spojenia „… spoločenský večer“. Ktoré slovo v slovenčine pomenúva tiché, intímne podujatie pre úzky okruh ľudí (podobne ako pri hudbe alebo divadle)?',
    solutionSteps: [
      {
        title: 'Výber kontextového synonyma',
        text: 'V spojení //malý spoločenský večer// vyjadruje prídavné meno //malý// tichú, intímnu a uzavretú atmosféru bez davu ľudí. Presne tento význam má v spisovnej slovenčine slovo **komorný** (//komorný večer, komorná atmosféra, komorné stretnutie//).'
      },
      {
        title: 'Prečo sa nehodia ostatné možnosti',
        text: '**A** – //útly// označuje niečo jemné, tenké či krehké vzrastom alebo objemom (//útla postava, útla knižka//).\n**C** – //drobný// pomenúva malý fyzický rozmer jednotlivých vecí (//drobný dážď, drobné mince//).\n**D** – //banálny// znamená všedný, otrepaný, bezvýznamný – takéto hodnotenie by úplne poprelo radosť a sviatočnú náladu lyrického subjektu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 35,
    code: '35',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: '//Vybranú spoločnosť// v ukážke 5 predstavujú',
    options: [
      { key: 'A', text: 'pozvaní blízki.' },
      { key: 'B', text: 'hudba a čítanie.' },
      { key: 'C', text: 'prítmie a poézia.' },
      { key: 'D', text: 'vlastné myšlienky.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa na posledné dva verše básne: „začnem rozhovor s pozvanými – / obrátená do seba.“ Všimni si aj to, že knižku má len ledabolo položenú pri ruke (nečíta ju). S kým teda vedie rozhovor, keď je obrátená do seba?',
    solutionSteps: [
      {
        title: 'Rozlúštenie pointy v závere básne',
        text: 'V posledných dvoch veršoch žena hovorí: //„začnem rozhovor s pozvanými – / obrátená do seba.“// Keďže dvere zamkla pred všetkými ľuďmi a pri rozhovore sa obracia do vlastného vnútra, onou metaforickou //vybranou spoločnosťou// („pozvanými“) sú jej **vlastné myšlienky** a vnútorný svet (**D**).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: '**A** – na dverách visí oznam //„Zatvorené pre všetkých!“//, žiadni blízki teda neprídu.\n**B, C** – sviečka, tichá hudba, víno a knižka //„položená len tak ledabolo pri ruke“// (ktorú ani neotvorí) vytvárajú len príjemnú atmosféru večera, nie „pozvaných“, s ktorými sa rozpráva vo svojom vnútri.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 36,
    code: '36',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré tvrdenie o ukážke 5 je pravdivé?',
    options: [
      { key: 'A', text: 'Predstavuje básnické pásmo.' },
      { key: 'B', text: 'Je v nej dôsledne dodržaný rytmicko-syntaktický paralelizmus.' },
      { key: 'C', text: 'Je organizovaná stroficky.' },
      { key: 'D', text: 'Obsahuje anaforu a inotaj.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozri sa na vonkajšiu grafickú úpravu básne: tvoria všetky verše jeden súvislý stĺpec bez medzier (astrofická báseň), alebo je rozdelená do viacerých oddelených celkov – slôh/strof?',
    solutionSteps: [
      {
        title: 'Vonkajšia kompozícia básne',
        text: 'Báseň nie je napísaná v jednom súvislom bloku, ale je graficky aj významovo rozčlenená do samostatných skupín veršov (strof/slôh) oddelených medzerami – **je teda organizovaná stroficky** (**C**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – //básnické pásmo// je rozsiahla polytematická báseň avantgardnej poézie založená na voľnom prúde predstáv (napr. Apollinaire: //Pásmo//), nie krátka intímna báseň s jednou témou.\n**B** – //rytmicko-syntaktický paralelizmus// nastáva, keď sa hranice veršov dôsledne zhodujú s hranicami viet alebo ucelených vetných celkov; v ukážke 5 sa však vyskytujú veršové presahy (napr. //Dostala som chuť / na malý spoločenský večer;// či //a s knižkou, / položenou len tak ledabolo pri ruke, / začnem rozhovor s pozvanými//).\n**D** – v básni sa nenachádza //anafora// (opakovanie rovnakých slov na začiatku susedných veršov) ani //inotaj/alegória//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 37,
    code: '37',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Čím je posledný verš ukážky 5 z významového hľadiska?',
    options: [
      { key: 'A', text: 'motívom diela' },
      { key: 'B', text: 'pointou básne' },
      { key: 'C', text: 'témou básne' },
      { key: 'D', text: 'rozuzlením deja' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Celú báseň čitateľ čaká, kto tvorí „vybranú spoločnosť“, a až záverečný verš „obrátená do seba.“ prekvapivo a vtipne odhalí pravý zmysel celej básne. Ako voláme takéto prekvapivé myšlienkové vyvrcholenie na konci básne či anekdoty?',
    solutionSteps: [
      {
        title: 'Význam posledného verša',
        text: 'Záverečný verš //„obrátená do seba.“// prináša prekvapivý obrat a dôvtipné vyvrcholenie celej výpovede – odhaľuje, že onou očakávanou //vybranou spoločnosťou// je samotná žena a jej vnútorný svet. Takéto záverečné myšlienkové vyústenie lyrickej básne sa nazýva **pointa básne** (**B**).'
      },
      {
        title: 'Rozlíšenie od ostatných pojmov',
        text: '**A, C** – //téma// je celkový jav zobrazený v básni (chvíľa samoty a vnútorného pokoja) a //motív// je najmenší tematický prvok (sviečka, hudba, ceduľka na dverách).\n**D** – //rozuzlenie deja// je súčasťou vnútornej kompozície epických a dramatických diel so zápletkou, nie lyrickej básne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 38,
    code: '38',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_5',
    questionText: 'Doplňte do nasledujúcej vety správny jazykovedný termín.',
    fillSentenceHtml: 'Pomlčka v závere ukážky 5 signalizuje recitátorovi {{blank}} prestávku/pauzu.',
    placeholder: 'Doplň druh prestávky',
    correctAnswerDisplay: 'významovú (logickú / dramatickú)',
    acceptedAnswers: [
      'významovú',
      'logickú',
      'dramatickú',
      'intonačnú',
      'umeleckú',
      'významová',
      'logická',
      'dramatická',
      'intonačná',
      'umelecká',
      'významovú prestávku',
      'významovú pauzu',
      'logickú prestávku',
      'logickú pauzu',
      'dramatickú prestávku',
      'dramatickú pauzu',
      'intonačnú prestávku',
      'intonačnú pauzu',
      'umeleckú prestávku',
      'umeleckú pauzu',
      'významová prestávka',
      'významová pauza',
      'logická prestávka',
      'logická pauza',
      'dramatická prestávka',
      'dramatická pauza',
      'intonačná prestávka',
      'intonačná pauza',
      'umelecká prestávka',
      'umelecká pauza',
      'Pomlčka v závere ukážky 5 signalizuje recitátorovi významovú prestávku',
      'Pomlčka v závere ukážky 5 signalizuje recitátorovi logickú prestávku',
      'Pomlčka v závere ukážky 5 signalizuje recitátorovi dramatickú prestávku',
      'Pomlčka v závere ukážky 5 signalizuje recitátorovi významovú pauzu',
      'Pomlčka v závere ukážky 5 signalizuje recitátorovi logickú pauzu',
      'Pomlčka v závere ukážky 5 signalizuje recitátorovi dramatickú pauzu'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'fyziologick|dychov|prirodzen',
        hint: 'Fyziologická (prirodzená/dychová) prestávka slúži len na nadýchnutie. Pomlčka pred pointou básne však zámerne buduje očakávanie a zdôrazňuje zmysel posledného verša!'
      },
      {
        pattern: 'krátk|dlh',
        hint: 'Nejde o dĺžku pauzy (krátka/dlhá), ale o jej odborný druh podľa funkcie v reči (opak fyziologickej prestávky).'
      }
    ],
    hint: 'V zvukovej rovine slovenčiny delíme prestávky (pauzy) na fyziologické (keď sa potrebujeme nadýchnuť) a tie druhé, ktoré členia vetu podľa zmyslu alebo pred pointou zámerne stupňujú napätie a očakávanie poslucháča. Ako sa tento druh prestávky odborne volá?',
    solutionSteps: [
      {
        title: 'Funkcia pomlčky a prestávky v prednese',
        text: 'Prestávky (pauzy) v reči delíme na **fyziologické** (dychové – slúžia na nadýchnutie) a **významové (logické)**, prípadne pri umeleckom prednese **dramatické** (zámerne vzbudzujú napätie a upriamujú pozornosť na nasledujúcu pointu //„obrátená do seba“//).'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Kľúč uznáva odpovede **dramatickú**, **významovú**, **logickú**, ako aj **intonačnú** alebo **umeleckú** (v akuzatíve aj v nominatíve). Prihliada sa na vecnú správnosť odpovede.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **významovú** / **logickú** / **dramatickú** (prestávku/pauzu).'
  },
  {
    id: 39,
    code: '39',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Napíšte jednoslovný literárnovedný termín pomenúvajúci literárny druh ukážky 5.',
    placeholder: 'Napíš literárny druh',
    correctAnswerDisplay: 'lyrika',
    acceptedAnswers: ['lyrika'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^poézia$|^poezia$',
        hint: 'Pozor na častú zámenu pojmov! Poézia (oproti próze) je literárna forma, nie literárny druh. Základné literárne druhy sú tri: epika, dráma a…'
      },
      {
        pattern: '^báseň$|^basen$',
        hint: 'Báseň je literárny útvar/žáner, zatiaľ čo zadanie pýta jeden z troch základných literárnych druhov.'
      }
    ],
    hint: 'Nezamieňaj si literárnu formu (poézia – próza) s literárnym druhom! Základné literárne druhy sú len tri: jeden má dej a rozprávača, druhý je určený na javisko a tretí vyjadruje pocity, nálady a vnútorné prežívanie lyrického subjektu.',
    solutionSteps: [
      {
        title: 'Rozlíšenie literárneho druhu a formy',
        text: 'V teórii literatúry rozlišujeme tri základné **literárne druhy**: **lyriku**, **epiku** a **drámu** (zatiaľ čo //poézia// a //próza// sú literárne formy). Ukážka 5 nemá dej ani dramatický dialóg, ale zachytáva náladu, túžbu po tichu a vnútorné rozpoloženie subjektu – patrí teda do literárneho druhu **lyrika**.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa jednoslovný termín **lyrika** (prihliada sa na vecnú správnosť odpovede).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **lyrika**.'
  },
  {
    id: 40,
    code: '40',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Napíšte názov verša/veršového systému využitého v ukážke 5.',
    placeholder: 'Napíš druh verša',
    correctAnswerDisplay: 'voľný verš',
    acceptedAnswers: ['voľný', 'voľný verš'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'sylabick|sylabotónick|sylabotonic|časomern|casomern|viazan',
        hint: 'Spočítaj si slabiky v jednotlivých veršoch ukážky 5 (5, 9, 8, 8, 3…) a všimni si, že verše sa vôbec nerýmujú – nejde o viazaný verš so stálym počtom slabík ani stôp!'
      },
      {
        pattern: 'nerýmovan|bezrýmov',
        hint: 'Chýbajúci rým je len jeden z prejavov; ako sa v modernej poézii odborne volá verš s rôznou dĺžkou riadkov bez pevnej rytmickej schémy (opak viazaného verša)?'
      }
    ],
    hint: 'Porovnaj dĺžku jednotlivých veršov v ukážke 5 (niektorý má 3 slabiky, iný až 12 či 13 slabík) a pozri sa, či majú na konci rým. Ako nazývame moderný neviazaný verš bez pravidelného počtu slabík, stôp a rýmu?',
    solutionSteps: [
      {
        title: 'Znaky verša v ukážke 5',
        text: 'Verše v básni Taťjany Lehenovej majú **rôzny počet slabík**, nemajú pravidelný stopový rytmus ani koncový rým a využívajú veršové presahy a prirodzenú intonáciu vety. Ide o typický moderný **voľný verš**.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa odpoveď **voľný** aj **voľný verš** (prihliada sa na vecnú správnosť odpovede).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **voľný verš** (alebo **voľný**).'
  },

  // ---------------- Ukážka 6 – Karl Vocelka: Habsburgovci v dejinách
  {
    id: 41,
    code: '41',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 6?',
    options: [
      { key: 'A', text: 'Názov //c. a k. dvorný dodávateľ// mohli používať držitelia ocenenia kvality.' },
      { key: 'B', text: 'Názov //c. a k. dvorný dodávateľ// mohli používať hlavne viedenskí podnikatelia.' },
      { key: 'C', text: 'Významní dodávatelia panovníckeho dvora boli aj z potravinárskeho odvetvia.' },
      { key: 'D', text: 'Významnými dodávateľmi panovníckeho dvora boli výrobcovia vývesných štítov.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si pozorne celý text a over každú možnosť: spomínajú sa v texte podniky s jedlom a nápojmi (kaviareň, reštaurácia, raňajky, obedy)? A pozor pri možnosti B na čísla: koľko dodávateľov bolo vo Viedni (viac ako 500) a koľko celkovo (1 223)!',
    solutionSteps: [
      {
        title: 'Overenie správneho tvrdenia',
        text: 'Text spomína vyznamenanú //kaviareň Demel//, //hotel a reštauráciu Sacher//, prípravu //500 porcií raňajok a obeda pre 2 000 zamestnancov dvora// a dodáva, že vyznamenaní dodávatelia pôsobili **vo všetkých odvetviach**. K významným dodávateľom teda patrili aj podnikatelia z **potravinárskeho (gastronomického) odvetvia** (**C**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – zamieňa príčinu a následok: titul nezískavali držitelia nejakého ocenenia kvality, ale podnikatelia, ktorým cisár udelil výsadu zásobovať dvor, čo pre podnik v očiach verejnosti predstavovalo //„istý druh pečate kvality“//.\n**B** – z celkového počtu 1 223 dvorných dodávateľov bolo vo Viedni viac ako 500, čiže nadpolovičná väčšina (okolo 700) sídlila mimo Viedne (Budapešť, Praha, Karlove Vary, cudzina).\n**D** – firemné (vývesné) štíty vo Viedni len označovali obchody niekdajších dvorných dodávateľov.'
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
    questionText: 'V čase vzniku titulu //cisársko-kráľovský dodávateľ// sa na území Slovenska rozvíjala',
    options: [
      { key: 'A', text: 'romantická literatúra.' },
      { key: 'B', text: 'renesančná literatúra.' },
      { key: 'C', text: 'klasicistická literatúra.' },
      { key: 'D', text: 'baroková literatúra.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Najprv v poslednom odseku ukážky 6 vyhľadaj presný rok, odkedy sa používal titul „cisársko-kráľovský dodávateľ“ (koniec 18. storočia). Potom si spomeň, ktoré literárne obdobie sa v slovenskej literatúre začína okolo roku 1780 (obdobie osvietenstva, Bajza, Fándly, Bernolák, neskôr Kollár a Hollý).',
    solutionSteps: [
      {
        title: 'Vyhľadanie roku v ukážke',
        text: 'V ukážke sa uvádza: //„Od roku **1782** sa pre týchto ľudí používal titul cisársko-kráľovský dodávateľ…“// Ide teda o samý koniec 18. storočia (obdobie osvietenských reforiem cisára Jozefa II.).'
      },
      {
        title: 'Zaradenie do dejín slovenskej literatúry',
        text: 'V rokoch **1780 – 1830** sa na území Slovenska rozvíjala **klasicistická** (osvietensko-klasicistická) literatúra (J. I. Bajza – prvý slovenský román //René mládenca príhody a skúsenosti// práve z roku 1783, A. Bernolák, J. Fándly, neskôr J. Kollár a J. Hollý).\n• Renesancia (**B**): cca 1500 – 1650.\n• Barok (**D**): cca 1650 – 1780.\n• Romantizmus (**A**): cca 1836 – 1875 (štúrovci).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 43,
    code: '43',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorej možnosti platia obidva znaky pre text ukážky 6?',
    options: [
      { key: 'A', text: 'rečnícke prvky, vedecká parafráza' },
      { key: 'B', text: 'monotematickosť, nesúvislý text' },
      { key: 'C', text: 'množstvo údajov, súvislý text' },
      { key: 'D', text: 'obraznosť, vedecká citácia' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Rozlíš najprv súvislý text (plynulé vety a odseky) od nesúvislého textu (tabuľka, graf, zoznam, cestovný poriadok). Potom skontroluj, či sú v ukážke skutočné vedecké citácie a parafrázy iných vedcov, alebo skôr množstvo konkrétnych faktov, čísel a rokov.',
    solutionSteps: [
      {
        title: 'Overenie oboch znakov v možnosti C',
        text: '1. Text ukážky tvoria plynulo pospájané vety usporiadané do odsekov – ide o **súvislý text** (na rozdiel od nesúvislého textu, ako sú tabuľky, grafy či schémy).\n2. Obsahuje **množstvo faktografických údajov** – presné roky (1782, 1867), počty (500 porcií, 2 000 zamestnancov, 500 a 1 223 dodávateľov), názvy podnikov a miest.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: '**A, D** – v texte sa nenachádza žiadna //vedecká parafráza// ani //vedecká citácia// iného odborného zdroja (úvodzovky pri spojení //„pečať kvality“// označujú len prenesený význam, nie citát z vedeckej práce).\n**B** – text je monotematický (venuje sa jednej téme), ale **nie je nesúvislý**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 44,
    code: '44',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'Slovo //dodávateľ//',
    options: [
      { key: 'A', text: 'vzniklo kombináciou skladania a odvodzovania.' },
      { key: 'B', text: 'vzniklo prenesením základného významu slova.' },
      { key: 'C', text: 'obsahuje tri slovotvorné základy.' },
      { key: 'D', text: 'obsahuje slovotvornú predponu a príponu.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Rozdeľ si slovo „dodávateľ“ na časti podľa toho, ako postupne vzniklo od slovesa „dávať“ → „do-dávať“ → „do-dáva-teľ“. Koľko má koreňov a čo stojí pred koreňom a za ním?',
    solutionSteps: [
      {
        title: 'Slovotvorný rozbor slova dodávateľ',
        text: 'Podstatné meno //dodávateľ// je odvodené od slovesa //dodávať// (ktoré vzniklo predponou **do-** od //dávať//) pridaním činiteľskej slovotvornej prípony **-teľ** (//do- + -dáva- + -teľ//, podobne ako //učiteľ, čitateľ, zakladateľ//). Obsahuje teda **slovotvornú predponu** (**do-**) aj **slovotvornú príponu** (**-teľ**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A, C** – slovo má iba jeden koreň (//-dáv- / da-//), nevzniklo skladaním dvoch či troch slovotvorných základov (nie je to zložené slovo ako napr. //veľkopodnik//).\n**B** – nepomenúva jav prenesením významu (metaforou/metonymiou), ale priamo činiteľa deja, ktorý niečo dodáva.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 45,
    code: '45',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorej možnosti je gramaticky a pravopisne správny tvar vzťahového prídavného mena?',
    options: [
      { key: 'A', text: 'portréty habsburských panovníkov' },
      { key: 'B', text: 'portréty Habsburských panovníkov' },
      { key: 'C', text: 'portréty habsburgských panovníkov' },
      { key: 'D', text: 'portréty Habsburgských panovníkov' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Ide o dve dôležité pravidlá z Pravidiel slovenského pravopisu: 1. Aké začiatočné písmeno majú vzťahové prídavné mená na -ský utvorené od vlastných osobných a rodových mien? 2. Čo sa pri pripájaní prípony -ský stane so skupinou spoluhlások v základoch zakončených na -burg?',
    solutionSteps: [
      {
        title: '1. Malé začiatočné písmeno pri príponách -ský/-ovský',
        text: 'Podľa PSP sa **vzťahové prídavné mená** utvorené od vlastných osobných a rodových mien príponou **-ský / -ovský** píšu s **malým začiatočným písmenom** (//štúrovský pravopis, bernolákovská slovenčina, habsburskí panovníci//; veľké písmeno majú len privlastňovacie prídavné mená na //-ov/-in//, napr. //Habsburgov portrét//). Tým vylučujeme **B** a **D**.'
      },
      {
        title: '2. Vypustenie spoluhlásky -g pred príponou -ský',
        text: 'Pri tvorení prídavných mien príponou **-ský** od vlastných mien zakončených na spoluhlásku + **-g**, najmä **-burg / -berg** (//Habsburg, Hamburg, Štrasburg, Norimberg//), sa koncové **g** pred //-ský// vypúšťa, aby sa zjednodušila ťažko vysloviteľná skupina spoluhlások: //Habsburg + -ský// → **habsburský** (rovnako //Hamburg → hamburský//). Preto je správny tvar **portréty habsburských panovníkov** (**A**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 46,
    code: '46',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'Napíšte gramaticky a pravopisne správne obyvateľské meno mužského obyvateľa Prahy.',
    placeholder: 'Napíš obyvateľské meno',
    correctAnswerDisplay: 'Pražan',
    acceptedAnswers: ['Pražan'],
    caseSensitive: true,
    caseHint: 'Obyvateľské mená (Pražan) sú vlastné mená – podľa Pravidiel slovenského pravopisu sa píšu s veľkým začiatočným písmenom P.',
    commonMistakes: [
      {
        pattern: '^pražák$|^pražak$',
        hint: 'Tvar „Pražák“ je nespisovný bohemizmus (prevzatý z češtiny). V spisovnej slovenčine sa obyvateľské mená tvoria príponou -an (ako Viedeň → Viedenčan, Bystrica → Bystričan).'
      },
      {
        pattern: '^pražčan$|^prahačan$|^prahan$',
        hint: 'Pri tvorení obyvateľského mena od názvu Praha príponou -an sa spoluhláska h mení (strieda) na ž – bez vkladania spoluhlásky č!'
      },
      {
        pattern: '^pražania$|^pražanka$',
        hint: 'Zadanie žiada pomenovanie jedného mužského obyvateľa Prahy (nominatív jednotného čísla mužského rodu).'
      }
    ],
    hint: 'Spisovné slovenské obyvateľské mená sa tvoria príponou -an (nie českou príponou -ák!). Daj si pozor na spoluhláskovú zmenu (alternáciu) pred príponou -an a na pravidlo o písaní začiatočného písmena v obyvateľských menách.',
    solutionSteps: [
      {
        title: 'Tvorenie spisovného obyvateľského mena',
        text: 'Od názvu mesta **Praha** sa v spisovnej slovenčine tvorí mužské obyvateľské meno slovotvornou príponou **-an**, pričom spoluhláska **h** sa pred príponou strieda so **ž**: //Prah-a + -an// → **Pražan** (ženský náprotivok je //Pražanka//; hovorový tvar //Pražák// je nespisovný).'
      },
      {
        title: 'Veľké začiatočné písmeno podľa PSP',
        text: 'Obyvateľské mená utvorené od vlastných zemepisných názvov (//Slovák, Európan, Viedenčan, Pražan//) patria medzi **vlastné mená**, preto sa musia písať s **veľkým začiatočným písmenom P**. Kľúč NIVaM vyžaduje presný tvar **Pražan** s veľkým **P**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **Pražan**.'
  },
  {
    id: 47,
    code: '47',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Koľko slovesných podstatných mien sa nachádza v __podčiarknutej__ časti ukážky 6?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '1 (jedno – zásobovaniu)',
    acceptedAnswers: [
      '1',
      'jedno',
      'jeden',
      '1 slovesné podstatné meno',
      'jedno slovesné podstatné meno',
      'zásobovaniu',
      'zásobovanie',
      'vďaka zásobovaniu'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^2$|^dve$|^dva$',
        hint: 'Pozor na chyták pri tvare „boli vyznamenaní“! Má na konci dlhé -í a vzťahuje sa na podmet „majitelia“ – je to trpné príčastie v prísudku, nie podstatné meno „vyznamenanie“!'
      },
      {
        pattern: '^0$|^žiadne$|^ziadne$|^ani jedno$',
        hint: 'Pozri sa hneď na prvé dve slová podčiarknutej časti („Vďaka …“): nájdeš tam podstatné meno stredného rodu utvorené od slovesa príponou -nie (vzor vysvedčenie)!'
      }
    ],
    hint: 'Slovesné podstatné meno pomenúva dej, tvorí sa od slovesa príponou -nie alebo -tie a skloňuje sa podľa vzoru vysvedčenie (napr. písanie, čítanie). Prejdi si podčiarknutú časť slovo po slove a daj si pozor na tvar „boli vyznamenaní“ – je to podstatné meno, alebo slovesné príčastie?',
    solutionSteps: [
      {
        title: 'Vyhľadanie slovesného podstatného mena',
        text: 'Slovesné podstatné mená sú podstatné mená stredného rodu utvorené od slovies príponami **-nie / -tie** (vzor //vysvedčenie//). Hneď na začiatku podčiarknutej časti stojí spojenie //„Vďaka **zásobovaniu** dvora…“// – tvar //zásobovaniu// (nominatív sg. **zásobovanie**, od slovesa //zásobovať//) je **slovesné podstatné meno**.'
      },
      {
        title: 'Pozor na chytáky vo zvyšku podčiarknutej časti',
        text: '• Tvar //boli **vyznamenaní**// sa končí na dlhé **-í** – je to **trpné príčastie** v N pl. mužského rodu životného (súčasť prísudku k podmetu //majitelia//), nie slovesné podstatné meno //vyznamenanie//!\n• Slovo //dodávateľ// je činiteľské podstatné meno mužského rodu (vzor //chlap//).\nV podčiarknutej časti sa teda nachádza iba **1 (jedno)** slovesné podstatné meno. Kľúč NIVaM uznáva počet (**1 / jedno**) aj priame vypísanie slova (**zásobovaniu / zásobovanie**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **1** (**jedno** – slovo //zásobovaniu//).'
  },
  {
    id: 48,
    code: '48',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Pomenujte z hľadiska vonkajšej kompozície textu __podčiarknutú__ časť ukážky 6.',
    placeholder: 'Napíš kompozičnú jednotku',
    correctAnswerDisplay: 'odsek',
    acceptedAnswers: ['odsek', 'odstavec', 'paragraf'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'úvod|uvod|jadro|záver|zaver',
        hint: 'Úvod, jadro a záver sú časti vnútornej (obsahovej) kompozície textu. Vonkajšia kompozícia si všíma grafické členenie textu (nadpis, kapitola, …).'
      },
      {
        pattern: 'nadpis|titulok|podnadpis',
        hint: 'Nadpis je na vrchu ukážky; podčiarknutá časť je graficky odsadený blok viet medzi úvodnou otázkou a nasledujúcou časťou textu.'
      }
    ],
    hint: 'Rozlišujeme vnútornú kompozíciu (úvod, jadro, záver) a vonkajšiu kompozíciu neveršovaného textu (nadpis, kapitola, …). Ako sa volá základná graficky a významovo ucelená jednotka prozaického alebo náučného textu, ktorá sa začína na novom riadku so zarážkou?',
    solutionSteps: [
      {
        title: 'Jednotka vonkajšej kompozície textu',
        text: 'Z hľadiska vonkajšieho (grafického) členenia neveršovaného textu tvorí podčiarknutá časť samostatný blok textu začínajúci sa na novom riadku odsadením a ukončený prechodom na ďalší riadok – ide o **odsek**.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa spisovný slovenský termín **odsek**, pričom kľúč zohľadňuje vecnú správnosť a uznáva aj pomenovania **odstavec** či **paragraf**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **odsek**.'
  },

  // ---------------- Ukážka 7 – Inzerát a žiadosť o brigádu
  {
    id: 49,
    code: '49',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktorú podmienku CK Vodný raj Ondrej na základe ukážky 7 pravdepodobne spĺňa?',
    options: [
      { key: 'A', text: 'Ukončené pedagogické vzdelanie.' },
      { key: 'B', text: 'Skúsenosti z letných táborov.' },
      { key: 'C', text: 'Dochvíľnosť, technické zručnosti.' },
      { key: 'D', text: 'Dobrá telesná kondícia.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Porovnaj požiadavky v inzeráte (text A) s tým, čo o sebe Ondrej uvádza v žiadosti (text B). Pozor na slovo „ukončené“ pri vzdelaní a na to, kde presne Ondrej doteraz praxoval!',
    solutionSteps: [
      {
        title: 'Porovnanie inzerátu so žiadosťou',
        text: 'Inzerát (text A) požaduje okrem iného //„fyzickú zdatnosť“//. Ondrej v texte B uvádza: //„Aktívne sa venujem tenisu, plaveckému a vodáckemu športu.“// Z toho jasne vyplýva, že pravdepodobne spĺňa podmienku **dobrej telesnej kondície** (**D**).'
      },
      {
        title: 'Prečo nespĺňa (alebo nedokladá) ostatné podmienky',
        text: '**A** – Ondrej **nemá ukončené** pedagogické vzdelanie, je zatiaľ iba žiakom //3. ročníka strednej školy//.\n**B** – uvádza odbornú prax v školskom klube detí, v škôlke a pri kurzoch plávania batoliat, no **skúsenosti z detských letných táborov** nespomína.\n**C** – o dochvíľnosti ani o technickom či IT nadaní sa v žiadosti vôbec nezmieňuje.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 50,
    code: '50',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktorá možnosť patrí na zakryté miesto v texte A?',
    options: [
      { key: 'A', text: 'motivačný list' },
      { key: 'B', text: 'lekársku správu' },
      { key: 'C', text: 'cielený rozhovor' },
      { key: 'D', text: 'správu o výsledku projektu' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prečítaj si poslednú vetu inzerátu (text A): „Pošli žiadosť, CV a [?] na: leto2024@vodny-raj.com…“ Ktorý štandardný sprievodný dokument (popri žiadosti a životopise) posielajú uchádzači o prácu zamestnávateľovi?',
    solutionSteps: [
      {
        title: 'Trojica dokumentov pri uchádzaní sa o zamestnanie',
        text: 'V pracovných inzerátoch zamestnávatelia štandardne žiadajú zaslať e-mailom **žiadosť, CV (životopis) a motivačný list** (**A**), v ktorom uchádzač vysvetlí, prečo sa o pozíciu zaujíma a aké má predpoklady.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: '**C** – //cielený rozhovor// (pracovný pohovor) sa uskutočňuje osobne alebo online, nedá sa „poslať e-mailom“.\n**B, D** – lekárska správa sa prípadne predkladá až pri nástupe a správa o výsledku projektu s inzerátom na táborového animátora nijako nesúvisí.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 51,
    code: '51',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'Taliančina patrí do rovnakej jazykovej skupiny indoeurópskych jazykov ako',
    options: [
      { key: 'A', text: 'dánčina.' },
      { key: 'B', text: 'nemčina.' },
      { key: 'C', text: 'rumunčina.' },
      { key: 'D', text: 'bulharčina.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Taliančina sa vyvinula z latinčiny, patrí teda medzi románske jazyky (spolu s francúzštinou či španielčinou). Všimni si koreň názvu jedného z ponúknutých jazykov, ktorý priamo pripomína staroveký Rím (Roma)!',
    solutionSteps: [
      {
        title: 'Zaradenie taliančiny do jazykovej skupiny',
        text: 'Indoeurópska jazyková rodina sa v Európe delí najmä na **slovanské**, **germánske** a **románske** jazyky. **Taliančina** vznikla z ľudovej latinčiny a patrí do **románskej jazykovej skupiny** – rovnako ako francúzština, španielčina, portugalčina a **rumunčina** (**C**, kam latinčinu priniesli rímski kolonisti v starovekej Dácii).'
      },
      {
        title: 'Zaradenie ostatných jazykov',
        text: '**A, B** – dánčina a nemčina patria do **germánskej** skupiny indoeurópskych jazykov (spolu s angličtinou, švédčinou či holandčinou).\n**D** – bulharčina patrí do **slovanskej** (južnoslovanskej) jazykovej skupiny.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 52,
    code: '52',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'V ktorej možnosti sa nachádza vokalizovaná predložka?',
    options: [
      { key: 'A', text: '//za kladné vybavenie//' },
      { key: 'B', text: '//na osobnom pohovore//' },
      { key: 'C', text: '//dorozumiem sa aj po maďarsky//' },
      { key: 'D', text: '//skúsenosti so spoluorganizovaním//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Vokalizovaná predložka nie je každá predložka so samohláskou! Vokalizácia nastáva iba vtedy, keď sa k predložke zakončenej na spoluhlásku (s, z, v, k, od, nad, pod, bez…) pridá samohláska -o alebo -u pre ľahšiu výslovnosť.',
    solutionSteps: [
      {
        title: 'Čo je vokalizácia predložky',
        text: 'Vokalizované predložky vznikajú pridaním samohlásky **-o** alebo **-u** k neslabičným predložkám (//s → so, z → zo, v → vo, k → ku//) alebo predložkám zakončeným na spoluhlásku (//od → odo, nad → nado, pod → podo, bez → bezo//), aby sa predišlo ťažko vysloviteľnému zhluku spoluhlások. V spojení //skúsenosti **so** spoluorganizovaním// dostala predložka //s// pred skupinou //sp-// vokalizovanú podobu **so** (**D**).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'Predložky **za** (**A**), **na** (**B**) a **po** (**C**) majú samohlásku vo svojom základnom tvare vždy (neexistuje predložka „z-“, „n-“ ani „p-“ v tomto význame) – nejde teda o vokalizáciu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 53,
    code: '53',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Text B patrí do tej istej skupiny slohových útvarov/žánrov ako',
    options: [
      { key: 'A', text: 'prívet.' },
      { key: 'B', text: 'výklad.' },
      { key: 'C', text: 'recenzia.' },
      { key: 'D', text: 'reklamácia.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Text B je úradná žiadosť o prijatie na brigádu. Ktorý z ponúknutých útvarov je takisto úradný list s ustálenou formou, ktorým občan vybavuje úradnú alebo obchodnú záležitosť?',
    solutionSteps: [
      {
        title: 'Zaradenie slohového útvaru textu B',
        text: 'Text B je **žiadosť o prijatie do zamestnania (úradný list)** – patrí medzi oznamovacie útvary **administratívneho štýlu**. Do tej istej skupiny úradných listov patrí aj **reklamácia** (**D**), objednávka, sťažnosť, urgencia či upomienka.'
      },
      {
        title: 'Zaradenie ostatných slohových útvarov',
        text: '**A** – //prívet// patrí medzi útvary **rečníckeho štýlu**.\n**B** – //výklad// je základný útvar **náučného štýlu**.\n**C** – //recenzia// (posudok diela) patrí do **publicistického** a **náučného štýlu**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 54,
    code: '54',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktorý typ životopisu tvorí prílohu Ondrejovej žiadosti? Doplňte do nasledujúcej vety správne slovo.',
    fillSentenceHtml: '//V prílohe posielam svoj// {{blank}} //životopis.//',
    placeholder: 'Doplň typ životopisu',
    correctAnswerDisplay: 'štruktúrovaný (úradný / administratívny)',
    acceptedAnswers: [
      'štruktúrovaný',
      'úradný',
      'administratívny',
      'štruktúrovaný životopis',
      'úradný životopis',
      'administratívny životopis',
      'V prílohe posielam svoj štruktúrovaný životopis',
      'V prílohe posielam svoj úradný životopis',
      'V prílohe posielam svoj administratívny životopis'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'beletrizovan|umeleck',
        hint: 'Pozor! Beletrizovaný životopis je umelecké rozprávanie o vlastnom živote a k úradnej žiadosti o zamestnanie sa neprikladá (odpoveď „beletrizovaný“ kľúč výslovne neuznáva!). Potrebuješ prehľadný typ životopisu v bodoch/rubrikách.'
      }
    ],
    hint: 'V stredoškolskej štylistike rozlišujeme beletrizovaný životopis (písaný umelecky vo vetách) a ten druhý – prehľadný životopis usporiadaný do hesiel a rubrík (vzdelanie, prax, jazyky, zručnosti), ktorý sa posiela ako príloha k žiadosti o zamestnanie (CV). Ako sa tento typ životopisu nazýva?',
    solutionSteps: [
      {
        title: 'Typy životopisu v úradnej komunikácii',
        text: 'K úradnej žiadosti o prijatie do zamestnania alebo na brigádu (v inzeráte označovaný skratkou //CV// – //curriculum vitae//) sa prikladá prehľadný životopis členený do bodov a rubrík, ktorý sa v štylistike nazýva **štruktúrovaný**, **úradný** alebo **administratívny** životopis.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Kľúč uznáva odpovede **štruktúrovaný**, **úradný** aj **administratívny** (samostatne aj zapojené do vety; prihliada sa na vecnú správnosť). Odpoveď //beletrizovaný životopis// sa **neuznáva**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **štruktúrovaný** (alebo **úradný** / **administratívny**).'
  },
  {
    id: 55,
    code: '55',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'Nahraďte **zvýraznené** slovo v texte B združeným pomenovaním.',
    placeholder: 'Napíš viacslovné pomenovanie',
    correctAnswerDisplay: 'v materskej škole (materská škola)',
    acceptedAnswers: [
      'v materskej škole',
      'materskej škole',
      'materská škola',
      'v materskej škôlke',
      'materskej škôlke',
      'materská škôlka',
      'Absolvoval som povinnú odbornú prax v školskom klube detí a v materskej škole',
      'Absolvoval som povinnú odbornú prax v školskom klube detí a v materskej škole a mám aj skúsenosti so spoluorganizovaním projektu kurzov plávania batoliat',
      'Absolvoval som povinnú odbornú prax v školskom klube detí a v materskej škôlke'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^predškolsk|^detské jasle|^jasle',
        hint: 'Hľadáš oficiálne dvojslovné pomenovanie pre „škôlku“, ktoré sa skladá z prídavného mena a podstatného mena „škola“.'
      },
      {
        pattern: '^škola$|^v\\s+škole$',
        hint: 'Združené pomenovanie je ustálené viacslovné (zvyčajne dvojslovné) pomenovanie jedného pojmu – doplň pred slovo „škola“ príslušné prídavné meno!'
      }
    ],
    hint: 'Združené pomenovanie je viacslovné (najčastejšie dvojslovné: prídavné meno + podstatné meno) ustálené pomenovanie pre jednu vec alebo inštitúciu, napr. „stredná škola“ namiesto „stredná“ alebo „triedna kniha“ namiesto „triedna“. V texte B je zvýraznené hovorové jednoslovné pomenovanie „v škôlke“ – ako znie oficiálny dvojslovný názov tejto inštitúcie (v úradnej žiadosti vhodnejší)?',
    solutionSteps: [
      {
        title: 'Univerbizácia vs. združené pomenovanie',
        text: 'Podstatné meno //škôlka// vzniklo **univerbizáciou** (zjednoslovnením) v hovorovej reči a v úradnej žiadosti pôsobí neoficiálne. Jeho plným, štylisticky neutrálnym a úradným **združeným pomenovaním** je dvojslovné spojenie **materská škola** – v kontexte vety s predložkou v lokáli: **v materskej škole**.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa tvar v príslušnom páde **v materskej škole / materskej škole**, základný tvar **materská škola** (kľúč pripúšťa aj variant //v materskej škôlke / materská škôlka// a zapojenie do vety; prihliada sa na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **v materskej škole** (alebo **materská škola**).'
  },
  {
    id: 56,
    code: '56',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Do ktorého jazykového štýlu patrí text B?',
    placeholder: 'Napíš jazykový štýl',
    correctAnswerDisplay: 'administratívny (úradný) štýl',
    acceptedAnswers: [
      'administratívny',
      'úradný',
      'administratívny štýl',
      'úradný štýl',
      'do administratívneho',
      'do úradného',
      'do administratívneho štýlu',
      'do úradného štýlu',
      'administratívneho',
      'úradného',
      'administratívneho štýlu',
      'úradného štýlu'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'hovorov|publicistick|náučn|naucn|rečníck|recnick|umeleck',
        hint: 'Všimni si pevnú oficiálnu úpravu listu (záhlavie odosielateľa, adresa inštitúcie, miesto a dátum, „Vec: Žiadosť…“, zdvorilostná formulka a vlastnoručný podpis). Ktorý zo šiestich jazykových štýlov slúži na oficiálnu komunikáciu občana s inštitúciou?'
      },
      {
        pattern: 'informačn|informacn',
        hint: 'Informačný je slohový postup (spôsob spracovania témy), nie jazykový štýl!'
      }
    ],
    hint: 'V slovenčine poznáme šesť základných jazykových štýlov (hovorový, náučný, publicistický, rečnícky, umelecký a šiesty pre oficiálny styk s inštitúciami). Do ktorého z nich patrí oficiálna žiadosť občana adresovaná firme s predpísanou formou („Vec: …“, „S úctou“, podpis)?',
    solutionSteps: [
      {
        title: 'Znaky jazykového štýlu v texte B',
        text: 'Text B je oficiálna písomnosť súkromnej osoby adresovaná právnickej osobe (cestovnej kancelárii). Má ustálenú formálnu úpravu úradného listu (odosielateľ, adresát, miesto a dátum, heslo //Vec://, ustálené formulky //Na základe Vášho inzerátu Vás žiadam…//, //Za kladné vybavenie žiadosti Vám vopred ďakujem//, pozdrav //S úctou// a podpis). Ide o **administratívny (úradný) štýl**.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznávajú sa odpovede **administratívny (štýl)**, **úradný (štýl)**, ako aj tvary s predložkou **do administratívneho / do úradného (štýlu)** (prihliada sa na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **administratívny** (**úradný**) **štýl**.'
  },

  // ---------------- Ukážka 8 – Johann Wolfgang Goethe: Utrpenie mladého Werthera
  {
    id: 57,
    code: '57',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Vo **zvýraznenej** časti ukážky 8 prevládajú prvky',
    options: [
      { key: 'A', text: 'opisu.' },
      { key: 'B', text: 'výkladu.' },
      { key: 'C', text: 'charakteristiky.' },
      { key: 'D', text: 'úvahy.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa výlučne na zvýraznený posledný odsek (nie na 4. odsek pred ním!). Werther v ňom hodnotí vlastné slová („nesmierne, hlúpe táraniny“), váha, polemizuje sám so sebou a uvažuje nad svojím sľubom a konaním. Ktorému útvaru zodpovedá takéto subjektívne zamýšľanie sa?',
    solutionSteps: [
      {
        title: 'Rozbor zvýrazneného odseku',
        text: 'Vo zvýraznenom záverečnom odseku Werther subjektívne hodnotí svoje predchádzajúce slová (//„nesmierne, hlúpe táraniny, úbohé abstraktnosti“//), vedie vnútorný dialóg a zamýšľa sa nad vlastnou nerozhodnosťou a rozporom medzi rozumovým predsavzatím a citom (//„A hoci som sa dnes ráno zaprisahal, že k nej nepôjdem…“//). Takéto subjektívne hodnotenie a zamýšľanie sa sú typickými prvkami **úvahy** (**D**).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: '**A, C** – vonkajší opis dievčiny v odseku vôbec nie je a stručné vymenovanie jej duševných vlastností (prvky charakteristiky) sa nachádzalo vo 4. odseku, nie vo zvýraznenom 5. odseku.\n**B** – výklad je objektívny, vecný a logicky vysvetľuje odborné vzťahy bez citového zafarbenia.'
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
    questionText: 'Ktoré tvrdenie o Wertherovi vyplýva z ukážky 8?',
    options: [
      { key: 'A', text: 'Prežíva neopätovanú lásku.' },
      { key: 'B', text: 'Je nešťastne zamilovaný.' },
      { key: 'C', text: 'Vyjadruje obdiv dievčine.' },
      { key: 'D', text: 'Výstižne opisuje dievčinu.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor: odpovedaj presne podľa toho, čo je napísané v ukážke 8 (nie podľa toho, ako sa neskôr skončí celý román!). V tomto liste zo 16. júna píše Werther, že sa má dobre, teší sa a je šťastný. Ako sa v ňom vyjadruje o dievčine, ktorú práve spoznal?',
    solutionSteps: [
      {
        title: 'Čo vyplýva priamo z ukážky 8',
        text: 'V celom liste Werther nadšene **vyjadruje obdiv dievčine**, ktorú spoznal: nazýva ju //„jednou z najroztomilejších stvoričiek“// a //„anjelom“//, obdivuje jej //„čistú dušu, um, dobrotu, rozhodnosť a vyrovnanosť“// (**C**).'
      },
      {
        title: 'Prečo nevyplývajú ostatné možnosti',
        text: '**A, B** – hoci v neskorších častiach Goetheho románu sa Wertherova láska stane nešťastnou a tragickou, **v ukážke 8** o tom ešte niet ani zmienky; naopak, Werther píše: //„mám sa dobre“// a //„Teším sa tomu a som šťastný“//.\n**D** – sám Werther priznáva pravý opak: //„nie som schopný napísať Ti, aká je dokonalá“// a tvrdí, že jeho slová //„nevystihujú ani jedinú črtu jej bytosti“//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 59,
    code: '59',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'V slovnom spojení //jednu z najroztomilejších stvoričiek// sa nachádza',
    options: [
      { key: 'A', text: 'zvukomaľba.' },
      { key: 'B', text: 'nonsens.' },
      { key: 'C', text: 'symbol.' },
      { key: 'D', text: 'zdrobnenina.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa na posledné slovo spojenia: „stvoričiek“ (základný tvar „stvorička“, utvorené príponou -ička od slova „stvora / stvorenie“). Ako sa volajú slová so zjemňujúcou príponou (-ička, -ček, -ko), ktorými vyjadrujeme nežný, láskavý vzťah?',
    solutionSteps: [
      {
        title: 'Určenie zdrobneniny (deminutíva)',
        text: 'Podstatné meno **stvoričiek** (nominatív sg. //stvorička//, utvorené príponou **-ička** od //stvora / stvorenie//) zjemňuje význam a vyjadruje nežný, láskavý citový vzťah hovoriaceho k dievčine – je to **zdrobnenina** (deminutívum).'
      },
      {
        title: 'Vylúčenie ostatných pojmov',
        text: '**A** – //zvukomaľba// (onomatopoja) napodobňuje prírodné alebo pracovné zvuky zoskupením hlások.\n**B** – //nonsens// je zámerný nezmysel využívaný v humornej a autorskej rozprávkovej tvorbe.\n**C** – //symbol// je ustálený konkrétny znak zastupujúci abstraktný pojem (napr. srdce – láska, kríž – utrpenie/viera).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 60,
    code: '60',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'V ktorej časti ukážky 8 priznáva Werther vlastnú neobjektívnosť?',
    options: [
      { key: 'A', text: '//Prečo ti nepíšem? – Spytuješ sa, hoci patríš k učeným ľuďom. Mal si uhádnuť, že sa mám dobre a že… Slovom, nadviazal som známosť, ktorá mi hlbšie zasiahla srdce.//' },
      { key: 'B', text: '//Bude ťažké vyrozprávať Ti poporiadku, ako sa stalo, že som spoznal jednu z najroztomilejších stvoričiek. Teším sa tomu a som šťastný, a preto asi nebudem vedieť všetko pravdivo opísať.//' },
      { key: 'C', text: '//Taká čistá duša a taký um, toľká dobrota a taká rozhodnosť a taká vyrovnanosť v každodennom živote a v práci!//' },
      { key: 'D', text: '//A hoci som sa dnes ráno zaprisahal, že k nej nepôjdem, podchvíľou pristupujem k obloku, aby som pozrel, ako vysoko je ešte slnce.//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Byť neobjektívny znamená nedokázať niečo opísať nestranne, vecne a pravdivo, pretože človeka ovplyvňujú silné city. V ktorom úryvku Werther priamo píše, že pre svoju radosť a šťastie asi nedokáže všetko pravdivo opísať?',
    solutionSteps: [
      {
        title: 'Kde Werther priznáva neobjektívnosť',
        text: 'V možnosti **B** Werther otvorene spája svoje citové rozpoloženie s neschopnosťou podať nestranný, verný obraz skutočnosti: //„Teším sa tomu a som šťastný, a preto asi nebudem vedieť všetko pravdivo opísať.“// Presne tým priznáva vlastnú **neobjektívnosť**.'
      },
      {
        title: 'Čo vyjadrujú ostatné úryvky',
        text: '**A** – vysvetľuje priateľovi dôvod svojho mlčania (novú známosť).\n**C** – nadšene vymenúva cnosti dievčiny (subjektívne sa síce vyjadruje, ale o svojej neobjektívnosti tu nehovorí).\n**D** – priznáva slabú vôľu dodržať ranný sľub, že za ňou nepôjde.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 61,
    code: '61',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktorý typ priraďovacieho súvetia predstavuje nasledujúca veta?\n//Teším sa tomu a som šťastný.//',
    options: [
      { key: 'A', text: 'odporovacie' },
      { key: 'B', text: 'vylučovacie' },
      { key: 'C', text: 'zlučovacie' },
      { key: 'D', text: 'stupňovacie' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si spojku „a“ medzi oboma hlavnými vetami („1. Teším sa tomu“ + „2. som šťastný“) a významový vzťah medzi nimi: odporujú si, vylučujú sa, stupňujú sa, alebo sa len voľne spájajú (zlučujú) ako dva súbežné pocity?',
    solutionSteps: [
      {
        title: 'Určenie typu priraďovacieho súvetia',
        text: 'Súvetie tvoria dve rovnocenné hlavné vety (//1. Teším sa tomu// + //2. som šťastný//), ktoré vyjadrujú dva súčasne prebiehajúce stavy a sú spojené základnou zlučovacou spojkou **a** (bez čiarky). Ide o **zlučovacie** priraďovacie súvetie (**C**; typické spojky: //a, i, aj, ani, najprv – potom//).'
      },
      {
        title: 'Ostatné typy priraďovacích súvetí',
        text: '**A** – //odporovacie//: druhá veta odporuje prvej (spojky //ale, no, lenže, avšak//).\n**B** – //vylučovacie//: platí buď jedna, alebo druhá možnosť (spojky //alebo, buď – alebo, či//).\n**D** – //stupňovacie//: druhá veta zdôrazňuje a stupňuje obsah prvej (spojky //ba, ba aj, nielen – ale aj, dokonca//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 62,
    code: '62',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Koľko určovacích vetných skladov sa nachádza v nasledujúcej vete?\n//Celkom mi zaujala myseľ.//',
    placeholder: 'Napíš počet skladov',
    correctAnswerDisplay: '3 (tri)',
    acceptedAnswers: [
      '3',
      'tri',
      '3 sklady',
      'tri sklady',
      '3 určovacie sklady',
      'tri určovacie sklady',
      '3 určovacie vetné sklady',
      'tri určovacie vetné sklady'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^2$|^dva$|^dve$',
        hint: 'Pozor na najčastejší chyták! Slovo „myseľ“ nie je podmetom vety! Opýtaj sa na sloveso: Kto zaujal? – (ona, dievčina = zamlčaný podmet). Koho/čo zaujala? – myseľ (predmet v akuzatíve)! Preto aj „myseľ“ tvorí so slovesom určovací sklad!'
      },
      {
        pattern: '^1$|^jeden$',
        hint: 'Každý rozvíjací vetný člen tvorí so svojím nadradeným členom jeden určovací sklad. Nájdi prísudok „zaujala“ a spočítaj všetky slová vo vete, ktoré ho (alebo podstatné meno) bližšie určujú!'
      },
      {
        pattern: '^4$|^štyri$|^styri$',
        hint: 'Veta má len 4 slová; prísudok „zaujala“ s nevyjadreným podmetom „(ona)“ tvorí prisudzovací sklad, nie určovací.'
      }
    ],
    hint: 'V slovenčine poznáme tri druhy vetných skladov: prisudzovací (podmet + prísudok), priraďovací (viacnásobný vetný člen) a určovací (nadradený člen + podradený rozvíjací člen). Daj si obrovský pozor na podmet tejto vety: kto zaujal koho? Podmetom je zamlčané „(ona – dievčina)“! Zisti, koľko zvyšných slov rozvíja prísudok „zaujala“ (prípadne slovo „myseľ“).',
    solutionSteps: [
      {
        title: '1. Odhalenie zamlčaného podmetu (pozor na chyták!)',
        text: 'Najprv určíme podmet a prísudok: //Kto zaujal?// → **(ona – spomínaná dievčina)** = **nevyjadrený (zamlčaný) podmet**. //Čo urobila?// → **zaujala** = slovesný **prísudok**. Dvojica //(ona) ↔ zaujala// tvorí **prisudzovací sklad**. Slovo //myseľ// teda **nie je podmet**, ale priamy predmet v akuzatíve (//zaujala koho? čo? – myseľ//)!'
      },
      {
        title: '2. Vypísanie všetkých určovacích vetných skladov',
        text: 'Určovací vetný sklad spája nadradený člen s podradeným rozvíjacím členom. Vo vete sú tri rozvíjacie členy, a preto presne **3 určovacie vetné sklady**:\n1. **zaujala** //(koho? čo?)// ← **myseľ** (prísudok + priamy predmet v akuzatíve),\n2. **zaujala** //(ako? v akej miere?)// ← **celkom** (prísudok + príslovkové určenie miery),\n3. **zaujala / myseľ** //(komu? / čiu?)// ← **mi** (nepriamy predmet v datíve, resp. tzv. privlastňovací datív //„moju myseľ“// – v oboch prípadoch ide o **určovací sklad**).'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa odpoveď **3** alebo **tri** (prípadne **3 sklady / 3 určovacie sklady**; prihliada sa na správny počet).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **3** (**tri** určovacie vetné sklady).'
  },
  {
    id: 63,
    code: '63',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'Vypíšte zo **zvýraznenej** časti ukážky 8 jedno básnické slovo.',
    placeholder: 'Vypíš básnické slovo',
    correctAnswerDisplay: 'slnce',
    acceptedAnswers: ['slnce'],
    commonMistakes: [
      {
        pattern: '^slnko$',
        hint: '„Slnko“ je bežné neutrálne slovo – pozri sa na úplne posledné slovo zvýrazneného odseku a vypíš ho presne v takom básnickom tvare, v akom je v texte!'
      },
      {
        pattern: '^obloku$|^oblok$',
        hint: 'Slovo „oblok“ nie je básnické slovo (poetizmus), ale štylisticky neutrálne spisovné synonymum slova „okno“. Prečítaj si tú istú vetu až do posledného slova!'
      },
      {
        pattern: '^zaprisahal$|^podchvíľou$|^bytosti$',
        hint: 'Toto slovo patrí do bežnej spisovnej (príp. knižnej) slovnej zásoby. Hľadaj na samom konci ukážky básnickú podobu slova „slnko“!'
      }
    ],
    hint: 'Básnické slová (poetizmy) sú slová so slávnostným, umeleckým nádychom, ktoré majú v bežnej reči neutrálny náprotivok (napr. luna – mesiac, vesna – jar, zora – úsvit). Prečítaj si poslednú vetu zvýrazneného odseku až do úplného konca!',
    solutionSteps: [
      {
        title: 'Vyhľadanie básnického slova (poetizmu)',
        text: 'Na samom konci zvýrazneného odseku čítame: //„…podchvíľou pristupujem k obloku, aby som pozrel, ako vysoko je ešte **slnce**.“// Podstatné meno **slnce** je typické **básnické slovo (poetizmus)** – umelecký príznakový náprotivok neutrálneho slova //slnko//.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Slovo **slnce** musí byť vypísané pravopisne správne (na veľkosti začiatočného písmena nezáleží).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **slnce**.'
  },
  {
    id: 64,
    code: '64',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Doplňte do nasledujúcej vety prvú časť literárnovedného termínu pomenúvajúceho typ rozprávača.',
    fillSentenceHtml: 'V ukážke 8 sa uplatnil {{blank}} rozprávač.',
    placeholder: 'Doplň typ rozprávača',
    correctAnswerDisplay: 'priamy (subjektívny)',
    acceptedAnswers: [
      'priamy',
      'subjektívny',
      'priamy rozprávač',
      'subjektívny rozprávač',
      'V ukážke 8 sa uplatnil priamy rozprávač',
      'V ukážke 8 sa uplatnil subjektívny rozprávač'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'personáln|vševediac|vsevediac|autorsk|nepriam|oko kamery',
        hint: 'Pozor! Vševediaci aj personálny rozprávač rozprávajú v 3. osobe (on/ona). V ukážke 8 však rozpráva sám Werther v 1. osobe jednotného čísla („nepíšem, nadviazal som, som šťastný“)!'
      },
      {
        pattern: '^ja$|^ja-rozprávanie$|^ja rozprávanie$',
        hint: 'Ja-rozprávanie je pomenovanie formy rozprávania; pred slovo „rozprávač“ treba doplniť prídavné meno (aký rozprávač zodpovedá ja-rozprávaniu?).'
      }
    ],
    hint: 'Všimni si gramatickú osobu, v ktorej je napísaný celý list: „nadviazal som známosť“, „teším sa“, „poznal som“, „pristupujem k obloku“ (1. osoba jednotného čísla – ja-rozprávanie). Rozprávač je zároveň hlavnou postavou príbehu. Ako sa v literárnej teórii volá takýto typ rozprávača?',
    solutionSteps: [
      {
        title: 'Určenie typu rozprávača',
        text: 'Celá ukážka (list z románu v listoch //Utrpenie mladého Werthera//) je písaná v **1. osobe jednotného čísla** (tzv. //ja-rozprávanie//). Rozprávačom je samotná hlavná postava – mladý Werther, ktorý priamo vyjadruje vlastné zážitky, pocity a myšlienky. Takýto typ rozprávača sa nazýva **priamy rozprávač** (alebo **subjektívny rozprávač**).'
      },
      {
        title: 'Prečo nie vševediaci ani personálny rozprávač',
        text: '• **Vševediaci (autorský)** aj **personálny** rozprávač rozprávajú v **3. osobe** (//on-rozprávanie//).\n• Kľúč NIVaM uznáva odpovede **priamy** aj **subjektívny** (príp. so slovom //rozprávač//; prihliada sa na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **priamy** (alebo **subjektívny**) rozprávač.'
  }
];
