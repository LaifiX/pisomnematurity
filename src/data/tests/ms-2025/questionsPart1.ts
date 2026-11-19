import type { QuestionData } from '../../types';

// Úlohy 01 – 32. Odpovede podľa kľúča NIVaM k testu 25 1403 (Maturita 2025, riadny marcový termín).
// lenient: kľúč hovorí „prihliadať na vecnú správnosť, uznať aj odpoveď s pravopisnými či gramatickými chybami“.

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart1: QuestionData[] = [
  // ---------------- Ukážka 1 – Z webovej poradne
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré pomenovania interiérového zariadenia určeného na beh sú na základe ukážky 1 najvhodnejšie?',
    options: [
      { key: 'A', text: '//bežecký pás// a //bežiaci pás//' },
      { key: 'B', text: '//tréningový pás// a //behací pás//' },
      { key: 'C', text: '//bežiaci pás// a //tréningový pás//' },
      { key: 'D', text: '//chodecký pás// a //behací pás//' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozri sa hneď na prvú vetu odpovede jazykovej poradne v druhom odseku. Ktoré dve pomenovania označuje za jazykovo správne?',
    solutionSteps: [
      {
        title: 'Vyhľadanie informácie v texte',
        text: 'Hneď na začiatku odpovede poradňa jasne uvádza: //„Z jazykového hľadiska sú správne pomenovania bežiaci pás a bežecký pás.“// Ďalej potvrdzuje, že obe možno použiť aj pre prístroj na behanie v interiéri.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'B, D – spojenie //behací pás// poradňa výslovne neodporúča používať, a //chodecký pás// je určený len pre chodcov.\nC – prídavné meno //tréningový// slúži len na prípadné spresnenie trojslovného názvu //tréningový bežiaci pás//, nie ako samostatné pomenovanie //tréningový pás//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Webová poradňa sa v odpovedi v ukážke 1',
    options: [
      { key: 'A', text: 'odvoláva na tradičný jazykovedný časopis.' },
      { key: 'B', text: 'vyjadruje iba k používaniu dvojslovných spojení.' },
      { key: 'C', text: 'stavia zamietavo k používaniu ustálených výrazov.' },
      { key: 'D', text: 'vyhýba pripomienkam používateľov jazyka.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si text v okrúhlej zátvorke uprostred druhého odseku – aké zdroje s rokom vydania, ročníkom a číslom strany poradňa cituje?',
    solutionSteps: [
      {
        title: 'Odkaz v zátvorke',
        text: 'Poradňa v zátvorke odkazuje čitateľov na slovníkový portál a na odborný jazykovedný časopis //Kultúra slova// (//„v Kultúre slova, 2021, roč. 55, č. 1, s. 61“//). Päťdesiaty piaty ročník dokazuje, že ide o tradičný slovenský jazykovedný časopis.'
      },
      {
        title: 'Vylúčenie ostatných možností',
        text: 'B – vyjadruje sa aj k trojslovným a štvorslovným spojeniam (//tréningový bežiaci pás//, //bežecký a chodecký pás//).\nC – ustálené výrazy naopak podporuje a opiera sa o ne.\nD – pripomienkam používateľov sa nevyhýba, priamo na ne reaguje (//„Pri tomto pomenovaní sme sa stretli s námietkami, že bežecký pás sa nepoužíva iba na behanie…“//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'Ukážka 1 sa týka predovšetkým',
    options: [
      { key: 'A', text: 'štylistiky.' },
      { key: 'B', text: 'morfológie.' },
      { key: 'C', text: 'syntaxe.' },
      { key: 'D', text: 'lexikológie.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Premysli si, čo skúmajú jednotlivé jazykovedné disciplíny: sloh a štýly, tvaroslovie (skloňovanie a slovné druhy), skladbu viet, alebo slovnú zásobu, významy slov a tvorenie pomenovaní?',
    solutionSteps: [
      {
        title: 'Čo rieši ukážka 1',
        text: 'Text poradne vysvetľuje, ktoré pomenovanie veci je správne (//bežecký pás//, //bežiaci pás// vs. //behací pás//), aký majú tieto slová a slovné spojenia **význam**, ako sú **motivované** a ako sú spracované v **slovníkoch**.'
      },
      {
        title: 'Jazykovedné disciplíny',
        text: '**Lexikológia** je náuka o slovnej zásobe – skúma slová, viacslovné pomenovania, ich významy a slovníky.\nA – **štylistika** skúma jazykové štýly a slohové postupy.\nB – **morfológia** (tvaroslovie) skúma slovné druhy, ich kategórie a skloňovanie či časovanie.\nC – **syntax** (skladba) skúma vetné členy, vety a súvetia.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré znaky jazykového štýlu nájdeme v ukážke 1?',
    options: [
      { key: 'A', text: 'verejnosť, dialogickosť, variabilnosť' },
      { key: 'B', text: 'variabilnosť, súkromnosť, dialogickosť' },
      { key: 'C', text: 'verejnosť, monologickosť, presnosť' },
      { key: 'D', text: 'presnosť, monologickosť, súkromnosť' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Ukážka je odborným výkladom z verejnej webovej poradne. Zamysli sa: je určená pre širokú verejnosť alebo len do súkromia? Striedajú sa v nej repliky dvoch hovoriacich (dialóg), alebo ide o súvislý výklad (monológ) s presnými údajmi?',
    solutionSteps: [
      {
        title: 'Štýlotvorné znaky náučného (odborného) štýlu',
        text: 'Text webovej jazykovej poradne má znaky **náučného (populárno-náučného) štýlu**:\n1. **verejnosť** – text je uverejnený na internete pre širokú verejnosť (nie je to súkromný list či rozhovor),\n2. **monologickosť** – odpoveď tvorí ucelený súvislý výklad jedného kolektívu odborníkov bez striedania prehovorov (úvodná otázka je len citovaný podnet),\n3. **presnosť** – využíva odborné termíny, presné definície v úvodzovkách a bibliografické citácie.'
      },
      {
        title: 'Vylúčenie nesprávnych možností',
        text: 'Možnosti B a D obsahujú **súkromnosť** (znak hovorového štýlu). Možnosti A a B obsahujú **dialogickosť** a **variabilnosť** (pestrosť a uvoľnenosť typickú pre hovorový či publicistický štýl).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Slovo //všeobecnejší// predstavuje druhý stupeň',
    options: [
      { key: 'A', text: 'pravidelného stupňovania prísloviek.' },
      { key: 'B', text: 'pravidelného stupňovania prídavných mien.' },
      { key: 'C', text: 'nepravidelného stupňovania prísloviek.' },
      { key: 'D', text: 'nepravidelného stupňovania prídavných mien.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Opýtaj sa na slovo „všeobecnejší“: pýtame sa „aký?“ (prídavné meno), alebo „ako?“ (príslovka)? Potom si povedz všetky tri stupne od prvého stupňa a sleduj, či sa mení koreň slova (ako napr. dobrý – lepší), alebo ostáva rovnaký.',
    solutionSteps: [
      {
        title: '1. Určenie slovného druhu',
        text: 'Na slovo //všeobecnejší// (v texte //„vo všeobecnejšom význame“//) sa pýtame otázkou **aký?** (aký význam?) – rozvíja podstatné meno //význam//, ide teda o akostné **prídavné meno**. (Príslovka by sa pýtala //ako?// a znelo by to //všeobecne – všeobecnejšie//.)'
      },
      {
        title: '2. Pravidelné verzus nepravidelné stupňovanie',
        text: 'Stupňujeme: 1. stupeň //všeobecný// → 2. stupeň //všeobecn-ejší// → 3. stupeň //naj-všeobecn-ejší//.\nSlovný základ //všeobecn-// zostáva nezmenený a pridáva sa k nemu bežná prípona //-ejší//. Ide preto o **pravidelné stupňovanie** (pri nepravidelnom sa mení celý koreň slova, napr. //dobrý – lepší//, //malý – menší//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíšte z nasledujúcej vety to slovo, v ktorom v prúde reči dochádza k znelostnej asimilácii/spodobovaniu.\n//Výraz bežecký pás dostatočne plní identifikačnú a komunikačnú funkciu pomenovania tréningového stroja.//',
    placeholder: 'Vypíš jedno slovo z vety',
    correctAnswerDisplay: 'pás',
    acceptedAnswers: ['pás'],
    commonMistakes: [
      {
        pattern: '^výraz$',
        hint: 'Pozor na chyták! Slovo „výraz“ sa končí znelou spoluhláskou z a nasledujúce slovo „bežecký“ sa začína tiež znelou spoluhláskou b – výslovnosť [výraz bežecký] sa teda vôbec nemení.'
      },
      {
        pattern: '^bežecký$',
        hint: 'Slovo „bežecký“ sa končí samohláskou ý a ani v jeho vnútri sa nestretávajú spoluhlásky s rôznou znelosťou.'
      }
    ],
    hint: 'Spodobovanie (znelostná asimilácia) v prúde reči nastáva vtedy, keď sa stretne koncová spoluhláska jedného slova so začiatočnou hláskou ďalšieho slova a prispôsobí sa jej znelosťou. Skontroluj konce slov, ktoré sa končia spoluhláskou („Výraz bežecký“ a „pás dostatočne“), a zisti, kde sa pri plynulom vyslovení zmení neznelá spoluhláska na znelú (alebo naopak)!',
    solutionSteps: [
      {
        title: 'Ako funguje spodobovanie v prúde reči',
        text: 'Keď vyslovujeme slová vo vete plynulo bez prestávky, koncová párová spoluhláska slova sa prispôsobuje začiatočnej hláske nasledujúceho slova:\n• **neznelé párové spoluhlásky:** //p, t, ť, k, ch, f, s, š, c, č//,\n• **znelé párové spoluhlásky:** //b, d, ď, g, h, v, z, ž, dz, dž//.'
      },
      {
        title: 'Kontrola slov vo vete',
        text: 'Väčšina slov vo vete sa končí samohláskou. Spoluhláskou sa končia len dve slová vo vete:\n1. //Výraz bežecký// – koncové **z** je znelé a nasledujúce **b** je tiež znelé → vyslovujeme [víraz bežeckí], žiadna zmena znelosti nenastáva!\n2. //**pás** dostatočne// – koncové **s** v slove //pás// je **neznelé**, ale nasledujúce slovo //dostatočne// sa začína **znelou** spoluhláskou **d**. Neznelé //s// sa preto spodobí na svoj znelý pár **z** a v prúde reči vyslovíme **[páz dostatočňe]**.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Slovo musí byť vypísané pravopisne správne v tvare z vety: **pás**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **pás**.'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Napíšte slovo //chôdza// v tvare genitívu singuláru.',
    placeholder: 'Napíš tvar slova',
    correctAnswerDisplay: 'chôdze',
    acceptedAnswers: [
      'chôdze',
      'bez chôdze',
      'z chôdze',
      'do chôdze',
      'od chôdze',
      'okolo chôdze',
      'počas chôdze',
      'podľa chôdze',
      'okrem chôdze',
      'namiesto chôdze',
      'miesto chôdze',
      'mimo chôdze',
      'uprostred chôdze'
    ],
    commonMistakes: [
      {
        pattern: '^(bez\\s+|z\\s+|do\\s+|od\\s+)?chôdzi$',
        hint: 'Tvar „chôdzi“ patrí do datívu a lokálu (k chôdzi, o chôdzi). Slovo „chôdza“ má v základnom tvare príponu -a po mäkkej spoluhláske dz – skloňuje sa podľa vzoru ulica (bez ulice → bez …).'
      },
      {
        pattern: '^(bez\\s+|z\\s+|do\\s+|od\\s+)?chodze$',
        hint: 'Tvar pádovej prípony máš správne, ale v koreni slova chôdza/chôdze chýba vokáň nad o (ô).'
      }
    ],
    hint: 'Genitív singuláru je 2. pád jednotného čísla – pomôž si pádovou otázkou „bez koho? bez čoho?“. Urči najprv vzor ženského podstatného mena „chôdza“ (končí sa na -a a pred ním stojí mäkká spoluhláska dz).',
    solutionSteps: [
      {
        title: '1. Určenie pádu a čísla',
        text: '**Genitív singuláru** = 2. pád jednotného čísla. Pýtame sa otázkou //Koho? Čoho?// (napr. s pomocnou predložkou //bez koho? bez čoho?//).'
      },
      {
        title: '2. Skloňovací vzor',
        text: 'Podstatné meno //chôdza// je ženského rodu, v nominatíve jednotného čísla je zakončené na samohlásku **-a** a pred ňou stojí mäkká spoluhláska **dz** (//chôdz-a//). Skloňuje sa preto podľa vzoru **ulica** (nie //dlaň//!).\nPorovnajme: //ulica → bez ulic-e//, teda //chôdza → bez **chôdz-e**//. (Tvar //chôdzi// je až datív a lokál: //k ulici, o ulici → k chôdzi, o chôdzi//.)'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Slovo musí byť napísané pravopisne správne (s vokáňom **ô** a koncovým **-e**): **chôdze** (uznáva sa aj s vhodnou predložkou, napr. //bez chôdze//, //z chôdze//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **chôdze**.'
  },
  {
    id: 8,
    code: '08',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'Doplňte správny **jednoslovný** jazykovedný termín do nasledujúcej vety.',
    fillSentenceHtml: 'Podľa vzájomného vzťahu medzi ich významami slovesá //bežať// a //utekať// sú {{blank}}.',
    placeholder: 'Doplň termín',
    correctAnswerDisplay: 'synonymá',
    acceptedAnswers: [
      'synonymá',
      'synonymami',
      'synonymné',
      'rovnoznačné',
      'rovnoznačnými',
      'synonymum',
      'synonymom',
      'sú synonymá',
      'sú synonymami',
      'sú synonymné',
      'sú rovnoznačné',
      'slovesá bežať a utekať sú synonymá',
      'Podľa vzájomného vzťahu medzi ich významami slovesá bežať a utekať sú synonymá',
      'Podľa vzájomného vzťahu medzi ich významami slovesá bežať a utekať sú synonymami',
      'Podľa vzájomného vzťahu medzi ich významami slovesá bežať a utekať sú synonymné',
      'Podľa vzájomného vzťahu medzi ich významami slovesá bežať a utekať sú rovnoznačné'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'antonym|opozit|protiklad',
        hint: 'Antonymá (opozitá) sú slová s opačným významom (napr. bežať – stáť). Slovesá „bežať“ a „utekať“ však pomenúvajú ten istý dej – majú rovnaký alebo blízky význam.'
      },
      {
        pattern: 'homonym',
        hint: 'Homonymá sú slová, ktoré rovnako znejú, ale majú odlišný význam (napr. koruna stromu – kráľovská koruna). Tu máme dve rôzne znejúce slová s rovnakým významom.'
      }
    ],
    hint: 'Porovnaj významy slovies „bežať“ a „utekať“ (napr. vo vete „Chlapec beží / uteká domov“). Znejú a píšu sa odlišne, ale znamenajú to isté. Ako sa jedným odborným slovom volajú slová s rovnakým alebo blízkym významom?',
    solutionSteps: [
      {
        title: 'Porovnanie významu slov',
        text: 'Slovesá //bežať// a //utekať// majú rozdielnu zvukovú podobu, ale pomenúvajú tú istú činnosť – majú **rovnaký alebo veľmi blízky význam**.'
      },
      {
        title: 'Jazykovedný termín',
        text: 'Slová s rovnakým alebo blízkym významom sa nazývajú **synonymá** (po slovensky **rovnoznačné** slová).\nPre porovnanie: slová s opačným významom sú //antonymá (opozitá)// a rovnako znejúce slová s odlišným významom sú //homonymá//.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznáva sa odpoveď **synonymá** (aj v iných tvaroch zapojených do vety: **synonymami**, **synonymné**, **rovnoznačné**), pričom sa prihliada na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **synonymá** (rovnoznačné).'
  },

  // ---------------- Ukážka 2 – Haiku
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorý spoločný prvok majú texty A a D v ukážke 2?',
    options: [
      { key: 'A', text: 'Básnickú otázku.' },
      { key: 'B', text: 'Prekvapivý posledný verš.' },
      { key: 'C', text: 'Sylabický verš.' },
      { key: 'D', text: 'Rovnakú stopovú organizáciu.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si pozorne prvé dva verše a potom tretí verš v texte A aj v texte D. Čo by čitateľ očakával od muchy v lekárničke alebo od úslovia „Po nás potopa?“, a aký zvrat prinesie záverečný verš?',
    solutionSteps: [
      {
        title: 'Pointa v poslednom verši',
        text: '• **Text A:** Mucha zavretá v lekárničke (plnej liekov a chemikálií) neumrela na otravu ani ju nik nezabil, ale nečakane //„umrela na starobu“//.\n• **Text D:** Známe úslovie //„Po nás potopa?“// autor v poslednom verši prekvapivo prevráti naruby: potopa nepríde až po nás, //„je však pred nami“//.\nObe básne sú teda vybudované na **prekvapivom poslednom verši (pointe)**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – básnická otázka sa nachádza iba v texte D (//Po nás potopa?//), v texte A otázka vôbec nie je.\nC – sylabický verš vyžaduje pravidelný (rovnaký) počet slabík vo veršoch a rým, čo v týchto nerýmovaných trojveršiach neplatí.\nD – texty nemajú rovnakú ani pravidelnú stopovú organizáciu (trochejov či daktylov): text A je písaný voľným veršom (6 – 4 – 7 slabík) a text D dodržiava slabičnú schému haiku (5 – 7 – 5).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Z ukážky 2 vyplýva, že haiku je',
    options: [
      { key: 'A', text: 'satirická rýmovaná báseň.' },
      { key: 'B', text: 'baladická báseň.' },
      { key: 'C', text: 'báseň v próze.' },
      { key: 'D', text: 'krátka lyrická báseň.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa na vonkajšiu podobu a obsah všetkých štyroch textov v ukážke 2: rýmujú sa? Sú napísané ako súvislý odsek (próza), alebo vo veršoch? Majú tragický dej balady, alebo krátko zachytávajú okamih, náladu a myšlienku?',
    solutionSteps: [
      {
        title: 'Znaky haiku podľa ukážky',
        text: 'Všetky štyri texty v ukážke 2 tvoria len tri krátke verše, nemajú súvislý epický dej, ale zachytávajú chvíľkový postreh, obraz, náladu či úvahu lyrického subjektu. Haiku je teda **krátka lyrická báseň**.'
      },
      {
        title: 'Vylúčenie ostatných možností',
        text: 'A – žiadna zo štyroch básní v ukážke nie je rýmovaná (a text A ani nie je satirický).\nB – balada je epický (príp. lyricko-epický) žáner s pochmúrnym dejom a tragickým záverom.\nC – texty nie sú písané v próze (do súvislých riadkov odseku), ale sú členené do veršov.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Klasická japonská báseň haiku sa skladá z troch veršov s počtami slabík 5 – 7 – 5. Ktorý text z ukážky 2 túto požiadavku spĺňa?',
    options: [
      { key: 'A', text: 'Haiku v texte A' },
      { key: 'B', text: 'Haiku v texte B' },
      { key: 'C', text: 'Haiku v texte C' },
      { key: 'D', text: 'Haiku v texte D' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Vytlieskaj alebo spočítaj slabiky v každom verši (jedna slabika = jedna samohláska, dvojhláska ia/ie/iu/ô alebo slabikotvorné r, l). Pozor: neslabičné predložky ako „v“ netvoria samostatnú slabiku, zatiaľ čo „po“, „na“, „u“, „pred“ majú samohlásku, takže tvoria slabiku!',
    solutionSteps: [
      {
        title: 'Spočítanie slabík v texte D',
        text: 'Rozdeľme na slabiky **text D**:\n1. verš: //Po – nás – po – to – pa?// → **5 slabík**\n2. verš: //To – by – sa – nám – ho – di – lo,// → **7 slabík**\n3. verš: //je – však – pred – na – mi.// → **5 slabík**\nSchéma **5 – 7 – 5** presne zodpovedá klasickému japonskému haiku.'
      },
      {
        title: 'Kontrola ostatných textov',
        text: '• **Text A:** //V mo-jej le-kár-nič-ke// (6) / //zim-ná mu-cha// (4) / //u-mre-la na sta-ro-bu// (7) → 6 – 4 – 7.\n• **Text B:** //Vče-la!// (2) / //Čo na mňa zí-zaš?// (5) / //Veď ja nie som kvet!// (5, dvojhláska //ie// tvorí jednu slabiku) → 2 – 5 – 5.\n• **Text C:** //U nás do-ma po na-šom:// (7) / //Hai-ku, ha-ieč-ku,// (5) / //hai-ku ze-le-ný…// (5) → 7 – 5 – 5.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorá charakteristika platí pre text B?',
    options: [
      { key: 'A', text: 'Dodržiava sa v ňom rytmicko-syntaktický paralelizmus.' },
      { key: 'B', text: 'Využíva sa v ňom technika prúdu autorovho vedomia.' },
      { key: 'C', text: 'Jeho kompozičným prvkom je nespoľahlivosť v rozprávaní.' },
      { key: 'D', text: 'Jeho najvýraznejším znakom je opakujúci sa veršový presah.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Nenechaj sa vyľakať cudzím názvom! „Rytmicko-syntaktický paralelizmus“ jednoducho znamená, že každý jeden verš tvorí zároveň jednu ukončenú vetu (koniec verša = koniec vety). Naopak „veršový presah“ nastáva vtedy, keď veta nekončí na konci verša, ale pokračuje do ďalšieho. Pozri sa na znamienka na konci veršov v texte B!',
    solutionSteps: [
      {
        title: 'Čo je rytmicko-syntaktický paralelizmus',
        text: '**Rytmicko-syntaktický paralelizmus** znamená súlad medzi veršovým (rytmickým) a vetným (syntaktickým) členením básne – teda **jeden verš sa kryje s jednou ukončenou vetou** (alebo uceleným vetným úsekom).\nPozrime sa na **text B**:\n1. verš: //Včela!// (ukončená veta)\n2. verš: //Čo na mňa zízaš?// (ukončená veta)\n3. verš: //Veď ja nie som kvet!// (ukončená veta)\nKaždý verš tvorí presne jednu samostatnú vetu – paralelizmus je stopercentne dodržaný.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'D – **veršový presah** (enjambement) je pravý opak paralelizmu (keď veta presahuje bez ukončenia do ďalšieho verša, ako v texte A). V texte B nie je ani jeden presah.\nB, C – **prúd vedomia** (voľné plynutie asociácií bez interpunkcie) a **nespoľahlivý rozprávač** sú postupy moderného prozaického rozprávania, nie tejto krátkej básne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 13,
    code: '13',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Celý názov textu D je',
    options: [
      { key: 'A', text: '//Skeptické haiku.//' },
      { key: 'B', text: '//Idealistické haiku.//' },
      { key: 'C', text: '//Optimistické haiku.//' },
      { key: 'D', text: '//Materialistické haiku.//' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Akú náladu a postoj k budúcnosti vyjadruje text D („Po nás potopa? To by sa nám hodilo, je však pred nami.“)? Je radostný (optimistický), prikrášľujúci skutočnosť (idealistický), zameraný na peniaze a hmotu (materialistický), alebo pochybovačný a obávajúci sa zlého vývoja (skeptický)?',
    solutionSteps: [
      {
        title: 'Vyznenie textu D',
        text: 'V texte D lyrický subjekt konštatuje, že „potopa“ (obraz skazy či vážnych problémov) nepríde až po nás, ale čaká priamo nás (//„je však pred nami“//). Takýto triezvy, pochybovačný a nedôverčivý pohľad na budúcnosť sa nazýva **skepsa** – prídavné meno je **skeptický** (//Skeptické haiku//).'
      },
      {
        title: 'Význam ostatných slov',
        text: 'B – **idealistický**: verí vo vznešené ideály, prikrášľuje skutočnosť.\nC – **optimistický**: vidí budúcnosť ružovo a radostne (presný opak textu D).\nD – **materialistický**: založený na hmote alebo zameraný na majetok a peniaze.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Doplňte chýbajúcu časť literárnovedného termínu do nasledujúcej vety.',
    fillSentenceHtml: 'Haiku v texte C obsahuje narážku na ľudovú {{blank}}.',
    placeholder: 'Doplň chýbajúce slovo',
    correctAnswerDisplay: 'pieseň / slovesnosť',
    acceptedAnswers: [
      'pieseň',
      'slovesnosť',
      'piesne',
      'slovesnosti',
      'ľudovú pieseň',
      'ľudovú slovesnosť',
      'ľudová pieseň',
      'ľudová slovesnosť',
      'Haiku v texte C obsahuje narážku na ľudovú pieseň',
      'Haiku v texte C obsahuje narážku na ľudovú slovesnosť'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'tvorb',
        hint: 'Pozor! Spojenie „ľudová tvorba“ kľúč neuznáva, lebo nie je presným literárnovedným termínom (zahŕňa aj výšivky, tanec či rezbárstvo). Pomenuj konkrétny žáner, ktorý si pri slovách „Hájku, háječku, hájku zelený…“ spievame, alebo celé ústne slovesné umenie ľudu!'
      }
    ],
    hint: 'Prečítaj si nahlas verše textu C: „Haiku, haiečku, / haiku zelený…“. Pripomínajú ti známu slovenskú melódiu „Hájku, háječku, hájku zelený…“? Ako sa v literatúre volá tento spievaný žáner (ľudová …) alebo súhrnne celé ústne slovesné umenie ľudu (ľudová …)?',
    solutionSteps: [
      {
        title: 'Odhalenie narážky (alúzie) v texte C',
        text: 'Ján Štrasser sa v texte C vtipne pohral so zvukovou podobnosťou cudzieho slova //haiku// a domáceho slova //hájik (hájku)//. Verše //„Haiku, haiečku, / haiku zelený…“// sú priamou narážkou na známu slovenskú **ľudovú pieseň** //„Hájku, háječku, hájku zelený…“//.'
      },
      {
        title: 'Literárnovedný termín a hodnotenie kľúča',
        text: 'Do vety patrí slovo **pieseň** (termín //ľudová pieseň//) alebo širší nadradený pojem **slovesnosť** (termín //ľudová slovesnosť//). Prihliada sa na vecnú správnosť.\n**Pozor:** Kľúč výslovne neuznáva odpoveď //tvorbu (ľudová tvorba)//, pretože nejde o literárnovedný termín.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **pieseň** (alebo **slovesnosť**).'
  },
  {
    id: 15,
    code: '15',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Vypíšte z ukážky 2 to sloveso, ktorému zodpovedajú morfologické kategórie:\n2. osoba, singulár, prítomný čas, oznamovací spôsob, nedokonavý vid.',
    placeholder: 'Vypíš sloveso z ukážky',
    correctAnswerDisplay: 'zízaš',
    acceptedAnswers: ['zízaš'],
    commonMistakes: [
      {
        pattern: '^zízať$',
        hint: 'Sloveso si našiel/našla správne, ale vypíš ho presne v tom tvare, v akom stojí v texte ukážky 2 (teda v 2. osobe jednotného čísla, nie v neurčitku)!'
      },
      {
        pattern: '^(nie\\s+)?som$',
        hint: 'Tvar „(nie) som“ je v 1. osobe jednotného čísla (ja nie som). Hľadaj sloveso v 2. osobe jednotného čísla – teda tvar, ku ktorému si vieš doplniť zámeno „ty“!'
      }
    ],
    hint: 'Najrýchlejšia pomôcka: 2. osoba singuláru v prítomnom čase znamená, že si pred sloveso vieš dosadiť zámeno „ty“ (ty niečo teraz robíš). Prejdi krátke texty A – D a nájdi jediné takéto sloveso!',
    solutionSteps: [
      {
        title: 'Hľadanie slovesa v ukážke 2',
        text: 'Prejdime všetky slovesné tvary v textoch A až D:\n• //umrela// (text A) – 3. osoba, minulý čas, dokonavý vid,\n• //**zízaš**// (text B: //„Čo na mňa zízaš?“//) – **(ty) zízaš**,\n• //nie som// (text B) – 1. osoba (//ja//),\n• //by sa hodilo// (text D) – 3. osoba, podmieňovací spôsob,\n• //je// (text D) – 3. osoba (//ona – potopa je//).'
      },
      {
        title: 'Overenie všetkých kategórií slovesa zízaš',
        text: 'Sloveso **zízaš**: **2. osoba** (//ty//), **singulár** (jednotné číslo), **prítomný čas** (práve teraz zízaš), **oznamovací spôsob** (aj v opytovacej vete stojí sloveso v oznamovacom spôsobe – nejde o rozkaz //zízaj!// ani o podmienku //zízal by si//) a **nedokonavý vid** (pýtame sa //čo robíš?// – dej prebieha a nie je ukončený).\nSlovo treba vypísať pravopisne správne s mäkkým dlhým **í**: **zízaš**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **zízaš**.'
  },
  {
    id: 16,
    code: '16',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Doplňte do nasledujúcej vety **jednoslovný** jazykovedný termín.',
    fillSentenceHtml: 'Cudzie slovo //haiku// nemá v slovenčine žiadny skloňovací vzor, teda je {{blank}}.',
    placeholder: 'Doplň termín',
    correctAnswerDisplay: 'nesklonné',
    acceptedAnswers: [
      'nesklonné',
      'nesklonným',
      'nesklonný',
      'neohybné',
      'neohybným',
      'neohybný',
      'je nesklonné',
      'je neohybné',
      'Cudzie slovo haiku nemá v slovenčine žiadny skloňovací vzor, teda je nesklonné',
      'Cudzie slovo haiku nemá v slovenčine žiadny skloňovací vzor, teda je nesklonným',
      'Cudzie slovo haiku nemá v slovenčine žiadny skloňovací vzor, teda je neohybné',
      'Cudzie slovo haiku nemá v slovenčine žiadny skloňovací vzor, teda je neohybným'
    ],
    lenient: true,
    hint: 'Vyskúšaj si dať slovo „haiku“ do rôznych pádov: toto je haiku, bez haiku, o haiku, čítam haiku (rovnako ako slová menu, tabu či alibi). Keď sa slovo vôbec neskloňuje, ako ho v gramatike jedným slovom nazývame?',
    solutionSteps: [
      {
        title: 'Cudzie podstatné mená zakončené na -u',
        text: 'Prevzaté podstatné mená stredného rodu zakončené na samohlásku //-u// (napr. //haiku, menu, tabu, tofu, tiramisu//) nemajú v slovenčine pádové prípony – vo všetkých pádoch zostávajú v nezmenenom tvare (//z haiku, v haiku, o haiku//).'
      },
      {
        title: 'Gramatický termín',
        text: 'Podstatné meno, ktoré sa neskloňuje a nezaradíme ho k žiadnemu skloňovaciemu vzoru, je **nesklonné** (kľúč uznáva aj termín **neohybné**, aj s prípadnou pravopisnou či gramatickou odchýlkou).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **nesklonné** (neohybné).'
  },

  // ---------------- Ukážka 3 – Jedinečný prístroj vo Zvolene
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré tvrdenie o 3D CT skeneri je podľa ukážky 3 pravdivé?',
    options: [
      { key: 'A', text: 'Môžu sa pomocou neho selektovať stromy vhodné na výrub.' },
      { key: 'B', text: 'Dokáže spoľahlivo zistiť vnútorné kazy v guľatine z ihličnanov.' },
      { key: 'C', text: 'Je jedinečný svojím použitím na všetky druhy našich drevín.' },
      { key: 'D', text: 'Je unikátny v porovnaní s ostatnými podobnými prístrojmi.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si koniec druhého a začiatok tretieho odseku: koľko podobných skenerov je vo svete a čím sa ten zvolenský líši od všetkých ostatných?',
    solutionSteps: [
      {
        title: 'Doklad v texte',
        text: 'V druhom odseku čítame: //„Takýchto CT prístrojov je iba 15 na svete, slovenský skener je jedinečný aplikáciou na listnaté stromy.“// A v treťom odseku vedúci centra dodáva: //„Je unikátny tým, že vytvára aplikácie na optimálne využitie listnatej guľatiny. Všetky nasadené CT skenery na svete pracujú s ihličnatou guľatinou.“// Zvolenský skener je teda **unikátny v porovnaní s ostatnými podobnými prístrojmi**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – prístroj stojí s linkou v centre vo Zvolene a skenuje už spílenú //drevnú guľatinu//, nevyberá stojace stromy v lese na výrub.\nB, C – nie je určený na ihličnany ani na všetky dreviny, špecializuje sa práve na **listnaté** drevo.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré tvrdenie __nevyplýva__ z ukážky 3?',
    options: [
      { key: 'A', text: 'Národné lesnícke centrum vo Zvolene je nadradené komplexu LignoSilva.' },
      { key: 'B', text: 'Tomáš Gergeľ je vedúcim vývoja v Národnom lesníckom centre vo Zvolene.' },
      { key: 'C', text: 'Z rôznych druhov dreva môže byť vo Zvolene skenované napríklad dubové.' },
      { key: 'D', text: '3D CT skener je cenným prírastkom biotechnologického parku vo Zvolene.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozor, hľadáš tvrdenie, ktoré z textu „nevyplýva“! Pozorne si skontroluj presnú pracovnú funkciu Tomáša Gergeľa v treťom odseku.',
    solutionSteps: [
      {
        title: 'Kontrola funkcie Tomáša Gergeľa',
        text: 'V treťom odseku sa píše, že skener prevádzkuje //Centrum excelentnosti lesnícko-drevárskeho komplexu LignoSilva Národného lesníckeho centra (NLC) vo Zvolene// a Tomáš Gergeľ je uvedený ako //„vedúci centra“//. Nikde v texte sa nepíše, že by bol **vedúcim vývoja** v Národnom lesníckom centre – toto tvrdenie z ukážky **nevyplýva**.'
      },
      {
        title: 'Overenie zvyšných tvrdení (z textu vyplývajú)',
        text: 'A – vyplýva zo samotného názvu inštitúcie (komplex LignoSilva patrí pod Národné lesnícke centrum).\nC – vyplýva z toho, že sa skenuje listnaté drevo, z ktorého sa vyrábajú aj //dubové sudy// (dub je listnatý strom).\nD – skener sa nachádza v biotechnologickom parku vo Zvolene, je unikátny a s linkou stál 4,5 milióna eur.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_3',
    questionText: 'Na základe ukážky 3 možno tvrdiť, že jej autor v titulku využil',
    options: [
      { key: 'A', text: 'anaforu.' },
      { key: 'B', text: 'nonsens.' },
      { key: 'C', text: 'metaforu.' },
      { key: 'D', text: 'podobenstvo.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'V titulku sa píše: „Neuveríte, akých pacientov skenuje toto ‚CT-čko‘!“ Koho autor nazval slovom „pacienti“ a na základe čoho preniesol toto lekárske pomenovanie na drevo?',
    solutionSteps: [
      {
        title: 'Obrazné pomenovanie v titulku',
        text: 'V medicíne prístroj počítačovej tomografie (CT) vyšetruje chorých ľudí – **pacientov**. Autor článku preniesol slovo //pacienti// na kmene stromov (drevnú guľatinu), pretože skener podobne ako lekár „vyšetruje“ ich vnútro a hľadá v nich skryté chyby.\nPrenesenie významu na základe **vonkajšej alebo funkčnej podobnosti** (vrátane poľudštenia/personifikácie) sa nazýva **metafora**.'
      },
      {
        title: 'Ostatné pojmy',
        text: 'A – **anafora**: opakovanie rovnakých slov na začiatku po sebe idúcich veršov alebo viet.\nB – **nonsens**: zámerný nezmysel založený na hre s nelogickosťou.\nD – **podobenstvo** (parabola): epický príbeh s mravným ponaučením v druhom pláne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 20,
    code: '20',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Čo majú spoločné zvýraznené slová //technológia//, //excelentnosť//, //hodnota// z ukážky 3?',
    options: [
      { key: 'A', text: 'Sú to konkrétne podstatné mená.' },
      { key: 'B', text: 'Sú to abstraktné podstatné mená.' },
      { key: 'C', text: 'Sú to podstatné mená ženského rodu skloňujúce sa podľa rovnakého vzoru.' },
      { key: 'D', text: 'Sú to podstatné mená ženského rodu skloňujúce sa podľa dvoch rôznych vzorov.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Najprv sa zamysli: vieš sa „technológie“, „excelentnosti“ alebo „hodnoty“ fyzicky dotknúť ako predmetu (konkrétne podstatné meno), alebo ide o nehmotné pojmy a vlastnosti (abstraktné)? Pre kontrolu si urči aj vzor každého z týchto troch slov!',
    solutionSteps: [
      {
        title: '1. Konkrétne verzus abstraktné podstatné mená',
        text: '• **Konkrétne** (hmotné) podstatné mená pomenúvajú osoby, zvieratá a predmety, ktoré vnímame zmyslami a môžeme sa ich dotknúť (napr. //skener, strom, sud//).\n• **Abstraktné** (nehmotné) podstatné mená pomenúvajú nehmotné pojmy, vlastnosti, deje a stavy. Slová //technológia// (postup), //excelentnosť// (výnimočnosť, vlastnosť) a //hodnota// (význam, miera kvality) sú všetky tri **abstraktné podstatné mená**.'
      },
      {
        title: '2. Kontrola skloňovacích vzorov (prečo neplatia C a D)',
        text: 'Všetky tri slová sú síce ženského rodu, no každé sa skloňuje podľa **iného** vzoru:\n• //technológia// (cudzie na //-ia//, bez //technológie//) → vzor **ulica**,\n• //excelentnosť// (zakončené na spoluhlásku, bez //excelentnosti//) → vzor **kosť**,\n• //hodnota// (zakončené na //-a// po tvrdej spoluhláske //t//, bez //hodnoty//) → vzor **žena**.\nSkloňujú sa teda podľa **troch** rôznych vzorov, nie podľa jedného (C) ani podľa dvoch (D).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 21,
    code: '21',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Slová //biotechnologický//, //tomografia//, //skener// zaraďujeme',
    options: [
      { key: 'A', text: 'k odborným výrazom.' },
      { key: 'B', text: 'k slangovým slovám.' },
      { key: 'C', text: 'k eufemizmom.' },
      { key: 'D', text: 'k archaizmom.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'V akej oblasti sa používajú slová „biotechnologický“, „tomografia“ a „skener“? Sú to presné pomenovania z vedy a techniky, nespisovné študentské výrazy, zjemňujúce slová, alebo zastarané slová?',
    solutionSteps: [
      {
        title: 'Zaradenie v slovnej zásobe',
        text: 'Slová //biotechnologický//, //tomografia// a //skener// presne a jednoznačne pomenúvajú pojmy a zariadenia z oblasti vedy, medicíny a techniky. Patria teda k **odborným výrazom (termínom)**.'
      },
      {
        title: 'Vysvetlenie ostatných pojmov',
        text: 'B – **slangové slová**: nespisovné slová záujmovej alebo profesijnej skupiny (napr. //matika, slovina, komp//; v titulku ukážky má blízko k hovorovosti len úvodzovkové //„CT-čko“//).\nC – **eufemizmy**: zjemňujúce pomenovania nepríjemných javov (napr. //usnúť naveky// namiesto //zomrieť//).\nD – **archaizmy**: zastarané slová, ktoré už nahradil modernejší výraz (napr. //lučba// namiesto //chémia//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 22,
    code: '22',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Doplňte do nasledujúcej vety **jednoslovný** termín.',
    fillSentenceHtml: 'V ukážke 3 sa v úvodzovkách nachádza {{blank}} Tomáša Gergeľa.',
    placeholder: 'Doplň jednoslovný termín',
    correctAnswerDisplay: 'citát / výrok / výpoveď',
    acceptedAnswers: [
      'citát',
      'citácia',
      'výrok',
      'výpoveď',
      'prehovor',
      'replika',
      'nachádza citát',
      'nachádza citácia',
      'nachádza výrok',
      'nachádza výpoveď',
      'nachádza prehovor',
      'nachádza replika',
      'V ukážke 3 sa v úvodzovkách nachádza citát Tomáša Gergeľa',
      'V ukážke 3 sa v úvodzovkách nachádza citácia Tomáša Gergeľa',
      'V ukážke 3 sa v úvodzovkách nachádza výrok Tomáša Gergeľa',
      'V ukážke 3 sa v úvodzovkách nachádza výpoveď Tomáša Gergeľa',
      'V ukážke 3 sa v úvodzovkách nachádza prehovor Tomáša Gergeľa',
      'V ukážke 3 sa v úvodzovkách nachádza replika Tomáša Gergeľa'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'priama\\s+re[cč]',
        hint: 'Spojenie „priama reč“ je síce vecne blízke, ale má dve slová! Zadanie zvýraznene žiada doplniť jednoslovný termín – ako jedným slovom nazveme doslovne uvedené slová iného človeka v článku?'
      }
    ],
    hint: 'V treťom odseku novinár od slova do slova uvádza v úvodzovkách to, čo povedal vedúci centra Tomáš Gergeľ. Pozor: „priama reč“ sú dve slová, no zadanie pýta jednoslovný termín!',
    solutionSteps: [
      {
        title: 'Doslovné uvedenie slov v publicistickom texte',
        text: 'V treťom odseku sú v úvodzovkách doslovne zaznamenané vyjadrenia vedúceho centra Tomáša Gergeľa. Keďže zadanie žiada **jednoslovný** termín (nestačí dvojslovné //priama reč//), správnym pomenovaním je **citát** (príp. **výrok** alebo **výpoveď**).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznávajú sa odpovede **citát**, **citácia**, **výrok**, **výpoveď**, **prehovor** aj **replika** (aj s prípadnou pravopisnou odchýlkou alebo zapojené do vety).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **citát** (príp. **výrok**, **výpoveď**, **prehovor**).'
  },
  {
    id: 23,
    code: '23',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré interpunkčné znamienko slúži v ukážke 3 na vytváranie dojmu senzácie/rozruchu?',
    placeholder: 'Napíš názov znamienka',
    correctAnswerDisplay: 'výkričník (!)',
    acceptedAnswers: [
      'výkričník',
      'vykricnik',
      'výkričnik',
      'vykričnik',
      'vykričník',
      'vykricník',
      'výkricnik',
      'výkricník',
      'víkričník',
      'vikričník',
      'vikricnik',
      'výkryčník',
      'vykryčník',
      'vykrycnik',
      'výkričníkom',
      'vykricnikom',
      'výkričníky',
      'vykricniky',
      'znamienko výkričník',
      'znamienko vykricnik',
      'znamienko vykričnik',
      'znamienko vykričník',
      'znamienko výkričnik',
      'interpunkčné znamienko výkričník',
      'interpunkčné znamienko vykričnik',
      'interpunkcne znamienko vykricnik',
      '!',
      'znamienko !',
      'interpunkčné znamienko !',
      'výkričník (!)',
      'výkričník !',
      'vykricnik (!)',
      'vykricnik !'
    ],
    commonMistakes: [
      {
        pattern: '^(\\?|ot[aá]znik)',
        hint: 'Otáznik sa v titulku vôbec nenachádza! Pozri sa na úplný koniec titulku a tiež na koniec prvej vety článku – aké znamienko tam autor použil na vyvolanie úžasu?'
      },
      {
        pattern: '[uú]vodzovk|„|“|"',
        hint: 'Úvodzovky pri slove „CT-čko“ len naznačujú prenesený/hovorový výraz a v 3. odseku oddeľujú citát. Senzáciu a zvolanie na konci titulku aj prvej vety vytvára iné znamienko!'
      }
    ],
    hint: 'Pozri sa na záver titulku článku a na záver prvej vety prvého odseku ukážky 3. Ktoré interpunkčné znamienko tam autor použil na zvýšenie napätia a vytvorenie dojmu senzácie?',
    solutionSteps: [
      {
        title: 'Znamienko v titulku a v úvode článku',
        text: 'Bulvárne ladený titulok //„Neuveríte, akých pacientov skenuje toto ‚CT-čko‘**!**“// aj úvodná veta //„Veľký stroj, ešte väčšia pomoc**!**“// sa končia **výkričníkom (!)**.\nVýkričník v publicistike zdôrazňuje zvolanie, prekvapenie a slúži na upútanie pozornosti čitateľa – vytvára dojem senzácie a rozruchu.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznáva sa slovné pomenovanie **(znamienko) výkričník** aj samotný grafický znak **!** (pri slovnom zápise sa prihliada na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **výkričník** (alebo **!**).'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Pomenujte vetný člen zvýraznený v nasledujúcej vete.\n//Tu sa používa najkvalitnejšie **drevo**.//',
    placeholder: 'Napíš názov vetného člena',
    correctAnswerDisplay: 'podmet',
    acceptedAnswers: ['podmet', 'subjekt', 'vyjadrený podmet', 'gramatický podmet'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'predmet',
        hint: 'Pozor, toto je najčastejší maturitný chyták! Vo vete nie je činné sloveso „niekto používa drevo“, ale zvratný trpný tvar „sa používa“. Opýtaj sa v 1. páde: „Kto? Čo sa tu používa?“ – drevo! Skús si namiesto „drevo“ dosadiť ženský rod „guľatina“: povieme „Tu sa používa guľatina“ (1. pád), nie „guľatinu“ (4. pád)!'
      }
    ],
    hint: 'Daj si obrovský pozor, aby si sa nenechal(a) nachytať na predmet! Vo vete je zvratný trpný tvar slovesa „sa používa“ (nevieme, kto ho používa). Skús si namiesto slova stredného rodu „drevo“ dosadiť podstatné meno ženského rodu „guľatina“: povieme „Tu sa používa najkvalitnejšia guľatina“ (nominatív – kto? čo?), alebo „guľatinu“ (akuzatív – koho? čo?)? Ktorý hlavný vetný člen stojí v nominatíve?',
    solutionSteps: [
      {
        title: '1. Prečo nejde o predmet (ako odhaliť chyták)',
        text: 'Pri strednom rode (//drevo//) vyzerá 1. pád (nominatív) a 4. pád (akuzatív) rovnako, a preto sa žiaci často pomýlia:\n• Keby veta znela //Majstri používajú drevo//, pýtali by sme sa: //Kto?// → //majstri// (podmet), //používajú čo?// → //drevo// (predmet v akuzatíve).\n• Lenže naša veta má **zvratnú trpnú (pasívnu) konštrukciu** //sa používa//! Overme si pád jednoduchou pomôckou – nahraďme //drevo// slovom ženského rodu //guľatina//: povieme //Tu sa používa najkvalitnejšia **guľatina**// (1. pád – nominatív), určite nie //guľatinu// (4. pád)!'
      },
      {
        title: '2. Určenie vetného člena',
        text: 'Pýtame sa otázkou 1. pádu: **Kto? Čo** sa tu používa? → //(najkvalitnejšie) **drevo**//.\nPodstatné meno //drevo// v nominatíve tvorí so slovesom //sa používa// prisudzovací sklad (//drevo ↔ sa používa//), je to teda **podmet** (odborne **subjekt**).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Uznáva sa odpoveď **podmet** aj medzinárodný termín **subjekt** (prihliada sa na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **podmet** (subjekt).'
  },

  // ---------------- Ukážka 4 – Realitný trh
  {
    id: 25,
    code: '25',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Podľa ukážky 4 je na predaj',
    options: [
      { key: 'A', text: 'veľkometrážny byt v novostavbe s veľkým šatníkom.' },
      { key: 'B', text: 'nedokončený byt s priestranným balkónom.' },
      { key: 'C', text: 'nehnuteľnosť na najvyššom poschodí s podzemným parkovaním.' },
      { key: 'D', text: 'lukratívna nehnuteľnosť vyobrazená na fotografii.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Čo znamená v inzeráte slovo „holobyt“, akú rozlohu má balkón a čo sa na konci inzerátu píše o priloženej fotografii?',
    solutionSteps: [
      {
        title: 'Overenie údajov v inzeráte',
        text: 'V inzeráte sa píše: //„Nehnuteľnosť je v štádiu holobytu s možnosťou dokončenia podľa vašich predstáv.“// Holobyt je **nedokončený byt** (bez finálnych podláh, dverí a sanity). Zároveň má //„veľkorysý balkón (viac ako 30 m² )“//, teda **priestranný balkón**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – v dispozícii bytu sa žiadny **šatník** nespomína.\nC – byt je na 7. podlaží, no z textu nijako nevyplýva, že ide o **najvyššie** poschodie bytového domu.\nD – v predposlednom odseku sa výslovne uvádza: //„Foto je ilustračné.“// Predávaný byt teda nie je vyobrazený na fotografii.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 4?',
    options: [
      { key: 'A', text: 'Byt má v jednej z dvoch spální vstup do kúpeľne.' },
      { key: 'B', text: 'Kúpna cena bytu v eurách je uvedená v texte inzerátu.' },
      { key: 'C', text: 'Výhľad z bytu je na dve bratislavské mestské časti.' },
      { key: 'D', text: 'Inzerent považuje kuchyňu s jedálňou za samostatnú izbu.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Spočítaj obytné miestnosti v odseku „Dispozícia bytu“ a porovnaj ich s tým, aký druh bytu (koľkoizbový) inzerent uvádza v hlavičke!',
    solutionSteps: [
      {
        title: 'Porovnanie počtu izieb a dispozície',
        text: 'Inzerent ponúka **4-izbový byt**. V odseku //Dispozícia bytu// vymenúva: //„predsieň, dvakrát spálňa, obývacia izba, kuchyňa s jedálňou…, dvakrát kúpeľňa s toaletou“//.\nPredsieň a kúpeľne sa za izby nepočítajú; ostávajú **2 spálne + 1 obývacia izba = 3 izby**. Aby bol byt 4-izbový, inzerent zjavne započítava **kuchyňu s jedálňou ako štvrtú samostatnú izbu**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – vstup je spomenutý iba z kuchyne s jedálňou na balkón, o vstupe zo spálne do kúpeľne text nehovorí.\nB – hoci v hlavičke stojí //Cena: v texte//, v predposlednom odseku maklér píše: //„ďalšie info vrátane ceny zašlem na požiadanie“// – suma v eurách v texte chýba.\nC – na rozhraní dvoch mestských častí sa nachádza samotný bytový dom, o výhľade z okien sa nepíše.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktoré tvrdenie __nevyplýva__ z ukážky 4?',
    options: [
      { key: 'A', text: 'Inzerent podá podrobnejšie informácie o byte po kontaktovaní záujemcom.' },
      { key: 'B', text: 'Inzerent zastupuje realitnú kanceláriu ponúkajúcu predmetnú nehnuteľnosť.' },
      { key: 'C', text: 'Predmetná nehnuteľnosť je jednou z noviniek v ponuke realitnej kancelárie.' },
      { key: 'D', text: 'Predmetná nehnuteľnosť sa nachádza v dobrej lokalite mimo periférie mesta.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Nezamieňaj si slovo „novostavba“ (novopostavený dom) s tým, ako dlho už realitná kancelária tento byt inzeruje! Je v texte informácia o tom, že ide o novinku v ponuke kancelárie?',
    solutionSteps: [
      {
        title: 'Čo v texte nenájdeme',
        text: 'V inzeráte sa síce píše, že ide o //novostavbu// a //nové bývanie//, nikde sa však nespomína, kedy realitná kancelária byt zaradila do svojej ponuky – teda či ide o **novinku v ponuke realitnej kancelárie**. Tvrdenie C z ukážky **nevyplýva**.'
      },
      {
        title: 'Overenie zvyšných tvrdení (z textu vyplývajú)',
        text: 'A – vyplýva z vety //„Odkaz na virtuálnu prehliadku a ďalšie info vrátane ceny zašlem na požiadanie.“//\nB – vyplýva zo slov //„Naša realitná kancelária vám ponúka…“// a e-mailu //makler@realitka.com//.\nD – vyplýva zo slov //„v strategickej časti mesta v širšom centre s kompletnou občianskou vybavenosťou“// (širšie centrum = mimo okrajovej periférie).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 28,
    code: '28',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Ukážka 4 predstavuje',
    options: [
      { key: 'A', text: 'vecný úradný text.' },
      { key: 'B', text: 'vecný neformálny text.' },
      { key: 'C', text: 'súvislý odborný text.' },
      { key: 'D', text: 'nesúvislý odborný text.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Texty delíme na umelecké (básne, poviedky) a vecné (praktické texty z bežného života, vedy či úradov). Potom si všimni jazyk inzerátu: „parádny byt“, „info“, „Foto“, „Som 24/7“ a smajlík ☺ – pôsobí úradne a odborne, alebo uvoľnene a neformálne?',
    solutionSteps: [
      {
        title: 'Vecný a neformálny charakter inzerátu',
        text: '1. Texty rozdeľujeme na umelecké a **vecné**. Realitný inzerát nesprostredkúva umelecký zážitok, ale praktické informácie s cieľom predať byt – je to teda **vecný text**.\n2. Autor v ňom používa hovorové a uvoľnené prvky: citovo zafarbené prídavné meno //parádny//, skrátené hovorové slová //Foto//, //info//, slangovo-hovorový obrat //Som 24/7//, výkričníky a emotikon ☺. Text je preto **neformálny**.'
      },
      {
        title: 'Prečo neplatia ostatné možnosti',
        text: 'A – úradný text je prísne neutrálny, neosobný a bez emotikonov či hovorových slov.\nC, D – nejde o vedecký ani odborný text určený odborníkom.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 29,
    code: '29',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Slohový útvar/žáner obsahujúci výrazové prostriedky z viacerých jazykových štýlov je',
    options: [
      { key: 'A', text: 'polysémický.' },
      { key: 'B', text: 'subjektívny.' },
      { key: 'C', text: 'objektívny.' },
      { key: 'D', text: 'hybridný.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Spomeň si, čo znamená slovo „hybrid“ napr. pri autách (kombinácia spaľovacieho a elektrického pohonu). Ako sa volá žáner, ktorý kombinuje prvky viacerých jazykových štýlov (ako inzerát či esej)?',
    solutionSteps: [
      {
        title: 'Hybridný slohový útvar',
        text: 'Cudzie slovo //hybridný// znamená **zmiešaný, skrížený**. V štylistike sa ako **hybridný slohový útvar (žáner)** označuje taký žáner, v ktorom sa spájajú a prelínajú výrazové prostriedky viacerých jazykových štýlov (napr. v inzeráte v ukážke 4 sa miešajú heslovité administratívne údaje s presviedčacími publicistickými a uvoľnenými hovorovými prvkami; typickým hybridným žánrom je aj //esej//).'
      },
      {
        title: 'Význam ostatných pojmov',
        text: 'A – **polysémický**: viacvýznamový (termín z lexikológie pre slovo s viacerými významami, napr. //koruna//).\nB – **subjektívny**: vyjadrujúci osobný názor a pocity autora.\nC – **objektívny**: vecný, nestranný, nezaujatý.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 30,
    code: '30',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte z ukážky 4 slovo označujúce odmenu za sprostredkovanie obchodu.',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'provízia',
    acceptedAnswers: ['provízia'],
    commonMistakes: [
      {
        pattern: '^cena$',
        hint: 'Cena je celková suma za byt, nie samotná odmena pre makléra za sprostredkovanie predaja. Pozri sa do zvýraznenej hlavičky inzerátu hneď pod riadok „Cena: v texte“!'
      }
    ],
    hint: 'Pozri sa do zvýrazneného zoznamu parametrov na začiatku inzerátu. Ktoré cudzie podstatné meno tam pomenúva odmenu realitnej kancelárie (a píše sa pri ňom, že je už zahrnutá v cene)?',
    solutionSteps: [
      {
        title: 'Vyhľadanie slova v texte',
        text: 'V piatom riadku zvýraznenej hlavičky inzerátu čítame: //„**Provízia** zahrnutá v cene: áno“//.\nSlovo **provízia** označuje finančnú (zvyčajne percentuálnu) odmenu za sprostredkovanie obchodu – tu odmenu realitnej kancelárii za predaj bytu.'
      },
      {
        title: 'Pravopis',
        text: 'Slovo musí byť vypísané pravopisne správne v nominatíve ako v texte (s dlhým **í** po //v// a krátkym //i// v zakončení //-ia//): **provízia**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **provízia**.'
  },
  {
    id: 31,
    code: '31',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'Napíšte názov slovotvorného postupu, ktorým vznikli slová //novostavba// a //maloobchod//.',
    placeholder: 'Napíš slovotvorný postup',
    correctAnswerDisplay: 'skladanie (kompozícia)',
    acceptedAnswers: [
      'skladanie',
      'skladaním',
      'kompozícia',
      'kompozíciou',
      'skladanie slov'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'odvodzovan|deriv',
        hint: 'Odvodzovaním (deriváciou) vznikajú slová z jedného slovného základu pridaním predpony alebo prípony (napr. stav-ba, ob-chod). V slovách „novostavba“ (nový + stavba) a „maloobchod“ (malý + obchod) sa však spájajú dva plnovýznamové slovné základy!'
      },
      {
        pattern: '^zlo[zž]en[eé]',
        hint: '„Zložené slová“ je pomenovanie výsledných slov, ale otázka sa pýta na názov slovotvorného postupu (procesu, ktorým tieto slová vznikli – napr. odvodzovanie, skracovanie alebo …).'
      }
    ],
    hint: 'Rozdeľ si obe slová na časti: novo-stavba (nový + stavba) a malo-obchod (malý + obchod). Každé z nich vzniklo spojením dvoch slovných základov pomocou spájacej samohlásky -o-. Ako sa v slovotvorbe volá tento postup (po slovensky alebo cudzím slovom)?',
    solutionSteps: [
      {
        title: 'Rozbor stavby slov',
        text: 'Obidve slová obsahujú **dva plnovýznamové slovné základy** spojené spájacou morfémou //-o-//:\n• //nov(ý)// + //-o-// + //stavba// → **novostavba**,\n• //mal(ý)// + //-o-// + //obchod// → **maloobchod**.'
      },
      {
        title: 'Slovotvorný postup',
        text: 'V slovenčine rozlišujeme tri hlavné slovotvorné postupy: //odvodzovanie (derivácia)//, **skladanie (kompozícia)** a //skracovanie (abreviácia)//.\nTvorenie nového slova spojením dvoch (alebo viacerých) slovných základov sa nazýva **skladanie**, odborne **kompozícia** (kľúč uznáva aj inštrumentál //skladaním / kompozíciou// a prihliada na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **skladanie** (alebo **kompozícia**).'
  },
  {
    id: 32,
    code: '32',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Doplňte do nasledujúcej vety správny názov slohového postupu.',
    fillSentenceHtml: 'Vo zvýraznenej časti ukážky 4 sa uplatnil {{blank}} slohový postup.',
    placeholder: 'Doplň názov postupu',
    correctAnswerDisplay: 'informačný',
    acceptedAnswers: [
      'informačný',
      'informatívny',
      'informačný slohový postup',
      'informatívny slohový postup',
      'Vo zvýraznenej časti ukážky 4 sa uplatnil informačný slohový postup',
      'Vo zvýraznenej časti ukážky 4 sa uplatnil informatívny slohový postup'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'administrat|publicist|hovorov|n[aá]u[cč]n',
        hint: 'Pozor, nepleť si jazykové štýly so slohovými postupmi! Administratívny, publicistický či hovorový sú jazykové štýly. Slohové postupy sú len štyri: rozprávací, opisný, výkladový (úvahový) a ten, ktorý stručne prináša fakty a údaje!'
      },
      {
        pattern: 'opisn',
        hint: 'Opisný slohový postup zachytáva znaky a vlastnosti predmetu v súvislom opise. Zvýraznená hlavička inzerátu však len heslovite vymenúva základné vecné údaje a čísla (typ, druh, stav, identifikačné číslo).'
      }
    ],
    hint: 'Nezameň si jazykový štýl so slohovým postupom! Slohové postupy máme štyri: rozprávací, opisný, výkladový a … Pozri sa na zvýraznenú hlavičku inzerátu (Typ: predaj, Druh: 4-izbový byt, Stav: novostavba…) – heslovite prináša základné fakty, údaje a čísla.',
    solutionSteps: [
      {
        title: 'Rozlíšenie slohových postupov',
        text: 'V slovenčine máme štyri slohové postupy:\n• **informačný** – stručne a vecne uvádza fakty, čísla, miesto, čas, parametre (odpovedá na otázky //čo? kde? kedy? koľko?//),\n• **opisný** – podrobne vystihuje vlastnosti a znaky predmetu alebo pracovný postup,\n• **rozprávací** – zachytáva jedinečný príbeh a dej v čase,\n• **výkladový (úvahový)** – vysvetľuje vnútorné príčiny, vzťahy a súvislosti.'
      },
      {
        title: 'Zvýraznená časť ukážky 4',
        text: 'Zvýraznené riadky na začiatku inzerátu (//Typ: predaj, Druh: 4-izbový byt, Stav: novostavba…//) heslovite uvádzajú základné vecné a číselné údaje bez deja či opisu – uplatnil sa v nich **informačný** slohový postup (kľúč uznáva aj tvar **informatívny**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **informačný** (slohový postup).'
  }
];
