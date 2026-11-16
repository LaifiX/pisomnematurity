import type { QuestionData } from '../../types';

export const questionsPart1: QuestionData[] = [
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktorý odpad môžeme na základe ukážky vyhodiť do modrého kontajnera?',
    options: [
      { key: 'A', text: 'Papierovú vreckovku, do ktorej sme si vyfúkali nos.' },
      { key: 'B', text: 'Starý školský zošit, do ktorého sme písali celý rok.' },
      { key: 'C', text: 'Veľkú nezloženú kartónovú škatuľu od televízora.' },
      { key: 'D', text: 'Reklamné letáky ofŕkané farbou pri maľovaní bytu.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Porovnaj zoznam v časti „Modrá“ s upozorneniami pod orámovanou tabuľkou – aký papier do modrého kontajnera nepatrí (znečistený, s nebezpečnou látkou) a čo musíme urobiť so škatuľou pred vyhodením?',
    solutionSteps: [
      {
        title: 'Overenie možnosti B',
        text: 'Do **modrého kontajnera** patrí papier (//noviny, časopisy, letáky, kancelársky papier, listy// a pod.). Bežne popísaný **starý školský zošit** nie je mastný ani znečistený nebezpečnými látkami, preto ho môžeme vyhodiť do modrého kontajnera.'
      },
      {
        title: 'Vylúčenie možností A, C, D podľa textu pod tabuľkou',
        text: 'A – použitá papierová vreckovka patrí medzi znečistené hygienické potreby, teda do **zmesového odpadu**.\nC – kartónové škatule patria do modrých nádob **iba po zmenšení objemu** (napr. poskladaním), nie veľké a nezložené.\nD – odpad znečistený zvyškami nebezpečných látok (**farieb**, olejov, riedidiel) nepatrí do triedeného odpadu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie na základe ukážky __nie je__ pravdivé?',
    options: [
      { key: 'A', text: 'Triedený odpad sa dá opätovne využiť a recyklovať.' },
      { key: 'B', text: 'V prírode by sa sklenená váza rozkladala aj 4000 rokov.' },
      { key: 'C', text: 'Všetky obaly od kozmetických prípravkov patria do plastov.' },
      { key: 'D', text: 'Existuje aj odpad, ktorého časti patria do rôznych kontajnerov.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor na podčiarknuté slová „nie je“! Skontroluj si v častiach „Zelená“ a „Žltá“, z akých materiálov bývajú obaly od kozmetiky.',
    solutionSteps: [
      {
        title: 'Odhalenie nepravdivého tvrdenia v možnosti C',
        text: 'V časti **Zelená** (sklo) sú uvedené **sklenené obaly od kozmetiky** a v časti **Žltá** (plasty) **plastové obaly od kozmetiky**. Nie je teda pravda, že //všetky// obaly od kozmetických prípravkov patria do plastov.'
      },
      {
        title: 'Overenie pravdivosti tvrdení A, B, D',
        text: 'A – bubliny v ukážke uvádzajú príklady recyklácie (akvárium, flaušová bunda, škatuľa, panvica).\nB – sklenené vázy patria pod sklo, pri ktorom je uvedený čas rozkladu **4000 rokov**.\nD – napr. sklenené obaly od kozmetiky, kávy a pochutín sa triedia **bez plastového vrchnáka** (sklo ide do zeleného, plastový vrchnák do žltého a kovový uzáver z jogurtu či kompótu do červeného kontajnera).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Do kontajnera určeného na plasty na základe ukážky vyhadzujeme',
    options: [
      { key: 'A', text: 'kúsky polystyrénu.' },
      { key: 'B', text: 'flaušovú bundu.' },
      { key: 'C', text: 'tuby zo zubnej pasty.' },
      { key: 'D', text: 'nedojedený jogurt.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prečítaj si štyri otázky a odpovede pod orámovanou časťou ukážky – čo sa v nich píše o menšom množstve polystyrénu, o tube zo zubnej pasty a o téglikoch z jogurtov?',
    solutionSteps: [
      {
        title: 'Overenie možnosti A v texte pod tabuľkou',
        text: 'Pri otázke //Kam patrí polystyrén a škatule z kartónu?// sa uvádza: „**Ak nie je polystyrénu veľa, tak patrí do žltého kontajnera, určeného na plasty.**“ Menšie **kúsky polystyrénu** teda vyhadzujeme do kontajnera na plasty.'
      },
      {
        title: 'Vylúčenie možností B, C, D',
        text: 'B – flaušová bunda je hotový výrobok, ktorý vznikne recykláciou 30 plastových fliaš s pridaním textilu, nie plastový odpad.\nC – tuba zo zubnej pasty je znečistená hygienická potreba a patrí do **zmesového odpadu**.\nD – tégliky z jogurtov musia byť **bez zvyškov jedla**, takže nedojedený jogurt do plastov nepatrí.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: 'Komunikácia a pravopis (vykanie)',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti je správne použité vykanie?',
    options: [
      { key: 'A', text: 'Pani Vierka, bola by ste taká láskavá a pomohla mi zložiť škatuľu?' },
      { key: 'B', text: 'S dovolením, potrebujem vyniesť kôš, mohol by ste mi uhnúť z cesty?' },
      { key: 'C', text: 'Boli by ste takí dobrí, pán Maximilián, odložíte mi vrchnáky z fliaš?' },
      { key: 'D', text: 'Povedali by ste mi, kde sa nachádzajú najbližšie zberné kontajnery?' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pri vykaní jednej osobe sú slovesá vždy v množnom čísle (boli by ste, pomohli, mohli by ste, povedali by ste), zatiaľ čo zámená a prídavné mená v prísudku zostávajú v jednotnom čísle (taká láskavá, taký dobrý).',
    solutionSteps: [
      {
        title: 'Overenie správnej možnosti D',
        text: 'Vo vete **D** má sloveso v podmieňovacom spôsobe pri vykaní správny tvar 2. osoby množného čísla so zakončením **-li**: **Povedali by ste**.'
      },
      {
        title: 'Chyby vo vykaní v možnostiach A, B, C',
        text: 'A – slovesá sú chybne v jednotnom čísle „bola by ste ... a pomohla“ (správne: **boli** by ste taká láskavá a **pomohli** mi).\nB – sloveso je chybne v jednotnom čísle „mohol by ste“ (správne: **mohli** by ste).\nC – pri vykaní jednému mužovi (//pán Maximilián//) musia byť zámeno a prídavné meno v jednotnom čísle s tvrdým **-ý** (správne: Boli by ste **taký dobrý**, nie „takí dobrí“).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: 'Tvaroslovie (ohybné a neohybné slovné druhy)',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti patria obe podčiarknuté slová k neohybným slovným druhom?',
    options: [
      { key: 'A', text: 'Projekt prispieva k __tomu__, __aby__ sme sa zaujímali o životné prostredie.' },
      { key: 'B', text: '__Len__ veľmi málo škôl __systematicky__ separuje odpad.' },
      { key: 'C', text: 'Je __dôležité__ starať sa nielen o svoje pohodlie, ale __aj__ o našu planétu.' },
      { key: 'D', text: '__Jeho__ súčasťou __je__ projekt Zbieraj a trieď.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Medzi neohybné slovné druhy patria príslovky, predložky, spojky, častice a citoslovcia. Medzi ohybné patria podstatné mená, prídavné mená, zámená, číslovky a slovesá.',
    solutionSteps: [
      {
        title: 'Určenie slovných druhov v možnosti B',
        text: 'V možnosti **B** patria obe podčiarknuté slová k **neohybným slovným druhom**:\n• **Len** – **častica** (vyjadruje obmedzujúci postoj k množstvu //veľmi málo škôl//),\n• **systematicky** – **príslovka** spôsobu (pýtame sa //ako separuje?//).'
      },
      {
        title: 'Ohybné slovné druhy v možnostiach A, C, D',
        text: 'A – //tomu// je ukazovacie **zámeno** (ohybný slovný druh; //aby// je spojka).\nC – //dôležité// je **prídavné meno** (ohybný slovný druh; //aj// je častica).\nD – //Jeho// je osobné privlastňovacie **zámeno** a //je// je **sloveso** (oba slovné druhy sú ohybné).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: 'Tvaroslovie (pomnožné podstatné mená)',
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíš z orámovanej časti ukážky pomnožné podstatné meno.',
    placeholder: 'Vypíš pomnožné podstatné meno',
    correctAnswerDisplay: 'noviny',
    acceptedAnswers: ['noviny', 'novín', 'novinám', 'novinách', 'novinami'],
    commonMistakes: [
      {
        pattern: '^pochutin',
        hint: 'Podstatné meno „pochutiny“ nie je pomnožné, lebo má aj tvar jednotného čísla (tá pochutina).'
      },
      {
        pattern: '^plast|^kov|^skl|^papier',
        hint: 'Slová plast, kov, sklo aj papier majú bežný tvar jednotného čísla – pomnožné podstatné meno má iba tvar množného čísla, aj keď pomenúva jednu vec (pozri časť „Modrá“).'
      },
      {
        pattern: '^plienk|^vreckovk|^farb|^chemik[aá]li|^riedid',
        hint: 'Hľadaj iba v orámovanej štvorpolíčkovej časti ukážky (Zelená, Žltá, Modrá, Červená) a over si, či slovo naozaj nemá jednotné číslo.'
      }
    ],
    hint: 'Pomnožné podstatné meno pomenúva aj jednu vec tvarom množného čísla a nemá tvar jednotného čísla (napr. nožnice, okuliare). Prezri si položky v modrom poli (papier).',
    solutionSteps: [
      {
        title: 'Ako spoznáme pomnožné podstatné meno',
        text: '**Pomnožné podstatné meno** má len tvar množného čísla, aj keď ním označujeme jediný kus (jednu vec), a nedá sa z neho utvoriť jednotné číslo s tým istým významom.'
      },
      {
        title: 'Vyhľadanie v orámovanej časti ukážky',
        text: 'V orámovanej časti **Modrá** sa nachádza pomnožné podstatné meno **noviny** (v bubline aj v tvare genitívu **novín** – //tie noviny//, vzor //žena//). Ostatné podstatné mená v množnom čísle v rámčeku majú aj tvar jednotného čísla (napr. //fľaša, pohár, časopis, leták, plechovka, pochutina//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je noviny (príp. novín).'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: 'Hláskoslovie (výslovnosť prevzatých slov)',
    sharedContextId: 'ukazka_1',
    questionText:
      'Vypíš z nasledujúcej časti ukážky slovo cudzieho pôvodu, pri výslovnosti ktorého sa __nerešpektuje__ pravidlo o mäkčení.\n\n//ZELENÝ ODPADKOVÝ KÔŠ: nevratné sklenené fľaše, sklenené poháre, vázy, úlomky tabuľového skla, poháre od kompótov, sklenené obaly od kozmetiky, kávy a pochutín bez plastového vrchnáka.//',
    placeholder: 'Vypíš slovo z úryvku',
    correctAnswerDisplay: 'kozmetiky',
    acceptedAnswers: ['kozmetiky', 'kozmetika', 'kozmetike', 'kozmetiku', 'kozmetikou'],
    commonMistakes: [
      {
        pattern: '^pochut[ií]n',
        hint: 'Slovo „pochutín“ je domáceho pôvodu a skupinu -tí- v ňom vyslovujeme mäkko [pochuťín] – pravidlo o mäkčení sa v ňom rešpektuje.'
      },
      {
        pattern: '^komp[oó]t|^plastov|^v[aá]z|^k[aá]v',
        hint: 'Hľadaj v úryvku slovo cudzieho pôvodu, v ktorom za spoluhláskou d, t, n alebo l nasleduje samohláska e alebo i, no vyslovujeme ju tvrdo (bez mäkčenia).'
      },
      {
        pattern: 'kozmet[yý]k|kosmet|kozmetik[ií]$',
        hint: 'Skontroluj presný pravopis slova priamo v úryvku: kozmetiky (so z, s mäkkým i po t a s tvrdým -y na konci podľa vzoru žena).'
      }
    ],
    hint: 'Pravidlo o mäkčení hovorí, že v domácich slovách sa spoluhlásky d, t, n, l pred samohláskami e, i, í vyslovujú mäkko [ď, ť, ň, ľ]. Nájdi v úryvku prevzaté slovo so spojením de/di/te/ti/ne/ni/le/li, ktoré vyslovujeme tvrdo.',
    solutionSteps: [
      {
        title: 'Pravidlo o mäkčení a výnimky v cudzích slovách',
        text: 'V domácich slovenských slovách sa spoluhlásky **d, t, n, l** pred **e, i, í** vyslovujú mäkko (napr. //sklenené// [skľeňené], //pochutín// [pochuťín]). V mnohých slovách **cudzieho pôvodu** sa však toto pravidlo neuplatňuje a výslovnosť zostáva tvrdá.'
      },
      {
        title: 'Vyhľadanie slova v úryvku',
        text: 'V úryvku ide o slovo cudzieho pôvodu **kozmetiky** (základný tvar **kozmetika**): slabiku **-ti-** v ňom vyslovujeme tvrdo **[kozmetiki]**, nie mäkko.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je kozmetiky (alebo kozmetika).'
  },
  {
    id: 8,
    code: '08',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o postavách vyplýva z ukážky?',
    options: [
      { key: 'A', text: 'Ištar a Naja skúmali mapu mesta viac ako hodinu sami.' },
      { key: 'B', text: 'Autor mapy nie je poctivcom, ale pozerá na svoje výhody.' },
      { key: 'C', text: 'Ištar namaľoval mapu pôvodne pre faraóna na objednávku.' },
      { key: 'D', text: 'Nápad, akým spôsobom dobyť mesto, skrsol v hlave Naju.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si štvrtý odsek, v ktorom autor mapy (Ištar) vysvetľuje, prečo kráľovi Sargonovi odovzdal len nedokonalý náčrtok a pravú mapu si tajne nechal.',
    solutionSteps: [
      {
        title: 'Overenie možnosti B vo štvrtom odseku',
        text: 'Autorom mapy je **Ištar**. Kráľa Sargona, ktorý si mapu objednal, oklamal: dal mu len nedokonalý náčrtok a dobrý kus si tajne ponechal so slovami: „**Vedel som, že jedného dňa mi zaň niekto zaplatí viac, než sa kedy zmohol Sargon.**“ Nie je teda poctivcom, ale hľadí na vlastný prospech.'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – mapu neskúmali sami dvaja; pri stole bol s nimi aj tretí muž – **Trok** („Trok nakoniec odstúpil od stola“).\nC – mapu namaľoval pôvodne na príkaz **kráľa Sargona**, nie pre faraóna.\nD – nápad využiť vodu pritekajúcu pod múrmi mesta skrsol v hlave **Ištara** („‚Voda,‘ zašeptal Ištar. ‚Pozrite na vodu.‘“), nie Naju.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o Ištarovi je na základe ukážky __nepravdivé__?',
    options: [
      { key: 'A', text: 'Oslovili ho čarodejník.' },
      { key: 'B', text: 'Bol nadaný v maľovaní.' },
      { key: 'C', text: 'Išlo o podnikavého muža.' },
      { key: 'D', text: 'Dostal za svoje rady zlato.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozor na podčiarknuté slovo „nepravdivé“! Pozri sa do šiesteho odseku, kde Trok spomína tri vrecia zlata – dostal už Ištar toto zlato, alebo si ho ešte len musí zaslúžiť?',
    solutionSteps: [
      {
        title: 'Odhalenie nepravdivého tvrdenia v možnosti D',
        text: 'V šiestom odseku Trok hovorí Ištarovi v budúcom čase: „**Budeš musieť niečo vymyslieť, aby si si zarobil tri vrecia zlata.**“ V ukážke sa plán ešte len rodí, takže Ištar za svoje rady zlato zatiaľ **nedostal**.'
      },
      {
        title: 'Potvrdenie pravdivosti možností A, B, C',
        text: 'A – Trok ho oslovil slovami: „Nevidím žiadnu slabinu, **čarodejník**.“\nB – mapu **vlastnoručne namaľoval** tak, že „nikto by nedosiahol toľkú presnosť a krásu“.\nC – zachoval sa vypočítavo a podnikavo, keď si presnú mapu odložil, aby ju neskôr predal výhodnejšie.'
      }
    ],
    solutionConclusion: 'Nepravdivé tvrdenie je v možnosti D.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: 'Čítanie s porozumením (čítanie medzi riadkami)',
    sharedContextId: 'ukazka_2',
    questionText: 'V závere ukážky sa v očiach dvoch postáv //zračilo rodiace sa pochopenie// toho, ako',
    options: [
      { key: 'A', text: 'sa dostať do mesta prostredníctvom vody, ktorá doň vteká.' },
      { key: 'B', text: 'mať neobmedzenú zásobu vody z dvoch mohutných riek.' },
      { key: 'C', text: 'dostať cez zásobovacie kanály viac vody na suché terasy.' },
      { key: 'D', text: 'zmeniť svoje plány, lebo múry neprelomia ani za tri roky.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prečítaj si otázky, ktorými Ištar v poslednom odseku navedie Naju s Trokom na slabé miesto opevneného mesta („Ale kde vteká voda do mesta? Ako ním prechádza, pod všetkými tými múrmi?“).',
    solutionSteps: [
      {
        title: 'Pochopenie Ištarovej nápovedy v závere ukážky',
        text: 'Hradby mesta bolo nemožné prelomiť priamym útokom. Keď sa však Ištar spýtal: „**Ale kde vteká voda do mesta? Ako ním prechádza, pod všetkými tými múrmi?**“, Naja s Trokom pochopili, že slabinou pevnosti sú vodné kanály vedúce popod hradby, cez ktoré sa dá preniknúť dnu.'
      },
      {
        title: 'Prečo možnosti B, C, D nevystihujú záver ukážky',
        text: 'Postavy sa nesnažili mesto zásobovať vodou (B, C) ani vzdať dobytie mesta (D), ale hľadali spôsob, ako prekonať jeho hradby.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: 'Tvaroslovie (komplexný rozbor slovných druhov)',
    sharedContextId: 'ukazka_2',
    questionText:
      'Ktoré tvrdenie o slovách z nasledujúcej vety je pravdivé?\n\n//Každú štvrť zásobujú kanály, je tam vody na sto rokov pre Sargonových šesť terás.//',
    options: [
      { key: 'A', text: 'Slovesá sú v dokonavom vide.' },
      { key: 'B', text: 'Obsahuje tri rôzne základné číslovky.' },
      { key: 'C', text: 'Prídavné meno je v ženskom rode.' },
      { key: 'D', text: 'Nachádza sa v nej vlastné podstatné meno.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pozor na dva chytáky vo vete: 1. slovo „štvrť“ tu znamená mestskú časť (podstatné meno, nie číslovku), 2. slovo „Sargonových“ nie je podstatné meno, ale privlastňovacie prídavné meno – k akému podstatnému menu vo vete patrí a aký má to podstatné meno rod?',
    solutionSteps: [
      {
        title: 'Overenie možnosti C – rod prídavného mena Sargonových',
        text: 'Jediným prídavným menom vo vete je privlastňovacie prídavné meno **Sargonových** (vzor //otcov//). Rozvíja podstatné meno **terás** (//pre Sargonových šesť terás//; N sg. **tá terasa** = **ženský rod**). Pretože prídavné meno preberá rod od nadradeného podstatného mena, je tiež v **ženskom rode** (G pl.).'
      },
      {
        title: 'Prečo sú tvrdenia A, B, D nepravdivé',
        text: 'A – slovesá //zásobujú// a //je// vyjadrujú neukončený dej, sú v **nedokonavom vide**.\nB – vo vete sú iba **dve** základné číslovky (**sto** a **šesť**); slovo //štvrť// vo význame //mestská štvrť// je **podstatné meno**.\nD – slovo //Sargonových// sa síce píše s veľkým začiatočným písmenom, ale je to **privlastňovacie prídavné meno** (//čích?//), nie vlastné podstatné meno.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: 'Tvaroslovie (skloňovanie zámen)',
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti sa nachádzajú zámená v rovnakom páde?',
    options: [
      { key: 'A', text: 'tými múrmi, k tejto mape' },
      { key: 'B', text: 'sa mu uklonil, ním prechádza' },
      { key: 'C', text: 'toľkú presnosť, v tomto tisícročí' },
      { key: 'D', text: 'prelomiť tie múry, ju namaľoval' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pomôž si kontextom viet z ukážky a opýtaj sa pádovou otázkou na obe časti každej dvojice (napr. prelomiť koho? čo? tie múry; namaľoval koho? čo? ju).',
    solutionSteps: [
      {
        title: 'Zhodný pád zámen v možnosti D',
        text: '• //prelomiť (koho? čo?) **tie** múry// → **akuzatív**,\n• //(koho? čo?) **ju** namaľoval// → **akuzatív**.\nObe zámená (**tie**, **ju**) sú v **akuzatíve**.'
      },
      {
        title: 'Rozdielne pády v možnostiach A, B, C',
        text: 'A – //tými múrmi// (**inštrumentál**) vs. //k tejto mape// (**datív**).\nB – //uklonil sa (komu?) mu// (**datív**) vs. //prechádza (čím?) ním// (**inštrumentál**).\nC – //(nedosiahol) toľkú presnosť// (**akuzatív**) vs. //v tomto tisícročí// (**lokál**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 13,
    code: '13',
    type: 'text',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Vypíš meno postavy, ktorej je v ukážke preukazovaná pocta ako faraónovi.',
    placeholder: 'Vypíš meno postavy',
    correctAnswerDisplay: 'Naja',
    acceptedAnswers: ['Naja', 'Najovi'],
    caseSensitive: true,
    caseHint: 'Meno postavy je vlastné podstatné meno – nezabudni na veľké začiatočné písmeno (Naja).',
    commonMistakes: [
      {
        pattern: '^ištar$',
        hint: 'Ištar je ten, kto sa uklonil a vyslovil slová „Faraón je vševediaci“ – komu sa v tej chvíli uklonil?'
      },
      {
        pattern: '^sargon',
        hint: 'Sargon je nepriateľský kráľ spomínaný v rozhovore, nie postava prítomná pri stole, ktorej sa Ištar uklonil.'
      },
      {
        pattern: '^trok$',
        hint: 'Prečítaj si 8., 9. a 10. odsek ukážky – kto odpovedal Ištarovi pred poklonou aj hneď po nej?'
      }
    ],
    hint: 'Nájdi v deviatej replike ukážky vetu „‚Faraón je vševediaci, vševediaci,‘ Ištar sa mu uklonil.“ a pozri sa do odseku tesne pred ňou (aj po nej), s kým sa Ištar práve rozpráva.',
    solutionSteps: [
      {
        title: 'Vyhľadanie postavy v dialógu (8. – 10. odsek)',
        text: 'V ôsmom odseku prehovoril **Naja**: „‚Pozeral som na vodu,‘ usmial sa naňho **Naja** tenkými perami...“ V deviatom odseku mu Ištar odpovedá úklonom: „‚**Faraón je vševediaci, vševediaci**,‘ Ištar sa **mu** uklonil.“ A v desiatom odseku opäť odpovedá **Naja**. Pocta ako faraónovi teda patrí postave menom **Naja**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je Naja.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: 'Lexikológia a pravopis (antonymá prísloviek)',
    sharedContextId: 'ukazka_2',
    diagramId: 'q14_excerpt',
    questionText: 'Vypíš z nasledujúcej časti ukážky slovo s opačným významom k slovu //urečnene//.',
    placeholder: 'Vypíš slovo z úryvku',
    correctAnswerDisplay: 'mlčky',
    acceptedAnswers: ['mlčky'],
    commonMistakes: [
      {
        pattern: '^mlčki$',
        hint: 'Pozor na pravopis pri odpisovaní z textu: príslovka „mlčky“ sa na konci píše s tvrdým -y.'
      },
      {
        pattern: '^tajne$|^pohr[uú]žene$',
        hint: 'Príslovka „urečnene“ znamená mnohovravne, veľa rozprávajúc – hľadaj v prvej vete tretieho odseku príslovku, ktorá znamená bez slov, potichu.'
      }
    ],
    hint: 'Príslovka „urečnene“ znamená zhovorčivo, mnohovravne (keď niekto veľa rozpráva). Hľadaj v prvej vete tretieho odseku úryvku príslovku s presne opačným významom.',
    solutionSteps: [
      {
        title: 'Určenie významu a vyhľadanie antonyma',
        text: 'Slovo //urečnene// je príslovka s významom //zhovorčivo, mnohovravne//. V prvej vete tretieho odseku úryvku čítame: „Ďalšiu hodinu skúmali mapu, **mlčky**, pohrúžene.“ Príslovka **mlčky** (bez jediného slova, potichu) má presne opačný význam k slovu //urečnene//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je mlčky.'
  }
];
