import type { QuestionData } from '../../types';

// Úlohy 33 – 64. Odpovede podľa kľúča NIVaM k testu 23 1403 (Maturita 2023, marcový termín).
// lenient: kľúč hovorí „prihliadať na vecnú správnosť odpovede, uznať aj odpoveď s pravopisnými či gramatickými chybami“.

const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';

export const questionsPart2: QuestionData[] = [
  // ---------------- Ukážka 5 – Pupala
  {
    id: 33,
    code: '33',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 5?',
    options: [
      { key: 'A', text: 'Hlavného hrdinu ovplyvnil pobyt v záhadnom dedkovom dome.' },
      { key: 'B', text: 'Hlavný hrdina zbadal kohosi iného v sústave zrkadiel.' },
      { key: 'C', text: 'Hlavný hrdina si nevedomky doniesol domov tajuplné zrkadlo.' },
      { key: 'D', text: 'Hlavnému hrdinovi sa vôbec nedarilo logicky uvažovať.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozorne čítaj detaily v prvom, druhom a predposlednom odseku: v čiom dome bol hrdina, čo presne ležalo na sedadle spolujazdca a čo vytvorili dve zrkadlá oproti sebe v kúpeľni?',
    solutionSteps: [
      {
        title: 'Sústava dvoch zrkadiel v kúpeľni',
        text: 'Hrdina sa díva do zrkadla nad umývadlom a na stene za jeho chrbtom visí druhé, malé zrkadlo namontované Klárou. Dve zrkadlá oproti sebe vytvoria „nekonečne rozložený priestor“ (sústavu zrkadiel), z ktorého na neho namiesto vlastného odrazu hľadí ktosi iný – „premenený Kizek“.'
      },
      {
        title: 'Odhalenie chytákov v A, C a D',
        text: 'A – hrdina nebol v //dedkovom// dome, ale v dome po **pradedovi** (a text neuvádza, že by bol dom záhadný).\nC – na sedadle spolujazdca nemal zrkadlo, ale iba **prázdny rám zrkadla**.\nD – hoci si nepamätá cestu, v kúpeľni uvažuje celkom vecne a prakticky („Zajtra sa oholím, napadlo mu.“).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 34,
    code: '34',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktoré city/pocity možno pripísať hlavnému hrdinovi z ukážky 5?',
    options: [
      { key: 'A', text: 'nesústredenosť, nenávisť' },
      { key: 'B', text: 'bezmocnosť, bolesť' },
      { key: 'C', text: 'zmätenosť, rozrušenie' },
      { key: 'D', text: 'nemilosrdnosť, prekvapenie' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Rozlišuj, ktoré pocity v predposlednom odseku patria hlavnému hrdinovi a ktoré postave v zrkadle (Kizekovi)!',
    solutionSteps: [
      {
        title: 'Prežívanie hlavného hrdinu',
        text: 'Hrdina je **zmätený** (nepamätá si cestu z pradedovho domu ani to, že by bral so sebou prázdny rám zrkadla) a vnútorne silno **rozrušený** („Triasol sa; nie navonok, hoci by bolo príhodnejšie, keby mu aspoň drkotali zuby“, „až mu zimomriavky prenikli do srdca ako črepy“).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A, D – **nenávisť** a **nemilosrdnosť** nepatria hlavnému hrdinovi, ale premenenému Kizekovi v zrkadle („Hľadel mu priamo do očí, nemilosrdným pohľadom, s takou nenávisťou…“).\nB – telesnú **bolesť** hrdina nepociťuje (slovo //nebolelo// sa spomína len pri Kizekovi: „nič ho nebolelo“).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 35,
    code: '35',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktorý kompozičný postup využil autor v druhej časti ukážky 5?',
    options: [
      { key: 'A', text: 'chronologický' },
      { key: 'B', text: 'reťazový' },
      { key: 'C', text: 'retrospektívny' },
      { key: 'D', text: 'nadväzujúci' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Sleduj dej po značke […] (od príchodu do kúpeľne až po poslednú vetu). Odohrávajú sa udalosti postupne za sebou v prirodzenom časovom slede, alebo sa celý príbeh vracia do minulosti?',
    solutionSteps: [
      {
        title: 'Časová následnosť deja',
        text: 'V druhej časti ukážky (po […]) sledujeme plynulý sled udalostí presne v takom poradí, ako za sebou prebiehali: hrdina vošiel do kúpeľne → zahľadel sa do zrkadla → nabral vodu a sklonil sa → zodvihol zrak a zbadal v zrkadle Kizeka → obzrel sa. Takéto usporiadanie deja podľa časovej osi sa nazýva **chronologický** kompozičný postup.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – **reťazový** postup spája samostatné príbehy postavou putujúceho hrdinu (napr. v rozprávkach či dobrodružných prózach).\nC – **retrospektívny** postup obracia dejovú líniu do minulosti (drobná vedľajšia veta o tom, že zrkadlo dala namontovať Klára, nemení chronologický tok scén v kúpeľni).\nD – „nadväzujúci“ nie je literárnovedný názov kompozičného postupu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 36,
    code: '36',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_5',
    questionText: 'Ktorý typ rozprávača sa uplatnil v ukážke 5?',
    options: [
      { key: 'A', text: 'priamy rozprávač' },
      { key: 'B', text: 'subjektívny rozprávač' },
      { key: 'C', text: 'vševediaci rozprávač' },
      { key: 'D', text: 'rozprávač oko kamery' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si, v akej gramatickej osobe je text rozprávaný, či rozprávač vystupuje ako jedna z postáv deja a či pozná vnútorné pocity a myšlienky jednej postavy, alebo viacerých postáv.',
    solutionSteps: [
      {
        title: 'Znaky vševediaceho rozprávača',
        text: 'Príbeh je rozprávaný v **3. osobe jednotného čísla** (//zaparkoval, hľadel, triasol sa//) a rozprávač má neobmedzený prehľad: opisuje nielen vonkajšie konanie, ale aj vnútorné chvenie a myšlienky hlavného hrdinu, pozná minulosť (prečo dala Klára namontovať zrkadlo) a dokonca vie, čo cíti postava v odraze („Už sa nebál; nič ho nebolelo.“). Ide teda o **vševediaceho (autorského) rozprávača**.'
      },
      {
        title: 'Vylúčenie ostatných typov',
        text: 'A – **priamy (ja-) rozprávač** je jednou z postáv a rozpráva v 1. osobe jednotného čísla.\nB – **subjektívny (personálny) rozprávač** by bol obmedzený výlučne na vedomie jednej postavy a nemohol by vedieť, čo prežíva Kizek.\nD – **rozprávač „oko kamery“** zachytáva iba vonkajšie správanie a dialógy bez vstupovania do mysle a pocitov postáv.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 37,
    code: '37',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_5',
    questionText: 'V ktorej možnosti sa nachádza slovo z ukážky 5 skloňujúce sa podľa iného vzoru ako ostatné tri?',
    options: [
      { key: 'A', text: '//črepy//' },
      { key: 'B', text: '//zimomriavky//' },
      { key: 'C', text: '//vlasov//' },
      { key: 'D', text: '//panelákmi//' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Daj si každé podstatné meno do základného tvaru a urči jeho rod a vzor! Ak slovo nemá jednotné číslo, pomôž si jeho pádovými príponami v genitíve, datíve a lokáli množného čísla.',
    solutionSteps: [
      {
        title: 'Určenie rodu a vzoru pri jednotlivých slovách',
        text: '• A: //črepy// → ten **črep** (mužský rod, neživotné, zakončené na obojakú spoluhlásku //p//) → vzor **dub**.\n• C: //vlasov// → ten **vlas** (mužský rod, neživotné, obojaká spoluhláska //s//) → vzor **dub**.\n• D: //panelákmi// → ten **panelák** (mužský rod, neživotné, tvrdá spoluhláska //k//) → vzor **dub**.'
      },
      {
        title: 'Odlišný vzor pri slove zimomriavky',
        text: '• B: **zimomriavky** je pomnožné podstatné meno **ženského rodu** (//tie zimomriavky, bez zimomriavok, k zimomriavkam// – pred príponou je tvrdá spoluhláska //k// a v N pl. má //-y//), preto sa skloňuje podľa vzoru **žena**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 38,
    code: '38',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_5',
    questionText: 'Vypíšte z predposledného odseku ukážky 5 prídavné meno so slabikotvornou spoluhláskou.',
    placeholder: 'Vypíš prídavné meno',
    correctAnswerDisplay: 'nemilosrdným',
    acceptedAnswers: ['nemilosrdným', 'nemilosrdný'],
    commonMistakes: [
      {
        pattern: '^chrbtom$|^chrbát$',
        hint: 'Slovo „chrbtom“ síce obsahuje slabikotvorné r, ale je to podstatné meno (ten chrbát). Zadanie žiada vypísať prídavné meno (pýtame sa naň aký? akým?).'
      },
      {
        pattern: '^(pomalý|kradmý|malé|rozloženého|premenený)$',
        hint: 'Rozdeľ si toto slovo na slabiky – v každej z nich je samohláska. Hľadaj v predposlednom odseku také prídavné meno, v ktorom celú slabiku nesie spoluhláska r alebo l medzi spoluhláskami.'
      }
    ],
    hint: 'Slabikotvorné spoluhlásky sú r, ŕ, l, ĺ vtedy, keď stoja medzi dvoma spoluhláskami a samy tvoria jadro slabiky (napr. vĺ-ča, vŕ-ba). Pozor: hľadáš prídavné meno (aký?/akým?) v predposlednom odseku, nie podstatné meno!',
    solutionSteps: [
      {
        title: 'Čo je slabikotvorná spoluhláska a hľadanie v texte',
        text: 'Ak v slabike nie je samohláska ani dvojhláska, úlohu nositeľa slabiky preberajú spoluhlásky **r, ŕ, l, ĺ** stojace medzi spoluhláskami. V predposlednom odseku sa nachádzajú prídavné mená //pomalý, kradmý, malé// a **nemilosrdným** (tvary //rozloženého, premenený// sú trpné príčastia, pričom ani v nich slabikotvorná spoluhláska nie je): „Hľadel mu priamo do očí, **nemilosrdným** pohľadom…“'
      },
      {
        title: 'Rozdelenie na slabiky a hodnotenie kľúča',
        text: 'Po rozdelení na slabiky **ne-mi-lo-srd-ným** vidíme, že v slabike **-srd-** stojí spoluhláska **r** medzi spoluhláskami //s// a //d// – je teda **slabikotvorná** (slovo //chrbtom// v tom istom odseku je podstatné meno).\nKľúč NIVaM uznáva tvar z textu **nemilosrdným** aj základný tvar **nemilosrdný** v pravopisne správnej podobe.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: nemilosrdným (nemilosrdný).'
  },
  {
    id: 39,
    code: '39',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_5',
    questionText: 'Pomenujte jazykový štýl použitý v ukážke 5.',
    placeholder: 'Napíš jazykový štýl',
    correctAnswerDisplay: 'umelecký',
    acceptedAnswers: [
      'umelecký',
      'umelecký štýl',
      'umelecký jazykový štýl',
      'umelecký funkčný štýl',
      'umelecký funkčný jazykový štýl'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^rozprávací$|^opisný$',
        hint: '„Rozprávací“ a „opisný“ sú slohové postupy, nie funkčné jazykové štýly. Spomeň si na šesť jazykových štýlov (hovorový, administratívny, náučný, publicistický, rečnícky, …).'
      }
    ],
    hint: 'Nepopleť si slohový postup (rozprávací) s funkčným jazykovým štýlom! Do ktorého zo šiestich jazykových štýlov patrí poviedka či román s obraznými pomenovaniami a estetickou funkciou?',
    solutionSteps: [
      {
        title: 'Znaky jazykového štýlu ukážky',
        text: 'Ukážka 5 je úryvok zo súčasnej autorskej prózy (poviedka //Zrkadlo// od Richarda Pupalu). Využíva dejové napätie, subjektívne prežívanie postavy a obrazné jazykové prostriedky (epiteton //kradmý pohyb//, prirovnanie //zimomriavky prenikli do srdca ako črepy//), má teda estetickú funkciu – ide o **umelecký** jazykový štýl.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva odpoveď **umelecký** (príp. **umelecký jazykový štýl**) s prihliadnutím na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: umelecký (jazykový štýl).'
  },
  {
    id: 40,
    code: '40',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_5',
    questionText: 'Koľko vetných skladov sa nachádza v nasledujúcej vete z ukážky 5?\n//Nikto tam nebol.//',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '2',
    acceptedAnswers: ['2', 'dva', '2 vetné sklady', 'dva vetné sklady', '2 sklady', 'dva sklady'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(1|jeden)$',
        hint: 'Spojenie „nikto ←→ nebol“ je prisudzovací sklad, ale vo vete je ešte príslovka „tam“, ktorá rozvíja sloveso „nebol“ (nebol kde? → tam) a tvorí s ním ďalší vetný sklad.'
      },
      {
        pattern: '^(3|tri)$',
        hint: 'Tri je počet vetných členov (nikto, tam, nebol). Vetný sklad je dvojica navzájom súvisiacich vetných členov – v takejto trojslovnej vete sú o jeden menej.'
      }
    ],
    hint: 'Vetný sklad je dvojica vetných členov, ktoré na seba vo vete gramaticky a významovo nadväzujú. Urči vo vete „Nikto tam nebol“ podmet, prísudok a príslovkové určenie a spoj ich do dvojíc!',
    solutionSteps: [
      {
        title: 'Určenie vetných členov a vetných skladov',
        text: 'Vo vete //Nikto tam nebol.// sú tri plnovýznamové vetné členy: podmet **nikto** (//kto?//), slovesný prísudok **nebol** vo význame „nenachádzal sa“ (//čo robil?//) a príslovkové určenie miesta **tam** (//kde?//). Vytvárajú spolu **2 vetné sklady**:\n1. **prisudzovací sklad**: //nikto ←→ nebol// (spojenie podmetu a prísudku),\n2. **určovací sklad**: //nebol → tam// (prísudok rozvitý príslovkovým určením miesta).'
      },
      {
        title: 'Praktická pomôcka a hodnotenie kľúča',
        text: 'V jednoduchej dvojčlennej vete bez viacnásobných vetných členov je počet vetných skladov vždy o 1 menší ako počet vetných členov (3 vetné členy → **2** vetné sklady). Kľúč uznáva odpoveď číslom aj slovom.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 2 (dva vetné sklady).'
  },

  // ---------------- Ukážka 6 – Najkrajšie na Slovensku
  {
    id: 41,
    code: '41',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorom tipe sa spomína svetový rekord Slovenska?',
    options: [
      { key: 'A', text: 'V prvom.' },
      { key: 'B', text: 'V druhom.' },
      { key: 'C', text: 'V treťom.' },
      { key: 'D', text: 'Vo štvrtom.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Hľadaj v jednotlivých tipoch informáciu, v ktorej je niečo na Slovensku „naj… na svete“ (nie iba najstaršie na Slovensku alebo zapísané v UNESCO).',
    solutionSteps: [
      {
        title: 'Svetové prvenstvo v 2. tipe',
        text: 'V **druhom tipe** (//Tam, kde razia mince//) sa píše: „V Kremnici, Zlatom meste, sa už sedemsto rokov razia mince v **najstaršej nepretržite fungujúcej prevádzke na svete**.“ Kremnická mincovňa tak drží svetový rekord v nepretržitej prevádzke.'
      },
      {
        title: 'Prečo nie ostatné tipy',
        text: 'V 1. tipe sa spomínajú najvýznamnejšie pamiatky regiónu, v 3. tipe zápis Banskej Štiavnice do Zoznamu svetového dedičstva UNESCO a vo 4. tipe sa o Zvolene píše, že patrí medzi najstaršie mestá **na Slovensku**, nie na svete.'
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
    questionText: 'Hlavnou funkciou textu ukážky 6 je',
    options: [
      { key: 'A', text: 'presviedčať.' },
      { key: 'B', text: 'zabávať.' },
      { key: 'C', text: 'poúčať.' },
      { key: 'D', text: 'hodnotiť.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozri sa na zdroj pod textom (slovakia.travel) a na priame výzvy čitateľovi („Dajte sa očariť…“, „užite si…“, „nesmiete vynechať“, „navštívte“, „Zastavte sa“). Čo chce takýto propagačný text u čitateľa dosiahnuť?',
    solutionSteps: [
      {
        title: 'Propagačný text a jeho cieľ',
        text: 'Ukážka pochádza z oficiálneho turistického portálu //slovakia.travel//. Ide o propagačný (reklamný) text v oblasti cestovného ruchu – pomocou príťažlivých prívlastkov a hodnotiacich pomenovaní (//výnimočná krajina, neopakovateľná atmosféra, skvost//) a priamych výziev v rozkazovacom spôsobe (//užite si, navštívte, zastavte sa//) sa snaží čitateľa nalákať a **presvedčiť**, aby spomínané miesta navštívil.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – funkciu zabávať majú humorné či beletristické texty.\nC – cieľom nie je mravne ani odborne poúčať (krátke historické zaujímavosti tu len podporujú atraktívnosť výletu).\nD – nejde o kritické hodnotenie (recenziu), ale o jednostranne pozitívnu propagáciu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 43,
    code: '43',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorej možnosti je správne utvorené vzťahové prídavné meno od slova //Sliač//?',
    options: [
      { key: 'A', text: 'sliačanský' },
      { key: 'B', text: 'sliačský' },
      { key: 'C', text: 'sliačsky' },
      { key: 'D', text: 'sliacky' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Všimni si jednak zakončenie domáceho názvu „Sliač“ na spoluhlásku „č“ (aká prípona sa pripája a či sa „č“ zachováva) a jednak dĺžku slabiky s dvojhláskou „ia“ v koreni slova z hľadiska zákona o rytmickom krátení.',
    solutionSteps: [
      {
        title: '1. Zachovanie spoluhlásky č pred príponou -sky',
        text: 'Od jednoslabičného domáceho zemepisného názvu **Sliač** sa vzťahové prídavné meno tvorí príponou **-ský / -sky**, pričom koreňová spoluhláska **č** zostáva zachovaná: //Sliač + -sky → sliačsky// (podobne //Báč → báčsky//). Tvar //sliacky// (D) je nesprávny (zjednodušenie na //-cký// nastáva pri základoch na //-k, -c//, napr. //Košice → košický//) a tvar //sliačanský// (A) má nepatričnú príponu.'
      },
      {
        title: '2. Rytmické krátenie prípony (-ský → -sky)',
        text: 'Koreň slova //Sl**ia**č// obsahuje dvojhlásku **ia**, ktorá platí ako **dlhá slabika**. Podľa **zákona o rytmickom krátení** v //Pravidlách slovenského pravopisu// nemôžu za sebou nasledovať dve dlhé slabiky, preto sa prípona //-ský// kráti na **-sky**: **sliačsky** (možnosť B //sliačský// porušuje rytmický zákon).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 44,
    code: '44',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Čo majú spoločné slovesá //dajte sa, užite si, zastavte sa//?',
    options: [
      { key: 'A', text: 'Sú vždy zvratné.' },
      { key: 'B', text: 'Sú utvorené predponou.' },
      { key: 'C', text: 'Majú nedokonavý slovesný vid.' },
      { key: 'D', text: 'Majú rovnaký slovesný spôsob.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Postupne si pri všetkých troch slovesách over každú možnosť: existujú aj bez „sa/si“ (napr. dať, užiť)? Majú predponu všetky tri vrátane „dať“? Aký majú slovesný vid a v akom slovesnom spôsobe sú použité?',
    solutionSteps: [
      {
        title: 'Rovnaký slovesný spôsob',
        text: 'Tvary //dajte sa//, //užite si// aj //zastavte sa// sú v 2. osobe množného čísla (alebo pri vykaní) **rozkazovacieho spôsobu** – vyjadrujú výzvu a odporúčanie čitateľovi. Majú teda rovnaký slovesný spôsob.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – nie sú to slovesá vždy zvratné (ako //smiať sa, báť sa//), pretože bežne existujú aj nezvratné slovesá //dať, užiť, zastaviť//.\nB – sloveso //dať (sa)// nemá predponu (predponu //u-// a //za-// majú iba zvyšné dve).\nC – všetky tri slovesá (//dať sa, užiť si, zastaviť sa//) pomenúvajú ohraničený, ukončený dej, majú teda **dokonavý** vid, nie nedokonavý.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 45,
    code: '45',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'V ktorej možnosti sa nachádza jednovýznamové slovo?',
    options: [
      { key: 'A', text: '//atmosféra//' },
      { key: 'B', text: '//pamiatka//' },
      { key: 'C', text: '//zastávka//' },
      { key: 'D', text: '//minca//' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Pri každom slove si skús vymyslieť dve rôzne vety, v ktorých by znamenalo niečo iné (napr. koruna kráľa aj koruna stromu). Tri z týchto slov majú viac významov a iba jedno pomenúva jedinú vec.',
    solutionSteps: [
      {
        title: 'Jednovýznamové slovo minca',
        text: 'Podstatné meno **minca** má iba jeden vecný význam: kovový peniaz (platidlo vyrazené z kovu) – vo frazéme //odplatiť rovnakou mincou// má prenesený význam celé ustálené spojenie, nie samotné slovo //minca//.'
      },
      {
        title: 'Viacvýznamové slová v A, B a C',
        text: 'A – **atmosféra**: 1. plynný obal Zeme, 2. celková nálada, ovzdušie prostredia (//príjemná atmosféra//).\nB – **pamiatka**: 1. historická stavba či výtvor z minulosti (//banská pamiatka//), 2. spomienka (//uctiť si niekoho pamiatku//), 3. darček na spomienku.\nC – **zastávka**: 1. miesto, kde zastavuje spoj (//autobusová zastávka//), 2. krátke prerušenie cesty (//príjemná zastávka na výlete//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 46,
    code: '46',
    type: 'text',
    category: J,
    sharedContextId: 'ukazka_6',
    questionText: 'Vypíšte z ukážky 6 slovo pomenúvajúce štýl minulého obdobia.',
    placeholder: 'Vypíš slovo z ukážky',
    correctAnswerDisplay: 'retro',
    acceptedAnswers: ['retro'],
    commonMistakes: [
      {
        pattern: '^históri[ae]$|^historick',
        hint: 'Slovo „história“ označuje dejiny, nie módny či dizajnový štýl vracajúci sa k nedávnej minulosti. Pozri sa do nadpisu a textu 4. tipu.'
      }
    ],
    hint: 'Nezamieňaj si pomenovanie vedy či dejín („história“) s pomenovaním módneho alebo dizajnového štýlu, ktorý napodobňuje nedávnu minulosť. Hľadaj krátke nesklonné slovo cudzieho pôvodu v nadpisoch a texte jednotlivých tipov.',
    solutionSteps: [
      {
        title: 'Význam slova a výskyt v ukážke',
        text: 'Vo 4. tipe čítame: „**4. tip: Retro kúpalisko aj UNESCO pamiatka** … Okrem **retro** kúpaliska s liečivou minerálnou vodou…“ Cudzí výraz **retro** (z latinského //retro// = späť, dozadu) pomenúva štýl, módu alebo vzhľad pripomínajúci a napodobňujúci minulé obdobie.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Slovo **retro** musí byť vypísané pravopisne správne (na veľkom/malom začiatočnom písmene nezáleží).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: retro.'
  },
  {
    id: 47,
    code: '47',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_6',
    questionText: 'Koľko miest má v ukážke 6 nepriame pomenovanie?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '3',
    acceptedAnswers: [
      '3',
      'tri',
      '3 mestá',
      'tri mestá',
      'Banská Bystrica, Kremnica, Banská Štiavnica',
      'Banská Bystrica, Kremnica a Banská Štiavnica',
      'Medené mesto, Zlaté mesto, Strieborné mesto',
      'Medené mesto, Zlaté mesto a Strieborné mesto'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(2|dve)$',
        hint: 'Okrem 1. tipu (Medené mesto) a 3. tipu (Strieborné mesto) si pozorne prečítaj aj poslednú vetu 2. tipu o Kremnici!'
      },
      {
        pattern: '^(4|štyri|5|päť)$',
        hint: 'Spojenie „kúpeľné mesto Sliač“ vo 4. tipe nie je obrazné nepriame pomenovanie, ale bežné vecné zaradenie druhu mesta. Spočítaj len mestá s obrazným prívlastkom podľa kovu.'
      }
    ],
    hint: 'Nepriame pomenovanie (perifráza) nahrádza vlastné meno mesta obrazným opisom jeho typickej črty (tu podľa kovu, ktorý sa v ňom ťažil alebo spracúval). Prejdi rad-radom všetky štyri tipy!',
    solutionSteps: [
      {
        title: 'Mestá s nepriamym (obrazným) pomenovaním v ukážke',
        text: 'V ukážke 6 majú nepriame pomenovanie presne **3 mestá**:\n1. **Banská Bystrica** – //Medené mesto// (1. tip),\n2. **Kremnica** – //Zlaté mesto// („V Kremnici, Zlatom meste…“, 2. tip),\n3. **Banská Štiavnica** – //Strieborné mesto// (3. tip).\nZvolen ani Sliač vo 4. tipe nepriame pomenovanie nemajú (spojenie //kúpeľné mesto// je priame vecné pomenovanie).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva počet **3** / **tri (mestá)** a ústretovo aj vymenovanie všetkých troch konkrétnych miest alebo ich troch obrazných pomenovaní.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 3 (tri mestá).'
  },
  {
    id: 48,
    code: '48',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_6',
    questionText: 'Doplňte správny tvar slova //meď// do nasledujúcej vety z ukážky 6.',
    fillSentenceHtml: '//Preslávila sa ťažbou// {{blank}}//.//',
    placeholder: 'doplň tvar slova',
    correctAnswerDisplay: 'medi',
    acceptedAnswers: ['medi', 'Preslávila sa ťažbou medi'],
    commonMistakes: [
      {
        pattern: '^meďou$',
        hint: 'Pozor na pád! V inštrumentáli (čím?) je už slovo „ťažbou“. Slovo „meď“ závisí od slova „ťažbou“, preto sa pýtaj: ťažbou koho? čoho?'
      },
      {
        pattern: '^mede$',
        hint: 'Podstatné meno „meď“ sa neskloňuje podľa vzoru dlaň, ale podľa vzoru kosť (bez kosti). Akú pádovú príponu má vzor kosť v genitíve jednotného čísla?'
      },
      {
        pattern: '^medy$',
        hint: 'Podstatné meno „meď“ je ženského rodu a skloňuje sa podľa vzoru kosť – vo vzore kosť sa vo všetkých pádoch píše mäkké -i.'
      }
    ],
    hint: 'Spýtaj sa pádovou otázkou od podstatného mena „ťažbou“: ťažbou koho? čoho? Potom si urči vzor ženského podstatného mena „meď“ (dlaň alebo kosť?) a jeho príponu v genitíve jednotného čísla.',
    solutionSteps: [
      {
        title: 'Určenie pádu a skloňovacieho vzoru',
        text: 'Vo vete //Preslávila sa ťažbou (koho? čoho?) …// potrebujeme tvar **genitívu jednotného čísla**. Podstatné meno **meď** je ženského rodu zakončené na mäkkú spoluhlásku //ď// a skloňuje sa podľa vzoru **kosť** (v N pl. by malo //-i//, v G sg. má ako //kosť → bez kosti// príponu **-i**).'
      },
      {
        title: 'Pravopis a hodnotenie kľúča',
        text: 'Jediný správny tvar je **medi** s mäkkým **-i** (vo vzore //kosť// nikdy nepíšeme //y//; tvar //medy// by bol množným číslom slova //med//). Kľúč uznáva iba tento pravopisne správny tvar (prípadne celú vetu s tvarom //medi//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: medi.'
  },

  // ---------------- Ukážka 7 – Shakespeare
  {
    id: 49,
    code: '49',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré tvrdenie vyplýva z ukážky 7?',
    options: [
      { key: 'A', text: 'Leonato je láskavý otec Beatrice.' },
      { key: 'B', text: 'Beatrice a Benedik majú podobné zmýšľanie.' },
      { key: 'C', text: 'Claudio obdivuje Benedika a jeho povahu.' },
      { key: 'D', text: 'Hero žiarli na obľúbenosť Beatrice.' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Porovnaj repliky Benedika a Beatrice po tom, ako Claudio a Hero vytiahnu ich tajné ľúbostné listy: ako obaja vtipne „ospravedlňujú“ to, že si jeden druhého zoberú?',
    solutionSteps: [
      {
        title: 'Rovnaký postoj a humor Benedika a Beatrice',
        text: 'Keď priatelia odhalia ich vlastnoručne písané vyznania lásky, **Benedik** aj **Beatrice** zareagujú úplne rovnako – hrdou, láskavou iróniou. Benedik vyhlási: „Tak dobre, chcem ťa za ženu. No prisahám, že iba zo súcitu.“ A Beatrice mu v rovnakom duchu kontruje: „Aj ja ťa neodmietnem, ale… čiastočne to robím aj preto, aby som ti zachránila život.“ Z ukážky jasne vidno, že majú veľmi **podobné zmýšľanie**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – z ukážky nijako nevyplýva, že by Leonato bol otcom Beatrice (v hre je v skutočnosti otcom Hero a strýkom Beatrice).\nC – Claudio Benedika neobdivuje, naopak, s úškrnom hodnotí jeho báseň ako „mizerný sonet – jeho úroveň“.\nD – Hero na Beatrice vôbec nežiarli, s radosťou jej a Benedikovi pomáha spojiť sa.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 50,
    code: '50',
    type: 'choice',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktorá z postáv v ukážke 7 najčastejšie používa vo vyjadrovaní elipsy?',
    options: [
      { key: 'A', text: 'Claudio' },
      { key: 'B', text: 'Leonato' },
      { key: 'C', text: 'Benedik' },
      { key: 'D', text: 'Beatrice' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Elipsa (výpustka) je neúplná veta, v ktorej autor zámerne vynechal sloveso (prísudok), lebo si ho čitateľ ľahko domyslí – často je v nej namiesto slovesa pomlčka. Pozri sa, v koho replike je takýchto viet najviac!',
    solutionSteps: [
      {
        title: 'Čo je elipsa a jej výskyt u Claudia',
        text: '**Elipsa (výpustka)** je syntaktická konštrukcia, v ktorej je vynechaná časť vety (najčastejšie slovesný prísudok), pričom jej zmysel zostáva z kontextu jasný. V **Claudiovej** replike sú hneď štyri eliptické výpovede:\n• „…že on ju takisto **[miluje]**.“\n• „Hľa – **[tu je]** jeho rukopis!“\n• „Mizerný sonet – **[to je]** jeho úroveň.“\n• „A múza – **[je]** Beatrice.“'
      },
      {
        title: 'Porovnanie s ostatnými postavami',
        text: 'Hero má podobné elipsy len dve, Benedik a Leonato majú po jednom krátkom zvolaní (//Zázrak!//, //No tak!//) a Beatrice sa vyjadruje v ucelených rozvitých súvetiach bez elíps.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 51,
    code: '51',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktoré tvrdenie o ukážke 7 je pravdivé?',
    options: [
      { key: 'A', text: 'Je napísaná rytmicky viazanou rečou.' },
      { key: 'B', text: 'Využívajú sa v nej monológy.' },
      { key: 'C', text: 'Chýbajú v nej zvolania.' },
      { key: 'D', text: 'Má znaky absurdnej drámy.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si grafické členenie replík v ukážke 7 – sú písané súvisle od okraja po okraj ako próza, alebo sú členené do veršov? Zároveň si over výkričníky a počet hovoriacich postáv.',
    solutionSteps: [
      {
        title: 'Rytmicky viazaná reč (veršovaná dráma)',
        text: 'Repliky postáv v ukážke 7 sú členené do veršov s pravidelným rytmickým pulzovaním (typický shakespearovský nerýmovaný päťstopový jamb – **blankvers**). Ukážka je teda napísaná **rytmicky viazanou rečou**.'
      },
      {
        title: 'Prečo sú možnosti B, C a D nepravdivé',
        text: 'B – v ukážke sa rýchlo striedajú krátke prehovory piatich postáv, ide teda o živý **dialóg**, nie o monológy (dlhé prehovory osamotenej postavy).\nC – zvolania v ukážke nechýbajú, je ich tam viacero (//Hľa – jeho rukopis!//, //Hľa, jej písmo!//, //Zázrak!//, //No tak!//).\nD – ide o renesančnú komédiu so zmysluplnou zápletkou, nie o absurdnú drámu 20. storočia.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 52,
    code: '52',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_7',
    questionText: 'Slovné spojenie //veľa kriku pre nič// možno v súčasnosti zaradiť medzi',
    options: [
      { key: 'A', text: 'parafrázy.' },
      { key: 'B', text: 'epigramy.' },
      { key: 'C', text: 'frazeologizmy.' },
      { key: 'D', text: 'anekdoty.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Keď dnes v bežnej reči povieme, že okolo niečoho bolo „veľa kriku pre nič“ (= zbytočný rozruch pre maličkosť), ako sa v lexikológii nazýva takéto ustálené obrazné slovné spojenie?',
    solutionSteps: [
      {
        title: 'Ustálené obrazné spojenie – frazeologizmus',
        text: 'Spojenie **veľa kriku pre nič** sa zo Shakespearovej komédie dostalo do bežnej slovnej zásoby ako ustálené obrazné pomenovanie pre veľký, zbytočný rozruch okolo nepodstatnej veci. Takéto ustálené obrazné slovné spojenia (tu knižného pôvodu – tzv. okrídlené výrazy) patria medzi **frazeologizmy**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – **parafráza** je voľné prerozprávanie cudzieho textu či myšlienky vlastnými slovami.\nB – **epigram** je krátka satirická báseň s vtipnou pointou.\nD – **anekdota** je krátky vtipný príbeh (vtip) s prekvapivým rozuzlením.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 53,
    code: '53',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Do ktorej literatúry z hľadiska literárno-historického obdobia zaraďujeme tvorbu Williama Shakespeara?',
    options: [
      { key: 'A', text: 'do stredovekej' },
      { key: 'B', text: 'do renesančnej' },
      { key: 'C', text: 'do barokovej' },
      { key: 'D', text: 'do romantickej' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'William Shakespeare žil na prelome 16. a 17. storočia (1564 – 1616) a vo svojich komédiách aj tragédiách staval do centra pozemský život, rozum a silné ľudské vášne.',
    solutionSteps: [
      {
        title: 'Zaradenie Williama Shakespeara',
        text: 'Anglický dramatik a básnik **William Shakespeare** (1564 – 1616, autor tragédií //Hamlet, Rómeo a Júlia, Othello, Macbeth, Kráľ Lear// a komédií //Skrotenie čertice, Veľa kriku pre nič//) je vrcholným predstaviteľom európskeho humanizmu a **renesančnej** literatúry (tzv. alžbetínske divadlo).'
      },
      {
        title: 'Ostatné obdobia',
        text: 'Stredoveká literatúra (A) predchádzala renesancii a sústreďovala sa na náboženské témy, baroková (C, 17. – 18. stor.) a romantická literatúra (D, 1. polovica 19. stor.) nasledovali až po Shakespearovej dobe.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 54,
    code: '54',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Koľko replík v ukážke 7 obsahuje autorské poznámky?',
    placeholder: 'Napíš počet',
    correctAnswerDisplay: '1',
    acceptedAnswers: ['1', 'jedna', '1 replika', 'jedna replika'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(2|dve)$',
        hint: 'Pozor na presné znenie otázky! V zátvorkách sú síce dve autorské poznámky, ale obe sa nachádzajú v prehovore tej istej postavy (Leonata). Zadanie sa pýta, koľko replík ich obsahuje, nie koľko poznámok tam je.'
      }
    ],
    hint: 'Replika je jedno prehovorenie jednej postavy v dialógu; autorská (scénická) poznámka je pokyn dramatika v zátvorke. Daj si veľký pozor: pýta sa zadanie na počet zátvoriek, alebo na počet replík, v ktorých sa zátvorky nachádzajú?',
    solutionSteps: [
      {
        title: 'Rozlíšenie repliky a autorskej poznámky',
        text: 'V ukážke 7 je spolu päť **replík** (prehovorov Claudia, Hero, Benedika, Beatrice a Leonata). **Autorské (scénické) poznámky** v zátvorkách určujú pohyb, gestá a adresáta na javisku. V celej ukážke sa vyskytujú **iba v poslednej replike Leonata**: „No tak! //(Beatrice.)// Uzožieranie zastaví len bozk. //(Podá jej ruku Benedikovi.)//“'
      },
      {
        title: 'Pozor na chyták a hodnotenie kľúča',
        text: 'Hoci sú v Leonatovom prehovore dve zátvorky, obe sú súčasťou tej istej **1 repliky**. Kľúč NIVaM uznáva odpoveď **1** / **jedna (replika)** s prihliadnutím na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: 1 (jedna replika).'
  },
  {
    id: 55,
    code: '55',
    type: 'text',
    category: L,
    sharedContextId: 'ukazka_7',
    questionText: 'Doplňte na zakryté miesto v ukážke 7 slovo označujúce časť vonkajšej kompozície divadelnej hry.',
    placeholder: 'Napíš časť hry',
    correctAnswerDisplay: 'dejstvo',
    acceptedAnswers: ['dejstvo', 'piate dejstvo', '5. dejstvo'],
    lenient: true,
    commonMistakes: [
      {
        pattern: '^(výstup|akt|obraz)$',
        hint: 'Všimni si tvar radovej číslovky pred zakrytým miestom: „piate …“ je v strednom rode (to piate). Slová „výstup“, „akt“ a „obraz“ sú mužského rodu (bol by „piaty“).'
      },
      {
        pattern: '^scéna$',
        hint: 'Slovo „scéna“ je ženského rodu (bola by „piata scéna“), no v ukážke stojí číslovka v strednom rode: „piate …“.'
      }
    ],
    hint: 'Spomeň si na časti vonkajšej kompozície divadelnej hry (napr. celky oddelené oponou či zmenou prostredia). Pozri sa na slovo pred zakrytým obdĺžnikom úplne hore v ukážke 7 („piate …“) – v ktorom rode musí byť hľadané podstatné meno?',
    solutionSteps: [
      {
        title: 'Vonkajšia kompozícia drámy a gramatická zhoda',
        text: 'Divadelná hra sa navonok člení na **dejstvá** (akty), **scény** (obrazy) a **výstupy**. Pred zakrytým miestom na začiatku ukážky stojí číslovka v strednom rode: //„piate [zakryté]“//. Zo všetkých častí vonkajšej kompozície drámy je v strednom rode podstatné meno **dejstvo** (//piate dejstvo// – v piatom dejstve tradične vrcholí a rozuzľuje sa shakespearovská hra).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva odpoveď **dejstvo** s prihliadnutím na vecnú správnosť (aj s prípadnou pravopisnou chybou).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: dejstvo.'
  },
  {
    id: 56,
    code: '56',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_7',
    questionText: 'Ktorým vetným členom je slovo //uzožieranie// v nasledujúcej vete z ukážky 7?\n//Uzožieranie zastaví len bozk.//',
    placeholder: 'Napíš vetný člen',
    correctAnswerDisplay: 'predmet',
    acceptedAnswers: [
      'predmet',
      'priamy predmet',
      'predmet v akuzatíve',
      'predmet v A',
      'predmetom',
      'priamym predmetom',
      'predmetom v akuzatíve',
      'predmetom v A'
    ],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'podmet',
        hint: 'Pozor na obrátený slovosled! Zamysli sa nad zmyslom Leonatovej vety: zastaví uzožieranie bozk, alebo naopak bozk zastaví (čo?) uzožieranie? „Bozk“ je tu vykonávateľom deja (podmetom)!'
      }
    ],
    hint: 'Nenechaj sa nachytať tým, že slovo „uzožieranie“ stojí na prvom mieste vo vete! Pri strednom rode sa nominatív a akuzatív zhodujú – spýtaj sa podľa logického zmyslu vety, kto/čo v nej vykonáva dej (čo lieči/zastavuje to druhé).',
    solutionSteps: [
      {
        title: 'Pozor na obrátený slovosled (podmet verzus predmet)',
        text: 'Beatrice v predchádzajúcej vete hovorí, že Benedik sa ide z lásky //uzožierať//, a Leonato s úsmevom reaguje: //„Uzožieranie zastaví len bozk.“// Zmyslom vety je, že **bozk** (podmet – //kto? čo?// zastaví) **zastaví** (prísudok) **uzožieranie** (//zastaví koho? čo?// → akuzatív).'
      },
      {
        title: 'Určenie vetného člena a hodnotenie kľúča',
        text: 'Slovo **uzožieranie** je teda vo vete **predmetom** (presnejšie **priamym predmetom** v bezpredložkovom akuzatíve), ktorý autor presunul na začiatok vety, aby nadviazal na predchádzajúcu repliku.\nKľúč NIVaM uznáva odpovede **predmet**, **priamy predmet**, **predmet v akuzatíve** aj **predmet v A** (prihliada sa na vecnú správnosť).'
      }
    ],
    solutionConclusion: 'Správna odpoveď: predmet (priamy predmet).'
  },

  // ---------------- Ukážka 8 – Jilemnický
  {
    id: 57,
    code: '57',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Čím sa podľa Zoé vyznačoval tulák z ukážky 8?',
    options: [
      { key: 'A', text: 'Túžbou po neopakovateľnom dobrodružstve.' },
      { key: 'B', text: 'Smerovaním k povrchnému životu.' },
      { key: 'C', text: 'Závislosťou od bezhraničnej slobody.' },
      { key: 'D', text: 'Sklonom k prirodzenému rebelantstvu.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Prečítaj si v Zoéinom liste vetu, v ktorej píše o „hnilobe meštiackeho života“. Čím ju podľa nej tulák „infikuje“?',
    solutionSteps: [
      {
        title: 'Doklad v liste Zoé',
        text: 'Zoé tulákovi píše: „Bohvie, kde infikuješ hnilobu meštiackeho života **bacilom zdravej vzbury**, jedno…“ Spojenie //zdravá vzbura// proti skostnatenému meštiackemu svetu vyjadruje práve **sklon k prirodzenému rebelantstvu** (vzdoru, búreniu sa).'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – o vyhľadávaní dobrodružstiev list nehovorí.\nB – povrchný („meštiacky“) život tulák naopak odmieta a narúša, kým sám „je krásu života sťa každodenný chlieb“.\nC – tulák síce žije voľne, no o žiadnej chorobnej závislosti od bezhraničnej slobody Zoé nepíše.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 58,
    code: '58',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktorý prvok je využitý v liste v ukážke 8?',
    options: [
      { key: 'A', text: 'vokatívne oslovenie' },
      { key: 'B', text: 'básnická otázka' },
      { key: 'C', text: 'rytmicko-syntaktický paralelizmus' },
      { key: 'D', text: 'automatický text' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Postupne si v Zoéinom liste over všetky štyri možnosti: sú v ňom opytovacie vety (básnická otázka)? Je list veršovaný (rytmicko-syntaktický paralelizmus)? Ide o voľný prúd predstáv bez kontroly rozumu (automatický text), alebo obsahuje oslovenie v staršom 5. páde s osobitnou príponou (napr. človeče, priateľu)?',
    solutionSteps: [
      {
        title: 'Vokatívne oslovenie v liste',
        text: 'Vo vete „Ži, ty hnedý **chlapče**, a jedz krásu života sťa každodenný chlieb“ je podstatné meno //chlapec// použité v osobitnom tvare 5. pádu (vokatívu) **chlapče!** namiesto nominatívu //chlapec//. Ide teda o **vokatívne oslovenie**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'B – v celom liste nie je ani jedna opytovacia veta (ani básnická/rečnícka otázka).\nC – rytmicko-syntaktický paralelizmus je zhoda verša s vetou vo veršovanej poézii, list je však prozaický.\nD – automatický text (voľný prúd podvedomých predstáv bez kontroly rozumu) je znakom nadrealizmu, kým Zoéin list má jasnú myšlienkovú stavbu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 59,
    code: '59',
    type: 'choice',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktoré typy textu využil autor v ukážke 8?',
    options: [
      { key: 'A', text: 'vecný súvislý text a monologický text' },
      { key: 'B', text: 'vecný nesúvislý text a monologický text' },
      { key: 'C', text: 'vecný súvislý text a dialogický text' },
      { key: 'D', text: 'vecný nesúvislý text a dialogický text' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Pozri sa na dve odlišné časti ukážky 8: 1. Je úradná tabuľka písaná v súvislých vetách a odsekoch, alebo je to nesúvislý text (heslá v stĺpcoch)? 2. Striedajú sa v ukážke repliky dvoch postáv (dialóg), alebo hovorí vždy len jeden podávateľ (monológ)?',
    solutionSteps: [
      {
        title: '1. Vecný nesúvislý text (tabuľka exhibitu)',
        text: 'Tabuľky, grafy, schémy, formuláre či cestovné poriadky netvoria súvislé vety v odsekoch, ale prehľadne usporiadané údaje v riadkoch a stĺpcoch – v typológii textov sa označujú ako **vecný nesúvislý text**.'
      },
      {
        title: '2. Monologický text (rozprávanie a list)',
        text: 'Úvodný rozprávací odsek aj Zoéin list sú prehovormi jedného podávateľa bez striedania replík postáv – ide o **monologický text** (v ukážke sa žiadny dialóg nenachádza, čím vypadávajú možnosti C a D).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 60,
    code: '60',
    type: 'choice',
    category: J,
    sharedContextId: 'ukazka_8',
    questionText: 'K lexike ktorého jazykového štýlu patrilo na základe ukážky 8 zvýraznené slovo //exhibit//?',
    options: [
      { key: 'A', text: 'administratívneho' },
      { key: 'B', text: 'hovorového' },
      { key: 'C', text: 'umeleckého' },
      { key: 'D', text: 'publicistického' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Všimni si prostredie, do ktorého prišla Zoé (kancelária, písací stroj, poradové čísla spisov), aj úradnú tabuľku hneď za slovom „exhibit“.',
    solutionSteps: [
      {
        title: 'Význam a štýlová príslušnosť slova exhibit',
        text: 'Zoé pracuje v **kancelárii** pri písacom stroji a slovo **exhibit** (z lat. – úradné podanie, spis zapísaný pod poradovým číslom do podacieho protokolu) uvádza priamo úradnú tabuľku s rubrikami //Poradové číslo, Kedy došlo, Od koho, Obsah, Ako bolo vybavené//. Išlo teda o kancelarizmus patriaci k lexike **administratívneho** (úradného) štýlu.'
      },
      {
        title: 'Prečo nie ostatné štýly',
        text: 'Hoci Peter Jilemnický vložil toto úradné slovo a tabuľku do umeleckej poviedky ako vtipný kontrast k ľúbostnému listu, samotné slovo //exhibit// na základe kancelárskeho kontextu ukážky nepatrilo do hovorového, umeleckého ani publicistického štýlu, ale do úradnej (administratívnej) praxe.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 61,
    code: '61',
    type: 'choice',
    category: L,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktorý umelecký prostriedok predstavuje veta //jedz krásu života sťa každodenný chlieb//?',
    options: [
      { key: 'A', text: 'epiteton' },
      { key: 'B', text: 'inotaj' },
      { key: 'C', text: 'prirovnanie' },
      { key: 'D', text: 'zosobnenie' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Kľúčom je krátke knižné slovo „sťa“ uprostred vety – spomeň si, ktorou bežnou porovnávacou spojkou ho môžeš nahradiť!',
    solutionSteps: [
      {
        title: 'Spojka „sťa“ ako znak prirovnania',
        text: 'Knižná spojka **sťa** (podobne ako //jak, ani, sťaby//) znamená **ako**: //„jedz krásu života **ako** každodenný chlieb“//. Vychutnávanie si krásy života sa tu na základe spoločnej črty (prirodzenej každodennej potreby) porovnáva s jedením chleba pomocou spojky //sťa// – ide o **prirovnanie**.'
      },
      {
        title: 'Prečo nie ostatné možnosti',
        text: 'A – **epiteton** je len básnický prívlastok pri podstatnom mene, nie celá porovnávacia veta so spojkou //sťa//.\nB – **inotaj** (alegória) je skrytý zmysel celého príbehu (napr. v bájkach).\nD – **zosobnenie** (personifikácia) prenáša ľudské vlastnosti na neživú vec, tu však Zoé oslovuje živého človeka (tuláka).'
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
    questionText: 'Vypíšte z listu z ukážky 8 zámeno, ktoré v ňom možno považovať za napísané chybne.',
    placeholder: 'Vypíš zámeno z listu',
    correctAnswerDisplay: 'ti / ťa / ty',
    acceptedAnswers: ['ti', 'ťa', 'ty'],
    commonMistakes: [
      {
        pattern: '^(môj|moja|ja|mi)$',
        hint: 'Zámená 1. osoby (ja, mi, môj, moja) odkazujú na pisateľku Zoé, preto sa v liste píšu s malým písmenom. Hľadaj osobné zámeno 2. osoby, ktorým sa Zoé prihovára adresátovi listu!'
      },
      {
        pattern: '^sme$',
        hint: 'Slovo „sme“ nie je zámeno, ale tvar pomocného slovesa byť. Hľadaj osobné zámeno 2. osoby, ktorým sa Zoé prihovára adresátovi listu!'
      },
      {
        pattern: '^(to|ten|každý|ktorý|ktorá)$',
        hint: 'Ukazovacie, vymedzovacie a vzťažné zámená sú v liste napísané správne. Spomeň si na pravopisné pravidlo o písaní osobných zámen adresáta v listoch!'
      }
    ],
    hint: 'Spomeň si na pravidlo slovenského pravopisu o písaní osobných listov: ako v liste na znak úcty píšeme osobné zámená 2. osoby, ktorými sa prihovárame adresátovi, a ako sú napísané v Zoéinom liste?',
    solutionSteps: [
      {
        title: 'Písanie zámen 2. osoby v listoch podľa PSP',
        text: 'Podľa //Pravidiel slovenského pravopisu// sa v osobnej korešpondencii (v súkromných a ľúbostných listoch, blahoželaniach a pod.) osobné a privlastňovacie zámená 2. osoby vzťahujúce sa na adresáta (**Ty, Teba, Ti, Ťa, Tvoj**) píšu na znak úcty a náklonnosti s **veľkým začiatočným písmenom**.'
      },
      {
        title: 'Tvary v Zoéinom liste a hodnotenie kľúča',
        text: 'V Zoéinom liste tulákovi sú však všetky tri tvary osobného zámena //ty// napísané s malým začiatočným písmenom:\n• **ťa** („ktorý vietor **ťa** svetom ženie a ktorá voda **ťa** nesie“, „moja vďaka **ťa** nájde“),\n• **ti** („ja **ti** za ten večer ďakujem“),\n• **ty** („Ži, **ty** hnedý chlapče“).\nKľúč NIVaM uznáva ktorýkoľvek z týchto troch tvarov (**ti**, **ťa** alebo **ty**), bez ohľadu na to, či ho vypíšeš s malým alebo veľkým písmenom.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: ti / ťa / ty.'
  },
  {
    id: 63,
    code: '63',
    type: 'text',
    category: S,
    sharedContextId: 'ukazka_8',
    questionText: 'Ktorý slohový postup sa uplatnil v tabuľkovej časti ukážky 8?',
    placeholder: 'Napíš slohový postup',
    correctAnswerDisplay: 'informačný',
    acceptedAnswers: ['informačný', 'informačný slohový postup', 'informačný postup'],
    lenient: true,
    commonMistakes: [
      {
        pattern: 'administratívn|úradn',
        hint: 'Pozor na zámenu pojmov: „administratívny“ je jazykový štýl, nie slohový postup! Vyber zo štyroch slohových postupov (rozprávací, opisný, výkladový, …).'
      }
    ],
    hint: 'Nezameň si jazykový štýl (administratívny) so slohovým postupom! Ktorý zo štyroch základných slohových postupov stručne a heslovite uvádza vecné fakty, čísla a dátumy (odpovedá na otázky čo, kto, kedy, kde, ako)?',
    solutionSteps: [
      {
        title: 'Znaky slohového postupu v tabuľke',
        text: 'Tabuľka exhibitu prináša stručné, heslovité údaje bez deja či vysvetľovania súvislostí: poradové číslo (//1/1924//), odosielateľa, stručný obsah, spôsob vybavenia a dátum (//19. VIII. 1924//). Vecné vymenúvanie faktov a údajov odpovedajúcich na otázky //čo? kto? kedy? kde? ako?// je základným znakom **informačného slohového postupu**.'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Kľúč NIVaM uznáva odpoveď **informačný** (príp. **informačný slohový postup**) s prihliadnutím na vecnú správnosť.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: informačný (slohový postup).'
  },
  {
    id: 64,
    code: '64',
    type: 'text',
    category: P,
    sharedContextId: 'ukazka_8',
    questionText: 'Vypíšte z ukážky 8 jedno prídavné meno, ktoré vyjadruje citový vzťah Zoé k tulákovi.',
    placeholder: 'Vypíš prídavné meno',
    correctAnswerDisplay: 'milý / ľúbostný',
    acceptedAnswers: [
      'milý',
      'ľúbostný',
      'milý / ľúbostný',
      'milý/ľúbostný',
      'ľúbostný / milý',
      'ľúbostný/milý',
      'milý, ľúbostný',
      'ľúbostný, milý',
      'milý a ľúbostný',
      'ľúbostný a milý',
      'milý ľúbostný',
      'ľúbostný milý'
    ],
    commonMistakes: [
      {
        pattern: '^môj$',
        hint: 'Slovo „môj“ síce naznačuje blízky vzťah, ale je to privlastňovacie zámeno, nie prídavné meno!'
      },
      {
        pattern: '^(hnedý|krásny|zdravej|ošklivé|hladnými)$',
        hint: 'Toto prídavné meno nevyjadruje citový vzťah Zoé k tulákovi (napr. „hnedý“ opisuje len opálenú pokožku chlapca). Pozri sa na prvé slovo oslovenia v liste alebo do stĺpca Obsah v tabuľke!'
      }
    ],
    hint: 'Neprehliadni, že súčasťou ukážky 8 nie je len úvodný odsek, ale aj tabuľka a samotný list. Hľadaj prídavné meno (aký?), ktoré priamo vyjadruje láskyplnú náklonnosť (pozor, slovo „môj“ je zámeno a „hnedý“ opisuje iba vzhľad).',
    solutionSteps: [
      {
        title: 'Prídavné mená vyjadrujúce citový vzťah Zoé k tulákovi',
        text: 'V ukážke 8 sa nachádzajú dve prídavné mená, ktoré priamo pomenúvajú vrúcny, láskyplný citový vzťah Zoé k tulákovi:\n1. **milý** – v oslovení na začiatku listu („**Milý** môj tulák,“),\n2. **ľúbostný** – v stĺpci //Obsah// v tabuľke exhibitu („**Ľúbostný** list tulákovi na Popokatepetl (?)“).'
      },
      {
        title: 'Ako hodnotí kľúč',
        text: 'Stačí vypísať jedno z týchto slov (**milý** alebo **ľúbostný**), prípadne kľúč NIVaM uznáva aj vypísanie oboch slov v akomkoľvek poradí. Slovo musí byť napísané pravopisne správne.'
      }
    ],
    solutionConclusion: 'Správna odpoveď: milý alebo ľúbostný.'
  }
];
