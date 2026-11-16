import type { QuestionData } from '../../types';

export const questionsPart2: QuestionData[] = [
  {
    id: 15,
    code: '15',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'More podľa ukážky',
    options: [
      { key: 'A', text: 'pokrýva tretinu zemského povrchu.' },
      { key: 'B', text: 'nemôžu ľudia nikdy celé ovládnuť.' },
      { key: 'C', text: 'je inšpiráciou všetkým umelcom.' },
      { key: 'D', text: 'nie je kapitánovou veľkou vášňou.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si záver tretieho odseku, kde kapitán Nemo hovorí o tyranoch a o tom, čo sa deje s ľudskou mocou desať metrov pod morskou hladinou.',
    solutionSteps: [
      {
        title: 'Overenie možnosti B v prejave kapitána Nema',
        text: 'Kapitán Nemo v ukážke vyhlasuje: „**More nepatrí tyranom.** Na jeho hladine ešte môžu páchať neprávosti... **Ale desať metrov pod hladinou ich moc prestáva, ich vplyv sa stráca, mizne ich sila!** ... Iba tam je nezávislosť! Tam nepoznám nijakých pánov!“ Ľudia teda nemôžu more nikdy celé (v jeho hlbinách) ovládnuť.'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – more pokrýva **sedem desatín** (70 %) zemegule, nie tretinu.\nC – v texte sa spomína iba výrok „jedného z vašich básnikov“, nie že je more inšpiráciou **všetkým** umelcom.\nD – more je práve naopak kapitánovou obrovskou vášňou („Áno, mám ho rád! More je všetko!“; hovoril s „prekypujúcim nadšením“).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 16,
    code: '16',
    type: 'choice',
    category: 'Literatúra (rozprávač v epickom diele)',
    sharedContextId: 'ukazka_3',
    questionText: 'Kto je rozprávačom v ukážke?',
    options: [
      { key: 'A', text: 'kapitán' },
      { key: 'B', text: 'autor ukážky' },
      { key: 'C', text: 'Nautilus' },
      { key: 'D', text: 'profesor Aronnax' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Sleduj zámená v 1. osobe jednotného čísla („povedal mi“, „obrátiac sa ku mne, povedal“) – akým menom a titulom oslovuje kapitán Nemo túto postavu, ktorá nám príbeh rozpráva?',
    solutionSteps: [
      {
        title: 'Určenie priameho (personálneho) rozprávača',
        text: 'Príbeh je vyrozprávaný v 1. osobe jednotného čísla (tzv. **ja-rozprávanie**). Hneď v prvej vete čítame: „– Ale more, **pán Aronnax**, – povedal **mi**...“ a na konci: „...obrátiac sa **ku mne**, povedal: – A teraz, **pán profesor**, ak si želáte prezrieť Nautila, som vám k službám.“ Postavou, ktorá príbeh rozpráva, je teda **profesor Aronnax**.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – kapitán Nemo je postava, ktorú rozprávač pozoruje a počúva („Kapitán Nemo sa zrazu... odmlčal“).\nB – autor ukážky (**Jules Verne**) je skutočný spisovateľ, ktorý knihu napísal; rozprávačom v texte je však literárna postava profesora Aronnaxa.\nC – **Nautilus** nie je osoba, ale názov ponorky kapitána Nema.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: 'Hláskoslovie (znelostná asimilácia – spodobovanie)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti dochádza k spodobovaniu?',
    options: [
      { key: 'A', text: 'človek nikdy nie je sám' },
      { key: 'B', text: 'zvyčajnej zdržanlivosti' },
      { key: 'C', text: 'som vám k službám' },
      { key: 'D', text: 'moc prestáva' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Vyslov si jednotlivé spojenia plynulo nahlas a sleduj stretnutie párových znelých a neznelých spoluhlások (vo vnútri slov aj na hranici slov). Pozor na chyták v možnosti C: akú znelosť majú spoluhlásky k + s a ž + b?',
    solutionSteps: [
      {
        title: 'Spodobovanie v možnosti A',
        text: 'V možnosti **A** dochádza k spodobovaniu (znelostnej asimilácii) hneď na dvoch miestach:\n1. **na hranici slov** //človek nikdy//: neznelá párová spoluhláska **k** na konci slova //človek// stojí pred zvučnou (nepárovou znelou) spoluhláskou **n**, preto sa spodobuje na svoj znelý párnik **g** → vyslovujeme **[človeg ňigdi]**;\n2. **vo vnútri slova** //nikdy//: neznelá párová spoluhláska **k** stojí pred znelou párovou spoluhláskou **d**, preto sa spodobuje na **g** → vyslovujeme **[ňigdi]**.'
      },
      {
        title: 'Prečo v možnostiach B, C, D k spodobovaniu nedochádza',
        text: 'B – v spojení //zvyčajnej zdržanlivosti// majú susediace párové spoluhlásky rovnakú znelosť (**z + d** sú obe znelé, **s + t** sú obe neznelé; **v, j, r, n, l** sú tu zvučné nepárové).\nC – výborný chyták: predložka **k** (neznelá) stojí pred **s** v slove //službám// (tiež neznelá → **[k službám]** bez zmeny) a v skupine **žb** sú **ž** aj **b** obe znelé (**[službám]** bez zmeny).\nD – v spojení //moc prestáva// sa stretávajú dve neznelé spoluhlásky (**c + p**, aj **s + t**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: 'Hláskoslovie (slabikotvorné spoluhlásky)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti je slovo so slabikotvornou spoluhláskou?',
    options: [
      { key: 'A', text: 'nevyčerpateľná' },
      { key: 'B', text: 'povetrie' },
      { key: 'C', text: 'zvrchovaný' },
      { key: 'D', text: 'pokrýva' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Rozdeľ si slová na slabiky. Spoluhlásky r, ŕ, l, ľ sú slabikotvorné iba vtedy, keď stoja v slabike bez samohlásky (medzi spoluhláskami) a samy tvoria jadro slabiky.',
    solutionSteps: [
      {
        title: 'Rozdelenie slov na slabiky',
        text: 'Spoluhlásky **r, ŕ, l, ľ** sú slabikotvorné len vtedy, ak sa v tej istej slabike nenachádza žiadna samohláska ani dvojhláska:\n• C: **zvr-cho-va-ný** → v prvej slabike **zvr-** nie je samohláska; základ slabiky tvorí **slabikotvorná spoluhláska r**.'
      },
      {
        title: 'Prečo v možnostiach A, B, D nie je slabikotvorná spoluhláska',
        text: '• A: //ne-vy-čer-pa-teľ-ná// – v slabikách //čer-// aj //teľ-// je samohláska **e**.\n• B: //po-vet-rie// – v slabike s //r// je dvojhláska **ie**.\n• D: //po-krý-va// – v slabike //-krý-// je dlhá samohláska **ý**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: 'Skladba (delenie viet podľa obsahu – zámeru hovoriaceho)',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti je rozkazovacia veta z ukážky?',
    options: [
      { key: 'A', text: 'Tam som slobodný!' },
      { key: 'B', text: 'Žite v hlbinách morí!' },
      { key: 'C', text: 'More je ohromná zásobáreň prírody!' },
      { key: 'D', text: 'Tam nepoznám nijakých pánov!' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Nenechaj sa zmiasť výkričníkom – ten je vo všetkých štyroch vetách! Všímaj si slovesný spôsob prísudku: v ktorej vete je sloveso v rozkazovacom spôsobe a vyjadruje výzvu?',
    solutionSteps: [
      {
        title: 'Určenie rozkazovacej vety podľa zámeru a slovesného spôsobu',
        text: 'V možnosti **B** (//Žite v hlbinách morí!//) má sloveso //žiť// tvar **rozkazovacieho spôsobu** (**žite!** – 2. os. pl.) a veta vyjadruje priamu výzvu adresátovi. Ide preto o **rozkazovaciu vetu**.'
      },
      {
        title: 'Prečo sú vety A, C, D oznamovacie (zvolacie)',
        text: 'Vo vetách A (**som**), C (**je**) a D (**nepoznám**) sú slovesá v **oznamovacom spôsobe**. Výkričník na ich konci vyjadruje len silné citové pohnutie (nadšenie) kapitána Nema – ide o zvolacie **oznamovacie vety**, nie o rozkazovacie vety.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 20,
    code: '20',
    type: 'text',
    category: 'Skladba (slovesno-menný prísudok)',
    sharedContextId: 'ukazka_3',
    questionText: 'Vypíš prísudok z nasledujúcej vety.\n\n//More je ohromná zásobáreň prírody.//',
    placeholder: 'Vypíš prísudok z vety',
    correctAnswerDisplay: 'je zásobáreň',
    acceptedAnswers: ['je zásobáreň'],
    commonMistakes: [
      {
        pattern: '^je$',
        hint: 'Sloveso „je“ (byť) tu nemá plný vecný význam (neznamená existuje/nachádza sa), ale je len sponovým slovesom – musíš k nemu pripojiť aj mennú časť prísudku.'
      },
      {
        pattern: '^z[aá]sob[aá]reň$',
        hint: 'K mennej časti prísudku nezabudni pripojiť aj sponové sloveso „je“.'
      },
      {
        pattern: 'ohromn[aá]|pr[ií]rody',
        hint: 'Slová „ohromná“ (zhodný prívlastok) a „prírody“ (nezhodný prívlastok) rozvíjajú podstatné meno, ale do samotného prísudku nepatria.'
      }
    ],
    hint: 'Sloveso „je“ v tejto vete spája podmet „more“ s podstatným menom v nominatíve, ktoré pomenúva, čím more je (tzv. slovesno-menný prísudok). Prívlastky „ohromná“ a „prírody“ do prísudku nezahŕňaj.',
    solutionSteps: [
      {
        title: 'Rozlíšenie slovesného a slovesno-menného prísudku',
        text: 'Podmetom vety je podstatné meno **more** (//kto? čo?//). Sloveso **je** (od slovesa //byť//) tu nie je plnovýznamové, ale **sponové** – spolu s podstatným menom v nominatíve **zásobáreň** tvorí **slovesno-menný prísudok**: **je zásobáreň** (hovorí nám, čím podmet //more// je).'
      },
      {
        title: 'Oddelenie rozvíjajúcich vetných členov',
        text: 'Slová //ohromná// (//aká zásobáreň?// – zhodný prívlastok) a //prírody// (//čia/aká zásobáreň?// – nezhodný prívlastok) len bližšie rozvíjajú mennú časť, preto do samotného prísudku nepatria.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je je zásobáreň.'
  },
  {
    id: 21,
    code: '21',
    type: 'text',
    category: 'Tvaroslovie (skloňovacie vzory podstatných mien)',
    sharedContextId: 'ukazka_3',
    questionText: 'Napíš vzor podstatného mena z nasledujúcej vety.\n\n//Je to nesmierna púšť.//',
    placeholder: 'Napíš skloňovací vzor',
    correctAnswerDisplay: 'dlaň',
    acceptedAnswers: ['dlaň'],
    commonMistakes: [
      {
        pattern: '^vzor dlaň$',
        hint: 'Napíš iba samotný názov skloňovacieho vzoru jedným slovom (dlaň).'
      },
      {
        pattern: '^kosť$|^vzor kosť$',
        hint: 'Povedz si tvar nominatívu množného čísla: tie púšte (prípona -e ako tie dlane, nie -i ako tie kosti).'
      },
      {
        pattern: '^žen|^ulic',
        hint: 'Podstatné meno ženského rodu „púšť“ je v základnom tvare zakončené na spoluhlásku (nie na samohlásku -a).'
      },
      {
        pattern: '^p[uú]šť$',
        hint: '„Púšť“ je samotné podstatné meno z vety – zadanie žiada napísať jeho skloňovací vzor.'
      }
    ],
    hint: 'Jediným podstatným menom vo vete je „púšť“ (ženský rod zakončený na spoluhlásku). Medzi vzormi dlaň a kosť rozhodneš podľa nominatívu množného čísla: povieme „tie púšte“ alebo „tie púšti“?',
    solutionSteps: [
      {
        title: 'Vyhľadanie podstatného mena a určenie rodu',
        text: 'Vo vete //Je to nesmierna púšť.// je jediným podstatným menom slovo **púšť** (//je// = sloveso, //to// = zámeno, //nesmierna// = prídavné meno). Ide o podstatné meno **ženského rodu** (//tá púšť//) zakončené v nominatíve jednotného čísla na spoluhlásku.'
      },
      {
        title: 'Rozlíšenie vzorov dlaň a kosť',
        text: 'V nominatíve množného čísla má slovo //púšť// príponu **-e**: //tie púšt**e**// (rovnako ako //tie dlan**e**//; pri vzore //kosť// je prípona //-i//: //tie kosti//). Podstatné meno //púšť// sa preto skloňuje podľa vzoru **dlaň**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je dlaň.'
  },
  {
    id: 22,
    code: '22',
    type: 'choice',
    category: 'Literatúra (malé formy a žánre)',
    questionText:
      'Ktorým literárnym žánrom je nasledujúca ukážka?\n\n//„Najviac času strácame tým, že by sme chceli získať čas.“//\n//John Steinbeck//',
    options: [
      { key: 'A', text: 'anekdota' },
      { key: 'B', text: 'príslovie' },
      { key: 'C', text: 'aforizmus' },
      { key: 'D', text: 'porekadlo' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si, že pod krátkym vtipným výrokom s hlbokou myšlienkou je podpísaný konkrétny autor (spisovateľ John Steinbeck) – nejde teda o anonymný ľudový útvar.',
    solutionSteps: [
      {
        title: 'Znaky aforizmu',
        text: '**Aforizmus** je stručný, duchaplný a výstižný výrok **konkrétneho autora** (v tomto prípade amerického spisovateľa Johna Steinbecka), ktorý vyjadruje životnú pravdu alebo postreh, často s využitím vtipného kontrastu (//strácame čas tým, že chceme získať čas//).'
      },
      {
        title: 'Vylúčenie možností A, B, D',
        text: '• **Príslovie** (B) a **porekadlo** (D) sú anonymné útvary **ľudovej slovesnosti** (nemajú známeho autora).\n• **Anekdota** (A) je krátky vtipný príbeh s dejom a humornou pointou na konci.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 23,
    code: '23',
    type: 'choice',
    category: 'Tvaroslovie (druhy zámen)',
    questionText:
      'V ktorej možnosti je slovo //jej// rovnakým druhom zámena ako v nasledujúcej vete?\n\n//Pripravili sme niekoľko interaktívnych úloh na tému voda a __jej__ ochrana.//',
    options: [
      { key: 'A', text: 'Vlhová získala zlato v lyžiarskom slalome, jej výkon bol excelentný.' },
      { key: 'B', text: 'Zaujímala sa o dejiny gotickej stavby, tak jej o nich porozprával.' },
      { key: 'C', text: 'Nová teória o organizmoch jej pomohla lepšie chápať vedu.' },
      { key: 'D', text: 'Autor životopisných bestsellerov jej daroval svoj rukopis.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Opýtaj sa na podčiarknuté slovo „jej“ vo východiskovej vete: čia ochrana? → jej ochrana (osobné privlastňovacie zámeno). V ktorej z možností A – D sa na slovo „jej“ pýtame čí? čia? čie?, a nie pádovou otázkou komu? čomu??',
    solutionSteps: [
      {
        title: 'Určenie druhu zámena vo východiskovej vete a v možnosti A',
        text: 'V spojení //voda a **jej** ochrana// stojí zámeno //jej// pred podstatným menom a pýtame sa naň otázkou **čia ochrana?** → ide o **osobné privlastňovacie zámeno**.\nRovnakým druhom zámena je slovo //jej// v možnosti **A**: //**jej** výkon bol excelentný// (pýtame sa **čí výkon?** → //jej výkon//).'
      },
      {
        title: 'Prečo v možnostiach B, C, D ide o iný druh zámena',
        text: 'Vo vetách B (//porozprával **komu?** jej//), C (//pomohla **komu?** jej//) a D (//daroval **komu?** jej//) zastupuje slovo //jej// osobu ženského rodu v datíve (tvar zámena //ona//) – vo všetkých troch prípadoch ide o **osobné základné zámeno**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: 'Literatúra (umelecké jazykové prostriedky – metafora)',
    diagramId: 'q24_poem',
    questionText: 'Vypíš z ukážky dvojslovný umelecký prostriedok označujúci //dejiny//.',
    placeholder: 'Vypíš dvojslovné spojenie z ukážky',
    correctAnswerDisplay: 'brány čias',
    acceptedAnswers: ['brány čias', 'cez brány čias'],
    commonMistakes: [
      {
        pattern: 'st[lĺ]py v[lĺ]n',
        hint: '„Stĺpy vĺn“ je síce tiež dvojslovná metafora z ukážky, ale pomenúva vysoké morské vlny – hľadaj dvojslovnú metaforu, ktorá obrazne označuje plynutie dejín (času).'
      },
      {
        pattern: '^br[aá]ny$|^čias$',
        hint: 'Zadanie žiada vypísať dvojslovný umelecký prostriedok z ukážky.'
      }
    ],
    hint: 'V texte piesne sú dve dvojslovné metafory: „brány čias“ a „stĺpy vĺn“. Ktorá z nich súvisí s plynutím času a históriou (dejinami)?',
    solutionSteps: [
      {
        title: 'Vyhľadanie dvojslovnej metafory v texte piesne',
        text: 'Dejiny predstavujú plynutie minulých vekov a období. V ukážke z piesne //Atlantída// sú dejiny obrazne pomenované dvojslovnou metaforou **brány čias** (uznáva sa aj tvar s predložkou **cez brány čias**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je brány čias (alebo cez brány čias).'
  },
  {
    id: 25,
    code: '25',
    type: 'text',
    category: 'Tvaroslovie (vlastné podstatné mená vs. privlastňovacie prídavné mená)',
    questionText:
      'Napíš slovom alebo číslicou, koľko vlastných podstatných mien je v nasledujúcej ukážke.\n\n//Dorotkino uznanie bolo zrejmé, nuž iba prikývla a jedla sama. „Porozprávaj mi niečo o sebe a o krajine, odkiaľ si prišla.“ Keď sa najedla, rozprávala Strachopudovi o Kansase, aké je tam všetko sivé i ako ju tornádo odvlieklo do tejto divnej krajiny Oz.//',
    placeholder: 'Napíš počet slovom alebo číslicou',
    correctAnswerDisplay: '3 (tri)',
    acceptedAnswers: ['3', 'tri', 'III', 'trí', 'try'],
    footnote:
      'Ak je žiacka odpoveď z vecného/významového hľadiska správna, odpoveď bude vyhodnotená ako správna aj s pravopisnými/gramatickými chybami.',
    commonMistakes: [
      {
        pattern: '^4$|^štyri$|^štiri$|^IV$',
        hint: 'Pozor na chyták na začiatku ukážky! Slovo „Dorotkino“ (čie uznanie?) sa síce píše s veľkým písmenom, ale nie je to podstatné meno, lež privlastňovacie prídavné meno.'
      },
      {
        pattern: 'strachopud|kansas|oz',
        hint: 'Nevypisuj samotné vlastné podstatné mená – napíš slovom alebo číslicou ich počet.'
      }
    ],
    hint: 'Pozor – nie každé slovo s veľkým začiatočným písmenom je podstatné meno! Pri každom vlastnom mene v texte si over slovný druh otázkou (kto? čo? = podstatné meno; čí? čia? čie? = privlastňovacie prídavné meno).',
    solutionSteps: [
      {
        title: 'Kontrola všetkých vlastných mien v ukážke',
        text: 'V ukážke sa nachádzajú štyri vlastné mená, no musíme rozlíšiť ich **slovný druh**:\n• //Dorotkino// (//čie uznanie? Dorotkino uznanie//, vzor //matkin//) – **nie je podstatné meno**, ale individuálne **privlastňovacie prídavné meno**!\n• **Strachopudovi** (N sg. //Strachopud// – meno rozprávkovej postavy) – **1. vlastné podstatné meno**.\n• **Kansase** (N sg. //Kansas// – zemepisný názov štátu) – **2. vlastné podstatné meno**.\n• **Oz** (názov rozprávkovej krajiny) – **3. vlastné podstatné meno**.'
      },
      {
        title: 'Zápis počtu',
        text: 'V ukážke sú teda presne **3 (tri)** vlastné podstatné mená (uznáva sa zápis **tri**, **3** aj **III**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je 3 / tri / III.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: 'Lexikológia a slovotvorba (zložené slová)',
    questionText: 'V ktorej z nasledujúcich viet sa __nenachádza__ zložené slovo?',
    options: [
      { key: 'A', text: 'Mladého dobrodruha lákalo more.' },
      { key: 'B', text: 'Na svoju prvú plavbu sa vraj vydal ako štrnásťročný.' },
      { key: 'C', text: 'Svoj návrh cesty predložil kráľovi.' },
      { key: 'D', text: 'Vzdelával sa tiež aktívnym štúdiom cestopisných diel.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Zložené slovo vzniká spojením dvoch (alebo viacerých) slovných základov (často pomocou spájacej samohlásky -o-, napr. vodopád). Nepleť si zložené slovo so slovom utvoreným iba predponou (ná-, pred-).',
    solutionSteps: [
      {
        title: 'Overenie vety C bez zloženého slova',
        text: 'Vo vete **C** (//Svoj návrh cesty predložil kráľovi.//) sa **nenachádza žiadne zložené slovo**. Slová //návrh// (//ná- + vrh//) a //predložil// (//pred- + ložil//) vznikli **odvodzovaním predponou**, nie skladaním dvoch slovných základov.'
      },
      {
        title: 'Zložené slová vo vetách A, B, D',
        text: '• A: **dobrodruha** (základy //dobr-// + //-o-// + //druh//).\n• B: **štrnásťročný** (základy //štrnásť// + //roč-// od slova //rok//).\n• D: **cestopisných** (od zloženého slova //cestopis//: //cest-// + //-o-// + //pis//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: 'Pravopis (i/y, veľké písmená a skloňovanie čísloviek)',
    diagramId: 'q27_sentence',
    questionText: 'V ktorej možnosti sú správne doplnené chýbajúce písmená z nasledujúcej vety?',
    options: [
      { key: 'A', text: 'ý, U, i, i, i' },
      { key: 'B', text: 'í, U, i, y, i' },
      { key: 'C', text: 'ý, u, y, i, y' },
      { key: 'D', text: 'í, u, y, y, i' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Rozober si postupne všetkých 5 slov: 1. športové družstvo (tím vs. zámeno tým), 2. prídavné meno od názvu štátu Uhorsko, 3. príbuzné slovo k vybranému slovu zvyk, 4. vzor prídavného mena biely, 5. pozor na záver: „už v päťdesiatich súťažných sezónach“ = počet 50 sezón (základná číslovka podľa vzoru päť!).',
    solutionSteps: [
      {
        title: 'Postupné zdôvodnenie všetkých piatich písmen',
        text: '1. **tím** (**í**) – podstatné meno z angl. //team// vo význame športové družstvo, kolektív (na rozdiel od zámena //tým//).\n2. **uhorského** (**u**) – vzťahové prídavné meno utvorené od názvu historického štátu //Uhorsko// sa píše s **malým začiatočným písmenom**.\n3. **neobvykle** (**y**) – príbuzné slovo k vybranému slovu po v **zvyk / zvyknúť si** (predpona //ob-// + koreň //-vyk-//).\n4. **bielych** (**y**) – prídavné meno //biely// má koreň zakončený na tvrdé/obojaké //l// (nie //ľ//), skloňuje sa podľa vzoru **pekný** (//v pekných → v bielych dresoch//).\n5. **päťdesiatich** (**i**) – keďže podstatné meno //sezónach// je v množnom čísle, klub oslavuje účasť v počte **50** sezón. Ide teda o **základnú číslovku** //päťdesiat// skloňovanú podľa vzoru **päť** (//v piat**i**ch → v päťdesiat**i**ch sezónach//), nie o radovú číslovku //päťdesiatych//.'
      }
    ],
    solutionConclusion: 'Správna postupnosť písmen í, u, y, y, i je v možnosti D.'
  },
  {
    id: 28,
    code: '28',
    type: 'text',
    category: 'Literatúra (epické žánre – balada)',
    diagramId: 'q28_vodnik',
    questionText: 'Napíš názov literárneho žánru nasledujúcej časti ukážky, ktorého typické znaky sú uvedené v bublinách.',
    placeholder: 'Napíš názov literárneho žánru',
    correctAnswerDisplay: 'balada',
    acceptedAnswers: [
      'balada',
      'umelá balada',
      'klasická balada',
      'ľudová balada',
      'fantastická balada',
      'sociálna balada',
      'epická balada',
      'veršovaná balada'
    ],
    footnote: 'Všetky odpovede v kontexte „balada“ budú vyhodnotené ako správne odpovede.',
    commonMistakes: [
      {
        pattern: 'rozpr[aá]vk',
        hint: 'Rozprávka má šťastný koniec (dobro víťazí nad zlom), zatiaľ čo hľadaný žáner má pochmúrny dej a obvykle sa končí tragicky.'
      },
      {
        pattern: 'poves',
        hint: 'Povesť sa viaže ku konkrétnej historickej udalosti, osobnosti alebo miestu – pozri si štyri znaky v bublinách a ukážku Vodník od K. J. Erbena.'
      },
      {
        pattern: '^b[aá]j$|^b[aá]ja$|^m[yý]tus$',
        hint: 'Bája (mýtus) vysvetľuje predstavy ľudí o vzniku sveta pomocou bohov. Hľadaj veršovaný epický žáner s pochmúrnym dejom, stupňovaním napätia a tragickým záverom.'
      },
      {
        pattern: '^b[aá]seň$|^po[eé]zia$|^epika$|^lyrika$',
        hint: '„Báseň“ je len označenie veršovanej formy a „epika/lyrika“ je literárny druh – zadanie žiada konkrétny literárny žáner.'
      }
    ],
    hint: 'Spoj si štyri typické znaky v bublinách (pochmúrny dej, nadprirodzené bytosti ako vodník, stupňovanie napätia a tragický záver) so známou veršovanou skladbou Vodník zo zbierky Kytica od K. J. Erbena.',
    solutionSteps: [
      {
        title: 'Určenie literárneho žánru podľa znakov a ukážky',
        text: 'Pochmúrny dej, prítomnosť magických a nadprirodzených postáv a javov (vodník), rýchle stupňovanie napätia a tragický záver sú charakteristické znaky epického (často veršovaného) žánru – **balady**. Skladba //Vodník// zo zbierky //Kytica// od Karla Jaromíra Erbena je klasickým príkladom **umelej balady**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je balada (príp. umelá balada).'
  },
  {
    id: 29,
    code: '29',
    type: 'text',
    category: 'Lexikológia (antonymá / opozitá)',
    questionText:
      'Vypíš z nasledujúcej ukážky antonymum k slovu, ktoré má význam //„uspôsobený znášať chladné podnebie a prostredie“//.\n\n//Veľmi zaujímavý je aj spoločný výskyt (prelínanie) studenomilných horských a teplomilných prvkov našej fauny a flóry. „Ďalší podrobný prieskum môže priniesť ešte nejedno prekvapenie,“ pripomenula.//',
    placeholder: 'Vypíš antonymum z ukážky',
    correctAnswerDisplay: 'teplomilných (teplomilný)',
    acceptedAnswers: [
      'teplomilných',
      'teplomilný',
      'teplomilná',
      'teplomilné',
      'teplomilného',
      'teplomilnému',
      'teplomilnom',
      'teplomilným',
      'teplomilnej',
      'teplomilnú',
      'teplomilnou',
      'teplomilní',
      'teplomilnými',
      'teplomilných prvkov',
      'teplomilné prvky',
      'teplomilný prvok'
    ],
    footnote:
      'Všetky pravopisne a gramaticky správne napísané tvary prídavného mena „teplomilných“ budú vyhodnotené ako správne odpovede.',
    commonMistakes: [
      {
        pattern: '^studenomiln',
        hint: '„Studenomilných“ je slovo, ktoré má priamo zadaný význam – úloha však žiada vypísať z ukážky jeho antonymum (slovo s opačným významom).'
      },
      {
        pattern: 'teplom[yý]ln|teplomiln[ií]ch',
        hint: 'Pozor na pravopis: koreň -mil- (od milovať / milý) má mäkké i, zatiaľ čo pádová prípona podľa vzoru pekný (pekných) má tvrdé -ých (teplomilných).'
      }
    ],
    hint: 'Postupuj v dvoch krokoch: 1. nájdi v ukážke slovo, ktoré znamená „uspôsobený znášať chladné podnebie“ (studenomilných), 2. vypíš z ukážky prídavné meno s presne opačným významom (antonymum).',
    solutionSteps: [
      {
        title: '1. krok: priradenie významu k slovu v texte',
        text: 'Význam //„uspôsobený znášať chladné podnebie a prostredie“// má v ukážke zložené prídavné meno //studenomilných// (synonymum k //chladnomilný//).'
      },
      {
        title: '2. krok: vypísanie antonyma z ukážky',
        text: '**Antonymum** je slovo s opačným významom. Opozitom k slovu //studenomilných// priamo v prvej vete ukážky je prídavné meno **teplomilných** (uznáva sa aj základný tvar **teplomilný** či iné pravopisne a gramaticky správne tvary tohto slova).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je teplomilných (príp. teplomilný).'
  },
  {
    id: 30,
    code: '30',
    type: 'choice',
    category: 'Skladba (jednočlenná a dvojčlenná veta)',
    questionText: 'V ktorej možnosti sa nachádza jednočlenná slovesná veta?',
    options: [
      { key: 'A', text: 'Poobede sa zrazu rozpršalo ako z krhly.' },
      { key: 'B', text: 'Dnes sa obloha mračí väčšmi ako zvyčajne.' },
      { key: 'C', text: 'Na našom sídlisku od rána padá sneh.' },
      { key: 'D', text: 'K hmlistému ránu sa dnes pridal aj mráz.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všetky štyri vety hovoria o počasí, no iba v jednej z nich nenájdeš žiadny podmet (ani vyjadrený, ani nevyjadrený). Skús sa v každej vete opýtať na sloveso otázkou kto? čo?.',
    solutionSteps: [
      {
        title: 'Určenie jednočlennej slovesnej vety v možnosti A',
        text: 'Vo vete **A** (//Poobede sa zrazu rozpršalo ako z krhly.//) je hlavným členom (**slovesným vetným základom**) neosobné sloveso **rozpršalo sa**, ktoré pomenúva prírodný jav. Vo vete nie je vyjadrený podmet a nijaký podmet sa do nej ani nedá doplniť – ide teda o **jednočlennú slovesnú vetu**.'
      },
      {
        title: 'Podmet a prísudok v dvojčlenných vetách B, C, D',
        text: 'Ostatné vety majú jadro rozčlenené na podmet a prísudok, takže sú **dvojčlenné úplné**:\n• B: **obloha** (podmet) **sa mračí** (prísudok),\n• C: **sneh** (podmet) **padá** (prísudok),\n• D: **mráz** (podmet) **sa pridal** (prísudok).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  }
];
