import type { SharedPassage } from '../../types';

// Maturita 2025, riadny (marcový) termín – test EČ MS zo SJL, kód 25 1403.
// Prepis podľa oficiálneho PDF NIVaM. Zvýraznené časti originálu sú v <strong class="hl">.

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · Z webovej poradne (úlohy 01 – 08)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <h3 class="passage-title">Z webovej poradne</h3>
        <p class="passage-note">(upravené)</p>
        <p><strong class="hl">Bežecký alebo behací?</strong> – Technické zariadenie, ktoré sa používa na behanie vo fitnescentrách, sa správne nazýva behací pás alebo bežecký pás?</p>
        <p>Z jazykového hľadiska sú správne pomenovania bežiaci pás a bežecký pás. Spojenie behací pás neodporúčame používať, lebo v slovenčine sa význam „určený na behanie“ vyjadruje ustálene prídavným menom bežecký, napr. bežecká trať, bežecká dráha, bežecká trasa, bežecký okruh, bežecký areál. Pomenovanie bežiaci pás sa ustálene používa ako technický termín vo všeobecnejšom význame „zariadenie na plynulú dopravu, dopravný pás“ (porov. heslá bežiaci a pás v slovníkoch na slovnik.juls.savba.sk a v Kultúre slova, 2021, roč. 55, č. 1, s. 61). Označenie bežiaci pás možno použiť aj v súvislosti s prístrojom slúžiacim na behanie (v interiéri), lebo pás vykonáva rovnaký pohyb ako dopravníkový pás, teda pomenovanie je motivované činnosťou, ktorú vykonáva. Slovné spojenie možno prípadne spresniť prídavným menom tréningový, t. j. tréningový bežiaci pás. Správny je aj názov bežecký pás, ktorý sa v súčasnej jazykovej praxi používa častejšie. Pri tomto pomenovaní sme sa stretli s námietkami, že bežecký pás sa nepoužíva iba na behanie, ale aj na chôdzu, takže je jeho pomenovanie nepresné. Myslíme si však, že výraz bežecký pás dostatočne plní identifikačnú a komunikačnú funkciu pomenovania tréningového stroja. Keď treba zdôrazniť, že pohyblivý pás je určený na beh aj na chôdzu, môže sa použiť pomenovanie bežecký a chodecký pás. Dodávame, že v súčasnosti sa na internete ponúkajú aj špeciálne bežiace pásy pre chodcov so zodpovedajúcim názvom chodecký pás.</p>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · Haiku (úlohy 09 – 16)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <h3 class="passage-title">Haiku</h3>
        <div class="ms-subtexts-grid">
          <div class="ms-subtext">
            <p class="ms-subtext-tag">Text A</p>
            <p class="ms-subtext-head">Jack Kerouac – Americké haiku</p>
            <div class="passage-poem">V mojej lekárničke<br />zimná mucha<br />umrela na starobu</div>
          </div>
          <div class="ms-subtext">
            <p class="ms-subtext-tag">Text B</p>
            <p class="ms-subtext-head">Jack Kerouac – Haiku</p>
            <div class="passage-poem">Včela!<br />Čo na mňa zízaš?<br />Veď ja nie som kvet!</div>
          </div>
          <div class="ms-subtext">
            <p class="ms-subtext-tag">Text C</p>
            <p class="ms-subtext-head">Ján Štrasser – Slovenské haiku</p>
            <div class="passage-poem">U nás doma po našom:<br />Haiku, haiečku,<br />haiku zelený…</div>
          </div>
          <div class="ms-subtext">
            <p class="ms-subtext-tag">Text D</p>
            <p class="ms-subtext-head">Ján Štrasser – <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> haiku</p>
            <div class="passage-poem">Po nás potopa?<br />To by sa nám hodilo,<br />je však pred nami.</div>
          </div>
        </div>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Jedinečný prístroj vo Zvolene (úlohy 17 – 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <h3 class="passage-title">Jedinečný prístroj vo Zvolene:<br />Neuveríte, akých pacientov skenuje toto „CT-čko“!</h3>
        <p>Veľký stroj, ešte väčšia pomoc! Slovensko má unikátny 3D CT skener na drevo. Nachádza sa v lesníckom biotechnologickom parku vo Zvolene.</p>
        <p>Za pár minút dokáže vyhotoviť snímku vnútra drevnej guľatiny a odhalí prípadné chyby dreva, ktoré sa neskôr odstránia. Ide o jedinečnú <strong class="hl">technológiu</strong> počítačovej tomografie, ktorá umožňuje vytvoriť trojrozmerný model každej guľatiny, čo výrazne pomôže lesníkom aj spracovateľom dreva. Takýchto CT prístrojov je iba 15 na svete, slovenský skener je jedinečný aplikáciou na listnaté stromy.</p>
        <p>Nový 3D CT skener na stromy aj s linkou za 4,5 milióna eur prevádzkuje Centrum <strong class="hl">excelentnosti</strong> lesnícko-drevárskeho komplexu LignoSilva Národného lesníckeho centra (NLC) vo Zvolene. „Je unikátny tým, že vytvára aplikácie na optimálne využitie listnatej guľatiny. Všetky nasadené CT skenery na svete pracujú s ihličnatou guľatinou. Vytvára sa tu priestor na skenovanie listnatého dreva, z ktorého sa vyrábajú výrobky s vysokou pridanou <strong class="hl">hodnotou</strong>. Čiže aj luxusné, ako sú napríklad pažby zbraní, športové potreby, hudobné nástroje, dubové sudy. Tu sa používa najkvalitnejšie drevo,“ vyzdvihuje jedinečnosť prístroja vedúci centra Tomáš Gergeľ. Stromy sú rôznorodé, každý je jedinečný a má svoje vnútorné chyby. „My týmto skenerom zistíme polohu chýb a tvar a na základe toho zatriedime guľatinu a rozmanipulujeme ju tak, aby sa z nej dali vyrobiť výrobky s rôznym zameraním,“ dodáva.</p>
        <p class="passage-source">27. 10. 2023, www.cas.sk, upravené</p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka 4 · Realitný trh (úlohy 25 – 32)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 4</div>
        <h3 class="passage-title">Realitný trh</h3>
        <p style="margin: 0 0 0.75rem; padding-bottom: 0.35rem; border-bottom: 1.5px solid var(--tp-ink); text-indent: 0; font-weight: 700;">Družstevná ulica, Bratislava III</p>
        <div class="ms-ad-grid">
          <div>
            <ul class="ms-ad-params">
              <li><strong class="hl">Typ: predaj</strong></li>
              <li><strong class="hl">Druh: 4-izbový byt</strong></li>
              <li><strong class="hl">Stav: novostavba</strong></li>
              <li><strong class="hl">Cena: v texte</strong></li>
              <li><strong class="hl">Provízia zahrnutá v cene: áno</strong></li>
              <li><strong class="hl">ID inzerátu: 7654321</strong></li>
            </ul>
            <p style="text-indent: 0; margin-bottom: 0;">Hľadáte ideálne nové bývanie? Naša realitná kancelária vám ponúka na predaj parádny 4-izbový byt v bytovom dome nachádzajúcom sa na rozhraní dvoch bratislavských mestských častí – Nového Mesta a Ružinova.</p>
          </div>
          <figure class="sjl-figure" style="margin: 0;">
            <img class="ms-ad-photo" src="/images/ms-2025/ukazka4-holobyt.jpg" alt="Ilustračná fotografia holobytu" loading="lazy" />
          </figure>
        </div>
        <p style="text-indent: 0;">Nehnuteľnosť je v štádiu holobytu s možnosťou dokončenia podľa vašich predstáv. <span aria-label="usmiaty emotikon">☺</span></p>
        <p style="text-indent: 0;">Dispozícia bytu: predsieň, dvakrát spálňa, obývacia izba, kuchyňa s jedálňou, odkiaľ je vstup na veľkorysý balkón (viac ako 30 m<sup>2</sup>), dvakrát kúpeľňa s toaletou.</p>
        <p style="text-indent: 0;">K bytu prináleží parkovacie miesto v podzemnej garáži (v cene), takže nebudete mať žiadny problém s preplneným parkoviskom!</p>
        <p style="text-indent: 0;">Celková plocha vrátane balkóna je viac ako 140 m<sup>2</sup>. Byt sa nachádza na 7. podlaží bytového domu v strategickej časti mesta v širšom centre s kompletnou občianskou vybavenosťou (maloobchody, obchodné reťazce, školy, služby…).</p>
        <p style="text-indent: 0;">Foto je ilustračné. Odkaz na virtuálnu prehliadku a ďalšie info vrátane ceny zašlem na požiadanie.</p>
        <p style="text-indent: 0; margin-bottom: 0;">Neváhajte ma kontaktovať! Som 24/7 na čísle 0900 123 456 a na e-maile makler@realitka.com.</p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka 5 · Paolo Coelho – Alchymista (úlohy 33 – 40)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 5</div>
        <p class="passage-author">Paolo Coelho</p>
        <h3 class="passage-title">Alchymista</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>– Čo mám robiť teraz? – spýtal sa chlapec.</p>
        <p>– Pokračuj v ceste k pyramídam, – odvetil Alchymista. – A naďalej si všímaj znamenia. Tvoje srdce ti ukáže, kde je poklad.</p>
        <p>– Ešte toto som sa mal naučiť?</p>
        <p>– Nie, – odvetil Alchymista. – Ešte musíš vedieť toto: vždy, ešte pred uskutočnením sna, Duša sveta chce vedieť, čo si sa na svojej ceste naučil. Nerobí to zo zlomyseľnosti, ale preto, lebo chce, aby sme spolu s našimi snami dostali aj lekcie, ktoré môžeme dostať len vtedy, keď ideme za splnením snov. A práve to je okamih, keď sa väčšina ľudí vzdá. My v našej reči púšte tomu hovoríme „zomrieť vo chvíli, keď na obzore už vidieť datľové háje“. Každé hľadanie sa začína šťastím začiatočníka. A vždy sa končí skúškou dobyvateľa.</p>
        <p>Santiago si spomenul na staré príslovie svojho rodného kraja. Hovorí, že najtemnejšia noc je práve pred svitaním.</p>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka 6 · Milan Lasica, Július Satinský – Soirée (úlohy 41 – 48)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 6</div>
        <p class="passage-author">Milan Lasica, Július Satinský</p>
        <h3 class="passage-title">Soirée</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-indent: 0;"><strong>L:</strong> Celý čas som sa pretvaroval. Vy ste chodili po svete a ja som sedel doma a pretvaroval som sa. Tváril som sa, že sa učím, ale neučil som sa. Robil som nákresy. Chcel som objaviť lietadlo.</p>
        <p style="text-indent: 0;"><strong>S:</strong> Lietadlo už dávno objavili!</p>
        <p style="text-indent: 0;"><strong>L:</strong> To som práve nevedel. K nám na vidiek sa to nedostalo. Robil som si nákresy – malé, väčšie, celkom veľké. Keby mi ich učiteľ nebol zhabal, tak dnes nesedíme tu, ale v mojom lietadle sa vznášame nad Himalájami. <em>(Obaja letia nad Himalájami.)</em> Páčia sa vám Himaláje?</p>
        <p style="text-indent: 0;"><strong>S:</strong> Ujde to. Jano, čo robíš na Himalájach? Hybaj domov, prepadne ti vízum!</p>
        <p style="text-indent: 0;"><strong>L:</strong> A v škole som tiež lietal, iba po chodbách, dával som spolužiakom podnožky, aby som zistil príčiny voľného pádu. A doma som nespal, len som sa tváril, že spím. Robil som si nákresy, výpočty…</p>
        <p style="text-indent: 0;"><strong>S:</strong> A prišli ste na niečo?</p>
        <p style="text-indent: 0;"><strong>L:</strong> V tom čase vznikol prvý variant môjho prístroja – spola výťah, spola lietadlo a ešte sa to dá použiť aj ako kladivo. Výhoda tohto výťahu je v tom, že hoci ho namontujete do päťposchodového domu, môžete sa v ňom vyviezť až na tridsiate druhé poschodie.</p>
        <p style="text-indent: 0;"><strong>S:</strong> Ako je to možné?</p>
        <p style="text-indent: 0; margin-bottom: 0;"><strong>L:</strong> Tak, že som do toho výťahu namontoval tridsaťdva gombíkov! A to je už len krok k dobytiu celého vesmíru! Ešte pár gombíkov a sme tam!</p>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka 7 · Valaská škola mravúv stodola (úlohy 49 – 56)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 7</div>
        <h3 class="passage-title"><span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> – Valaská škola mravúv stodola</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-align: center; text-indent: 0; font-weight: 700; margin: 0.75rem 0 0.5rem;">Dobrá dieta prodlužuje letá</p>
        <div class="passage-poem">
          Hippokrates takrečený doktor znamenitý<br />
          nikdy obeda nejedal, s večerú byl sytý.<br />
          S tú dietú se zadržal do starého veku,<br />
          vždy byl zdravý, a jinšého neužíval léku.<br />
          <br />
          Nikdy nemoci necítil, snad by byl dluhšej žil,<br />
          kdyby se byl z pritrefení z rebríka nezabil.<br />
          <u>Salernusové prísloví</u> opakujú mnozí:<br />
          že krátká večera nočnej lehkosti osoží.<br />
          <br />
          Však ale jestli žalúdek nemá čo tráviti,<br />
          múže ze svú pálčivosťú krvi uškoditi.<br />
          Zlý obed, hojná večera posluhuje k zdraví,<br />
          neb žalúdek v nočném spaní lépej jídlo tráví.
        </div>
        <div class="passage-footnotes">
          <p><strong>Vysvetlivky:</strong></p>
          <p>Hippokrates – starogrécky lekár</p>
          <p>Salernus – taliansky lekár a alchymista</p>
        </div>
      </div>
    `
  },
  ukazka_8: {
    label: 'Ukážka 8 · Romain Rolland – Peter a Lucia (úlohy 57 – 64)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 8</div>
        <p class="passage-author">Romain Rolland</p>
        <h3 class="passage-title">Peter a Lucia</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Vošli do chrámu. Nad hlavami im hrkútal holub. Posledný zvuk zvonku. Paríž zmĺkol. Voľné nebesá ustúpili. <strong class="hl">Velebné</strong> tóny organa, veľké klenby, kamenná a zvuková opona ich oddelila od sveta.</p>
        <p>Zastavili sa v bočnej lodi, medzi druhým a tretím oltárom, vľavo od vchodu. Schúlili sa vo výklenku piliera na schodoch, ukrytí pred pohľadmi ostatných ľudí. <u>Chrbtom boli obrátení k chóru, a keď zdvihli zrak, videli štít oltára, kríž a farebné obloky bočnej kaplnky.</u> Krásne starodávne spevy plakali zbožnou melanchóliou. Peter a Lucia, dvaja mladí pohania, držali sa za ruky pred svojím veľkým priateľom v chráme ponorenom do smútku. A obidvaja súčasne tíško šeptali:</p>
        <p>– Ty veľký náš priateľ, pred tvojou tvárou si ho beriem, pred tvojou tvárou si ju beriem. Spoj nás! Vidíš naše srdcia.</p>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
