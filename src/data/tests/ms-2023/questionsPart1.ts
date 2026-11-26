import type { QuestionData } from '../../types';

// Úlohy 01 – 32. Odpovede podľa kľúča NIVaM k testu 23 1403 (Maturita 2023, marcový termín).
// lenient: kľúč hovorí „prihliadať na vecnú správnosť odpovede, uznať aj odpoveď s pravopisnými či gramatickými chybami“.

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart1: QuestionData[] = [
  // ---------------- Ukážka 1 – Hevier
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 1?',
    options: [
      { key: 'A', text: 'Ako spisovateľ prežíval Hevier kedysi tvorivú krízu.' },
      { key: 'B', text: 'Hevier sa od útleho detstva túžil stať výtvarníkom.' },
      { key: 'C', text: 'Hevierove aktivity zahŕňajú intenzívnu pedagogickú činnosť.' },
      { key: 'D', text: 'Viaceré Hevierove knižky zostávajú aktuálne.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Všimni si druhú otázku pýtajúceho sa (autorovho syna) o starších detských tituloch a Hevierovu odpoveď na ňu.',
    solutionSteps: [
      {
        title: 'Doklad v texte',
        text: 'Pýtajúci sa (autorov syn) pripomína, že v novom vydaní (reedícii) vyšli viaceré Hevierove staršie detské tituly (//Básnička ti pomôže//, //Hovorníček//, //Heviho diktátor//), a autor dodáva: „Ak je moja staršia knižka použiteľná aj do dnešných čias, som, prirodzene, rád.“ Jeho knižky sú teda stále živé a aktuálne.'
      },
      {
        title: 'Prečo sú ostatné možnosti nesprávne',
        text: 'A – o tvorivej kríze text nehovorí; pýtajúci sa (autorov syn), naopak, zdôrazňuje, že zdanie, akoby Hevier prestal písať, klame („Opak je však paradoxne pravdou…“).\nB – výtvarno síce silno vnímal od malička (rovnako ako hudbu či pohyb), no maľovať začal až pred desiatimi rokmi; o detskej túžbe stať sa výtvarníkom sa v ukážke nepíše.\nC – Hevier spomína, že učí iba „príležitostne“, nie intenzívne (intenzívne sa venuje maľovaniu).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_1',
    questionText: 'Čo má na mysli Daniel Hevier pod vyjadrením //ponorené knižky//?',
    options: [
      { key: 'A', text: 'Diela čakajúce na opätovné vydanie.' },
      { key: 'B', text: 'Diela odsúdené na nedokončenie.' },
      { key: 'C', text: 'Diela vyžadujúce čas na dotvorenie.' },
      { key: 'D', text: 'Diela neurčené pre širokú verejnosť.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si prvé tri vety Hevierovej prvej odpovede. K čomu v nich prirovnáva proces písania?',
    solutionSteps: [
      {
        title: 'Obraz ponornej riečky',
        text: 'Hevier vysvetľuje: „Niekedy je písanie ponorná riečka – text sa vynorí až po dlhom plynutí v skrytosti. Mám niekoľko takých knižiek, ktoré sú doteraz ponorené. Ale píšu sa.“ Ponorené knižky sú teda rozpísané, vznikajúce texty, ktoré potrebujú čas, kým dozrejú a dokončia sa.'
      },
      {
        title: 'Vylúčenie ostatných možností',
        text: 'A – na opätovné vydanie (reedíciu) sa vzťahuje až druhá časť rozhovoru o hotových starších knihách.\nB – autor výslovne hovorí „Ale píšu sa“, takže nie sú odsúdené na nedokončenie.\nD – „v skrytosti“ znamená, že zatiaľ vznikajú v autorovom vnútri a v rukopise, nie že by nemali vyjsť pre verejnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktorá charakteristika vystihuje jazykový štýl ukážky 1?',
    options: [
      { key: 'A', text: 'Je to štýl verejného styku a jeho forma je iba písomná.' },
      { key: 'B', text: 'Je to štýl súkromného styku a jeho forma je iba ústna.' },
      { key: 'C', text: 'Je to štýl súkromného styku a jeho forma je predovšetkým písomná.' },
      { key: 'D', text: 'Je to štýl verejného styku a jeho forma je písomná alebo ústna.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa na zdroj pod ukážkou (časopis Knižná revue). Ide o súkromnú debatu doma, alebo o novinársky text pre verejnosť – a v akých médiách sa tento štýl vyskytuje?',
    solutionSteps: [
      {
        title: 'Určenie jazykového štýlu',
        text: 'Ukážka 1 je novinársky rozhovor uverejnený v literárnom časopise //Knižná revue//, patrí teda do **publicistického štýlu**. Hoci sa s autorom rozpráva jeho syn, rozhovor je určený čitateľom – ide o štýl **verejného styku** (jediným štýlom súkromného styku je hovorový štýl).'
      },
      {
        title: 'Forma publicistického štýlu',
        text: 'Publicistický štýl sa uplatňuje v tlači a na internete (**písomná forma**), ale rovnako aj v rozhlase a televízii (**ústna forma**). Možnosť A je preto nesprávna (predovšetkým písomnú formu má administratívny štýl) a možnosti B, C nesprávne uvádzajú súkromný styk.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti dochádza k spodobovaniu/znelostnej asimilácii?',
    options: [
      { key: 'A', text: '//iba kupovať farby//' },
      { key: 'B', text: '//spôsobiť si „maliarsky lakeť“//' },
      { key: 'C', text: '//hudbe, intenzívne maľujem//' },
      { key: 'D', text: '//nemohol pohnúť rukou//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Spodobovanie nastáva, keď sa pri výslovnosti stretnú dve spoluhlásky s rôznou znelosťou (vnútri slova alebo na hranici slov bez pauzy). Skontroluj najmä poslednú hlásku slova pred ďalším slovom.',
    solutionSteps: [
      {
        title: 'Pravidlo spodobovania na hranici slov',
        text: 'Ak sa slovo končí **neznelou** spoluhláskou (**p, t, ť, k, c, č, s, š, ch, f**) a bez pauzy za ním nasleduje slovo začínajúce sa znelou párovou spoluhláskou (vrátane **v** pred samohláskou, zvučnou či znelou spoluhláskou), nepárovou zvučnou spoluhláskou (**m, n, ň, l, ĺ, ľ, r, ŕ, j**) alebo samohláskou, neznelá spoluhláska sa vo výslovnosti zmení na svoj znelý pár.'
      },
      {
        title: 'Kontrola možností',
        text: 'D – v spojení //pohnú**ť r**ukou// sa neznelé **ť** stretáva so zvučným **r**, preto sa spodobuje na znelé **ď**: vyslovujeme **[pohnúď rukou]**.\nA – v spojení //kupova**ť f**arby// sú **ť** aj **f** neznelé, nič sa nemení.\nB – v spojení //spôsobi**ť s**i// sú **ť** aj **s** neznelé; slovo //lakeť// sa končí neznelým **ť**, ktoré ostáva neznelé aj pred pauzou.\nC – v slove //hu**db**e// sú **d** aj **b** znelé a v slove //intenzí**vn**e// stojí po znelom **v** (vyslovovanom ako obojperné [u̯]) zvučné **n**, preto k znelostnej asimilácii nedochádza.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré slovo z ukážky 1 obsahuje samohláskovú skupinu?',
    options: [
      { key: 'A', text: '//dizertáciu//' },
      { key: 'B', text: '//intenzívnejšie//' },
      { key: 'C', text: '//viac//' },
      { key: 'D', text: '//pomôže//' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Rozlíš dvojhlásku (spojenie dvoch samohláskových prvkov v jednej slabike: ia, ie, iu, ô) od samohláskovej skupiny (dve susedné samohlásky patriace do dvoch rôznych slabík – v prevzatých slovách alebo na rozhraní predpony a koreňa).',
    solutionSteps: [
      {
        title: 'Samohlásková skupina v cudzích slovách',
        text: 'V cudzích podstatných menách zakončených na //-ia// (//dizertácia, biológia, reakcia//) patria samohlásky na konci slova do dvoch samostatných slabík: **di-zer-tá-ci-a**, v akuzatíve **di-zer-tá-ci-u** (vyslovujeme s vkladným //j// ako //[dizertáciju]//). Spojenie **i + u** tu teda nie je dvojhláska, ale **samohlásková skupina**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – v slove //intenzívnejš**ie**// je domáca dvojhláska **ie** (jedna slabika //-šie//).\nC – v slove //v**ia**c// je dvojhláska **ia** (jednoslabičné slovo).\nD – v slove //pom**ô**že// je dvojhláska **ô** //[uo]//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíšte z otázok pre Daniela Heviera neplnovýznamové fázové sloveso.',
    placeholder: 'Vypíš sloveso',
    correctAnswerDisplay: 'začal',
    acceptedAnswers: ['začal', 'začať', 'si začal', 'začal si'],
    commonMistakes: [
      {
        pattern: 'presta(l|[ťt])',
        hint: 'Sloveso „prestal“ je síce fázové, no nachádza sa v Hevierovej odpovedi. Zadanie žiada vypísať ho z otázok pre Daniela Heviera (tučné odseky).'
      },
      {
        pattern: 'maľovať',
        hint: 'Sloveso „maľovať“ je plnovýznamové. Vypíš iba samotné neplnovýznamové fázové sloveso, ktoré pri ňom vyjadruje začiatok deja.'
      }
    ],
    hint: 'Fázové slovesá vyjadrujú začiatok, priebeh alebo ukončenie deja a v prísudku sa spájajú s neurčitkom iného slovesa. Hľadaj ho výlučne v tučných otázkach pýtajúceho sa.',
    solutionSteps: [
      {
        title: 'Čo je fázové sloveso',
        text: 'Neplnovýznamové fázové slovesá (//začať, začínať, zostať, ostať, prestať, prestávať//) samy osebe nepomenúvajú konkrétny dej, len jeho fázu (začiatok, trvanie, ukončenie), a v prísudku stoja s neurčitkom plnovýznamového slovesa.'
      },
      {
        title: 'Nájdenie v otázkach a hodnotenie podľa kľúča',
        text: 'V tretej tučnej otázke čítame: „Pre teba bol veľký zlom v živote, keď **si začal** maľovať.“ Fázovým slovesom v spojení //si začal maľovať// je **začal** (neurčitok **začať**).\nKľúč NIVaM uznáva tvary //začať//, //začal//, //si začal// aj //začal si// vypísané pravopisne správne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: začal (začať / si začal).'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíšte z odpovedí Daniela Heviera termín označujúci všetky druhy písaných a tlačených textov.',
    placeholder: 'Vypíš termín z ukážky',
    correctAnswerDisplay: 'literatúra',
    acceptedAnswers: ['literatúra'],
    commonMistakes: [
      {
        pattern: '^monografi[ae]$',
        hint: 'Monografia je len jeden konkrétny vedecký žáner (kniha o jednej téme či osobnosti). Hľadaj nadradený pojem v prvej Hevierovej odpovedi.'
      },
      {
        pattern: 'kni[žz]k[ay]',
        hint: 'Slovo „knižka“ nie je odborný termín pre všetky druhy písaných a tlačených textov. Pozri sa do prvej odpovede k vete o autorových živnostiach.'
      }
    ],
    hint: 'Spomeň si na najširšie vymedzenie ústredného pojmu z úvodných hodín predmetu, ktorý zahŕňa všetky písané a tlačené texty, nielen umelecké. Termín nájdeš v prvej Hevierovej odpovedi.',
    solutionSteps: [
      {
        title: 'Širší význam pojmu literatúra',
        text: 'V literárnej vede rozlišujeme užší význam pojmu **literatúra** (iba umelecké texty – krásna literatúra, beletria) a širší význam, v ktorom termín **literatúra** označuje súhrn všetkých existujúcich písaných a tlačených textov (umeleckých, odborných, publicistických aj administratívnych).'
      },
      {
        title: 'Doklad v ukážke a pravopis',
        text: 'V prvej odpovedi Daniel Hevier hovorí: „A okrem toho: **literatúra** je iba jedna z mojich živností.“ Podľa kľúča NIVaM musí byť slovo vypísané pravopisne správne (s dlhým //ú//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: literatúra.'
  },
  {
    id: 8,
    code: '08',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_1',
    questionText: 'Napíšte cudzí názov žánru ukážky 1.',
    placeholder: 'Napíš cudzí názov žánru',
    correctAnswerDisplay: 'interview',
    acceptedAnswers: ['interview', 'interviu', 'intervjú', 'intervju'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^rozhovor$',
        hint: '„Rozhovor“ je domáce pomenovanie. Zadanie žiada cudzí (prevzatý z angličtiny) názov tohto publicistického žánru.'
      },
      {
        pattern: '^dial[óo]g$',
        hint: 'Dialóg je všeobecná forma rozhovoru dvoch osôb, nie cudzí názov konkrétneho novinárskeho žánru z ukážky.'
      }
    ],
    hint: 'Domáci názov tohto novinárskeho žánru (otázky redaktora a odpovede osobnosti) je v samotnom podtitule ukážky: „Rozhovor…“. Ako sa takýto publicistický rozhovor nazýva cudzím slovom z angličtiny?',
    solutionSteps: [
      {
        title: 'Publicistický žáner a kodifikovaný pravopis',
        text: 'Ukážka má formu cielených otázok novinára a odpovedí spovedanej osobnosti s cieľom predstaviť jej tvorbu a názory verejnosti. Cudzí odborný názov tohto dialogického žánru publicistického štýlu je **interview** (výslovnosť //[intervjú]//) – podľa //Pravidiel slovenského pravopisu// a //Krátkeho slovníka slovenského jazyka// (KSSJ 4) ide o jediný kodifikovaný pravopis.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uvádza tvar **interview**, no keďže pri tejto úlohe prihliada na vecnú správnosť a odpúšťa pravopisné chyby, pri vyhodnocovaní sa uznáva aj starší poslovenčený (dnes nekodifikovaný) zápis //interviu// či fonetický prepis //intervjú//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: interview.'
  },

  // ---------------- Ukážka 2 – Rimbaud
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorom verši básne //Spáč v údolí// sa nachádza personifikácia?',
    options: [
      { key: 'A', text: '//kde slnce jagá sa z vrcholu divej hory,//' },
      { key: 'B', text: '//spí v slnku s rukami na svojej tichej hrudi,//' },
      { key: 'C', text: '//spí, bledý, pod mráčkom, tam kde zem trávu tasí,//' },
      { key: 'D', text: '//takýmto úsmevom smejú sa choré deti.//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Personifikácia (zosobnenie) prenáša ľudské konanie alebo vlastnosti na neživú prírodu či veci. V ktorom verši robí neživý prvok niečo typicky ľudské?',
    solutionSteps: [
      {
        title: 'Rozbor správnej možnosti',
        text: 'Vo verši C „spí, bledý, pod mráčkom, tam kde **zem trávu tasí**“ je sloveso //tasiť//, ktoré vo vlastnom význame znamená vyťahovať zbraň (meč, šabľu) z pošvy. Táto ľudská činnosť sa prenáša na neživú zem, ktorá akoby zo seba vyťahovala ostré steblá trávy – ide o **personifikáciu**.'
      },
      {
        title: 'Prečo nie ostatné verše',
        text: 'A – //slnce jagá sa// (leskne sa) pomenúva prirodzený optický jav, //divá hora// je epiteton.\nB – spí vojačik (človek) a //tichá hruď// naznačuje, že už nedýcha.\nD – smejú sa deti (ľudia), takže nejde o prenášanie ľudských vlastností na neživé veci.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorý umelecký prostriedok sa nachádza v poslednej strofe básne //Spáč v údolí//?',
    options: [
      { key: 'A', text: 'zdrobnenina' },
      { key: 'B', text: 'anafora' },
      { key: 'C', text: 'metafora' },
      { key: 'D', text: 'hyperbola' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Sústreď sa iba na posledné tri verše básne. Prever si postupne: je v nich zmenšujúce/nežné slovo (zdrobnenina), rovnaký začiatok veršov (anafora), zveličenie (hyperbola), alebo prenesené pomenovanie (metafora)?',
    solutionSteps: [
      {
        title: 'Posledná (štvrtá) strofa',
        text: 'Vo veršoch „**Vôňa mu k záchvevu nozdry už neprebudí**, / **spí v slnku** s rukami na svojej tichej hrudi, / bok sa mu červenie z dvoch otvorených rán“ sa nachádza **metafora** (prenesené pomenovanie na základe podobnosti: vôňa, ktorá „neprebudí“ nozdry, aj obrazné „spí“ namiesto „leží mŕtvy“).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – zdrobneniny (//vojačik, mráčkom//) sú v 2. strofe, v poslednej strofe žiadna nie je.\nB – anafora je opakovanie rovnakých slov na začiatku za sebou idúcich veršov, tu sa verše začínajú slovami //Vôňa – spí – bok//.\nD – hyperbola (zveličenie) sa v závere nevyskytuje; dve otvorené rany sú triezvym, realistickým konštatovaním smrti.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Čím je slovo //spáč// z názvu ukážky 2 na základe pointy celej básne?',
    options: [
      { key: 'A', text: 'eufemizmom' },
      { key: 'B', text: 'metonymiou' },
      { key: 'C', text: 'nonsensom' },
      { key: 'D', text: 'podobenstvom' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Posledný verš básne prezradí, čo sa vojačikovi v skutočnosti stalo. Ako voláme jemnejšie, miernejšie slovo použité namiesto drsnej alebo smutnej skutočnosti (napr. „odišiel navždy“ namiesto „zomrel“)?',
    solutionSteps: [
      {
        title: 'Pointa básne a eufemizmus',
        text: 'Celú báseň sa zdá, že mladý vojak v prírode iba oddychuje a spí, no záverečný verš („bok sa mu červenie z dvoch otvorených rán“) odhalí šokujúcu pointu: vojačik je zastrelený, **mŕtvy**. Nazvať mŕtveho človeka jemnejším slovom //spáč// (podobne ako //usnúť naveky//) je **eufemizmus** – zjemňujúce pomenovanie nepríjemnej či krutej skutočnosti.'
      },
      {
        title: 'Vysvetlenie ostatných pojmov',
        text: 'B – metonymia prenáša pomenovanie na základe vecnej súvislosti (napr. //čítať Kukučína//); spánok a smrť však spája vonkajšia podobnosť a snaha zjemniť krutosť smrti.\nC – nonsens je zámerný nezmysel využívaný v humornej literatúre.\nD – podobenstvo (parabola) je celý rozprávací príbeh s mravným ponaučením, nie jedno slovo.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Čo platí pre formu básne //Spáč v údolí//?',
    options: [
      { key: 'A', text: 'Pravidelné striedanie dlhých a krátkych slabík.' },
      { key: 'B', text: 'Stabilný počet prízvučných slabík vo verši.' },
      { key: 'C', text: 'Opakovanie rovnakých slov a slovných spojení.' },
      { key: 'D', text: 'Využitie veršov s dvoma rôznymi počtami slabík.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Spočítaj slabiky v prvých štyroch veršoch (nezabudni, že dvojhlásky ia, ie, iu, ô tvoria jednu slabiku a r, l medzi spoluhláskami sú slabikotvorné). Aké čísla ti vyjdú?',
    solutionSteps: [
      {
        title: 'Počet slabík vo veršoch',
        text: 'Prepočítajme prvú strofu:\n1. //Hľa, die-ra ze-le-ne, kam sa spev rie-ky no-rí// = **13 slabík**\n2. //bláz-ni-vo roz-šan-tiac zdrap strieb-ra na trá-ve// = **12 slabík**\n3. //kde sln-ce ja-gá sa z vr-cho-lu di-vej ho-ry// = **13 slabík** (slabikotvorné //l// v //sln-ce// a //r// vo //vr-cho-lu//)\n4. //hľa, ma-lé ú-do-lie v ky-pia-cej pá-ľa-ve// = **12 slabík**\nRovnako v celej básni majú všetky verše buď **13**, alebo **12 slabík** – využívajú sa teda verše s dvoma rôznymi počtami slabík.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – pravidelné striedanie dlhých a krátkych slabík je znakom časomerného veršového systému (antika, Ján Kollár), nie modernej poézie.\nB – stabilný počet len prízvučných slabík pri premenlivom počte neprízvučných je znakom tónického verša.\nC – v básni sa síce zopakuje slovo //hľa// či //spí//, ale neopakujú sa celé slovné spojenia.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 13,
    code: '13',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_2',
    questionText: 'Ktorý z uvedených protikladov __nenájdeme__ v básni //Spáč v údolí//?',
    options: [
      { key: 'A', text: 'smiech – plač' },
      { key: 'B', text: 'život – smrť' },
      { key: 'C', text: 'teplo – chlad' },
      { key: 'D', text: 'zvuk – ticho' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozor na podčiarknuté slovo „nenájdeme“. Ku každej dvojici si v texte skús nájsť obidva póly protikladu – pri jednej z nich druhý člen v básni vôbec nie je.',
    solutionSteps: [
      {
        title: 'Kontrola protikladov v texte básne',
        text: 'B (**život – smrť**): živá, kypiaca príroda okolo vojačika oproti jeho smrti z dvoch otvorených rán.\nC (**teplo – chlad**): „v kypiacej páľave“, „Príroda, zahrej ho“, „spí v slnku“ oproti „to už chlad ide naň“.\nD (**zvuk – ticho**): „spev rieky“ oproti „na svojej tichej hrudi“.'
      },
      {
        title: 'Chýbajúci protiklad',
        text: 'V 3. strofe síce nájdeme **smiech** („tvár mu smiechom svieti, / takýmto úsmevom smejú sa choré deti“), no motív **plaču** sa v celej básni vôbec nevyskytuje. Protiklad //smiech – plač// teda v ukážke nenájdeme.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Pomenujte žánrovú (strofickú) formu básne //Spáč v údolí//.',
    placeholder: 'Napíš názov formy',
    correctAnswerDisplay: 'sonet',
    acceptedAnswers: ['sonet', 'znelka'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(balada|[óo]da|el[ée]gia|[žz]alm)$',
        hint: 'Spočítaj strofy a verše v každej strofe: 4 + 4 + 3 + 3 = 14 veršov. Táto presná 14-veršová strofická forma má svoj ustálený názov.'
      }
    ],
    hint: 'Spočítaj verše v jednotlivých strofách ukážky 2. Ako sa volá táto známa strofická forma s pointou v závere?',
    solutionSteps: [
      {
        title: 'Znaky strofickej formy',
        text: 'Báseň //Spáč v údolí// tvorí presne **14 veršov** usporiadaných do štyroch strôf: dve štvorveršia (**kvartetá**, 4 + 4) a dve trojveršia (**tercetá**, 3 + 3) s výraznou myšlienkovou pointou v záverečnom verši. Takáto lyrická žánrová a strofická forma sa nazýva **sonet** (domáci názov **znelka**).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva oba termíny – **sonet** aj **znelka** (prihliada sa na vecnú správnosť odpovede).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: sonet (znelka).'
  },
  {
    id: 15,
    code: '15',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Jean Arthur Rimbaud bol predstaviteľom francúzskej literárnej moderny. Napíšte meno a priezvisko, pod ktorým je známy hlavný predstaviteľ slovenskej literárnej moderny.',
    placeholder: 'Napíš autora',
    correctAnswerDisplay: 'Ivan Krasko',
    acceptedAnswers: ['Ivan Krasko', 'Krasko', 'Ján Botto', 'Botto', 'Ing. Ján Botto', 'Janko Jesenský', 'Vladimír Roy'],
    lenient: true,
    footnote: 'Poznámka: NIVaM túto úlohu v roku 2023 dodatočne anuloval (na maturite získal 1 bod každý žiak), pretože Ivan Krasko je pseudonym (vlastným menom Ján Botto), nie vlastné meno a priezvisko.',
    hint: 'Spomeň si na autora básnických zbierok Nox et solitudo (Noc a samota) a Verše zo začiatku 20. storočia, ktorý tvoril pod literárnym pseudonymom.',
    solutionSteps: [
      {
        title: 'Hlavný predstaviteľ slovenskej literárnej moderny',
        text: 'Ústrednou osobnosťou **slovenskej literárnej moderny** (začiatok 20. storočia, symbolizmus a impresionizmus) je básnik známy pod umeleckým menom **Ivan Krasko** (autor zbierok //Nox et solitudo// a //Verše//). Vlastným občianskym menom sa volal **Ján Botto** (povolaním chemický inžinier) – pseudonym Ivan Krasko mu vybral Svetozár Hurban Vajanský (podľa susednej obce Kraskovo), aby si ho čitatelia nemýlili s romantickým básnikom Jánom Bottom.'
      },
      {
        title: 'Prečo bola úloha anulovaná',
        text: 'Zadanie žiadalo „meno a priezvisko, pod ktorým je známy“, lenže //Ivan Krasko// je literárny pseudonym (nie vlastné meno a priezvisko) a pod vlastným menom //Ján Botto// zas verejnosť pozná predovšetkým štúrovského autora //Smrti Jánošíkovej//. Validačná komisia NIVaM preto položku anulovala a pridelila 1 bod všetkým maturantom; v precvičovaní uznávame obe mená.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: Ivan Krasko (vlastným menom Ján Botto).'
  },
  {
    id: 16,
    code: '16',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_2',
    questionText: 'Doplňte jednoslovný literárnovedný termín do nasledujúcej vety.',
    fillSentenceHtml: 'Ukážku 2 z hľadiska literárnych druhov zaraďujeme do {{blank}}.',
    placeholder: 'doplň literárny druh',
    correctAnswerDisplay: 'lyriky',
    acceptedAnswers: [
      'lyriky',
      'lyrika',
      'do lyriky',
      'zaraďujeme do lyriky',
      'Ukážku 2 z hľadiska literárnych druhov zaraďujeme do lyriky'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'po[ée]zi[ae]',
        hint: 'Pozor na častú zámenu: „poézia“ (viazaná/veršovaná reč) a „próza“ sú literárne formy, nie literárne druhy. Tri literárne druhy sú lyrika, epika a dráma.'
      },
      {
        pattern: 'epik[ay]|dr[áa]m[ay]',
        hint: 'Ukážka 2 nemá dejovú zápletku rozprávania (epika) ani divadelné repliky (dráma) – vyjadruje náladu, obraz a postoj lyrického subjektu.'
      }
    ],
    hint: 'Nepopleť si literárnu formu (poézia, próza) s troma základnými literárnymi druhmi! Ktorý z troch literárnych druhov nemá súvislý príbeh, ale zachytáva obrazy, nálady a pocity?',
    solutionSteps: [
      {
        title: 'Literárne druhy verzus literárne formy',
        text: 'V teórii literatúry rozlišujeme tri základné **literárne druhy**: **lyriku** (vyjadruje pocity, nálady, dojmy a úvahy, je nedejová), **epiku** (má dej, postavy a rozprávača) a **drámu** (je určená pre javisko, stojí na dialógoch). //Poézia// a //próza// nie sú druhy, ale formy reči.'
      },
      {
        title: 'Zaradenie ukážky 2 a hodnotenie kľúča',
        text: 'Rimbaudov sonet //Spáč v údolí// vykresľuje prírodný a protivojnový obraz s citovým postojom lyrického subjektu – patrí teda do **lyriky**.\nKľúč NIVaM uznáva genitívny tvar zapojený do vety (**lyriky**) aj základný tvar (**lyrika**) s prihliadnutím na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: lyriky (lyrika).'
  },

  // ---------------- Ukážka 3 – Z webovej poradne
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktorá možnosť môže byť ďalším príkladom javu, o ktorom je reč v druhom odseku ukážky 3?',
    options: [
      { key: 'A', text: 'hmatový – hmatateľný' },
      { key: 'B', text: 'sobotný – sobotňajší' },
      { key: 'C', text: 'očný – okatý' },
      { key: 'D', text: 'horký – horší' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prvá veta druhého odseku presne pomenúva jav: „variantnosť synonymných prídavných mien s odlišnými príponami“. V ktorej dvojici majú obe prídavné mená rovnaký význam?',
    solutionSteps: [
      {
        title: 'Čo opisuje druhý odsek',
        text: 'Druhý odsek hovorí o dvojiciach prídavných mien utvorených od rovnakého základu rôznymi príponami, ktoré sú **synonymné** – majú rovnaký význam (napr. //krátkovlnný – krátkovlnový//). Tomu presne zodpovedá dvojica **sobotný – sobotňajší** (obe slová sú od podstatného mena //sobota// a v spojení //sobotný / sobotňajší večer// znamenajú to isté).'
      },
      {
        title: 'Prečo ostatné dvojice nie sú synonymá',
        text: 'A – //hmatový// (týkajúci sa hmatu, napr. //hmatový vnem//) a //hmatateľný// (zreteľný, skutočný, napr. //hmatateľný dôkaz//) majú odlišný význam.\nC – //očný// (týkajúci sa oka: //očný lekár//) a //okatý// (majúci veľké oči; nápadný: //okatá lož//) majú takisto iný význam.\nD – //horký// (majúci horkú chuť) a //horší// (2. stupeň od //zlý//) sú úplne odlišné slová.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktorá charakteristika o výkladovej časti ukážky 3 __neplatí__?',
    options: [
      { key: 'A', text: 'Text je adresovaný širokej verejnosti.' },
      { key: 'B', text: 'Text obsahuje aj domáce odborné názvy.' },
      { key: 'C', text: 'Autor polemizuje o nových poznatkoch z jazykovedy.' },
      { key: 'D', text: 'Autor uvádza fakty a dôkazy z odbornej problematiky.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor na podčiarknuté slovo „neplatí“. Over si v texte všetky štyri tvrdenia: komu je jazyková poradňa určená, či obsahuje domáce odborné názvy a konkrétne doklady zo slovníkov a čo presne znamená sloveso „polemizovať“.',
    solutionSteps: [
      {
        title: 'Čo pre ukážku platí (A, B, D)',
        text: 'A – webová jazyková poradňa a časopis //Kultúra slova// sú určené bežným používateľom jazyka, teda širokej verejnosti (populárno-náučný výklad).\nB – text využíva aj domáce odborné termíny: //prídavné meno, zložené prídavné mená, prípona//.\nD – autor argumentuje konkrétnymi faktmi: uvádza odkazy na slovníky (údaje zo slovníkov) z rokov 1959, 1987, 1989, 1997 a doklady z odborných textov.'
      },
      {
        title: 'Čo pre ukážku neplatí (C)',
        text: 'Autor s nikým **nepolemizuje** (nevedie vedecký spor) o nových poznatkoch z jazykovedy – len vecne odpovedá na otázku čitateľa a objasňuje dávno známy jav variantnosti prípon v slovenčine.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'V ukážke 3 sa vyskytuje aj',
    options: [
      { key: 'A', text: 'frazeologický výraz.' },
      { key: 'B', text: 'združené pomenovanie.' },
      { key: 'C', text: 'skratkové slovo.' },
      { key: 'D', text: 'značka.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Over si v ukážke presný rozdiel medzi štyrmi pojmami: frazeologizmus je obrazné ustálené spojenie, združené pomenovanie je viacslovný neobrazný názov jedného pojmu, skratkové slovo sa číta a skloňuje ako slovo (na rozdiel od hláskovanej iniciálovej skratky) a značka sa píše bez bodky.',
    solutionSteps: [
      {
        title: 'Združené pomenovania v ukážke',
        text: '**Združené pomenovanie** je ustálené viacslovné (neobrazné) pomenovanie, ktoré označuje jednu vec alebo jeden odborný pojem. V ukážke 3 je ich hneď niekoľko: //prídavné meno//, //kodifikačná príručka//, //regulačný obvod//, //lexikografické dielo// či //odborný text//.'
      },
      {
        title: 'Prečo nie ostatné možnosti (časté chytáky)',
        text: 'A – frazeologický výraz (obrazné ustálené spojenie, napr. //mať niečo za lubom//) sa vo vecnom odbornom texte nenachádza.\nC – **KSSJ** nie je skratkové slovo, ale **iniciálová skratka** (neskloňuje sa a hláskuje sa //[ká-es-es-jé]//; skratkové slovo sa číta a skloňuje ako bežné slovo, napr. //Slovnaft – v Slovnafte//).\nD – v texte sú len ustálené (administratívne) skratky s bodkou (//a pod., napr., r.//), nie značky bez bodky (ako //km, kg, €//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 20,
    code: '20',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré spôsoby obohacovania slovnej zásoby sa spomínajú v ukážke 3?',
    options: [
      { key: 'A', text: 'skladanie a odvodzovanie' },
      { key: 'B', text: 'skladanie a spájanie' },
      { key: 'C', text: 'odvodzovanie a skracovanie' },
      { key: 'D', text: 'odvodzovanie a preberanie' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozor na presné znenie otázky: nepýta sa, aké slová či skratky sa v ukážke vyskytujú, ale ktoré spôsoby tvorenia slov sa v nej priamo spomínajú – všimni si odborné pomenovania druhov prídavných mien a slovotvorných prostriedkov v odpovedi.',
    solutionSteps: [
      {
        title: 'Obohacovanie slovnej zásoby v texte',
        text: '1. Autor priamo spomína **zložené prídavné mená** (//jednorozmerný, dvojrozmerný, krátkovlnný// – spojenie dvoch slovných základov), čo je **skladanie**.\n2. Zároveň rozoberá tvorenie prídavných mien **príponami** (//-ný//, //-ový//), čo je **odvodzovanie**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'Hoci v texte nájdeme skratku //KSSJ// alebo cudzie slovo //chromatografia//, zadanie sa pýta, ktoré spôsoby obohacovania slovnej zásoby sa v ukážke **spomínajú** (o ktorých text hovorí). O spájaní, skracovaní ani preberaní slov z cudzích jazykov sa v texte nehovorí.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 21,
    code: '21',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Ktoré zo zvýraznených slov z ukážky 3 patrí medzi príslovky?',
    options: [
      { key: 'A', text: '//sú tieto prídavné mená logicky nesprávne,// **dokonca** //nezmyselné//' },
      { key: 'B', text: '//a to// **najmä** //v odborných textoch//' },
      { key: 'C', text: '//Neznamená to// **však**//, že podoby//' },
      { key: 'D', text: '//niektoré podoby sa do lexikografických diel dostávali// **postupne**' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Príslovka je plnovýznamový slovný druh, na ktorý sa vieme spýtať otázkou kde? kedy? ako? prečo? (vo vete je príslovkovým určením). Ktoré zo zvýraznených slov odpovedá na príslovkovú otázku spôsobu?',
    solutionSteps: [
      {
        title: 'Určenie príslovky',
        text: 'Vo vete D sa pýtame slovesom: //dostávali sa ako?// → **postupne**. Slovo //postupne// je utvorené od prídavného mena //postupný//, pomenúva okolnosť (spôsob) deja a vo vete je príslovkovým určením spôsobu – ide o **príslovku**.'
      },
      {
        title: 'Slovné druhy v ostatných možnostiach',
        text: 'A – **dokonca** je vytyčovacia (zdôrazňovacia) **častica** (stupňuje tvrdenie, nie je vetným členom).\nB – **najmä** je vytyčovacia **častica** (vyzdvihuje výraz //v odborných textoch//).\nC – **však** je odporovacia priraďovacia **spojka** (má význam //ale//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 22,
    code: '22',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Koľko viet obsahuje prvé súvetie ukážky 3?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '2',
    acceptedAnswers: [
      '2',
      'dve',
      '2 vety',
      'dve vety',
      '2 jednoduché vety',
      'dve jednoduché vety',
      '3',
      'tri',
      '3 vety',
      'tri vety',
      '3 jednoduché vety',
      'tri jednoduché vety'
    ],
    lenient: true,
    hint: 'Prečítaj si prvé súvetie ukážky až po prvú bodku (pozor, bodka v skratke „a pod.“ vetu nekončí!) a spočítaj v ňom prísudky – určité slovesné tvary.',
    solutionSteps: [
      {
        title: 'Rozbor prvého súvetia podľa prísudkov',
        text: 'Prvé súvetie znie: „Slovo rozmerný **má** iný význam ako jednorozmerný, dvojrozmerný a pod., preto **sú** tieto prídavné mená logicky **nesprávne**, dokonca **nezmyselné**.“\n1. veta: //Slovo rozmerný **má** iný význam ako jednorozmerný, dvojrozmerný a pod.// (slovesný prísudok **má**; porovnanie //ako jednorozmerný…// nemá vlastné sloveso).\n2. veta: //preto **sú** tieto prídavné mená logicky **nesprávne**, dokonca **nezmyselné**// (slovesno-menný prísudok s viacnásobnou mennou časťou **sú nesprávne, nezmyselné**).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Súvetie štandardne obsahuje **2 vety**. Kľúč NIVaM uznáva aj odpoveď **3 vety** (pre prípad, že žiak chápal porovnávaciu konštrukciu //ako [majú] jednorozmerný, dvojrozmerný a pod.// ako neúplnú vetu so zamlčaným prísudkom).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 2 (uznáva sa aj 3).'
  },
  {
    id: 23,
    code: '23',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_3',
    questionText: 'Ku ktorému druhu slovníkov patria spomínané slovníkové diela z druhého odseku ukážky 3?',
    placeholder: 'Napíš druh',
    correctAnswerDisplay: 'výkladové',
    acceptedAnswers: [
      'výkladové',
      'výkladový',
      'výkladové slovníky',
      'výkladový slovník',
      'k výkladovým',
      'k výkladovým slovníkom',
      'ku výkladovým',
      'ku výkladovým slovníkom',
      'k výkladovému',
      'ku výkladovému',
      'k výkladovému slovníku',
      'ku výkladovému slovníku',
      'k výkladovému druhu',
      'výkladovému'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'pravopisn|kodifika[čc]n|prekladov|synonymick|ortografick|etymologick',
        hint: 'Krátky slovník slovenského jazyka je síce aj kodifikačnou príručkou, ale ako druh slovníka nevysvetľuje len pravopis ani neprekladá do cudzieho jazyka – objasňuje významy slov.'
      }
    ],
    hint: 'V druhom odseku sa spomínajú Slovník slovenského jazyka a Krátky slovník slovenského jazyka (KSSJ). Spomeň si na druhy slovníkov v lexikológii – ako sa odborne nazýva slovník, ktorého hlavnou úlohou je objasňovať a vysvetľovať významy slov?',
    solutionSteps: [
      {
        title: 'Druhy slovníkov v slovenčine',
        text: '//Slovník slovenského jazyka// a //Krátky slovník slovenského jazyka// zachytávajú slovnú zásobu národného jazyka, **vykladajú (vysvetľujú) význam jednotlivých slov** a uvádzajú ich štylistickú platnosť aj príklady použitia. Patria preto medzi **výkladové slovníky**.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva odpovede //výkladové//, //k výkladovým (slovníkom)// aj v jednotnom čísle //výkladový (slovník)// s prihliadnutím na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: výkladové (slovníky).'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíšte z prvého odseku ukážky 3 prechodník.',
    placeholder: 'Vypíš tvar slovesa',
    correctAnswerDisplay: 'vychádzajúc',
    acceptedAnswers: ['vychádzajúc'],
    commonMistakes: [
      {
        pattern: '^(maj[úu]ci|vyjadruj[úu]ce|ud[áa]vaj[úu]ci)$',
        hint: 'Pozor na zakončenie! Slová na -úci, -úce, -úca (majúci, vyjadrujúce, udávajúci) sa skloňujú – sú to činné príčastia. Prechodník je neohybný tvar a končí sa len na -úc/-uc alebo -iac/-ac (bez samohlásky na konci).'
      }
    ],
    hint: 'Prechodník je neohybný slovesný tvar zakončený príponou -úc/-uc alebo -iac/-ac (napr. robiac, idúc). Pozorne si prečítaj prvý odsek a nepopleť si ho so sklonnými príčastiami na -úci, -úca, -úce!',
    solutionSteps: [
      {
        title: 'Ako spoznať prechodník',
        text: '**Prechodník** je neurčitý, neohybný slovesný tvar, ktorý vyjadruje sprievodný dej prebiehajúci spravidla súčasne s dejom hlavného slovesa (pri dokonavých slovesách tesne pred ním) a tvorí sa príponou **-úc, -uc, -iac, -ac** (napr. //čítajúc, vidiac//). Tvary so samohláskou na konci (//majúci, vyjadrujúce, udávajúci//) sú ohybné činné príčastia, nie prechodníky.'
      },
      {
        title: 'Nájdenie v texte a pravopis',
        text: 'Hneď za otázkou čitateľa sa v 1. odseku začína odpoveď: „– **Vychádzajúc** z významu prídavného mena //rozmerný//…“ Podľa kľúča musí byť slovo vypísané pravopisne správne (s dlhým //á// a dlhým //ú//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: vychádzajúc.'
  },

  // ---------------- Ukážka 4 – Kukučín
  {
    id: 25,
    code: '25',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_4',
    questionText: 'Ktorá črta __necharakterizuje__ Ondreja v ukážke 4?',
    options: [
      { key: 'A', text: 'zaneprázdnenosť' },
      { key: 'B', text: 'vynaliezavosť' },
      { key: 'C', text: 'zvedavosť' },
      { key: 'D', text: 'družnosť' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor na podčiarknuté slovo „necharakterizuje“. Ku každej zo štyroch vlastností si skús nájsť konkrétny doklad v prvom odseku alebo v rozhovore s valachom – tri črty z Ondrejovho správania jasne vyplývajú a jedna v ukážke nemá oporu.',
    solutionSteps: [
      {
        title: 'Črty, ktoré Ondreja vystihujú (A, B, D)',
        text: 'A (**zaneprázdnenosť**): málo bývaval doma, okrem sviatkov bol stále na vozíku, na železnici alebo na jarmoku.\nB (**vynaliezavosť**): podľa kroja a reči sa hneď vynašiel, kto je odkiaľ, a pohotovo improvizoval aj pri zámene valachovho mena.\nD (**družnosť**): každému sa prihovoril ako starému známemu, usmiaty podával ruku a oslovoval ho „ako vlastného brata“.'
      },
      {
        title: 'Črta, ktorá ho necharakterizuje (C)',
        text: '**Zvedavosť** z ukážky nijako nevyplýva – Ondrej sa o život ľudí v skutočnosti nezaujíma („málokoho poznal dôkladne, alebo podľa mena“), rozhovor vedie len zo zdvorilosti a obchodnej vypočítavosti.'
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
    questionText: 'Ktoré tvrdenie o diele //Keď báčik z Chochoľova umrie…// je pravdivé?',
    options: [
      { key: 'A', text: 'Dielo patrí k realistickým románom.' },
      { key: 'B', text: 'Priezviská hlavných postáv sú obrazné.' },
      { key: 'C', text: 'Postavy sa delia na kladné a záporné.' },
      { key: 'D', text: 'Dielo obsahuje autobiografické prvky.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Over si pri každej možnosti základné fakty o tomto Kukučínovom diele: aký je jeho literárny žáner, aké priezviská majú kupčík Ondrej a schudobnený zeman, ako realizmus zobrazuje ľudské povahy a či ide o autorov vlastný životopis.',
    solutionSteps: [
      {
        title: 'Hovoriace (obrazné) priezviská',
        text: 'Martin Kukučín dal obom hlavným postavám výstižné obrazné priezviská: podnikavý priekupník **Ondrej Tráva** sa všade chytí a prežije ako húževnatá tráva, kým chvastavý zeman **Aduš Domanický z Domaníc** má ironické priezvisko kontrastujúce s tým, že jeho kaštieľ sa rozpadáva a „doma nemá takmer nič“.'
      },
      {
        title: 'Prečo sú ostatné možnosti nepravdivé',
        text: 'A – dielo nie je román, ale humoristicko-satirická realistická **poviedka**.\nC – čierno-biele delenie na čisto kladné a záporné postavy patrí do rozprávok a romantizmu; v realizme majú obe postavy svoje nedostatky a Aduš sa v závere morálne obrodený napraví.\nD – nejde o autobiografické dielo zo života autora.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Do ktorej časti vnútornej kompozície diela patrí ukážka 4?',
    options: [
      { key: 'A', text: 'do úvodu' },
      { key: 'B', text: 'do zápletky' },
      { key: 'C', text: 'do obratu' },
      { key: 'D', text: 'do rozuzlenia' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Zamysli sa nad miestom ukážky v celej poviedke: predstavuje autor hlavnú postavu a jej prostredie, rozbieha sa už obchodný spor s Adušom Domanickým, nastáva v deji zlom, alebo sa príbeh uzatvára?',
    solutionSteps: [
      {
        title: 'Expozícia (úvod) poviedky',
        text: 'Vnútornú kompozíciu epického diela tvorí úvod (expozícia), zápletka (kolízia), vyvrcholenie (kríza), obrat (peripetia) a rozuzlenie (katastrofa). Ukážka 4 predstavuje postavu Ondreja Trávu, jeho povahu a jarmočné prostredie ešte pred stretnutím s Adušom Domanickým – patrí teda **do úvodu** diela.'
      },
      {
        title: 'Kde nasledujú ostatné fázy deja',
        text: 'Zápletkou je až dohoda o kúpe jačmeňa s Adušom na jarmoku (závdavok desať zlatých v krčme), obratom scéna pri rodinných hroboch pod jaseňmi v Domaniciach (ktoré Ondrej žiadal ako náhradu za dlh) a rozuzlením Adušova náprava a splatenie dlhu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 28,
    code: '28',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti sa nachádza slovo majúce homonymný pár?',
    options: [
      { key: 'A', text: 'obdaril menom naslepo' },
      { key: 'B', text: 'chlapa v umastenej košeli' },
      { key: 'C', text: 'deň alebo dva odpočinku' },
      { key: 'D', text: 'čo som vám vlnu predal' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Homonymá sú slová, ktoré rovnako znejú a rovnako sa píšu, ale majú úplne odlišný pôvod a nijako spolu významovo nesúvisia (napr. koruna stromu = viacvýznamové slovo, ale rys šelma / rys výkres = homonymá).',
    solutionSteps: [
      {
        title: 'Homonymum vlna',
        text: 'V možnosti D sa nachádza podstatné meno **vlna** (v tvare //vlnu//), ktoré tvorí učebnicový homonymný pár:\n• **vlna¹** – ovčia srsť a priadza z nej (tú v ukážke predal valach),\n• **vlna²** – čerenie vodnej hladiny alebo fyzikálne vlnenie (morská vlna, zvuková vlna).\nMedzi ovčou srsťou a vodnou vlnou nie je nijaká vnútorná súvislosť – vznikli náhodným zvukovým splynutím dvoch rôznych slov (navyše aj slovo //čo// má homonymný pár: zámeno //čo// a spojka //čo//).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'V možnostiach A a C žiadne slovo nemá homonymný pár. V možnosti B je slovo //košeľa// viacvýznamovým slovom (odev aj ochranný technický obal sú pomenované na základe podobnosti funkcie „obaľovať“), nie homonymom.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 29,
    code: '29',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti sa nachádza veta s neuspokojivou končiacou (stúpavou) melódiou?',
    options: [
      { key: 'A', text: '//Akože sa máš?//' },
      { key: 'B', text: '//Ale ma ešte znáte?//' },
      { key: 'C', text: '//Daj Boh šťastia, Ondrej!//' },
      { key: 'D', text: '//To-to-to – teraz už viem, už viem.//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozor, nie každá otázka má stúpavú melódiu! Hlas v slovenčine na konci stúpa iba v zisťovacej otázke, teda takej, na ktorú sa odpovedá „áno“ alebo „nie“.',
    solutionSteps: [
      {
        title: 'Zlaté pravidlo slovenskej vetnej melódie',
        text: '• **Neuspokojivú končiacu (stúpavú) melódiu** majú **zisťovacie opytovacie vety** – zisťujeme nimi platnosť deja a odpovedáme na ne //áno / nie// (nezačínajú sa opytovacím zámenom ani príslovkou).\n• **Uspokojivú končiacu (klesavú) melódiu** majú oznamovacie, rozkazovacie, želacie vety a aj **dopĺňacie otázky** (tie sa začínajú opytovacím slovom //kto, čo, aký, kde, kedy, ako, prečo//).'
      },
      {
        title: 'Porovnanie možností',
        text: 'B – //„Ale ma ešte znáte?“// je **zisťovacia otázka** (odpoveď: //áno, poznám / nie, nepoznám//), preto v nej hlas na konci **stúpa**.\nA – //„Akože sa máš?“// sa začína opytovacím príslovkovým zámenom //ako(že)// – je to dopĺňacia otázka s **klesavou** melódiou.\nC (želacia/zvolacia veta) a D (oznamovacia veta) majú takisto klesavú melódiu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 30,
    code: '30',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte z prvého odseku ukážky 4 prvé slovo vsuvky.',
    placeholder: 'Vypíš prvé slovo',
    correctAnswerDisplay: 'ako',
    acceptedAnswers: [
      'ako',
      '- ako',
      'ako všetci vychytení ľudia',
      '- ako všetci vychytení ľudia -',
      '- ako všetci vychytení ľudia'
    ],
    commonMistakes: [
      {
        pattern: '^v[šs]etci(\\s|$)',
        hint: 'Našiel si správnu vsuvku medzi pomlčkami, ale pozri sa pozorne hneď za prvú pomlčku – pred slovom „všetci“ stojí ešte jedno krátke slovo.'
      }
    ],
    hint: 'Vsuvka (parentéza) je vsunutá poznámka uprostred vety, ktorá je z oboch strán oddelená čiarkami, zátvorkami alebo pomlčkami. Nájdi takúto vsunutú časť v 1. odseku a vypíš jej prvé slovo.',
    solutionSteps: [
      {
        title: 'Vyhľadanie vsuvky v 1. odseku',
        text: 'V predposlednej vete prvého odseku čítame: „Ale on – **ako** všetci vychytení ľudia – málokoho poznal dôkladne, alebo podľa mena…“ Výraz //ako všetci vychytení ľudia// vložený medzi dve pomlčky je **vsuvka** (parentéza) a jej prvým slovom je **ako**.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva prvé slovo **ako** (aj s pomlčkou **– ako**), prípadne vypísanú celú vsuvku **ako všetci vychytení ľudia** v pravopisne správnom tvare.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: ako.'
  },
  {
    id: 31,
    code: '31',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíšte z ukážky 4 slovo, ktorým sa v nej začína pásmo rozprávača.',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'Prirodzená',
    acceptedAnswers: [
      'Prirodzená',
      'Prirodzená vec',
      'Prirodzená vec, že málo bývaval doma',
      'slovom Prirodzená',
      'slovo Prirodzená',
      'začína sa slovom Prirodzená',
      'pásmo rozprávača sa začína slovom Prirodzená'
    ],
    commonMistakes: [
      {
        pattern: '^po[čc]ul$|^Ondrej$',
        hint: 'Nepopleť si pásmo rozprávača len s uvádzacou vetou za priamou rečou! Pásmo rozprávača tvorí všetok autorský text mimo úvodzoviek – pozri sa, čím sa začína hneď prvý odsek ukážky.'
      },
      {
        pattern: '^Daj$',
        hint: 'Slovo „Daj“ je v úvodzovkách – tým sa začína priama reč postavy (pásmo postáv), nie pásmo rozprávača.'
      }
    ],
    hint: 'Epický text sa delí na pásmo postáv (napr. priama reč v úvodzovkách) a pásmo rozprávača (všetok ostatný rozprávací text mimo úvodzoviek). Kde sa teda pásmo rozprávača v tejto ukážke začína?',
    solutionSteps: [
      {
        title: 'Pásmo rozprávača a pásmo postáv',
        text: 'V epickom diele tvorí **pásmo postáv** reč jednotlivých postáv (v ukážke 4 priama reč v úvodzovkách od druhého odseku) a **pásmo rozprávača** všetok autorský text mimo úvodzoviek. Keďže celý prvý odsek rozpráva rozprávač, pásmo rozprávača sa začína hneď prvým slovom ukážky: **Prirodzená** („Prirodzená vec, že málo bývaval doma.“).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Slovo musí byť vypísané pravopisne správne (s dlhým //á// na konci); kľúč uznáva aj jeho zapojenie do vety.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: Prirodzená.'
  },
  {
    id: 32,
    code: '32',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_4',
    questionText: 'Napíšte gramaticky a pravopisne správny tvar nominatívu plurálu zvýrazneného slova //valach// z ukážky 4.',
    placeholder: 'Napíš tvar v N pl.',
    correctAnswerDisplay: 'valasi',
    acceptedAnswers: ['valasi'],
    commonMistakes: [
      {
        pattern: '^valachy$',
        hint: 'Pozor na životnosť: „valach“ je osoba – životné podstatné meno mužského rodu (vzor chlap), preto má v nominatíve množného čísla mäkké -i a spoluhláska ch sa mení.'
      },
      {
        pattern: '^vala(s|š)y$',
        hint: 'Životné podstatné meno „valach“ sa skloňuje podľa vzoru chlap – v nominatíve množného čísla má príponu s mäkkým -i (valasi), hoci sa ch mení na s.'
      },
      {
        pattern: '^valaši$',
        hint: 'Mäkké -i máš správne, ale pozor na striedanie spoluhlások: pred príponou -i v N pl. sa ch mení na s (podobne ako mních → mnísi, Čech → Česi), nie na š.'
      },
      {
        pattern: '^valachovia$',
        hint: 'Podstatné meno „valach“ netvorí množné číslo príponou -ovia, ale príponou -i (podobne ako mních → mnísi), pri ktorej sa ch zmení na s.'
      }
    ],
    hint: 'Podstatné meno „valach“ pomenúva pastiera oviec – je to životné podstatné meno mužského rodu (vzor chlap). Spomeň si, na akú spoluhlásku sa v nominatíve plurálu mení koncové „ch“ v slovách ako mních alebo Čech.',
    solutionSteps: [
      {
        title: 'Vzor chlap a zmena spoluhlásky ch → s',
        text: 'Podstatné meno **valach** (pastier oviec) je životné podstatné meno mužského rodu, ktoré sa skloňuje podľa vzoru **chlap** – v nominatíve plurálu má základnú príponu **-i** (//chlapi//). Podľa //Pravidiel slovenského pravopisu// sa pri životných podstatných menách mužského rodu pred príponou //-i// menia koncové spoluhlásky **k → c** (//vojak → vojaci//) a **ch → s** (//mních → mnísi//, //Čech → Česi//, //valach → **valasi**//).'
      },
      {
        title: 'Pravopis a hodnotenie podľa kľúča',
        text: 'Jediný gramaticky a pravopisne spisovný tvar nominatívu plurálu je **valasi** (so spoluhláskou //s// a mäkkým //-i//; v akuzatíve plurálu má vzor chlap tvar //valachov//, kým tvar //valachy// je plurálom zvieracieho podstatného mena valach vo význame kôň podľa vzoru dub).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: valasi.'
  }
];
