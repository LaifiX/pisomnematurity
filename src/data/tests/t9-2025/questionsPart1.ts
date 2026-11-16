import type { QuestionData } from '../../types';

export const questionsPart1: QuestionData[] = [
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky?',
    options: [
      { key: 'A', text: 'Penicilín bol objavený A. Flemingom po dlhodobom skúmaní baktérií.' },
      { key: 'B', text: 'Na filmovom festivale v Cannes zažila Rubikova kocka svetový úspech.' },
      { key: 'C', text: 'Socha Malej morskej víly je inšpirovaná životom H. Ch. Andersena.' },
      { key: 'D', text: 'Prvé vedecké články o programovaní boli publikované už v 19. storočí.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Porovnaj jednotlivé možnosti so záznamami na časovej osi (najmä roky 1838, 1913, 1928, 1946 a 1974) a nezabudni, že rok 1838 patrí do 19. storočia.',
    solutionSteps: [
      {
        title: 'Overenie možnosti D pri roku 1838',
        text: 'Pri roku **1838** (čo je **19. storočie**) sa píše, že matematička Ada Lovelace vo svojom článku pre britský vedecký časopis opísala možnosti využitia analytického stroja pomocou kódov a je považovaná za prvú programátorku na svete. Tvrdenie D teda priamo vyplýva z ukážky.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – Alexander Fleming objavil penicilín v roku 1928 **náhodou**, nie po dlhodobom skúmaní.\nB – v Cannes sa od roku 1946 koná filmový festival, s Rubikovou kockou (1974) nijako nesúvisí.\nC – predlohou sochy Malej morskej víly je **postava z rozprávky** H. Ch. Andersena, nie autorov život.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: 'Čítanie s porozumením (práca s údajmi)',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktorá osobnosť podľa ukážky zažila počas svojho života uvedený míľnik?',
    options: [
      { key: 'A', text: 'Karl Landsteiner – objavenie Rubikovej kocky' },
      { key: 'B', text: 'Rafael Nadal – zavedenie spoločnej európskej meny' },
      { key: 'C', text: 'Hans Christian Andersen – uverejnenie teórie relativity' },
      { key: 'D', text: 'Alexander Fleming – patentovanie rozložiteľného bioplastu' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si roky narodenia a úmrtia v zátvorkách za menami osobností a porovnaj ich s rokom, v ktorom nastal daný míľnik (pri eure si vypočítaj rok jeho zavedenia zo záznamu 2019).',
    solutionSteps: [
      {
        title: 'Výpočet roku zavedenia eura a porovnanie so životom R. Nadala',
        text: 'V zázname **2019** sa uvádza: „Euro, spoločná európska mena, oslavuje 20 rokov.“ Znamená to, že euro zaviedli v roku **1999** (2019 − 20 = 1999). Tenista Rafael Nadal sa narodil v roku **1986** (v zátvorke je len rok narodenia, stále žije), takže v roku 1999 mal 13 rokov a tento míľnik zažil.'
      },
      {
        title: 'Kontrola ostatných možností (A, C, D)',
        text: 'A – Karl Landsteiner zomrel v roku **1943**, kým Rubikova kocka vznikla až v roku **1974**.\nC – H. Ch. Andersen zomrel v roku **1875**, kým Einstein publikoval všeobecnú teóriu relativity až v roku **1916** (11 rokov po roku 1905).\nD – Alexander Fleming zomrel v roku **1955**, kým patent na bioplast podal P. Alexy až v roku **2011**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Z ukážky vyplýva, že v roku',
    options: [
      { key: 'A', text: '2018 športovec R. Nadal prvýkrát triumfuje na turnaji French Open.' },
      { key: 'B', text: '2019 je euro, mena 340 miliónov Európanov, najdôležitejšou na svete.' },
      { key: 'C', text: '1989 je spustené webové sídlo WWW, ktoré vynašiel britský vedec.' },
      { key: 'D', text: '1905 napísal A. Einstein viacero významných prác nielen o matematike.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozorne skontroluj detaily pri rokoch 2018 (prvýkrát?), 2019 (najdôležitejšou?), 1989 (kedy bolo spustené prvé sídlo?) a 1905.',
    solutionSteps: [
      {
        title: 'Overenie možnosti D pri roku 1905',
        text: 'Pri roku **1905** sa uvádza, že A. Einstein svojou „sériou prác z rôznych vedných disciplín, napr. o aspektoch svetla, hmoty, času a priestoru, spôsobuje prevrat vo vede“ a jeho práca obsahuje aj rovnicu E = mc². Napísal teda viacero prác nielen z matematiky (ale najmä z fyziky).'
      },
      {
        title: 'Odhalenie nepresností v možnostiach A, B, C',
        text: 'A – v roku 2018 R. Nadal vyhráva turnaj **opätovne** (znova), nie prvýkrát.\nB – v roku 2019 využíva euro **viac ako** 340 miliónov občanov a je **druhou** najdôležitejšou menou na svete, nie prvou.\nC – v roku 1989 Tim Berners-Lee WWW vynašiel, ale prvé webové sídlo bolo spustené až **6. augusta 1991**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: 'Lexikológia (synonymá v kontexte)',
    sharedContextId: 'ukazka_1',
    questionText:
      'V ktorej možnosti sú správne nahradené podčiarknuté slová z nasledujúcej časti ukážky?\n//...pre britský vedecký časopis opisuje nielen __fungovanie__ prvého analytického stroja, ale aj možnosti jeho __využitia__ pomocou kódov v budúcnosti...//',
    options: [
      { key: 'A', text: 'prevádzku – výroby' },
      { key: 'B', text: 'prácu – produkcie' },
      { key: 'C', text: 'chod – uplatnenia' },
      { key: 'D', text: 'cyklus – úžitku' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Dosadzuj si dvojice slov priamo do vety. Obidve slová musia zachovať pôvodný význam vety (ako stroj beží a ako sa dá v budúcnosti použiť).',
    solutionSteps: [
      {
        title: 'Hľadanie synoným podľa významu vo vete',
        text: 'Podčiarknuté slovo **fungovanie** (stroja) znamená jeho **chod** (činnosť). Spojenie „možnosti jeho **využitia** v budúcnosti“ znamená možnosti jeho **uplatnenia** (použitia v praxi).'
      },
      {
        title: 'Vylúčenie ostatných možností',
        text: 'A, B – slová „výroby“ a „produkcie“ menia význam (nejde o to, ako stroj vyrobiť, ale ako ho pomocou kódov využiť/uplatniť).\nD – „fungovanie stroja“ nie je „cyklus stroja“ a spojenie „možnosti jeho úžitku pomocou kódov“ nezodpovedá pôvodnému významu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: 'Tvaroslovie (slovesá – neurčitok a vid)',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré sloveso z ukážky má __nesprávne__ uvedený neurčitok?',
    options: [
      { key: 'A', text: 'oslavuje → osláviť' },
      { key: 'B', text: 'stáva sa → stávať sa' },
      { key: 'C', text: 'koná sa → konať sa' },
      { key: 'D', text: 'opisuje → opisovať' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si podčiarknuté slovo „nesprávne“. Pri prevode slovesa do neurčitku musí zostať zachovaný slovesný vid (neukončený dej v prítomnom čase musí mať aj neurčitok nedokonavý: čo robiť?, nie čo urobiť?).',
    solutionSteps: [
      {
        title: 'Kontrola slovesného vidu pri tvorení neurčitku',
        text: 'Sloveso **oslavuje** vyjadruje prebiehajúci, neukončený dej (pýtame sa: //čo robí?// – nedokonavý vid). Jeho správny neurčitok (//čo robiť?//) je preto **oslavovať**. Tvar //osláviť// (//čo urobiť?//) je neurčitok od iného, dokonavého slovesa (//oslávi//).'
      },
      {
        title: 'Overenie ostatných dvojíc',
        text: 'B – stáva sa (//čo robí?//) → **stávať sa** (//čo robiť?//) – správne.\nC – koná sa (//čo robí?//) → **konať sa** (//čo robiť?//) – správne.\nD – opisuje (//čo robí?//) → **opisovať** (//čo robiť?//) – správne.'
      }
    ],
    solutionConclusion: 'Nesprávne uvedený neurčitok je v možnosti A.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: 'Lexikológia (slová cudzieho pôvodu)',
    sharedContextId: 'ukazka_1',
    questionText:
      'Vypíš z ukážky prídavné meno cudzieho pôvodu, ktoré má podobný význam ako slová //typický, symbolický, obrazný//.',
    placeholder: 'Vypíš prídavné meno z ukážky',
    correctAnswerDisplay: 'ikonický',
    acceptedAnswers: ['ikonický', 'Ikonický'],
    commonMistakes: [
      {
        pattern: '^ykonick',
        hint: 'Slovo pochádza z gréckeho „ikona“ (obraz) – na začiatku aj po n sa píše mäkké i.'
      }
    ],
    hint: 'Prečítaj si záznam z roku 1913 o soche Malej morskej víly v Kodani – aký prvok mesta podľa textu predstavuje?',
    solutionSteps: [
      {
        title: 'Vyhľadanie prídavného mena v ukážke 1',
        text: 'Pri roku **1913** sa píše: „Odhaľujú sochu Malej morskej víly, predstavujúcu **ikonický** prvok Kodane.“'
      },
      {
        title: 'Overenie významu a pravopisu',
        text: 'Prídavné meno cudzieho pôvodu **ikonický** (od slova //ikona// – obraz, symbol) znamená príznačný, symbolický, typický pre dané miesto či dobu. Píše sa s mäkkým **i** a dlhým **ý** na konci.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je ikonický.'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: 'Tvaroslovie a pravopis (číslovky)',
    sharedContextId: 'ukazka_1',
    questionText: 'Napíš číslovku z nasledujúcej vety slovom pravopisne správne.\n//Filmy na ňom predstavuje 21 štátov.//',
    fillSentenceHtml: '{{blank}} štátov',
    placeholder: 'Napíš číslovku slovom',
    correctAnswerDisplay: 'dvadsaťjeden',
    acceptedAnswers: ['dvadsaťjeden', 'Dvadsaťjeden'],
    commonMistakes: [
      {
        pattern: '^dvadsa[ťt]\\s+jed(en|na)$',
        hint: 'Základné zložené číslovky 21 – 99 sa v základnom tvare (a v bezpredložkovom akuzatíve) píšu spolu ako jedno slovo.'
      },
      {
        pattern: '^dvadsa[ťt]jedna$',
        hint: 'Zložené číslovky zakončené na -jeden sú pri podstatnom mene nesklonné a v každom rode majú len tvar s -jeden (nie -jedna).'
      },
      {
        pattern: '^dvaca',
        hint: 'Pozor na spodobovanie pri výslovnosti: slovo sa skladá z „dva“ + „dsať“, preto píšeme dvadsaťjeden.'
      }
    ],
    hint: 'Spomeň si na dve pravidlá pre základné číslovky od 21 do 99: píšu sa spolu jedným slovom a ak sa končia na -jeden, pred podstatným menom majú vždy tvar -jeden (nie -jedna).',
    solutionSteps: [
      {
        title: 'Spôsob zápisu zložených čísloviek 21 – 99',
        text: 'Základné číslovky zložené z desiatok a jednotiek (21 až 99) sú v bezpredložkovom nominatíve a akuzatíve nesklonné a píšu sa **spolu ako jedno slovo**: **dvadsaťjeden**.'
      },
      {
        title: 'Kontrola tvaru -jeden a pravopisu',
        text: 'Zložené číslovky zakončené na **-jeden** majú v spojení s podstatným menom bez ohľadu na rod vždy podobu **-jeden** (//dvadsaťjeden štátov//, //dvadsaťjeden žien// – tvar //dvadsaťjedna// je tu nespisovný). V časti **dvadsať-** píšeme **d** (//dva-dsať//) a mäkké **ť**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je dvadsaťjeden.'
  },
  {
    id: 8,
    code: '08',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie je na základe ukážky pravdivé?',
    options: [
      { key: 'A', text: 'V Suchom potoku môžu turisti vidieť už mnoho rokov bobry.' },
      { key: 'B', text: 'Parná lesná železnica pri Lozorne už neexistuje.' },
      { key: 'C', text: 'Pri Malackách sa nachádza najväčšia zvernica na Slovensku.' },
      { key: 'D', text: 'Obyvatelia Lozorna sú pôvodom samí cudzinci.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si pozorne prvý odsek ukážky – čo sa v ňom píše o úzkokoľajnej parnej lesnej železnici, o bobroch, o zvernici a o obyvateľoch?',
    solutionSteps: [
      {
        title: 'Overenie možnosti B v 1. odseku',
        text: 'V prvom odseku čítame, že dub dohliadal „aj na vybudovanie úzkokoľajnej parnej lesnej železnice, **ktorú však už dávno prežil**“. Ak ju strom prežil, železnica už zanikla (neexistuje).'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – v Suchom potoku sa bobry objavili až „po dlhých rokoch“ (teda tam dlhé roky chýbali, nie že ich tam vidno mnoho rokov).\nC – text spomína historické vytvorenie „na tú dobu ohromnej zvernice“ od Stupavy po Lozorno, nie že je dnes najväčšia na Slovensku.\nD – dub chránil rôznych obyvateľov od prvých osadníkov cez obchodníkov a prisťahovalcov z Chorvátska – nikde sa nepíše, že obyvatelia Lozorna sú samí cudzinci.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: 'Čítanie s porozumením (presnosť údajov)',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorý presný údaj o Dračom dube je uvedený v ukážke?',
    options: [
      { key: 'A', text: 'O obvode jeho kmeňa.' },
      { key: 'B', text: 'O jeho veľkosti.' },
      { key: 'C', text: 'O počte hlasov v ankete.' },
      { key: 'D', text: 'O jeho veku.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozri si čísla v 2. a 3. odseku. Všimni si, pri ktorých údajoch stoja častice približnosti („okolo“, „asi“) a pri ktorom čísle žiadny výraz odhadu nie je.',
    solutionSteps: [
      {
        title: 'Rozlíšenie presného a približných údajov v 2. odseku',
        text: 'V druhom odseku stojí: „**Obvod jeho kmeňa je úctyhodných 677 cm**... Má **okolo** 700 rokov a výšku **asi** 18 metrov.“ Údaj o obvode kmeňa (**677 cm**) neobsahuje žiadnu časticu približnosti, je teda **presný**.'
      },
      {
        title: 'Prečo ostatné možnosti neplatia',
        text: 'B – výška je uvedená len odhadom („asi 18 metrov“).\nC – v 3. odseku sa píše iba „získal najviac hlasov“, konkrétny počet hlasov v texte chýba.\nD – vek je uvedený len približne („okolo 700 rokov“).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti je podľa ukážky správne tvrdenie o ankete Strom roka?',
    options: [
      { key: 'A', text: 'Organizuje ju Peter Lipa.' },
      { key: 'B', text: 'Vo finále súťažilo 16 stromov.' },
      { key: 'C', text: 'Vyhodnocovali ju v Bruseli.' },
      { key: 'D', text: 'Usporadúva ju Nadácia Ekopolis.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'V 3. odseku rozlišuj dve rôzne súťaže: slovenskú anketu „Strom roka“ a medzinárodnú anketu „Európsky strom roka“.',
    solutionSteps: [
      {
        title: 'Overenie organizátora ankety Strom roka v 3. odseku',
        text: 'V prvej vete 3. odseku sa píše: „Dračí dub bol nominovaný do ankety Strom roka, ktorú pod záštitou známeho speváka a hudobníka Petra Lipu **organizuje Nadácia Ekopolis**.“ Slovo //usporadúva// má rovnaký význam ako //organizuje//.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – Peter Lipa anketu neorganizuje, len nad ňou prevzal záštitu (podporil ju svojím menom).\nB – čísla 16 krajín a 12 stromov vo finále sa týkajú európskej súťaže //Európsky strom roka// (a vo finále bolo 12 stromov, nie 16).\nC – v Bruseli si fotograf T. Végh prevzal ocenenie v súťaži //Európsky strom roka//, nevyhodnocovali tam slovenskú anketu //Strom roka//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: 'Pravopis (prídavné mená a veľké písmená)',
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti sú slovné spojenia napísané správne?',
    options: [
      { key: 'A', text: 'európske štáty, bobrý chvostík' },
      { key: 'B', text: 'Európska Únia, Bruselské ocenenie' },
      { key: 'C', text: 'chorvátski prisťahovalci, hmyzích domovov' },
      { key: 'D', text: 'Bobor Vodný, lozorniansky les' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Skontroluj tri pravidlá: 1. druhové privlastňovacie prídavné mená od zvierat (vzor páví – vždy mäkké i/í), 2. vzťahové prídavné mená od miest a krajín (malé začiatočné písmeno), 3. rodové a druhové mená živočíchov (malé písmená).',
    solutionSteps: [
      {
        title: 'Kontrola správnej možnosti C',
        text: '• **chorvátski prisťahovalci** – vzťahové prídavné meno od krajiny píšeme s malým **ch** a v nominatíve množného čísla mužského životného rodu (vzor //pekný//) s mäkkým **-i**.\n• **hmyzích domovov** – druhové privlastňovacie prídavné meno od živočícha (//hmyz// → //hmyzí//) sa skloňuje podľa vzoru **páví**, preto má v príponách vždy dlhé mäkké **-í-**.'
      },
      {
        title: 'Odhalenie pravopisných chýb v možnostiach A, B, D',
        text: 'A – nesprávne „bobrý“ → druhové prídavné meno od zvieraťa //bobor// patrí pod vzor //páví//, správne je **bobrí** chvostík.\nB – v názve **Európska únia** sa slovo //únia// píše s malým **ú** a vzťahové prídavné meno od mesta Brusel sa píše s malým **b** (**bruselské** ocenenie).\nD – slovenské rodové a druhové mená živočíchov a rastlín sa píšu s malými písmenami (**bobor vodný**, podobne ako v ukážke //daniel biely//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: 'Komunikácia a pravopis (vykanie a oslovenie)',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorá z otázok do interview s fotografom Tiborom Véghom je napísaná správne?',
    options: [
      { key: 'A', text: 'Pán Végh, boli by ste taký dobrý a porozprávali nám o svojej najmilšej fotografii?' },
      { key: 'B', text: 'Vysvetlil by ste, prosím, našim čitateľom, ako ste kedysi vyvolával fotografie?' },
      { key: 'C', text: 'Pán Végh kedy ste začal fotografovať a kto bol vašou inšpiráciou či podnetom?' },
      { key: 'D', text: 'Na záver by ste boli takí láskaví a opísali nám pocity z výhry Dračieho duba?' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pri vykaní jednej osobe je sloveso vždy v množnom čísle – v minulom čase aj v spojení s „by ste“ sa končí na -li (boli by ste, vysvetlili by ste, nikdy nie vysvetlil by ste). Prídavné mená a zámená po slovese byť však pri jednom mužovi zostávajú v jednotnom čísle (taký dobrý, taký láskavý). Skontroluj aj čiarku za oslovením!',
    solutionSteps: [
      {
        title: 'Overenie správnej otázky A',
        text: 'Vo vete A je oslovenie „Pán Végh,“ správne oddelené čiarkou, slovesá pri vykaní sú v množnom čísle s **-li** (**boli** by ste, **porozprávali**) a prídavné meno so zámenom po slovese //byť// pri oslovení jedného muža zostávajú správne v jednotnom čísle (**taký dobrý**).'
      },
      {
        title: 'Chyby v možnostiach B, C, D',
        text: 'B – nesprávne tvary slovies v jednotnom čísle „Vysvetlil by ste“ a „ste vyvolával“ (správne: **Vysvetlili** by ste, ste **vyvolávali**).\nC – chýba čiarka za oslovením (**Pán Végh,**) a sloveso je nesprávne v jednotnom čísle „ste začal“ (správne: ste **začali**).\nD – pri vykaní jednému mužovi nesmie byť množné číslo „takí láskaví“ (správne: **taký láskavý**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 13,
    code: '13',
    type: 'text',
    category: 'Tvaroslovie (podstatné mená)',
    sharedContextId: 'ukazka_2',
    questionText: 'Vypíš z posledného odseku ukážky nesklonné všeobecné podstatné meno.',
    placeholder: 'Vypíš podstatné meno z 3. odseku',
    correctAnswerDisplay: 'finále',
    acceptedAnswers: ['finále', 'Finále'],
    commonMistakes: [
      {
        pattern: '^ekopolis$',
        hint: 'Ekopolis je vlastné podstatné meno (názov nadácie), ale zadanie žiada všeobecné podstatné meno.'
      }
    ],
    hint: 'Prečítaj si iba posledný (tretí) odsek a hľadaj cudzie všeobecné podstatné meno stredného rodu zakončené na -e, ktoré má vo všetkých pádoch rovnaký tvar (napr. do ..., v ...).',
    solutionSteps: [
      {
        title: 'Hľadanie nesklonného podstatného mena v 3. odseku',
        text: 'V poslednom odseku sa dvakrát nachádza slovo **finále** („zaradil sa do **finále** ankety“, „Do **finále** sa dostalo 12 jedinečných stromov“).'
      },
      {
        title: 'Overenie gramatických znakov',
        text: 'Podstatné meno cudzieho pôvodu **finále** (to finále – stredný rod) je **všeobecné** a **nesklonné** – vo všetkých pádoch jednotného aj množného čísla zostáva v nezmenenom tvare (N finále, G do finále, L vo finále).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je finále.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: 'Literatúra (literárne žánre – báj)',
    sharedContextId: 'ukazka_2',
    diagramId: 'q14_baje',
    questionText:
      'Na počesť Dračieho duba sa konala literárna súťaž v písaní bájí. Napíš meno súťažiacej, ktorá vystihla znaky tohto žánru.',
    placeholder: 'Napíš meno súťažiacej',
    correctAnswerDisplay: 'Elena',
    acceptedAnswers: ['Elena'],
    caseSensitive: true,
    caseHint: 'Pozor na veľké začiatočné písmeno: krstné meno súťažiacej je vlastné podstatné meno (Elena).',
    commonMistakes: [
      {
        pattern: '^ol[ií]via$',
        hint: 'Olíviin text má znaky rozprávky („Kedysi dávno...“, škriatkovia, spravodlivý kráľ), nie báje.'
      },
      {
        pattern: '^adela$',
        hint: 'Adelin veršovaný text o zakliatom Jankovi má znaky balady či rozprávky, nie báje.'
      }
    ],
    hint: 'Spomeň si na hlavné znaky báje (mýtu): vystupujú v nej bohovia alebo polobohovia a ľudia si ňou kedysi vysvetľovali vznik sveta či prírodných javov (napr. hromu a blesku).',
    solutionSteps: [
      {
        title: 'Znaky báje (mýtu)',
        text: 'Báj (mýtus) je epický žáner, v ktorom vystupujú **bohovia** s nadprirodzenou mocou a ktorý obrazne vysvetľuje prírodné úkazy alebo pôvod javov na svete.'
      },
      {
        title: 'Porovnanie textov troch súťažiacich',
        text: '• **Olívia** napísala **rozprávku** (neurčitý čas //Kedysi dávno//, rozprávkové bytosti – škriatkovia, drak, spravodlivý kráľ).\n• **Adela** napísala veršovaný príbeh s pochmúrnym motívom zakliatia a premeny (**baladu** / veršovanú rozprávku).\n• **Elena** vystihla znaky **báje**: vystupuje v nej staroslovanský **boh Perún** a text vysvetľuje prírodný jav počas letného slnovratu (hrom a úder blesku do zeme). Keďže ide o vlastné meno, píšeme ho s veľkým začiatočným písmenom **E**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je Elena.'
  }
];
