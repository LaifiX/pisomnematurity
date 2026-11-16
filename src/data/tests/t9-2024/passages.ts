import type { SharedPassage } from '../../types';

const AGITOS_IMG = `<img class="passage-agitos" src="/images/t9-2024/ukazka1-agitos.svg" width="38" height="27" alt="" aria-hidden="true" decoding="async" />`;

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · Zimné paralympijské hry (úlohy 01 – 07)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <h3 class="passage-title">ZIMNÉ PARALYMPIJSKÉ HRY (ZPH)</h3>

        <h4 class="passage-subhead">${AGITOS_IMG}<span>Vancouver</span></h4>
        <div class="sjl-zph-block">
          <figure class="sjl-figure sjl-zph-athlete is-left">
            <img
              src="/images/t9-2024/ukazka1-lyziar.svg"
              width="106"
              height="146"
              alt="Ilustrácia paralyžiara na lyžiach s palicami"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p>Naši športovci dosiahli na zimných paralympijských hrách vo Vancouvri kolosálny úspech. Dvaja mladí zrakovo znevýhodnení lyžiari Henrieta Farkašová a Jakub Krako spolu so svojimi navádzačmi vybojovali v alpskom lyžovaní po tri zlaté medaily. Naša výprava získala celkom 11 medailí a skončili sme na famóznom štvrtom mieste v celosvetovej súťaži zimných športov!</p>
        </div>

        <h4 class="passage-subhead">${AGITOS_IMG}<span>Soči</span></h4>
        <div class="sjl-zph-block">
          <figure class="sjl-figure sjl-zph-athlete is-right">
            <img
              src="/images/t9-2024/ukazka1-snoubordista.svg"
              width="138"
              height="150"
              alt="Ilustrácia parasnoubordistu vo výskoku na snouborde"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p>Slovensko nadviazalo na fantastický Vancouver a vybojovalo sedem cenných kovov. Za zmienku stojí aj rovnaký menoslov medailistov, o zlato sa opäť postarali zrakovo znevýhodnení športovci Henrieta Farkašová a Jakub Krako. Striebornou medailou prispel Miroslav Haraus, z telesne znevýhodnených zjazdárok získala bronz aj Petra Smaržová. Po prvý raz sme mali na zimných hrách zastúpenie v kolektívnom športe – curlingu na vozíku. Vďaka individuálnemu výkonu Mareka Hlavinu sme nechýbali ani pri premiére parasnoubordingu. V celkovej bilancii krajín sme skončili na šiestom mieste.</p>
        </div>

        <h4 class="passage-subhead">${AGITOS_IMG}<span>Pjongčang</span></h4>
        <p>Kórejské svahy boli svedkom najlepšieho športového vystúpenia našich brilantných reprezentantov. Opäť boli medailovými ťahúňmi Henrieta Farkašová a Jakub Krako, svoj prvý zlatý kov si pripísal na konto aj ďalší zrakovo znevýhodnený zjazdár Miroslav Haraus. Získali sme 11 medailí, z toho 6 zlatých, ale práve 4 strieborné urobili z Pjongčangu najúspešnejšie ZPH. V paraalpskom lyžovaní sme v hodnotení krajín obsadili 1. miesto a Henrieta Farkašová sa stala celosvetovo najúspešnejšou účastníčkou zimných hier.</p>

        <div class="passage-medals">
          <figure class="sjl-figure sjl-zph-athlete is-medalist">
            <img
              src="/images/t9-2024/ukazka1-medailista.svg"
              width="89"
              height="148"
              alt="Ilustrácia športovca ukazujúceho medailu zavesenú na krku"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p class="passage-medals-title">Medailová bilancia ZPH Pjongčang v disciplínach alpského lyžovania</p>
          <p class="passage-medals-total"><strong>11</strong> (6 – 4 – 1)</p>

          <div class="passage-medal-group">
            <div class="passage-medal-head">
              <img class="passage-medal-icon" src="/images/t9-2024/ukazka1-medaila-1.svg" width="26" height="26" alt="1." decoding="async" />
              <span>Zlato</span>
            </div>
            <ul class="passage-medal-list">
              <li><strong>Henrieta Farkašová</strong> s navádzačkou Natáliou Šubrtovou: zjazd, superkombinácia, obrovský slalom, super-G</li>
              <li><strong>Jakub Krako</strong> s navádzačom Branislavom Brozmanom: super-G</li>
              <li><strong>Miroslav Haraus</strong> s navádzačom Marošom Hudíkom: superkombinácia</li>
            </ul>
          </div>

          <div class="passage-medal-group">
            <div class="passage-medal-head">
              <img class="passage-medal-icon" src="/images/t9-2024/ukazka1-medaila-2.svg" width="26" height="26" alt="2." decoding="async" />
              <span>Striebro</span>
            </div>
            <ul class="passage-medal-list">
              <li><strong>Jakub Krako</strong> s navádzačom Branislavom Brozmanom: zjazd, obrovský slalom, slalom</li>
              <li><strong>Henrieta Farkašová</strong> s navádzačkou Natáliou Šubrtovou: slalom</li>
            </ul>
          </div>

          <div class="passage-medal-group">
            <div class="passage-medal-head">
              <img class="passage-medal-icon" src="/images/t9-2024/ukazka1-medaila-3.svg" width="26" height="26" alt="3." decoding="async" />
              <span>Bronz</span>
            </div>
            <ul class="passage-medal-list">
              <li><strong>Miroslav Haraus</strong> s navádzačom Marošom Hudíkom: super-G</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · Stručné odpovede na veľké otázky (úlohy 08 – 14)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <p class="passage-author">Stephen Hawking</p>
        <h3 class="passage-title">Stručné odpovede na veľké otázky</h3>
        <p>Ľudská myseľ je niečo neuveriteľné. Dokáže si predstaviť veľkoleposť neba i zložitosti základných zložiek hmoty. Každá myseľ však na to, aby dosiahla plný potenciál, potrebuje iskru. Iskru skúmania a údivu.</p>
        <p>Táto iskra často pochádza od učiteľa. Dovoľte, aby som to vysvetlil. Nebolo práve najľahšie niečo ma naučiť. Ale keď som mal štrnásť rokov, môj učiteľ mi ukázal, ako zapriahnuť svoju energiu, a priviedol ma k tvorivému premýšľaniu o matematike. Naučil ma vidieť matematiku ako plán samotného vesmíru. Za každým výnimočným človekom uvidíte výnimočného učiteľa. Keď premýšľame o tom, čo vieme v živote robiť, je pravdepodobné, že to vieme vďaka nejakému učiteľovi.</p>
        <p>Výchova, vzdelávanie a vedecko-technický výskum sú však v súčasnosti ohrozené viac ako kedykoľvek predtým. Sme svedkami globálnej vzbury proti odborníkom, ktorá zahŕňa aj vedcov. Čo teda urobíme, aby sme zabezpečili budúcnosť vedeckého a technického vzdelania?</p>
        <p>Základ budúcnosti výchovy a vzdelávania musí spočívať v školách a inšpiratívnych učiteľoch.</p>
        <p>Keď som začal pracovať vo svojom odbore, kozmológia bola málo známym a čudáckym odvetvím. Dnes nám kozmológia prostredníctvom teoretických prác a vedeckých triumfov sprístupňuje vesmír. Existujú veľké otázky, ktoré stále čakajú na svoju odpoveď. Ale dnes vieme viac...</p>
        <p>Čo však leží pred jednotlivcami, ktorí sú dnes mladí? Môžem s istotou vyhlásiť, že ich budúcnosť bude závisieť od vedy a techniky. O vede musia vedieť viac ako predchádzajúce generácie, pretože sa neopakovateľným spôsobom stala súčasťou ich každodenného života.</p>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Kareta obyčajná (úlohy 15 – 21)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <h3 class="passage-title">Kareta obyčajná – unikátny živočíšny druh</h3>
        <p>Aj keď väčšinu času pláva v mori, patrí medzi plazy, čo potvrdzuje to, že jej telesná teplota je závislá od teploty prostredia a že má pľúca, čo ju núti pravidelne vyplávať nad hladinu, aby sa nadýchla.</p>

        <div class="passage-table-split">
          <table class="passage-info-table">
            <tbody>
              <tr><th scope="row">Zaradenie</th><td>morský plaz</td></tr>
              <tr><th scope="row">Dĺžka</th><td>zhruba 1 m</td></tr>
              <tr><th scope="row">Hmotnosť</th><td>cez 80 kg (najťažšie aj viac ako 400 kg)</td></tr>
              <tr><th scope="row">Končatiny</th><td>plutvy</td></tr>
              <tr><th scope="row">Dýchanie</th><td>pľúcami</td></tr>
              <tr><th scope="row">Plodný vek</th><td>od 25 rokov</td></tr>
              <tr><th scope="row">Doba liahnutia</th><td>40 až 60 dní</td></tr>
            </tbody>
          </table>
          <figure class="sjl-figure sjl-turtle-fig">
            <img
              src="/images/t9-2024/ukazka3-kareta.webp"
              width="321"
              height="230"
              alt="Ilustrácia morskej korytnačky – karety obyčajnej"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <p>Kareta znáša vajcia na piesočnatých plážach, ktoré sú ľahko prístupné a súčasne dobre chránené pred nepriazňou počasia. Karety v okolí pobrežia ostrova ostávajú asi pol roka, počas tohto obdobia sa korytnačky pária a do konca leta samičky znesú vajcia v priemere 3- až 4-krát. Kareta po zotmení vystúpi na pevninu a po mäkkom piesku sa doplazí až na pláž, kde plutvami vyhĺbi zhruba 40-centimetrovú jamku a uloží do nej okolo 120 vajec s mäkkou škrupinou. Hniezdo potom opatrne zahrabe pieskom a vyčerpaná svojím úsilím sa vráti späť do mora. Zo 60 – 70 % vajíčok sa neskôr za úsvitu vyliahnu maličké korytnačky, z ktorých žiadna nemeria viac ako 5 cm. Zaujímavosťou je, že pohlavie mláďat je závislé od vonkajšej teploty, v ktorej vajíčka dozrievajú – na teplých plážach sa liahnu prevažne samičky a na chladných samčeky. Vykuknú z piesočnatého hniezda a bez otáľania vyrazia na cestu smerom k moru. Inštinktívne pritom hľadajú svetlý bod na obzore, ktorý má byť podľa ich genetickej informácie morom. Tie metre, ktoré mláďatá delia od morskej hladiny, sú veľmi náročné a plné nebezpečenstva. Je to najvýznamnejšia a súčasne najťažšia cesta ich života.</p>
        <p>Karety, ktorým sa podarí dostať sa do mora, sa vracajú späť až v reprodukčnom veku, aby sa spárili a zniesli svoje vajíčka na rovnakej pláži, kde sa narodili. Predpokladá sa, že len 1 – 2 mláďatá z tisícky sa dožijú dospelosti a privedú na svet potomstvo, preto ochranári roky pracujú na tom, aby ich populáciu zachránili.</p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka · Bájka o starej lasici a myši (úlohy 22 a 23)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Na nasledujúcu bájku sa vzťahujú úlohy 22 a 23</div>
        <h3 class="passage-title">Bájka o starej lasici a myši</h3>
        <p style="margin-bottom:0;">Keď lasica zostarla, s mladosťou ju opustila aj jej niekdajšia šikovnosť a obratnosť. Dokonca ani myši sa jej nebáli a stále sa jej vysmievali, keďže už nebola dosť rýchla, aby ich chytila. Stará lasica toho už mala dosť, a tak sa schytila a zaliezla do vreca múky. Dôkladne sa ňou prikryla, netrčala jej z nej ani špička nosa. Len čo myši objavili vrece, už aj sa hnali, aby sa dobre pohostili. To boli hody! Avšak neboli to myši, čo si napchali bruchá, ale prefíkaná lasica! Pochytala všetky myši, ktoré sa čo len obtreli o vrece s múkou.</p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka · Pieseň Zažni (úloha 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Na nasledujúcu pieseň sa vzťahuje úloha 24</div>
        <h3 class="passage-title" style="text-align:left;">Zažni</h3>
        <div class="passage-poem">
          Zažni aspoň kúsok sviece,<br />
          nemaj, prosím, z toho strach,<br />
          nech sa svetlo zatrbliece<br />
          v nočných kalužiach.<br /><br />
          Keď sa v tvojom okne zažne,<br />
          láska vstúpi do dverí,<br />
          že to so mnou myslíš vážne,<br />
          aj dážď uverí.
        </div>
        <p class="passage-poem-credit">Autor textu: Ján Štrasser<br />Interpret: Miroslav Žbirka</p>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka · Naša trieda (úloha 26)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Na nasledujúci text sa vzťahuje úloha 26</div>
        <p style="text-indent:0;margin-bottom:0;">Naša triedna populácia je veľmi variabilná. Niektoré indivíduá čítajú pod lavicou komiksy s tematikou sci-fi, iní magazíny o kurze eura. Jano Cviker, triedny spíker, propaguje anekdoty o škole. Olina hovorí čosi o diskvalifikácii a diskriminácii. Triedna nám navrhuje konsenzus a hrozí klasifikáciou. Má na to kvalifikáciu. Prišiel k nám inkognito inšpektor. Všetci sme happy, doteraz sme poznali len inšpektora Columba.</p>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka · Sporiť a šetriť (úloha 27)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Na nasledujúci text sa vzťahuje úloha 27</div>
        <p style="text-indent:0;margin-bottom:0;">Popri výraze <em>sporiť</em> pozná slovenčina aj výraz <em>šetriť</em>. Obidva majú niečo spoločné, je však medzi nimi jemný rozdiel. <em>Sporiť</em>, to je „zbierať, zhromažďovať, odkladať“; <em>šetriť</em>, to je „chrániť, starať sa, aby sa vec nezničila“. <em>Sporiť</em>, čiže ukladať, sa môžu peniaze, materiál; <em>šetriť</em> sa majú oči, topánky, <em>šetriť</em> sa má kultúrny majetok, prírodné zdroje, zdravie, sily človeka.</p>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
