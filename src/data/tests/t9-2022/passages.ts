import type { SharedPassage } from '../../types';

interface WasteVisualOpts {
  side: 'bin-right' | 'bin-left';
  fact: string;
  decompSrc: string;
  decompW: number;
  decompH: number;
  decompLabelHtml: string;
  decompAlt: string;
  binSrc: string;
  binW: number;
  binH: number;
  binAlt: string;
}

function renderWasteBottom(o: WasteVisualOpts): string {
  const decompHtml = `
    <div class="sjl-waste-decomp">
      <img src="${o.decompSrc}" width="${o.decompW}" height="${o.decompH}" alt="${o.decompAlt}" loading="lazy" decoding="async" />
      <span>${o.decompLabelHtml}</span>
    </div>
  `;
  const binHtml = `
    <figure class="sjl-figure sjl-waste-bin">
      <img src="${o.binSrc}" width="${o.binW}" height="${o.binH}" alt="${o.binAlt}" loading="lazy" decoding="async" />
    </figure>
  `;
  const dotsHtml =
    o.side === 'bin-right'
      ? `<img class="sjl-waste-dots is-to-right" src="/images/t9-2022/ukazka1-bublinky-vpravo.svg" width="82" height="64" alt="" aria-hidden="true" decoding="async" />`
      : `<img class="sjl-waste-dots is-to-left" src="/images/t9-2022/ukazka1-bublinky-vlavo.svg" width="100" height="94" alt="" aria-hidden="true" decoding="async" />`;

  return `
    <div class="sjl-waste-bottom is-${o.side}">
      <div class="sjl-waste-bubble">${o.fact}</div>
      <div class="sjl-waste-icons">
        ${o.side === 'bin-right' ? `${decompHtml}${dotsHtml}${binHtml}` : `${binHtml}${dotsHtml}${decompHtml}`}
      </div>
    </div>
  `;
}

const VOLUNTEER_CHART_SVG = `
<figure class="diagram-svg-wrap sjl-figure">
  <svg class="test-svg sjl-chart-svg" viewBox="0 0 585 280" role="img" aria-label="Graf: Asociácie mladých ľudí k slovu dobrovoľníctvo. nezištná a verejnoprospešná práca 12 %, dobrý pocit, užitočnosť 10 %, pomoc osobám v núdzi 14 %, angažovanosť mladých ľudí 8 %, práca zadarmo, neplatená činnosť 24 %, slobodná vôľa konať dobro 13 %, pomáhanie druhým 19 %.">
    <rect x="2" y="2" width="581" height="276" fill="#ffffff" stroke="#8a8c8f" stroke-width="1.2" />
    <text x="292" y="28" text-anchor="middle" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#1f1f1f">Asociácie mladých ľudí k slovu dobrovoľníctvo</text>

    <!-- Os Y -->
    <line x1="268" y1="44" x2="268" y2="244" stroke="#9ca3af" stroke-width="1.1" />

    <!-- Popisy a stĺpce (mierka: 1 % = 10,4 px, 0 % = 268, 25 % = 528) -->
    <g font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11.5" fill="#374151" text-anchor="end">
      <text x="260" y="62">nezištná a verejnoprospešná práca</text>
      <text x="260" y="89">dobrý pocit, užitočnosť</text>
      <text x="260" y="116">pomoc osobám v núdzi</text>
      <text x="260" y="143">angažovanosť mladých ľudí</text>
      <text x="260" y="170">práca zadarmo, neplatená činnosť</text>
      <text x="260" y="197">slobodná vôľa konať dobro</text>
      <text x="260" y="224">pomáhanie druhým</text>
    </g>

    <g fill="#57595c">
      <!-- 12 % = 124.8 -->
      <rect x="268" y="51" width="124.8" height="13" rx="1.5" />
      <!-- 10 % = 104 -->
      <rect x="268" y="78" width="104" height="13" rx="1.5" />
      <!-- 14 % = 145.6 -->
      <rect x="268" y="105" width="145.6" height="13" rx="1.5" />
      <!-- 8 % = 83.2 -->
      <rect x="268" y="132" width="83.2" height="13" rx="1.5" />
      <!-- 24 % = 249.6 -->
      <rect x="268" y="159" width="249.6" height="13" rx="1.5" />
      <!-- 13 % = 135.2 -->
      <rect x="268" y="186" width="135.2" height="13" rx="1.5" />
      <!-- 19 % = 197.6 -->
      <rect x="268" y="213" width="197.6" height="13" rx="1.5" />
    </g>

    <g font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11.5" font-weight="600" fill="#1f1f1f">
      <text x="400" y="62">12 %</text>
      <text x="379" y="89">10 %</text>
      <text x="421" y="116">14 %</text>
      <text x="358" y="143">8 %</text>
      <text x="524" y="170">24 %</text>
      <text x="410" y="197">13 %</text>
      <text x="473" y="224">19 %</text>
    </g>

    <!-- Mierka osi X -->
    <g font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="11.5" fill="#374151" text-anchor="middle">
      <text x="268" y="262">0 %</text>
      <text x="320" y="262">5 %</text>
      <text x="372" y="262">10 %</text>
      <text x="424" y="262">15 %</text>
      <text x="476" y="262">20 %</text>
      <text x="528" y="262">25 %</text>
    </g>
  </svg>
</figure>
`;

const BOYS_ARGUMENTS_FIG = `
<figure class="diagram-svg-wrap sjl-figure sjl-boys-fig">
  <img
    class="sjl-boys-img"
    src="/images/t9-2022/uloha21-chlapci.webp"
    width="883"
    height="780"
    alt="Ilustrácia troch rozprávajúcich sa chlapcov. MAREK: Viac informácií by zmenilo málo, lebo u nás v škole sa o tom stále hovorí a dobrovoľníctvu sa venujú len 2 % žiakov. LUKÁŠ: Určite by som sa zapojil aj ja, keby som mal viac informácií o dobrovoľníctve. FILIP: Napríklad ja už štvrtý rok vypomáham v útulku pre zvieratá. Zdá sa mi to prirodzené."
    loading="lazy"
    decoding="async"
  />
</figure>
`;

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · Triedenie odpadu (úlohy 01 – 07)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <h3 class="passage-title">Ako správne a zodpovedne triediť odpad?</h3>

        <div class="sjl-waste-grid" aria-label="Orámovaná časť ukážky – pravidlá triedenia odpadu podľa farieb kontajnerov">
          <div class="sjl-waste-cell">
            <div>
              <p class="sjl-waste-head">ZELENÁ</p>
              <ul class="sjl-waste-list">
                <li><span>–</span><span>nevratné sklenené fľaše,</span></li>
                <li><span>–</span><span>sklenené poháre, vázy,</span></li>
                <li><span>–</span><span>úlomky tabuľového skla,</span></li>
                <li><span>–</span><span>poháre od kompótov,</span></li>
                <li><span>–</span><span>sklenené obaly od kozmetiky, kávy a pochutín bez plastového vrchnáka.</span></li>
              </ul>
            </div>
            ${renderWasteBottom({
              side: 'bin-right',
              fact: 'Vedeli ste, že 15 sklenených fliaš sa zmení na akvárium?',
              decompSrc: '/images/t9-2022/ukazka1-rozklad-sklo.webp',
              decompW: 85,
              decompH: 84,
              decompLabelHtml: 'SKLO<br />4000 ROKOV',
              decompAlt: 'Čas rozkladu skla: 4000 rokov',
              binSrc: '/images/t9-2022/ukazka1-kos-sklo.webp',
              binW: 161,
              binH: 309,
              binAlt: 'Kontajner na sklo (SKLO) so sklenenými fľašami, pohármi a tabuľovým sklom'
            })}
          </div>

          <div class="sjl-waste-cell">
            <div>
              <p class="sjl-waste-head">ŽLTÁ</p>
              <ul class="sjl-waste-list">
                <li><span>–</span><span>PET fľaše,</span></li>
                <li><span>–</span><span>plastové tašky, vrecká,</span></li>
                <li><span>–</span><span>plastové obaly od kozmetiky,</span></li>
                <li><span>–</span><span>plastové obaly od aviváže a pracích prostriedkov,</span></li>
                <li><span>–</span><span>plastové obaly od kečupu, jogurtov...,</span></li>
                <li><span>–</span><span>fólie.</span></li>
              </ul>
            </div>
            ${renderWasteBottom({
              side: 'bin-left',
              fact: 'Vedeli ste, že 30 plastových fliaš sa pridaním textilu zmení na flaušovú bundu?',
              decompSrc: '/images/t9-2022/ukazka1-rozklad-pet.webp',
              decompW: 98,
              decompH: 100,
              decompLabelHtml: 'PET FĽAŠE<br />100 – 1000 ROKOV',
              decompAlt: 'Čas rozkladu PET fľaše: 100 – 1000 rokov',
              binSrc: '/images/t9-2022/ukazka1-kos-plasty.webp',
              binW: 236,
              binH: 354,
              binAlt: 'Kontajner na plasty (PLASTY) s plastovými obalmi a výzvou STLAČ!'
            })}
          </div>

          <div class="sjl-waste-cell">
            <div>
              <p class="sjl-waste-head">MODRÁ</p>
              <ul class="sjl-waste-list">
                <li><span>–</span><span>noviny, časopisy, letáky, katalógy,</span></li>
                <li><span>–</span><span>papierové tašky,</span></li>
                <li><span>–</span><span>papierové a kartónové obaly,</span></li>
                <li><span>–</span><span>kancelársky papier, obálky, listy, pohľadnice.</span></li>
              </ul>
            </div>
            ${renderWasteBottom({
              side: 'bin-right',
              fact: 'Vedeli ste, že 30 časopisov a novín sa zmení na škatuľu od televízora?',
              decompSrc: '/images/t9-2022/ukazka1-rozklad-noviny.webp',
              decompW: 56,
              decompH: 55,
              decompLabelHtml: 'NOVINY<br />3 – 12 MESIACOV',
              decompAlt: 'Čas rozkladu novín: 3 – 12 mesiacov',
              binSrc: '/images/t9-2022/ukazka1-kos-papier.webp',
              binW: 224,
              binH: 434,
              binAlt: 'Kontajner na papier (PAPIER) s novinami, škatuľou, obálkou a výzvou STLAČ!'
            })}
          </div>

          <div class="sjl-waste-cell">
            <div>
              <p class="sjl-waste-head">ČERVENÁ</p>
              <ul class="sjl-waste-list">
                <li><span>–</span><span>plechovky od nápojov,</span></li>
                <li><span>–</span><span>konzervy bez zvyškov jedla,</span></li>
                <li><span>–</span><span>kovové uzávery, uzávery z jogurtov a kompótov,</span></li>
                <li><span>–</span><span>alobaly, kovové súdky.</span></li>
              </ul>
            </div>
            ${renderWasteBottom({
              side: 'bin-left',
              fact: 'Vedeli ste, že 150 plechoviek sa zmení na panvicu?',
              decompSrc: '/images/t9-2022/ukazka1-rozklad-plechovka.webp',
              decompW: 98,
              decompH: 101,
              decompLabelHtml: 'PLECHOVKA<br />20 – 100 ROKOV',
              decompAlt: 'Čas rozkladu plechovky: 20 – 100 rokov',
              binSrc: '/images/t9-2022/ukazka1-kos-kovy.webp',
              binW: 238,
              binH: 444,
              binAlt: 'Kontajner na kovy (KOVY) s plechovkami, konzervami a výzvou STLAČ!'
            })}
          </div>
        </div>

        <div class="sjl-waste-qa">
          <p><strong>Kam patria použité hygienické vreckovky?</strong><br />Hygienické potreby (detské plienky, papierové vreckovky, tuba zo zubnej pasty a pod.) patria do zmesového odpadu, pretože sú znečistené.</p>
          <p><strong>Kam patria obaly z nebezpečných látok a prípravkov?</strong><br />Obaly obsahujúce zvyšky nebezpečných látok (motorových olejov, farieb, chemikálií, riedidiel a pod.) nepatria do triedeného odpadu. Odneste ich do zberného dvora.</p>
          <p><strong>Kam patrí polystyrén a škatule z kartónu?</strong><br />Ak nie je polystyrénu veľa, tak patrí do žltého kontajnera, určeného na plasty. Ak je rozmerný, odneste ho do zberného dvora. Škatule z kartónu patria do modrých nádob na papier iba po zmenšení objemu, napríklad poskladaním.</p>
          <p><strong>Kam patria tégliky z jogurtov?</strong><br />Patria do žltého kontajnera, určeného na plasty, musia však byť bez zvyškov jedla.</p>
        </div>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · Čarodejník (úlohy 08 – 14)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <p class="passage-author">Wilbur Smith</p>
        <h3 class="passage-title" style="margin-bottom:0.1rem;">ČARODEJNÍK</h3>
        <p class="passage-author" style="margin-bottom:0.75rem;">(historicko-dobrodružný príbeh)</p>

        <p>„Ako si sa dostal k tejto mape?“ naliehal Naja.</p>
        <p>„Pred dvanástimi rokmi som si na príkaz kráľa Sargona obhliadol mesto a vlastnoručne ju namaľoval,“ odvetil Ištar. „Nikto by nedosiahol toľkú presnosť a krásu.“</p>
        <p>„Ak si Sargon objednal mapu, prečo si mu ju nedal?“</p>
        <p>„Dal,“ Ištar kývol na dôraz. „Dal som mu nedokonalý náčrtok, pričom sám som si tajne ponechal dobrý kus, ktorý vidíte pred sebou. Vedel som, že jedného dňa mi zaň niekto zaplatí viac, než sa kedy zmohol Sargon.“</p>
        <p>Ďalšiu hodinu skúmali mapu, mlčky, pohrúžene. Ako bojujúci generáli s profesionálnym odhadom bojiska boli schopní obdivovať hĺbku a silu hradieb, veží a pevností.</p>
        <p>Trok nakoniec odstúpil od stola. „Nevidím žiadnu slabinu, čarodejník. Od začiatku si mal pravdu. Prelomiť tie múry zaberie tri roky ťažkej práce. Budeš musieť niečo vymyslieť, aby si si zarobil tri vrecia zlata.“</p>
        <p>„Voda,“ zašeptal Ištar. „Pozrite na vodu.“</p>
        <p>„Pozeral som na vodu,“ usmial sa naňho Naja tenkými perami. „Každú štvrť zásobujú kanály, je tam dosť vody na sto rokov pre Sargonových šesť terás.“</p>
        <p>„Faraón je vševediaci, vševediaci,“ Ištar sa mu uklonil. „Lenže odkiaľ pochádza všetka tá voda?“</p>
        <p>„Z dvoch mohutných riek, ktoré v tomto tisícročí nevyschli,“ doplnil Naja.</p>
        <p>„Ale kde vteká voda do mesta? Ako ním prechádza, pod všetkými tými múrmi?“ Ištar naliehal a Naja s Trokom si vymenili pohľady, v ktorých sa zračilo rodiace sa pochopenie.</p>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Dobrovoľníctvo mladých ľudí (úlohy 15 – 21)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <h3 class="passage-title">Hodnotová orientácia mladých ľudí vo vzťahu k dobrovoľníctvu</h3>

        <p>Pozitívne hodnoty z nás robia dobrých ľudí a motivujú nás k vlastnému ideálu, ktorý sa úzko spája s našimi snami, záujmami, potrebami a postojmi. Tie nás povzbudzujú meniť svet, byť užitočnými, vzdelávať sa a prežívať krásne životné okamihy.</p>
        <p>Vzťah hodnotovej orientácie a dobrovoľníctva je veľmi silný. Dobrovoľníctvo sa v súčasnosti vyznačuje rôznorodými možnosťami, zapája rôzne skupiny obyvateľstva, čím im umožňuje dosiahnuť sebarozvoj, získať pocit užitočnosti a zmysluplne tráviť voľný čas užitočnou prácou.</p>
        <p>Dobrovoľníci sú prosociálne sa správajúci ľudia a podľa bežného názoru prosociálni ľudia dovoľujú, aby ich druhí využívali vo svoj prospech, ale oni zámerne používajú seba ako nástroj, aby pomohli druhým. Títo jedinci sú si vedomí toho, že ak chceme nastoliť prosociálne vzťahy medzi ľuďmi, niekto sa musí začať správať prosociálne ako prvý. Nie sú to naivní ľudia, naopak, sú asertívni, aktívni a tvoriví.</p>
        <p>Z prieskumu vyplýva, že záujem mladých ľudí o dobrovoľnícke aktivity klesá. Mladí ľudia uvádzajú ako najčastejší dôvod, prečo sa nezapájajú do dobrovoľníctva, argument, že ich nikto systematicky neoslovuje s ponukou, majú nedostatok informácií o možnostiach dobrovoľníckej práce. Niektorí mladí ľudia necítia potrebu zapájať sa, naopak, vyhľadávajú príležitosti, aby si mohli zarobiť a pokryť tak svoje náklady na štúdium.</p>
        <p>Ako ukazuje graf, v prieskume sa zisťovalo aj to, čo si mladí ľudia pod pojmom dobrovoľníctvo predstavujú.</p>

        ${VOLUNTEER_CHART_SVG}
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {
  q14_excerpt: `
    <div class="sjl-excerpt-box">
      <p style="margin:0 0 0.45rem;text-indent:1.2rem;">„Ak si Sargon objednal mapu, prečo si mu ju nedal?“</p>
      <p style="margin:0 0 0.45rem;text-indent:1.2rem;">„Dal,“ Ištar kývol na dôraz. „Dal som mu nedokonalý náčrtok, pričom sám som si tajne ponechal dobrý kus, ktorý vidíte pred sebou. Vedel som, že jedného dňa mi zaň niekto zaplatí viac, než sa kedy zmohol Sargon.“</p>
      <p style="margin:0;text-indent:1.2rem;">Ďalšiu hodinu skúmali mapu, mlčky, pohrúžene. Ako bojujúci generáli s profesionálnym odhadom bojiska boli schopní obdivovať hĺbku a silu hradieb, veží a pevností.</p>
    </div>
  `,
  q21_boys: BOYS_ARGUMENTS_FIG,
  q22_poem: `
    <div class="sjl-excerpt-box">
      <div style="font-size:0.9em;color:var(--tp-ink-2);">Milan Lasica</div>
      <div style="font-weight:800;margin-bottom:0.45rem;">Studnica múdrosti</div>
      <div>
        Bez práce nie sú koláče<br />
        tiež táto múdrosť je tu<br />
        a niekto si to odskáče<br />
        nechceme držať diétu
      </div>
    </div>
  `,
  q23_sentence: `
    <div class="sjl-excerpt-box" style="font-style:italic;">
      Zápas s <strong>_echmi</strong> je lákadlom aj pre <strong>_lovenských</strong> fanúšikov a <strong>_opradčania</strong> nemajú problém zaplniť štadión aj v letných mesiacoch, keď sa tu koná najstarší <strong>_urópsky</strong> turnaj, tzv. <strong>_atranský</strong> pohár.
    </div>
  `,
  q25_poem: `
    <div class="sjl-excerpt-box">
      <div style="font-size:0.9em;color:var(--tp-ink-2);">Sima Martausová</div>
      <div style="font-weight:800;margin-bottom:0.45rem;">Čaro obyčajných vecí</div>
      <div>
        Srdce hoc aj bez nôh vie byť bežec najlepší,<br />
        ak sa na to vedia oči inak pozerať.<br />
        Slovo od priateľa oveľa viac poteší,<br />
        keď sa naša cesta chybným smerom uberá.<br /><br />
        /:To tie usmievavé oči a hodnoty neoblomné<br />
        zanechali stopy vo mne.:/
      </div>
    </div>
  `,
  q30_fable: `
    <div class="sjl-excerpt-box">
      <div style="font-weight:800;text-align:center;margin-bottom:0.5rem;">Pocestní a platan</div>
      <p style="margin:0 0 0.55rem;text-indent:1.2rem;">V lete na poludnie dvaja pocestní, ukonaní slnečnou páľavou, nečakane zazreli platan. Ihneď zamierili k nemu, ľahli si do tieňa jeho konárov a odpočívali. Ako tak hľadeli hore na platan, vraví jeden druhému: „Tento strom nemá pre ľudí žiadnu cenu, lebo nemá plody.“ „Nevďačníci,“ ozval sa strom, „to práve teraz mi vyčítate neužitočnosť, keď užívate moje dobrodenie?“</p>
      <p style="margin:0;text-indent:1.2rem;font-style:italic;">Tak je to aj s ľuďmi: významné poslanie niektorých a ich osoh pre spoločnosť sú nedocenené.</p>
    </div>
  `
};
