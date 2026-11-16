import type { QuestionData } from '../../types';

export const questionsPart1: QuestionData[] = [
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: 'Čítanie grafu a práca s údajmi',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie v rámci odvetvia dopravy je na základe údajov z grafu pravdivé?',
    options: [
      { key: 'A', text: 'V EÚ má najväčší podiel na znečisťovaní ovzdušia cestná doprava.' },
      { key: 'B', text: 'Presnú mieru znečistenia ovzdušia dokážeme určiť 8 druhmi dopravy.' },
      { key: 'C', text: 'Letecká doprava znečisťuje ovzdušie vo väčšej miere ako nákladné vozidlá.' },
      { key: 'D', text: 'Dokážeme zistiť podiel znečistenia ovzdušia dopravou v globálnom meradle.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Vnútorný kruh grafu ukazuje všetky druhy dopravy (cestná doprava a štítky hore), vonkajší kruh len rozdelenie cestnej dopravy. Porovnaj ich a pozri si aj popis pod grafom (pre aké územie a rok platí).',
    solutionSteps: [
      {
        title: 'Overenie podielov jednotlivých druhov dopravy v EÚ',
        text: 'V grafe tvoria emisie CO₂ v rámci EÚ civilné letectvo (13,4 %), železnice (0,5 %), vodná doprava (13,6 %), ostatné (0,5 %) a cestná doprava (72 %). Najväčší podiel má jednoznačne cestná doprava.'
      },
      {
        title: 'Vylúčenie nesprávnych možností (B, C, D)',
        text: 'B – v grafe je aj bližšie neurčená kategória „Ostatné (0,5 %)“, takže presnú mieru pre 8 konkrétnych druhov dopravy z neho neurčíme.\nC – civilné letectvo tvorí **13,4 %** všetkých emisií. Vonkajší kruh rozdeľuje iba cestnú dopravu (**72 %** všetkých emisií): ťažké (26,2 %) a ľahké (11,9 %) nákladné vozidlá tvoria spolu **38,1 % cestnej dopravy** – to je viac ako tretina zo 72 %, čiže vyše **24 %** všetkých emisií (presne 27,4 %). Nákladné vozidlá teda znečisťujú ovzdušie **viac** než letecká doprava.\nD – graf zobrazuje údaje len pre **EÚ** v roku 2016, nie pre celý svet (globálne).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Z ukážky vyplýva, že',
    options: [
      { key: 'A', text: 'emisie sú výlučne škodliviny oxidu uhličitého v ovzduší.' },
      { key: 'B', text: 'každý automobil v EÚ ročne vyprodukuje 30 % emisií oxidu uhličitého.' },
      { key: 'C', text: 'Európska únia plánuje do roku 2050 dostať emisie na hranicu 60 %.' },
      { key: 'D', text: 'ceny lístkov sa upravili tak, že je výhodnejšie cestovať hromadnou dopravou.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si jednotlivé odrážky opatrení miest, samospráv a regiónov na konci ukážky 1.',
    solutionSteps: [
      {
        title: 'Kontrola informácie v druhej odrážke opatrení',
        text: 'V zozname opatrení sa uvádza, že mestá a regióny „zlacňujú lístky na hromadnú vnútromestskú (...) či medzimestskú (...) dopravu“, z čoho vyplýva cenové zvýhodnenie verejnej dopravy.'
      },
      {
        title: 'Odhalenie chýb v možnostiach A, B, C',
        text: 'A – v zátvorke sa CO₂ uvádza len ako príklad („ako napr. CO₂“), nie ako jediná škodlivina.\nB – takmer 30 % vzniká v celom odvetví dopravy v EÚ, nie v každom automobile.\nC – EÚ plánuje znížiť emisie z dopravy **o** 60 %, nie dostať ich **na** 60 %.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti __nie je__ správne uvedená jedna z kľúčových informácií ukážky?',
    options: [
      { key: 'A', text: 'Plánuje sa zníženie emisií do roku 2050.' },
      { key: 'B', text: 'Jednotlivé spoje na seba nadväzujú.' },
      { key: 'C', text: 'Autá nemajú povolený vjazd do miest.' },
      { key: 'D', text: 'Podporuje sa výstavba cyklotrás.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si podčiarknutý výraz „nie je“. Skontroluj prvú odrážku opatrení: platí zákaz vjazdu pre všetky autá do celých miest, alebo sa obmedzenie týka len vybraných zón a vozidiel?',
    solutionSteps: [
      {
        title: 'Porovnanie možnosti C s prvou odrážkou ukážky',
        text: 'V ukážke sa píše: „zriaďujú v mestách tzv. nízkoemisné zóny, ktoré sú spoplatnené alebo do nich nemajú povolený vjazd všetky vozidlá“. Neplatí teda plošný zákaz vjazdu áut do celých miest.'
      },
      {
        title: 'Potvrdenie zvyšných možností',
        text: 'Možnosti A (plán do roku 2050), B (integrovaná doprava – spoje na seba nadväzujú) aj D (finančné zdroje na budovanie cyklotrás) zodpovedajú textu ukážky.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: 'Skladba (prívlastok)',
    sharedContextId: 'ukazka_1',
    questionText:
      'V ktorej možnosti je slovné spojenie, z ktorého sa dá vytvoriť zhodný prívlastok tak, aby zostal význam nasledujúcej vety rovnaký?\n//Aké sú teda naše možnosti pomôcť EÚ dokázať splniť plán znížiť emisie z dopravy o 60 %?//',
    options: [
      { key: 'A', text: 'splniť plán' },
      { key: 'B', text: 'emisie z dopravy' },
      { key: 'C', text: 'pomôcť znížiť' },
      { key: 'D', text: 'sú teda možnosti' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Hľadaj nezhodný prívlastok – spoznáš ho aj tak, že pri sebe stoja dve podstatné mená (druhé môže byť s predložkou, napr. stôl z dreva). Keď druhé podstatné meno premeníš na prídavné meno a prehodíš ho pred prvé, vznikne zhodný prívlastok (drevený stôl).',
    solutionSteps: [
      {
        title: 'Jednoduchá pomôcka, ako spoznať nezhodný prívlastok',
        text: 'Nezhodný prívlastok spoznáš aj tak, že stoja pri sebe dve podstatné mená (jedno môže byť aj s predložkou), v našej vete „emisie __z dopravy__“. Keď druhé podstatné meno prehodíš pred prvé a dokážeš z neho vytvoriť zhodný prívlastok **dopravné** emisie (zhoduje sa v rode, čísle a páde), je to potvrdenie, že v spojení „emisie __z dopravy__“ je podčiarknutá časť nezhodný prívlastok.'
      },
      {
        title: 'Overenie významu a kontrola ostatných možností',
        text: 'Význam vety zostane po zmene rovnaký (výraz „dopravné emisie“ je napokon aj v 1. vete ukážky).\nA – „splniť plán“ (sloveso + podstatné meno).\nC – „pomôcť znížiť“ (dve slovesá v neurčitku).\nD – „sú teda možnosti“ (sloveso + častica + podstatné meno).\nZ možností A, C a D sa zhodný prívlastok so zachovaním významu vytvoriť nedá.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: 'Pravopis',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej vete je pravopisná chyba?',
    options: [
      { key: 'A', text: 'Britská firma predstavila prototyp systému monitorovania vozidiel.' },
      { key: 'B', text: 'Mechanizmy termodynamiky umožnili rozvoj aj súčasných motorov.' },
      { key: 'C', text: 'Nová cestná analitycká aplikácia varuje pred možnou chybou riadenia.' },
      { key: 'D', text: 'Tieto fázy sú štandardným cyklom štvortaktných spaľovacích motorov.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Zameraj sa na pravopis slov cudzieho pôvodu (písanie i/y po spoluhláskach t, s, d, c, l, ch).',
    solutionSteps: [
      {
        title: 'Kontrola pravopisu slov v možnostiach',
        text: 'A – „Britská“, „prototyp“, „systému“ sú napísané správne.\nB – „Mechanizmy“, „termodynamiky“ (v slove mechanizmy je po ch mäkké i a prípona -y, v slove termodynamiky je po d tvrdé y) sú správne.\nC – Slovo **analitycká** je napísané nesprávne. Správny tvar odvodený od slova „analýza“ / „analytik“ je **analytická** (v základe slova píšeme po **l** tvrdé **y** a v prípone **-ická** po **t** mäkké **i**).\nD – „štandardným cyklom“ je napísané správne.'
      }
    ],
    solutionConclusion: 'Pravopisná chyba je v možnosti C.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: 'Lexikológia (zložené slová)',
    sharedContextId: 'ukazka_1',
    questionText:
      'Vypíš z ukážky zložené slovo s významom //produkujúci alebo vypúšťajúci do ovzdušia nižšie, resp. malé množstvo škodlivých látok//.',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'nízkoemisné',
    acceptedAnswers: ['nízkoemisné', 'Nízkoemisné', 'nízkoemisný', 'Nízkoemisný'],
    hint: 'Pozri si prvú odrážku v dolnej časti ukážky 1 – ako sa nazývajú špeciálne zóny v mestách?',
    solutionSteps: [
      {
        title: 'Vyhľadanie zloženého slova v ukážke 1',
        text: 'V prvej odrážke opatrení miest a regiónov sa píše: „zriaďujú v mestách tzv. nízkoemisné zóny“.'
      },
      {
        title: 'Overenie slovotvornej stavby a významu',
        text: 'Slovo „nízkoemisné“ vzniklo zložením dvoch slovotvorných základov (nízky + emisie) a znamená produkujúci nízke/malé množstvo emisií. Vypísať ho treba v presnom pravopise s dlhým **í** v prvej časti slova (**nízko**emisné).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je nízkoemisné.'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: 'Lexikológia (slová cudzieho pôvodu)',
    sharedContextId: 'ukazka_1',
    questionText:
      'Vypíš z ukážky slovo cudzieho pôvodu, ktoré označuje motorové vozidlo s minimálne dvoma druhmi pohonov (napr. benzínový motor aj elektromotor).',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'hybridov',
    acceptedAnswers: ['hybridov', 'Hybridov', 'hybrid', 'Hybrid', 'hybridy', 'Hybridy'],
    hint: 'Prečítaj si odsek pod grafom, ktorý porovnáva automobily, elektromobily a tretí typ vozidla.',
    solutionSteps: [
      {
        title: 'Vyhľadanie výrazu v texte',
        text: 'V treťom odseku ukážky sa nachádza výpočet: „pri výrobe automobilov, elektromobilov či **hybridov**, resp. pri ich samotnom používaní“.'
      },
      {
        title: 'Overenie významu a pravopisu',
        text: 'Hybrid je vozidlo kombinujúce dva zdroje pohonu (spravidla spaľovací motor a elektromotor). Keďže zadanie žiada vypísať slovo z ukážky, najpresnejšie je vypísať tvar z textu (hybridov) alebo základný tvar (hybrid / hybridy) s tvrdým **y** v koreni.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je hybridov (uznáva sa aj hybrid / hybridy).'
  },
  {
    id: 8,
    code: '08',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o pohľadniciach vyplýva z ukážky?',
    options: [
      { key: 'A', text: 'Zadná strana obsahuje text od konkrétnej knižnej postavy.' },
      { key: 'B', text: 'Prichádzajú niekoľko mesiacov so známkou z rovnakého mesta.' },
      { key: 'C', text: 'Marcovú pohľadnicu Čiapočke poslala babka z rekreácie.' },
      { key: 'D', text: 'Všetky zobrazené miesta a krajiny na pohľadniciach sú fiktívne.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozri si druhý odsek o tom, čo je na prednej a zadnej strane pohľadníc, a štvrtý odsek (Pravidlá online hry – o 12.00 h).',
    solutionSteps: [
      {
        title: 'Vyhľadanie údajov o pohľadniciach v 2. a 4. odseku',
        text: 'Vo 4. odseku sa píše: „O 12.00 h pribudne druhá indícia vo forme textu na zadnej strane pohľadnice, ktorý napísala daná knižná postava.“ Možnosť A preto priamo vyplýva z ukážky.'
      },
      {
        title: 'Vylúčenie nesprávnych možností',
        text: 'B – pohľadnice prichádzajú zo všetkých kútov knižného sveta (nie je tam nič o známke z rovnakého mesta).\nC – všetky pohľadnice píšu nepodpísané knižné postavy, nie babka z Piešťan.\nD – v 2. odseku sa píše „skutočné i vymyslené krajiny“, teda nie všetky sú fiktívne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o pravidlách hry je __nepravdivé__?',
    options: [
      { key: 'A', text: 'Hádať správnu odpoveď je možné opakovane.' },
      { key: 'B', text: 'Odpoveďou je vždy meno literárnej postavy.' },
      { key: 'C', text: 'Na konci každého dňa sa všetky otázky uzavrú.' },
      { key: 'D', text: 'Pri súťažení je povolené používať internet.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Zameraj sa na predposledný odsek ukážky – dokedy sa dá v hre hádať, ak to hráč nestihne v ten istý deň?',
    solutionSteps: [
      {
        title: 'Kontrola časového limitu v 5. odseku',
        text: 'V predposlednom odseku sa uvádza: „Ak to však nestihneš, nezúfaj, hádať môžeš do konca mesiaca.“ Otázky sa teda na konci každého dňa neuzatvoria.'
      },
      {
        title: 'Overenie ostatných tvrdení',
        text: 'A je pravdivé („Máš toľko pokusov, koľko len chceš“), B je pravdivé (hľadá sa odosielateľka/odosielateľ – knižná postava), D neporušuje pravidlá, pretože ide o online hru a text používanie internetu nijako nezakazuje.'
      }
    ],
    solutionConclusion: 'Nepravdivé tvrdenie je v možnosti C.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: 'Literatúra (literárne žánre)',
    sharedContextId: 'ukazka_2',
    diagramId: 'q10_pohladnica',
    questionText: 'V ktorej možnosti je na základe indícií z pohľadnice správne uvedený druh knižného príbehu?',
    options: [
      { key: 'A', text: 'vedecko-fantastický' },
      { key: 'B', text: 'detektívny' },
      { key: 'C', text: 'vedecko-populárny' },
      { key: 'D', text: 'biografický' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všímaj si kľúčové slová z pohľadnice: skrytá pravda, logické uvažovanie, práca s faktmi, pisateľ z tienistých uličiek.',
    solutionSteps: [
      {
        title: 'Analýza indícií na pohľadnici',
        text: 'Pisateľ spomína nečakané skutočnosti, hľadanie informácií vedúcich ku skrytej pravde, logické uvažovanie, prácu s faktmi, nové okolnosti meniace pohľad na dianie a podpisuje sa ako „pisateľ z tienistých uličiek“.'
      },
      {
        title: 'Priradenie žánru/druhu prózy',
        text: 'Odhaľovanie tajomstva alebo záhady na základe dôkazov, faktov a dedukcie je typické pre detektívny príbeh (napr. Sherlock Holmes).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: 'Tvaroslovie (častice) a význam vety',
    sharedContextId: 'ukazka_2',
    questionText:
      'Ako sa zmení význam nasledujúcej vety, ak z nej vypustíme častice?\n//Čiapočke poslali okolo 50 rôznych pohľadníc a neznámi okoloidúci jej pomohli pochopiť asi 30 indícií.//',
    options: [
      { key: 'A', text: 'Vo vete sa zmení prisudzovací sklad.' },
      { key: 'B', text: 'Veta stratí zmysel.' },
      { key: 'C', text: 'Uvedené počty sa prirodzene znížia.' },
      { key: 'D', text: 'Číselné údaje budú presné.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Nájdi vo vete častice vyjadrujúce približnosť (okolo, asi) a prečítaj si vetu bez nich.',
    solutionSteps: [
      {
        title: 'Čo robia častice vo vete (vysvetlenie na príklade)',
        text: 'Častice vyjadrujú osobný postoj hovoriaceho k výpovedi alebo k jej časti (hodnotenie, istotu, neistotu či odhad). Vysvetlime si to na vete //Mám 20 eur.// Pridajme k nej rôzne častice a všimni si zmenu:\n• //Mám **iba** (**len**) 20 eur.// – pre niekoho je to málo (osobné hodnotenie).\n• //Mám **až** 20 eur.// – pre iného je to veľa (osobné hodnotenie).\n• //Mám **možno** (**asi**, **okolo**) 20 eur.// – neistota, približný odhad.\nV našej úlohe stoja pred číslami práve častice približnosti **okolo** (pred 50) a **asi** (pred 30).'
      },
      {
        title: 'Porovnanie významu po vypustení častíc',
        text: 'Ak časticu dáme preč, stratí sa osobný postoj či odhad hovoriaceho a zostane vecné, presné tvrdenie (//Mám 20 eur.//). Rovnako po vypustení častíc **okolo** a **asi** znie veta v úlohe: //Čiapočke poslali 50 rôznych pohľadníc a neznámi okoloidúci jej pomohli pochopiť 30 indícií.// Číselné údaje už nie sú odhadované, ale **presné**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: 'Tvaroslovie (slovesný spôsob)',
    sharedContextId: 'ukazka_2',
    questionText:
      'V ktorej možnosti sa nachádza sloveso v rovnakom slovesnom spôsobe ako zvýraznené sloveso v nasledujúcej vete?\n//**Využi** všetky indície, ktoré sa objavia.//',
    options: [
      { key: 'A', text: 'Svoju odpoveď napíš do políčka.' },
      { key: 'B', text: 'Čiapočka túži po naozajstnom dobrodružstve.' },
      { key: 'C', text: 'Tajne si naplánuje cestu.' },
      { key: 'D', text: 'Okamžite ju zachváti knižná cestovná horúčka.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Urči, či zvýraznené sloveso „využi“ vyjadruje reálny dej (oznamovací spôsob), podmienku (podmieňovací) alebo príkaz/výzvu (rozkazovací spôsob).',
    solutionSteps: [
      {
        title: 'Určenie slovesného spôsobu vo vzorovej vete',
        text: 'Sloveso **Využi** je v 2. osobe jednotného čísla rozkazovacieho spôsobu (vyzýva/rozkazuje čitateľovi niečo urobiť).'
      },
      {
        title: 'Porovnanie slovies v možnostiach A – D',
        text: 'A – **napíš** (rozkazovací spôsob, 2. os. sg.) – **zhoda**.\nB – **túži** (oznamovací spôsob).\nC – **naplánuje** (oznamovací spôsob).\nD – **zachváti** (oznamovací spôsob).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 13,
    code: '13',
    type: 'text',
    category: 'Tvaroslovie (pomnožné podstatné mená)',
    sharedContextId: 'ukazka_2',
    questionText: 'Vypíš z tretieho odseku ukážky pomnožné podstatné meno.',
    placeholder: 'Vypíš pomnožné podstatné meno',
    correctAnswerDisplay: 'Piešťan',
    acceptedAnswers: ['Piešťan', 'do Piešťan', 'Do Piešťan', 'Piešťany'],
    caseSensitive: true,
    caseHint: 'Pozor na veľké začiatočné písmeno: názov mesta je vlastné podstatné meno (Piešťan / Piešťany).',
    hint: 'Prečítaj si pozorne iba tretí odsek ukážky (začína slovami „Tajne si naplánuje cestu...“) a hľadaj podstatné meno, ktoré má tvar množného čísla, hoci pomenúva jedinú vec/miesto.',
    solutionSteps: [
      {
        title: 'Vyhľadanie podstatných mien v 3. odseku',
        text: 'V treťom odseku vo vete „Babička Čiapočky práve v tomto čase odchádza na mesačný kúpeľný pobyt do Piešťan.“ sa nachádza zemepisný názov v tvare pomnožného podstatného mena **Piešťany** (v texte v genitíve: do **Piešťan**).'
      },
      {
        title: 'Pravopisná poznámka',
        text: 'Keďže ide o vlastné meno mesta, musí sa písať s veľkým začiatočným písmenom **P** (Piešťan / do Piešťan / Piešťany).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je Piešťan (uznáva sa aj do Piešťan alebo Piešťany).'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: 'Tvaroslovie (stupňovanie prídavných mien)',
    sharedContextId: 'ukazka_2',
    questionText:
      '//Pátranie je veľká zábava.//\nPrídavné meno z vyššie uvedenej vety napíš pravopisne správne v tvare druhého stupňa.',
    fillSentenceHtml: '//Čím viac o knižnej postave vieš, tým je hra// {{blank}} //zábava.//',
    placeholder: 'Doplň prídavné meno',
    correctAnswerDisplay: 'väčšia',
    acceptedAnswers: ['väčšia', 'Väčšia'],
    commonMistakes: [
      {
        pattern: '^v[ea]čšia$',
        hint: 'Pozor na pravopis: v 2. stupni prídavného mena „veľká“ sa po v píše písmeno ä.'
      },
      {
        pattern: '^väčší$',
        hint: 'Pozor na gramatický rod: prídavné meno sa musí zhodovať s podstatným menom ženského rodu „zábava“.'
      },
      {
        pattern: '^viac|^veľk',
        hint: 'Prídavné meno „veľká“ sa stupňuje nepravidelne jedným slovom (netvorí sa od základu veľk- ani slovom viac).'
      }
    ],
    hint: 'Prídavné meno „veľká“ sa stupňuje nepravidelne. Dávaj pozor na písanie „ä“ a na zakončenie ženského rodu pri podstatnom mene „zábava“.',
    solutionSteps: [
      {
        title: 'Identifikácia prídavného mena vo vete',
        text: 'Vo vete „Pátranie je veľká zábava.“ sa nachádza akostné prídavné meno **veľká** (1. stupeň, ženský rod, jednotné číslo, nominatív – zhoduje sa so slovom zábava).'
      },
      {
        title: 'Utvorenie 2. stupňa a kontrola pravopisu',
        text: 'Stupňovanie slova veľký je nepravidelné: veľký → väčší → najväčší. V ženskom rode (tá zábava) preto do vety patrí tvar **väčšia** (s písmenom **ä** a mäkčeňom na **č**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je väčšia.'
  }
];
