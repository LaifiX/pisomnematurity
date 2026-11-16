import type { SharedPassage } from '../../types';

const OCEAN_SCENE_HTML = `
<figure class="sjl-ocean-scene sjl-figure">
  <img
    src="/images/t9-2023/ukazka1-scena.webp"
    width="1187"
    height="887"
    alt="Ilustrácia zdrojov a vplyvov odpadu v moriach: pobrežie s domami a riekou, pláž so slnečníkom a ľuďmi, nákladná loď, rybárska loď so sieťou, rybár na člne, morské vtáky, ryby a rozpad plastového odpadu v morskom prúde"
    loading="eager"
    decoding="async"
  />
</figure>
`;

const OCEAN_SOURCES_HTML = `
<figure class="sjl-ocean-fig sjl-figure">
  <img
    src="/images/t9-2023/ukazka1-zdroje.webp"
    width="909"
    height="123"
    alt="Zdroje odpadu v piatich rámčekoch: loď, ústie rieky s odpadom, pláž so slnečníkom, morské dno pri pobreží a rybárska loď so sieťou"
    decoding="async"
  />
</figure>
`;

const OCEAN_CURRENTS_HTML = `
<figure class="sjl-ocean-fig sjl-figure">
  <img
    src="/images/t9-2023/ukazka1-prudy.webp"
    width="916"
    height="167"
    alt="Zhluky drobných plastových častíc unášaných morskými prúdmi"
    decoding="async"
  />
</figure>
`;

const OCEAN_NET_HTML = `
<figure class="sjl-ocean-icon sjl-figure">
  <img
    src="/images/t9-2023/ukazka1-siet.webp"
    width="436"
    height="352"
    alt="Ryba zamotaná v odhodenej rybárskej sieti"
    decoding="async"
  />
</figure>
`;

const OCEAN_CYCLE_HTML = `
<figure class="sjl-ocean-icon sjl-figure">
  <img
    src="/images/t9-2023/ukazka1-rozpad.webp"
    width="436"
    height="352"
    alt="Šípky v kruhu znázorňujúce rozpad väčšieho plastu na čoraz menšie častice"
    decoding="async"
  />
</figure>
`;

const OCEAN_BIRDS_HTML = `
<figure class="sjl-ocean-icon sjl-figure">
  <img
    src="/images/t9-2023/ukazka1-vtaky.webp"
    width="436"
    height="352"
    alt="Dve ryby a letiaci morský vták"
    decoding="async"
  />
</figure>
`;

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · Odpad v moriach (úlohy 01 – 07)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <h3 class="passage-title">Aké sú zdroje a vplyvy odpadu v moriach?</h3>
        <p>Narastajúce množstvo odpadu končí vo svetových oceánoch a poškodzuje zdravie ekosystémov, spôsobuje úhyn zvierat a ohrozuje ľudské zdravie. Riešenie spočíva v predchádzaní vzniku odpadu a lepšom odpadovom hospodárstve na pevnine.</p>

        <div class="sjl-ocean-info">
          <div class="sjl-ocean-top">
            ${OCEAN_SCENE_HTML}
            <div class="sjl-ocean-right">
              <div class="sjl-ocean-block">
                ${OCEAN_SOURCES_HTML}
                <p>Odpad sa do morí dostáva z riek, kanalizáciou alebo vetrom. Odpad z lodí a člnov sa takisto hromadí v oceánoch.</p>
              </div>
              <div class="sjl-ocean-block">
                ${OCEAN_CURRENTS_HTML}
                <p>Morské prúdy zhromažďujú a vytvárajú rozsiahle zhluky odpadu a malých plastových častíc. Odpad sa hromadí aj na morskom dne a plážach.</p>
              </div>
            </div>
          </div>

          <div class="sjl-ocean-bottom">
            <div class="sjl-ocean-card">
              ${OCEAN_NET_HTML}
              <p>Približne 10 % odpadu v oceánoch tvorí odhodený rybársky výstroj, ktorý často usmrcuje morské zvieratá a morské vtáky.</p>
            </div>
            <div class="sjl-ocean-card">
              ${OCEAN_CYCLE_HTML}
              <p>Mnohé plasty sa rozpadávajú na menšie časti, ktoré sa následne môžu dostať do potravového reťazca.</p>
            </div>
            <div class="sjl-ocean-card">
              ${OCEAN_BIRDS_HTML}
              <p>Z nahlásených prípadov vyplýva, že približne 36 % svetovej populácie morských vtákov a mnohých druhov rýb prehltlo odpad.</p>
            </div>
          </div>
        </div>

        <p>Morské zvieratá a morské vtáky si odpad mýlia s potravou v dôsledku jeho veľkosti a prevládajúceho výskytu.</p>
        <p>Žalúdok naplnený nestráviteľnými plastmi môže zvieraťu zabrániť v prijímaní potravy, čo následne spôsobí, že zviera umiera od hladu. Chemikálie v plastoch môžu mať účinky ako jed a v závislosti od dávky môžu zviera natrvalo oslabiť alebo zahubiť.</p>
        <p>Aj väčšie kúsky plastov predstavujú hrozbu pre morský život. Mnohé druhy vrátane tuleňov, delfínov a morských korytnačiek sa môžu do odpadu z plastov, rybárskych sietí a povrazov stratených v mori zamotať. Zamotané živočíchy väčšinou neprežijú, keďže sa nemôžu dostať na vodnú hladinu, aby sa nadýchli, uniknúť predátorom alebo prijímať potravu.</p>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · Spoločnosť Lego (úlohy 08 – 14)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <h3 class="passage-title">Kde bolo, tam bolo...</h3>
        <ul class="passage-lego-list">
          <li><span class="passage-lego-year">1891 –</span><span>Na farme v Dánsku sa narodil Ole Kirk Christiansen, zakladateľ hračkárskej firmy Lego. Vyučil sa za tesára.</span></li>
          <li><span class="passage-lego-year">1916 –</span><span>Christiansen kúpil drevoobrábaciu dielňu v meste Billund. Živil sa stavaním domov a vyrábaním nábytku.</span></li>
          <li><span class="passage-lego-year">1924 –</span><span>Dvaja jeho synovia sa hrali v tesárskej dielni a nešťastnou zhodou okolností sa vznietili suché drevené hobliny.</span></li>
        </ul>

        <h4 class="passage-subhead">Dôležité míľniky spoločnosti Lego</h4>
        <ul class="passage-lego-list">
          <li><span class="passage-lego-year">1932 –</span><span>Christiansen zakladá spoločnosť na výrobu tovaru na každodenné použitie, ako sú napríklad stoličky, stoly, postele a rôzne skrine.</span></li>
          <li><span class="passage-lego-year">1934 –</span><span>V tomto roku vzniká úplne nová firma – Lego. Veľká hospodárska kríza totiž tesárskemu obchodu spôsobila takmer krach a Christiansen kvôli zníženiu nákladov vyrába už len drevené miniatúry svojich výrobkov, teda hračky.</span></li>
          <li><span class="passage-lego-year">1947 –</span><span>Christiansen kupuje prvý lisovací stroj na plasty v Dánsku. Firma spúšťa výrobu a predaj plastových hračiek.</span></li>
          <li><span class="passage-lego-year">1949 –</span><span>Lego začína vyrábať vzácny produkt – plastové stavebnice.</span></li>
          <li><span class="passage-lego-year">1955 –</span><span>Firma ide prvýkrát za hranice domáceho trhu a rozširuje svoje pôsobenie aj do Švédska.</span></li>
          <li><span class="passage-lego-year">1959 –</span><span>Podnik predáva svoje produkty už aj v Nemecku, Nórsku, vo Švajčiarsku a Veľkej Británii.</span></li>
          <li><span class="passage-lego-year">1960 –</span><span>Lego zasiahol požiar, ktorý zničil väčšinu drevených hračiek. Podnik sa orientuje už len na plastové výrobky.</span></li>
          <li><span class="passage-lego-year">1966 –</span><span>Na trh je uvedená úspešná modelová železnica.</span></li>
          <li><span class="passage-lego-year">1968 –</span><span>V dánskom Billunde bol otvorený prvý Legoland. Nasledujú parky v Anglicku, USA a Nemecku.</span></li>
          <li><span class="passage-lego-year">1997 –</span><span>Na trh uvádza svoju prvú počítačovú hru – Lego Island.</span></li>
          <li><span class="passage-lego-year">2009 –</span><span>Lego je piatym najväčším svetovým výrobcom hračiek z hľadiska tržieb.</span></li>
          <li><span class="passage-lego-year">2012 –</span><span>Záujem o hračky je taký veľký, že spoločnosť Lego nie je schopná pokryť všetok dopyt po svojich produktoch.</span></li>
        </ul>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Dvadsaťtisíc míľ pod morom (úlohy 15 – 21)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <p class="passage-author">Jules Verne</p>
        <h3 class="passage-title">Dvadsaťtisíc míľ pod morom</h3>
        <p>– Ale more, pán Aronnax, – povedal mi, – táto zázračná a nevyčerpateľná živiteľka, ma nielen živí, ale aj oblieka. Teraz všetko dostávam od mora a jedného dňa sa všetko moru vráti!</p>
        <p>– Máte rád more, kapitán.</p>
        <p>– Áno, mám ho rád! More je všetko! Pokrýva sedem desatín zemegule. Vanie nad ním čisté a zdravé povetrie. Je to nesmierna púšť, kde však človek nikdy nie je sám, lebo cíti, ako všade okolo neho kypí život. More nosí v sebe nadprirodzený a zázračný život. Je v ňom iba pohyb a láska. Je to živé nekonečno, ako povedal jeden z vašich básnikov. A naozaj, pán profesor, príroda sa v ňom prejavuje všetkými tromi ríšami: nerastnou, rastlinnou i živočíšnou. More je ohromná zásobáreň prírody! V mori má zem svoj začiatok a ktovie, či v ňom aj neskončí! Tam je zvrchovaný pokoj. More nepatrí tyranom. Na jeho hladine ešte môžu páchať neprávosti, biť sa, vzájomne sa zožierať, prenášať ta všetky pozemské hrôzy. Ale desať metrov pod hladinou ich moc prestáva, ich vplyv sa stráca, mizne ich sila! Ach, pane, žite v hlbinách morí! Iba tam je nezávislosť! Tam nepoznám nijakých pánov! Tam som slobodný!</p>
        <p>Kapitán Nemo sa zrazu uprostred tohto prekypujúceho nadšenia odmlčal. Dal sa strhnúť za hranice svojej zvyčajnej zdržanlivosti? Povedal priveľa? Niekoľko minút vzrušene chodil hore-dolu. Potom sa upokojil, na tvár sa mu vrátil zvyčajný chladný výraz a obrátiac sa ku mne, povedal:</p>
        <p>– A teraz, pán profesor, ak si želáte prezrieť Nautila, som vám k službám.</p>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {
  q24_poem: `
    <div class="sjl-excerpt-box">
      <div style="font-size:0.9em;color:var(--tp-ink-2);">Miroslav Žbirka</div>
      <div style="font-weight:800;margin-bottom:0.45rem;">Atlantída</div>
      <div>
        Len more cez brány čias<br />
        ženie na brehy stĺpy vĺn.<br />
        More cez brány čias<br />
        von vynáša stĺpy vĺn.
      </div>
    </div>
  `,
  q27_sentence: `
    <div class="sjl-excerpt-box" style="font-style:italic;">
      Počas prípravných zápasov sa <strong>t__m</strong> spod hradu <strong>__horského</strong> šľachtica Matúša Čáka predstaví <strong>neobv__kle</strong> v čiernych a <strong>biel__ch</strong> dresoch, Dukla totiž oslavuje účasť už v <strong>päťdesiat__ch</strong> súťažných sezónach.
    </div>
  `,
  q28_vodnik: `
    <div class="sjl-vodnik-split">
      <div class="sjl-vodnik-poem">
        <p class="sjl-vodnik-author">K. J. Erben</p>
        <h4 class="sjl-vodnik-title">Vodník</h4>
        <p>
          Neveselé, trúchlivé<br />
          sú tie vodné kúty,<br />
          kde sa v tráve pod záružlím<br />
          rybka s rybkou krúti.
        </p>
        <p>
          Tam slniečko nezasvieti,<br />
          vetrík nezaveje:<br />
          chlad a ticho – ako žiaľ<br />
          v srdci bez nádeje.
        </p>
        <p>
          Neveselé, trúchlivé<br />
          sú tie kúty vodné,<br />
          v polotme a polosvetle<br />
          dni sa vlečú po dne.
        </p>
        <p>
          Vodníkov dvor priestranný,<br />
          hojnosť nad hojnosti:<br />
          ale iba zriedkavo<br />
          vítajú tam hostí.
        </p>
        <p>
          A do jeho krištáľovej<br />
          brány kto raz vkročí,<br />
          toho ťažko ešte zazrú<br />
          jeho milých oči.
        </p>
      </div>
      <div class="sjl-bubbles" aria-label="Typické znaky literárneho žánru">
        <div class="sjl-bubble">pochmúrny<br />dej</div>
        <div class="sjl-bubble">magickosť,<br />nadprirodzené<br />postavy a javy</div>
        <div class="sjl-bubble">stupňovanie<br />napätia</div>
        <div class="sjl-bubble">obvykle sa končí<br />tragicky</div>
      </div>
    </div>
  `
};
