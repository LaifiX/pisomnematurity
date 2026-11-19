import type { QuestionData } from '../../types';

// Úlohy 33 – 64. Odpovede podľa oficiálneho kľúča NIVaM k testu 26 1403 (Maturita 2026, marcový termín).

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart2: QuestionData[] = [
  // ---------------- Ukážka 5 – Antigona
  {
    id: 33,
    code: '33',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 5?',
    options: [
      { key: 'A', text: 'Kreon vypočúva Ismenu, lebo obviňuje ju i Antigonu z rovnakého činu.' },
      { key: 'B', text: 'Kreon núti Ismenu, aby sa priznala k pokusu o jeho zosadenie z trónu.' },
      { key: 'C', text: 'Ismena priznáva vinu, aby tým zachránila Antigonu pred popravou.' },
      { key: 'D', text: 'Antigona odpúšťa sestre, preto odmieta Ismenino priznanie viny.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prečítaj si pozorne Kreonovu otázku na konci jeho repliky („Vrav – priznávaš sa, že aj ty si mala niečo spoločné s…“). O akom čine hovorí a ako na priznanie sestry reaguje Antigona?',
    solutionSteps: [
      {
        title: 'Čo vyplýva z Kreonovej repliky',
        text: 'Kreon si dal priviesť Ismenu a priamo sa jej pýta: //„Vrav – priznávaš sa, že aj ty si mala niečo spoločné s tým pohrebom, či to chceš pod prísahou poprieť?“// Podozrieva teda Ismenu zo spoluúčasti na **tom istom čine** (zakázanom pohrebe brata), z ktorého už usvedčil Antigonu.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – o „dvoch skazách, číhajúcich na trón“ hovorí Kreon iba obrazne v hneve; v skutočnosti ju vypočúva pre pohreb, nie pre pokus o štátny prevrat.\nC – Ismena nechce Antigonu zachrániť pred trestom, ale chce zomrieť spolu s ňou (//„Ach, sestra, veď mi nebráň zomrieť s tebou!“//).\nD – Antigona sestre láskavo neodpúšťa, naopak, trpko jej vyčíta predošlú zbabelosť: //„veď ty si váhala… A nemám rada tých, čo majú radi iba slovami.“//'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 34,
    code: '34',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'V replikách ktorých postáv v ukážke 5 sa vyskytujú nepriame pomenovania?',
    options: [
      { key: 'A', text: 'Iba v replikách Ismeny a Antigony.' },
      { key: 'B', text: 'Iba v replikách Kreonta a Ismeny.' },
      { key: 'C', text: 'Iba v replikách Antigony a náčelníka zboru.' },
      { key: 'D', text: 'V replikách všetkých postáv.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Nepriame (obrazné) pomenovania sú najmä trópy (napr. metafora, personifikácia, prirovnanie, epiteton) a obrazné frazeologizmy – keď sa niečo nepomenúva priamo doslovne, ale obrazom. Skontroluj postupne repliky všetkých štyroch postáv.',
    solutionSteps: [
      {
        title: 'Hľadanie obrazných pomenovaní u každej postavy',
        text: 'Prejdime repliky všetkých štyroch vystupujúcich postáv:\n• **Náčelník zboru**: //„Poriadne zmokli tie čarovné líčka!“// (metafora pre slzy na tvári + epitetá //rumennú tváričku//, //čarovné líčka//).\n• **Kreon**: //„túlila vždy ako had“// (prirovnanie), //„tajne si mi pila krv“// (frazeologizmus/metafora), //„pestujem dve skazy, číhajúce na môj trón“// (metafora).\n• **Ismena**: //„v búrke nešťastia som na tej istej lodi ako ty!“// (metafora a frazeologizmus).\n• **Antigona**: //„Ak je Spravodlivosť, toto nesmie dopustiť“// (personifikácia – abstraktný pojem Spravodlivosť koná ako živá bytosť).'
      },
      {
        title: 'Záver',
        text: 'Nepriame (obrazné) pomenovania sa nachádzajú **v replikách všetkých postáv** v ukážke.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 35,
    code: '35',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Komu chce Ismena vzdať posledný hold?',
    options: [
      { key: 'A', text: 'Otcovi.' },
      { key: 'B', text: 'Veštcovi.' },
      { key: 'C', text: 'Bratovi.' },
      { key: 'D', text: 'Sestre.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozri sa na posledný verš ukážky („Bude to môj posledný hold mŕtvemu!“) a spomeň si na dej diela Antigona: koho zakázal kráľ Kreon pochovať?',
    solutionSteps: [
      {
        title: 'Spojenie ukážky s dejom diela Antigona',
        text: 'Ismena vo svojej poslednej replike volá: //„Ach, sestra, veď mi nebráň zomrieť s tebou! Bude to môj posledný hold **mŕtvemu**!“// Tvar mužského rodu //mŕtvemu// aj spomínaný pohreb odkazujú na ich padlého **brata Polyneika**, ktorého kráľ Kreon zakázal pochovať pod hrozbou trestu smrti.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – ich otec Oidipus zomrel už skôr mimo tohto sporu o pohreb.\nB – slepý veštec Teiresias je nažive a až neskôr varuje Kreonta pred hnevom bohov.\nD – Antigona je ešte nažive (navyše slovo //mŕtvemu// je v mužskom rode, nemôže teda označovať sestru).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 36,
    code: '36',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré tvrdenie o diele //Antigona// je pravdivé?',
    options: [
      { key: 'A', text: 'Antigona a Ismena sú dcéry kráľa Kreonta.' },
      { key: 'B', text: 'Kreon je autoritatívny a tvrdohlavý vládca v meste Téby.' },
      { key: 'C', text: 'Ismena nebola vlastnou sestrou Antigony.' },
      { key: 'D', text: 'Antigona nevedela, že koná v rozpore s príkazom kráľa.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Zopakuj si rodinné vzťahy a hlavný konflikt v diele Antigona: kto bol otcom Antigony a Ismeny, v ktorom gréckom meste vládol Kreon a či Antigona pochovala brata nevedomky, alebo vedome napriek zákazu.',
    solutionSteps: [
      {
        title: 'Charakteristika Kreonta a dejiska',
        text: 'Dej antickej hry //Antigona// sa odohráva v starogréckom meste **Téby**. Kráľ **Kreon** v nej vystupuje ako neústupčivý, **autoritatívny a tvrdohlavý vládca**, ktorý povýši svoj mocenský zákaz nad odveké božské a ľudské zákony a odmieta počúvať Antigonu, svojho syna aj veštca, až kým nie je neskoro.'
      },
      {
        title: 'Prečo sú ostatné možnosti nepravdivé',
        text: 'A, C – Antigona a Ismena sú **vlastné sestry**, dcéry bývalého tébskeho kráľa **Oidipa** a kráľovnej Jokasty (Kreon je brat Jokasty, teda ich ujo).\nD – Antigona o Kreonovom príkaze veľmi dobre vedela (hneď v prológu o ňom hovorí Ismene) a brata pochovala vedome z morálneho presvedčenia.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 37,
    code: '37',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'V ktorej možnosti je uvedené meno Antigoninho snúbenca?',
    options: [
      { key: 'A', text: 'Haimon' },
      { key: 'B', text: 'Oidipus' },
      { key: 'C', text: 'Eteokles' },
      { key: 'D', text: 'Polyneikes' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Vylúč mená Antigoninho otca a jej dvoch bratov, ktorí padli v boji o Téby. Zostane meno Kreontovho syna, ktorý sa Antigony zastal a v hrobke si pri nej vzal život.',
    solutionSteps: [
      {
        title: 'Postavy v diele Antigona',
        text: 'Snúbencom Antigony je **Haimon** – syn kráľa Kreonta a kráľovnej Eurydiky. Rozumne sa pokúsi obmäkčiť svojho otca, a keď nájde Antigonu v skalnej hrobke mŕtvu, zo žiaľu sa prebodne mečom.'
      },
      {
        title: 'Kto sú ostatné postavy',
        text: 'B – **Oidipus** bol bývalý tébsky kráľ, otec Antigony a Ismeny.\nC, D – **Eteokles** a **Polyneikes** boli Antigonini bratia, ktorí sa navzájom zabili v boji o vládu nad Tébami (Eteokla dal Kreon pochovať s poctami ako obrancu mesta, Polyneikov pohreb zakázal).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 38,
    code: '38',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Pomenujte literárny žáner diela //Antigona//.',
    placeholder: 'Napíš literárny žáner',
    correctAnswerDisplay: 'tragédia (antická tragédia)',
    acceptedAnswers: [
      'tragédia',
      'antická tragédia',
      'klasická tragédia',
      'grécka tragédia',
      'starogrécka tragédia',
      'smutnohra',
      'antická smutnohra',
      'klasická smutnohra',
      'grécka smutnohra',
      'starogrécka smutnohra',
      'trúchlohra',
      'antická trúchlohra',
      'klasická trúchlohra',
      'grécka trúchlohra',
      'starogrécka trúchlohra'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^dr[aá]ma$',
        hint: 'Dráma je tu literárny druh (popri lyrike a epike) – zadanie sa pýta na konkrétny dramatický žáner s nezmieriteľným konfliktom a smrťou hrdinov.'
      }
    ],
    hint: 'Nezamieňaj si literárny druh (dráma) a literárny žáner! Ako sa volá základný dramatický žáner vážneho obsahu, v ktorom výnimočný hrdina bojuje s nerovnými silami a dej sa končí katastrofou (smrťou hlavných postáv)?',
    solutionSteps: [
      {
        title: 'Rozlíšenie druhu a žánru',
        text: 'Dielo //Antigona// patrí k literárnemu druhu //dráma//, no z hľadiska **literárneho žánru** ide o **tragédiu** (presnejšie **antickú / grécku tragédiu**; staršie slovenské názvy //smutnohra// alebo //trúchlohra//).'
      },
      {
        title: 'Znaky tragédie v diele',
        text: 'Hlavná hrdinka vedie nezmieriteľný zápas za vznešený morálny princíp proti presile svetskej moci. Hra je písaná viazanou rečou, vystupuje v nej zbor a dej vyústi do tragickej katastrofy – smrti Antigony, Haimona i kráľovnej Eurydiky.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: tragédia (antická tragédia).'
  },
  {
    id: 39,
    code: '39',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Napíšte meno autora diela //Antigona//.',
    placeholder: 'Napíš meno autora',
    correctAnswerDisplay: 'Sofokles',
    acceptedAnswers: [
      'Sofokles',
      'Sofoklés',
      'Sofóklés',
      'Sofókles',
      'Sófokles',
      'Sófoklés',
      'Sófókles',
      'Sófóklés',
      'SOFOKLES',
      'SOFOKLÉS',
      'SOFÓKLÉS',
      'SOFÓKLES',
      'SÓFOKLES',
      'SÓFOKLÉS',
      'SÓFÓKLES',
      'SÓFÓKLÉS'
    ],
    caseSensitive: true,
    caseHint: 'Vlastné meno autora (Sofokles) sa musí začínať veľkým písmenom S.',
    hint: 'Spomeň si na veľkú trojicu antických gréckych dramatikov 5. storočia pred n. l. (Aischylos, …, Euripides). Ktorý z nich napísal tragédie Antigona a Kráľ Oidipus? Nezabudni na veľké začiatočné písmeno.',
    solutionSteps: [
      {
        title: 'Autor antickej tragédie Antigona',
        text: 'Autorom tragédie //Antigona// (aj tragédie //Kráľ Oidipus//) je slávny starogrécky dramatik **Sofokles** (5. storočie pred n. l.), ktorý na scénu uviedol tretieho herca, obmedzil úlohu zboru a prehĺbil psychologickú kresbu postáv.'
      },
      {
        title: 'Pravopis a hodnotenie kľúča',
        text: 'Keďže ide o vlastné meno osoby, musí sa začínať **veľkým písmenom S** (**Sofokles**; kľúč uznáva aj podoby s dĺžňom //Sofoklés / Sófokles / Sofóklés// alebo zápis celého mena veľkými tlačenými písmenami).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: Sofokles.'
  },
  {
    id: 40,
    code: '40',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Doplňte do nasledujúcej vety chýbajúcu časť literárnovedného termínu.',
    fillSentenceHtml: 'V diele //Antigona// je dôsledne dodržaná vnútorná {{blank}} dramatického diela.',
    placeholder: 'Doplň literárnovedný termín',
    correctAnswerDisplay: 'kompozícia',
    acceptedAnswers: [
      'kompozícia',
      'vnútorná kompozícia',
      'kompozícia dramatického diela',
      'vnútorná kompozícia dramatického diela',
      'V diele Antigona je dôsledne dodržaná vnútorná kompozícia dramatického diela'
    ],
    lenient: true,
    hint: 'V literárnej teórii rozlišujeme vonkajšiu (dejstvá, výstupy) a vnútornú … dramatického diela (päť stupňov dramatického oblúka: expozícia, kolízia, kríza, peripetia, katastrofa). Ktoré podstatné meno cudzieho pôvodu znamená „stavba / usporiadanie diela“?',
    solutionSteps: [
      {
        title: 'Vnútorná a vonkajšia stavba drámy',
        text: 'Usporiadanie častí literárneho alebo dramatického diela do jedného celku sa odborne nazýva **kompozícia**. Pri dráme rozlišujeme:\n• **vonkajšiu kompozíciu** (členenie na dejstvá a výstupy; v antickej dráme prológ, parodos, epizódy, stasimony, exodos),\n• **vnútornú kompozíciu** – päťstupňové členenie dramatického deja: 1. úvod (//expozícia//), 2. zápletka (//kolízia//), 3. vyvrcholenie (//kríza//), 4. obrat (//peripetia//), 5. rozuzlenie (//katastrofa//).'
      },
      {
        title: 'Doplnenie termínu do vety',
        text: 'Dielo //Antigona// je učebnicovým príkladom klasickej 5-člennej stavby deja, je v ňom teda dôsledne dodržaná **vnútorná kompozícia** dramatického diela.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: kompozícia.'
  },

  // ---------------- Ukážka 6 – Opäť otvorili ferratu Kyseľ
  {
    id: 41,
    code: '41',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktoré tvrdenie je na základe ukážky 6 pravdivé?',
    options: [
      { key: 'A', text: 'Horská záchranná služba upozorňuje turistov na aktuálne obmedzenia v národnom parku.' },
      { key: 'B', text: 'Návštevníci ferraty by mali počítať s nutným kontaktom s vodou i s premoknutím.' },
      { key: 'C', text: 'Návštevníci národného parku majú povinnosť pohybovať sa v roklinách v bezpečnostnej obuvi.' },
      { key: 'D', text: 'Po uzávere je ferrata spomínaná v článku prístupná turistom bez ďalších podmienok.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Porovnaj každú možnosť s textom: kto presne v článku upozorňuje turistov, čo je na ferrate iba odporúčané a čo povinné, a čo ochranári hovoria o stúpaní do vody a náhradných ponožkách.',
    solutionSteps: [
      {
        title: 'Overenie správneho tvrdenia v texte',
        text: 'Ochranári v článku uvádzajú: //„Vody je v roklinách v súčasnosti ozaj veľké množstvo a turisti sa často nevyhnú tomu, že do nej musia stúpiť.“// Správca preto odporúča vysokú nepremokavú obuv a //„náhradné ponožky a obutie, prípadne aj oblečenie“//. Návštevníci teda musia rátať s kontaktom s vodou aj s možným premoknutím (**B**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nepravdivé',
        text: 'A – turistov v článku neupozorňuje Horská záchranná služba (tá je len v oficiálnom názve ferraty), ale **Správa Národného parku Slovenský raj**.\nC – vysoká nepremokavá obuv sa iba **odporúča**, nejde o povinnú „bezpečnostnú obuv“ vo všetkých roklinách.\nD – ferrata nie je prístupná bez podmienok, v texte sa výslovne spomína **povinný ferratový set**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 42,
    code: '42',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorom mesiaci bol na portáli aktuality.sk zverejnený článok v ukážke 6?',
    options: [
      { key: 'A', text: 'V júni.' },
      { key: 'B', text: 'V auguste.' },
      { key: 'C', text: 'V októbri.' },
      { key: 'D', text: 'V januári.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si v 1. a 2. odseku, že ferratu práve počas uplynulého víkendu „opätovne otvorili“, aby sa skončilo „obdobie dlhej zimnej uzávery“ a príroda mala „až doteraz od človeka pokoj“. Ktorý z ponúknutých mesiacov nadväzuje na koniec zimno-jarnej uzávery v našich horách?',
    solutionSteps: [
      {
        title: 'Časové indície v článku',
        text: 'Podľa článku ferratu Kyseľ uplynulý víkend **opätovne otvorili** po **dlhej zimnej uzávere**, počas ktorej //„príroda mala až doteraz od človeka pokoj“//, a v roklinách je po jari veľa vody. Sezónna uzávera ferraty Kyseľ (rovnako ako tatranských chodníkov) trvá od novembra do polovice **júna**.'
      },
      {
        title: 'Vylúčenie ostatných mesiacov',
        text: '• V **januári** (D) je uprostred zimy ferrata zatvorená.\n• V **auguste** (B) a v **októbri** (C) je ferrata už celé mesiace otvorená (letná a jesenná sezóna), takže by neplatilo, že príroda mala //až doteraz// po zimnej uzávere pokoj.\nZakrytým mesiacom v dátume //17. júna 2024// je teda **jún** (**A**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 43,
    code: '43',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Z hľadiska žánru je ukážka 6',
    options: [
      { key: 'A', text: 'komentár.' },
      { key: 'B', text: 'správa.' },
      { key: 'C', text: 'reportáž.' },
      { key: 'D', text: 'oznam.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si typický novinársky začiatok s miestom deja („Spišská Nová Ves: Počas uplynulého víkendu opätovne otvorili…“), vecný tón bez osobných názorov redaktora a odpovede na otázky čo, kde, kedy, ako a prečo sa stalo.',
    solutionSteps: [
      {
        title: 'Znaky spravodajského žánru v ukážke',
        text: 'Text vecne, stručne, aktuálne a objektívne informuje verejnosť o udalosti, ktorá sa už uskutočnila (otvorenie ferraty Kyseľ, stav vody v roklinách a pondelková uzávera mostíkov). Začína sa miestom pôvodu informácie, odpovedá na otázky //kto, čo, kedy, kde, ako, prečo// a dopĺňa citácie Správy NP – ide o rozšírenú **správu**.'
      },
      {
        title: 'Prečo nie ostatné žánre',
        text: 'A – **komentár** je analytický žáner, v ktorom autor zaujíma vlastné hodnotiace stanovisko a polemizuje.\nC – **reportáž** umelecko-opisne vykresľuje atmosféru priamo z miesta diania očami svedka-reportéra.\nD – **oznam** je krátky útvar administratívneho/informačného štýlu, ktorý len vopred stručne oznamuje budúcu udalosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 44,
    code: '44',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorej možnosti sú všetky slovné spojenia z ukážky 6 napísané pravopisne správne?',
    options: [
      { key: 'A', text: '//Správa Národného parku Slovenský Raj, Biely Potok, Tomášovský Výhľad//' },
      { key: 'B', text: '//Správa Národného Parku Slovenský Raj, Biely Potok, Prielom Hornádu//' },
      { key: 'C', text: '//Správa Národného parku Slovenský raj, Biely potok, Tomášovský výhľad//' },
      { key: 'D', text: '//Správa národného parku Slovenský raj, Biely potok, prielom Hornádu//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'V článku boli tieto názvy vytlačené veľkými písmenami, takže musíš uplatniť Pravidlá slovenského pravopisu: 1. V názve inštitúcie zostáva zachované aj veľké písmeno vloženého oficiálneho názvu národného parku. 2. Vo viacslovných nesídelných zemepisných názvoch (potok, raj, výhľad) sa všeobecné podstatné meno píše s malým písmenom!',
    solutionSteps: [
      {
        title: '1. Názov inštitúcie a národného parku (podľa PSP)',
        text: '• Oficiálny názov chráneného územia znie **Národný park Slovenský raj**: veľké **N** na začiatku názvu, malé **p** vo všeobecnom slove //park//, veľké **S** na začiatku vlastného mena územia a malé **r** v slove //raj// (nejde o mesto ani obec).\n• Keď sa tento názov stane súčasťou názvu inštitúcie **Správa Národného parku Slovenský raj**, píše sa veľké **S** v prvom slove //Správa// a zároveň sa zachováva veľké **N** aj veľké **S** z vloženého vlastného názvu národného parku.'
      },
      {
        title: '2. Nesídelné zemepisné názvy (potok, skalný útvar, tiesňava)',
        text: 'Spojenia **Biely potok** (vodný tok v Slovenskom raji) a **Tomášovský výhľad** (skalný útvar) sú nesídelné zemepisné názvy (nepomenúvajú obec ani mesto). Podľa PSP sa v nich píše s veľkým začiatočným písmenom **prvé slovo** a ďalšie slovo len vtedy, ak je samo vlastným menom:\n• **Biely potok** (malé //p//), **Tomášovský výhľad** (malé //v//), **Prielom Hornádu** (veľké //P// na začiatku názvu a veľké //H// vo vlastnom mene rieky //Hornád// – v možnosti D je chybne malé //p//).\nBez chyby je preto iba možnosť **C**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 45,
    code: '45',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktorým slovotvorným postupom vzniklo slovo //vodopád//?',
    options: [
      { key: 'A', text: 'Iba odvodzovaním.' },
      { key: 'B', text: 'Iba skladaním.' },
      { key: 'C', text: 'Kombináciou skladania a skracovania.' },
      { key: 'D', text: 'Kombináciou odvodzovania a spájania.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Rozdeľ si slovo vodopád na časti: koľko plnovýznamových koreňov (slovotvorných základov) v ňom vidíš a aká samohláska ich spája?',
    solutionSteps: [
      {
        title: 'Slovotvorný rozbor slova vodopád',
        text: 'Slovo **vodopád** pomenúva //miesto, kde padá voda//. Vzniklo spojením dvoch slovotvorných základov pomocou spájacej samohlásky (interfixu) **-o-**:\n**vod**-(a) + **o** + **pád** (od //padať//) → **vodopád**.'
      },
      {
        title: 'Určenie slovotvorného postupu',
        text: 'Tvorenie nového jednoslovného pomenovania spojením dvoch (alebo viacerých) slovotvorných základov nazývame **skladanie** (kompozícia). Nepribudla tu žiadna skratka ani ďalšie slovné spojenie, správna je teda možnosť **B** (//iba skladaním//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 46,
    code: '46',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText:
      'Koľko viet obsahuje nasledujúce súvetie?\n//Správca turistickej infraštruktúry odporúča na pohyb vo ferrate vysokú nepremokavú obuv, je tiež vhodné vziať si so sebou okrem povinného ferratového setu aj náhradné ponožky a obutie, prípadne aj oblečenie.//',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '2 (dve)',
    acceptedAnswers: ['2', 'dve', '2 vety', 'dve vety'],
    lenient: true,
    hint: 'Nenechaj sa pomýliť počtom čiarok ani neurčitkom „vziať si“! Počet viet v súvetí sa rovná počtu prísudkov (určitých slovesných alebo slovesno-menných tvarov). Druhá čiarka oddeľuje iba pripojený vetný člen „prípadne aj oblečenie“.',
    solutionSteps: [
      {
        title: 'Vyhľadanie prísudkov v súvetí',
        text: 'Počet jednoduchých viet v súvetí zistíme podľa počtu prísudkov:\n1. veta: //Správca turistickej infraštruktúry **odporúča** na pohyb vo ferrate vysokú nepremokavú obuv// (slovesný prísudok **odporúča**),\n2. veta: //**je** tiež **vhodné** vziať si so sebou okrem povinného ferratového setu aj náhradné ponožky a obutie, prípadne aj oblečenie// (slovesno-menný prísudok **je vhodné**).'
      },
      {
        title: 'Pozor na dva typické chytáky',
        text: '• Tvar **vziať si** je neurčitok (neurčitý slovesný tvar), ktorý tu plní funkciu podmetu 2. vety (//Čo je vhodné? → vziať si…//), netvorí samostatnú vetu.\n• Čiarka pred //prípadne aj oblečenie// neoddeľuje tretiu vetu, ale iba voľne pripojenú časť viacnásobného predmetu.\nSúvetie teda obsahuje **2 vety**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 2 (dve vety).'
  },
  {
    id: 47,
    code: '47',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Vypíšte z ukážky 6 neurčitú základnú číslovku.',
    placeholder: 'Vypíš číslovku z textu',
    correctAnswerDisplay: 'veľa',
    acceptedAnswers: ['veľa'],
    commonMistakes: [
      {
        pattern: '^dvoch$',
        hint: 'Číslovka „dvoch“ pomenúva presný počet, je to teda určitá základná číslovka. Hľadaj neurčitú číslovku, ktorá vyjadruje množstvo len približne.'
      },
      {
        pattern: '^množstvo$',
        hint: 'Slovo „množstvo“ je podstatné meno (to množstvo, vzor mesto). Hľadaj neohybnú neurčitú číslovku s podobným významom už v nadpise a v 1. odseku.'
      }
    ],
    hint: 'Základné číslovky odpovedajú na otázku koľko? Určité vyjadrujú presné číslo (napr. dva, sto), zatiaľ čo neurčité vyjadrujú počet alebo množstvo len všeobecne (napr. málo, mnoho, niekoľko). Pozri sa hneď do nadpisu alebo 1. odseku ukážky 6.',
    solutionSteps: [
      {
        title: 'Rozdiel medzi určitou a neurčitou základnou číslovkou',
        text: '**Základné číslovky** pomenúvajú počet alebo množstvo (otázka //koľko?//). Ak vyjadrujú presný počet (v texte napr. //dvoch// mostíkov), sú **určité**; ak vyjadrujú množstvo len približne a nepresne (//málo, mnoho, viac, niekoľko//), sú **neurčité**.'
      },
      {
        title: 'Nájdenie v ukážke 6',
        text: 'V nadpise (//„v roklinách Slovenského raja je **veľa** vody“//) aj v 1. odseku (//„že v rokline je **veľa** vody“//) sa nachádza neurčitá základná číslovka **veľa**. (Pozor: slovo //posledný// je radová číslovka a //množstvo// je podstatné meno.)'
      }
    ],
    solutionConclusion: 'Správna odpoveď: veľa.'
  },
  {
    id: 48,
    code: '48',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Vypíšte z citovaného textu v ukážke 6 príslovku, ktorá je v prvom stupni stupňovania.',
    placeholder: 'Vypíš príslovku z citátu',
    correctAnswerDisplay: 'často',
    acceptedAnswers: ['často'],
    commonMistakes: [
      {
        pattern: '^najintenz[ií]vnej[sš]ie$',
        hint: 'Príslovka „najintenzívnejšie“ má predponu naj-, je teda v 3. stupni. Hľadaj v úvodzovkách stupňovateľnú príslovku v základnom, 1. stupni.'
      },
      {
        pattern: '^doteraz$',
        hint: 'Príslovka „doteraz“ sa nedá stupňovať. Hľadaj v druhom citáte príslovku v základnom tvare, ku ktorej vieme utvoriť 2. a 3. stupeň.'
      }
    ],
    hint: 'Sleduj výlučne citovaný text v úvodzovkách („…“) v 2. a vo 4. odseku! Hľadáš príslovku, ktorá sa dá stupňovať (1., 2., 3. stupeň), ale v texte je použitá vo svojom základnom tvare – teda v 1. stupni.',
    solutionSteps: [
      {
        title: 'Kontrola prísloviek v oboch citátoch',
        text: 'Citovaný text tvoria dve priame reči v úvodzovkách:\n• V 1. citáte (2. odsek): //najintenzívnejšie// je v **3. stupni** (//intenzívne – intenzívnejšie – najintenzívnejšie//) a príslovka času //doteraz// sa **nestupňuje**.\n• V 2. citáte (4. odsek): //„Vody je v roklinách v súčasnosti ozaj veľké množstvo a turisti sa **často** nevyhnú tomu, že do nej musia stúpiť…“//'
      },
      {
        title: 'Overenie stupňovania príslovky často',
        text: 'Príslovka **často** (kedy? ako často?) je stupňovateľná: **1. stupeň: často** – 2. stupeň: //častejšie// – 3. stupeň: //najčastejšie//. V citovanom texte stojí v základnom tvare, teda v **prvom stupni stupňovania**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: často.'
  },

  // ---------------- Ukážka 7 – J. Jesenský: Moja domáca pani
  {
    id: 49,
    code: '49',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Hlavný hrdina v ukážke 7 pôsobí na ženské postavy',
    options: [
      { key: 'A', text: 'veľmi upäto.' },
      { key: 'B', text: 'trochu vypočítavo.' },
      { key: 'C', text: 'ako gavalier.' },
      { key: 'D', text: 'ako grobian.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Sleduj, ako sa bankový úradník správa k slečne Malvínke a k slečne Žofii (úklon, zdvorilé oslovenie, ponúknuté rameno, poklona o tanci) a ako s radosťou na neho obe slečny reagujú.',
    solutionSteps: [
      {
        title: 'Správanie hrdinu a reakcia dám',
        text: 'Hlavný hrdina vystupuje v spoločnosti vyberane, zdvorilo a galantne: slečnám sa úctivo ukloní, zdvorilo požiada o tanec (//„Slečna, smiem prosiť?“//), ponúkne rameno a slečne Žofii zloží obdivný kompliment o jej ľahkom tanci. Dcéry pána fabrikanta ho prijímajú s nadšením, zavesia sa mu na rameno a usmievajú sa – pôsobí na ne **ako gavalier** (zdvorilý, pozorný spoločník).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – v tanci a rozhovore je uvoľnený a veselý (//„Bolo naozaj veselo“//), nepôsobí strojene ani upäto.\nB – slečny v ňom nevidia vypočítavosť, prijímajú ho láskavo a bezprostredne.\nD – //grobian// je hrubý, nezdvorilý človek, čo je presný opak hrdinovho vystupovania.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 50,
    code: '50',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré tvrdenie o hlavnom hrdinovi ukážky 7 je v súlade s jej obsahom?',
    options: [
      { key: 'A', text: 'Skladal komplimenty obom svojim tanečným partnerkám.' },
      { key: 'B', text: 'Bol zábavným hosťom v spoločnosti i skvelým tanečníkom.' },
      { key: 'C', text: 'Ubezpečoval sám seba o svojej obľúbenosti v spoločnosti.' },
      { key: 'D', text: 'Používal lichôtky s cieľom rozosmiať dcéry pána továrnika.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si vnútorné úvahy rozprávača (čo si v duchu myslí po výkriku Malvínky a po tom, ako mu Žofia naklonila hlávku k plecu). Zložil nahlas poklonu naozaj obidvom slečnám, alebo iba jednej?',
    solutionSteps: [
      {
        title: 'Sebauisťovanie rozprávača v texte',
        text: 'Jednoduchý bankový úradník si každé gesto slečien v duchu vysvetľuje ako dôkaz vlastnej obľúbenosti a šarmu: //„Muselo jej to radosť pôsobiť. Ináče by bola jednoducho vstala… Myslel som si, že som naozaj príjemným človekom. Prečo by bola naklonila hlávku? Bola by jednoducho rovno šla, keby som jej bol ľahostajným.“// Opakovane tak **ubezpečuje sám seba o svojej obľúbenosti** (typická jemná irónia Janka Jesenského).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – nahlas vyslovil kompliment **iba slečne Žofii**; slečne Malvínke povedal len //„Slečna, smiem prosiť?“// a o jej tanci si iba pomyslel v duchu.\nB – o tom, aký bol on sám tanečník či zabávač celej spoločnosti, text nič nehovorí (chváli tanec partneriek).\nD – lichôtku nepoužil s cieľom slečny rozosmiať, ale zalichotiť tanečnici.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 51,
    code: '51',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'V poslednom prehovore hlavného hrdinu ukážky 7 sa nachádza',
    options: [
      { key: 'A', text: 'nonsens.' },
      { key: 'B', text: 'personifikácia.' },
      { key: 'C', text: 'gradácia.' },
      { key: 'D', text: 'prirovnanie.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si začiatok posledného prehovoru hrdinu: „Tak ľahučko, krásne tancujete. Ani páper, keď v povetrí lieta.“ Akým slovom sa tu dá nahradiť porovnávacia spojka „ani“?',
    solutionSteps: [
      {
        title: 'Porovnávacia spojka „ani“ = „ako“',
        text: 'V poslednom prehovore hrdina hovorí slečne Žofii: //„Tak ľahučko, krásne tancujete. **Ani páper**, keď v povetrí lieta.“// Spojka **ani** má v slovenčine popri zlučovacom význame aj porovnávací význam **ako** (//tancujete tak ľahučko ako páper//). Porovnanie dvoch javov na základe spoločnej vlastnosti (ľahkosti) pomocou spojky //ako, sťa, jak, ani, než// je **prirovnanie**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – //nonsens// je zámerný nezmysel (slovná hračka bez logiky).\nB – //personifikácia// prenáša ľudské vlastnosti na neživé veci (tu sa naopak ľahkosť tanečnice prirovnáva k páperu).\nC – //gradácia// je stupňovanie významu; tu hrdina len rovnocenne vymenúva smery fúknutia (//zdola – zhora – zboku//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 52,
    code: '52',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'V ktorej možnosti je jednovýznamové slovo?',
    options: [
      { key: 'A', text: 'cítiť' },
      { key: 'B', text: 'vyskočiť' },
      { key: 'C', text: 'rameno' },
      { key: 'D', text: 'úradník' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Viacvýznamové slovo má okrem základného významu aj prenesené významy (napr. koruna stromu aj kráľovská koruna). Vyskúšaj si pri každom zo štyroch slov utvoriť rôzne vety – ktoré z nich má v slovenčine vždy iba jeden vecný význam?',
    solutionSteps: [
      {
        title: 'Jednovýznamové slovo',
        text: 'Podstatné meno **úradník** (**D**) má v slovenčine iba **jeden vecný význam** – zamestnanec pracujúci v úrade (v administratíve). Je to teda **jednovýznamové slovo**.'
      },
      {
        title: 'Prečo sú ostatné slová viacvýznamové',
        text: '• **cítiť** (A) – vnímať zmyslami (//cítiť vôňu, chlad//), prežívať cit (//cítiť radosť//), aj tušiť (//cítiť nebezpečenstvo//).\n• **vyskočiť** (B) – urobiť skok nahor, prudko vstať zo stoličky, prudko vystúpiť (//vyskočila mu teplota, vyrážka//), aj oboriť sa na niekoho (//hneď naňho vyskočil//).\n• **rameno** (C) – časť hornej končatiny človeka, ale aj //rameno rieky//, //rameno žeriava//, //rameno váh// či //rameno svietnika//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 53,
    code: '53',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Slovné spojenie //bola by šla// predstavuje',
    options: [
      { key: 'A', text: 'zložený určitý slovesný tvar.' },
      { key: 'B', text: 'jednoduchý určitý slovesný tvar.' },
      { key: 'C', text: 'zložený neurčitý slovesný tvar.' },
      { key: 'D', text: 'jednoduchý neurčitý slovesný tvar.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Rozdeľ si otázku na dva ľahké kroky: 1. Skladá sa tvar „bola by šla“ z jedného slova (jednoduchý), alebo z viacerých slov (zložený)? 2. Vieme z neho určiť osobu a číslo (určitý tvar), alebo sa určiť nedajú ako pri neurčitku „ísť“ (neurčitý tvar)?',
    solutionSteps: [
      {
        title: '1. Jednoduchý verzus zložený tvar',
        text: 'Slovesný tvar **bola by šla** (podmieňovací spôsob minulého času v 3. osobe jednotného čísla) sa skladá z **troch slov** (//bola + by + šla//) s pomocným slovesom //byť//, preto ide o **zložený slovesný tvar** (jednoduchý tvar sa tvorí bez pomocného slovesa, napr. //ide, pôjde, choď, ísť//).'
      },
      {
        title: '2. Určitý verzus neurčitý tvar',
        text: 'Z tvaru //bola by šla// vieme presne určiť gramatické kategórie **osoby** (3. osoba – //ona//), **čísla** (jednotné číslo) a **spôsobu/času** (podmieňovací spôsob minulého času). Ide teda o **určitý slovesný tvar**. (Neurčité slovesné tvary osobu ani čas nevyjadrujú – patrí sem napr. neurčitok //písať//, prechodník //píšuc//, príčastia //píšuci, napísaný// a slovesné podstatné meno //písanie//.)'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 54,
    code: '54',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Určte typ vedľajšej vety v nasledujúcom súvetí.\n//Myslel som si, že som naozaj príjemným človekom.//',
    placeholder: 'Napíš typ vedľajšej vety',
    correctAnswerDisplay: 'predmetová',
    acceptedAnswers: [
      'predmetová',
      'predmetová vedľajšia veta',
      'vedľajšia veta predmetová',
      'vedľajšia predmetová veta',
      'predmetová veta',
      'vv predmetová',
      'ide o predmetovú vedľajšiu vetu',
      'ide o vedľajšiu vetu predmetovú',
      'je to predmetová vedľajšia veta',
      'je to vedľajšia veta predmetová',
      'vedľajšia veta je predmetová'
    ],
    lenient: true,
    hint: 'Opýtaj sa prísudkom hlavnej vety („Myslel som si“) na celú vedľajšiu vetu za spojkou „že“. Akou pádovou otázkou sa pýtaš a ktorý vetný člen odpovedá na otázku koho? čo?',
    solutionSteps: [
      {
        title: 'Otázka z hlavnej vety na vedľajšiu',
        text: 'Hlavná veta znie //Myslel som si// (má zamlčaný podmet //ja//). Pýtame sa slovesom hlavnej vety na vedľajšiu vetu:\n//Myslel som si – **(koho?) čo** som si myslel? → že som naozaj príjemným človekom.//'
      },
      {
        title: 'Určenie typu vedľajšej vety',
        text: 'Vedľajšia veta dopĺňa sloveso hlavnej vety a odpovedá na pádovú otázku akuzatívu **koho? čo?** (zastupuje teda nevyjadrený predmet hlavnej vety – //myslel som si tú vec//). Ide o **vedľajšiu vetu predmetovú**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: predmetová (vedľajšia veta).'
  },
  {
    id: 55,
    code: '55',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Vypíšte z nasledujúcej vety podmet.\n//Muselo jej to radosť pôsobiť.//',
    placeholder: 'Vypíš podmet z vety',
    correctAnswerDisplay: 'to',
    acceptedAnswers: ['to'],
    commonMistakes: [
      {
        pattern: '^rados[tť]$',
        hint: 'Slovo „radosť“ je tu v akuzatíve (pôsobiť čo? → radosť), je teda predmetom, nie podmetom! Všimni si stredný rod prísudku „muselo pôsobiť“ a opýtaj sa: Čo jej muselo pôsobiť radosť?'
      },
      {
        pattern: '^(jej|ona)$',
        hint: 'Zámeno „jej“ je v datíve (komu? → jej), čiže je nepriamym predmetom. Podmet je priamo vo vete v nominatíve stredného rodu!'
      }
    ],
    hint: 'Pozor na slovosled! Pozri sa na sloveso v prísudku „muselo pôsobiť“ – koncovka -o prezrádza, že podmet musí byť v strednom rode a v nominatíve (kto? čo?). Ktoré krátke slovo vo vete je v nominatíve stredného rodu?',
    solutionSteps: [
      {
        title: 'Pomôcka cez prísudok a zhodu',
        text: 'Prísudkom vety je slovesný prísudok tvorený modálnym slovesom a neurčitkom **muselo pôsobiť**. Modálne sloveso //muselo// má koncovku **-o**, čo znamená, že sa zhoduje s podmetom v **3. osobe jednotného čísla stredného rodu**.'
      },
      {
        title: 'Určenie podmetu a rozlíšenie od predmetov',
        text: 'Opýtajme sa nominatívnou otázkou **kto? čo?**:\n• //Čo jej muselo pôsobiť radosť?// → **to** (ukazovacie zámeno v nominatíve stredného rodu = **podmet**).\n• Pozor na chyták so slovom //radosť//: //radosť// je ženského rodu (keby bola podmetom, prísudok by znel //radosť musela…//) a vo vete odpovedá na otázku akuzatívu //pôsobiť čo? → radosť//, je teda priamym **predmetom** (a //jej// je nepriamym predmetom v datíve //komu?//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: to.'
  },
  {
    id: 56,
    code: '56',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Doplňte do nasledujúcej vety chýbajúcu časť názvu literárneho obdobia/smeru.',
    fillSentenceHtml:
      'Básnici Janko Jesenský a Ivan Krasko patrili k významným predstaviteľom slovenskej literárnej {{blank}}.',
    placeholder: 'Doplň chýbajúce slovo',
    correctAnswerDisplay: 'moderny (moderna)',
    acceptedAnswers: [
      'moderny',
      'moderna',
      'literárnej moderny',
      'literárna moderna',
      'slovenskej literárnej moderny',
      'slovenská literárna moderna',
      'Básnici Janko Jesenský a Ivan Krasko patrili k významným predstaviteľom slovenskej literárnej moderny'
    ],
    lenient: true,
    hint: 'Ako sa nazýva básnická generácia na prelome 19. a 20. storočia (okolo rokov 1900 – 1918, ovplyvnená symbolizmom a impresionizmom), do ktorej v poézii patrili Ivan Krasko, Janko Jesenský či Vladimír Roy? Doplň slovo v tvare, ktorý zapadá do vety.',
    solutionSteps: [
      {
        title: 'Literárne obdobie na začiatku 20. storočia',
        text: 'Ivan Krasko (zbierky //Nox et solitudo//, //Verše//) a Janko Jesenský (vo svojej ľúbostnej a osobnej lyrike, napr. //Verše//) sú kľúčovými básnikmi **slovenskej literárnej moderny** – umeleckého smerovania z rokov 1900 – 1918, ktoré prinieslo subjektivizmus, smútok osamelého jednotlivca a postupy symbolizmu a impresionizmu.'
      },
      {
        title: 'Gramatické zapojenie do vety',
        text: 'Po spojení //k významným predstaviteľom slovenskej literárnej…// nasleduje genitív jednotného čísla **moderny** (kľúč uznáva aj základný tvar //moderna// a odpovede s pravopisnou či gramatickou odchýlkou).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: moderny (moderna).'
  },

  // ---------------- Ukážka 8 – L. N. Tolstoj: Anna Kareninová
  {
    id: 57,
    code: '57',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré tvrdenie je v súlade s obsahom ukážky 8?',
    options: [
      { key: 'A', text: 'Anna bola unavená na nočný rozhovor s manželom.' },
      { key: 'B', text: 'Annina pretvárka Alexeja Alexandroviča neoklamala.' },
      { key: 'C', text: 'Anna prišla domov neskoro, aby ju manžel nekonfrontoval.' },
      { key: 'D', text: 'Alexej Alexandrovič Annu ľúbil, preto mu na ich vzťahu záležalo.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si pozorne úplne posledné súvetie ukážky („Pozrela tak nevinne, tak veselo, že kto by ju nepoznal, ako ju poznal manžel…“). Čo z neho vyplýva o tom, ako Annu prekukol jej manžel?',
    solutionSteps: [
      {
        title: 'Rozlúštenie poslednej vety ukážky',
        text: 'Záverečná veta hovorí: //„Pozrela tak nevinne, tak veselo, že kto by ju nepoznal, ako ju poznal manžel, nevybadal by v tóne ani v zmysle tých slov nič neprirodzené.“// Z toho vyplýva, že kým cudzieho človeka by jej nevinný pohľad oklamal, manžel Alexej Alexandrovič ju dobre poznal, a preto **neprirodzenosť a pretvárku v jej tóne spoznal** (**B**).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – Anna únavu a túžbu spať iba **predstierala** (klamala): //„sama sa čudovala svojej schopnosti luhať… ako pravdivo vyznelo, že nechce nič iné, len spať!“//\nC – v ukážke sa nikde nepíše, že by prišla domov zámerne neskoro, aby sa vyhla rozhovoru (naopak, prekvapilo ju, že manžel ešte nespí).\nD – o láske Alexeja Alexandroviča k Anne text nehovorí.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 58,
    code: '58',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré tvrdenie o Anne vyplýva z podčiarknutej časti ukážky 8?',
    options: [
      { key: 'A', text: 'Jej výzor naznačoval zlé duševné rozpoloženie.' },
      { key: 'B', text: 'Jej telesný stav bol ovplyvnený horúčkou.' },
      { key: 'C', text: 'Rozrušilo ju stretnutie s manželom.' },
      { key: 'D', text: 'Cítila sa podvedená a zradená.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všímaj si iba podčiarknutý prvý odsek: ako Anna kráčala, čo robila s rukami a k čomu rozprávač prirovnáva neradostný jas v jej tvári?',
    solutionSteps: [
      {
        title: 'Rozbor podčiarknutého odseku',
        text: 'V 1. odseku čítame, že Anna //„šla so sklonenou hlavou a pohrávala sa so strapcami na kapucni. Jej tvár vyžarovala prenikavý jas; no nebol to jas radostný – pripomínal hrozivý jas požiaru v temnej noci.“// Vonkajší výzor a výraz tváre tak prezrádzajú jej vnútorný nepokoj, temné napätie a **zlé duševné rozpoloženie**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – o chorobe či telesnej horúčke sa v podčiarknutej časti nič nepíše (požiar v temnej noci je obrazom jej duševného stavu).\nC – keď zazrela muža, navonok zachovala pokoj: //„zodvihla hlavu a usmiala sa, akoby sa prebúdzala zo spánku.“//\nD – v texte niet zmienky o tom, že by sa cítila podvedená či zradená (sama neskôr premýšľa o vlastnej lži).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 59,
    code: '59',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Rozprávanie je v ukážke 8 zdynamizované predovšetkým',
    options: [
      { key: 'A', text: 'členením textu.' },
      { key: 'B', text: 'dialógom postáv.' },
      { key: 'C', text: 'zloženými súvetiami.' },
      { key: 'D', text: 'formou on-rozprávania.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Zdynamizovať rozprávanie znamená zrýchliť spád deja a vniesť doň živé napätie. Čo v ukážke zrýchľuje tempo oproti pokojnejším opisným odsekom rozprávača?',
    solutionSteps: [
      {
        title: 'Čo v epike zrýchľuje spád deja',
        text: 'V prozaickom texte spád deja najvýraznejšie zrýchľujú slovesá a **dialóg postáv** (rýchle striedanie krátkych replík v priamej reči: //„– Anna, musím ťa varovať. / – Varovať? – opýtala sa. – Pred čím?“//). Práve rozhovor Anny s manželom vnáša do ukážky napätie a **zdynamizuje** rozprávanie.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – samotné grafické členenie na odseky je len vonkajšou úpravou textu.\nC – dlhé zložené súvetia tempo rozprávania naopak **spomaľujú** (slúžia skôr na vnútornú analýzu a opis).\nD – forma on-rozprávania (rozprávač v 3. osobe) sama osebe dej nezdynamizuje.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 60,
    code: '60',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText:
      '//Anna vravela, čo jej slina na jazyk priniesla, a ako sa tak počúvala, sama sa čudovala svojej schopnosti luhať. Ako prosto, ako prirodzene pôsobili jej slová a ako pravdivo vyznelo, že nechce nič iné, len spať! Cítila sa byť odiata do nepreniknuteľného panciera lži. Cítila, že jej nejaká neviditeľná sila pomáha a podporuje ju.//\n\nV uvedenej časti ukážky 8 sa vyskytuje',
    options: [
      { key: 'A', text: 'alegória.' },
      { key: 'B', text: 'zvukomaľba.' },
      { key: 'C', text: 'obrazné vyjadrenie.' },
      { key: 'D', text: 'oslovenie čitateľa.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si v úryvku spojenia „vravela, čo jej slina na jazyk priniesla“ a „odiata do nepreniknuteľného panciera lži“. Sú tieto vety myslené doslovne, alebo obrazne?',
    solutionSteps: [
      {
        title: 'Nájdenie obrazných vyjadrení v úryvku',
        text: 'V uvedenom odseku autor využíva hneď dve výrazné **obrazné (nepriame) vyjadrenia**:\n• frazeologizmus //vravela, čo jej slina na jazyk priniesla// (= hovorila bez prípravy to prvé, čo jej napadlo),\n• metaforu //cítila sa byť odiata do nepreniknuteľného panciera lži// (= lož ju chránila pred odhalením ako brnenie).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – //alegória// (inotaj) je utajený zmysel celého príbehu, typický napr. pre bájky.\nB – //zvukomaľba// (onomatopoja) je zámerné napodobňovanie prírodných zvukov hláskami v slovách.\nD – v texte sa rozprávač nijako neprihovára čitateľovi (zvolacia veta je len vnútornou rečou postavy).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 61,
    code: '61',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'V ktorej možnosti sa nachádza vokalizovaná predložka?',
    options: [
      { key: 'A', text: '//o čom//' },
      { key: 'B', text: '//na jazyk//' },
      { key: 'C', text: '//zo spánku//' },
      { key: 'D', text: '//do obliekarne//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Vokalizovaná predložka vznikne tak, že k pôvodnej predložke končiacej sa spoluhláskou pridáme samohlásku -o alebo -u, aby sa ľahšie vyslovovala (napr. v → vo, k → ku, s → so). Skontroluj pri každej predložke v možnostiach, či má aj kratší základný tvar so spoluhláskou, alebo sa už v základnom tvare končí samohláskou!',
    solutionSteps: [
      {
        title: 'Čo je vokalizácia predložky',
        text: '**Vokalizácia** je pridanie vkladnej samohlásky (**-o** alebo **-u**) k predložke, ktorá sa v základnom tvare končí spoluhláskou (najmä k neslabičným predložkám //v, z, s, k//, ale aj //nad, pod, pred, od, bez, cez//), aby sa predišlo ťažko vysloviteľnej skupine spoluhlások.'
      },
      {
        title: 'Porovnanie možností',
        text: '• **zo spánku** (**C**) – základný tvar predložky je **z** (//z domu, z lesa//). Pred slovom //spánku// (začínajúcim sa sykavkou //s// a zhlukom //sp-//) pribrala samohlásku **-o**: **z → zo** → **vokalizovaná predložka**.\n• Predložky **o** (A), **na** (B) a **do** (D) majú samohlásku už vo svojom základnom slovníkovom tvare – nič sa k nim nepridalo, preto **nie sú vokalizované**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 62,
    code: '62',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText:
      'Napíšte pravopisne a gramaticky správne antonymum zvýrazneného slova v nasledujúcej vete.\n//No **lepšie** by sme urobili, keby sme šli spať.//',
    placeholder: 'Napíš antonymum',
    correctAnswerDisplay: 'horšie',
    acceptedAnswers: ['horšie'],
    commonMistakes: [
      {
        pattern: '^hor[sš][ií]$',
        hint: 'Tvar „horší“ je prídavné meno (aký?). Vo vete sa však pýtame „ako by sme urobili?“, takže slovo „lepšie“ je príslovka – utvor v rovnakom tvare aj príslovku!'
      },
      {
        pattern: '^(zle|najhor[sš]ie)$',
        hint: 'Zachovaj aj rovnaký stupeň stupňovania: „lepšie“ je 2. stupeň od príslovky dobre, preto utvor 2. stupeň od príslovky zle.'
      }
    ],
    hint: 'Antonymum je slovo s opačným významom v tom istom slovnom druhu a v rovnakom gramatickom tvare. Opýtaj sa slovesom: „Ako by sme urobili? → lepšie.“ Je to príslovka v 2. stupni (dobre – lepšie – najlepšie) – ako znie 2. stupeň od opačnej príslovky „zle“?',
    solutionSteps: [
      {
        title: '1. Určenie slovného druhu a stupňa slova lepšie',
        text: 'Vo vete //„No **lepšie** by sme urobili…“// slovo //lepšie// rozvíja sloveso //by sme urobili// a odpovedá na otázku **ako?** Ide teda o **príslovku spôsobu v 2. stupni** (nepravidelné stupňovanie príslovky //dobre//: //1. dobre – 2. **lepšie** – 3. najlepšie//).'
      },
      {
        title: '2. Utvorenie presného antonyma',
        text: '**Antonymum** (slovo s opačným významom) musí zachovať ten istý slovný druh (príslovku) aj ten istý stupeň (2. stupeň). Opakom príslovky //dobre// je príslovka //zle//, ktorá sa stupňuje: //1. zle – 2. **horšie** – 3. najhoršie//.\nSkúška dosadením do vety: //No **horšie** by sme urobili, keby sme šli spať.// (Pozor: tvar //horší// by bol prídavným menom, nie príslovkou!)'
      }
    ],
    solutionConclusion: 'Správna odpoveď: horšie.'
  },
  {
    id: 63,
    code: '63',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Vypíšte z ukážky 8 prvé slovo prvej uvádzacej vety.',
    placeholder: 'Vypíš slovo z textu',
    correctAnswerDisplay: 'zvolala',
    acceptedAnswers: [
      'zvolala',
      'zvolala, ako si zhadzovala kapucňu',
      'zvolala, ako si zhadzovala kapucňu, a šla ďalej do obliekarne'
    ],
    commonMistakes: [
      {
        pattern: '^anna$',
        hint: 'Prvý odsek je len opisom rozprávača bez priamej reči. Uvádzacia veta sprevádza priamu reč postavy a hovorí, kto a ako prehovoril.'
      },
      {
        pattern: '^ty$',
        hint: '„Ty ešte nespíš? To je zázrak!“ je samotná priama reč postavy. Uvádzacia veta rozprávača nasleduje hneď za ňou po pomlčke!'
      },
      {
        pattern: '^ozvala$',
        hint: '„ozvala sa spoza dverí“ je až druhá uvádzacia veta – pozri sa na začiatok 2. odseku hneď za prvú priamu reč.'
      }
    ],
    hint: 'Uvádzacia veta je veta rozprávača pri priamej reči, ktorá uvádza, kto a ako prehovoril (napr. povedal, spýtala sa). V 1. odseku ešte priama reč nie je – nájdi úplne prvú repliku v 2. odseku (začína sa pomlčkou) a pozri sa na autorskú vetu bezprostredne za ňou.',
    solutionSteps: [
      {
        title: 'Čo je uvádzacia veta',
        text: 'Pri priamej reči rozlišujeme samotnú **priamu reč** (doslovnú výpoveď postavy, v tejto ukážke označenú pomlčkami) a **uvádzaciu vetu** rozprávača, ktorá obsahuje sloveso hovorenia a objasňuje, kto a ako prehovoril.'
      },
      {
        title: 'Nájdenie prvej uvádzacej vety v ukážke 8',
        text: 'Prvý odsek je autorským opisom bez priamej reči. Prvá priama reč je na začiatku 2. odseku:\n//– Ty ešte nespíš? To je zázrak! – **zvolala**, ako si zhadzovala kapucňu, a šla ďalej do obliekarne.//\nPrvou uvádzacou vetou je časť za druhou pomlčkou a jej prvým slovom je sloveso **zvolala** (kľúč uznáva aj vypísanie celej uvádzacej časti súvetia).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: zvolala.'
  },
  {
    id: 64,
    code: '64',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'Koľko viet so stúpavou vetnou melódiou obsahuje ukážka 8?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '3 (tri)',
    acceptedAnswers: ['3', 'tri', '3 vety', 'tri vety'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(6|šesť|sest)$',
        hint: 'Spočítal si všetky opytovacie vety s otáznikom (6), no pozor: stúpavú melódiu majú v slovenčine iba zisťovacie otázky (na ktoré sa odpovedá áno/nie)! Dopĺňacie otázky s opytovacím zámenom (Čo…, O čom…, Pred čím…) majú klesavú melódiu.'
      }
    ],
    hint: 'Pozor, nie každá veta s otáznikom má stúpavú melódiu! V slovenčine majú stúpavú melódiu iba zisťovacie opytovacie vety (odpovedáme na ne áno/nie a nezačínajú sa opytovacím zámenom ani príslovkou ako kto, kde, kedy, prečo…). Nájdi všetky otázky v ukážke a oddeľ zisťovacie od dopĺňacích!',
    solutionSteps: [
      {
        title: 'Pravidlo o vetnej melódii v slovenčine',
        text: '• **Klesavú melódiu** majú oznamovacie, rozkazovacie, želacie vety a aj **dopĺňacie opytovacie vety** – teda otázky, ktoré sa začínajú opytovacím zámenom alebo príslovkou (//kto, čo, o čom, pred čím, kde, kedy, prečo…//).\n• **Stúpavú vetnú melódiu** (antikadenciu) majú ukončené **zisťovacie opytovacie vety** – zisťujeme nimi platnosť deja, odpovedá sa na ne //áno / nie// a **neobsahujú opytovacie zámeno ani príslovku**.'
      },
      {
        title: 'Roztriedenie všetkých 6 opytovacích viet v ukážke 8',
        text: 'V ukážke 8 sa nachádza spolu 6 opytovacích viet:\n**Zisťovacie otázky → stúpavá melódia (3 vety):**\n1. //Ty ešte nespíš?// (odpoveď áno/nie, bez opytovacieho slova → **stúpavá**)\n2. //So mnou?// (zisťovacia otázka → **stúpavá**)\n3. //Varovať?// (zisťovacia otázka → **stúpavá**)\n\n**Dopĺňacie otázky → klesavá melódia (nepočítajú sa):**\n• //Čo sa stalo?// (opytovacie zámeno //čo// → klesavá)\n• //O čom sa chceš zhovárať?// (opytovacie zámeno //o čom// → klesavá)\n• //Pred čím?// (opytovacie zámeno //pred čím// → klesavá)\n\nUkážka 8 teda obsahuje presne **3 vety** so stúpavou vetnou melódiou.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 3 (tri vety).'
  }
];
