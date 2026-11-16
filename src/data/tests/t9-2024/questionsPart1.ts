import type { QuestionData } from '../../types';

export const questionsPart1: QuestionData[] = [
  {
    id: 1,
    code: '01',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie o disciplínach ZPH je podľa ukážky pravdivé?',
    options: [
      { key: 'A', text: 'V parasnoubordingu sme prvýkrát súťažili vo Vancouvri.' },
      { key: 'B', text: 'Sú určené iba pre zrakovo znevýhodnených športovcov.' },
      { key: 'C', text: 'Najväčší úspech v paraalpskom lyžovaní sme dosiahli v Soči.' },
      { key: 'D', text: 'Curling na vozíku je kolektívnym zimným športom.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Porovnaj jednotlivé možnosti so všetkými tromi odsekmi ukážky (Vancouver, Soči, Pjongčang) – všimni si najmä zmienku o curlingu na vozíku v odseku Soči.',
    solutionSteps: [
      {
        title: 'Overenie možnosti D v odseku Soči',
        text: 'V druhom odseku (Soči) sa výslovne píše: „Po prvý raz sme mali na zimných hrách zastúpenie v **kolektívnom športe – curlingu na vozíku**.“ Tvrdenie D je preto pravdivé.'
      },
      {
        title: 'Vylúčenie možností A, B, C',
        text: 'A – premiéru v parasnoubordingu sme zažili v **Soči**, nie vo Vancouvri.\nB – disciplíny nie sú určené iba pre zrakovo znevýhodnených, súťažia v nich aj **telesne znevýhodnení** športovci (napr. Petra Smaržová či curleri na vozíku).\nC – najúspešnejšie ZPH a 1. miesto v paraalpskom lyžovaní sme dosiahli v **Pjongčangu**, nie v Soči.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 2,
    code: '02',
    type: 'choice',
    category: 'Čítanie s porozumením (práca s údajmi)',
    sharedContextId: 'ukazka_1',
    questionText: 'Ktoré tvrdenie o medailistke Henriete Farkašovej __nevyplýva__ z ukážky?',
    options: [
      { key: 'A', text: 'Na ZPH v Soči sa umiestnila na šiestom mieste.' },
      { key: 'B', text: 'Vo Vancouvri a Pjongčangu získala celkovo osem medailí.' },
      { key: 'C', text: 'Je výbornou paraalpskou zjazdovou lyžiarkou.' },
      { key: 'D', text: 'Minimálne jedenkrát bola najúspešnejšou účastníčkou hier.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Pozor na podčiarknuté slovo „nevyplýva“! Skontroluj si v odseku Soči, kto v skutočnosti skončil na šiestom mieste, a spočítaj medaily H. Farkašovej z Vancouvru a Pjongčangu.',
    solutionSteps: [
      {
        title: 'Odhalenie tvrdenia A, ktoré z ukážky nevyplýva',
        text: 'V závere odseku Soči čítame: „V celkovej bilancii krajín **sme skončili na šiestom mieste**.“ Šieste miesto teda obsadila celá **slovenská výprava** v hodnotení krajín, nie samotná Henrieta Farkašová (tá sa v Soči opäť postarala o zlato).'
      },
      {
        title: 'Kontrola platnosti tvrdení B, C, D',
        text: 'B – vo Vancouvri vybojovala **3 zlaté** medaily a v Pjongčangu podľa medailového prehľadu **4 zlaté** (zjazd, superkombinácia, obrovský slalom, super-G) a **1 striebornú** (slalom), spolu teda **3 + 5 = 8 medailí**.\nC – opakovane víťazila v disciplínach alpského/paraalpského lyžovania vrátane zjazdu.\nD – v Pjongčangu „sa stala celosvetovo najúspešnejšou účastníčkou zimných hier“.'
      }
    ],
    solutionConclusion: 'Z ukážky nevyplýva tvrdenie v možnosti A.'
  },
  {
    id: 3,
    code: '03',
    type: 'choice',
    category: 'Komunikácia a pravopis (vykanie)',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti je správne zapísané vykanie?',
    options: [
      { key: 'A', text: 'Pani Smaržová, bola ste spokojná so svojím zjazdom?' },
      { key: 'B', text: 'Pán Krako, boli by ste taký ochotný a poskytol nám interview?' },
      { key: 'C', text: 'Pani Farkašová, stratili ste niekedy chuť súťažiť o medaily?' },
      { key: 'D', text: 'Pán Hlavina, cítite spokojnosť a ste šťastní za svoj dnešný výkon?' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Pri vykaní jednej osobe (mužovi aj žene) sú všetky slovesá v množnom čísle so zakončením -li (boli ste, poskytli, stratili ste), zatiaľ čo prídavné meno po slovese byť zostáva v jednotnom čísle (spokojná, taký ochotný, šťastný).',
    solutionSteps: [
      {
        title: 'Overenie správnej možnosti C',
        text: 'Vo vete C je oslovenie „Pani Farkašová,“ správne oddelené čiarkou a sloveso v minulom čase má pri vykaní jednej osobe správny tvar množného čísla so zakončením **-li**: **stratili ste**.'
      },
      {
        title: 'Chyby v možnostiach A, B, D',
        text: 'A – nesprávny tvar slovesa v jednotnom čísle „bola ste“ (správne: **boli ste** spokojná).\nB – druhé sloveso v súvetí zostalo v jednotnom čísle „a poskytol nám“ (správne: boli by ste taký ochotný a **poskytli** nám).\nD – pri vykaní jednému mužovi musí byť prídavné meno v prísudku v jednotnom čísle s tvrdým **-ý** (správne: a ste **šťastný**, nie „šťastní“).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 4,
    code: '04',
    type: 'choice',
    category: 'Lexikológia (združené pomenovania)',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti sa nachádzajú iba združené pomenovania?',
    options: [
      { key: 'A', text: 'cenných kovov, v celosvetovej súťaži' },
      { key: 'B', text: 'obrovský slalom, paralympijských hrách' },
      { key: 'C', text: 'zlaté medaily, brilantných športovcov' },
      { key: 'D', text: 'fantastický Vancouver, kolosálny úspech' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Združené pomenovanie je ustálené viacslovné pomenovanie jedného konkrétneho pojmu, disciplíny alebo podujatia (podobne ako základná škola či skok do diaľky), nie voľné spojenie s hodnotiacim prídavným menom.',
    solutionSteps: [
      {
        title: 'Ako spoznáš združené pomenovanie',
        text: '**Združené pomenovanie** je ustálené viacslovné spojenie, ktoré ako celok pomenúva jednu skutočnosť, odborný pojem alebo inštitúciu (napr. //osobný vlak, stredná škola//). V možnosti **B** sú obe spojenia ustálenými športovými názvami: **obrovský slalom** (názov konkrétnej lyžiarskej disciplíny) a **paralympijské hry** (oficiálny názov športového podujatia).'
      },
      {
        title: 'Prečo ostatné možnosti neplatia',
        text: 'V možnostiach A, C a D sa nachádzajú voľné slovné spojenia s bežnými hodnotiacimi a opisnými prídavnými menami (//v celosvetovej súťaži, brilantných športovcov, fantastický Vancouver, kolosálny úspech//).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 5,
    code: '05',
    type: 'choice',
    category: 'Tvaroslovie (skloňovacie vzory podstatných mien)',
    sharedContextId: 'ukazka_1',
    questionText: 'V ktorej možnosti sa obe slová skloňujú podľa rovnakého vzoru?',
    options: [
      { key: 'A', text: 'hier, v disciplínach' },
      { key: 'B', text: 'reprezentantov, športov' },
      { key: 'C', text: 'v súťaži, medailí' },
      { key: 'D', text: 'medailistov, navádzačmi' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Daj si každé podstatné meno do základného tvaru (nominatív jednotného čísla), urči jeho rod (pri mužskom rode aj životnosť) a zakončenie.',
    solutionSteps: [
      {
        title: 'Určenie vzorov v správnej možnosti A',
        text: '• //hier// → základný tvar //tá hra// (ženský rod, zakončené na **-a** po obojakej spoluhláske //r//) → vzor **žena**.\n• //v disciplínach// → základný tvar //tá disciplína// (ženský rod, zakončené na **-a** po obojakej spoluhláske //n//) → vzor **žena**.\nObe podstatné mená sa skloňujú podľa rovnakého vzoru **žena**.'
      },
      {
        title: 'Porovnanie vzorov v možnostiach B, C, D',
        text: 'B – //reprezentant// (mužský životný, spoluhláska → vzor **chlap**) × //šport// (mužský neživotný, tvrdá spoluhláska → vzor **dub**).\nC – //súťaž// (ženský rod, spoluhláska, N pl. //súťaže// → vzor **dlaň**) × //medaila// (ženský rod, zakončené na //-a// → vzor **žena**).\nD – //medailista// (mužský životný, zakončené na //-a// → vzor **hrdina**) × //navádzač// (mužský životný, spoluhláska → vzor **chlap**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 6,
    code: '06',
    type: 'text',
    category: 'Lexikológia (synonymá)',
    sharedContextId: 'ukazka_1',
    questionText: 'Vypíš z prvého odseku ukážky (ZPH Vancouver) synonymum slova //expedícia//.',
    placeholder: 'Vypíš slovo z 1. odseku',
    correctAnswerDisplay: 'výprava',
    acceptedAnswers: [
      'výprava',
      'Výprava',
      'výpravy',
      'výprave',
      'výpravu',
      'výpravou',
      'výprav',
      'výpravám',
      'výpravách',
      'výpravami'
    ],
    footnote:
      'Odpovede na túto úlohu môžu byť zapísané v akomkoľvek gramatickom tvare, ale musia byť pravopisne správne.',
    commonMistakes: [
      {
        pattern: '^v[ií]prav',
        hint: 'Predpona vý- sa v podstatnom mene „výprava“ píše s dlhým tvrdým ý.'
      }
    ],
    hint: 'Prečítaj si poslednú vetu prvého odseku (Vancouver) – akým domácim slovom je v nej pomenovaná skupina našich vyslaných športovcov?',
    solutionSteps: [
      {
        title: 'Vyhľadanie synonyma v 1. odseku',
        text: 'V poslednej vete 1. odseku sa píše: „Naša **výprava** získala celkom 11 medailí...“'
      },
      {
        title: 'Overenie významu a pravopisu',
        text: 'Cudzie slovo //expedícia// znamená organizovanú cestu alebo skupinu ľudí vyslanú s určitým cieľom – jeho domácim synonymom je slovo **výprava** (s dlhým tvrdým **ý** v predpone).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je výprava.'
  },
  {
    id: 7,
    code: '07',
    type: 'text',
    category: 'Lexikológia (tvorenie slov – skladanie)',
    sharedContextId: 'ukazka_1',
    questionText: 'Z druhého odseku ukážky (ZPH Soči) vypíš zložené slovo, ktoré __nie je__ cudzieho pôvodu.',
    placeholder: 'Vypíš zložené slovo z 2. odseku',
    correctAnswerDisplay: 'menoslov',
    acceptedAnswers: [
      'menoslov',
      'Menoslov',
      'menoslovu',
      'menoslove',
      'menoslovom',
      'menoslovy',
      'menoslovov',
      'menoslovoch',
      'menoslovmi'
    ],
    footnote:
      'Odpovede na túto úlohu môžu byť zapísané v akomkoľvek gramatickom tvare, ale musia byť pravopisne správne.',
    commonMistakes: [
      {
        pattern: 'parasnoubord',
        hint: 'Slovo „parasnoubording“ je cudzieho pôvodu (z gréckeho para- a anglického snowboarding). Hľadaj v 2. odseku zložené slovo z domácich základov!'
      },
      {
        pattern: '^(znevýhodnen|celkov)',
        hint: 'Zložené slovo musí obsahovať dva slovné korene (základy) spojené zvyčajne spájacou samohláskou -o-. Pozri sa do druhej vety odseku Soči.'
      }
    ],
    hint: 'Hľadaj v druhej vete odseku Soči slovo zložené z dvoch domácich slovných základov spojených samohláskou -o-, ktoré označuje zoznam mien.',
    solutionSteps: [
      {
        title: 'Vyhľadanie zloženého domáceho slova v 2. odseku',
        text: 'V druhej vete odseku Soči čítame: „Za zmienku stojí aj rovnaký **menoslov** medailistov...“'
      },
      {
        title: 'Rozbor stavby a pôvodu slova',
        text: 'Podstatné meno **menoslov** (zoznam mien) vzniklo skladaním dvoch domácich koreňov (**men-** od //meno// + spájacia samohláska **-o-** + **-slov** od //slovo//). Na rozdiel od slova //parasnoubordingu// teda **nie je** cudzieho pôvodu.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je menoslov.'
  },
  {
    id: 8,
    code: '08',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Čo podľa ukážky v súčasnosti ohrozuje vzdelávanie a vedecko-technický výskum?',
    options: [
      { key: 'A', text: 'Máme nedostatok inšpiratívnych učiteľov v školách.' },
      { key: 'B', text: 'Mladí ľudia, lebo sa málo zaujímajú o vedu a techniku.' },
      { key: 'C', text: 'Široká verejnosť nedôveruje vedcom a odborníkom.' },
      { key: 'D', text: 'Nemožno zodpovedať všetky existujúce vedecké otázky.' }
    ],
    correctAnswerDisplay: 'C',
    acceptedAnswers: ['C'],
    hint: 'Prečítaj si tretí odsek ukážky – akej „globálnej vzbury“ sme podľa autora v súčasnosti svedkami?',
    solutionSteps: [
      {
        title: 'Overenie možnosti C v 3. odseku',
        text: 'V treťom odseku autor píše: „Výchova, vzdelávanie a vedecko-technický výskum sú však v súčasnosti ohrozené viac ako kedykoľvek predtým. **Sme svedkami globálnej vzbury proti odborníkom, ktorá zahŕňa aj vedcov.**“ Celosvetová vzbura proti odborníkom a vedcom znamená, že im široká verejnosť nedôveruje a odmieta ich poznatky.'
      },
      {
        title: 'Vylúčenie možností A, B, D',
        text: 'A – autor píše, že základ budúcnosti musí spočívať v školách a inšpiratívnych učiteľoch, nespomína však ich nedostatok ako hrozbu.\nB – o nezáujme mladých ľudí sa v texte nepíše.\nD – nezodpovedané veľké otázky sú prirodzenou súčasťou vedy, nie hrozbou pre vzdelávanie.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je C.'
  },
  {
    id: 9,
    code: '09',
    type: 'choice',
    category: 'Čítanie s porozumením',
    sharedContextId: 'ukazka_2',
    questionText: 'Ktoré tvrdenie __nie je__ na základe ukážky pravdivé?',
    options: [
      { key: 'A', text: 'Myseľ potrebuje na dosiahnutie maximálneho výkonu nejaký podnet.' },
      { key: 'B', text: 'Podnet pobádajúci k zamysleniu zvykne pochádzať od učiteľa.' },
      { key: 'C', text: 'Ľudská myseľ je schopná predviesť kreatívne i detailné myslenie.' },
      { key: 'D', text: 'Autor bez námahy prijímal rôzne nové podnety a učil sa.' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Všimni si podčiarknuté slová „nie je“ a prečítaj si tretiu vetu druhého odseku, kde Stephen Hawking spomína na to, aké ľahké či ťažké bolo niečo ho naučiť.',
    solutionSteps: [
      {
        title: 'Odhalenie nepravdivého tvrdenia D v 2. odseku',
        text: 'V druhom odseku autor otvorene spomína: „**Nebolo práve najľahšie niečo ma naučiť.**“ Tvrdenie D, že bez námahy prijímal nové podnety a učil sa, je preto v priamom rozpore s ukážkou.'
      },
      {
        title: 'Prečo sú tvrdenia A, B, C pravdivé',
        text: 'A – „Každá myseľ však na to, aby dosiahla plný potenciál, potrebuje iskru.“\nB – „Táto iskra často pochádza od učiteľa.“\nC – myseľ si dokáže predstaviť aj „zložitosti základných zložiek hmoty“ a učiteľ autora priviedol „k tvorivému premýšľaniu“.'
      }
    ],
    solutionConclusion: 'Nepravdivé je tvrdenie v možnosti D.'
  },
  {
    id: 10,
    code: '10',
    type: 'choice',
    category: 'Literatúra a sloh (druhy textov)',
    sharedContextId: 'ukazka_2',
    questionText: 'Uvedená ukážka',
    options: [
      { key: 'A', text: 'je vedecko-populárna.' },
      { key: 'B', text: 'je denník.' },
      { key: 'C', text: 'je vedecko-fantastická.' },
      { key: 'D', text: 'je encyklopédia.' }
    ],
    correctAnswerDisplay: 'A',
    acceptedAnswers: ['A'],
    hint: 'Zamysli sa nad účelom textu: vedec sa prihovára bežným čitateľom zrozumiteľným, pútavým jazykom o skutočnej vede (matematike, kozmológii) a vzdelávaní.',
    solutionSteps: [
      {
        title: 'Znaky vedecko-populárnej literatúry',
        text: 'Stephen Hawking v ukážke približuje širokej verejnosti témy skutočnej vedy, výskumu a vzdelávania **prístupným, pútavým a osobným štýlom** (spája fakty s vlastnou spomienkou a rečníckymi otázkami). Takýto typ literatúry faktu sa nazýva **vedecko-populárna literatúra**.'
      },
      {
        title: 'Vylúčenie ostatných možností',
        text: 'B – **denník** obsahuje chronologické súkromné záznamy udalostí označené dátumami.\nC – **vedecko-fantastická literatúra** (sci-fi) je umelecká próza s vymysleným dejom (napr. v ďalekej budúcnosti).\nD – **encyklopédia** prináša stručné, vecné a neosobné heslá zoradené abecedne alebo tematicky.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je A.'
  },
  {
    id: 11,
    code: '11',
    type: 'choice',
    category: 'Lexikológia (synonymá v kontexte)',
    sharedContextId: 'ukazka_2',
    questionText:
      'V ktorej možnosti je uvedené slovné spojenie, ktoré nahrádza význam podčiarknutej časti nasledujúcej vety?\n//Dnes nám kozmológia prostredníctvom teoretických prác a __vedeckých triumfov__ sprístupňuje vesmír.//',
    options: [
      { key: 'A', text: 'pokusných typov' },
      { key: 'B', text: 'bádateľských úspechov' },
      { key: 'C', text: 'veľkolepých faktov' },
      { key: 'D', text: 'výskumných predpokladov' }
    ],
    correctAnswerDisplay: 'B',
    acceptedAnswers: ['B'],
    hint: 'Rozlož si spojenie na dve slová: kto inými slovami je vedec (bádateľ) a čo znamená cudzie slovo „triumf“ (veľké víťazstvo, úspech)?',
    solutionSteps: [
      {
        title: 'Nahradenie oboch slov synonymami',
        text: '• Prídavné meno **vedeckých** môžeme nahradiť synonymom **bádateľských** (//bádateľ// = vedec, výskumník).\n• Podstatné meno cudzieho pôvodu **triumfov** znamená veľkých víťazstiev, čiže **úspechov**.\nSpojenie //vedeckých triumfov// teda presne vystihuje výraz **bádateľských úspechov**.'
      },
      {
        title: 'Prečo ostatné možnosti menia význam',
        text: 'Slová //typov// (A), //faktov// (C) ani //predpokladov// (D) nezodpovedajú významu slova //triumf// (víťazstvo, úspech).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je B.'
  },
  {
    id: 12,
    code: '12',
    type: 'choice',
    category: 'Tvaroslovie (pády podstatných mien)',
    sharedContextId: 'ukazka_2',
    questionText: 'V ktorej možnosti sú všetky podstatné mená v rovnakom páde?',
    options: [
      { key: 'A', text: 'zapriahnuť energiu, čudáckym odvetvím' },
      { key: 'B', text: 'každá myseľ, dosiahla potenciál' },
      { key: 'C', text: 'za výnimočným človekom, existujú otázky' },
      { key: 'D', text: 'globálnej vzbury, závisieť od vedy' }
    ],
    correctAnswerDisplay: 'D',
    acceptedAnswers: ['D'],
    hint: 'Spýtaj sa na každé podstatné meno pádovou otázkou (nezabudni si pri bezpredložkovom tvare v ukážke 2 pozrieť celú vetu: „Sme svedkami globálnej vzbury...“).',
    solutionSteps: [
      {
        title: 'Určenie pádov v správnej možnosti D',
        text: '• //(svedkami)// globálnej **vzbury** – pýtame sa //koho? čoho?// → **genitív**.\n• závisieť od **vedy** – pýtame sa //od koho? od čoho?// → **genitív**.\nObe podstatné mená sú v rovnakom páde (**v genitíve**).'
      },
      {
        title: 'Pády podstatných mien v možnostiach A, B, C',
        text: 'A – zapriahnuť **energiu** (koho? čo? → **akuzatív**) × čudáckym **odvetvím** (kým? čím? → **inštrumentál**).\nB – každá **myseľ** (kto? čo? → **nominatív**) × dosiahla **potenciál** (koho? čo? → **akuzatív**).\nC – za výnimočným **človekom** (za kým? za čím? → **inštrumentál**) × existujú **otázky** (kto? čo? → **nominatív**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je D.'
  },
  {
    id: 13,
    code: '13',
    type: 'text',
    category: 'Lexikológia a pravopis (slová cudzieho pôvodu)',
    sharedContextId: 'ukazka_2',
    questionText:
      'Do nasledujúceho textu doplň správne slovo cudzieho pôvodu, ktoré je zároveň vyučovacím predmetom aj v základnej škole.',
    fillSentenceHtml:
      'Stephen Hawking bol excelentným vedcom. Dokázal teóriu Veľkého tresku, ktorá vysvetľuje vznik vesmíru. Venoval sa zákonom pohybu telies a vlastnostiam hmoty. Napísal veľké množstvo popularizačných kníh pre verejnosť, v ktorých sa snažil prístupným spôsobom priblížiť veľké objavy teoretickej {{blank}} a kozmológie.',
    placeholder: 'Doplň vyučovací predmet',
    correctAnswerDisplay: 'fyziky',
    acceptedAnswers: ['fyziky', 'Fyziky', 'fyzika', 'Fyzika', 'fyzike', 'fyziku', 'fyzikou'],
    footnote:
      'Odpovede na túto úlohu môžu byť zapísané v akomkoľvek gramatickom tvare, ale musia byť pravopisne správne.',
    commonMistakes: [
      {
        pattern: 'f[ií]zik|fyz[yý]k',
        hint: 'Pozor na pravopis slova cudzieho pôvodu „fyzika“: po f sa píše tvrdé y a po z mäkké i (fyziky / fyzika).'
      },
      {
        pattern: '^(matematik|chémi|biológi|geografi)',
        hint: 'Prečítaj si v texte tretiu vetu: ktorý školský predmet skúma „zákony pohybu telies a vlastnosti hmoty“?'
      }
    ],
    hint: 'V tretej vete máš priamu pomôcku: ktorý prírodovedný predmet v základnej škole skúma zákony pohybu telies a vlastnosti hmoty? Daj pozor na i/y v tomto slove cudzieho pôvodu!',
    solutionSteps: [
      {
        title: 'Určenie vyučovacieho predmetu podľa opisu v texte',
        text: 'Prírodná veda (a vyučovací predmet v ZŠ), ktorá skúma zákony pohybu telies, silu, energiu a vlastnosti hmoty – a ktorej bol Stephen Hawking svetoznámym predstaviteľom –, je **fyzika**.'
      },
      {
        title: 'Tvar vo vete a pravopis',
        text: 'Vo vete stojí v genitíve jednotného čísla: //objavy teoretickej **fyziky** a kozmológie// (podľa kľúča sa uznáva aj základný tvar **fyzika**). V slove cudzieho pôvodu **fyziky** píšeme po //f// tvrdé **y** a po //z// mäkké **i**.'
      }
    ],
    solutionConclusion: 'Správna odpoveď je fyziky (alebo fyzika).'
  },
  {
    id: 14,
    code: '14',
    type: 'text',
    category: 'Tvaroslovie a pravopis (skloňovanie v inštrumentáli)',
    sharedContextId: 'ukazka_2',
    questionText: 'Doplň správne do nasledujúcej časti vety slovné spojenie //dnešní školáci//.',
    fillSentenceHtml: '//Musíme veľa diskutovať o vede a technike s// {{blank}}//, ktorí sú súčasťou dynamickej éry.//',
    placeholder: 'Doplň slovné spojenie v správnom tvare',
    correctAnswerDisplay: 'dnešnými školákmi',
    acceptedAnswers: ['dnešnými školákmi', 'Dnešnými školákmi'],
    commonMistakes: [
      {
        pattern: 'dnešn[ií]mi',
        hint: 'Prídavné meno „dnešný“ sa skloňuje podľa vzoru pekný (v N sg. má tvrdé -ý), preto má v inštrumentáli množného čísla dlhé tvrdé -ý- (dnešnými).'
      },
      {
        pattern: '^so?\\s+dnešn',
        hint: 'Predložka „s“ je už vo vete pred políčkom vytlačená – dopíš iba samotné slovné spojenie (dnešnými školákmi).'
      },
      {
        pattern: 'školákami$',
        hint: 'Podstatné meno „školák“ sa skloňuje podľa vzoru chlap – v inštrumentáli množného čísla má príponu -mi (chlapmi → školákmi).'
      }
    ],
    hint: 'Predložka „s“ sa viaže s inštrumentálom množného čísla (diskutovať s kým? s čím?). Over si vzor prídavného mena podľa jednotného čísla (dnešný chlapec – vzor pekný, nie cudzí!).',
    solutionSteps: [
      {
        title: 'Určenie pádu po predložke „s“',
        text: 'Na spojenie po predložke //s// sa pýtame pádovou otázkou **s kým? s čím?** – ide o **inštrumentál množného čísla**.'
      },
      {
        title: 'Kontrola vzorov a pádových prípon',
        text: '• Prídavné meno //dnešný// (od príslovky //dnes//) má v základnom tvare tvrdé **-ý**, skloňuje sa teda podľa vzoru **pekný** (//s peknými// → s **dnešnými**, s dlhým tvrdým **-ý-**).\n• Životné podstatné meno //školák// sa skloňuje podľa vzoru **chlap** (//s chlapmi// → **školákmi**).'
      }
    ],
    solutionConclusion: 'Správna odpoveď je dnešnými školákmi.'
  }
];
