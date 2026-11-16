import type { QuestionData } from '../../types';

export const questionsPart1: QuestionData[] = [
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: 'Čítanie s porozumením (práca s infografikou)',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie je podľa ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Ľudia sú priamo zodpovední len za 10 % odpadu vo svetových oceánoch.' },
      { key: 'B', text: 'Viac ako polovica morských vtákov určite prehltla plastový odpad.' },
      { key: 'C', text: 'Všetok odpad sa pôsobením morských prúdov hromadí na morskom dne.' },
      { key: 'D', text: 'Niektoré časti plastového odpadu prenikajú do potravového reťazca.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prezri si aj texty pri ikonách v dolnej časti infografiky – všimni si, čo sa deje s mnohými plastmi po tom, ako sa rozpadnú na menšie časti.',
    solutionSteps: [
      {
        title: 'Overenie možnosti D v infografike',
        text: 'V strednom stĺpci dolnej časti infografiky sa výslovne uvádza: „**Mnohé plasty sa rozpadávajú na menšie časti, ktoré sa následne môžu dostať do potravového reťazca.**“ Tvrdenie v možnosti **D** je preto pravdivé.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – údaj **10 %** vyjadruje iba podiel **odhodeného rybárskeho výstroja**, no ľudia sú zodpovední aj za odpad z pevniny (riek, kanalizácie, pláží, lodí a člnov).\nB – odpad prehltlo približne **36 %** svetovej populácie morských vtákov, čo je **menej ako polovica** (menej než 50 %).\nC – na morskom dne sa nehromadí **všetok** odpad; morské prúdy vytvárajú zhluky odpadu vo vode a odpad sa hromadí **aj** na morskom dne a plážach.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: 'Čítanie s porozumením (práca s infografikou)',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie o odpadoch je podľa ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Celkové znečistenie oceánov spôsobuje odpad z pobrežia a pláží.' },
      { key: 'B', text: 'Výskyt rôzneho odpadu v oceánoch súvisí aj s množstvom rybárskych lodí.' },
      { key: 'C', text: 'Prehltnutie plastového odpadu závisí len od veľkosti živočícha.' },
      { key: 'D', text: 'Konzumácia plastového odpadu je zaznamenaná pri všetkých druhoch rýb.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Sleduj ilustráciu v infografike aj údaje o zdrojoch odpadu – odkiaľ pochádza približne 10 % odpadu v oceánoch a aké plavidlá sa na znečisťovaní podieľajú?',
    solutionSteps: [
      {
        title: 'Overenie možnosti B v infografike a texte',
        text: 'V infografike sa píše: „**Odpad z lodí a člnov sa takisto hromadí v oceánoch**“ a „**Približne 10 % odpadu v oceánoch tvorí odhodený rybársky výstroj**“ (aj na ilustrácii vidno rybársku loď so sieťou a v záverečnom odseku rybárske siete a povrazy stratené v mori). Výskyt odpadu v oceánoch teda priamo súvisí aj s množstvom rybárskych lodí.'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – odpad z pobrežia a pláží nespôsobuje **celkové** znečistenie oceánov; odpad prichádza aj z riek, kanalizáciou, vetrom či priamo z lodí a člnov.\nC – zvieratá si odpad mýlia s potravou v dôsledku veľkosti **samotného odpadu** („jeho veľkosti“) a jeho **prevládajúceho výskytu**, nie iba veľkosti živočícha.\nD – v infografike sa spomínajú **mnohé druhy rýb**, nie **všetky** druhy rýb.'
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
    questionText: 'Ktoré tvrdenie o vplyve odpadu v moriach a oceánoch na živočíšnu ríšu z ukážky __nevyplýva__?',
    options: [
      { key: 'A', text: 'Blokuje voľný let morských vtákov.' },
      { key: 'B', text: 'Komplikuje obranu zvierat pred útočníkmi.' },
      { key: 'C', text: 'Oslabuje organizmus zvierat morskej ríše.' },
      { key: 'D', text: 'Bráni živočíchom nadýchnuť sa nad hladinou.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozor na podčiarknuté slovo „nevyplýva“! Porovnaj možnosti s poslednými dvoma odsekmi ukážky – čo sa v nich píše o chemikáliách v plastoch a o zamotaných živočíchoch?',
    solutionSteps: [
      {
        title: 'Odhalenie tvrdenia A, ktoré z ukážky nevyplýva',
        text: 'V ukážke sa o morských vtákoch píše len to, že si odpad mýlia s potravou (prehltli ho) a že ich usmrcuje odhodený rybársky výstroj. O **blokovaní voľného letu morských vtákov** sa v texte nikde nehovorí.'
      },
      {
        title: 'Kontrola tvrdení B, C, D priamo v texte',
        text: 'B vyplýva – zamotané živočíchy nemôžu „**uniknúť predátorom**“ (útočníkom).\nC vyplýva – chemikálie v plastoch môžu zviera „**natrvalo oslabiť** alebo zahubiť“.\nD vyplýva – zamotané živočíchy sa „**nemôžu dostať na vodnú hladinu, aby sa nadýchli**“.'
      }
    ],
    solutionConclusion: 'Z ukážky nevyplýva tvrdenie v možnosti A.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: 'Čítanie s porozumením (komunikačný zámer textu)',
    sharedContextId: 'ukazka_1',
    questionText: 'Cieľom ukážky je',
    options: [
      { key: 'A', text: 'vyzvať ľudí k väčšej aktivite pri záchrane morských korytnačiek.' },
      { key: 'B', text: 'informovať o neutešenej situácii s množstvom odpadu.' },
      { key: 'C', text: 'nabádať ľudí k potrebe separovania výlučne plastového odpadu.' },
      { key: 'D', text: 'varovať pred možným zánikom života morských vtákov.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si nadpis ukážky a vecný, objektívny štýl celého textu – sústreďuje sa ukážka len na jeden druh zvierat či výzvu, alebo prináša celkový prehľad faktov o odpade v moriach?',
    solutionSteps: [
      {
        title: 'Určenie komunikačného zámeru ukážky',
        text: 'Ukážka je vecný (náučný) text doplnený infografikou. Už samotný nadpis //Aké sú zdroje a vplyvy odpadu v moriach?// naznačuje, že jej hlavným cieľom je **vecne informovať čitateľa o neutešenej situácii s narastajúcim množstvom odpadu** v moriach a oceánoch a o jeho dôsledkoch.'
      },
      {
        title: 'Prečo ostatné možnosti neplatia',
        text: 'Možnosti A, C a D neprimerane zužujú tému len na jeden detail (iba morské korytnačky, separovanie //výlučne// plastového odpadu, iba morské vtáky) a pripisujú textu výzvy, ktoré sa v ňom nenachádzajú.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: 'Tvaroslovie (stupňovanie prídavných mien)',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti sú v slovných spojeniach len prídavné mená, ktoré sa nepravidelne stupňujú?',
    options: [
      { key: 'A', text: 'malých častíc, ľudské zdravie' },
      { key: 'B', text: 'rozsiahle zhluky, svetových oceánoch' },
      { key: 'C', text: 'lepšom hospodárstve, menšie časti' },
      { key: 'D', text: 'ľudské zdravie, lepšom hospodárstve' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Spomeň si na akostné prídavné mená, ktoré v 2. a 3. stupni úplne menia svoj koreň (dobrý – lepší, zlý – horší, veľký – väčší, malý – menší, pekný – krajší). Vzťahové prídavné mená (napr. ľudské, svetových) sa nestupňujú vôbec.',
    solutionSteps: [
      {
        title: 'Nepravidelné stupňovanie v možnosti C',
        text: 'V možnosti **C** sa nachádzajú dve akostné prídavné mená v 2. stupni, ktoré sa stupňujú **nepravidelne** (menia koreň slova):\n• **lepšom** → od prídavného mena **dobrý** (//dobrý – lepší – najlepší//),\n• **menšie** → od prídavného mena **malý** (//malý – menší – najmenší//).'
      },
      {
        title: 'Prečo ostatné možnosti neplatia',
        text: 'A, D – prídavné meno **ľudské** je vzťahové, takže sa vôbec **nestupňuje**.\nB – prídavné meno **rozsiahle** sa stupňuje **pravidelne** (//rozsiahly – rozsiahlejší – najrozsiahlejší//) a **svetových** je vzťahové prídavné meno, ktoré sa **nestupňuje**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: 'Tvaroslovie a pravopis (podmieňovací spôsob slovies)',
    sharedContextId: 'ukazka_1',
    questionText:
      'V nasledujúcej vete vyhľadaj zvratné sloveso a napíš ho pravopisne správne v tvare 3. osoby množného čísla v podmieňovacom spôsobe prítomného času.\n\n//Morské zvieratá a morské vtáky si odpad mýlia s potravou v dôsledku jeho veľkosti a prevládajúceho výskytu.//',
    placeholder: 'Napíš tvar slovesa (napr. robili by si)',
    correctAnswerDisplay: 'mýlili by si',
    acceptedAnswers: ['mýlili by si', 'by si mýlili'],
    commonMistakes: [
      {
        pattern: '^m[yý]lili by$|^by m[yý]lili$',
        hint: 'Nezabudni na zvratné zámeno „si“, ktoré je súčasťou zvratného slovesa „mýliť si“.'
      },
      {
        pattern: 'm[ií]lili|m[yý]lil[yý]',
        hint: 'Slovo „mýliť si“ je vybrané slovo po m (píšeme ý), zatiaľ čo v 3. os. pl. má sloveso príponu -li s mäkkým i (mýlili by si).'
      },
      {
        pattern: 'boli by|by si boli',
        hint: 'Tvar so slovesom „boli“ je minulý čas podmieňovacieho spôsobu – zadanie žiada prítomný čas (mýlili by si).'
      },
      {
        pattern: '^m[yý]lil(a|o)? by si$|^by si m[yý]lil(a|o)?$',
        hint: 'Zadanie žiada tvar 3. osoby množného čísla (oni/ony → mýlili by si).'
      },
      {
        pattern: 'm[yý]lia by si|by si m[yý]lia',
        hint: 'Podmieňovací spôsob prítomného času sa tvorí zo slovesného tvaru s príponou -l/-li a častice „by“ (mýlili by si).'
      }
    ],
    hint: 'Zvratným slovesom vo vete je „si mýlia“ (neurčitok mýliť si). Podmieňovací spôsob prítomného času utvoríš z tvaru minulého času v 3. os. pl. (-li) a častice „by“ – nezabudni ponechať aj zvratnú zložku „si“.',
    solutionSteps: [
      {
        title: 'Vyhľadanie zvratného slovesa vo vete',
        text: 'Vo vete sa nachádza jediné sloveso – zvratné sloveso **mýlia si** (v neurčitku //mýliť si//; zvratné zámeno //si// je jeho pevnou súčasťou).'
      },
      {
        title: 'Utvorenie podmieňovacieho spôsobu prítomného času a pravopis',
        text: 'Podmieňovací spôsob prítomného času v 3. osobe množného čísla (//oni/ony//) tvoríme z tvaru minulého času (**mýlili**) + častice **by** + zvratného zámena **si**: **mýlili by si** (prípadne v slovoslede **by si mýlili**).\nPravopis: //mýliť si// je **vybrané slovo po m** (píšeme **ý**) a v množnom čísle slovesného tvaru je prípona **-li** s mäkkým **i**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je mýlili by si (alebo by si mýlili).'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: 'Tvaroslovie a pravopis (skloňovanie čísloviek a zvieracích podstatných mien)',
    sharedContextId: 'ukazka_1',
    questionText:
      'Podčiarknuté slovné spojenie v nasledujúcej vete napíš pravopisne správne v tvare akuzatívu množného čísla.\n\n//Morskí vedci pozorovali akrobatické kúsky __troch delfínov__.//',
    placeholder: 'Napíš slovné spojenie v A pl.',
    correctAnswerDisplay: 'tri delfíny',
    acceptedAnswers: ['tri delfíny'],
    commonMistakes: [
      {
        pattern: '^troch delf[ií]nov$',
        hint: 'Zvieracie podstatné mená mužského rodu (okrem psi, vlci, vtáci v N pl.) sú v množnom čísle neživotné a skloňujú sa podľa vzoru dub – opýtaj sa: vidím (koho? čo?) ...'
      },
      {
        pattern: '^traja delf|^tri delf[ií]ni$',
        hint: 'V množnom čísle sa zvieracie podstatné meno „delfín“ skloňuje ako neživotné podľa vzoru dub, preto má príponu -y.'
      },
      {
        pattern: '^3 delf',
        hint: 'Číslovku zapíš slovom (tri), aby bolo viditeľné jej správne skloňovanie v akuzatíve.'
      },
      {
        pattern: 'delf[yý]n|delfin',
        hint: 'Pozor na pravopis slova „delfíny“: po f sa píše dlhé mäkké í a na konci v A pl. vzoru dub tvrdé -y.'
      }
    ],
    hint: 'Pozor na skloňovanie zvieracích podstatných mien mužského rodu! V jednotnom čísle je „delfín“ životný (vzor chlap), ale v množnom čísle je neživotný a skloňuje sa podľa vzoru dub (ako stromy, duby). Aký tvar má potom v akuzatíve (vidím koho? čo?) aj číslovka?',
    solutionSteps: [
      {
        title: 'Skloňovanie zvieracieho podstatného mena delfín v množnom čísle',
        text: 'Zvieracie podstatné mená mužského rodu sú v jednotnom čísle životné (vzor //chlap//: //vidím jedného delfína//), ale **v množnom čísle sú neživotné** a skloňujú sa podľa vzoru **dub** (//tie duby → tie delfíny//). V akuzatíve množného čísla (//pozorovali koho? čo?//) má preto slovo tvar **delfíny** s tvrdým **-y**.'
      },
      {
        title: 'Tvar základnej číslovky tri',
        text: 'Keďže podstatné meno //delfíny// je v množnom čísle gramaticky **neživotné**, aj základná číslovka //tri// má pri ňom v akuzatíve neživotný tvar **tri** (nie životný tvar //troch//): //pozorovali// **tri delfíny**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je tri delfíny.'
  },
  {
    id: 8,
    code: '08',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie o firme Lego je podľa ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Podľa počtu vyrobených hračiek je firma Lego piata na svete.' },
      { key: 'B', text: 'Firma Lego od svojho založenia dva razy vyhorela.' },
      { key: 'C', text: 'Najväčšiu finančnú stratu spôsobila firme hospodárska kríza.' },
      { key: 'D', text: 'Výrobky sa predávajú mimo Dánska od roku 1955.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Skontroluj si v časovom prehľade rok založenia samotnej firmy Lego (1934), záznam pri roku 1955 (čo je domácim trhom firmy?) a záznam pri roku 2009.',
    solutionSteps: [
      {
        title: 'Overenie možnosti D pri roku 1955',
        text: 'Firma Lego vznikla v **Dánsku** (jej domácim trhom je Dánsko). Pri roku **1955** čítame: „**Firma ide prvýkrát za hranice domáceho trhu** a rozširuje svoje pôsobenie aj do Švédska.“ Výrobky sa teda predávajú mimo Dánska od roku 1955.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – v roku 2009 je Lego piatym najväčším svetovým výrobcom hračiek **z hľadiska tržieb**, nie podľa počtu vyrobených hračiek.\nB – samotná firma **Lego** vznikla až v roku **1934**; požiar v roku 1924 zasiahol Christiansenovu tesársku dielňu ešte **pred založením** firmy Lego, takže od svojho založenia vyhorela iba raz (v roku 1960).\nC – hospodárska kríza spôsobila takmer krach Christiansenovmu **tesárskemu obchodu** pred vznikom firmy Lego, nie najväčšiu stratu samotnej firme Lego.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie je podľa ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Prvé hračky boli napodobeninami skutočného nábytku.' },
      { key: 'B', text: 'Prvé stavebnice firmy Lego boli vyrobené z dreva.' },
      { key: 'C', text: 'Christiansen odovzdal tradíciu stolárstva svojmu synovi.' },
      { key: 'D', text: 'Dôvodom na výrobu hračiek bol zvýšený dopyt.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Prepoj si záznamy z rokov 1932 a 1934 – aké výrobky Christiansen vyrábal v roku 1932 a čoho drevené miniatúry začal vyrábať v roku 1934?',
    solutionSteps: [
      {
        title: 'Overenie možnosti A pri rokoch 1932 a 1934',
        text: 'V roku 1932 Christiansen vyrábal nábytok (//stoličky, stoly, postele a rôzne skrine//) a v roku 1934 „kvôli zníženiu nákladov vyrába už len **drevené miniatúry svojich výrobkov, teda hračky**“. Prvé hračky boli teda zmenšenými napodobeninami skutočného nábytku.'
      },
      {
        title: 'Vylúčenie možností B, C, D',
        text: 'B – z dreva sa vyrábali prvé hračky (miniatúry nábytku), no prvé **stavebnice** začalo Lego vyrábať až v roku 1949 ako **plastové stavebnice**.\nC – o odovzdaní stolárskej tradície synovi sa v ukážke vôbec nepíše.\nD – dôvodom na výrobu hračiek v roku 1934 bolo **zníženie nákladov** počas hospodárskej krízy, nie zvýšený dopyt.'
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
    questionText: 'Ktorý z dôvodov na základe ukážky __neovplyvnil__ vznik hračkárskej firmy Lego?',
    options: [
      { key: 'A', text: 'hrozba krachu' },
      { key: 'B', text: 'hospodárska kríza' },
      { key: 'C', text: 'požiar dielne' },
      { key: 'D', text: 'šetrenie financií' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si pozorne záznam pri roku 1934, keď vznikla firma Lego – ktoré tri príčiny sú v ňom priamo spomenuté a ktorá udalosť sa odohrala v úplne inom období?',
    solutionSteps: [
      {
        title: 'Rozbor príčin vzniku firmy Lego v roku 1934',
        text: 'Pri roku **1934** sa uvádza: „V tomto roku vzniká úplne nová firma – Lego. **Veľká hospodárska kríza** (B) totiž tesárskemu obchodu spôsobila **takmer krach** (A) a Christiansen **kvôli zníženiu nákladov** (D – šetrenie financií) vyrába už len drevené miniatúry svojich výrobkov, teda hračky.“'
      },
      {
        title: 'Prečo požiar dielne neovplyvnil vznik firmy',
        text: 'Požiar v tesárskej dielni sa odohral už v roku **1924** (desať rokov pred vznikom firmy Lego) a ďalší požiar v roku **1960** zničil drevené hračky až 26 rokov po založení firmy. **Požiar dielne** (C) teda vznik hračkárskej firmy Lego neovplyvnil.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: 'Lexikológia (cudzie slová a synonymá)',
    sharedContextId: 'ukazka_2',
    questionText:
      'V ktorej možnosti sú uvedené slová, ktorými je možné nahradiť podčiarknuté výrazy v nasledujúcej vete tak, aby bol zachovaný jej význam?\n\n//Hračky ich vyniesli medzi __top__ hračkárske firmy na svete a v čase najväčšieho __boomu__ zamestnávali viac ako šesťtisíc ľudí.//',
    options: [
      { key: 'A', text: 'najúspešnejšie, zisku' },
      { key: 'B', text: 'špičkové, rozmachu' },
      { key: 'C', text: 'najlepšie, výkonu' },
      { key: 'D', text: 'vysoké, výbuchu' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Dosadzuj si dvojice slov priamo do vety – zvlášť si postráž druhé prevzaté slovo „boom“ [búm], ktoré v hospodárstve označuje prudký vzostup a rozkvet podniku.',
    solutionSteps: [
      {
        title: 'Význam prevzatých slov top a boom',
        text: '• Anglicizmus **top** (v spojení //top firmy//) znamená **špičkové**, popredné, najlepšie.\n• Prevzaté slovo **boom** [búm] v ekonomickom kontexte (//v čase najväčšieho boomu//) pomenúva obdobie prudkého hospodárskeho vzostupu, teda **rozmachu** (rozkvetu).'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'Slová //zisku// (A), //výkonu// (C) ani doslovný preklad //výbuchu// so slovom //vysoké// (D) nevystihujú presný význam oboch podčiarknutých slov vo vete.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: 'Pravopis (veľké písmená a pádové prípony prídavných mien)',
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti sú slovné spojenia napísané pravopisne správne?',
    options: [
      { key: 'A', text: 'Švédsky kráľ, Spojené štáty americké' },
      { key: 'B', text: 'Dánsky výrobcovia, Christiansenove rodisko' },
      { key: 'C', text: 'švédsky kráľ, Spojené štáty Americké' },
      { key: 'D', text: 'dánski výrobcovia, Christiansenovo rodisko' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Skontroluj si tri pravidlá: 1. vzťahové prídavné mená od názvov štátov (dánsky, švédsky) sa píšu s malým písmenom; 2. v N pl. mužského životného rodu vzoru pekný je mäkké -i; 3. akú príponu má vzor otcov pri strednom rode (to rodisko)?',
    solutionSteps: [
      {
        title: 'Overenie pravopisu v možnosti D',
        text: '• **dánski výrobcovia** – vzťahové prídavné meno od názvu štátu píšeme s **malým začiatočným písmenom** a v nominatíve množného čísla mužského životného rodu (vzor //pekný → pekní výrobcovia//) má mäkkú príponu **-i**.\n• **Christiansenovo rodisko** – individuálne privlastňovacie prídavné meno od priezviska muža píšeme s **veľkým začiatočným písmenom** a v strednom rode jednotného čísla (//to rodisko//, vzor //otcov → otcovo rodisko//) má príponu **-ovo**.'
      },
      {
        title: 'Chyby v možnostiach A, B, C',
        text: 'A – chybné veľké písmeno v spojení „Švédsky kráľ“ (správne: **švédsky kráľ**).\nB – tri chyby: veľké písmeno a tvrdé //-y// v „Dánsky výrobcovia“ a prípona množného čísla //-ove// v „Christiansenove rodisko“.\nC – vo viacslovnom názve štátu **Spojené štáty americké** sa prídavné meno **americké** píše s **malým začiatočným písmenom** (nie je samostatným vlastným menom).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 13,
    code: '13',
    type: 'text',
    category: 'Lexikológia (synonymá)',
    sharedContextId: 'ukazka_2',
    questionText: 'Vypíš z ukážky synonymum slova //bankrot//.',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'krach',
    acceptedAnswers: ['krach'],
    commonMistakes: [
      {
        pattern: 'takmer krach|hrozba krachu',
        hint: 'Vypíš iba samotné jednoslovné synonymum slova „bankrot“ priamo z ukážky.'
      },
      {
        pattern: '^kr[ií]z',
        hint: '„Kríza“ pomenúva ťažké hospodárske obdobie, nie samotný úpadok (bankrot) firmy – pozri sa do druhej vety pri roku 1934.'
      },
      {
        pattern: '^krachu$|^krachom$',
        hint: 'Vypíš slovo presne v tom tvare, v akom sa nachádza v ukážke pri roku 1934.'
      }
    ],
    hint: 'Slovo „bankrot“ znamená finančný úpadok podniku. Hľadaj v zázname pri roku 1934 jednoslovné podstatné meno s rovnakým významom.',
    solutionSteps: [
      {
        title: 'Vyhľadanie synonyma v ukážke',
        text: 'Slovo //bankrot// označuje finančný úpadok, platobnú neschopnosť podniku. Pri roku **1934** čítame: „Veľká hospodárska kríza totiž tesárskemu obchodu spôsobila takmer **krach**...“ Synonymom slova //bankrot// v ukážke je teda slovo **krach**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je krach.'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: 'Tvaroslovie a slovotvorba (tvorenie prísloviek)',
    sharedContextId: 'ukazka_2',
    questionText:
      'Utvor z akostného prídavného mena v nasledujúcej vete príslovku a napíš ju pravopisne správne.\n\n//Lego začína vyrábať vzácny produkt – plastové stavebnice.//',
    placeholder: 'Napíš utvorenú príslovku',
    correctAnswerDisplay: 'vzácne',
    acceptedAnswers: ['vzácne'],
    commonMistakes: [
      {
        pattern: '^vz[aá]cno$',
        hint: 'Od prídavného mena „vzácny“ sa v spisovnej slovenčine tvorí príslovka príponou -e, nie -o.'
      },
      {
        pattern: 'plastov',
        hint: 'Slovo „plastové“ je vzťahové prídavné meno (vyjadruje látku, z ktorej sú stavebnice vyrobené). Akostným prídavným menom vo vete je „vzácny“.'
      },
      {
        pattern: '^vz[aá]cn[yý]$',
        hint: '„Vzácny“ je prídavné meno (aký?) – utvor z neho príslovku (ako?).'
      }
    ],
    hint: 'Vo vete sú dve prídavné mená: „vzácny“ a „plastové“. Najprv rozlíš, ktoré z nich je akostné (dá sa stupňovať), a potom sa pri ňom opýtaj príslovkovou otázkou ako?.',
    solutionSteps: [
      {
        title: 'Rozlíšenie akostného a vzťahového prídavného mena',
        text: 'Vo vete sa nachádzajú dve prídavné mená: **vzácny** a **plastové**. Slovo //plastové// je vzťahové prídavné meno (pomenúva pôvod z látky //plast// a nestupňuje sa). **Akostným prídavným menom** je slovo **vzácny** (vyjadruje vlastnosť a stupňuje sa: //vzácny – vzácnejší – najvzácnejší//).'
      },
      {
        title: 'Utvorenie príslovky',
        text: 'Od akostného prídavného mena //vzácny// tvoríme príslovku spôsobu (pýtame sa //ako?//) slovotvornou príponou **-e**: **vzácne**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je vzácne.'
  }
];
