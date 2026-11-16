import type { QuestionData } from '../../types';

export const questionsPart2: QuestionData[] = [
  {
    id: 15,
    code: '15',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'Podľa ukážky stravomat',
    options: [
      { key: 'A', text: 'vždy prispôsobí nápoj potrebám klienta.' },
      { key: 'B', text: 'nepatrí medzi najmodernejšiu výbavu lode.' },
      { key: 'C', text: 'poskytuje teplý pokrm všetkým na lodi.' },
      { key: 'D', text: 'nalieva nápoje automaticky do porcelánu.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si pozorne prvý odsek ukážky – akými slovami autor opisuje tento prístroj na kozmickej lodi a do čoho nápoj vydával?',
    solutionSteps: [
      {
        title: 'Overenie možnosti B v 1. odseku',
        text: 'V druhej vete 1. odseku sa píše, že jediným zdrojom teplých nápojov na celej kozmickej lodi je „**zaostalý kus zariadenia** – stravomatický syntetizátor nápojov“. Ak je zariadenie zaostalé, nepatrí medzi najmodernejšiu výbavu lode.'
      },
      {
        title: 'Vylúčenie možností A, C, D',
        text: 'A – prístroj to o sebe iba tvrdil, no v skutočnosti Arthurovi zakaždým vydal „nepitnú brečku“, ktorá sa vôbec nepodobala na čaj.\nC – stravomat bol zdrojom teplých **nápojov**, nie teplého pokrmu (jedla).\nD – nápoje nevydával v porceláne, ale zakaždým vydal **plastový pohár**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 16,
    code: '16',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_3',
    questionText: 'V ktorej možnosti je __nesprávne__ tvrdenie o Arthurovi?',
    options: [
      { key: 'A', text: 'Túžil po čaji, ktorý je dostupný na Zemi.' },
      { key: 'B', text: 'Bol nadšený, keď rozprával o niečom, čo mal rád.' },
      { key: 'C', text: 'Poznal proces prípravy kvalitného čaju.' },
      { key: 'D', text: 'Vyjednávanie so stravomatom celkom vzdal.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pozor na podčiarknuté slovo „nesprávne“! Pozri sa, čo Arthur urobil po tom, ako zahodil šiesty pohár hnedej tekutiny – odišiel alebo pokračoval v presviedčaní stroja?',
    solutionSteps: [
      {
        title: 'Odhalenie nepravdivého tvrdenia D',
        text: 'Arthur vyjednávanie so stravomatom **nevzdal** – hoci zahodil šiesty nepodarený pohár, povedal stroju „Buď ticho a počúvaj“, posadil sa a trpezlivo mu vykladal všetko o čaji, až kým prístroj nepochopil, aký nápoj si želá.'
      },
      {
        title: 'Prečo sú tvrdenia A, B, C pravdivé',
        text: 'A – túžil po obyčajnom pozemskom čaji (rozprával o Indii, Číne, Cejlóne a kravskom mlieku).\nB – v texte stojí: „Posadil sa a začal **oduševnene** rozprávať stravomatu...“ (//oduševnene// = nadšene).\nC – vedel, ako sa lístky sušia na slnku aj prečo sa mlieko nalieva skôr než čaj, aby sa nezavarilo.'
      }
    ],
    solutionConclusion: 'Nesprávne tvrdenie o Arthurovi je v možnosti D.'
  },
  {
    id: 17,
    code: '17',
    type: 'choice',
    category: 'Sloh (slohové postupy – výkladový)',
    sharedContextId: 'ukazka_3',
    questionText: 'Keď Arthur vykladal stravomatu o čaji, znamená to, že',
    options: [
      { key: 'A', text: 'rozprával príbeh, ktorý sa už niekedy stal.' },
      { key: 'B', text: 'vysvetľoval isté postupy, objasňoval fakty.' },
      { key: 'C', text: 'vymenoval znaky a vlastnosti osôb a vecí.' },
      { key: 'D', text: 'dbal na gestikuláciu a kontakt s adresátom.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Všimni si sloveso „vykladal“ (v ukážke „keď skončil s výkladom“) a priraď k nemu znaky výkladového slohového postupu.',
    solutionSteps: [
      {
        title: 'Podstata výkladu (výkladového slohového postupu)',
        text: 'Sloveso **vykladať** (robiť **výklad**) znamená zrozumiteľne **vysvetľovať postupy, príčiny, súvislosti a objasňovať fakty** – presne tak Arthur stravomatu vysvetľoval pôvod čaju, spôsob sušenia lístkov aj príčinu, prečo sa mlieko nalieva skôr než čaj (aby sa nezavarilo).'
      },
      {
        title: 'Rozlíšenie ostatných možností',
        text: 'A – rozprávanie príbehu je znakom **rozprávacieho** slohového postupu.\nC – vymenovanie znakov a vlastností je podstatou **opisného** slohového postupu.\nD – gestikulácia a očný kontakt patria k prednesu rečníckeho prejavu, nie k samotnému významu slova //vykladať//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 18,
    code: '18',
    type: 'choice',
    category: 'Literatúra (rozprávač – on-rozprávanie)',
    sharedContextId: 'ukazka_3',
    questionText:
      'Na základe ktorej časti vety z ukážky sa dá určiť spôsob rozprávania (ja-rozprávanie alebo on-rozprávanie)?',
    options: [
      { key: 'A', text: 'Ty tvrdíš, že vieš syntetizovať akýkoľvek existujúci nápoj.' },
      { key: 'B', text: 'Robíš si zo mňa asi žarty.' },
      { key: 'C', text: 'Arthur zahodil šiesty pohár hnedej tekutiny.' },
      { key: 'D', text: 'Ochutnajte a podeľte sa.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Spôsob rozprávania určujeme vždy z viet rozprávača (mimo úvodzoviek), nikdy nie z priamej reči postáv! Ktorá z možností nepatrí do priamej reči?',
    solutionSteps: [
      {
        title: 'Pásmo rozprávača verzus pásmo postáv',
        text: 'Typ rozprávača (**ja-rozprávanie** v 1. osobe alebo **on-rozprávanie** v 3. osobe) zisťujeme výlučne v **pásme rozprávača** – teda v texte mimo priamej reči postáv. V priamej reči (v úvodzovkách) sa postavy bežne oslovujú v 1. a 2. osobe aj vtedy, keď príbeh rozpráva vševediaci rozprávač v 3. osobe.'
      },
      {
        title: 'Kontrola možností A – D',
        text: 'A, B – vety z **priamej reči** Arthura Denta.\nC – veta z **pásma rozprávača** („Arthur **zahodil** šiesty pohár hnedej tekutiny.“). Sloveso v 3. osobe jednotného čísla (//on zahodil//) jednoznačne určuje **on-rozprávanie**.\nD – veta z **priamej reči** (reklamný slogan) stravomatu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 19,
    code: '19',
    type: 'choice',
    category: 'Tvaroslovie (slovné druhy – zámená)',
    sharedContextId: 'ukazka_3',
    questionText:
      'V ktorej možnosti je vyznačené slovo rovnakým slovným druhom ako v nasledujúcej vete?\n//Takže o **to** tu ide?//',
    options: [
      { key: 'A', text: 'Chcem od **teba** iba šálku čaju.' },
      { key: 'B', text: 'Vylúhovaných **vo** vrelej vode.' },
      { key: 'C', text: 'Mlieko sa nalieva skôr **než** čaj.' },
      { key: 'D', text: 'Dá sa to povedať **asi** aj takto.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si, že vo vete „Takže o to tu ide?“ stojí slovo „to“ po predložke „o“ – pýtame sa naň „o čo ide?“ a zastupuje vec, o ktorej Arthur rozprával. Ktorá možnosť obsahuje rovnaký slovný druh?',
    solutionSteps: [
      {
        title: 'Určenie slovného druhu vo vzorovej vete',
        text: 'Vo vete //Takže o **to** tu ide?// stojí slovo **to** v predložkovom akuzatíve (pýtame sa: //o koho? o čo?// → //o to//) a odkazuje na celú skutočnosť (prípravu čaju), o ktorej Arthur práve hovoril. Ide teda o **zámeno** (ukazovacie).'
      },
      {
        title: 'Určenie slovných druhov v možnostiach A – D',
        text: 'A – //od **teba**// (od koho? od teba – tvar osobného zámena //ty// v genitíve) → **zámeno** – **zhoda**.\nB – //**vo** vrelej vode// → vokalizovaná **predložka**.\nC – //skôr **než** čaj// → porovnávacia **spojka**.\nD – //povedať **asi** aj takto// → **častica** (vyjadruje odhad/pravdepodobnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 20,
    code: '20',
    type: 'text',
    category: 'Lexikológia (opozitá a práca s textom)',
    sharedContextId: 'ukazka_3',
    questionText:
      'Vypíš z prvého odseku ukážky slovo s opačným významom k slovu, ktoré označuje //sklon posudzovať skutočnosti z horšej stránky//.',
    placeholder: 'Vypíš slovo z 1. odseku',
    correctAnswerDisplay: 'optimizmom',
    acceptedAnswers: [
      'optimizmom',
      'Optimizmom',
      'optimizmus',
      'Optimizmus',
      'optimizmu',
      'Optimizmu',
      'optimizme',
      'Optimizme',
      's optimizmom',
      'S optimizmom'
    ],
    footnote:
      'Odpovede na túto úlohu môžu byť zapísané v akomkoľvek gramatickom tvare, ale musia byť pravopisne správne.',
    commonMistakes: [
      {
        pattern: '^pesimizm',
        hint: 'Pesimizmus je slovo zodpovedajúce zadanej definícii – z 1. odseku máš vypísať slovo s opačným významom (opozitum).'
      },
      {
        pattern: 'opt[yý]m|optim[yý]z',
        hint: 'Slovo cudzieho pôvodu „optimizmus“ sa píše po t aj po m s mäkkým i.'
      },
      {
        pattern: 'optimism',
        hint: 'V slovenčine sa prípona -izmus píše so z (optimizmom / optimizmus), nie so s.'
      }
    ],
    hint: 'Najprv si pomenuj vlastnosť človeka, ktorý vidí všetko čierne a z horšej stránky (pesimizmus). Potom v druhej vete 1. odseku nájdi slovo s presne opačným významom.',
    solutionSteps: [
      {
        title: 'Pomenovanie pojmu a jeho opozita',
        text: 'Sklon posudzovať skutočnosti z horšej stránky sa nazýva **pesimizmus**. Slovo s opačným významom (opozitum – sklon vidieť veci z lepšej, priaznivejšej stránky) je **optimizmus**.'
      },
      {
        title: 'Vyhľadanie slova v 1. odseku ukážky',
        text: 'V druhej vete 1. odseku čítame: „Na túto výpravu sa už vopred nepozeral s veľkým **optimizmom**...“ Uznáva sa tvar priamo z textu (**optimizmom**) aj základný tvar (**optimizmus**), prípadne iný gramaticky a pravopisne správny tvar tohto slova.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je optimizmom (alebo optimizmus).'
  },
  {
    id: 21,
    code: '21',
    type: 'text',
    category: 'Pravopis (vybrané slová a pádové prípony)',
    sharedContextId: 'ukazka_3',
    diagramId: 'q21_text',
    questionText: 'Napíš všetky tri vyznačené slová so správne doplnenými i/í/y/ý.',
    placeholder: 'Napíš 3 slová (napr. slovo1, slovo2, slovo3)',
    correctAnswerDisplay: 'zmesi, byliny, obilnín',
    acceptedAnswers: ['zmesi byliny obilnín', 'zmesi, byliny, obilnín', 'Zmesi – Byliny – Obilnín'],
    unorderedWords: ['zmesi', 'byliny', 'obilnín'],
    footnote:
      'Za správnu odpoveď budú uznané uvedené tri slová v ktoromkoľvek poradí a akýmkoľvek spôsobom zápisu, resp. spôsobom oddelenia slov.',
    commonMistakes: [
      {
        pattern: 'zmes[yý]',
        hint: 'Podstatné meno ženského rodu „zmes“ sa skloňuje podľa vzoru kosť, preto má v množnom čísle mäkké -i (zmesi).'
      },
      {
        pattern: 'b[ií]lin|byl[yý]n|bylin[ií]',
        hint: 'Slovo „bylina“ je vybrané slovo po b (po b je y, po l je i) a v množnom čísle podľa vzoru žena má na konci tvrdé -y (byliny).'
      },
      {
        pattern: 'ob[yý]ln|obiln[yý]n',
        hint: 'Slovo „obilnina“ (od obilie) nie je vybrané slovo po b – v koreni aj v prípone má mäkké i/í (obilnín).'
      }
    ],
    hint: 'Urči si vzor každého zo 3 podstatných mien ženského rodu: 1. tá zmes (vzor kosť), 2. tá bylina (vybrané slovo po b, vzor žena), 3. tá obilnina (nie je vybrané slovo po b, v G pl. vzoru žena sa posledná slabika predlžuje).',
    solutionSteps: [
      {
        title: '1. slovo: zmesi',
        text: 'Podstatné meno ženského rodu //tá zmes// (G sg. //bez zmesi//) sa skloňuje podľa vzoru **kosť**. V akuzatíve množného čísla (//obsahoval zaujímavé kosti → zmesi//) píšeme mäkké **-i**: **zmesi**.'
      },
      {
        title: '2. slovo: byliny',
        text: 'Podstatné meno //bylina// je **vybrané slovo po b** (koreň //byl-// má tvrdé **y**), za mäkkou spoluhláskou //l// nasleduje mäkké **i** a v nominatíve množného čísla podľa vzoru **žena** (//ženy//) píšeme na konci tvrdé **-y**: **byliny**.'
      },
      {
        title: '3. slovo: obilnín',
        text: 'Slovo //obilnina// (od slova //obilie//) **nie je** vybrané slovo po b, preto po //b// píšeme mäkké **i**. Vo vete stojí v genitíve množného čísla (//kombinácia rôznych obilnín//) podľa vzoru **žena**, kde sa pred nulovou pádovou príponou predlžuje samohláska v poslednej slabike (//malina → malín, hodina → hodín, obilnina →// **obilnín**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je zmesi, byliny, obilnín.'
  },
  {
    id: 22,
    code: '22',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_4',
    questionText: 'Ktoré tvrdenie je podľa textu pravdivé?',
    options: [
      { key: 'A', text: 'Film je premiérou režiséra Ridleyho Scotta vo filmovej brandži.' },
      { key: 'B', text: 'Jedinou témou, ktorú film zobrazuje, sú veľké vojenské úspechy.' },
      { key: 'C', text: 'Napoleon mal premyslené taktiky, niektoré sa dovtedy nevyužívali.' },
      { key: 'D', text: 'Ide o prvú časť dvojdielnej drámy, v ktorej zobrazuje vzostup cisára.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si v texte prídavné mená „systematické“ a „vizionárske“ pri Napoleonových taktikách a porovnaj ostatné možnosti s prvou a druhou vetou ukážky.',
    solutionSteps: [
      {
        title: 'Overenie možnosti C v texte',
        text: 'V texte sa píše, že film mapuje Napoleonove „**systematické vizionárske** vojenské a politické taktiky“. Slovo //systematické// znamená premyslené, usporiadané a slovo //vizionárske// znamená predvídavé, priekopnícke (také, ktoré predbehli dobu a dovtedy sa nevyužívali).'
      },
      {
        title: 'Vylúčenie možností A, B, D',
        text: 'A – Ridley Scott je predstavený ako jeden z najuznávanejších režisérov sveta (//Gladiátor, Marťan//), nejde teda o jeho prvý film.\nB – film zachytáva nielen vojenské úspechy, ale aj cisárov **pád**, politické taktiky a vzťah s jeho láskou Jozefínou.\nD – o dvojdielnej dráme sa v texte nič nepíše a samotný film zobrazuje „vzostup **a pád** francúzskeho cisára“, nie iba vzostup.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 23,
    code: '23',
    type: 'choice',
    category: 'Tvaroslovie (prídavné mená – privlastňovacie)',
    sharedContextId: 'ukazka_4',
    questionText: 'V ktorej možnosti je privlastňovacie prídavné meno z textu?',
    options: [
      { key: 'A', text: 'Scottových záberov' },
      { key: 'B', text: 's láskou Jozefínou' },
      { key: 'C', text: 'francúzskeho cisára' },
      { key: 'D', text: 'bojových scén' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Na privlastňovacie prídavné mená sa pýtame otázkou „čí? čia? čie?“ (nie „aký?“). V ktorej možnosti privlastňujeme niečo konkrétnej osobe?',
    solutionSteps: [
      {
        title: 'Určenie privlastňovacieho prídavného mena pomocou otázky',
        text: 'Na **privlastňovacie prídavné mená** sa pýtame otázkou **čí? čia? čie? (čích?)**. V možnosti A sa pýtame: //čích záberov?// → **Scottových** záberov (individuálne privlastňovacie prídavné meno utvorené od priezviska režiséra //Scott → Scottov//, skloňuje sa podľa vzoru **otcov**).'
      },
      {
        title: 'Kontrola ostatných možností',
        text: 'B – //s láskou Jozefínou// – predložka a dve podstatné mená (žiadne prídavné meno).\nC – //francúzskeho cisára// (//akého?//) – **vzťahové** prídavné meno (vzor //pekný//).\nD – //bojových scén// (//akých?//) – **vzťahové** prídavné meno (vzor //pekný//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 24,
    code: '24',
    type: 'text',
    category: 'Tvaroslovie a pravopis (zvieracie podstatné mená)',
    questionText: 'Dopíš do nasledujúcej vety slovné spojenie //unikátny sob// v správnom tvare množného čísla.',
    fillSentenceHtml:
      '//Počas expedície po severských krajinách členovia výpravy s úžasom sledovali// {{blank}} //v zasneženej divokej prírode.//',
    placeholder: 'Dopíš slovné spojenie v množnom čísle',
    correctAnswerDisplay: 'unikátne soby',
    acceptedAnswers: ['unikátne soby', 'Unikátne soby'],
    commonMistakes: [
      {
        pattern: 'unikátn(ych|ých)\\s+sobov',
        hint: 'Zvieracie podstatné mená mužského rodu sa v množnom čísle skloňujú ako neživotné podľa vzoru dub – pýtame sa koho/čo sledovali? (ako pekné duby).'
      },
      {
        pattern: '\\bsobi$',
        hint: 'V množnom čísle sa zvieracie podstatné meno „sob“ skloňuje podľa neživotného vzoru dub, preto má na konci tvrdé -y (soby).'
      },
      {
        pattern: '^unikátn[yýií]\\s+soby$',
        hint: 'Prídavné meno sa v množnom čísle zhoduje s neživotným vzorom dub podľa vzoru pekný (pekné duby → unikátne soby).'
      }
    ],
    hint: 'Pozor na pravidlo o zvieracích podstatných menách mužského rodu: v jednotnom čísle sa skloňujú podľa vzoru chlap, ale v množnom čísle ako neživotné podľa vzoru dub (sledovali koho/čo? – ako pekné duby)!',
    solutionSteps: [
      {
        title: 'Skloňovanie zvieracieho podstatného mena „sob“ v množnom čísle',
        text: 'Podstatné meno **sob** je zvieracie podstatné meno mužského rodu. Hoci sa v jednotnom čísle skloňuje podľa vzoru //chlap// (//sledovali unikátneho soba//), v **množnom čísle** sa zvieracie podstatné mená mužského rodu zakončené na tvrdú alebo obojakú spoluhlásku skloňujú ako **neživotné podľa vzoru dub**.'
      },
      {
        title: 'Určenie pádu vo vete a zhoda prídavného mena',
        text: 'Vo vete sa pýtame: //sledovali koho? čo?// – ide o **akuzatív množného čísla**. Podľa vzoru //dub// má podstatné meno tvar **soby** (s tvrdým **-y**) a prídavné meno sa s ním zhoduje podľa vzoru //pekný// (//pekné duby// → **unikátne soby**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je unikátne soby.'
  },
  {
    id: 25,
    code: '25',
    type: 'text',
    category: 'Tvaroslovie (neohybné slovné druhy – príslovky)',
    questionText:
      'Vypíš z nasledujúcej vety plnovýznamové slovo, ktoré patrí medzi neohybné slovné druhy.\n//Autor bestsellerov, ktorý píše majstrovsky, potrebuje okrem výnimočných námetov disponovať ešte aj bohatou slovnou zásobou.//',
    placeholder: 'Vypíš slovo z vety',
    correctAnswerDisplay: 'majstrovsky',
    acceptedAnswers: ['majstrovsky', 'Majstrovsky'],
    commonMistakes: [
      {
        pattern: '^(okrem|ešte|aj)$',
        hint: 'Slová „okrem“ (predložka) a „ešte“, „aj“ (častice) sú síce neohybné, ale neplnovýznamové. Jediným plnovýznamovým neohybným slovným druhom je príslovka (pýtaj sa: ako píše?).'
      },
      {
        pattern: '^disponova[ťt]$',
        hint: '„Disponovať“ je sloveso v neurčitku – slovesá sa časujú, preto patria medzi ohybné slovné druhy.'
      },
      {
        pattern: '^majstrovsk[ýáé]$',
        hint: 'Vypíš slovo presne z vety s krátkym -y na konci – s dlhým -ý by išlo o ohybné prídavné meno, kým vo vete je príslovka „majstrovsky“.'
      }
    ],
    hint: 'Spomeň si, ktorý je jediný slovný druh, čo je zároveň plnovýznamový aj neohybný – sú to príslovky! Spýtaj sa na sloveso „píše“ otázkou „Ako píše?“. ',
    solutionSteps: [
      {
        title: 'Ktorý neohybný slovný druh je plnovýznamový',
        text: 'Neohybné slovné druhy sú príslovky, predložky, spojky, častice a citoslovcia. Spomedzi nich sú **plnovýznamové iba príslovky** – pomenúvajú okolnosti deja a vo vete sú samostatným vetným členom (príslovkovým určením).'
      },
      {
        title: 'Vyhľadanie príslovky vo vete',
        text: 'Vo vedľajšej vete //ktorý píše **majstrovsky**// sa pýtame: //ako píše?// → **majstrovsky** (príslovka spôsobu, na konci má krátke **-y**). Ostatné neohybné slová vo vete (//okrem// – predložka; //ešte, aj// – častice) sú neplnovýznamové a sloveso //disponovať// patrí medzi ohybné slovné druhy.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je majstrovsky.'
  },
  {
    id: 26,
    code: '26',
    type: 'choice',
    category: 'Skladba (vetné členy a ich poradie)',
    questionText:
      'V ktorej možnosti sú vetné členy v rovnakom poradí ako v nasledujúcej vete?\n//Na istej lekárskej fakulte dal profesor anatómie študentom test.//',
    options: [
      { key: 'A', text: 'Na historicky prvom mikroskope nám vedec predviedol zaujímavý preparát.' },
      { key: 'B', text: 'V korune bútľavého stromu si veverička chystá zásoby na zimu.' },
      { key: 'C', text: 'Na miestnej zrekonštruovanej ceste žiaril semafor vo funkčne novom svetle.' },
      { key: 'D', text: 'V malej horskej dedine poskytol starosta obce obyvateľom pomoc.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Urči si poradie vetných členov vo vzorovej vete: 1. kde? (s dvoma zhodnými prívlastkami) → 2. prísudok → 3. podmet + nezhodný prívlastok (dve podstatné mená pri sebe) → 4. komu? (predmet) → 5. čo? (predmet).',
    solutionSteps: [
      {
        title: 'Rozbor vzorovej vety člen po člene',
        text: '1. **Na istej lekárskej fakulte** – zhodný prívlastok (//istej//) + zhodný prívlastok (//lekárskej//) + príslovkové určenie miesta (//Na ... fakulte// – kde?).\n2. **dal** – slovesný prísudok (čo urobil?).\n3. **profesor anatómie** – podmet (//profesor//) + nezhodný prívlastok (//anatómie// – aký profesor? anatomický profesor).\n4. **študentom** – predmet v datíve (komu?).\n5. **test** – predmet v akuzatíve (čo?).'
      },
      {
        title: 'Porovnanie s možnosťou D a vylúčenie ostatných',
        text: 'Možnosť **D** sa zhoduje na každom mieste:\n1. **V malej horskej dedine** (2 zhodné prívlastky + príslovkové určenie miesta) → 2. **poskytol** (prísudok) → 3. **starosta obce** (podmet + nezhodný prívlastok: obecný starosta) → 4. **obyvateľom** (predmet: komu?) → 5. **pomoc** (predmet: čo?).\n\nA – prísudok //predviedol// stojí až za podmetom //vedec// a na začiatku je príslovkové určenie //historicky//.\nB – po príslovkovom určení //V korune// nasleduje prívlastok //bútľavého stromu//, predmet //si//, podmet //veverička// a až potom prísudok //chystá//.\nC – podmet //semafor// nemá nezhodný prívlastok a veta sa končí príslovkovým určením (//vo funkčne novom svetle//) namiesto dvoch predmetov.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 27,
    code: '27',
    type: 'choice',
    category: 'Literatúra a porozumenie poézii',
    sharedContextId: 'ukazka_5',
    questionText: 'V ktorej možnosti je správne uvedený význam prvých dvoch veršov básne?',
    options: [
      { key: 'A', text: 'Si skúsený a plný poznania.' },
      { key: 'B', text: 'Vždy zostávaš sám sebou.' },
      { key: 'C', text: 'Si vytrvalý a nevzdáš sa.' },
      { key: 'D', text: 'Vďaka úspechu si namyslený.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Prečítaj si prvé dva verše: „keď medzi davom zachováš si hrdosť, / keď prostý si, aj keď ťa stretne kráľ“. Ako sa správa človek, ktorého nezlomí dav a nezmení ani stretnutie s kráľom?',
    solutionSteps: [
      {
        title: 'Význam prvých dvoch veršov',
        text: 'Prvý verš (//keď medzi davom zachováš si hrdosť//) hovorí o tom, že človek sa nenechá stiahnuť davom a nestratí vlastnú dôstojnosť. Druhý verš (//keď prostý si, aj keď ťa stretne kráľ//) hovorí, že zostáva skromný a prirodzený aj pred mocnými. Spolu to znamená, že sa nepretvaruje a v každej situácii **zostáva sám sebou**.'
      },
      {
        title: 'Prečo ostatné možnosti nesedia',
        text: 'A – o vedomostiach či skúsenostiach prvé dva verše nehovoria.\nC – vytrvalosť vystihujú až piaty a šiesty verš (//keď z posledných síl dobehnúť vieš k méte//).\nD – namyslenosť je presný opak slov //keď prostý si//.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 28,
    code: '28',
    type: 'text',
    category: 'Lexikológia (tvorenie slov – skladanie)',
    questionText:
      'Vytvor z príslovky a príslušného slovesa v nasledujúcom súvetí podstatné meno skladaním.\n//Každé ráno hľadel ďaleko za rieku, či sa nevracia Santiago s rybami.//',
    placeholder: 'Napíš zložené podstatné meno',
    correctAnswerDisplay: 'ďalekohľad',
    acceptedAnswers: ['ďalekohľad', 'Ďalekohľad'],
    commonMistakes: [
      {
        pattern: 'ďaleko[\\s-]+hľad',
        hint: 'Zložené podstatné mená utvorené spájacou samohláskou -o- sa píšu spolu ako jedno slovo bez spojovníka.'
      },
      {
        pattern: '^ďalekohľad(el|ieť|ič)$',
        hint: 'Druhú časť zloženého podstatného mena tvorí iba slovotvorný základ slovesa (-hľad) – vznikne názov známeho optického prístroja.'
      }
    ],
    hint: 'Nájdi v prvej vete príslovku („ďaleko“) a sloveso („hľadel“). Spoj ich základy do jedného zloženého podstatného mena, ktorým pomenúvame optický prístroj na pozorovanie vzdialených vecí.',
    solutionSteps: [
      {
        title: 'Vyhľadanie príslovky a slovesa v súvetí',
        text: 'V hlavnej vete sa nachádza príslovka **ďaleko** a plnovýznamové sloveso **hľadel** (neurčitok //hľadieť//).'
      },
      {
        title: 'Utvorenie podstatného mena skladaním',
        text: 'Spojením slovotvorného základu príslovky (**ďalek-**), spájacej samohlásky **-o-** a základu slovesa (**-hľad**) vznikne skladaním zložené podstatné meno **ďalekohľad**. Píše sa spolu jedným slovom a s mäkčeňmi na **ď** aj **ľ**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je ďalekohľad.'
  },
  {
    id: 29,
    code: '29',
    type: 'text',
    category: 'Tvaroslovie a pravopis (podstatné mená)',
    questionText:
      '//To predstavuje vysoké percento všetkých druhov žijúcich pri lesných vodných plochách a mŕtvych ramenách riek.//\nDopíš podstatné meno mužského rodu z vyššie uvedenej vety v správnom tvare.',
    fillSentenceHtml: '//Tieto vzácne// {{blank}} //potrebujú vhodné podmienky na udržanie rovnováhy.//',
    placeholder: 'Dopíš podstatné meno',
    correctAnswerDisplay: 'druhy',
    acceptedAnswers: ['druhy', 'Druhy'],
    commonMistakes: [
      {
        pattern: '^druhi$',
        hint: 'Neživotné podstatné meno mužského rodu „druh“ sa skloňuje podľa vzoru dub – v množnom čísle má tvrdé -y (druhy).'
      },
      {
        pattern: '^(druh|druhov)$',
        hint: 'Podstatné meno treba dať do tvaru, ktorý vyžaduje druhá veta: „Tieto vzácne ______ potrebujú...“ (nominatív množného čísla).'
      },
      {
        pattern: '^(percent[oá]|ploch[ay]|ramen[oá]|riek[ay]?)$',
        hint: 'Skontroluj si rod podstatných mien: percento a rameno sú stredného rodu, plocha a rieka sú ženského rodu. Zadanie žiada podstatné meno mužského rodu!'
      }
    ],
    hint: 'Vypíš si všetky podstatné mená z prvej vety a urči ich rod pomocou ukazovacieho zámena (ten, tá, to): percento, druhov, plochách, ramenách, riek. Len jedno z nich je mužského rodu – daj ho do množného čísla podľa vety „Tieto vzácne ...“!',
    solutionSteps: [
      {
        title: 'Určenie rodu podstatných mien v prvej vete',
        text: 'Overíme si rod všetkých piatich podstatných mien vo vete:\n• //to percento// – stredný rod,\n• //všetkých druhov// → **ten druh** – **mužský rod** (neživotné),\n• //pri plochách// → //tá plocha// – ženský rod,\n• //pri ramenách// → //to rameno// – stredný rod,\n• //riek// → //tá rieka// – ženský rod.\nJediným podstatným menom mužského rodu je **druh**.'
      },
      {
        title: 'Doplnenie v správnom tvare do druhej vety',
        text: 'Vo vete //Tieto vzácne ______ potrebujú...// stojí hľadané slovo ako podmet v **nominatíve množného čísla** (//kto? čo? tieto vzácne druhy//). Neživotné podstatné meno //druh// sa skloňuje podľa vzoru **dub** (//duby// → **druhy**, s tvrdým **-y**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je druhy.'
  },
  {
    id: 30,
    code: '30',
    type: 'choice',
    category: 'Tvaroslovie (častice)',
    questionText:
      'Ktorú časticu treba doplniť na vynechané miesto v nasledujúcej vete tak, aby sa obsah nasledujúceho tvrdenia spochybnil?\n//Usmievavé oči a neoblomné hodnoty _________ vo mne zanechali stopy.//',
    options: [
      { key: 'A', text: 'určite' },
      { key: 'B', text: 'samozrejme' },
      { key: 'C', text: 'možno' },
      { key: 'D', text: 'chvalabohu' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Častice vyjadrujú postoj hovoriaceho k výpovedi. Dosadzuj si jednotlivé možnosti do vety a vnímaj, pri ktorej z nich si hovoriaci nie je istý, či to tak naozaj bolo.',
    solutionSteps: [
      {
        title: 'Význam častice „možno“ vo vete',
        text: 'Častice vyjadrujú osobný postoj hovoriaceho k obsahu vety. Ak chceme tvrdenie **spochybniť** (naznačiť neistotu, iba predpoklad), doplníme časticu pochybnosti a pravdepodobnosti **možno**: //Usmievavé oči a neoblomné hodnoty **možno** vo mne zanechali stopy.// (hovoriaci si tým nie je istý).'
      },
      {
        title: 'Význam ostatných častíc',
        text: 'A (**určite**), B (**samozrejme**) – vyjadrujú istotu a presvedčenie, takže platnosť tvrdenia potvrdzujú, nespochybňujú.\nD (**chvalabohu**) – vyjadruje kladné citové hodnotenie (úľavu, vďačnosť za niečo, čo sa naozaj stalo), tvrdenie nespochybňuje.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  }
];
