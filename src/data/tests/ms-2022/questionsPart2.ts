import type { QuestionData } from '../../types';

// Úlohy 33 – 64. Odpovede podľa kľúča NIVaM k testu 20 1403 (Maturita 2022, riadny termín).

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart2: QuestionData[] = [
  // ---------------- Ukážka 5 – Bednár
  {
    id: 33,
    code: '33',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktorú fázu dejovej línie diela //Kolíska// predstavuje ukážka 5?',
    options: [
      { key: 'A', text: 'úvod' },
      { key: 'B', text: 'zauzlenie' },
      { key: 'C', text: 'vyvrcholenie' },
      { key: 'D', text: 'záver' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Čo ukážka robí – zoznamuje nás s prostredím a postavou, alebo už rieši konflikt?',
    solutionSteps: [
      { title: 'Znaky úvodu', text: 'Ukážka predstavuje miesto (lieskovská chalupa na hornom konci dediny), čas (večer), hlavnú postavu (Zita Černeková) a jej domov. Je to úvod (expozícia) novely Kolíska.' },
      { title: 'Náznak konfliktu', text: 'Prenos zo súdu s Majerským len naznačuje budúci konflikt – zauzlenie príde až neskôr.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 34,
    code: '34',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktorá historická udalosť je načrtnutá v ukážke 5?',
    options: [
      { key: 'A', text: 'politické procesy 50. rokov v Československej republike' },
      { key: 'B', text: 'súd s kolaborantmi počas 2. svetovej vojny' },
      { key: 'C', text: 'súd so zbehmi počas Slovenského národného povstania' },
      { key: 'D', text: 'vojnové procesy so sympatizantmi fašizmu' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Z čoho prokurátor obviňuje Majerského? Všimni si slová družstvo, kulacké bunky, kolektívne hospodárenie.',
    solutionSteps: [
      { title: 'Dobové reálie', text: 'Majerského obviňujú z rozvracania družstva, sabotáže, pohŕdania sovietskymi kombajnmi a podpory „kulackých buniek“, ktoré bránia prechodu ku kolektívnemu hospodáreniu. To sú typické obvinenia z politických procesov a kolektivizácie 50. rokov v ČSR.' },
      { title: 'Prečo nie ostatné', text: 'B, C, D sa týkajú vojny a fašizmu – v ukážke nie sú.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 35,
    code: '35',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'V akom vzťahu bol Majerský k Zite v diele //Kolíska//?',
    options: [
      { key: 'A', text: 'Bývalý snúbenec, s ktorým sa ale rozišla.' },
      { key: 'B', text: 'Bývalý milenec, ktorý však už bol ženatý.' },
      { key: 'C', text: 'Jej prvý manžel, ktorý sa schoval v jej dome.' },
      { key: 'D', text: 'Jej známy, ktorý však bol aj nepriateľom štátu.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Úlohu nevyriešiš len z ukážky – vyžaduje znalosť Bednárovej novely Kolíska. Spomeň si na Zitine spomienky na mladosť v Radotíne, kde bol Majerský šafárom na veľkostatku, a nepleť si ho s Janom Ragalom.',
    solutionSteps: [
      { title: 'Znalosť diela', text: 'V Bednárovej novele Kolíska je Majerský Zitin bývalý milenec, ktorý však už bol ženatý. Zita je vydatá za Černeka.' },
      { title: 'Súvislosť s dejom', text: 'Zita počúva súd s mužom, ktorého kedysi milovala, a na povrch vychádzajú spomienky aj vina iných postáv.' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 36,
    code: '36',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktorá postava v diele //Kolíska// bola svedkom v procese s Majerským?',
    options: [
      { key: 'A', text: 'Paul Hals' },
      { key: 'B', text: 'Mišo Černek' },
      { key: 'C', text: 'Jano Ragala' },
      { key: 'D', text: 'Michal Martinec' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Úloha vyžaduje znalosť novely Kolíska. Spomeň si, ktorá z uvedených postáv žije so Zitou v prítomnej dejovej línii v 50. rokoch a má priamy vzťah k politickému procesu s Majerským.',
    solutionSteps: [
      { title: 'Znalosť diela', text: 'V procese s Majerským vystupuje ako svedok Zitin manžel Mišo Černek. Ukážka to nenápadne naznačuje – v ten večer „nebol doma“ a Zita sleduje súd z rádia.' },
      { title: 'Ostatné mená', text: 'Všetky ostatné postavy v novele Kolíska síce tiež vystupujú (Paul Hals – nemecký dôstojník, Jano Ragala – Zitin prvý manžel, Michal Martinec – študent skrývajúci sa v bunkri), ale ako svedok v procese s Majerským vypovedal Mišo Černek.' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 37,
    code: '37',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_5',
    questionText: 'V ktorej možnosti sa nachádza nepriamy predmet z nasledujúcej vety?\n//Dverami jej do teplej kuchyne zavieval príjemný chlad.//',
    options: [
      { key: 'A', text: '//dverami//' },
      { key: 'B', text: '//jej//' },
      { key: 'C', text: '//do kuchyne//' },
      { key: 'D', text: '//chlad//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Priamy predmet stojí v bezpredložkovom akuzatíve; nepriamy predmet je v ostatných nepriamych pádoch (G, D, L, I) alebo v predložkovom akuzatíve (často napr. v datíve – komu? čomu?).',
    solutionSteps: [
      { title: 'Otázky', text: 'Zavieval komu? – jej (datív). Priamy predmet je iba v bezpredložkovom akuzatíve; predmet v ostatných nepriamych pádoch (G, D, L, I) alebo v predložkovom akuzatíve je nepriamy predmet.' },
      { title: 'Ostatné vetné členy', text: 'chlad – podmet (kto? čo? – chlad), dverami – príslovkové určenie miesta (kade?), do kuchyne – príslovkové určenie miesta (kam?).' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 38,
    code: '38',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_5',
    questionText: 'Zmeňte nezhodný prívlastok z nasledujúcej vety na zhodný a napíšte ho.\n//Dvere na kuchyni mala otvorené.//',
    placeholder: 'Napíš zhodný prívlastok',
    correctAnswerDisplay: 'kuchynské',
    acceptedAnswers: [
      'kuchynské',
      'kuchynské dvere',
      'dvere kuchynské',
      'Kuchynské dvere mala otvorené',
      'Kuchynské dvere mala otvorené.',
      'Dvere kuchynské mala otvorené',
      'Dvere kuchynské mala otvorené.'
    ],
    commonMistakes: [
      {
        pattern: 'kuchyňsk',
        hint: 'Pozor na pravopis: pri tvorení prídavného mena príponou -ský sa mäkké ň mení na tvrdé n (kuchyňa → kuchynský, kuchynské).'
      }
    ],
    hint: 'Najprv nájdi podstatné meno s predložkou, ktoré bližšie určuje slovo „dvere“, a utvor z neho prídavné meno v správnom tvare (pozor na pravopis pred príponou -ský/-ské).',
    solutionSteps: [
      { title: 'Premena', text: 'Dvere (aké?) na kuchyni → kuchynské dvere. Prídavné meno kuchynské sa zhoduje s podstatným menom dvere v rode, čísle aj páde – je to zhodný prívlastok.' },
      { title: 'Pravopis', text: 'kuchyňa → kuchynský (pred príponou -ský sa ň mení na n): kuchynské, nie „kuchyňské“.' }
    ],
    solutionConclusion: 'Správna odpoveď: kuchynské.'
  },
  {
    id: 39,
    code: '39',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktorý kompozičný postup využil autor pri spomienkach Zity Černekovej na Majerského v diele //Kolíska//?',
    placeholder: 'Napíš kompozičný postup',
    correctAnswerDisplay: 'retrospektívny',
    acceptedAnswers: [
      'retrospektívny',
      'retrospektívny postup',
      'retrospektívny kompozičný postup',
      'retrospektívna kompozícia',
      'retrospektívnu kompozíciu',
      'spätný',
      'spätný postup',
      'spätný kompozičný postup',
      'spätnú kompozíciu',
      'retrospektíva',
      'retrospektívu',
      'retrospekcia',
      'retrospekciu',
      'retrospektývny'
    ],
    lenient: true,
    hint: 'Spomienky porušujú prirodzenú časovú následnosť a vracajú dej z prítomnosti do minulosti – ide o opak chronologického postupu.',
    solutionSteps: [
      { title: 'Návrat do minulosti', text: 'Zita pri počúvaní rozhlasového prenosu zo súdu spomína na to, čo s Majerským prežila kedysi. Dej sa vracia z prítomnosti do minulosti – ide o retrospektívny (spätný) kompozičný postup.' },
      { title: 'Ako hodnotí kľúč', text: 'Uznáva sa retrospektívny, spätný, retrospektíva aj retrospektívu.' }
    ],
    solutionConclusion: 'Správna odpoveď: retrospektívny.'
  },
  {
    id: 40,
    code: '40',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_5',
    questionText: 'Vypíšte zo **zvýraznenej časti** textu ukážky 5 prístavok.',
    placeholder: 'Vypíš prístavok',
    correctAnswerDisplay: 'jej muž',
    acceptedAnswers: ['jej muž'],
    commonMistakes: [
      {
        pattern: '^mu[zž]$',
        hint: 'Samotné slovo „muž“ nestačí – vypíš celý rozvitý prístavok z vety.'
      },
      {
        pattern: '[cč]ernek',
        hint: 'Meno „Černek“ je nadradené podstatné meno, ktoré prístavok rozvíja – vypíš iba samotný prístavok stojaci za ním medzi čiarkami.'
      }
    ],
    hint: 'Prístavok je menné spojenie (s podstatným menom v tom istom páde), ktoré inak pomenúva tú istú osobu alebo vec, a uprostred vety sa oddeľuje čiarkami z oboch strán.',
    solutionSteps: [
      { title: 'Nájdenie', text: '„…ako Černek, jej muž, spravil z bukového dreva konzolu…“ – spojenie jej muž bližšie určuje meno Černek a je oddelené čiarkami.' },
      { title: 'Zápis', text: 'Spojenie musí byť vypísané pravopisne správne: jej muž.' }
    ],
    solutionConclusion: 'Správna odpoveď: jej muž.'
  },

  // ---------------- Ukážka 6 – Molière
  {
    id: 41,
    code: '41',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktorú ľudskú vlastnosť vyzdvihuje Alcest podľa ukážky 6?',
    options: [
      { key: 'A', text: 'úprimnosť' },
      { key: 'B', text: 'vľúdnosť' },
      { key: 'C', text: 'zdvorilosť' },
      { key: 'D', text: 'prívetivosť' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Čo Alcest odsudzuje? Ak kritizuje faloš a podlízavosť (pochlebovanie), akú vlastnosť si cení?',
    solutionSteps: [
      { title: 'Alcestov postoj', text: 'Alcest nenávidí „faloš podliakov“, ktorí každému rozdávajú „vľúdne vyznania“ a „líškavo“ chvália. Cení si opak – úprimnosť a pravdivosť.' },
      { title: 'Pasca', text: 'Vľúdnosť, zdvorilosť a prívetivosť obhajuje Filint („musí sa k nim milo a prívetivo správať“), Alcest ich v tejto podobe odmieta.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 42,
    code: '42',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Ktorý typ postavy predstavuje hlavná postava v Molièrovej hre //Lakomec//?',
    options: [
      { key: 'A', text: 'autobiografický' },
      { key: 'B', text: 'charakterový' },
      { key: 'C', text: 'idealizovaný' },
      { key: 'D', text: 'sociálny' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Harpagon je stelesnením jednej ľudskej vlastnosti. Ako sa volá taký typ postavy?',
    solutionSteps: [
      { title: 'Harpagon', text: 'Hlavná postava Lakomca, Harpagon, zosobňuje jednu výraznú vlastnosť – lakomstvo. Klasicistická komédia charakterov vytvára takéto charakterové typy (lakomec, mizantrop, pokrytec).' },
      { title: 'Ostatné typy', text: 'Autobiografická postava zobrazuje autora, idealizovaná predstavuje dokonalý, prikrášlený vzor, sociálny typ predstavuje spoločenskú vrstvu.' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 43,
    code: '43',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'Emotívnosť Alcestovho prvého prehovoru v ukážke 6 umocňujú',
    options: [
      { key: 'A', text: 'slangové slová.' },
      { key: 'B', text: 'nárečové slová.' },
      { key: 'C', text: 'expresívne slová.' },
      { key: 'D', text: 'básnické slová.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Nájdi v prehovore slová, ktoré hodnotia ľudí hanlivo (podliak, …). Ako sa takéto citovo zafarbené slová volajú?',
    solutionSteps: [
      { title: 'Citovo zafarbené slová', text: 'podliak, taľafatky, oplan, podkurovať, líškavo, bľabotať, lump, tĺk – to sú expresívne (citovo zafarbené, často hanlivé) slová. Umocňujú Alcestov hnev.' },
      { title: 'Prečo nie ostatné', text: 'Nejde o slang (reč skupiny), nárečie (regionálne slová) ani o básnické slová (poetizmy ako luna, sťa).' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 44,
    code: '44',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorej možnosti sa nachádza neslovesný (slovesno-menný) prísudok?',
    options: [
      { key: 'A', text: '//Úcta si žiada výber.//' },
      { key: 'B', text: '//Medzi priateľov už nechcem rátať vás.//' },
      { key: 'C', text: '//V každom objatí sú klzkí.//' },
      { key: 'D', text: '//Takýto nízky zvyk len odpor vo mne budí.//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Slovesno-menný prísudok tvorí sponové sloveso byť (stať sa) a menná časť – napr. prídavné meno.',
    solutionSteps: [
      { title: 'Sponové sloveso + meno', text: '„V každom objatí sú klzkí.“ – prísudok sú klzkí: spona byť (sú) + prídavné meno klzkí. Je to slovesno-menný prísudok.' },
      { title: 'Ostatné', text: 'A (žiada si), B (nechcem rátať – slovesný zložený s modálnym slovesom), D (budí) – slovesné prísudky.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 45,
    code: '45',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Ak Molière ako autor zaradil svoju hru do repertoára svojho divadla, tak bol zároveň',
    options: [
      { key: 'A', text: 'scenáristom.' },
      { key: 'B', text: 'hercom.' },
      { key: 'C', text: 'režisérom.' },
      { key: 'D', text: 'dramaturgom.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Kto v divadle rozhoduje o tom, ktoré hry sa budú hrať – teda zostavuje repertoár?',
    solutionSteps: [
      { title: 'Funkcia dramaturga', text: 'Dramaturg vyberá hry do repertoára divadla a pripravuje ich text na inscenáciu. Kto hru zaradí do repertoára, plní úlohu dramaturga.' },
      { title: 'Pozor', text: 'Molière bol síce aj herec a riaditeľ súboru, ale úloha sa pýta na funkciu spojenú so zaradením hry do repertoára.' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 46,
    code: '46',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_6',
    questionText: 'Napíšte názov opakovacej figúry uplatnenej v prvom Alcestovom prehovore v ukážke 6.',
    placeholder: 'Napíš názov figúry',
    correctAnswerDisplay: 'anafora',
    acceptedAnswers: [
      'anafora',
      'anaforu',
      'paralelizmus',
      'syntaktický paralelizmus',
      'paralelismus',
      'syntaktický paralelismus'
    ],
    lenient: true,
    hint: 'Pozri sa na začiatky veršov 4 až 7. Ktoré slovo sa opakuje na začiatku?',
    solutionSteps: [
      { title: 'Opakovanie na začiatku veršov', text: '„čo vnucujú sa sľubmi… / čo v každom objatí… / čo z povinnosti trepú… / čo bez výberu trúsia…“ – opakovanie toho istého slova na začiatku veršov je anafora.' },
      { title: 'Ako hodnotí kľúč', text: 'Uznáva sa aj paralelizmus (súbežná stavba veršov).' }
    ],
    solutionConclusion: 'Správna odpoveď: anafora.'
  },
  {
    id: 47,
    code: '47',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'Vypíšte zo slova //takýto// slabiku, na ktorej je hlavný slovný prízvuk.',
    placeholder: 'Vypíš slabiku',
    correctAnswerDisplay: 'ta-',
    acceptedAnswers: ['ta-', 'ta', '„ta“', '"ta"'],
    hint: 'Kde je v slovenčine hlavný (slovný) prízvuk?',
    solutionSteps: [
      { title: 'Pravidlo', text: 'V spisovnej slovenčine je hlavný slovný prízvuk pri samostatnom slove vždy na prvej slabike.' },
      { title: 'Rozdelenie', text: 'ta-ký-to → prízvuk je na prvej slabike ta.' }
    ],
    solutionConclusion: 'Správna odpoveď: ta- (ta).'
  },
  {
    id: 48,
    code: '48',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Vypíšte zo **zvýraznenej časti** v ukážke 6 vymedzovacie zámeno.',
    placeholder: 'Vypíš zámeno',
    correctAnswerDisplay: 'to isté',
    acceptedAnswers: ['to isté'],
    commonMistakes: [
      {
        pattern: '^tak[aá]to$',
        hint: 'Zámeno „takáto“ je ukazovacie, nie vymedzovacie.'
      },
      {
        pattern: '^ist[eé]$',
        hint: 'Vypísal/vypísala si len druhú časť – celé vymedzovacie zámeno vo vete je dvojslovné.'
      }
    ],
    hint: 'Vymedzovacie zámená vyjadrujú totožnosť, odlišnosť, výlučnosť alebo súhrnnosť – napr. sám, samý, iný, každý, všetok, žiaden. Pozor, niektoré vymedzovacie zámená môžu byť aj dvojslovné.',
    solutionSteps: [
      { title: 'Nájdenie', text: '„…keď zajtra bľaboce to isté lumpovi.“ – to isté je vymedzovacie zámeno (zdôrazňuje totožnosť).' },
      { title: 'Pozor', text: 'Takáto (v spojení takáto podlá pocta) je ukazovacie zámeno, nie vymedzovacie.' }
    ],
    solutionConclusion: 'Správna odpoveď: to isté.'
  },

  // ---------------- Ukážka 7 – Pišťanek
  {
    id: 49,
    code: '49',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Podľa ukážky 7 je Rácz najpravdepodobnejšie',
    options: [
      { key: 'A', text: 'nový direktívny riaditeľ hotela.' },
      { key: 'B', text: 'nenahraditeľný kurič v hoteli.' },
      { key: 'C', text: 'inšpektor kvality hotelových služieb.' },
      { key: 'D', text: 'vrchný čašník v hotelovej reštaurácii.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Kde Rácz predtým jedával a za čo mu hostia musia „znova zaplatiť“?',
    solutionSteps: [
      { title: 'Indície v texte', text: '„Teraz už Rácz nejedáva zvyšky v ústraní tmavej kotolne.“ a „Ak nechcú zmrznúť, musia mu za teplé radiátory znova zaplatiť.“ – Rácz kúri v hotelovej kotolni a od neho závisí teplo.' },
      { title: 'Prečo nie ostatné', text: 'Riaditeľ ani inšpektor by nekúrili a pred hlavným čašníkom sa Rácz len „zmieni“, takže sám vrchným čašníkom nie je.' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 50,
    code: '50',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'V ktorej možnosti sa nachádza jednovýznamové slovo?',
    options: [
      { key: 'A', text: '//zmrznúť//' },
      { key: 'B', text: '//sadnúť//' },
      { key: 'C', text: '//raňajkovať//' },
      { key: 'D', text: '//podávať//' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Skús pri každom slove nájsť aj prenesený význam (napr. pri slovese horieť: drevo horí – horieť túžbou).',
    solutionSteps: [
      { title: 'Jeden význam', text: 'Raňajkovať má jediný význam – jesť raňajky.' },
      { title: 'Viacvýznamové slová', text: 'zmrznúť (premeniť sa na ľad / úsmev zmrzol), sadnúť (posadiť sa / šaty jej sadli), podávať (podať vec / podávať výkon, podávať správu).' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 51,
    code: '51',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'V ktorej možnosti je správne uvedený skloňovací vzor, podľa ktorého sa skloňuje prídavné meno v slovnom spojení //zápasiaceho s diviačou hlavou//?',
    options: [
      { key: 'A', text: 'pekný' },
      { key: 'B', text: 'cudzí' },
      { key: 'C', text: 'páví' },
      { key: 'D', text: 'samostatné skloňovanie' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor na rozdiel medzi slovesným príčastím a prídavným menom! Hľadané prídavné meno je utvorené od názvu zvieraťa (druhové privlastňovacie prídavné meno) – podľa ktorého vzoru sa takéto prídavné mená skloňujú?',
    solutionSteps: [
      { title: 'Prídavné meno diviačí', text: 'Diviačí (hlava – diviačia, s diviačou hlavou) je druhové privlastňovacie prídavné meno utvorené od podstatného mena diviak. Takéto prídavné mená (páví, vtáčí, líščí) sa skloňujú podľa vzoru páví, pri ktorom sa neuplatňuje rytmické krátenie.' },
      { title: 'Pozor', text: 'Zápasiaci je príčastie a skloňuje sa podľa vzoru cudzí – úloha sa však pýta na prídavné meno v spojení „s diviačou hlavou“.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 52,
    code: '52',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'P. Pišťankovi sa podarilo zdynamizovať ukážku 7',
    options: [
      { key: 'A', text: 'hromadením krátkych viet.' },
      { key: 'B', text: 'prevahou oznamovacích viet.' },
      { key: 'C', text: 'prevahou stavových slovies.' },
      { key: 'D', text: 'hromadením zložených súvetí.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prečítaj si niekoľko viet za sebou v úvodnej časti ukážky a všimni si ich stavbu a rozsah.',
    solutionSteps: [
      { title: 'Krátke vety', text: 'Text tvoria prevažne krátke jednoduché vety (a krátke súvetia), ktoré rýchlo striedajú deje: „Sadne si na svoje miesto. Má ho rezervované. Čašníci sa idú pretrhnúť. […] Hostia si na to zvykli. Radi počkajú.“ Takéto hromadenie krátkych viet zrýchľuje tempo – dynamizuje dej/text.' },
      { title: 'Prečo nie ostatné', text: 'Oznamovacie vety samy osebe text nedynamizujú, stavové slovesá ho, naopak, spomaľujú a dlhé súvetia tiež.' }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 53,
    code: '53',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'V ktorej možnosti je uvedený správny zápis priamej reči?',
    options: [
      { key: 'A', text: '„Pán hlavný!“ Požiadal hosť, „prineste nám účet!“' },
      { key: 'B', text: '„Pán hlavný“, požiadal hosť, „prineste nám účet“!' },
      { key: 'C', text: '„Prineste nám!“ požiadal hosť, „účet, pán hlavný!“' },
      { key: 'D', text: '„Pán hlavný,“ požiadal hosť, „prineste nám účet!“' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Všimni si, že uvádzacia veta je vložená doprostred jednej vety priamej reči. Skontroluj polohu interpunkčných znamienok voči úvodzovkám, prvé písmeno uvádzacej vety a zmysluplnosť rozdelenia vety.',
    solutionSteps: [
      { title: 'Pravidlá', text: 'Prvá časť priamej reči sa končí čiarkou vnútri úvodzoviek („Pán hlavný,“), uvádzacia veta sa začína malým písmenom (požiadal hosť), za ňou nasleduje čiarka a druhá časť priamej reči s výkričníkom vnútri úvodzoviek.' },
      { title: 'Chyby v A, B, C', text: 'A – veľké písmeno v uvádzacej vete (navyše po výkričníku by nová veta v priamej reči nemohla pokračovať čiarkou a malým písmenom). B – čiarka a výkričník za úvodzovkami. C – priama reč je nelogicky rozdelená (výkričník uprostred vety).' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 54,
    code: '54',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'Vypíšte z ukážky 7 neohybné zložené slovo navodzujúce predstavu pravidelnosti.',
    placeholder: 'Vypíš slovo',
    correctAnswerDisplay: 'dennodenne',
    acceptedAnswers: ['dennodenne'],
    commonMistakes: [
      {
        pattern: '^denodenne$|^denn?o[- ]denne$',
        hint: 'Príslovka „dennodenne“ sa píše spolu ako jedno slovo a s dvoma n v oboch častiach (denn-o-denne).'
      },
      {
        pattern: '^mimochodom$',
        hint: 'Príslovka „mimochodom“ je síce neohybné zložené slovo, ale nevyjadruje pravidelnosť.'
      }
    ],
    hint: 'Neohybné slová sa neskloňujú ani nečasujú (napr. príslovky) a zložené slovo obsahuje dva slovné základy. Pozri sa do úvodných viet ukážky.',
    solutionSteps: [
      { title: 'Nájdenie', text: '„Dennodenne raňajkuje, obeduje a večeria v hotelovej reštaurácii.“ – dennodenne je príslovka (neohybný slovný druh) utvorená zdvojením slovného základu denn- so spájacou samohláskou -o- (denn-o-denne) a vyjadruje pravidelnosť.' },
      { title: 'Pravopis', text: 'Píše sa spolu: dennodenne.' }
    ],
    solutionConclusion: 'Správna odpoveď: dennodenne.'
  },
  {
    id: 55,
    code: '55',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Napíšte názov obrazného pomenovania/prostriedku z nasledujúcej vety, založeného na vnútornej súvislosti medzi pomenúvanými javmi.\n//Celá reštaurácia sa zhrčila k Ráczovmu stolu.//',
    placeholder: 'Napíš názov',
    correctAnswerDisplay: 'metonymia',
    acceptedAnswers: [
      'metonymia',
      'synekdocha',
      'metonimia',
      'sinekdocha',
      'metonymiu',
      'synekdochu'
    ],
    lenient: true,
    hint: 'Kto sa v skutočnosti zhrčil – budova reštaurácie, alebo ľudia v nej?',
    solutionSteps: [
      { title: 'Prenesenie podľa súvislosti', text: 'Reštaurácia sa nemôže zhrčiť – zhrčili sa ľudia v nej. Pomenovanie sa prenieslo z miesta na ľudí, ktorí v ňom sú, na základe vnútornej (vecnej) súvislosti. To je metonymia.' },
      { title: 'Ako hodnotí kľúč', text: 'Uznáva sa aj synekdocha (druh metonymie). Pozor: metafora je založená na podobnosti, nie na súvislosti.' }
    ],
    solutionConclusion: 'Správna odpoveď: metonymia.'
  },
  {
    id: 56,
    code: '56',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Pomenujte vetný sklad v nasledujúcej vete.\n//Čašníci sa idú pretrhnúť.//',
    placeholder: 'Napíš vetný sklad',
    correctAnswerDisplay: 'prisudzovací (sklad)',
    acceptedAnswers: [
      'prisudzovací',
      'prisudzovací sklad',
      'prísudzovací',
      'prisudzovací vetný sklad',
      'prysudzovací',
      'prysudzovací sklad'
    ],
    lenient: true,
    hint: 'Spojenie „sa idú pretrhnúť“ je frazeologizmus, ktorý vo vete tvorí jeden vetný člen. Urči, ktoré hlavné vetné členy veta obsahuje, a pomenuj sklad medzi nimi.',
    solutionSteps: [
      { title: 'Rozbor', text: 'Podmet: čašníci. Prísudok: „sa idú pretrhnúť“. Iný vetný člen tu nie je.' },
      { title: 'Vetný sklad', text: 'Spojenie podmetu a prísudku tvorí prisudzovací sklad.' }
    ],
    solutionConclusion: 'Správna odpoveď: prisudzovací (sklad).'
  },

  // ---------------- Ukážka 8 – Záujem o Slovensko
  {
    id: 57,
    code: '57',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Čo by bolo ešte potrebné podľa ukážky 8 zlepšiť pre návštevníkov Slovenska?',
    options: [
      { key: 'A', text: 'ubytovacie zariadenia' },
      { key: 'B', text: 'starostlivosť o pamiatky' },
      { key: 'C', text: 'kvalitu jedla v reštauráciách' },
      { key: 'D', text: 'vybavenie parkovísk' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozri sa na nedostatky spomenuté v časti o Banskej Štiavnici a porovnaj ich presné znenie s možnosťami A – D.',
    solutionSteps: [
      { title: 'Doklad', text: '„Zišla by sa aj oprava niektorých pamiatok.“ – lepšia starostlivosť o pamiatky.' },
      { title: 'Pasca', text: 'Parkoviská podľa textu chýbajú úplne – nejde o ich vybavenie. O ubytovaní a jedle sa text v tomto zmysle nezmieňuje.' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 58,
    code: '58',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré tvrdenie je na základe tabuľky z ukážky 8 pravdivé?',
    options: [
      { key: 'A', text: 'V roku 2011 sa oproti predchádzajúcemu roku najmenej zvýšili príjmy Slovenska z cestovného ruchu.' },
      { key: 'B', text: 'V roku 2015 sa oproti predchádzajúcemu roku najviac zvýšili príjmy Slovenska z cestovného ruchu.' },
      { key: 'C', text: 'V roku 2010 utratili Slováci na dovolenky v cudzine viac peňazí ako na pobyty na Slovensku.' },
      { key: 'D', text: 'Rozdiel medzi príjmami Slovenska z cestovného ruchu a výdavkami slovenských dovolenkárov v cudzine sa každoročne zvyšuje.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Vypočítaj, o koľko sa príjmy zvýšili oproti predchádzajúcemu roku, a porovnaj prírastky.',
    solutionSteps: [
      { title: 'Prírastky príjmov', text: '2011: +60,0 · 2012: +44,3 · 2013: +135,5 · 2014: +16,1 · 2015: +189,2 (mil. €). Najväčší prírastok je v roku 2015.' },
      { title: 'Ostatné tvrdenia', text: 'A – najmenší prírastok je v roku 2014. C – tabuľka neuvádza výdavky na pobyty na Slovensku. D – rozdiel kolíše (214,0 → 177,9 → 122,7 → 142,5 → 80,8 → 212,6).' }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 59,
    code: '59',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Podľa ktorých vzorov sa skloňujú zvieracie podstatné mená v tvaroch použitých v nasledujúcej vete?\n//Kuchári či čašníci sú totiž v Tatrách vzácnejší ako kamzíky a svište.//',
    options: [
      { key: 'A', text: 'chlap, chlap' },
      { key: 'B', text: 'chlap, stroj' },
      { key: 'C', text: 'dub, stroj' },
      { key: 'D', text: 'dub, chlap' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Porovnaj v danej vete prípony podstatných mien „kuchári, čašníci“ (-i) so zvieracími menami „kamzíky“ (-y) a „svište“ (-e). Správajú sa tieto zvieracie mená v množnom čísle ako životné, alebo ako neživotné? Potom rozlíš tvrdé a mäkké zakončenie.',
    solutionSteps: [
      { title: 'Kamzíky', text: 'kamzík – kamzíky (tvrdé zakončenie) → v množnom čísle podľa vzoru dub (duby).' },
      { title: 'Svište', text: 'svišť – svište (mäkké zakončenie) → podľa vzoru stroj (stroje).' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 60,
    code: '60',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 8?',
    options: [
      { key: 'A', text: 'Na Slovensku sa skvalitnili služby pre turistov, čo oceňujú najmä dlhoroční domáci zákazníci.' },
      { key: 'B', text: 'Pre vysoký počet zahraničných návštevníkov je nevyhnutné na Slovensku zriadiť ministerstvo cestovného ruchu.' },
      { key: 'C', text: 'Na Slovensku sa nachádzajú turistické oblasti, v ktorých je výrazný nedostatok pracovníkov v službách.' },
      { key: 'D', text: 'Slováci zo strachu pred teroristickými útokmi odkladajú svoje dovolenky na nasledujúci rok.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozorne si prečítaj prvé dve časti ukážky a over každé tvrdenie presne podľa textu – všímaj si najmä časť o problémoch vo Vysokých Tatrách.',
    solutionSteps: [
      { title: 'Doklad', text: '„…trápime sa aj s nedostatkom zamestnancov. Kuchári či čašníci sú totiž v Tatrách vzácnejší ako kamzíky a svište.“ – v Tatrách výrazne chýbajú pracovníci v službách.' },
      { title: 'Prečo nie ostatné', text: 'A – text nespomína „dlhoročných domácich zákazníkov“, uvádza iba, že skvalitnené služby ocenia aj mnohí zahraniční návštevníci. B – text len konštatuje, že ministerstvo chýba. D – text hovorí o poklese záujmu Slovákov o vycestovanie za dovolenkou, nie o tom, že by dovolenky odkladali na nasledujúci rok.' }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 61,
    code: '61',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'V ktorej možnosti majú všetky slovesá z ukážky 8 rovnaký vid?',
    options: [
      { key: 'A', text: '//zlepšujú sa, zišla by sa, rastie//' },
      { key: 'B', text: '//patríme, pramení, skvalitnili//' },
      { key: 'C', text: '//chýba, trápime sa, prišlo//' },
      { key: 'D', text: '//naplánovať, objavili, odhalil//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Dokonavé slovesá vyjadrujú ukončený dej (urobiť), nedokonavé neukončený (robiť). Urči vid pri každom slovese.',
    solutionSteps: [
      { title: 'Možnosť D', text: 'naplánovať, objavili, odhalil – všetky sú dokonavé (ukončený dej).' },
      { title: 'Ostatné možnosti', text: 'A – zišla by sa je dokonavé, ostatné nedokonavé. B – skvalitnili je dokonavé. C – prišlo je dokonavé.' }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 62,
    code: '62',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'Vypíšte z časti //Vysoké Tatry// v ukážke 8 sloveso s neslabičnou predponou.',
    placeholder: 'Vypíš sloveso',
    correctAnswerDisplay: 'vzrástla',
    acceptedAnswers: ['vzrástla'],
    commonMistakes: [
      {
        pattern: '^vzrastla$',
        hint: 'V tvare minulého času slovesa „vzrásť“ je v koreni dlhé á (vzrástla).'
      }
    ],
    hint: 'Neslabičná predpona neobsahuje samohlásku (napr. s-, z-, v-).',
    solutionSteps: [
      { title: 'Nájdenie', text: '„Tento rok vzrástla návštevnosť takmer o 25 %.“ – vz-rástla: predpona vz- nemá samohlásku, je neslabičná.' },
      { title: 'Pravopis', text: 'Slovo musí byť napísané správne: vzrástla (dlhé á).' }
    ],
    solutionConclusion: 'Správna odpoveď: vzrástla.'
  },
  {
    id: 63,
    code: '63',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'Vypíšte z ukážky 8 slovo, ktoré má rovnaký význam ako slovné spojenie //miesto pobytu//.',
    placeholder: 'Vypíš slovo',
    correctAnswerDisplay: 'destináciu',
    acceptedAnswers: ['destináciu', 'destinácia'],
    hint: 'Hľadaj v prvom odseku podstatné meno cudzieho pôvodu, ktorým sa v cestovnom ruchu označuje cieľová krajina alebo oblasť cesty.',
    solutionSteps: [
      { title: 'Synonymum', text: '„…záujem… o Slovensko ako turistickú destináciu…“ – destinácia = cieľové miesto cesty, miesto pobytu.' },
      { title: 'Pravopis', text: 'Uznáva sa destináciu aj destinácia, napísané pravopisne správne.' }
    ],
    solutionConclusion: 'Správna odpoveď: destináciu (destinácia).'
  },
  {
    id: 64,
    code: '64',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'V ktorom roku podľa ukážky 8 dosiahla návštevnosť Slovenska najnižšiu úroveň za sledované obdobie?',
    placeholder: 'Napíš rok',
    correctAnswerDisplay: '2009',
    acceptedAnswers: ['2009', 'v roku 2009', 'rok 2009', 'v r. 2009', 'r. 2009', 'v 2009', 'roku 2009'],
    lenient: true,
    hint: 'Pozri sa na graf návštevnosti na konci ukážky – nájdi najnižšiu časť krivky a pre istotu porovnaj aj presné číselné údaje nad susednými rokmi.',
    solutionSteps: [
      { title: 'Graf', text: 'Najnižšia hodnota je 3 381 354 návštevníkov v roku 2009 (pokles po roku 2008 – 4 082 645).' },
      { title: 'Kontrola', text: 'Hodnota v roku 2010 (3 392 361) je o niečo vyššia, rok 2005 (3 428 083) tiež.' }
    ],
    solutionConclusion: 'Správna odpoveď: 2009.'
  }
];
