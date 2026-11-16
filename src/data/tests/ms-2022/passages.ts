import type { SharedPassage } from '../../types';

// Maturita 2022, riadny termín – test EČ MS zo SJL, kód 20 1403 (test pripravený na rok 2020, použitý v roku 2022).
// Prepis podľa PDF NIVaM (NÚCEM). Zvýraznené časti originálu sú v <strong class="hl">.

const HOSTS = [
  [2005, 3428083],
  [2006, 3583879],
  [2007, 3777526],
  [2008, 4082645],
  [2009, 3381354],
  [2010, 3392361],
  [2011, 3571093],
  [2012, 3774062],
  [2013, 4048505],
  [2014, 3727710],
  [2015, 4330249]
] as const;

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// Graf „Návštevnosť Slovenska“ prekreslený do SVG (stĺpce + čiara ako v origináli)
function hostsChart(): string {
  const W = 640;
  const H = 250;
  const left = 34;
  const step = (W - left - 74) / (HOSTS.length - 1);
  const min = 3000000;
  const max = 4500000;
  const y = (v: number) => 200 - ((v - min) / (max - min)) * 150;
  const pts = HOSTS.map(([, v], i) => `${(left + i * step).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const bars = HOSTS.map(([, v], i) => `<rect x="${(left + i * step - 4).toFixed(1)}" y="${y(v).toFixed(1)}" width="8" height="${(200 - y(v)).toFixed(1)}" fill="#9a9a9c" />`).join('');
  const labels = HOSTS.map(
    ([yr, v], i) =>
      `<text x="${(left + i * step).toFixed(1)}" y="222" font-size="13" font-weight="700" text-anchor="middle">${yr}</text>` +
      `<text x="${(left + i * step - 6).toFixed(1)}" y="${(y(v) - 9).toFixed(1)}" font-size="11.5" transform="rotate(-24 ${(left + i * step - 6).toFixed(1)} ${(y(v) - 9).toFixed(1)})">${fmt(v)}</text>`
  ).join('');
  return `
<p class="ms-fig-title">Návštevnosť Slovenska – počet návštevníkov v ubytovacích zariadeniach</p>
<figure class="diagram-svg-wrap sjl-figure">
  <svg class="test-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Graf návštevnosti Slovenska 2005 – 2015: ${HOSTS.map(([yr, v]) => `${yr}: ${fmt(v)}`).join('; ')}.">
    <g font-family="Plus Jakarta Sans, Arial, sans-serif" fill="#1f1f1f">
      <line x1="${left - 14}" y1="200" x2="${W - left + 14}" y2="200" stroke="#bdbdbd" stroke-width="1" />
      ${bars}
      <polyline points="${pts}" fill="none" stroke="#1f1f1f" stroke-width="3.2" stroke-linejoin="round" />
      ${labels}
      <text x="${W - 6}" y="140" font-size="10" fill="#8a8a8a" transform="rotate(-90 ${W - 6} 140)">Zdroj: SACR</text>
    </g>
  </svg>
</figure>`;
}

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · A. S. Puškin – Desiate prikázanie (úlohy 01 – 08)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <p class="passage-author">Alexander Sergejevič Puškin</p>
        <h3 class="passage-title">Desiate prikázanie</h3>
        <div class="passage-poem">
          Majetok cudzí v úcte mať<br />
          káže nám zákon vekmi vžitý;<br />
          nemať tak, bože, nežné city,<br />
          vedel by som ho dodržať.<br />
          Ukrátiť blížneho, to nikdy,<br />
          nechcem ja jeho statky, dom,<br />
          nevoľníkov, dvor s dobytkom:<br />
          odo mňa nedočká sa krivdy,<br />
          nech si to všetko, všetko má.<br />
          No ak má doma peknoočku<br />
          nevoľnú, bože, krádež bozku<br />
          dovolí mi hlas svedomia.<br />
          <strong class="hl">A ak sa zavše aj tak stane,<br />
          že milú družku vidím s ním,<br />
          odpusť mi, že mu závidím<br />
          anjela jeho, kristepane.</strong><br />
          Veď môžeš srdcu rozkázať?<br />
          Kto nie je rabom zvodnej chvíle?<br />
          Jak nemilovať, čo je milé?<br />
          Na svete raj si nežiadať?<br />
          Hľadím a trpím neprestajne,<br />
          no prísny zákon ctiť si viem,<br />
          zavraciam srdce: skrotni, driem –<br />
          mlčím… a vzdychám, blčím tajne.
        </div>
        <p class="passage-poem-credit">(1821)</p>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · V. Marčok – Biele miesta v slovenskej literatúre (úlohy 09 – 16)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <p class="passage-author">Viliam Marčok</p>
        <h3 class="passage-title">Biele miesta v slovenskej literatúre</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Názvom postmoderna sa označuje situácia európskej a americkej literatúry po vyčerpaní podnetov tzv. druhých avantgárd (najrôznejšie obmeny konkretizmu v poézii, nový román, neorealizmus atď.) alebo modernistických úsilí (ako sa tzv. druhá avantgarda nazýva vo Veľkej Británii a v literatúrach oboch Amerík). Toto označenie sa začalo používať v americkej literárnej kritike v šesťdesiatych rokoch (kritik I. Howe začal diskusiu o nových javoch v americkej literatúre v roku 1959), v európskej literárnej kritike sa udomácnilo v 70. rokoch. Predstava o postmoderne je veľmi voľná, otvorená a aj diskutabilná. Od literárnych smerov avantgardy sa postmoderna odlišuje predovšetkým tak, že sa nezačala nijakým programovým vyhlásením a nedosiahla ani ich ideovú a tvarovú vyhranenosť. (Nejde teda o nijaký nový -izmus, a preto je aj používanie názvu „postmodernizmus“ mätúce!) Vznikala doslova nepozorovane v dielach neraz veľmi rozdielnych autorov, ktorí o sebe ani nevedeli. (Za jeden z jej prúdov sa dnes považuje aj magický realizmus juhoamerickej prózy.)</p>
        <p>Jediným jej jednotiacim znakom je prítomnosť vzbury proti akémukoľvek totalitarizmu a manifestácia pluralizmu života v literárnom diele. Postmoderna je teda taká literatúra, ktorá vystupuje proti akémukoľvek politickému diktátu a všetkým jeho formám v myslení, t. j. proti ideológii, historickému determinizmu, strohému racionalizmu, technologickému i konzumnému prinucovaniu (napr. pásová výroba a reklama), tradíciám, militantnému kolektivizmu, náboženskému fanatizmu atď.</p>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · K. Kesey – Bol som dlho preč (úlohy 17 – 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <p class="passage-author">Ken Kesey</p>
        <h3 class="passage-title">Bol som dlho preč</h3>
        <p class="passage-note">(úryvok)</p>
        <p>„McMurphy, to je presne taká nerozvážnosť, ako tá vaša stávka na ošetrovateľku.“</p>
        <p>„Kto chce prehrať päť dolárov? Hop alebo trop…“</p>
        <p>Všetci chlapci odrazu začnú podpisovať dlžobné úpisy; toľko ráz ich pobil v pokeri a očku, že sa nemôžu dočkať, aby sa vyvŕšili, a v tomto sú si na betón istí. Neviem, čo má McMurphy za lubom; je síce statný, ale na to, aby ktosi pohol tým pultom, by museli byť traja takí, ako je on, a on to vie. Stačí, keď naň pozrie, okamžite zistí, že ho ani len neprevalí, a tobôž zdvihne. Iba obor by ho zodvihol zo zeme. <strong class="hl">Ale keď všetci prítomní podpíšu dlžobné úpisy, podíde k pultu, zosadí z neho Billyho Bibbita, napľuje si do mohutných mozoľnatých dlaní, tleskne do nich a napne svaly na pleciach.</strong></p>
        <p>„Okej, ustúpte. Stáva sa, že pri väčšej námahe vydýcham koldokola všetok vzduch a dospelí muži pridusení odpadávajú. Ustúpte. Teraz bude pukať betón a lietať oceľ. Odveďte ženy a deti do bezpečia. Ustúpte…“</p>
        <p>„Prisámvačku, možno to aj dokáže,“ zamumle Cheswick.</p>
        <p>„Samozrejme, možno ho tak uhovorí, že sa sám zodvihne,“ odvrkne Fredrickson.</p>
        <p>„Ale pravdepodobnejšie je, že si nadobudne utešenú prietrž,“ poznamená Harding. „Počujte, McMurphy, nebláznite; <strong class="hl">to hebedo</strong> nikto nezodvihne.“</p>
        <p>„Ustúpte, cintľavky, vydýchate mi všetok kyslík.“</p>
        <p>[…]</p>
        <p>„Ale aspoň som to skúsil,“ pripomenie.</p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka 4 · D. Taragel – Ako vzniká hit: Rozum Rudolfa Slobodu (úlohy 25 – 32)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 4</div>
        <p class="passage-author">Dušan Taragel</p>
        <h3 class="passage-title">Ako vzniká hit: Rozum Rudolfa Slobodu</h3>
        <p class="passage-note">(úryvok)</p>
        <p>Keď sa v roku 1982 objavila v kníhkupectvách próza <em>Rozum</em> spisovateľa Rudolfa Slobodu, len málokto tušil, že práve vyšlo jedno z kľúčových diel slovenskej literatúry 20. storočia.</p>
        <p>Po desiatich rokoch normalizácie, keď vychádzali len romány plné „pozitívnych“ hrdinov a budovateľov socializmu či pseudohistorické zlátaniny, sa odrazu vynorilo čosi, čo nebolo ani pozitívne, ani optimistické, skôr naopak.</p>
        <p>Celý <em>Rozum</em>, až na niekoľko epizód, je silne autobiografický – Sloboda si prestal robiť záznamy vo svojom denníku a namiesto nich voľne písal knihu o svojom živote. Po jej vyjdení sa mnohí neveriacky pýtali: Naozaj ten Sloboda bije svoju ženu? Naozaj býva v akejsi chate nad Devínskou Novou Vsou? Naozaj zabil svojho psa sekerou?</p>
        <p>Pre mnohých čitateľov bolo toto dielo nestráviteľné a čudovali sa, ako vôbec mohlo vyjsť. Pre iných – a bola to menšina – to bol závan sviežeho vzduchu v slovenskej literatúre.</p>
        <p>Jeho rozprávanie je také úprimné a autentické, že slabšie povahy knihu ani nedočítajú, pretože sa im zdá nechutná a sebaobnažujúca. Sloboda akoby si v istej chvíli uvedomil, že prekračuje hranice, a preto text ozvláštnil vymysleným príbehom akéhosi Jána Hodžu, ktorého zabije manželka Uršuľa.</p>
        <p><strong class="hl">Celý román však stojí na rozprávaní bezmenného štyridsiatnika, ktorý sa snaží vytvoriť námet na filmový scenár, pričom rieši rodinné problémy s manželkou trpiacou na schizofréniu,</strong> dospievajúcou dcérou, susedmi a kolegami v zamestnaní. Samozrejme, že nevyrieši nič, skôr naopak – vďaka svojmu „rozumu“ veci ešte viac skomplikuje.</p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka 5 · A. Bednár – Kolíska (úlohy 33 – 40)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 5</div>
        <p class="passage-author">Alfonz Bednár</p>
        <h3 class="passage-title">Kolíska</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p><strong class="hl">V predposlednej lieskovskej chalupe na hornom konci dediny Zita Černeková počúvala rádio. Dvere na kuchyni mala otvorené, obrátené k maličkému dvoru a k betónovému mostíku, tým sa ponad potok chodilo na širokú cestu. Dverami jej do teplej kuchyne zavieval príjemný chlad. Rádio mala postavené v kuchyni na pevnej drevenej konzole. To bolo! Spomenula si zrazu Zita. Kúpili si rádio, aj oni… Usmiala sa nad spomienkami, ako Černek, jej muž, spravil z bukového dreva konzolu, pribil ju mocnými klincami na stenu nad veľký sivý hubáň.</strong> Zita naň pozrela, i na „starú dievku“, na smiešnu a skromnú, nikdy nekvitnúcu kvetinu, ako sa z hubáňa hlboko ťahá hnedolilavými stonkami a sivozelenými tučnými lístkami. Čoskoro bude na dlážke, pomyslela si. Deti už spali a Černek nebol doma.</p>
        <p>Zita počúvala večerný program, prenos zo súdu (súd sa konal v meste v ten deň popoludní), „Obžalovaný Majerský,“ počúvala z rádia pevný prokurátorov hlas, „podľa výpovedí svedkov ste rozvratník a sabotér, rozvracali ste družstvo, opovržlivo ste sa vyjadrovali o sovietskych kombajnoch a napomáhali ste kulacké bunky, ktorých cieľom je znemožniť v Temešanoch prechod od individuálneho ku kolektívnemu hospodáreniu. Priznávate sa?“ – „Družstvo som nerozvracal a nič som nesabotoval,“ počula Zita Černeková Majerského známy, už zahriaknutý hlas, „nikdy som nevidel sovietsky kombajn, kulacké bunky som nenapomáhal.“</p>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka 6 · Molière – Mizantrop (úlohy 41 – 48)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 6</div>
        <p class="passage-author">Molière</p>
        <h3 class="passage-title">Mizantrop</h3>
        <p class="passage-note">(úryvok)</p>
        <div class="passage-poem">
          <span class="passage-speaker">ALCEST</span><br />
          Takýto nízky zvyk len odpor vo mne budí,<br />
          hoci mu holduje dosť vašich módnych ľudí,<br />
          veď najviac nenávidím faloš podliakov,<br />
          čo vnucujú sa sľubmi, službou storakou,<br />
          čo v každom objatí sú klzkí, ale sladkí,<br />
          čo z povinnosti trepú samé taľafatky,<br />
          čo bez výberu trúsia vľúdne vyznania,<br />
          či ide o poctivca, či o oplana.<br />
          Čo máte z toho, ak vás dneska niekto chváli,<br />
          <strong class="hl">podkuruje vám, aký ste dokonalý,<br />
          a líškavo vám veľkú úctu vysloví,<br />
          keď zajtra bľaboce to isté lumpovi.<br />
          Ak svedomie nám ešte neuspali reči,<br />
          takáto podlá pocta sa nám prosto prieči.</strong><br />
          Stáva sa z nej len lacná, suchá potrava,<br />
          keď zistíme, že každý tĺk ju dostáva.<br />
          Úcta si žiada výber, schopnosť porovnania –<br />
          a nikoho si nectí, kto sa vrtkým klania.<br />
          Aj vy ste podľahli tej pliage našich čias,<br />
          nuž medzi priateľov už nechcem rátať vás.<br />
          Odmietam láskavosť, čo na každého padá<br />
          a na zásluhy pritom vôbec neprihliada.<br />
          V tom zástupe chcem zostať odlíšený, sám,<br />
          pretože ľudským davom zväčša pohŕdam.<br />
          <span class="passage-speaker">FILINT</span><br />
          Kto žije medzi ľuďmi, musí sa k nim milo<br />
          a prívetivo správať – tak už sa to vžilo.<br />
          <span class="passage-speaker">ALCEST</span><br />
          Nemáte, Filint, pravdu: trestal by som hneď<br />
          ten obchod s priateľstvom, čo zahanbuje svet.
        </div>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka 7 · P. Pišťanek – Rivers of Babylon (úlohy 49 – 56)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 7</div>
        <p class="passage-author">Peter Pišťanek</p>
        <h3 class="passage-title">Rivers of Babylon</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Teraz už Rácz nejedáva zvyšky v ústraní tmavej kotolne. Dennodenne raňajkuje, obeduje a večeria v hotelovej reštaurácii. Strmo tam vojde, v bagandžiach a s kabelou plnou vercajgu cez plece. Sadne si na svoje miesto. Má ho rezervované. Čašníci sa idú pretrhnúť. Rácz chlípe a divo trhá mäso. Mastnými rukami odštopľuje fľašu beaujolais. Krátkym pohľadom si premeriava jej obsah a leje si ho do úst. Divo podupáva bagandžami. Pohľad na množstvo príboru rozloženého okolo taniera ho privádza do zúrivosti. Aj tak používa iba lyžicu. Čašníci ho obstupujú, podávajú mu korenie, šaláty, mäsá, kečup. Celá reštaurácia sa zhrčila k Ráczovmu stolu. Hostia si na to zvykli. Radi počkajú. Pohľad na stolujúceho Rácza je neopakovateľný. Len noví, neskúsení, nervózne mrmlú a lúskajú prstami na obsluhu. Ostatní sa usilujú zahriaknuť ich. I vydesený personál. Všetci bojazlivo zazerajú na Rácza, zápasiaceho s diviačou hlavou v šípkovej omáčke. Ak netrpezlivcov nezahriaknu včas, vyrušený Rácz vzhliadne vypúlenými očami od stola, posiateho mastnými fľakmi, omáčkami, vínovými škvrnami a črepmi. Nespratníkov si premeria pohľadom, ktorý nezabúda. Stačí, aby sa len tak mimochodom zmienil pred hlavným čašníkom, a hosť nie je obslúžený. Môže sa pratať kade ľahšie. Ak Rácza niekto rozzúri, odnesú si to všetci. Ak nechcú zmrznúť, musia mu za teplé radiátory znova zaplatiť.</p>
      </div>
    `
  },
  ukazka_8: {
    label: 'Ukážka 8 · Záujem o Slovensko stále rastie! (úlohy 57 – 64)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 8</div>
        <h3 class="passage-title">Záujem o Slovensko stále rastie!</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p><strong>Slovensko je bezpečné</strong><br />Podľa bezpečnostných analytikov zvýšený záujem domácich, ale aj zahraničných turistov o Slovensko ako turistickú destináciu súvisí s tým, že patríme do skupiny krajín, ktoré sú z hľadiska potenciálneho teroristického útoku najbezpečnejšie na celom svete. Z toho pramení aj jednoznačný pokles záujmu Slovákov o vycestovanie za dovolenkou. Zároveň sa u nás skvalitnili služby, čo ocenia aj mnohí zahraniční návštevníci.</p>
        <p><strong>Vysoké Tatry: Nápor turistov odhalil problémy</strong><br />V Tatrách bude najsilnejšia letná sezóna za posledných 25 rokov. Tento rok vzrástla návštevnosť takmer o 25 %. Srdce Slovenska objavili už aj Briti, turisti z Izraela, Ázie, Číny, Japonska a Kórey. Nápor turistov však odhalil problémy. Máme najvyššiu DPH v oblasti služieb v porovnaní s okolitými štátmi, chýba nám ministerstvo cestovného ruchu a trápime sa aj s nedostatkom zamestnancov. Kuchári či čašníci sú totiž v Tatrách vzácnejší ako kamzíky a svište.</p>
        <p><strong>Banská Štiavnica: Turistov pribúda, no chýbajú im cyklotrasy</strong><br />Podľa Martina Macharika, predsedu Kalvárskeho fondu, turisti hovoria, že na Slovensku sa zlepšujú služby aj pestrosť ponuky, a tak nie je problém naplánovať si u nás kvalitnú týždňovú dovolenku. Ale nie všetko je ružové. Chýbajú cyklotrasy, parkoviská či turistické značenia. Zišla by sa aj oprava niektorých pamiatok.</p>
        <div class="ms-table-wrap">
          <table class="ms-table">
            <caption>Príjmy a výdavky v cestovnom ruchu</caption>
            <thead>
              <tr><th scope="col"></th><th scope="col">2010</th><th scope="col">2011</th><th scope="col">2012</th><th scope="col">2013</th><th scope="col">2014</th><th scope="col">2015</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row"><strong>Príjmy</strong> SR z cestovného ruchu*</th><td>1684,7</td><td>1744,7</td><td>1789,0</td><td>1924,5</td><td>1940,6</td><td>2129,8</td></tr>
              <tr><th scope="row"><strong>Výdavky</strong> Slovákov dovolenkujúcich v zahraničí*</th><td>1470,7</td><td>1566,8</td><td>1666,3</td><td>1782,0</td><td>1859,8</td><td>1917,2</td></tr>
              <tr><th scope="row"><strong>Rozdiel</strong>*</th><td>214,0</td><td>177,9</td><td>122,7</td><td>142,5</td><td>80,8</td><td>212,6</td></tr>
            </tbody>
          </table>
          <p class="ms-table-note">(* v miliónoch €)</p>
        </div>
        ${hostsChart()}
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
