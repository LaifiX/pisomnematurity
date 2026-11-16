import type { QuestionData } from '../../types';

export const questionsPart2: QuestionData[] = [
  {
    id: 15,
    code: '15',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré tvrdenie o karete je na základe ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Počas kladenia vajec ich znesie do konca leta okolo stodvadsať.' },
      { key: 'B', text: 'Počas dýchania vo vode je závislá od jej teploty ako všetky plazy.' },
      { key: 'C', text: 'Počas svitania sa z viac ako polovice vajíčok vyliahnu mláďatá.' },
      { key: 'D', text: 'Počas čakania na liahnutie stráži hniezdo pred nebezpečenstvom.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si pozorne piatu vetu druhého odseku – kedy sa maličké korytnačky vyliahnu (čo znamená „za úsvitu“) a z koľkých percent vajíčok?',
    solutionSteps: [
      {
        title: 'Overenie možnosti C v 2. odseku',
        text: 'V druhom odseku čítame: „**Zo 60 – 70 % vajíčok** sa neskôr **za úsvitu** vyliahnu maličké korytnačky...“ Spojenie //za úsvitu// znamená **počas svitania** a údaj **60 – 70 %** predstavuje **viac ako polovicu** (viac než 50 %) vajíčok.'
      },
      {
        title: 'Vylúčenie možností A, B, D',
        text: 'A – okolo 120 vajec uloží kareta do **jedného** hniezda, no do konca leta znesie vajcia v priemere **3- až 4-krát** (spolu teda omnoho viac než 120).\nB – kareta **nedýcha vo vode**; má pľúca, preto sa musí pravidelne vynárať nad hladinu.\nD – kareta hniezdo nestráži; len čo ho zahrabe pieskom, vráti sa späť do mora.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 16,
    code: '16',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'Podľa ukážky kareta po vyliahnutí',
    options: [
      { key: 'A', text: 'môže silný svetelný zdroj na obzore považovať za more.' },
      { key: 'B', text: 'chvíľu odpočíva, až potom sa vydáva na náročnú cestu.' },
      { key: 'C', text: 'zdolá prvú prekážku v živote a vydáva sa za tými náročnejšími.' },
      { key: 'D', text: 'sa odoberá do mora, aby sa o rok znova vrátila na rovnakú pláž.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozri sa na záver druhého odseku – podľa čoho sa čerstvo vyliahnuté mláďatá orientujú, keď hľadajú smer k moru?',
    solutionSteps: [
      {
        title: 'Overenie možnosti A v závere 2. odseku',
        text: 'V texte sa píše, že vyliahnuté mláďatá „inštinktívne pritom **hľadajú svetlý bod na obzore, ktorý má byť podľa ich genetickej informácie morom**“. Silný svetelný zdroj na obzore preto môžu považovať za morskú hladinu.'
      },
      {
        title: 'Vylúčenie možností B, C, D',
        text: 'B – po vyliahnutí neodpočívajú, ale „**bez otáľania** vyrazia na cestu smerom k moru“.\nC – samotný presun z hniezda do mora je už „**najťažšia** cesta ich života“, nie len ľahšia prvá prekážka.\nD – na pláž sa nevracajú o rok, ale až v reprodukčnom (plodnom) veku, teda podľa tabuľky **od 25 rokov**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'Na znášanie vajec je pre karety vhodná pláž',
    options: [
      { key: 'A', text: 's mäkkým kamenistým podkladom.' },
      { key: 'B', text: 'chránená pred vplyvmi počasia.' },
      { key: 'C', text: 's častým striedaním teploty.' },
      { key: 'D', text: 'v okolí jazera alebo ostrova.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Odpoveď nájdeš hneď v prvej vete druhého odseku ukážky.',
    solutionSteps: [
      {
        title: 'Vyhľadanie informácie na začiatku 2. odseku',
        text: 'Prvá veta 2. odseku znie: „Kareta znáša vajcia na piesočnatých plážach, ktoré sú ľahko prístupné a súčasne **dobre chránené pred nepriazňou počasia**.“'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – pláž je **piesočnatá** (s mäkkým pieskom), nie kamenistá.\nC – časté striedanie teploty sa v ukážke vôbec nespomína.\nD – kareta je **morský** plaz, nežije v okolí sladkovodných jazier.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: 'Čítanie s porozumením (porovnávanie údajov)',
    sharedContextId: 'ukazka_3',
    questionText:
      'V ktorej možnosti sú na základe ukážky údaje o korytnačke karete zoradené od najmenšieho po najväčší?',
    options: [
      {
        key: 'A',
        text: 'dĺžka karety, veľkosť vyliahnutej korytnačky, hĺbka jamky na vajcia, vzdialenosť hniezda od mora'
      },
      {
        key: 'B',
        text: 'veľkosť vyliahnutej korytnačky, dĺžka karety, vzdialenosť hniezda od mora, hĺbka jamky na vajcia'
      },
      {
        key: 'C',
        text: 'hĺbka jamky na vajcia, veľkosť vyliahnutej korytnačky, vzdialenosť hniezda od mora, dĺžka karety'
      },
      {
        key: 'D',
        text: 'veľkosť vyliahnutej korytnačky, hĺbka jamky na vajcia, dĺžka karety, vzdialenosť hniezda od mora'
      }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Vyhľadaj v tabuľke a v 2. odseku všetky štyri rozmery a premeň si ich na rovnakú jednotku (napr. centimetre): koľko meria mláďa, aká hlboká je jamka, aká dlhá je dospelá kareta a čo delí hniezdo od mora?',
    solutionSteps: [
      {
        title: 'Vyhľadanie a porovnanie štyroch rozmerov z ukážky',
        text: '1. **veľkosť vyliahnutej korytnačky**: najviac **5 cm** („žiadna nemeria viac ako 5 cm“).\n2. **hĺbka jamky na vajcia**: zhruba **40 cm** („vyhĺbi zhruba 40-centimetrovú jamku“).\n3. **dĺžka karety**: zhruba **1 m**, čiže **100 cm** (údaj v tabuľke).\n4. **vzdialenosť hniezda od mora**: **viacero metrov**, teda viac než 100 cm („Tie metre, ktoré mláďatá delia od morskej hladiny...“).'
      },
      {
        title: 'Zoradenie od najmenšieho po najväčší údaj',
        text: 'Poradie **5 cm → 40 cm → 1 m (100 cm) → niekoľko metrov** presne zodpovedá možnosti **D**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: 'Tvaroslovie (druhy zámen)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti sa nachádzajú zámená rovnakého druhu?',
    options: [
      { key: 'A', text: 'núti ju vyplávať, cesta ich života' },
      { key: 'B', text: 'núti ju vyplávať, jej telesná teplota' },
      { key: 'C', text: 'väčšina z nich, uloží do nej vajíčka' },
      { key: 'D', text: 'väčšina z nich, podľa ich informácie' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Rozlišuj osobné základné zámená (pýtame sa na ne pádovými otázkami koho? z koho? do čoho?) a osobné privlastňovacie zámená (pýtame sa na ne otázkou čí? čia? čie? – napr. jej teplota, ich života).',
    solutionSteps: [
      {
        title: 'Rozlíšenie osobných základných a privlastňovacích zámen',
        text: 'Pozor na tvary //jej// a //ich//: ak stoja pred podstatným menom a pýtame sa na ne otázkou **čí? čia? čie?** (//čia teplota? jej teplota//; //čieho života? ich života//; //čej informácie? ich informácie//), ide o **osobné privlastňovacie zámená**.\nNaopak, ak zámeno zastupuje samotné podstatné meno a pýtame sa naň pádovou otázkou (//núti koho? ju//; //z čoho? z nich//; //do čoho? do nej//), ide o **osobné základné zámeno**.'
      },
      {
        title: 'Kontrola možností A – D',
        text: 'A – **ju** (osobné základné) × **ich** života (osobné privlastňovacie).\nB – **ju** (osobné základné) × **jej** teplota (osobné privlastňovacie).\nC – **z nich** (osobné základné, G pl.) + **do nej** (osobné základné, G sg.) → **rovnaký druh zámen**.\nD – **z nich** (osobné základné) × **ich** informácie (osobné privlastňovacie).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 20,
    code: '20',
    type: 'text',
    category: 'Tvaroslovie (pomnožné podstatné mená)',
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíš z tabuľkovej časti ukážky pomnožné podstatné meno.',
    placeholder: 'Vypíš slovo z tabuľky',
    correctAnswerDisplay: 'pľúcami',
    acceptedAnswers: ['pľúcami', 'Pľúcami', 'pľúca', 'Pľúca', 'pľúc', 'pľúcam', 'pľúcach'],
    footnote:
      'Odpovede na túto úlohu môžu byť zapísané v akomkoľvek gramatickom tvare, ale musia byť pravopisne správne.',
    commonMistakes: [
      {
        pattern: '^(plutvy|plutva|končatiny|končatina)$',
        hint: 'Slová „končatiny“ a „plutvy“ majú aj jednotné číslo (tá končatina, tá plutva). Pomnožné podstatné meno má iba tvary množného čísla, aj keď pomenúva jeden orgán!'
      },
      {
        pattern: '^pl[uú]c',
        hint: 'Nezabudni na mäkčeň na ľ v slove „pľúcami“ / „pľúca“.'
      }
    ],
    hint: 'Pomnožné podstatné meno pomenúva aj jednu vec či jeden orgán, ale má iba tvary množného čísla (ukazujeme naň „tie ...“, nemá jednotné číslo). Pozri si riadok „Dýchanie“ v tabuľke!',
    solutionSteps: [
      {
        title: 'Čo je pomnožné podstatné meno',
        text: '**Pomnožné podstatné meno** má iba tvar množného čísla, hoci označuje len jeden predmet alebo orgán (napr. //nožnice, okuliare, ústa, pľúca//). Ostatné podstatné mená v množnom čísle v tabuľke majú aj jednotné číslo (//končatiny → tá končatina, plutvy → tá plutva, rokov → ten rok, dní → ten deň//).'
      },
      {
        title: 'Vyhľadanie slova v tabuľke',
        text: 'V riadku //Dýchanie// je uvedené slovo **pľúcami** (základný tvar //tie **pľúca**//, skloňuje sa podľa vzoru //mesto//). Podľa kľúča sa uznáva tvar z tabuľky (**pľúcami**) aj základný tvar (**pľúca**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je pľúcami (alebo pľúca).'
  },
  {
    id: 21,
    code: '21',
    type: 'text',
    category: 'Tvaroslovie a pravopis (prídavné mená – vzor páví)',
    sharedContextId: 'ukazka_3',
    questionText: 'Doplň správne druhové privlastňovacie prídavné meno od slova //kareta//.',
    fillSentenceHtml: '{{blank}} ostrov',
    placeholder: 'Doplň prídavné meno',
    correctAnswerDisplay: 'karetí',
    acceptedAnswers: ['karetí', 'Karetí'],
    commonMistakes: [
      {
        pattern: '^karet[yý]$',
        hint: 'Druhové privlastňovacie prídavné mená utvorené od názvov zvierat sa skloňujú podľa vzoru páví – na konci majú vždy dlhé mäkké -í (karetí).'
      },
      {
        pattern: '^kareť[ií]$',
        hint: 'Pred samohláskou í sa mäkkosť spoluhlásky t neoznačuje mäkčeňom – píšeme spojenie -tí (karetí).'
      },
      {
        pattern: '^karetin$',
        hint: 'Príponou -in privlastňujeme jednej konkrétnej samici (vzor matkin). Zadanie žiada druhové privlastňovacie prídavné meno celého druhu podľa vzoru páví (páví ostrov → karetí ostrov).'
      }
    ],
    hint: 'Druhové privlastňovacie prídavné mená od názvov zvierat (včela → včelí, ryba → rybí, žaba → žabí, kareta → ...) patria pod vzor páví a majú v príponách vždy mäkké i/í!',
    solutionSteps: [
      {
        title: 'Utvorenie druhového privlastňovacieho prídavného mena',
        text: 'Od pomenovania živočícha //kareta// tvoríme druhové privlastňovacie prídavné meno (privlastňujúce celému živočíšnemu druhu) podľa vzoru **páví**: //včela → včelí, žaba → žabí, kareta →// **karetí**.'
      },
      {
        title: 'Kontrola rodu a pravopisu',
        text: 'Podstatné meno //ostrov// je v nominatíve jednotného čísla mužského rodu (//aký/čí ostrov? páví ostrov// → **karetí** ostrov). Píšeme dlhé mäkké **-í** bez mäkčeňa na //t// (spoluhláska //t// sa pred //-í// vyslovuje mäkko automaticky).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je karetí.'
  },
  {
    id: 22,
    code: '22',
    type: 'choice',
    category: 'Literatúra (bájka a príslovia)',
    sharedContextId: 'ukazka_4',
    questionText: 'Ktoré tvrdenie najvhodnejšie vystihuje poučenie z bájky?',
    options: [
      { key: 'A', text: 'Sýty hladnému neverí.' },
      { key: 'B', text: 'Lepšie rozumom ako kolom.' },
      { key: 'C', text: 'Na hrubé vrece hrubá záplata.' },
      { key: 'D', text: 'Dobre myšiam, keď mačky doma nieto.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si, ako stará lasica prekonala svoj hendikep: keď už nevládala myši naháňať silou a rýchlosťou, čo namiesto toho použila?',
    solutionSteps: [
      {
        title: 'Prepojenie deja bájky s príslovím',
        text: 'Stará lasica už nemala niekdajšiu rýchlosť ani fyzickú silu („kolom“), aby myši dobehla. Použila preto šikovný nápad a lesť („rozumom“) – ukryla sa v múke a myši prišli samy k nej. Poučenie teda presne vystihuje príslovie **Lepšie rozumom ako kolom** (dôvtip zmôže viac než hrubá sila).'
      },
      {
        title: 'Prečo ostatné príslovia nesedia',
        text: 'A – hovorí o nepochopení človeka v núdzi zo strany toho, kto má dostatok.\nC – hovorí o oplácaní hrubého správania rovnakou hrubosťou.\nD – lasica bola priamo v miestnosti (ukrytá vo vreci) a myši pochytala.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 23,
    code: '23',
    type: 'choice',
    category: 'Tvaroslovie (slovné druhy – príslovky)',
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti sa nachádza príslovka?',
    options: [
      { key: 'A', text: 'zaliezla do vreca' },
      { key: 'B', text: 'ani myši sa jej nebáli' },
      { key: 'C', text: 'dôkladne sa ňou prikryla' },
      { key: 'D', text: 'niekdajšia šikovnosť a obratnosť' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor, nemýľ si vetný člen (príslovkové určenie „do vreca“ = predložka + podstatné meno) so slovným druhom príslovka! Príslovka je jednoslovný neohybný plnovýznamový slovný druh (napr. ako sa prikryla?).',
    solutionSteps: [
      {
        title: 'Vyhľadanie príslovky v možnosti C',
        text: 'V spojení „**dôkladne** sa ňou prikryla“ odpovedá slovo **dôkladne** na otázku //ako sa prikryla?// – ide o neohybný plnovýznamový slovný druh, **príslovku spôsobu** (utvorenú od prídavného mena //dôkladný//).'
      },
      {
        title: 'Slovné druhy v ostatných možnostiach',
        text: 'A – //zaliezla// (sloveso) + //do// (predložka) + //vreca// (podstatné meno; spojenie //do vreca// je síce príslovkovým určením miesta, ale slovným druhom je to predložka s podstatným menom, nie príslovka!).\nB – //ani// (častica) + //myši// (podstatné meno) + //sa// (zvratné zámeno/súčasť slovesa) + //jej// (zámeno) + //nebáli// (sloveso).\nD – //niekdajšia// (prídavné meno) + //šikovnosť// (podstatné meno) + //a// (spojka) + //obratnosť// (podstatné meno).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: 'Pravopis a lexikológia (vybrané slová po s)',
    sharedContextId: 'ukazka_5',
    questionText: 'Uveď **vybrané slovo**, ktorého význam charakterizuje počasie v texte piesne Zažni.',
    fillSentenceHtml: 'Text piesne Zažni opisuje {{blank}} počasie.',
    placeholder: 'Doplň vybrané slovo',
    correctAnswerDisplay: 'sychravé',
    acceptedAnswers: ['sychravé', 'Sychravé'],
    commonMistakes: [
      {
        pattern: '^s[ií]chrav',
        hint: 'Slovo „sychravý“ patrí medzi vybrané slová po s – po s sa píše tvrdé y (sychravé).'
      },
      {
        pattern: '^sychrav[ýyá]$',
        hint: 'Prispôsob rod prídavného mena podstatnému menu „počasie“ (stredný rod: aké počasie? sychravé).'
      },
      {
        pattern: '^(daždivé|upršané|mokré|chladné|nočné)$',
        hint: 'Zadanie výslovne žiada vybrané slovo! Zopakuj si vybrané slová po s: ktoré z nich pomenúva vlhké, chladné, nevľúdne a daždivé počasie?'
      }
    ],
    hint: 'V piesni sa spomínajú „nočné kaluže“ a „dážď“ – ide o chladné, vlhké a daždivé počasie. Zopakuj si rad vybraných slov po s (syn, syr, sýty, sypať, syčať, sychravý...) a daj slovo do tvaru k slovu „počasie“!',
    solutionSteps: [
      {
        title: 'Výber vhodného vybraného slova podľa obsahu piesne',
        text: 'V texte piesne sa spomínajú //nočné kaluže// a //dážď//. Chladné, sychravé, nevľúdne a vlhké počasie pomenúva **vybrané slovo po s**: **sychravý**.'
      },
      {
        title: 'Gramatická zhoda vo vete a pravopis',
        text: 'Vo vete //Text piesne Zažni opisuje ______ počasie.// sa pýtame: //aké počasie?// (stredný rod, akuzatív jednotného čísla, vzor //pekný//) → **sychravé** (s tvrdým **y** po //s// a dlhým **-é** na konci).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je sychravé.'
  },
  {
    id: 25,
    code: '25',
    type: 'text',
    category: 'Tvaroslovie (skloňovanie podstatného mena euro)',
    questionText:
      'Nájdi v nasledujúcej vete chybné slovo a napíš ho správne.\n//Vybrali sme si výborný zákusok a zaplatili sme zaň päť euro a 10 centov.//',
    placeholder: 'Napíš opravené slovo',
    correctAnswerDisplay: 'eur',
    acceptedAnswers: ['eur', 'Eur'],
    commonMistakes: [
      {
        pattern: '^(päť|5)\\s+eur$',
        hint: 'Napíš len samotné chybné slovo v správnom tvare (eur), bez číslovky päť.'
      },
      {
        pattern: '^eur[aá]$',
        hint: 'Tvar „eurá“ stojí po číslovkách dva, tri, štyri (dve eurá). Po číslovke päť nasleduje genitív množného čísla podľa vzoru mesto (päť miest → päť eur).'
      },
      {
        pattern: '^desiatich|desať$',
        hint: 'Zápis číslovky číslicou „10 centov“ nie je gramatickou chybou – všimni si nespisovný nesklonný tvar „päť euro“!'
      }
    ],
    hint: 'Pozri sa na spojenie s číslovkou „päť“: podstatné meno „euro“ je v slovenčine sklonné a skloňuje sa podľa vzoru mesto (jedno mesto, dve mestá, päť miest → jedno euro, dve eurá, päť ...).',
    solutionSteps: [
      {
        title: 'Odhalenie nespisovného tvaru vo vete',
        text: 'Chybným slovom vo vete je tvar **euro** v spojení //päť euro//. Podstatné meno stredného rodu //euro// **nie je nesklonné** – skloňuje sa pravidelne podľa vzoru **mesto**.'
      },
      {
        title: 'Určenie správneho pádového tvaru po číslovke päť',
        text: 'Po základných číslovkách od //päť// vyššie stojí počítaný predmet v **genitíve množného čísla**: //päť miest, päť áut// → päť **eur**. Zadanie žiada napísať len samotné opravené slovo: **eur**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je eur.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: 'Čítanie s porozumením a slová cudzieho pôvodu',
    sharedContextId: 'ukazka_6',
    questionText: 'Z textu vyplýva, že',
    options: [
      { key: 'A', text: 'žiaci v danej triede majú podobné záujmy.' },
      { key: 'B', text: 'hovorca triedy rád rozširuje vtipy o škole.' },
      { key: 'C', text: 'inšpektor príde do školy vopred ohlásený.' },
      { key: 'D', text: 'väčšina žiakov obľubuje kreslené seriály.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prelož si do bežnej slovenčiny cudzie slová v texte: „variabilná“ (rôznorodá), „spíker“ (hovorca), „propaguje anekdoty“ (rozširuje vtipy), „inkognito“ (utajene, neohlásene).',
    solutionSteps: [
      {
        title: 'Preklad cudzích slov v tretej vete textu',
        text: 'V texte sa píše: „Jano Cviker, **triedny spíker, propaguje anekdoty o škole**.“ Slovo //spíker// znamená **hovorca** (rečník), sloveso //propaguje// znamená šíri/rozširuje a //anekdoty// sú krátke vtipné príbehy, čiže **vtipy**. Tvrdenie B teda presne vyplýva z textu.'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – „Naša triedna populácia je veľmi **variabilná**“ (= premenlivá, rôznorodá, každý sa zaujíma o niečo iné).\nC – inšpektor prišiel **inkognito** (= utajene, nepoznaný, bez ohlásenia).\nD – komiksy čítajú len „niektoré indivíduá“ (nie väčšina) a komiks je tlačený kreslený príbeh, nie seriál.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: 'Lexikológia (opozitá v kontexte)',
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré sloveso má podľa textu opačný význam ako sloveso //šetriť//?',
    options: [
      { key: 'A', text: 'plytvať' },
      { key: 'B', text: 'nemíňať' },
      { key: 'C', text: 'obmedziť' },
      { key: 'D', text: 'neuložiť' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Podľa textu „šetriť“ znamená chrániť prírodné zdroje, zdravie a sily človeka, aby sa nezničili či zbytočne nevyčerpali. Ktoré sloveso vyjadruje presný opak – bezohľadne nimi mrhať a rozhadzovať ich?',
    solutionSteps: [
      {
        title: 'Určenie opozita k významu slova „šetriť“',
        text: 'Text vysvetľuje, že //šetriť// znamená „chrániť, starať sa, aby sa vec nezničila“ (napr. šetriť prírodné zdroje, zdravie, sily). Opačný význam – neuvážene rozhadzovať, mrhať prírodnými zdrojmi či silami – má sloveso **plytvať**.'
      },
      {
        title: 'Prečo ostatné možnosti nie sú opozitá',
        text: 'B – //nemíňať// má význam blízky šetreniu a sporeniu, nie opačný.\nC – //obmedziť// nie je opakom ochrany a šetrenia.\nD – //neuložiť// nadväzuje na vysvetlenie slovesa //sporiť// („sporiť, čiže ukladať“), nie //šetriť//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 28,
    code: '28',
    type: 'text',
    category: 'Skladba (prisudzovací sklad a slovesno-menný prísudok)',
    questionText:
      'Vypíš z nasledujúcej vety prisudzovací sklad.\n//Kórejské svahy boli svedkom najlepšieho športového vystúpenia.//',
    placeholder: 'Vypíš prisudzovací sklad',
    correctAnswerDisplay: 'svahy boli svedkom',
    acceptedAnswers: ['svahy boli svedkom', 'Svahy boli svedkom'],
    unorderedWords: ['svahy', 'boli', 'svedkom'],
    footnote: 'Za správnu odpoveď budú uznané uvedené tri slová v ktoromkoľvek poradí a akýmkoľvek spôsobom zápisu.',
    commonMistakes: [
      {
        pattern: '^(svahy\\s+boli|boli\\s+svahy)$',
        hint: 'Pozor na typ prísudku: sloveso „boli“ je tu iba sponové (neplnovýznamové) a spolu s podstatným menom „svedkom“ tvorí jeden slovesno-menný prísudok! Prisudzovací sklad má preto 3 slová.'
      },
      {
        pattern: 'kórejsk',
        hint: 'Slovo „Kórejské“ je zhodný prívlastok – do prisudzovacieho skladu vypisujeme iba samotný podmet a prísudok bez rozvíjajúcich vetných členov.'
      },
      {
        pattern: 'vystúpenia',
        hint: 'Spojenie „najlepšieho športového vystúpenia“ rozvíja slovo svedkom ako prívlastok – nepatrí do prisudzovacieho skladu.'
      }
    ],
    hint: 'Prisudzovací sklad tvorí dvojica podmet + prísudok (bez prívlastkov!). Daj veľký pozor na prísudok: samotné sloveso „boli“ tu nestačí – je to sponové sloveso, ku ktorému patrí menná časť v inštrumentáli („boli kým/čím?“).',
    solutionSteps: [
      {
        title: 'Určenie podmetu vety',
        text: 'Pýtame sa //kto? čo?// → **svahy** (vyjadrený podmet; slovo //Kórejské// je len zhodný prívlastok a do prisudzovacieho skladu nepatrí).'
      },
      {
        title: 'Určenie slovesno-menného prísudku',
        text: 'Sloveso //boli// v tejto vete neznamená „existovali/nachádzali sa niekde“, ale plní úlohu **sponového slovesa**, ktoré spája podmet s podstatným menom **svedkom** (//svahy boli kým/čím? – boli svedkom//). Spolu tvoria nerozlučný **slovesno-menný prísudok**: **boli svedkom**.\nCelý prisudzovací sklad teda tvoria tri slová: **svahy boli svedkom**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je svahy boli svedkom.'
  },
  {
    id: 29,
    code: '29',
    type: 'text',
    category: 'Pravopis a tvaroslovie (predložky a vlastné mená)',
    questionText:
      'Na základe nasledujúceho tvrdenia doplň pravopisne správne v náležitom tvare aj s predložkou názov krajiny, z ktorej pochádza modrý syr.\n//Gurmánsky modrý francúzsky syr chutí najlepšie s krehkým chlebom a čerstvým ovocím.//',
    fillSentenceHtml: '//Tento syr pochádza// {{blank}} .',
    placeholder: 'Doplň predložku a názov krajiny',
    correctAnswerDisplay: 'z Francúzska',
    acceptedAnswers: ['z Francúzska'],
    caseSensitive: true,
    caseHint:
      'Pozor na malé a veľké písmená: predložka uprostred vety sa píše s malým „z“ a názov krajiny s veľkým „F“ (z Francúzska).',
    commonMistakes: [
      {
        pattern: '^s\\s+franc[uú]zska$',
        hint: 'Pýtame sa „pochádza z koho? z čoho?“ (genitív) – píše sa predložka „z“, nie „s“ (hoci sa pri výslovnosti pred neznelým F spodobuje na [s]).'
      },
      {
        pattern: '^franc[uú]zsk[oa]$',
        hint: 'Zadanie výslovne žiada doplniť názov krajiny aj s predložkou (pochádza odkiaľ? z Francúzska).'
      },
      {
        pattern: 'franc[uú]zka',
        hint: 'Pozor na skupinu spoluhlások -zs- v koreni a prípone slova: Francúz → Francúzsko → z Francúzska (rovnako ako vo vete „francúzsky“).'
      }
    ],
    hint: 'Všimni si vo vete prídavné meno „francúzsky“ – utvor od neho názov štátu (s veľkým F a skupinou -zs-) a pridaj predložku genitívu (odkiaľ? z koho, z čoho? – pozor na spodobovanie z/s!).',
    solutionSteps: [
      {
        title: 'Určenie krajiny pôvodu a pádu s predložkou',
        text: 'Vo vete sa spomína //modrý **francúzsky** syr//, pochádza teda z krajiny **Francúzsko**. Na sloveso //pochádza// sa pýtame //odkiaľ? (z koho? z čoho?)// – v **genitíve** používame predložku **z** (hoci ju pred neznelou spoluhláskou //f// vyslovujeme spodobene ako [s]).'
      },
      {
        title: 'Kontrola pravopisu a veľkých písmen',
        text: 'Spojenie dopĺňame doprostred vety, preto predložku píšeme s malým **z** a vlastné meno štátu s veľkým **F**, dlhým **ú** a skupinou **-zs-**: **z Francúzska**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je z Francúzska.'
  },
  {
    id: 30,
    code: '30',
    type: 'choice',
    category: 'Tvaroslovie a pravopis (číslovky)',
    questionText: 'V ktorej vete je číslovka napísaná pravopisne správne?',
    options: [
      { key: 'A', text: 'Do umeleckej súťaže sa môžeš prihlásiť do šestnástych rokov.' },
      { key: 'B', text: 'Úspešných bolo štyridsať jedna žiačok nášho okresu.' },
      { key: 'C', text: 'Na technicky zameranú vedeckú súťaž sa prihlásili osem krát.' },
      { key: 'D', text: 'Naši zástupcovia skončili v krajskom kole súťaže štvrtí.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Skontroluj 4 pravidlá pri číslovkách: 1. základná číslovka šestnásť má pri skloňovaní mäkké -i-, 2. zložené číslovky 21 – 99 v základnom tvare píšeme spolu a s -jeden, 3. násobné číslovky s -krát píšeme vždy spolu, 4. radová číslovka v N pl. mužského životného rodu má mäkké -í.',
    solutionSteps: [
      {
        title: 'Overenie správnej možnosti D',
        text: 'Vo vete D stojí radová číslovka //štvrtý//, ktorá sa vzťahuje na životné podstatné meno mužského rodu v množnom čísle (//naši zástupcovia – koľkí v poradí skončili?//). Skloňuje sa podľa vzoru **pekný** (//pekní chlapci//), preto má v nominatíve množného čísla správne dlhé mäkké **-í**: **štvrtí**.'
      },
      {
        title: 'Pravopisné chyby v možnostiach A, B, C',
        text: 'A – nesprávne „do šestnástych rokov“ → pýtame sa //do koľkých rokov?// (základná číslovka //šestnásť// má v genitíve mäkké **-i-**: **do šestnástich** rokov).\nB – nesprávne „štyridsať jedna žiačok“ → zložené základné číslovky sa v nominatíve píšu spolu jedným slovom a zakončené sú vždy na **-jeden**: **štyridsaťjeden** žiačok.\nC – nesprávne „osem krát“ → násobné číslovky utvorené časticou/zložkou **-krát** sa píšu vždy **spolu ako jedno slovo**: **osemkrát**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  }
];
