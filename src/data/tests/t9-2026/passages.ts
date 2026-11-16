import type { SharedPassage } from '../../types';

const CO2_GRAPH_SVG = `
<figure class="diagram-svg-wrap sjl-figure">
  <svg class="test-svg sjl-chart-svg" viewBox="0 0 604 380" role="img" aria-label="Graf: zastúpenie jednotlivých druhov dopravy na znečistení ovzdušia CO2 v EÚ v roku 2016. Vnútorný kruh: cestná doprava 72 %, civilné letectvo 13,4 %, vodná doprava 13,6 %, železnice 0,5 %, ostatné 0,5 %. Vonkajší kruh, rozdelenie cestnej dopravy: automobily 60,7 %, ťažké nákladné vozidlá 26,2 %, ľahké nákladné vozidlá 11,9 %, motocykle 1,2 %.">
    <!-- Prekreslené podľa originálu NIVaM: vnútorný prstenec = všetky druhy dopravy, vonkajší = cestná doprava -->
    <defs>
      <marker id="co2-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 Z" fill="#8a8c8f" />
      </marker>
    </defs>

    <g font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle">
      <rect x="89" y="11" width="102" height="49" fill="#6e6e70" />
      <text x="140" y="31" fill="#ffffff" font-size="12">Civilné letectvo</text>
      <text x="140" y="50" fill="#ffffff" font-size="13" font-weight="700">13,4 %</text>
      <rect x="225" y="11" width="92" height="49" fill="#d1d3d4" />
      <text x="271" y="31" fill="#1f1f1f" font-size="12">Železnice</text>
      <text x="271" y="50" fill="#1f1f1f" font-size="13" font-weight="700">0,5 %</text>
      <rect x="344" y="11" width="110" height="49" fill="#949496" />
      <text x="399" y="31" fill="#ffffff" font-size="12">Vodná doprava</text>
      <text x="399" y="50" fill="#ffffff" font-size="13" font-weight="700">13,6 %</text>
      <rect x="472" y="11" width="116" height="49" fill="#4d4d4f" />
      <text x="530" y="31" fill="#ffffff" font-size="12">Ostatné</text>
      <text x="530" y="50" fill="#ffffff" font-size="13" font-weight="700">0,5 %</text>
    </g>

    <polyline points="198.0,60.0 198.0,76.0 317.2,76.0 317.2,106.9" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />
    <polyline points="300.0,60.0 300.0,70.0 355.4,70.0 355.4,99.0" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />
    <polyline points="399.0,60.0 399.0,76.0 393.8,76.0 393.8,108.3" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />
    <polyline points="510.0,60.0 510.0,82.0 426.6,82.0 424.6,133.2" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />

    <!-- Civilné letectvo 13,4 % -->
    <path d="M 289.1 131.1 A 87 87 0 0 1 354.0 102.0 L 354.0 144.0 A 45 45 0 0 0 320.4 159.0 Z" fill="#6e6e70" />
    <!-- Železnice 0,5 % -->
    <path d="M 354.0 102.0 A 87 87 0 0 1 356.7 102.0 L 355.4 144.0 A 45 45 0 0 0 354.0 144.0 Z" fill="#d1d3d4" />
    <!-- Vodná doprava 13,6 % -->
    <path d="M 356.7 102.0 A 87 87 0 0 1 421.4 134.0 L 388.9 160.5 A 45 45 0 0 0 355.4 144.0 Z" fill="#949496" />
    <!-- Ostatné 0,5 % -->
    <path d="M 421.4 134.0 A 87 87 0 0 1 423.1 136.1 L 389.7 161.6 A 45 45 0 0 0 388.9 160.5 Z" fill="#4d4d4f" />
    <!-- Cestná doprava 72 % -->
    <path d="M 423.1 136.1 A 87 87 0 1 1 289.1 131.1 L 320.4 159.0 A 45 45 0 1 0 389.7 161.6 Z" fill="#d1d3d4" />
    <!-- Automobily 60,7 % -->
    <path d="M 437.9 97.7 A 124 124 0 0 1 288.2 294.1 L 297.8 278.9 A 106 106 0 0 0 425.7 110.9 Z" fill="#57595c" />
    <!-- Ľahké nákladné vozidlá 11,9 % -->
    <path d="M 288.2 294.1 A 124 124 0 0 1 241.4 240.9 L 257.7 233.4 A 106 106 0 0 0 297.8 278.9 Z" fill="#d1d3d4" />
    <!-- Ťažké nákladné vozidlá 26,2 % -->
    <path d="M 241.4 240.9 A 124 124 0 0 1 271.7 96.3 L 283.6 109.7 A 106 106 0 0 0 257.7 233.4 Z" fill="#808285" />
    <!-- Motocykle 1,2 % -->
    <path d="M 271.7 96.3 A 124 124 0 0 1 277.2 91.6 L 288.4 105.7 A 106 106 0 0 0 283.6 109.7 Z" fill="#d1d3d4" />
    <line x1="320.4" y1="159.0" x2="289.1" y2="131.1" stroke="#ffffff" stroke-width="1" />
    <line x1="354.0" y1="144.0" x2="354.0" y2="102.0" stroke="#ffffff" stroke-width="1" />
    <line x1="355.4" y1="144.0" x2="356.7" y2="102.0" stroke="#ffffff" stroke-width="1" />
    <line x1="388.9" y1="160.5" x2="421.4" y2="134.0" stroke="#ffffff" stroke-width="1" />
    <line x1="389.7" y1="161.6" x2="423.1" y2="136.1" stroke="#ffffff" stroke-width="1" />
    <line x1="423.1" y1="136.1" x2="425.7" y2="110.9" stroke="#1f1f1f" stroke-width="0.9" stroke-dasharray="1.5 2" />
    <line x1="289.1" y1="131.1" x2="288.4" y2="105.7" stroke="#1f1f1f" stroke-width="0.9" stroke-dasharray="1.5 2" />

    <g font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" fill="#1f1f1f">
      <text x="354" y="252" font-size="11.5">Cestná doprava</text>
      <text x="354" y="268" font-size="12.5" font-weight="700">72 %</text>
    </g>

    <polyline points="176.0,96.0 272.5,91.6" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />
    <polyline points="162.0,163.0 229.7,163.0" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />
    <polyline points="190.0,272.9 258.7,272.9" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />
    <polyline points="512.0,215.0 478.3,215.0" fill="none" stroke="#8a8c8f" stroke-width="1.2" marker-end="url(#co2-arrow)" />

    <!-- Motocykle (skúter) -->
    <g fill="#1f1f1f">
      <circle cx="124" cy="104" r="5" /><circle cx="152" cy="104" r="5" />
      <path d="M118 102 C118 93 126 91 134 92 L141 92 L144 86 L149 86 L147 92 C153 93 157 97 157 102 L146 102 C144 97 139 97 137 102 Z" />
      <path d="M126 92 C126 88 136 87 138 90 L136 92 Z" />
    </g>
    <text x="138" y="123" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12" fill="#1f1f1f">Motocykle</text>
    <text x="138" y="139" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1f1f1f">1,2 %</text>

    <!-- Ťažké nákladné vozidlá -->
    <g fill="#1f1f1f">
      <rect x="42" y="166" width="72" height="26" rx="1.5" />
      <path d="M116 174 H132 C136 174 140 178 141 183 L143 192 H116 Z" />
      <polygon points="120,177 131,177 136,184 120,184" fill="#ffffff" />
      <g stroke="#ffffff" stroke-width="1.6">
        <circle cx="52" cy="196" r="5" /><circle cx="64" cy="196" r="5" /><circle cx="90" cy="196" r="5" /><circle cx="102" cy="196" r="5" /><circle cx="133" cy="196" r="5" />
      </g>
    </g>
    <text x="96" y="219" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12" fill="#1f1f1f">Ťažké nákladné vozidlá</text>
    <text x="96" y="236" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1f1f1f">26,2 %</text>

    <!-- Ľahké nákladné vozidlá -->
    <g fill="#1f1f1f">
      <rect x="112" y="267" width="40" height="26" rx="1.5" />
      <path d="M154 275 H166 C170 275 172 279 173 284 L175 293 H154 Z" />
      <polygon points="157,278 165,278 169,285 157,285" fill="#ffffff" />
      <g stroke="#ffffff" stroke-width="1.6"><circle cx="124" cy="296" r="5" /><circle cx="164" cy="296" r="5" /></g>
    </g>
    <text x="144" y="318" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12" fill="#1f1f1f">Ľahké nákladné vozidlá</text>
    <text x="144" y="335" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1f1f1f">11,9 %</text>

    <!-- Automobily -->
    <g fill="#1f1f1f">
      <path d="M520 226 C520 214 524 203 532 200 H556 C565 203 571 214 571 226 Z" />
      <path d="M528 214 C529 207 533 204 537 204 H545 V214 Z M548 204 H554 C559 204 562 208 563 214 H548 Z" fill="#ffffff" />
      <g stroke="#ffffff" stroke-width="1.6"><circle cx="531" cy="229" r="6" /><circle cx="560" cy="229" r="6" /></g>
    </g>
    <text x="545" y="252" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12" fill="#1f1f1f">Automobily</text>
    <text x="545" y="269" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1f1f1f">60,7 %</text>

    <text x="302" y="368" font-family="Plus Jakarta Sans, Arial, sans-serif" text-anchor="middle" font-size="11.5" fill="#6b6d70">Zastúpenie jednotlivých druhov dopravy na znečistení ovzdušia CO<tspan baseline-shift="sub" font-size="8">2</tspan> v EÚ (2016)</text>
  </svg>
</figure>
`;

const BATOH_SVG = `
<figure class="diagram-svg-wrap sjl-figure" style="margin:0;">
  <svg class="test-svg sjl-batoh-svg" viewBox="0 0 280 295" role="img" aria-label="Ilustrácia batoha so siedmimi slovami: faloš, lož, pretvárka, hádka, radosť, pohoda, úsmev">
    <!-- Horné uško batoha -->
    <path d="M110 42 C110 18 170 18 170 42" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round" />
    <!-- Bočné vrecká -->
    <rect x="26" y="138" width="24" height="86" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="4" />
    <rect x="230" y="138" width="24" height="86" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="4" />
    <!-- Hlavné telo batoha -->
    <rect x="48" y="42" width="184" height="232" rx="34" fill="#ffffff" stroke="#1e293b" stroke-width="5" />
    <!-- Predné vrecko (ako v origináli) -->
    <path d="M92 274 V238 Q92 224 106 224 H176 Q190 224 190 238 V274" fill="none" stroke="#1e293b" stroke-width="4" />
    <!-- Chlopňa / zipsová línia v strede -->
    <path d="M48 118 H232" stroke="#1e293b" stroke-width="3.5" />
    <rect x="128" y="102" width="24" height="32" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="3.5" />
    <line x1="134" y1="118" x2="146" y2="118" stroke="#1e293b" stroke-width="3" />

    <!-- 7 kartičiek so slovami -->
    <g font-family="Plus Jakarta Sans, sans-serif" font-size="13.5" font-weight="700" fill="#221b1e" text-anchor="middle">
      <g transform="rotate(-11 94 79)">
        <rect x="64" y="65" width="60" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
        <text x="94" y="83">faloš</text>
      </g>
      <g transform="rotate(14 185 80)">
        <rect x="160" y="67" width="50" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
        <text x="185" y="85">lož</text>
      </g>

      <rect x="64" y="104" width="76" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
      <text x="102" y="122">pretvárka</text>

      <rect x="136" y="142" width="66" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
      <text x="169" y="160">hádka</text>

      <rect x="66" y="169" width="64" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
      <text x="98" y="187">radosť</text>

      <g transform="rotate(-8 173 206)">
        <rect x="138" y="193" width="70" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
        <text x="173" y="211">pohoda</text>
      </g>

      <g transform="rotate(-10 106 239)">
        <rect x="70" y="226" width="72" height="26" rx="6" fill="#fff" stroke="#1e293b" stroke-width="2" />
        <text x="106" y="244">úsmev</text>
      </g>
    </g>
  </svg>
</figure>
`;

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · Doprava a ovzdušie (úlohy 01 – 07)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <h3 class="passage-title">Doprava a ovzdušie</h3>
        <p>K hlavným environmentálnym problémom patria dopravné emisie (vylučovanie škodlivých látok do ovzdušia, ako napr. CO<sub>2</sub>). V rámci Európskej únie (EÚ) vzniká v odvetví dopravy takmer 30 % všetkých emisií oxidu uhličitého (CO<sub>2</sub>). Jednotlivé druhy dopravy sa na znečisťovaní podieľajú takto:</p>
        ${CO2_GRAPH_SVG}
        <p>Cestovať musíme, prepravovať tovar tiež. Aké sú teda naše možnosti pomôcť EÚ dokázať splniť plán znížiť emisie z dopravy o 60 %? Plánuje sa to zmeniť do roku 2050.</p>
        <p>Individuálna automobilová doprava je síce pohodlná, ale najmenej účinná, ak berieme do úvahy pomer počtu prepravených osôb voči zabratej ploche aj rozlohu plôch potrebných na parkovanie, je taktiež neekologická pre množstvo spotrebovaných pohonných hmôt, objem exhalátov vypustených do ovzdušia pri výrobe automobilov, elektromobilov či hybridov, resp. pri ich samotnom používaní.</p>
        <p class="passage-lead-list">Mestá, samosprávy, regióny už robia mnoho opatrení, napr.:</p>
        <ul class="passage-checks">
          <li>zriaďujú v mestách tzv. nízkoemisné zóny, ktoré sú spoplatnené alebo do nich nemajú povolený vjazd všetky vozidlá;</li>
          <li>zlacňujú lístky na hromadnú vnútromestskú (autobusy, električky, trolejbusy, metro...) či medzimestskú (autobusy, vlaky) dopravu;</li>
          <li>kladú dôraz na preferenciu verejnej dopravy, ktorá je v ranných špičkách vďaka vyhradeným vlastným pruhom a semaforom rýchlejšia ako osobné autá;</li>
          <li>zavádzajú tzv. integrovanú dopravu, t. j. jednotlivé spoje pri prestupoch na seba nadväzujú, aby bolo cestovanie čo najefektívnejšie a najkomfortnejšie;</li>
          <li>poskytujú verejné bicykle a vyčleňujú finančné zdroje na budovanie cyklotrás;</li>
          <li>vytvárajú plány na používanie zdieľaných áut, t. j. viacerí ľudia by na základe systému používali to isté auto vtedy, keď ho práve potrebujú...</li>
        </ul>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · Veľké knižné putovanie (úlohy 08 – 14)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <h3 class="passage-title">Zapoj sa s nami do našej online hry Veľké knižné putovanie</h3>
        <p>Červenú čiapočku už nebaví dennodenne sa prechádzať hore-dolu tým istým lesom na Považí. Naspamäť pozná každý strom, koreň či steblo trávy. Dokonca aj so zlým vlkom sa spriatelili a spoločný čas si krátia vypekaním buchiet u babičky. Čiapočka v srdci túži po naozajstnom dobrodružstve – okamžite ju zachváti knižná cestovná horúčka!</p>
        <p>Už niekoľko mesiacov totiž dostáva záhadné pohľadnice zo všetkých kútov knižného sveta. Na ich prednej strane sú zobrazené skutočné i vymyslené krajiny z knižných príbehov. Pohľadnice so sprievodným textom od knižných postáv lákajú Červenú čiapočku na nevídané dobrodružstvo. Hoci je každá pohľadnica iná, majú jednu vec spoločnú – všetky sú nepodpísané.</p>
        <p>Tajne si naplánuje cestu rôznymi kútmi skutočného i knižného sveta. Príležitosť vyraziť do sveta prichádza v marci. Babička Čiapočky práve v tomto čase odchádza na mesačný kúpeľný pobyt do Piešťan. Červenej čiapočke sa nečakane ponúkne príležitosť, zbalí sa a hor sa za dobrodružstvom!</p>
        <p><strong>Pravidlá online hry:</strong> O polnoci sa objaví obrázková indícia plná vizuálnych náznakov a tipov, ktoré akokoľvek súvisia s danými hrdinkami, hrdinami a príbehmi, v ktorých vystupujú. Indícia ti takisto naznačí, v ktorej krajine sa knižný príbeh odohráva. O 12.00 h pribudne druhá indícia vo forme textu na zadnej strane pohľadnice, ktorý napísala daná knižná postava. O 16.00 h pribudne posledná indícia – rozhovor medzi Červenou čiapočkou a neznámymi okoloidúcimi, ktorých požiada o pomoc pri hľadaní knižných postáv.</p>
        <p>Nastav si budík a využi všetky indície, ktoré sa objavia počas dňa. Svoju odpoveď napíš do políčka a hneď sa dozvieš, či sa ti podarilo odhaliť odosielateľku alebo odosielateľa záhadných pohľadníc. Máš toľko pokusov, koľko len chceš. Ak to však nestihneš, nezúfaj, hádať môžeš do konca mesiaca.</p>
        <p>Pusti sa do hádania a pamätaj, že každé dobrodružstvo sa začína vždy od prvej strany.</p>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Stratený svet (úlohy 15 – 21)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <p class="passage-author">Arthur Conan Doyle</p>
        <h3 class="passage-title">Stratený svet</h3>
        <p>Keď sme večer dorazili na miesto činu, bolo tam už oveľa viacej obecenstva, ako sme poobede predpokladali. Do popredia vystúpil profesor Murray, predseda Združenia zoológov. Prečo si ľudia, ktorí chcú povedať čosi, čo stojí za vypočutie, nedajú námahu a nenaučia sa hovoriť tak, aby ich poslucháči počuli? Spôsob, akým predstupujú pred auditórium, má v sebe toľko racionálnosti, ako keby ste sa pokúšali prečerpať zvláštnu tekutinu z prameňa do rezervoáru pomocou upchatej rúry, pričom prečistiť ju je tá najjednoduchšia vec na svete. Tak teda profesor Murray vyslovil niekoľko závažných postrehov, ktoré adresoval svojej bielej viazanke, pričom nanajvýš smiešne žmurkal na strieborný svietnik.</p>
        <p>Skončil a posadil sa. Potom vstal prírodovedec Waldron, slávny a populárny prednášateľ. Rozprával priam nadpozemsky. Zrozumiteľne vykladal o prehistórii zemegule a života na nej. Dlhý výklad zakončil slovami: „Našťastie, jaštery vyhynuli ešte predtým, ako sa na Zemi objavil človek.“</p>
        <p>„To je otázne!“ zahrmel hlas priamo z pódia.</p>
        <p>Pán Waldron bol známy tým, že sa vie ovládať, navyše mal dar štipľavého humoru. Lenže tento nečakaný vstup mu prichodil taký absurdný, že zrazu nevedel, čo si s ním počať. Na chvíľu sa odmlčal, potom zvýšil hlas a pomaly svoje posledné slová zopakoval.</p>
        <p>„Jaštery vyhynuli ešte predtým...“</p>
        <p>„To je otázne!“ zahrmel druhý raz hlas profesora Challengera.</p>
        <p>Profesor Waldron, hoci bol skúsený rečník, upadol do rozpakov. Na chvíľu zaváhal, zajachtal sa, zopakoval, čo už predtým povedal, začal sa zamotávať do rozmerných súvetí, až sa nakoniec celý rozzúrený obrátil na príčinu svojich ťažkostí.</p>
        <p>Sieňou sa rozniesol šum. Študenti neskrývali potešenie nad tým, že sa ako bohovia na Olympe medzi sebou rujú.</p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka · Pieseň Viem, čo cítiš (úlohy 27 a 28)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Na nasledujúcu pieseň sa vzťahujú úlohy 27 a 28</div>
        <p class="passage-author" style="text-align:left;">Pavol Habera/Daniel Hevier</p>
        <h3 class="passage-title" style="text-align:left;">Viem, čo cítiš</h3>
        <div class="passage-poem">
          Život pre nás má ešte zopár slov<br />
          Ak nechceš strácať svoje sny a dávnych priateľov<br />
          Stále dobiehaš svoj druhý dych<br />
          Každá tvár svoj príbeh má, tak čítaj priamo <u>z nich</u>
        </div>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka · Pieseň Do batôžka a ilustrácia (úloha 29)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Na nasledujúcu pieseň a ilustráciu sa vzťahuje úloha 29</div>
        <div class="passage-split">
          <div>
            <p class="passage-author" style="text-align:left;">Milan Lasica/Jaroslav Filip</p>
            <h3 class="passage-title" style="text-align:left;">Do batôžka</h3>
            <div class="passage-poem">
              Do batôžka si nalož<br />
              Pretvárku, lož a faloš<br />
              A potom ich hoď z mosta do vody<br />
              Bez pretvárky a falše<br />
              Hneď by ti bolo krajšie<br />
              Hneď by tu bolo viacej pohody<br />
              Ak k tomu pridáš hádky<br />
              Ach, to by boli sviatky<br />
              Keby sa ľudia vadiť prestali
            </div>
          </div>
          ${BATOH_SVG}
        </div>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {
  q10_pohladnica: `
    <div class="sjl-postcard-wrap">
      <div class="sjl-postcard">
        <p>V situácii, v ktorej sa často stretávajú nečakané skutočnosti a prepletené osudy, som nútený dookola prehodnocovať svoje chápanie pravdy. Často nachádzam informácie, ktoré vedú ku skrytej pravde. Využívam najmä logické uvažovanie a prácu s faktmi, no keď si myslím, že už poznám základné pravidlá, objavia sa nové okolnosti, ktoré prevrátia môj pohľad na predchádzajúce dianie.</p>
        <p class="sjl-postcard-sign">Tvoj pisateľ z tienistých uličiek</p>
      </div>
    </div>
  `
};
