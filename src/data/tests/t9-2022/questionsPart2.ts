import type { QuestionData } from '../../types';

export const questionsPart2: QuestionData[] = [
  {
    id: 15,
    code: '15',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'Dobrovoľníci podľa ukážky',
    options: [
      { key: 'A', text: 'len tak nechávajú ostatných, aby za nich rozhodovali, na čo ich využijú.' },
      { key: 'B', text: 'vždy pracujú nezištne v akejkoľvek oblasti ľudskej existencie.' },
      { key: 'C', text: 'sú schopní obetovať aj vlastné zdravie, aby zachránili život núdznemu.' },
      { key: 'D', text: 'vedome obetovaním vlastného času a energie pomáhajú druhým.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si druhý a tretí odsek ukážky – ako dobrovoľníci trávia voľný čas a je pravda, že sa len nevedome nechávajú využívať druhými?',
    solutionSteps: [
      {
        title: 'Overenie možnosti D v 2. a 3. odseku',
        text: 'Podľa druhého a tretieho odseku dobrovoľníctvo umožňuje „**zmysluplne tráviť voľný čas užitočnou prácou**“ a dobrovoľníci nie sú naivní, ale „**zámerne používajú seba ako nástroj, aby pomohli druhým**“ a sú „**aktívni a tvoriví**“. Vedome teda venujú svoj čas a energiu na pomoc iným.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – tretí odsek tento bežný mylný názor priamo vyvracia („Nie sú to naivní ľudia, naopak, sú asertívni...“).\nB – zovšeobecnenie „vždy ... v akejkoľvek oblasti ľudskej existencie“ z ukážky nevyplýva.\nC – o obetovaní vlastného zdravia pri záchrane života sa v ukážke nepíše.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 16,
    code: '16',
    type: 'choice',
    category: 'Čítanie s porozumením (význam slov v kontexte)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti je __nepravdivé__ tvrdenie?\n\nPodľa ukážky sa prosociálny človek',
    options: [
      { key: 'A', text: 'nechá ľahko na hocičo nalákať, nemá skúsenosti, slepo dôveruje.' },
      { key: 'B', text: 'snaží pomáhať a svojím správaním motivovať okolie k pomáhaniu.' },
      { key: 'C', text: 'prejavuje ako inšpirujúci človek, ktorý dáva podnety na rôzne činnosti.' },
      { key: 'D', text: 'rozhodne, ohľaduplne a primerane postaví za svoje postoje a názory.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozor na podčiarknuté slovo „nepravdivé“! Pozri sa na poslednú vetu tretieho odseku: „Nie sú to naivní ľudia, naopak, sú asertívni, aktívni a tvoriví.“ Ktorá z možností opisuje práve naivného človeka?',
    solutionSteps: [
      {
        title: 'Odhalenie nepravdivého tvrdenia v možnosti A',
        text: 'Možnosť **A** (//nechá sa ľahko nalákať, nemá skúsenosti, slepo dôveruje//) opisuje **naivného** človeka. V závere tretieho odseku sa však o prosociálnych ľuďoch výslovne píše: „**Nie sú to naivní ľudia**, naopak, sú asertívni, aktívni a tvoriví.“'
      },
      {
        title: 'Súlad možností B, C, D s textom ukážky',
        text: 'B – prosociálni ľudia pomáhajú druhým a začínajú sa tak správať ako prví, aby nastolili prosociálne vzťahy.\nC – zodpovedá tomu, že sú **aktívni a tvoriví**.\nD – presne vystihuje význam slova **asertívni** (schopní pokojne, ohľaduplne, no pevne obhájiť svoj postoj).'
      }
    ],
    solutionConclusion: 'Nepravdivé tvrdenie sa nachádza v možnosti A.'
  },
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti je uvedený hlavný dôvod, prečo sa mladí ľudia zapájajú do dobrovoľníctva menej?',
    options: [
      { key: 'A', text: 'strach' },
      { key: 'B', text: 'nevidia zmysel zapájať sa' },
      { key: 'C', text: 'slabá osveta' },
      { key: 'D', text: 'krátko trvajúce dobrovoľnícke aktivity' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si druhú vetu štvrtého odseku – čo mladí ľudia uvádzajú ako „najčastejší dôvod“ a ktorým dvojslovným pomenovaním možno vyjadriť nedostatok informovania verejnosti?',
    solutionSteps: [
      {
        title: 'Vyhľadanie hlavného dôvodu vo štvrtom odseku',
        text: 'Vo štvrtom odseku čítame: „Mladí ľudia uvádzajú ako **najčastejší dôvod**, prečo sa nezapájajú do dobrovoľníctva, argument, že ich **nikto systematicky neoslovuje s ponukou, majú nedostatok informácií o možnostiach dobrovoľníckej práce**.“ Nedostatočné informovanie a vzdelávanie verejnosti pomenúva spojenie **slabá osveta** (C).'
      },
      {
        title: 'Vylúčenie možností A, B, D',
        text: 'A, D – o strachu ani o krátkom trvaní aktivít sa v texte nehovorí.\nB – to, že necítia potrebu zapájať sa, platí podľa tretej vety len pre **niektorých** mladých ľudí, nejde o hlavný (najčastejší) dôvod.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: 'Lexikológia (synonymá v kontexte)',
    sharedContextId: 'ukazka_3',
    questionText: 'Ktorým slovom by sme na základe poslednej vety z ukážky mohli nahradiť slovo //asociácia// v názve grafu?',
    options: [
      { key: 'A', text: 'pomoc' },
      { key: 'B', text: 'predstava' },
      { key: 'C', text: 'aktivita' },
      { key: 'D', text: 'zapájanie sa' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Porovnaj názov grafu „Asociácie mladých ľudí k slovu dobrovoľníctvo“ priamo so slovesom na samom konci poslednej vety textu nad grafom.',
    solutionSteps: [
      {
        title: 'Prepojenie poslednej vety ukážky s názvom grafu',
        text: 'Posledná veta ukážky znie: „Ako ukazuje graf, v prieskume sa zisťovalo aj to, čo si mladí ľudia pod pojmom dobrovoľníctvo **predstavujú**.“ Slovo //asociácia// (myšlienkové spojenie, to, čo sa nám pri pojme vybaví) preto môžeme na základe tejto vety nahradiť slovom **predstava**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: 'Hláskoslovie a pravopis (rytmické krátenie)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorom prídavnom mene sa uplatňuje pravidlo o rytmickom krátení?',
    options: [
      { key: 'A', text: 'vlastnému ideálu' },
      { key: 'B', text: 'životné okamihy' },
      { key: 'C', text: 'pozitívne hodnoty' },
      { key: 'D', text: 'hodnotovej orientácie' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Porovnaj pádovú príponu každého prídavného mena so vzorom pekný (peknému, pekné, peknej). V ktorej možnosti sa dlhá prípona -é skrátila na krátke -e, pretože pred ňou stojí dlhá slabika?',
    solutionSteps: [
      {
        title: 'Uplatnenie rytmického zákona v možnosti C',
        text: 'Prídavné meno **pozitívne** sa skloňuje podľa vzoru **pekný** (//pekn**é** hodnoty// – prípona **-é**). Keďže predchádzajúca slabika **-tív-** obsahuje dlhú samohlásku **í**, dlhá pádová prípona //-é// sa podľa pravidla o rytmickom krátení skracuje na krátke **-e**: **pozitívn-e** hodnoty.'
      },
      {
        title: 'Prečo sa v možnostiach A, B, D rytmické krátenie neuplatňuje',
        text: '• A: //vlast-né-mu// – pred dlhou slabikou //-né-// je krátka slabika //vlast-//, prípona zostala dlhá.\n• B: //ži-vot-né// – pred dlhou príponou //-né// je krátka slabika //-vot-//, prípona zostala dlhá.\n• D: //hod-no-to-vej// – pred príponou //-ej// je krátka slabika //-to-// (a samotný vzor //pekný// má v G sg. ženského rodu tvar //peknej//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 20,
    code: '20',
    type: 'text',
    category: 'Skladba (prisudzovací sklad)',
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíš z nasledujúcej vety prisudzovací sklad.\n\n//Vzťah hodnotovej orientácie a dobrovoľníctva je silný.//',
    placeholder: 'Vypíš prisudzovací sklad (podmet + prísudok)',
    correctAnswerDisplay: 'vzťah je silný',
    acceptedAnswers: [
      'vzťah je silný',
      'je silný vzťah',
      'vzťah - je silný',
      'vzťah = je silný',
      'je silný - vzťah'
    ],
    commonMistakes: [
      {
        pattern: '^vzťah je$|^je vzťah$',
        hint: 'Sloveso „je“ je tu iba sponové – bez prídavného mena „silný“ netvorí úplný slovesno-menný prísudok (je silný).'
      },
      {
        pattern: '^je siln[yý]$',
        hint: '„Je silný“ je iba prísudok – prisudzovací sklad tvorí spojenie podmetu a prísudku (kto? čo? je silný?).'
      },
      {
        pattern: 'orient[aá]cie|dobrovoľn[ií]ctva|hodnotovej',
        hint: 'Rozvíjajúce vetné členy (prívlastky „hodnotovej orientácie a dobrovoľníctva“) do prisudzovacieho skladu nepatria – vypíš len holý podmet a prísudok.'
      }
    ],
    hint: 'Prisudzovací sklad tvorí dvojica hlavných vetných členov: podmet (kto? čo?) + prísudok. Pozor – prísudok je tu slovesno-menný (sponové sloveso „je“ + prídavné meno) a prívlastky do skladu nepatria.',
    solutionSteps: [
      {
        title: 'Určenie podmetu a prísudku vo vete',
        text: '• **Podmet** (//kto? čo?//): **vzťah** (slová //hodnotovej orientácie a dobrovoľníctva// sú len prívlastky bližšie určujúce podmet).\n• **Prísudok** (slovesno-menný): **je silný** (sponové sloveso //je// + menná časť vyjadrená prídavným menom //silný//).'
      },
      {
        title: 'Spojenie do prisudzovacieho skladu',
        text: 'Prisudzovacím skladom vety je teda spojenie podmetu a prísudku: **vzťah je silný** (prípadne v opačnom poradí **je silný vzťah**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je vzťah je silný.'
  },
  {
    id: 21,
    code: '21',
    type: 'text',
    category: 'Čítanie s porozumením a sloh (argumentácia)',
    sharedContextId: 'ukazka_3',
    diagramId: 'q21_boys',
    questionText:
      'Lukáš, Marek a Filip sa rozprávajú o informáciách z prieskumu. Napíš meno chlapca, ktorý svoj názor založil na argumente.',
    placeholder: 'Napíš meno chlapca',
    correctAnswerDisplay: 'Marek',
    acceptedAnswers: ['Marek', 'MAREK'],
    caseSensitive: true,
    caseHint: 'Vlastné podstatné meno (meno chlapca) napíš s veľkým začiatočným písmenom (Marek).',
    commonMistakes: [
      {
        pattern: '^luk[aá]š$',
        hint: 'Lukáš vyslovuje len osobnú domnienku s podmienkou („keby som mal viac informácií...“), nepodkladá ju žiadnym overiteľným faktom ani štatistikou.'
      },
      {
        pattern: '^filip$',
        hint: 'Filip uvádza iba vlastnú skúsenosť a osobný pocit („Zdá sa mi to prirodzené“), nie vecný argument k prieskumu.'
      }
    ],
    hint: 'Argument sa skladá z tvrdenia a vecného zdôvodnenia (často uvedeného príčinnou spojkou „lebo / pretože“) opretého o konkrétny fakt alebo číselný údaj. Ktorý z troch chlapcov dokazuje svoj názor konkrétnym údajom?',
    solutionSteps: [
      {
        title: 'Rozlíšenie argumentu od domnienky a osobnej skúsenosti',
        text: '**Argument** spája názor (tvrdenie) s logickým zdôvodnením a overiteľným faktom. **Marek** vysloví tvrdenie (//„Viac informácií by zmenilo málo“//) a vzápätí ho podloží príčinnou spojkou **lebo** a konkrétnym faktom so štatistickým údajom zo svojej školy: //„**lebo** u nás v škole sa o tom stále hovorí a dobrovoľníctvu sa venujú **len 2 % žiakov**.“//'
      },
      {
        title: 'Prečo nejde o Lukáša ani Filipa',
        text: '• **Lukáš** vyjadruje iba neoverenú domnienku v podmieňovacom spôsobe (//„Určite by som sa zapojil aj ja, keby...“//).\n• **Filip** spomína len vlastnú skúsenosť a subjektívny pocit (//„Zdá sa mi to prirodzené.“//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je Marek.'
  },
  {
    id: 22,
    code: '22',
    type: 'choice',
    category: 'Lexikológia a literatúra (frazeologizmy – príslovie)',
    diagramId: 'q22_poem',
    questionText: 'V ktorej možnosti je správne určený druh frazeologizmu z prvého verša nasledujúcej ukážky?',
    options: [
      { key: 'A', text: 'príslovie' },
      { key: 'B', text: 'prirovnanie' },
      { key: 'C', text: 'porekadlo' },
      { key: 'D', text: 'pranostika' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prvý verš znie „Bez práce nie sú koláče“. Vyjadruje tento ľudový výrok mravné ponaučenie vyplývajúce zo životnej skúsenosti, alebo predpovedá počasie?',
    solutionSteps: [
      {
        title: 'Určenie druhu ľudového výroku',
        text: 'Výrok //Bez práce nie sú koláče// v prvom verši ukážky zovšeobecňuje ľudskú skúsenosť a priamo z neho plynie **ponaučenie** (ak chce človek získať odmenu alebo úspech, musí sa o to pričiniť prácou). Takýto frazeologizmus nazývame **príslovie**.'
      },
      {
        title: 'Rozlíšenie od možností B, C, D',
        text: '• **Prirovnanie** (B) porovnáva dve veci pomocou spojok //ako, sťa, než//.\n• **Porekadlo** (C) len vtipne a obrazne pomenúva situáciu, no nevyplýva z neho priame mravné ponaučenie.\n• **Pranostika** (D) spája predpoveď počasia či úrody s ročným obdobím alebo menom v kalendári.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 23,
    code: '23',
    type: 'choice',
    category: 'Pravopis (písanie malých a veľkých písmen)',
    diagramId: 'q23_sentence',
    questionText: 'V ktorej možnosti sú správne doplnené chýbajúce písmená z nasledujúcej vety?',
    options: [
      { key: 'A', text: 'č, s, p, e, t' },
      { key: 'B', text: 'Č, s, P, e, T' },
      { key: 'C', text: 'č, S, p, E, t' },
      { key: 'D', text: 'Č, S, P, E, T' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Rozlišuj: príslušníci národov a obyvatelia miest/obcí sú vlastné podstatné mená (veľké písmeno), vzťahové prídavné mená od štátov a svetadielov sa píšu s malým písmenom, no oficiálny názov športového turnaja („Tatranský pohár“) sa začína veľkým písmenom.',
    solutionSteps: [
      {
        title: 'Postupné zdôvodnenie všetkých piatich písmen',
        text: '1. **Čechmi** (**Č**) – príslušník národa (vlastné podstatné meno) sa píše s **veľkým** písmenom.\n2. **slovenských** (**s**) – vzťahové prídavné meno utvorené od názvu národa/krajiny sa píše s **malým** písmenom.\n3. **Popradčania** (**P**) – obyvateľské meno utvorené od názvu mesta //Poprad// je vlastné podstatné meno, píše sa s **veľkým** písmenom.\n4. **európsky** (**e**) – vzťahové prídavné meno od názvu svetadielu //Európa// sa píše s **malým** písmenom.\n5. **Tatranský** pohár (**T**) – prvé slovo oficiálneho názvu športového podujatia (súťaže) sa píše s **veľkým** začiatočným písmenom.'
      }
    ],
    solutionConclusion: 'Správna postupnosť písmen Č, s, P, e, T je v možnosti B.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: 'Tvaroslovie a pravopis (skloňovanie vlastných podstatných mien)',
    questionText:
      'Vlastné podstatné meno z nasledujúcej vety napíš pravopisne správne v tvare lokálu jednotného čísla.\n\n//Spoznaj našu Zem, modrú krásku, a jej vzácnosti.//',
    placeholder: 'Napíš tvar v lokáli sg. (napr. o ...)',
    correctAnswerDisplay: '(o) Zemi',
    acceptedAnswers: [
      'Zemi',
      'o Zemi',
      'O Zemi',
      'na Zemi',
      'Na Zemi',
      'v Zemi',
      'V Zemi',
      'pri Zemi',
      'Pri Zemi',
      'po Zemi',
      'Po Zemi'
    ],
    caseSensitive: true,
    caseHint: 'Názov planéty Zem je vlastné podstatné meno, preto sa píše s veľkým začiatočným písmenom Z (Zemi / o Zemi).',
    commonMistakes: [
      {
        pattern: 'Zem[yý]$',
        hint: 'Podstatné meno ženského rodu „Zem“ sa skloňuje podľa vzoru dlaň (tie dlane → tie zeme), preto má v lokáli jednotného čísla mäkké -i: (o) Zemi.'
      },
      {
        pattern: '^Zem$',
        hint: '„Zem“ je tvar nominatívu/akuzatívu – utvor tvar lokálu jednotného čísla (o kom? o čom? – o ...).'
      },
      {
        pattern: 'kr[aá]sk',
        hint: '„Kráska“ je všeobecné podstatné meno – vlastným podstatným menom vo vete je názov planéty „Zem“.'
      }
    ],
    hint: 'Vlastným podstatným menom vo vete je názov našej planéty „Zem“ (ženský rod, vzor dlaň – tie dlane, tie zeme). Opýtaj sa otázkou lokálu (o kom? o čom?) a postráž si veľké začiatočné písmeno aj mäkkú príponu.',
    solutionSteps: [
      {
        title: 'Určenie vzoru a tvaru lokálu jednotného čísla',
        text: 'Vlastným podstatným menom vo vete je názov planéty **Zem** (píšeme s veľkým **Z**). Ide o podstatné meno ženského rodu zakončené na spoluhlásku, ktoré má v nominatíve množného čísla príponu //-e// (//tie zeme// ako //tie dlane//) – skloňuje sa teda podľa vzoru **dlaň**.'
      },
      {
        title: 'Zápis tvaru',
        text: 'V lokáli jednotného čísla (//o kom? o čom? – o dlani//) má vzor //dlaň// mäkkú pádovú príponu **-i**: **Zemi** (uznáva sa samostatný tvar **Zemi** aj predložkový tvar **o Zemi**, **na Zemi**, **v Zemi**, **pri Zemi** a pod.).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je Zemi (alebo o Zemi / na Zemi).'
  },
  {
    id: 25,
    code: '25',
    type: 'text',
    category: 'Literatúra a porozumenie umeleckému textu',
    diagramId: 'q25_poem',
    questionText: 'Vypíš z ukážky dvojslovné spojenie vyjadrujúce //stálosť človeka vo svojich zásadách//.',
    placeholder: 'Vypíš dvojslovné spojenie z ukážky',
    correctAnswerDisplay: 'hodnoty neoblomné',
    acceptedAnswers: ['hodnoty neoblomné', 'neoblomné hodnoty'],
    commonMistakes: [
      {
        pattern: '^neoblomn[eé]$|^hodnoty$',
        hint: 'Zadanie žiada vypísať z ukážky celé dvojslovné spojenie (podstatné meno spolu s prídavným menom).'
      },
      {
        pattern: 'usmievav[eé] oči|bežec najlepš[ií]|chybn[yý]m smerom',
        hint: 'Pozri sa do predposledného verša piesne – prídavné meno „neoblomný“ znamená pevný, neústupný, stály v zásadách.'
      }
    ],
    hint: 'Zameraj sa na predposledný verš ukážky. Zásady človeka sú v ňom pomenované slovom „hodnoty“ a ich stálosť (pevnosť, neústupnosť) vystihuje prídavné meno pri tomto slove.',
    solutionSteps: [
      {
        title: 'Vyhľadanie dvojslovného spojenia v závere piesne',
        text: 'Prídavné meno **neoblomný** znamená pevný, neústupný, taký, ktorý sa nedá zlomiť ani odvrátiť od svojich zásad. V predposlednom verši piesne //Čaro obyčajných vecí// čítame: //„/:To tie usmievavé oči a **hodnoty neoblomné**“// – hľadaným dvojslovným spojením je teda **hodnoty neoblomné** (uznáva sa aj slovosled **neoblomné hodnoty**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je hodnoty neoblomné (alebo neoblomné hodnoty).'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: 'Tvaroslovie a jazyková kultúra (väzby predložiek a zámen)',
    questionText: 'V ktorej možnosti je veta napísaná správne?',
    options: [
      { key: 'A', text: 'Napadla ma originálna myšlienka.' },
      { key: 'B', text: 'Za chvíľu už budem na príjazdovej ceste.' },
      { key: 'C', text: 'Bol tam potôčik, tak sme cezeň prešli.' },
      { key: 'D', text: 'Zabudla som si dáždnik, vrátim sa po neho.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Postráž si štyri časté jazykové javy: 1. napadla mi myšlienka (datív) vs. napadla ma osa (akuzatív), 2. časová predložka o chvíľu vs. za chvíľu, 3. zliate zámenné tvary pre mužský neživotný rod (potôčik → cezeň, dáždnik → poň).',
    solutionSteps: [
      {
        title: 'Overenie správnej vety v možnosti C',
        text: 'Podstatné meno //potôčik// je mužského **neživotného** rodu. V akuzatíve jednotného čísla sa krátky tvar zámena //on// spája s predložkou //cez// do jedného slova **cezeň** (//prešli sme cezeň//). Veta **C** je preto napísaná spisovne a gramaticky správne.'
      },
      {
        title: 'Jazykové chyby v možnostiach A, B, D',
        text: 'A – vo význame //„prišla mi na um“// sa sloveso //napadnúť// viaže s **datívom**: správne je **Napadla mi** originálna myšlienka (//napadla ma// znamená fyzický útok).\nB – časový údaj vyjadrujúci, po uplynutí akého času sa niečo stane, sa v spisovnej slovenčine spája s predložkou **o**: správne je **O chvíľu** už budem na príjazdovej ceste.\nD – //dáždnik// je mužského **neživotného** rodu, preto po predložke //po// v akuzatíve nemôže stáť životný tvar //po neho//, ale zliaty tvar **poň**: správne je vrátim sa **poň**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: 'Čítanie s porozumením (interpretácia citátu)',
    questionText:
      'V ktorej možnosti je správne uvedená pointa nasledujúceho citátu?\n\n//„Myslel som si, že keď o tom nikto nebude hovoriť, nebude to pravda.“//\n//Joseph Heller//',
    options: [
      { key: 'A', text: 'Ak zakryjeme oči a uši pred skutočnosťou, neznamená to, že zmizne.' },
      { key: 'B', text: 'Všetky informácie, o ktorých sa dočítame, sú pravdivé.' },
      { key: 'C', text: 'Zaručene pravdivé správy sú vždy tie, o ktorých sa veľa rozpráva.' },
      { key: 'D', text: 'Udržať tajomstvo a nehovoriť o ňom je náročná úloha.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si úvodné slová v minulom čase „Myslel som si...“ – autor nimi priznáva svoj niekdajší omyl, keď dúfal, že mlčaním o probléme prestane problém existovať.',
    solutionSteps: [
      {
        title: 'Vystihnutie hlavnej myšlienky (pointy) citátu',
        text: 'Slovami //„Myslel som si...“// autor naznačuje, že jeho predstava bola mylná: to, že o nepríjemnej skutočnosti mlčíme alebo sa tvárime, že neexistuje, nespôsobí, že prestane byť pravdou. Presne túto myšlienku vyjadruje možnosť **A**: **Ak zakryjeme oči a uši pred skutočnosťou, neznamená to, že zmizne.**'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 28,
    code: '28',
    type: 'text',
    category: 'Pravopis a lexikológia (vybrané slová a antonymá)',
    questionText:
      'Napíš pravopisne správne vybrané slovo, ktoré je antonymom prídavného mena v nasledujúcej vete.\n\n//V tej chvíli som bol už taký hladný, až sa mi zatmilo pred očami.//',
    placeholder: 'Napíš vybrané slovo (antonymum)',
    correctAnswerDisplay: 'sýty (nasýtený)',
    acceptedAnswers: [
      'sýty',
      'nasýtený',
      'presýtený',
      'zasýtený',
      'sýta',
      'sýte',
      'nasýtená',
      'nasýtené'
    ],
    footnote:
      'Všetky pravopisne a gramaticky správne napísané odvodené vybrané slová od prídavného mena sýty budú v antonymickom význame prídavného mena hladný vyhodnotené ako správne odpovede.',
    commonMistakes: [
      {
        pattern: '^s[ií]t|nas[ií]t',
        hint: 'Slovo „sýty“ patrí medzi vybrané slová po s – v koreni sa píše dlhé tvrdé ý (sýty, nasýtený).'
      },
      {
        pattern: 's[yý]t[yý]$',
        hint: 'Pozor na rytmické krátenie: po dlhej slabike sý- musí nasledovať krátka prípona -y (sýty, nie sýtý).'
      },
      {
        pattern: '^najeden[yý]$|^pln[yý]$',
        hint: 'Slovo „najedený“ má síce opačný význam k slovu „hladný“, ale zadanie výslovne žiada napísať vybrané slovo!'
      }
    ],
    hint: 'Prídavným menom vo vete je „hladný“. Spomeň si na rad vybraných slov po s – ktoré vybrané slovo znamená „najedený, nie hladný“? Nezabudni na rytmické krátenie v prípone!',
    solutionSteps: [
      {
        title: 'Vyhľadanie prídavného mena a jeho antonyma medzi vybranými slovami',
        text: 'Vo vete sa nachádza akostné prídavné meno **hladný**. Jeho antonymom (slovom s opačným významom), ktoré zároveň patrí medzi **vybrané slová po s**, je prídavné meno **sýty** (prípadne odvodené **nasýtený**).'
      },
      {
        title: 'Kontrola pravopisu',
        text: 'V koreni vybraného slova píšeme dlhé tvrdé **ý** (**sý-**) a v pádovej prípone sa uplatňuje pravidlo o rytmickom krátení, preto je prípona krátka: **sýty** (pri slovesnom prídavnom mene **nasýtený** je pred //-ný// krátka slabika //-te-//, takže prípona //-ný// ostáva dlhá).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je sýty (alebo nasýtený).'
  },
  {
    id: 29,
    code: '29',
    type: 'text',
    category: 'Tvaroslovie a pravopis (radové číslovky)',
    questionText:
      'Vypíš slovom pravopisne správne číslovku z nasledujúcej vety.\n\n//Dobrovoľníci sú si vedomí toho, že sa musia ako 1. začať správať prosociálne.//',
    placeholder: 'Napíš číslovku slovom v správnom tvare',
    correctAnswerDisplay: 'prví',
    acceptedAnswers: ['prví'],
    commonMistakes: [
      {
        pattern: '^prv[yý]$',
        hint: 'Pozor na číslo a životnosť! Číslovka „1.“ sa vzťahuje na podmet „dobrovoľníci“ (mužský životný rod, množné číslo: ako pekní → ako prví).'
      },
      {
        pattern: '^jeden$|^jedna$|^prvýkrát$',
        hint: 'Bodka za číslicou „1.“ označuje radovú číslovku (koľkí v poradí? ako 1. → ako ...).'
      }
    ],
    hint: 'Bodka za číslicou „1.“ označuje radovú číslovku. Pozri sa na podmet vety („dobrovoľníci“ – mužský životný rod, nominatív množného čísla) a skloňuj radovú číslovku podľa vzoru pekný (pekní dobrovoľníci).',
    solutionSteps: [
      {
        title: 'Určenie druhu číslovky a gramatických kategórií',
        text: 'Zápis **1.** s bodkou označuje **radovú číslovku** //prvý//. Vo vete sa vzťahuje na podmet **dobrovoľníci**, ktorý je v **mužskom životnom rode, nominatíve množného čísla** (//oni – dobrovoľníci – sa musia ako prví začať správať...//).'
      },
      {
        title: 'Skloňovanie podľa vzoru pekný',
        text: 'Radové číslovky skloňujeme podľa vzoru **pekný**. V nominatíve množného čísla mužského životného rodu má vzor //pekný// mäkkú dlhú príponu **-í** (//pekn**í** → **prví**//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je prví.'
  },
  {
    id: 30,
    code: '30',
    type: 'choice',
    category: 'Literatúra (epické žánre – bájka)',
    diagramId: 'q30_fable',
    questionText: 'V ktorej možnosti je správne uvedený literárny žáner nasledujúcej ukážky?',
    options: [
      { key: 'A', text: 'rozprávka' },
      { key: 'B', text: 'báj' },
      { key: 'C', text: 'povesť' },
      { key: 'D', text: 'bájka' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Všimni si dva typické znaky ukážky: 1. strom (platan) hovorí ako človek a vyčíta pocestným ľudskú chybu (nevďačnosť), 2. na konci je kurzívou vyslovené mravné ponaučenie.',
    solutionSteps: [
      {
        title: 'Znaky bájky v ukážke Pocestní a platan',
        text: 'Ukážka je krátky alegorický príbeh, v ktorom rastlina (**platan**) preberá ľudskú reč a vlastnosti (personifikácia), poukazuje na ľudskú chybu (**nevďačnosť**) a v závere je priamo vyslovené **mravné ponaučenie** (//„Tak je to aj s ľuďmi...“//). Ide o typické znaky **bájky**.'
      },
      {
        title: 'Rozlíšenie od možností A, B, C',
        text: '• **Rozprávka** (A) je rozsiahlejší príbeh založený na boji dobra so zlom a čarovných prvkoch.\n• **Báj / mýtus** (B) podáva predstavy starovekých ľudí o vzniku sveta, bohov a prírodných javov.\n• **Povesť** (C) sa viaže ku konkrétnej historickej postave, udalosti alebo reálnemu miestu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  }
];
