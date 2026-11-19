import type { QuestionData } from '../../types';

// Úlohy 01 – 32. Odpovede podľa kľúča NIVaM k testu 24 1403 (Maturita 2024, marcový termín).
// lenient: kľúč uvádza „Prihliadať na vecnú správnosť odpovede, uznať aj odpoveď s pravopisnými či gramatickými chybami.“

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart1: QuestionData[] = [
  // ---------------- Ukážka 1 – Peter Kováč: Ak beháte s hudbou…
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 1?',
    options: [
      { key: 'A', text: 'Človek, ktorý sa pri vykonávaní pohybovej aktivity zameriava na svoju techniku pohybu, býva vyčerpanejší.' },
      { key: 'B', text: 'Športoví tréneri odporúčajú profesionálnym bežcom zamerať sa na efektívnu spotrebu kyslíka a kontrolu pohybu.' },
      { key: 'C', text: 'Tvrdenie, že bežci využívajúci pri pohybe isté rozptýlenie vynaložia menšie úsilie, je čisto subjektívne.' },
      { key: 'D', text: 'Výsledky výskumu, ktorý sa uskutočnil na vzorke 27 žien, sú v rozpore s teóriou obmedzenej akcie.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Porovnaj každú možnosť s textom ukážky odsek po odseku. Všimni si hneď prvú vetu 1. a 2. odseku: čo pociťovali účastníčky výskumu, keď sa sústredili na samotný pohyb?',
    solutionSteps: [
      {
        title: 'Overenie správneho tvrdenia v texte',
        text: 'Hneď v 1. odseku čítame, že //„čím viac sa pri pohybe sústredíme na to, ako ho vykonávame, tým je pre nás namáhavejší“//, a začiatok 2. odseku to potvrdzuje: //„Pri zameraní sa na vlastný pohyb účastníčky výskumu pociťovali vyššiu námahu aj únavu.“// To presne zodpovedá možnosti **A**.'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**B** – tréneri tieto rady dávajú **začínajúcim** bežcom (nie profesionálnym) a kážu im vnímať dýchanie, údery srdca a prácu nôh (nie spotrebu kyslíka).\n**C** – text výslovne uvádza opak: menšia námaha sa prejavila //„subjektívne aj objektívne“// (na nižších hodnotách laktátu a spotrebe kyslíka).\n**D** – štúdia nie je s hypotézou obmedzenej akcie v rozpore, naopak, je pre ňu **podporným dôkazom**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Hlavnou funkciou ukážky 1 je',
    options: [
      { key: 'A', text: 'pôsobiť na čitateľskú verejnosť esteticky.' },
      { key: 'B', text: 'nabádať čitateľa k zdravému životnému štýlu.' },
      { key: 'C', text: 'komunikovať s odbornou verejnosťou.' },
      { key: 'D', text: 'oboznámiť čitateľa so zaujímavými skutočnosťami.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa na zdroj pod ukážkou (dennikn.sk) a na spôsob podania informácií. Ide o umelecké dielo, prísnu vedeckú štúdiu pre vedcov, reklamu/výzvu, alebo populárno-náučný článok pre bežných čitateľov?',
    solutionSteps: [
      {
        title: 'Určenie charakteru a cieľa textu',
        text: 'Ukážka je novinový (publicistický / populárno-náučný) článok z internetového denníka, ktorý zrozumiteľným jazykom približuje širokému publiku zistenia novej vedeckej štúdie o behu. Jeho hlavnou funkciou je **informovať – oboznámiť čitateľa so zaujímavými skutočnosťami**.'
      },
      {
        title: 'Vylúčenie ostatných možností',
        text: '**A** – esteticky pôsobí umelecký štýl (poézia, próza, dráma).\n**B** – autor čitateľa na nič nenahovára ani nevyzýva, len vecne referuje o výsledkoch výskumu.\n**C** – komunikácia s odbornou verejnosťou je úlohou vedeckého (náučného) štýlu v odborných časopisoch, nie článku v bežných novinách.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti je správny prepis číslovky zo slovného spojenia //so skupinou 27 žien// z ukážky 1?',
    options: [
      { key: 'A', text: 'dvadsiatich siedmich' },
      { key: 'B', text: 'dvadsiatichsiedmych' },
      { key: 'C', text: 'dvadsiatich siedmych' },
      { key: 'D', text: 'dvadsať sedem' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Najprv sa opýtaj na pád spojenia „skupinou (koho? čoho?) 27 žien“. Potom si spomeň na dve pravidlá: či sa skloňovaná zložená číslovka píše spolu alebo oddelene a aké i/y má základná číslovka „sedem“ pri skloňovaní.',
    solutionSteps: [
      {
        title: 'Určenie pádu a písanie medzery',
        text: 'Pozor na predložku //so//: tá patrí k slovu //skupinou// (inštrumentál), ale výraz //27 žien// rozvíja podstatné meno //skupinou// v **genitíve** (//skupinou koho? čoho? – 27 žien//). Preto nemôže ostať v základnom tvare (vylučujeme **D**). Podľa PSP sa zložené základné číslovky pri skloňovaní v nepriamych pádoch píšu **osobitne s medzerou** a skloňujú sa obe časti (vylučujeme **B**).'
      },
      {
        title: 'Pravopis i/y v slove siedmich',
        text: 'Základná číslovka //sedem// (//koľko?//) má pri skloňovaní vždy **mäkké i**: //bez siedmich, siedmim, o siedmich, so siedmimi//. Tvrdé //-y-// (//siedmych//) má iba radová číslovka //siedmy// (//koľký v poradí?//, vzor //pekný//). Správny tvar je preto **dvadsiatich siedmich** (vylučujeme **C**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Čo majú spoločné **zvýraznené** slová z nasledujúceho súvetia?\n//Kážu im, aby sa sústredili na správne dýchanie, vnímali údery **srdca** a kontrolovali prácu **nôh**.//',
    options: [
      { key: 'A', text: 'Patria k plnovýznamovým neohybným slovám.' },
      { key: 'B', text: 'Majú rovnaké všetky morfologické kategórie.' },
      { key: 'C', text: 'Zastávajú funkciu rovnakého vetného člena.' },
      { key: 'D', text: 'Sú to hlavné vetné členy v danej vete súvetia.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si, od ktorého slova závisí „srdca“ (údery srdca) a od ktorého „nôh“ (prácu nôh). Opýtaj sa na obe slová otázkou vetného člena: aké údery? akú prácu?',
    solutionSteps: [
      {
        title: 'Syntaktická funkcia oboch slov',
        text: 'Obe podstatné mená v genitíve bližšie určujú nadradené podstatné meno pred sebou: //údery (aké? čoho?) **srdca**// a //prácu (akú? čoho?) **nôh**//. Obidve teda vo vete plnia funkciu rovnakého vedľajšieho vetného člena – **nezhodného prívlastku**.'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – podstatné mená sú plnovýznamové **ohybné** slová (skloňujú sa).\n**B** – zhodujú sa len v páde (genitív); líšia sa rodom (//srdca// – stredný rod, //nôh// – ženský rod), číslom (jednotné vs. množné) aj vzorom (//srdce// vs. //žena//).\n**D** – nezhodný prívlastok je **vedľajší (rozvíjací)** vetný člen; hlavnými vetnými členmi sú len podmet a prísudok.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti dochádza vo všetkých slovách k znelostnej asimilácii/spodobovaniu?',
    options: [
      { key: 'A', text: '//organizmu, vyššia, obmedzenej//' },
      { key: 'B', text: '//vedci, vlastný, absolvovala//' },
      { key: 'C', text: '//nižšia, podvedome, pravda//' },
      { key: 'D', text: '//takzvanú, však, vášho//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Spodobovanie (znelostná asimilácia) nastáva vtedy, keď sa stretnú dve spoluhlásky s rôznou znelosťou a prvá sa vo výslovnosti prispôsobí druhej (napr. neznelé k pred znelým z sa vysloví ako g). Vyslov si nahlas každú trojicu slov a daj si pozor na spoluhlásky pred m, l a v!',
    solutionSteps: [
      {
        title: 'Overenie spodobovania v možnosti D',
        text: '1. //ta**kz**vanú// → neznelé **k** pred znelou párovou spoluhláskou **z** sa mení na znelé **g**: vyslovujeme **[tagzvanú]**.\n2. //**vš**ak// → **v** na začiatku slova pred neznelou spoluhláskou **š** sa mení na neznelé **f**: vyslovujeme **[fšak]**.\n3. //vá**šh**o// → neznelé **š** na hranici základu a prípony pred znelým **h** sa mení na znelé **ž**: vyslovujeme **[vážho]**.\nVo všetkých troch slovách teda dochádza k spodobovaniu.'
      },
      {
        title: 'Prečo neplatia možnosti A, B a C',
        text: '**A** – vnútri slova pred zvučnou spoluhláskou //m// sa znelé spoluhlásky nespodobujú: //organizmu// [organizmu], //obmedzenej// [obmedzenej].\n**B** – v slove //vlastný// stojí //v// pred zvučnou spoluhláskou //l//, takže znelosť sa nemení ([vlastní]).\n**C** – v slove //podvedome// stoja vedľa seba dve znelé spoluhlásky //d// a //v// (pred samohláskou //e//), takže znelosť sa nemení ([podvedome]), a v slove //pravda// stojí //v// na konci slabiky pred znelým //d// a vyslovuje sa ako obojperné [u̯] ([prau̯da]), nie ako neznelé [f].'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Napíšte gramaticky a pravopisne správny tvar slova //dobrovoľníčka//, ktorý patrí na zakryté miesto v ukážke 1.',
    placeholder: 'Napíš tvar podstatného mena',
    correctAnswerDisplay: 'dobrovoľníčok',
    acceptedAnswers: ['dobrovoľníčok', 'z dobrovoľníčok'],
    commonMistakes: [
      {
        pattern: '^dobrovoľníčiek$|^z\\s+dobrovoľníčiek$',
        hint: 'Slovo dobrovoľníčka (utvorené príponou -níčka, vzor žena) má v genitíve množného čísla vkladnú samohlásku -o- (ako pracovníčka → pracovníčok), nie dvojhlásku -ie-.'
      },
      {
        pattern: '^dobrovoľníčka$|^dobrovoľníčky$',
        hint: 'Dosadené slovo stojí po predložke „z“ vo vete „Každá z … absolvovala“ (hovorí sa o skupine 27 žien) – potrebuješ genitív množného čísla.'
      }
    ],
    hint: 'Pozri sa na vetu v 1. odseku: „Tvrdia to vedci…, ktorí pracovali so skupinou 27 žien. Každá z [?] absolvovala…“ Predložka „z“ sa viaže s genitívom (z koho?) množného čísla. Daj si pozor na dĺžeň, mäkčene a správnu vkladnú samohlásku pred koncovým -k!',
    solutionSteps: [
      {
        title: 'Určenie pádu a čísla podľa kontextu',
        text: 'Vo vete //„Každá z … absolvovala na bežeckom páse štyri behy“// nadväzujeme na //skupinu 27 žien//. Po predložke **z** nasleduje **genitív množného čísla** (//z koho? čoho?//).'
      },
      {
        title: 'Skloňovanie a pravopis podľa PSP',
        text: 'Podstatné meno //dobrovoľníčka// (utvorené od //dobrovoľník//) sa skloňuje podľa vzoru **žena** a v genitíve plurálu má bezpríponový tvar s vkladnou samohláskou **-o-**: //dobrovoľníč**o**k// (rovnako ako //pracovníčka → pracovníčok, bojovníčka → bojovníčok//). Predchádzajúce **í** v príponovej časti //-níč-// zostáva dlhé a mäkké **ľ** aj **č** si zachovávajú mäkčene.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa iba pravopisne správny tvar **dobrovoľníčok** (prípadne aj s predložkou **z dobrovoľníčok**). Na veľkosti začiatočného písmena nezáleží.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **dobrovoľníčok**.'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Napíšte názov slovného druhu __podčiarknutého__ slova ukážky 1.',
    placeholder: 'Napíš názov slovného druhu',
    correctAnswerDisplay: 'sloveso',
    acceptedAnswers: ['sloveso', 'slovesá', 'verbum', 'verbá', 'plnovýznamové sloveso'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'prísudok|prisudok',
        hint: 'Prísudok je vetný člen (skladba), ale zadanie sa pýta na slovný druh (morfológiu).'
      },
      {
        pattern: 'príslovk|prislovk',
        hint: 'Príslovkou je slovo „vedome“ pred ním; podčiarknuté je však posledné slovo ukážky „kontrolujeme“, ktoré vyjadruje dej a časuje sa.'
      }
    ],
    hint: 'Nájdi na úplnom konci ukážky 1 podčiarknuté slovo „kontrolujeme“. Opýtaj sa naň: čo robíme? Ktorý základný slovný druh pomenúva dej, činnosť alebo stav a dá sa časovať?',
    solutionSteps: [
      {
        title: 'Určenie slovného druhu',
        text: 'Na konci ukážky 1 je podčiarknutý tvar //__kontrolujeme__// (neurčitok //kontrolovať//). Slovo vyjadruje činnosť (//čo robíme?//), má gramatické kategórie osoby (1.), čísla (plurál), času (prítomný) a spôsobu (oznamovací) – patrí teda medzi **slovesá** (latinsky //verbum / verbá//).'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznávajú sa odpovede **sloveso**, **slovesá**, ako aj odborné latinské pomenovania **verbum** či **verbá** (prihliada sa na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **sloveso**.'
  },
  {
    id: 8,
    code: '08',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíšte zo **zvýrazneného** textu ukážky 1 slovo cudzieho pôvodu, ktorého lexikálny význam je: //vedecky podložený, ale ešte definitívne nedokázaný názor/predpoklad/domnienka.//',
    placeholder: 'Vypíš slovo cudzieho pôvodu',
    correctAnswerDisplay: 'hypotézu',
    acceptedAnswers: ['hypotézu', 'hypotéza'],
    commonMistakes: [
      {
        pattern: '^teóri[au]$|^teori[au]$',
        hint: 'Slovo „teóriu“ nie je vo zvýraznenej časti textu; pozri sa do prvej (zvýraznenej) vety 4. odseku!'
      },
      {
        pattern: '^laktátu$|^laktát$|^kontraproduktívne$',
        hint: 'Toto je síce slovo cudzieho pôvodu zo zvýrazneného textu, ale jeho význam nezodpovedá definícii „nedokázaný vedecký predpoklad/domnienka“. Pozri sa na 1. vetu vo 4. odseku.'
      }
    ],
    hint: 'Prečítaj si pozorne zvýraznenú prvú vetu vo 4. odseku ukážky 1. Hľadáš odborné slovo gréckeho pôvodu, ktoré vo vede označuje predpoklad alebo domnienku, ktorú treba výskumom overiť.',
    solutionSteps: [
      {
        title: 'Vyhľadanie slova vo zvýraznenom texte',
        text: 'V prvej (zvýraznenej) vete vo 4. odseku sa píše: //„Štúdia by mohla byť aj podporným dôkazom pre takzvanú **hypotézu** obmedzenej akcie.“// Podstatné meno **hypotéza** (z gréčtiny) presne znamená vedecky podložený, no zatiaľ definitívne nedokázaný predpoklad.'
      },
      {
        title: 'Pravopis a hodnotenie podľa kľúča NIVaM',
        text: 'Slovo musí byť vypísané **pravopisne správne** – s tvrdým **y** po //h// a s dĺžňom na **é**. Uznáva sa tvar z textu (**hypotézu**) aj základný tvar (**hypotéza**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **hypotézu** (alebo **hypotéza**).'
  },

  // ---------------- Ukážka 2 – Drak sa vracia (autor zakrytý pre úlohu 13!)
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 2?',
    options: [
      { key: 'A', text: 'Ľudia zabraňovali Drakovi vrátiť sa.' },
      { key: 'B', text: 'Ľudia odsudzovali Draka za inakosť.' },
      { key: 'C', text: 'Starý Lepiš zatajil Drakov pôvod.' },
      { key: 'D', text: 'Starý Lepiš bol vypočítavý človek.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si v 1. a 2. odseku, prečo dedina pripísala Drakovi všetky nešťastia (ohne, povodne, hlad, choroby). Čo o ňom ľudia vedeli a ako sa líšil od ostatných? Pri možnostiach C a D rozlišuj medzi istotou a dedinskými klebetami („jedni vravia…, iní tvrdia…“)!',
    solutionSteps: [
      {
        title: 'Odhalenie postoja dedinčanov',
        text: 'Text hovorí, že Drak //„bol vždy sám“//, nikomu nepatril a //„nikto ani poriadne nevedel, kde sa tu vzal a odkiaľ prišiel“//. Práve pre túto cudzosť, samotu a neznámy pôvod ho dedina obvinila zo všetkých pohrôm (//„stal sa nešťastím dediny… Tak aspoň usúdila dedina“//) – **ľudia ho teda odsudzovali za jeho inakosť** (**B**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – o návrate Draka ani o tom, že by mu v ňom niekto bránil, sa v ukážke nehovorí.\n**C** – starý Lepiš našiel uzimené dieťa v tme pri ceste, takže jeho pôvod sám nepoznal, nemohol ho teda zatajiť.\n**D** – veta //„Nik nevie, ako vtedy starý Lepiš kalkuloval, jedni vravia…, iní tvrdia…“// jasne ukazuje, že išlo len o nepodložené dohady dedinčanov, nie o fakt.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorá myšlienka __nesúvisí__ s vyznením celého diela //Drak sa vracia//?',
    options: [
      { key: 'A', text: 'Najmocnejším preludom je verejná mienka – nikto presne nevie, kto ju vytvára, nikto ju nikdy osobne nepoznal, ale mnohí sa ňou nechajú utláčať.' },
      { key: 'B', text: 'Ľudia niekedy z pravdy uznávajú málo, z verejnej mienky mnoho.' },
      { key: 'C', text: 'Netreba sa báť tých, ktorí majú iný názor, ale tých, ktorí iný názor majú, ale sú príliš zbabelí na to, aby ho vyslovili.' },
      { key: 'D', text: 'Netráp sa pre mienku ľudí, ak máš svoju predstavu o živote.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor na podčiarknutý zápor „nesúvisí“! Tri možnosti hovoria o tej istej téme – o sile verejnej mienky (predsudkov dediny) oproti pravde a vlastnej ceste človeka. Nájdi tú jedinú, ktorá rieši niečo úplne iné (zbabelosť pri vyslovovaní názoru).',
    solutionSteps: [
      {
        title: 'Hlavná myšlienka diela Drak sa vracia',
        text: 'Ústrednou témou novely //Drak sa vracia// je sila zaslepenej verejnej mienky, klebiet a predsudkov kolektívu voči nepochopenému jednotlivcovi (v ukážke: //„Tak aspoň usúdila dedina a taká musela byť pravda.“//), ktoré Drak prekoná vytrvalosťou a obetavým činom. Výroky **A**, **B** a **D** priamo vystihujú tento rozpor medzi verejnou mienkou a pravdou či vlastným životným postojom.'
      },
      {
        title: 'Vylúčenie nesúvisiacej myšlienky',
        text: 'Myšlienka **C** hovorí o ľuďoch, ktorí majú odlišný názor, no zo zbabelosti mlčia. Takýto motív politickej či spoločenskej zbabelosti pri prejavovaní názoru s vyznením diela //Drak sa vracia// **nesúvisí**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o ukážke 2 je pravdivé?',
    options: [
      { key: 'A', text: 'Nenachádza sa v nej pásmo postáv.' },
      { key: 'B', text: 'Z hľadiska vnútornej kompozície ide o vyvrcholenie.' },
      { key: 'C', text: 'Nenachádza sa v nej pásmo rozprávača.' },
      { key: 'D', text: 'Z hľadiska vnútornej kompozície ide o obrat.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Epický text sa skladá z pásma rozprávača a pásma postáv (priama reč postáv v úvodzovkách – dialógy alebo priame monológy). Prezri si ukážku 2: prehovorí v nej priamo v úvodzovkách niektorá postava?',
    solutionSteps: [
      {
        title: 'Pásmo rozprávača vs. pásmo postáv',
        text: 'Celá ukážka 2 je vyrozprávaná v 3. osobe bez jedinej priamej reči či dialógu – celú ju tvorí **pásmo rozprávača** (vrátane prerozprávania Eviných myšlienok a dedinských rečí). **Pásmo postáv sa v ukážke vôbec nenachádza**, preto je tvrdenie **A** pravdivé a tvrdenie **C** nepravdivé.'
      },
      {
        title: 'Prečo nejde o obrat ani vyvrcholenie',
        text: 'Ukážka pochádza zo začiatku novely, kde sa čitateľ spomienkovo (retrospektívne) dozvedá o Drakovom príchode do dediny a o jeho vyrastaní u hrnčiara Lepiša – z hľadiska vnútornej kompozície ide o **úvodnú časť (expozíciu)**, nie o obrat (**D**) ani vyvrcholenie (**B**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti je uvedený znak literárneho smeru, do ktorého zaraďujeme dielo //Drak sa vracia//?',
    options: [
      { key: 'A', text: 'Typická pre tento literárny smer je kombinácia viazanej a neviazanej reči.' },
      { key: 'B', text: 'V dielach tohto literárneho smeru sa vyskytujú rozprávkové motívy.' },
      { key: 'C', text: 'Typické pre tento literárny smer je oslavovanie súdobého režimu.' },
      { key: 'D', text: 'V dielach tohto literárneho smeru sa uplatňujú postupy a prvky drámy.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Spomeň si, do ktorého smeru slovenskej medzivojnovej prózy patrí novela Drak sa vracia (spolu s dielami Tri gaštanové kone či Nevesta hôľ). Títo autori utekali od skazenej civilizácie do prírody a vrchov a inšpirovali sa ľudovou slovesnosťou.',
    solutionSteps: [
      {
        title: 'Zaradenie diela k literárnemu smeru',
        text: 'Novela //Drak sa vracia// je reprezentatívnym dielom slovenského **naturizmu** (lyrizovanej prózy). Pre prózu naturizmu je typický únik do horskej prírody, ostrý kontrast dobra a zla, tajomnosť, baladickosť a **využívanie rozprávkových a mýtických motívov** (tajomný najdúch s prezývkou Drak, skúška hrdinu, víťazstvo dobra a lásky).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – diela naturizmu sú písané neveršovanou (neviazanou), no básnicky obraznou (lyrizovanou) prózou, nie striedaním básní a prózy.\n**C** – oslavovanie režimu bolo znakom socialistického realizmu, zatiaľ čo naturizmus sa od politiky a spoločenských udalostí vedome odvracal.\n**D** – v naturizme sa uplatňujú prvky a prostriedky **lyriky** (lyrizácia prózy), nie drámy.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 13,
    code: '13',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Kto je autorom diela //Drak sa vracia//?',
    options: [
      { key: 'A', text: 'Milo Urban' },
      { key: 'B', text: 'Dobroslav Chrobák' },
      { key: 'C', text: 'Peter Jilemnický' },
      { key: 'D', text: 'Ladislav Mňačko' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'K štvorici hlavných predstaviteľov slovenskej prózy naturizmu patria Margita Figuli, František Švantner, Ľudo Ondrejov a jeden z ponúknutých autorov.',
    solutionSteps: [
      {
        title: 'Autor novely Drak sa vracia',
        text: 'Autorom rozprávkovej novely naturizmu //Drak sa vracia// (1943) je **Dobroslav Chrobák** (okrem nej vydal napr. zbierku noviel //Kamarát Jašek//).'
      },
      {
        title: 'Zaradenie ostatných autorov',
        text: '**A** – Milo Urban je predstaviteľ medzivojnového sociálno-psychologického realizmu (román //Živý bič//).\n**C** – Peter Jilemnický je predstaviteľ medzivojnového socialistického realizmu (román //Kronika//, //Pole neorané//).\n**D** – Ladislav Mňačko je predstaviteľ povojnovej prózy (román //Ako chutí moc//, //Smrť sa volá Engelchen//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Pomenujte jednoslovným literárnovedným termínom **zvýraznený** umelecký prostriedok v nasledujúcej vete.\n//Tak aspoň **usúdila dedina**.//',
    placeholder: 'Napíš literárnovedný termín',
    correctAnswerDisplay: 'metonymia (personifikácia / zosobnenie)',
    acceptedAnswers: ['metonymia', 'personifikácia', 'zosobnenie', 'synekdocha', 'tróp', 'trópus', 'trópy'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^metafora$',
        hint: 'Metafora prenáša význam na základe vonkajšej podobnosti. Tu však slovo „dedina“ zastupuje „obyvateľov dediny“ na základe vnútornej, vecnej súvislosti (alebo pripisuje neživej dedine ľudskú schopnosť usudzovať).'
      },
      {
        pattern: '^epiteton$|^prirovnanie$|^hyperbola$',
        hint: 'V spojení „usúdila dedina“ buď neživá dedina koná ako človek, alebo názov miesta („dedina“) zastupuje ľudí, ktorí v ňom žijú.'
      }
    ],
    hint: 'Zamysli sa nad spojením „usúdila dedina“ z dvoch uhlov pohľadu (oba sú správne!): 1. Namiesto „obyvatelia dediny“ autor použil názov miesta „dedina“ – ako sa volá prenášanie významu na základe vecnej súvislosti? 2. Neživej dedine sa pripisuje ľudská činnosť („usúdila“) – ako sa volá takýto umelecký prostriedok?',
    solutionSteps: [
      {
        title: 'Dva platné literárnovedné pohľady',
        text: 'Spojenie //**usúdila dedina**// možno v teórii literatúry správne pomenovať dvoma spôsobmi:\n1. **metonymia** (príp. **synekdocha**) – prenesenie významu na základe vecnej/miestnej súvislosti: slovo //dedina// pomenúva //ľudí žijúcich v dedine// (podobne ako //celé mesto spalo//, //čítať Kukučína//);\n2. **personifikácia (zosobnenie)** – neživému javu (//dedine//) sa pripisuje ľudská schopnosť myslieť a vynášať súdy (//usúdila//).'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Kľúč uznáva odpovede **metonymia**, **personifikácia**, **zosobnenie**, ako aj **synekdocha** či nadradené pomenovanie **tróp** (**trópus / trópy**). Prihliada sa na vecnú správnosť odpovede.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **metonymia** alebo **personifikácia** (**zosobnenie**).'
  },
  {
    id: 15,
    code: '15',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Vypíšte zo **zvýraznenej** časti ukážky 2 jedno neohybné slovo, ktorým sa naznačuje, že ide o reprodukciu výpovede niekoho iného.',
    placeholder: 'Vypíš neohybné slovo z ukážky',
    correctAnswerDisplay: 'vraj',
    acceptedAnswers: ['vraj'],
    commonMistakes: [
      {
        pattern: '^aspoň$|^veď$|^ani$',
        hint: 'Toto slovo je síce neohybné (častica), ale nevyjadruje význam „údajne / ako ľudia hovoria“. Prečítaj si v zvýraznenej časti vetu o starom Lepišovi!'
      },
      {
        pattern: '^vravia$|^tvrdia$',
        hint: 'Slovesá „vravia“ a „tvrdia“ sú ohybné a nachádzajú sa až v poslednom odseku mimo zvýraznenej časti.'
      }
    ],
    hint: 'Prečítaj si poslednú vetu zvýraznenej časti v 2. odseku (o starom Lepišovi Madlušovie). Ktoré krátke neohybné slovo (častica) má význam „údajne, ako sa hovorí“ a dáva najavo, že rozprávač len posúva ďalej to, čo sa v dedine povráva?',
    solutionSteps: [
      {
        title: 'Vyhľadanie slova vo zvýraznenom texte',
        text: 'Vo zvýraznenej časti 2. odseku čítame: //„Starý Lepiš Madlušovie našiel ho **vraj** pred rokmi povyše Boce…“// Častica **vraj** je neohybné slovo, ktorým hovoriaci naznačuje, že informáciu nemá z vlastnej skúsenosti, ale iba reprodukuje cudzie reči („údajne, ako sa povráva“).'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Slovo **vraj** musí byť vypísané pravopisne správne (na veľkosti začiatočného písmena nezáleží).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **vraj**.'
  },
  {
    id: 16,
    code: '16',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_2',
    questionText: 'Doplňte chýbajúcu časť jazykovedného termínu do nasledujúcej vety.',
    fillSentenceHtml: 'V druhej polovici ukážky 2 dominuje {{blank}} slohový postup.',
    placeholder: 'Doplň slohový postup',
    correctAnswerDisplay: 'rozprávací',
    acceptedAnswers: [
      'rozprávací',
      'rozprávací slohový postup',
      'V druhej polovici ukážky 2 dominuje rozprávací slohový postup'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'opisn',
        hint: 'Opisný slohový postup zachytáva znaky a vlastnosti javu či osoby. V druhej polovici ukážky sa však odvíja jedinečný príbeh v čase (ako kôň zastal, Lepiš našiel chlapca a vyučil ho remeslu).'
      },
      {
        pattern: 'úvahov|uvahov|výkladov|vykladov|informačn|informacn',
        hint: 'Spomeň si na štyri základné slohové postupy (informačný, opisný, výkladový/úvahový a ten, ktorý zachytáva dej a udalosti príbehu v časovej postupnosti).'
      }
    ],
    hint: 'V slovenčine rozlišujeme štyri základné slohové postupy. Pozri sa na druhú polovicu ukážky 2 (od príhody, ako sa starý Lepiš vracal z jarmoku v Brezne, našiel uzimené dieťa a vyučil ho remeslu): zachytáva táto časť statický opis, fakty, výklad, alebo príbeh a sled udalostí v čase?',
    solutionSteps: [
      {
        title: 'Určenie slohového postupu',
        text: 'Zatiaľ čo v úvode ukážky sa objavujú úvahové prvky o Drakovej samote, v druhej polovici ukážky rozprávač rozvíja **dejovú líniu v časovej postupnosti** – ako sa starý Lepiš vracal z jarmoku, ako jeho kôň zastal, ako našiel chlapca a vyučil ho hrnčiarskemu remeslu. Ide teda o **rozprávací** slohový postup.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa odpoveď **rozprávací** (aj v spojení **rozprávací slohový postup**); prihliada sa na vecnú správnosť odpovede.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **rozprávací** (slohový postup).'
  },

  // ---------------- Ukážka 3 – Umberto Eco: Meno ruže
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Z ukážky 3 vyplýva, že Viliam hľadá',
    options: [
      { key: 'A', text: 'trojzväzkovú knihu s názvom //Coena Cypriani//.' },
      { key: 'B', text: 'tajomnú knihu s tromi originálnymi rukopismi.' },
      { key: 'C', text: 'text napísaný na siloskom pergamene.' },
      { key: 'D', text: 'prepis arabského a sýrskeho textu.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si pozorne celý 2. odsek – čo presne Viliam odpovedá na otázku „čo vlastne chceš“? Spočítaj, koľko textov je v zväzku a ktorý z nich chce Viliam vidieť!',
    solutionSteps: [
      {
        title: 'Čo presne Viliam žiada v 2. odseku',
        text: 'Viliam odpovedá: //„Chcem vidieť posledný rukopis toho zväzku… Chcem vidieť tú grécku kópiu napísanú na plátennom pergamene, čiže papieri, ktorý bol vtedy ešte veľmi vzácny a vyrábal sa práve v Silose…“// Hľadá teda **text napísaný na siloskom pergamene** (**C**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – nejde o trojzväzkovú knihu s názvom //Coena Cypriani//, ale o **jeden zväzok**, v ktorom je výklad/prepis //Coena Cypriani// len jedným zo štyroch zviazaných textov.\n**B** – v zväzku sú **štyri** rukopisy (arabský, sýrsky, výklad/prepis //Coena Cypriani// a posledný – grécka kópia), pričom nejde o tri originály.\n**D** – Viliam nechce prepis arabského a sýrskeho textu, ale posledný, **grécky** text v zväzku.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Viliamov spoločník v rozhovore v ukážke 3 bol s najväčšou pravdepodobnosťou',
    options: [
      { key: 'A', text: 'Malachiášov nadriadený.' },
      { key: 'B', text: 'Malachiášov vrah.' },
      { key: 'C', text: 'Viliamov nadriadený.' },
      { key: 'D', text: 'Viliamov konkurent.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si v prvých šiestich vetách 1. odseku, aký vzťah mal hovoriaci k Malachiášovi („Povedal som mu, aby… bol verným vykonávateľom mojich príkazov“) a či chcel jeho smrť.',
    solutionSteps: [
      {
        title: 'Vzťah hovoriaceho k Malachiášovi',
        text: 'Viliamov spoločník v rozhovore hovorí o Malachiášovi: //„Povedal som mu, aby stoj čo stoj knihu našiel a aby ju doniesol sem, ale aby ju neotváral… bol verným vykonávateľom mojich príkazov.“// Keďže mu vydával príkazy a Malachiáš ich verne plnil, bol **Malachiášovým nadriadeným** (**A**).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**B** – dvakrát zdôrazňuje, že Malachiášovu smrť nechcel a varoval ho, aby knihu neotváral; Malachiáš doplatil na to, že //„prvýkrát chcel konať na vlastnú päsť“//.\n**C** – Viliamovi nevelí (navyše opátom kláštora je niekto iný: //„keď som sa od opáta dozvedel“//).\n**D** – nesúťaží s Viliamom v pátraní po knihe; naopak, tajomstvo knižnice stráži a na Viliama tam už čakal.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_3',
    questionText: 'Texty o textoch, fragmentárnosť, prelínanie žánrov a záhada sú znaky typické pre',
    options: [
      { key: 'A', text: 'postmodernú literatúru.' },
      { key: 'B', text: 'surrealistické diela.' },
      { key: 'C', text: 'naturalistickú literatúru.' },
      { key: 'D', text: 'expresionistické diela.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Spomeň si, kam v svetovej literatúre 2. polovice 20. storočia zaraďujeme Umberta Eca a jeho román Meno ruže, ktorý spája stredovekú filozofickú kroniku s napínavou detektívkou.',
    solutionSteps: [
      {
        title: 'Znaky postmodernej literatúry',
        text: 'Román Umberta Eca //Meno ruže// (1980) je učebnicovým príkladom **postmodernej literatúry**. Pre postmodernu je príznačná **intertextualita** (nadväzovanie „textov na iné texty“, citácie a odkazy na staré rukopisy), **prelínanie a spájanie žánrov** (historický a filozofický román spojený s detektívkou a záhadou) a **fragmentárnosť**.'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**B** – surrealizmus stavia na snoch, podvedomí, fantázii a automatickom písaní.\n**C** – naturalizmus zobrazuje človeka ako biologicky a sociálne predurčenú bytosť, často v drsných a pudových situáciách.\n**D** – expresionizmus vyjadruje úzkosť, krik, citové vypätie a rozklad vnútra človeka (najmä pod vplyvom 1. svetovej vojny).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 20,
    code: '20',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti sa nachádza hyperbola z ukážky 3?',
    options: [
      { key: 'A', text: '//živiť tvoju pýchu//' },
      { key: 'B', text: '//konať na vlastnú päsť//' },
      { key: 'C', text: '//má silu tisícich škorpiónov//' },
      { key: 'D', text: '//bol si veľmi blízko k pravde//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Hyperbola znamená po slovensky zveličenie (preháňanie). V ktorej možnosti sa nebezpečný účinok knihy zámerne a výrazne preháňa?',
    solutionSteps: [
      {
        title: 'Určenie hyperboly (zveličenia)',
        text: '**Hyperbola** je umelecký prostriedok založený na zámernom zveličení skutočnosti s cieľom citovo zapôsobiť a zdôrazniť podstatu javu. Vo výraze //**má silu tisícich škorpiónov**// sa nebezpečnosť zakázanej knihy dramaticky zveličuje prirovnaním k jedu tisícky škorpiónov.'
      },
      {
        title: 'Rozbor ostatných možností',
        text: '**A** – //živiť tvoju pýchu// je metafora (prenesenie významu na základe podobnosti).\n**B** – //konať na vlastnú päsť// je frazeologizmus (ustálené slovné spojenie s významom „konať samostatne, na vlastnú zodpovednosť“).\n**D** – //bol si veľmi blízko k pravde// je bežné obrazné vyjadrenie bez zveličenia.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **C**.'
  },
  {
    id: 21,
    code: '21',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: '**Zvýraznené** slovo //blázon// je v kontexte ukážky 3',
    options: [
      { key: 'A', text: 'zastaraným slovom.' },
      { key: 'B', text: 'expresívnym slovom.' },
      { key: 'C', text: 'vulgárnym slovom.' },
      { key: 'D', text: 'neutrálnym slovom.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si vetu „Ale ten blázon prvýkrát chcel konať na vlastnú päsť.“ Hovorí postava vecne o duševne chorom pacientovi, alebo týmto slovom vyjadruje svoj citový postoj (rozhorčenie, hnev)? Pozor: je slovo „blázon“ hrubou nespisovnou nadávkou, alebo bežným citovo zafarbeným slovom?',
    solutionSteps: [
      {
        title: 'Citové zafarbenie slova v kontexte',
        text: 'Vo vete //„Ale ten **blázon** prvýkrát chcel konať na vlastnú päsť“// slovo //blázon// nepomenúva lekársku diagnózu (neutrálny význam), ale vyjadruje hovoriaceho **citový postoj – hnev, výčitku a pohŕdanie** nerozvážnym konaním. Slová s kladným alebo záporným citovým zafarbením sa nazývajú **expresívne slová** (konkrétne pejoratívne/hanlivé).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**A** – //blázon// sa v súčasnej slovenčine bežne používa, nie je to zastarané slovo (archaizmus ani historizmus).\n**C** – vulgárne slová (vulgarizmy) sú hrubé, neslušné nadávky stojace mimo spisovnej normy; slovo //blázon// je spisovné expresívne slovo.\n**D** – neutrálne slová nemajú žiadny citový príznak.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 22,
    code: '22',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíšte z prvej priamej reči v ukážke 3 jednu nesklonnú číslovku.',
    placeholder: 'Vypíš číslovku z 1. odseku',
    correctAnswerDisplay: 'prvýkrát',
    acceptedAnswers: ['prvýkrát'],
    commonMistakes: [
      {
        pattern: '^prvý\\s+krát$',
        hint: 'Násobné číslovky so zložkou -krát sa podľa Pravidiel slovenského pravopisu píšu vždy spolu ako jedno slovo!'
      },
      {
        pattern: '^tisícich$|^tisíc$',
        hint: 'Číslovka „tisíc“ sa skloňuje – práve v 1. odseku má ohýbaný tvar „tisícich“ (škorpiónov). Hľadaj číslovku na otázku „koľkokrát?“, ktorá má vo všetkých pádoch ten istý tvar.'
      },
      {
        pattern: '^jeden$',
        hint: 'Číslovka „jeden“ je sklonná (jedného, jednému…) a navyše sa nachádza až v druhej priamej reči.'
      }
    ],
    hint: 'Nesklonná číslovka je taká, ktorá nemení svoj tvar v žiadnom páde – patria sem napríklad násobné číslovky na otázku „koľkokrát?“. Prečítaj si pozorne prvú priamu reč (1. odsek) a odlíš ju od sklonnej číslovky „tisícich“.',
    solutionSteps: [
      {
        title: 'Vyhľadanie nesklonnej číslovky',
        text: 'V prvej priamej reči (1. odsek) čítame: //„Ale ten blázon **prvýkrát** chcel konať na vlastnú päsť.“// Slovo **prvýkrát** je násobná číslovka (//koľkokrát?//), ktorá je **nesklonná** – nedá sa skloňovať, v každom kontexte si zachováva nezmenený tvar.'
      },
      {
        title: 'Pravopis a hodnotenie podľa kľúča NIVaM',
        text: 'Podľa PSP sa číslovky utvorené príponou **-krát** píšu vždy **spolu ako jedno slovo** (//prvýkrát, dvakrát, veľakrát// – na rozdiel od podstatného mena //raz, razy//: //prvý raz, dva razy//). Slovo musí byť vypísané pravopisne správne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **prvýkrát**.'
  },
  {
    id: 23,
    code: '23',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Napíšte gramaticky a pravopisne správny tvar genitívu plurálu slova //kópia//.',
    placeholder: 'Napíš tvar v genitíve plurálu',
    correctAnswerDisplay: 'kópií',
    acceptedAnswers: ['kópií', 'bez kópií', 'od kópií', 'z kópií', 'do kópií', 'u kópií'],
    commonMistakes: [
      {
        pattern: '^kópii$|^bez\\s+kópii$|^od\\s+kópii$|^z\\s+kópii$',
        hint: 'Zakončenie -ii s krátkym druhým i patrí datívu a lokálu jednotného čísla (o jednej kópii). V genitíve množného čísla sa príponové -í predlžuje: -ií!'
      },
      {
        pattern: '^kópí$|^kopí$',
        hint: 'Nevynechávaj krátke -i-, ktoré patrí k základu slova (kópi-a → bez kópi-í).'
      }
    ],
    hint: 'Utvor si v duchu pomocné spojenie pre genitív množného čísla: „zhotovil veľa … / bez viacerých …“ (ako „veľa fotografií, komédií, histórií“). Daj si veľký pozor na dĺžne – koľko písmen i je na konci a ktoré z nich je dlhé?',
    solutionSteps: [
      {
        title: 'Skloňovanie cudzích slov na -ia podľa vzoru ulica',
        text: 'Podstatné mená ženského rodu cudzieho pôvodu zakončené na **-ia** (//kópia, história, komédia, fotografia, energia//) sa skloňujú podľa vzoru **ulica**. Pri odtrhnutí pádovej prípony //-a// ostáva základ zakončený na krátke //-i-//: **kópi-**.'
      },
      {
        title: 'Dĺžka prípony v genitíve plurálu (-ií)',
        text: 'Kým v datíve a lokáli jednotného čísla je prípona krátka //-i// (//k jednej kópi-i, o kópi-i → kópii//), v **genitíve množného čísla** (//bez koho? bez čoho? veľa…//) sa koncová samohláska predlžuje na **-í**: //kópi- + -í// → **kópií**. V koreni slova zároveň ostáva dlhé **ó**.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa len pravopisne správny tvar **kópií** (prípadne aj s vhodnou predložkou viažucou sa s genitívom, napr. //bez kópií, z kópií//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **kópií**.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Napíšte skloňovací vzor **zvýrazneného** slova v nasledujúcej vete.\n//Dnes predpoludním som **v skriptóriu** počul…//',
    placeholder: 'Napíš skloňovací vzor',
    correctAnswerDisplay: 'mesto',
    acceptedAnswers: ['mesto', 'vzor mesto', 'podľa vzoru mesto', 'gymnázium', 'vzor gymnázium'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'srdce|vysvedčeni|vysvedceni|dievča|dievca',
        hint: 'Povedz si slovo v základnom tvare (nominatív sg.): „to skriptórium“ (rovnako ako „to múzeum, to štúdium“). Podľa ktorého vzoru stredného rodu sa v slovenčine skloňujú prevzaté slová na -um/-ium?'
      }
    ],
    hint: 'Najprv si daj slovo „v skriptóriu“ do nominatívu jednotného čísla (pozri si aj vysvetlivky pod ukážkou 3: „skriptórium“). Podľa ktorého vzoru stredného rodu sa skloňujú cudzie podstatné mená zakončené na -um, -ium (ako múzeum, štúdium, akvárium)?',
    solutionSteps: [
      {
        title: 'Základný tvar a rod podstatného mena',
        text: 'Základný tvar (nominatív jednotného čísla) je **to skriptórium** – ide o prevzaté podstatné meno **stredného rodu** zakončené na //-ium//.'
      },
      {
        title: 'Určenie skloňovacieho vzoru',
        text: 'Všetky podstatné mená stredného rodu cudzieho pôvodu zakončené na **-um, -ium, -eum** (//skriptórium, múzeum, štúdium, gymnázium, akvárium//) sa v slovenčine skloňujú podľa vzoru **mesto** (koncové //-um// pri ohýbaní odpadáva: //bez skriptóri-a, v skriptóri-u, skriptóri-á//). Kľúč NIVaM uznáva aj starší školský pomocný vzor **gymnázium**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **mesto** (uznáva sa aj **gymnázium**).'
  },

  // ---------------- Ukážka 4 – Ivan Bukovčan: Kým kohút nezaspieva
  {
    id: 25,
    code: '25',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktorá replika z ukážky 4 naznačuje empatický postoj postavy? (//empatia// – schopnosť vciťovať sa do duševných pochodov druhého)',
    options: [
      { key: 'A', text: 'ŠUSTEK: //Preboha – nemáte cigaretu?//' },
      { key: 'B', text: 'BABICA: //Ten vojak…? To už vieme, pán Fischl!//' },
      { key: 'C', text: 'ONDREJ: //Tak vy nie ste…// (Sklamaný.) //Ten jedenásty?//' },
      { key: 'D', text: 'TOMKO: //Vidíte…?// (Všetkým povzbudivo.) //Nevravel som, že sa to vysvetlí?//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Všímaj si nielen samotné slová postáv, ale aj scénické poznámky v zátvorkách! Ktorá postava nemyslí len na seba, ale vníma strach ostatných zadržaných a snaží sa ich upokojiť a povzbudiť?',
    solutionSteps: [
      {
        title: 'Nájdenie prejavu empatie',
        text: 'Učiteľ **Tomko** vycíti úzkosť a strach spoluzadržaných ľudí a len čo sa objaví iskierka nádeje (Fischl prichádza ako prostredník), obracia sa k ostatným so snahou dodať im odvahu a pokoj: //„Vidíte…? (Všetkým povzbudivo.) Nevravel som, že sa to vysvetlí?“// Ide o jasný prejav empatie (**D**).'
      },
      {
        title: 'Prečo nie ostatné repliky',
        text: '**A** – Šustek rieši len vlastnú nervozitu a fajčiarsku potrebu.\n**B** – Babica netrpezlivo skáče Fischlovi do reči.\n**C** – Ondrej je sklamaný, že Fischl nie je jedenástym rukojemníkom (prial by teda rovnaké nešťastie aj ďalšiemu človeku, čo je opak empatie).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **D**.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'V diele //Kým kohút nezaspieva// dominujú prvky',
    options: [
      { key: 'A', text: 'nadrealizmu.' },
      { key: 'B', text: 'existencializmu.' },
      { key: 'C', text: 'naturizmu.' },
      { key: 'D', text: 'impresionizmu.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'V Bukovčanovej dráme je skupina náhodne zaistených ľudí zatvorená v pivnici a do rána sa musia rozhodnúť, kto z nich zomrie. Ktorý filozoficko-literárny smer 20. storočia skúma človeka v takejto hraničnej situácii tvárou v tvár smrti, úzkosti a voľbe?',
    solutionSteps: [
      {
        title: 'Hraničná situácia a existencializmus',
        text: 'Dráma Ivana Bukovčana //Kým kohút nezaspieva// (1969) stavia desať náhodne zadržaných rukojemníkov do **hraničnej životnej situácie** (ohrozenie života, strach zo smrti, nutnosť morálnej voľby, odhalenie pravého charakteru bez spoločenskej masky). Práve toto sú základné znaky **existencializmu**.'
      },
      {
        title: 'Vylúčenie ostatných smerov',
        text: '**A** – nadrealizmus je slovenská medzivojnová avantgardná poézia (sny, podvedomie, genitívna metafora).\n**C** – naturizmus je lyrizovaná próza s rozprávkovými a prírodnými motívmi.\n**D** – impresionizmus zachytáva prchavé zmyslové dojmy a nálady okamihu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Názov diela //Kým kohút nezaspieva// je odkazom na',
    options: [
      { key: 'A', text: 'biblický text.' },
      { key: 'B', text: 'slovenské príslovie.' },
      { key: 'C', text: 'antickú bájku.' },
      { key: 'D', text: 'hrdinský epos.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Spomeň si na známy príbeh o zrade a strachu o vlastný život pred ranným spevom kohúta: komu Ježiš predpovedal, že ho trikrát zaprie, skôr ako kohút zaspieva?',
    solutionSteps: [
      {
        title: 'Pôvod symbolického názvu',
        text: 'Názov hry //Kým kohút nezaspieva// je priamou alúziou (odkazom) na **biblický text z Nového zákona** (evanjeliá), kde Ježiš predpovedá apoštolovi Petrovi: //„Skôr ako kohút zaspieva, trikrát ma zaprieš.“// Rovnako rukojemníci v pivnici majú čas do rána (kým zaspieva kohút) a pod tlakom strachu o život niektorí zapierajú vlastnú ľudskosť a morálne zásady.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'Nejde o slovenské ľudové príslovie (**B**), Ezopovu či Phaedrovu antickú bájku (**C**) ani o hrdinský epos (**D**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 28,
    code: '28',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Bukovčan **zvýraznenú** scénickú poznámku __neadresoval__',
    options: [
      { key: 'A', text: 'kostymérkam.' },
      { key: 'B', text: 'divákom.' },
      { key: 'C', text: 'režisérovi.' },
      { key: 'D', text: 'hercovi.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozor na podčiarknutý zápor „neadresoval“! Predstav si predstavenie v divadle: číta v ňom niekto nahlas text v zátvorkách? Komu slúžia poznámky o svetle, kostýme (čierny kabát, klobúk, rukavice) a správaní postavy pri príprave divadelnej inscenácie?',
    solutionSteps: [
      {
        title: 'Komu slúžia scénické poznámky',
        text: 'Zvýraznená autorská (scénická) poznámka v zátvorke obsahuje pokyny pre realizačný tím divadla:\n• pre **kostymérky** (**A**) – presný opis odevu (//čierny kabát, čierny klobúk, plstené čierne topánky, tmavé rukavice//),\n• pre **režiséra** (**C**) – príchod postavy do svetla a celkové vyznenie výstupu,\n• pre **herca** (**D**) – držanie tela, náladu (//akoby v smútku//) a prácu s rekvizitou (//ten klobúk takmer nikdy nesníma z hlavy//).'
      },
      {
        title: 'Komu scénická poznámka adresovaná nie je',
        text: 'Počas divadelného predstavenia scénické poznámky nikto nečíta – **diváci** (**B**) sedia v hľadisku a vnímajú až hotovú inscenáciu na javisku.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **B**.'
  },
  {
    id: 29,
    code: '29',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktoré tvrdenie o diele //Kým kohút nezaspieva// je pravdivé?',
    options: [
      { key: 'A', text: 'Inscenáciu tejto divadelnej hry realizuje činoherný súbor.' },
      { key: 'B', text: 'Dielo ako celok zaraďujeme k tragikomédiám.' },
      { key: 'C', text: 'Dielo ako celok zaraďujeme do absurdnej drámy.' },
      { key: 'D', text: 'Inscenáciu tejto divadelnej hry realizuje kabaretný súbor.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Divadelné súbory delíme napríklad na operu, balet, činohru, bábkové divadlo či kabaret. Ktorý súbor hrá vážne hovorené divadelné hry bez spevu a tanca? Zároveň si over žáner hry: spája v sebe tragické a komické prvky (tragikomédia), alebo ide o vážnu psychologickú drámu s reálnym dejom?',
    solutionSteps: [
      {
        title: 'Druh divadelného súboru',
        text: '//Kým kohút nezaspieva// je hovorená psychologická dráma v dvoch dejstvách. V divadle takúto hru naštuduje a predvádza **činoherný súbor** (činohra – divadlo založené na hovorenom hereckom slove).'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: '**B** – nejde o tragikomédiu (spojenie tragických a komických prvkov), ale o vážnu drámu s tragickým koncom (vražda Tuláka holičom Uhríkom a následná Uhríkova smrť pri úteku z pivnice).\n**C** – nejde o absurdnú drámu (tá nemá súvislý dej, čas ani zmysluplné dialógy – napr. //Čakanie na Godota//); Bukovčanova hra má presný historický rámec jesene 1944 po potlačení povstania aj logickú dramatickú zápletku.\n**D** – kabaretný súbor uvádza krátke zábavné, satirické a hudobné scénky.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je **A**.'
  },
  {
    id: 30,
    code: '30',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktorá postava z ukážky 4 chýbala v šiestom výstupe prvého dejstva?',
    placeholder: 'Napíš meno postavy',
    correctAnswerDisplay: 'Fischl',
    acceptedAnswers: [
      'Fischl',
      'pán Fischl',
      'Pán Fischl',
      'FISCHL',
      'PÁN FISCHL',
      'starší muž',
      'Starší muž',
      'STARŠÍ MUŽ',
      'sprostredkovateľ',
      'Sprostredkovateľ',
      'SPROSTREDKOVATEĽ',
      'prostredník',
      'Prostredník',
      'PROSTREDNÍK',
      'obchodník s drevom',
      'Obchodník s drevom',
      'OBCHODNÍK S DREVOM'
    ],
    caseSensitive: true,
    caseHint: 'Priezvisko postavy (Fischl) je vlastné meno a musí sa písať s veľkým začiatočným písmenom F.',
    commonMistakes: [
      {
        pattern: 'fišl|fischel|fiscl|fichl',
        hint: 'Skontroluj si priamo v ukážke 4 presný pravopis priezviska tejto postavy (píše sa so skupinou -sch-).'
      },
      {
        pattern: 'tomko|šustek|sustek|ondrej|babica|terezčák|terezcak|pani',
        hint: 'Pozri sa na začiatok ukážky: „Siedmy výstup – … a predošlí“. Nový výstup v dráme sa začína vtedy, keď na scénu príde nová postava; „predošlí“ tam boli už v šiestom výstupe!'
      }
    ],
    hint: 'V divadelnej hre sa zmena výstupu určuje podľa príchodu alebo odchodu postavy na javisko. Pozri sa na podnadpis na úplnom začiatku ukážky 4 („Siedmy výstup – … a predošlí“) a na prvú scénickú poznámku: kto práve teraz vkročil medzi ostatných?',
    solutionSteps: [
      {
        title: 'Čo znamená zmena výstupu v dráme',
        text: 'Výstup v divadelnej hre sa mení s príchodom alebo odchodom postavy. Podnadpis //„Siedmy výstup – **Fischl** a predošlí“// aj scénická poznámka //„Do svetla konečne vkročí starší človek…“// jasne ukazujú, že všetci ostatní (//predošlí//) už boli na scéne v šiestom výstupe a teraz k nim prichádza **Fischl** – práve on teda v šiestom výstupe chýbal.'
      },
      {
        title: 'Pravopis a hodnotenie podľa kľúča NIVaM',
        text: 'Meno **Fischl** (príp. **pán Fischl**) je vlastné meno, preto musí byť vypísané pravopisne správne so skupinou //-sch-// a s **veľkým začiatočným písmenom F** (s malým //f// sa odpoveď neuznáva!). Kľúč uznáva aj vecné označenia tejto postavy: **starší muž**, **prostredník**, **sprostredkovateľ** alebo **obchodník s drevom**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **Fischl** (alebo **pán Fischl**).'
  },
  {
    id: 31,
    code: '31',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Pomenujte syntaktickú konštrukciu, ktorá je v nasledujúcej vete čiarkou odčlenená od pozdravu.\n//Ruky bozkávam, milostivá pani.//',
    placeholder: 'Napíš názov konštrukcie',
    correctAnswerDisplay: 'oslovenie',
    acceptedAnswers: ['oslovenie'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'prístavok|pristavok',
        hint: 'Prístavok je iné pomenovanie už spomenutého podstatného mena vo vete (napr. „Tomko, učiteľ,“). Tu sa však Fischl výrazom „milostivá pani“ priamo obracia na osobu, ktorú zdraví!'
      },
      {
        pattern: 'vokatív|vokativ',
        hint: 'Vokatív je názov pádu v morfológii; zadanie sa pýta na syntaktickú konštrukciu vo vete, ktorou pomenúvame adresáta prehovoru a oddeľujeme ju čiarkami.'
      },
      {
        pattern: 'zhodný prívlastok|prívlastok|privlastok|podmet|predmet',
        hint: 'Výraz „milostivá pani“ nie je bežným vetným členom zapojeným do vetných skladov, ale mimočlenským prvkom, ktorým sa hovoriaci obracia na adresátku.'
      }
    ],
    hint: 'Keď niekomu povieš „Dobrý večer, pán učiteľ“ alebo „Ruky bozkávam, milostivá pani“, ako v skladbe voláme výraz oddelený čiarkou, ktorým pomenúvame osobu, ku ktorej hovoríme?',
    solutionSteps: [
      {
        title: 'Určenie syntaktickej konštrukcie',
        text: 'Vo vete //„Ruky bozkávam, **milostivá pani**.“// je zdvorilý pozdrav //Ruky bozkávam// a za čiarkou nasleduje pomenovanie adresátky, ku ktorej sa pán Fischl obracia – v skladbe sa táto mimočlenská syntaktická konštrukcia nazýva **oslovenie**.'
      },
      {
        title: 'Pravidlo o čiarke a hodnotenie kľúča',
        text: 'Podľa PSP sa oslovenie vo vete **vždy oddeľuje čiarkou** (ak je uprostred vety, čiarkami z oboch strán). Kľúč NIVaM prihliada na vecnú správnosť odpovede.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **oslovenie**.'
  },
  {
    id: 32,
    code: '32',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Napíšte počet osôb zadržaných pre vraždu vojaka v diele //Kým kohút nezaspieva//.',
    placeholder: 'Napíš počet osôb',
    correctAnswerDisplay: '10 (desať)',
    acceptedAnswers: [
      '10',
      'desať',
      '10 ľudí',
      '10 osôb',
      'desať ľudí',
      'desať osôb',
      'desiatich',
      '10 rukojemníkov',
      'desať rukojemníkov'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^11$|jedenásť|jedenast',
        hint: 'Pozor na chyták! Ondrej sa síce pýta Fischla „Tak vy nie ste… Ten jedenásty?“, no práve z toho vyplýva, že Fischla nezadržali (poslali ho len ako prostredníka), takže zadržaných ostalo o jedného menej!'
      }
    ],
    hint: 'Odpoveď sa dá vyčítať priamo z ukážky 4 aj bez toho, aby si si pamätal celé dielo! Pozri sa na Ondrejove dve repliky: najprv sa Fischla pýta, či ho chytili až teraz, a keď Fischl povie „Mňa sem poslali“, Ondrej sklamaný povie: „Tak vy nie ste… Ten jedenásty?“ Koľko je teda v pivnici zadržaných?',
    solutionSteps: [
      {
        title: 'Odhalenie počtu z textu aj z obsahu diela',
        text: 'Keď Fischl vysvetlí, že ho nezatkli, ale poslali ako prostredníka, Ondrej sklamaný reaguje: //„Tak vy nie ste… Ten jedenásty?“// Keďže Fischl by bol býval jedenástym zadržaným, no zadržaný nie je, v pivnici je zadržaných presne **10 (desať)** rukojemníkov.'
      },
      {
        title: 'Hodnotenie podľa kľúča NIVaM',
        text: 'Uznáva sa odpoveď zapísaná číslom aj slovom: **10**, **desať**, prípadne so slovom **10 ľudí / 10 osôb / desať ľudí / desať osôb** (prihliada sa na vecnú správnosť – správny počet).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: **10** (**desať**).'
  }
];
