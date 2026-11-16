import type { QuestionData } from '../../types';

export const questionsPart2: QuestionData[] = [
  {
    id: 15,
    code: '15',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'Ktorá informácia je na základe ukážky pravdivá?',
    options: [
      { key: 'A', text: 'Murray a Challenger sú prirovnaní k bohom z Olympu.' },
      { key: 'B', text: 'Prejav prvého poobedňajšieho rečníka bol pútavý.' },
      { key: 'C', text: 'Waldron mal povesť vynikajúceho prednášajúceho.' },
      { key: 'D', text: 'Účasť publika na prednáškach bola veľmi nízka.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si začiatok druhého odseku o prírodovedcovi Waldronovi a porovnaj ostatné možnosti s prvým a posledným odsekom.',
    solutionSteps: [
      {
        title: 'Overenie možnosti C v 2. odseku',
        text: 'V texte sa o Waldronovi priamo píše: „Potom vstal prírodovedec Waldron, slávny a populárny prednášateľ. Rozprával priam nadpozemsky.“ Mal teda skutočne povesť vynikajúceho prednášajúceho.'
      },
      {
        title: 'Odhalenie nepresností v A, B, D',
        text: 'A – medzi sebou sa „rujú“ Waldron a Challenger, nie Murray a Challenger.\nB – prednáška sa konala večer („Keď sme večer dorazili...“) a Murrayho prejav nebol pútavý, ľudia ho ledva počuli.\nD – publikum bolo početnejšie: „bolo tam už oveľa viacej obecenstva, ako sme poobede predpokladali“.'
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
    questionText: 'Ktoré tvrdenie o prednášajúcich je na základe ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Profesor Murray bol známy odborník a racionálny rečník.' },
      { key: 'B', text: 'Pána Waldrona vyrušil pri prejave hlas z obecenstva.' },
      { key: 'C', text: 'Profesori sa zhodli vo výskumných otázkach prehistorického sveta.' },
      { key: 'D', text: 'Predseda Združenia zoológov neudržiaval s publikom očný kontakt.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozri sa na poslednú vetu prvého odseku: kam sa pri svojom prejave pozeral profesor Murray (predseda Združenia zoológov)?',
    solutionSteps: [
      {
        title: 'Kontrola správania predsedu Združenia zoológov',
        text: 'V závere 1. odseku autor opisuje profesora Murrayho (predsedu Združenia zoológov): „vyslovil niekoľko závažných postrehov, ktoré adresoval svojej bielej viazanke, pričom nanajvýš smiešne žmurkal na strieborný svietnik“. Nepozeral sa teda do publika.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – o Murrayho prednášaní text ironicky naznačuje, že mu chýba racionálnosť.\nB – hlas profesora Challengera zahrmel „priamo z pódia“, nie z obecenstva.\nC – profesori sa nezhodli, naopak, dostali sa do prudkého sporu o vyhynutí jašterov.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: 'Čítanie s porozumením (štylistika)',
    sharedContextId: 'ukazka_3',
    questionText: 'K čomu je v ukážke prirovnávaný nevhodne prednášaný prejav?',
    options: [
      { key: 'A', text: 'k utesnenej rúre' },
      { key: 'B', text: 'k čírej tekutine v prameni' },
      { key: 'C', text: 'k prečerpávaniu tekutiny cez upchatú rúru' },
      { key: 'D', text: 'k prelievaniu tekutiny z rezervoáru do prameňa' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Vyhľadaj v 1. odseku slová „ako keby ste sa pokúšali...“.',
    solutionSteps: [
      {
        title: 'Vyhľadanie prirovnania v 1. odseku',
        text: 'V texte stojí: „Spôsob, akým predstupujú pred auditórium, má v sebe toľko racionálnosti, ako keby ste sa pokúšali prečerpať zvláštnu tekutinu z prameňa do rezervoáru pomocou upchatej rúry...“'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: 'Komunikácia a pravopis (vykanie)',
    sharedContextId: 'ukazka_3',
    questionText:
      'Profesori sa po prednáške osobne stretli, aby si vysvetlili nedorozumenia. V ktorej možnosti je správne zapísané vykanie?',
    options: [
      { key: 'A', text: 'Profesor Challenger, budete takí láskaví a poviete nám, prečo ste ma prerušili?' },
      { key: 'B', text: 'Odpovedal by ste, prosím, profesor Waldron, na otázky, ktoré som položil?' },
      { key: 'C', text: 'Profesor Murray, ste si istý, že by ste sa nemohol predstaviť ešte raz?' },
      { key: 'D', text: 'Nechceli by ste sa, pán profesor, zapojiť do debaty o existencii jašterov?' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pri vykaní jednej osobe je sloveso vždy v množnom čísle – v minulom čase aj v spojení s „by ste“ sa končí na -li (napr. prišli ste, povedali by ste, nikdy nie povedal by ste). Prídavné mená a zámená po slovese byť (napr. ste milý, nie milí) však pri jednom mužovi zostávajú v jednotnom čísle.',
    solutionSteps: [
      {
        title: 'Pravidlá spisovného vykania jednej osobe (mužovi)',
        text: 'Pri vykaní jednotlivcovi je sloveso vždy v 2. osobe množného čísla – v minulom čase aj v podmieňovacom spôsobe s „by ste“ sa končí na **-li** (**nechceli** by ste, **nemohli** by ste, **odpovedali** by ste; tvary bez -i sú nespisovné bohemizmy). Naopak, prídavné mená a zámená po slovese byť/budete zostávajú v jednotnom čísle (**taký láskavý**, **istý**).'
      },
      {
        title: 'Kontrola všetkých možností',
        text: 'A – nesprávne „budete takí láskaví“ (pri oslovení jedného muža má byť jednotné číslo: **taký láskavý**).\nB – nesprávne „Odpovedal by ste“ (sloveso musí byť v množnom čísle: **Odpovedali** by ste).\nC – „ste si istý“ je síce správne, ale v druhej vete je nesprávne „by ste sa nemohol“ (má byť **nemohli**).\nD – „Nechceli by ste sa, pán profesor, zapojiť...“ – sloveso v množnom čísle s **-li** aj oslovenie oddelené čiarkami sú úplne správne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: 'Tvaroslovie (slovné druhy)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti je zvýraznené slovo iným slovným druhom ako v ostatných troch možnostiach?',
    options: [
      { key: 'A', text: '**Profesorovi** sa počas príhovoru pokazil mikrofón.' },
      { key: 'B', text: '**Profesorov** zmysel pre humor bol všetkým známy.' },
      { key: 'C', text: 'Prírodovedec sa odvážil oponovať **profesorovi**.' },
      { key: 'D', text: 'Študenti so záujmom sledovali hádku **profesorov**.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pýtaj sa na zvýraznené slovo pádovou otázkou: v troch vetách ide o životné podstatné meno v rôznych pádoch (komu? koho?), kým v jednej odpovedá na otázku „čí?“.',
    solutionSteps: [
      {
        title: 'Určenie slovných druhov v jednotlivých vetách',
        text: 'A – Komu sa pokazil mikrofón? Profesorovi → **podstatné meno** (D sg.).\nB – Čí zmysel pre humor? Profesorov → **privlastňovacie prídavné meno** (vzor otcov, N sg. m.).\nC – Komu oponovať? Profesorovi → **podstatné meno** (D sg.).\nD – Hádku koho/čoho? Profesorov → **podstatné meno** (G pl.).'
      }
    ],
    solutionConclusion: 'Iným slovným druhom je zvýraznené slovo v možnosti B.'
  },
  {
    id: 20,
    code: '20',
    type: 'text',
    category: 'Hláskoslovie (slabika)',
    sharedContextId: 'ukazka_3',
    questionText:
      'Vypíš z druhého odseku ukážky slovo, ktoré je možné rozdeliť na slabiky, aj keď obsahuje len jednu samohlásku.',
    placeholder: 'Vypíš slovo z 2. odseku',
    correctAnswerDisplay: 'Dlhý',
    acceptedAnswers: ['Dlhý', 'dlhý'],
    hint: 'V slovenčine môžu slabiku tvoriť okrem samohlások aj slabikotvorné spoluhlásky r, ŕ, l, ĺ. Prečítaj si iba 2. odsek („Skončil a posadil sa...“) a hľadaj takéto dvojslabičné slovo.',
    solutionSteps: [
      {
        title: 'Hľadanie slova so slabikotvornou spoluhláskou v 2. odseku',
        text: 'V poslednej vete 2. odseku čítame: „**Dlhý** výklad zakončil slovami…“'
      },
      {
        title: 'Rozdelenie slova na slabiky',
        text: 'Slovo **Dlhý** má jedinú samohlásku (**ý**), no delí sa na dve slabiky: **dl-hý**. Prvú slabiku tvorí slabikotvorná spoluhláska **l** (dl-).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je Dlhý (alebo dlhý).'
  },
  {
    id: 21,
    code: '21',
    type: 'text',
    category: 'Tvaroslovie a pravopis (prídavné mená)',
    sharedContextId: 'ukazka_3',
    questionText: 'Doplň do nasledujúcej vety pravopisne správne druhové privlastňovacie prídavné meno od slova //jašter//.',
    fillSentenceHtml: '//Medzi vykopávkami sme našli aj množstvo vzácnych// {{blank}} //pozostatkov z prehistorického obdobia.//',
    placeholder: 'Doplň prídavné meno',
    correctAnswerDisplay: 'jašterích',
    acceptedAnswers: ['jašterích', 'Jašterích'],
    commonMistakes: [
      {
        pattern: '^jašter[yý]ch$',
        hint: 'Druhové privlastňovacie prídavné mená podľa vzoru páví majú v príponách vždy mäkké i/í.'
      }
    ],
    hint: 'Druhové privlastňovacie prídavné mená utvorené od názvov zvierat (orlí, včelí, páví, jašterí) sa skloňujú podľa vzoru páví – všetky prípony majú mäkké i/í!',
    solutionSteps: [
      {
        title: 'Utvorenie druhového privlastňovacieho prídavného mena',
        text: 'Od podstatného mena „jašter“ tvoríme druhové privlastňovacie prídavné meno **jašterí** (vzor páví).'
      },
      {
        title: 'Pravopis a pádová prípona vo vete',
        text: 'Vo vete stojí spojenie v genitíve množného čísla: koho/čoho? vzácnych **jašterích** pozostatkov. Vzor **páví** má vo všetkých pádoch príponu s mäkkým i/í (pávích → **jašterích**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je jašterích.'
  },
  {
    id: 22,
    code: '22',
    type: 'choice',
    category: 'Skladba (prístavok)',
    questionText:
      'V ktorej možnosti je nasledujúca veta upravená tak, že obsahuje prístavok?\n//Alchemilka obyčajná, ktorá je liečivá bylinka, rastie po celom svete a má viacero pozitívnych účinkov.//',
    options: [
      { key: 'A', text: 'Alchemilka obyčajná, ktorá lieči, rastie po celom svete a má viacero pozitívnych účinkov.' },
      { key: 'B', text: 'Alchemilka obyčajná je liečivá bylinka, ktorá rastie po celom svete, má viacero pozitívnych účinkov.' },
      { key: 'C', text: 'Alchemilka obyčajná lieči, rastie po celom svete, pričom má viacero pozitívnych účinkov.' },
      { key: 'D', text: 'Alchemilka obyčajná, liečivá bylinka, rastie po celom svete a má viacero pozitívnych účinkov.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prístavok stojí za podstatným menom a pomenúva tú istú vec inými slovami (napr. Bratislava, hlavné mesto Slovenska, leží na Dunaji). Neobsahuje sloveso, zhoduje sa v páde, z oboch strán sa oddeľuje čiarkami a keď ho vynecháš, veta nestratí zmysel.',
    solutionSteps: [
      {
        title: 'Ako vo vete spoznáš prístavok',
        text: 'Prístavok (apozícia) stojí za podstatným menom a **pomenúva tú istú vec alebo osobu inými slovami** – napr. //Bratislava, **hlavné mesto Slovenska**, leží na Dunaji.// Hlavné znaky:\n• jeho základom je **podstatné meno v rovnakom páde** (kto? čo? Bratislava – hlavné mesto) a **neobsahuje určité sloveso**,\n• v texte sa z oboch strán **oddeľuje čiarkami** (na konci vety čiarkou a bodkou),\n• môžeš ho z vety **vynechať alebo vymeniť** s podstatným menom pred ním bez toho, aby sa zmenil základný zmysel vety.'
      },
      {
        title: 'Kontrola možností A – D',
        text: 'A – „, ktorá lieči,“ obsahuje určité sloveso (lieči), ide o vedľajšiu vetu, nie o prístavok.\nB – „Alchemilka obyčajná je liečivá bylinka“ obsahuje sloveso „je“ (prísudok hlavnej vety).\nC – „Alchemilka obyčajná lieči“ má slovesný prísudok „lieči“, nie prístavok.\nD – „Alchemilka obyčajná, **liečivá bylinka**, rastie...“ – výraz **liečivá bylinka** pomenúva inými slovami podmet „Alchemilka obyčajná“, zhoduje sa s ním v páde, neobsahuje sloveso a z oboch strán ho oddeľujú čiarky.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 23,
    code: '23',
    type: 'choice',
    category: 'Literatúra (ľudová slovesnosť)',
    questionText:
      'V ktorej možnosti je správne uvedený žáner, ktorým sa inšpirovala istá stavebná firma pri tvorbe reklamného sloganu?\n//Kto druhému jamu kope, potrebuje betón.//',
    options: [
      { key: 'A', text: 'príslovie' },
      { key: 'B', text: 'pranostika' },
      { key: 'C', text: 'aforizmus' },
      { key: 'D', text: 'porekadlo' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Spomeň si na pôvodné známe znenie: „Kto druhému jamu kope, sám do nej spadne.“ Má mravné poučenie?',
    solutionSteps: [
      {
        title: 'Určenie pôvodnej ľudovej múdrosti',
        text: 'Slogan humorne upravuje známe ľudové **príslovie**: „Kto druhému jamu kope, sám do nej spadne.“'
      },
      {
        title: 'Rozdiel medzi príslovím a ostatnými žánrami',
        text: 'Príslovie obsahuje všeobecnú ľudovú múdrosť s mravným ponaučením (na rozdiel od porekadla, ktoré len konštatuje situáciu bez poučenia, a pranostiky, ktorá sa týka počasia/prírody).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A (príslovie).'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: 'Pravopis a tvaroslovie (vzťahové prídavné mená)',
    questionText:
      'Na základe nižšie uvedeného textu doplň informáciu o krajine pôvodu v tvare prídavného mena. Odpoveď napíš pravopisne správne.\n//Európa je známa svojimi krásnymi a voňavými kvetmi. Vedeli ste, že karafiáty sú charakteristickými kvetmi Španielska? Koľkokrát ste sa nechali uniesť krásou vzácnych horských ruží v Rakúsku? Ľalie sú späté s mytológiou Grécka.//',
    fillSentenceHtml: '//Očarujúce sú jedinečné// {{blank}} //horské ruže.//',
    placeholder: 'Doplň prídavné meno',
    correctAnswerDisplay: 'rakúske',
    acceptedAnswers: ['rakúske'],
    caseSensitive: true,
    caseHint: 'Pozor na malé začiatočné písmeno: vzťahové prídavné mená utvorené od názvov krajín sa píšu s malým písmenom (rakúske).',
    hint: 'Vzťahové prídavné mená utvorené od názvov krajín a štátov (slovenský, český, španielsky...) sa píšu s malým začiatočným písmenom! Pozor aj na dĺžeň v koreni slova.',
    solutionSteps: [
      {
        title: 'Vyhľadanie krajiny pre horské ruže v texte',
        text: 'V tretej vete textu sa spomína krása vzácnych horských ruží v **Rakúsku**.'
      },
      {
        title: 'Utvorenie prídavného mena a kontrola pravopisu',
        text: 'Od podstatného mena Rakúsko utvoríme vzťahové prídavné meno **rakúske** (ženský rod, množné číslo, nominatív: horské ruže). Píše sa s **malým začiatočným písmenom r** (stojí uprostred vety a ide o vzťahové prídavné meno utvorené od názvu krajiny) a s dlhým **ú**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je rakúske.'
  },
  {
    id: 25,
    code: '25',
    type: 'text',
    category: 'Tvaroslovie a pravopis (číslovky)',
    questionText:
      'Prepíš slovom číslovku z nasledujúceho oznamu pravopisne správne v uvedenom tvare.\n//V stredu sa v Dubnici nad Váhom uskutoční mobilný zber použitého kuchynského oleja a tukov. Zberové vozidlo sa zastaví v 7 vopred stanovených lokalitách s presným názvom ulice.//',
    fillSentenceHtml: '//v// {{blank}} //vopred stanovených lokalitách//',
    placeholder: 'Prepíš číslovku slovom',
    correctAnswerDisplay: 'siedmich',
    acceptedAnswers: ['siedmich', 'Siedmich', 'v siedmich', 'V siedmich'],
    commonMistakes: [
      {
        pattern: '^(v\\s+)?siedm[yý]ch$',
        hint: 'Pozor na i/y: základná číslovka „sedem“ má v lokáli mäkké i (na rozdiel od radovej číslovky „siedmy“).'
      },
      {
        pattern: '^(v\\s+)?sedem$',
        hint: 'Číslovku treba vyskloňovať podľa vety – odpovedá na pádovú otázku v kom? v čom? (lokál množného čísla).'
      }
    ],
    hint: 'Urči pád predložkového spojenia (v kom? v čom? – lokál množného čísla). Číslovka „sedem“ má pri skloňovaní dvojhlásku ie a mäkké i v koncovke.',
    solutionSteps: [
      {
        title: 'Určenie pádu v predložkovom spojení',
        text: 'Na spojenie „v 7 vopred stanovených lokalitách“ sa pýtame pádovou otázkou **v kom? v čom?**, je teda v **lokáli množného čísla**.'
      },
      {
        title: 'Skloňovanie základnej číslovky sedem',
        text: 'Základná číslovka sedem sa skloňuje takto: N sedem, G siedmich, D siedmim, A sedem (pri životných podstatných menách mužského rodu siedmich), L **(v/o) siedmich**, I siedmimi. Správny pravopis je s dvojhláskou **ie** a s mäkkým **-i-** (**siedmich** = koľkých?; tvrdé y je len v radovej číslovke siedmych = koľkých v poradí?).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je siedmich (prípadne v siedmich).'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: 'Tvaroslovie (slovné druhy)',
    questionText:
      'V ktorej možnosti je vyznačené slovo rovnakým slovným druhom ako vyznačené slovo v nasledujúcej vete?\n//Červenej čiapočke sa **nečakane** ponúkne príležitosť, zbalí sa a hor sa za dobrodružstvom!//',
    options: [
      { key: 'A', text: 'Babičku **neveľmi** nadchýnalo priateľstvo jej vnučky s vlkom.' },
      { key: 'B', text: 'Čiapočku už **nebolo** možné rozveseliť prechádzkami po lese.' },
      { key: 'C', text: 'Babička ju občas podozrievala, že vymýšľa **neplechu**.' },
      { key: 'D', text: 'Čiapočka očakávala od výletu **nevídané** dobrodružstvá.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Spýtaj sa na slovo „nečakane“ otázkou (Ako sa jej ponúkne?). Rovnaký neohybný slovný druh nájdeš len v jednej možnosti.',
    solutionSteps: [
      {
        title: 'Určenie slovného druhu vo vzorovej vete',
        text: 'Ako sa ponúkne? **nečakane** → ide o **príslovku** (spôsobu).'
      },
      {
        title: 'Určenie slovných druhov v možnostiach A – D',
        text: 'A – Ako/do akej miery nadchýnalo? **neveľmi** → **príslovka** (miery) – **zhoda**.\nB – **nebolo** → sloveso (záporný tvar slovesa byť).\nC – vymýšľa koho/čo? **neplechu** → podstatné meno.\nD – aké dobrodružstvá? **nevídané** → prídavné meno.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: 'Tvaroslovie a práca s textom',
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti je slovo, na ktoré odkazuje podčiarknuté zámeno v piesni?',
    options: [
      { key: 'A', text: 'sny' },
      { key: 'B', text: 'tváre' },
      { key: 'C', text: 'priatelia' },
      { key: 'D', text: 'slová' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si posledný verš piesne pozorne nahlas: „Každá tvár svoj príbeh má, tak čítaj priamo z nich“ – z čoho máme čítať tie príbehy?',
    solutionSteps: [
      {
        title: 'Analýza významu posledného verša',
        text: 'Verš znie: „Každá **tvár** svoj príbeh má, tak čítaj priamo **z nich**.“ Ak má príbeh každá tvár, autor vyzýva čitateľa, aby tie príbehy čítal priamo z ľudských **tvárí** (zámeno „z nich“ odkazuje v množnom čísle na podmet „tvár“, teda tváre).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B (tváre).'
  },
  {
    id: 28,
    code: '28',
    type: 'text',
    category: 'Lexikológia a práca s textom',
    sharedContextId: 'ukazka_4',
    questionText: 'Vypíš z piesne dvojslovné spojenie s významom //nové sily//.',
    placeholder: 'Vypíš dvojslovné spojenie',
    correctAnswerDisplay: 'druhý dych',
    acceptedAnswers: ['druhý dych', 'Druhý dych'],
    hint: 'Pozri si tretí verš piesne „Viem, čo cítiš“ a všimni si ustálené spojenie, ktoré používame napríklad pri behu alebo v náročnej situácii.',
    solutionSteps: [
      {
        title: 'Vyhľadanie spojenia v texte piesne',
        text: 'V treťom verši piesne sa nachádza slovné spojenie: „Stále dobiehaš svoj **druhý dych**“.'
      },
      {
        title: 'Overenie frazeologického významu',
        text: 'Frazeologizmus „chytiť/dostať druhý dych“ označuje prílev **nových síl**, energie po prvotnej únave.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je druhý dych.'
  },
  {
    id: 29,
    code: '29',
    type: 'text',
    category: 'Čítanie s porozumením (poézia a ilustrácia)',
    sharedContextId: 'ukazka_5',
    questionText:
      'Ktoré 3 pojmy treba na základe obsahu piesne vybrať z batoha na ilustrácii predtým, než ho hodíme do vody? Slová vypíš v abecednom poradí.',
    placeholder: 'Napíš 3 slová v abecednom poradí (napr. slovo1, slovo2, slovo3)',
    correctAnswerDisplay: 'pohoda, radosť, úsmev',
    acceptedAnswers: ['pohoda radosť úsmev', 'pohoda, radosť, úsmev', 'Pohoda – Radosť – Úsmev'],
    orderedWords: ['pohoda', 'radosť', 'úsmev'],
    footnote:
      'Za správnu odpoveď budú uznané uvedené tri slová v abecednom poradí a akýmkoľvek spôsobom zápisu, resp. spôsobom oddelenia slov.',
    hint: 'Zisti z prvých troch veršov a siedmeho verša piesne, ktoré 4 negatívne veci majú skončiť vo vode. Ktoré 3 pozitívne pojmy z batoha medzi ne nepatria? Potom ich zoraď podľa abecedy!',
    solutionSteps: [
      {
        title: 'Určenie slov, ktoré treba hodiť do vody',
        text: 'V piesni sa spieva: „Do batôžka si nalož **pretvárku**, **lož** a **faloš** / A potom ich hoď z mosta do vody... Ak k tomu pridáš **hádky**...“ Tieto 4 negatívne veci (faloš, hádka, lož, pretvárka) patria do vody.'
      },
      {
        title: 'Výber 3 dobrých pojmov z batoha a abecedné zoradenie',
        text: 'Z batoha na ilustrácii treba vybrať zostávajúce tri pozitívne pojmy, aby neskončili vo vode: **pohoda**, **radosť**, **úsmev**.\nKontrola abecedného poradia: **p** (pohoda) → **r** (radosť) → **ú** (úsmev).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je pohoda, radosť, úsmev.'
  },
  {
    id: 30,
    code: '30',
    type: 'choice',
    category: 'Tvaroslovie a skladba',
    questionText: 'V ktorej možnosti je možné na vynechané miesto doplniť len podstatné meno?',
    options: [
      { key: 'A', text: 'V taške som našiel _______ desiatu.' },
      { key: 'B', text: 'V miestnej _______ sa vyrába chlieb.' },
      { key: 'C', text: 'Výlet zo školy _______ v pondelok.' },
      { key: 'D', text: 'V chate sme _______ opraviť kúrenie.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Vyskúšaj do každej medzery dosadiť rôzne slovné druhy (sloveso, prídavné meno, zámeno, podstatné meno). V ktorej vete chýba práve pomenovanie miesta za prídavným menom?',
    solutionSteps: [
      {
        title: 'Analýza jednotlivých viet',
        text: 'A – V taške som našiel **chutnú / svoju / jednu** desiatu → možno doplniť prídavné meno, zámeno alebo číslovku.\nB – V miestnej **pekárni** sa vyrába chlieb → po prídavnom mene „miestnej“ musí v predložkovom páde nasledovať **podstatné meno** ženského rodu (L sg.).\nC – Výlet zo školy **bude / bol** v pondelok → dopĺňame určité sloveso (prísudok).\nD – V chate sme **museli / chceli** opraviť kúrenie → dopĺňame sloveso (časť zloženého slovesného prísudku).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  }
];
