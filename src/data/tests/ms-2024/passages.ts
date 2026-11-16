import type { SharedPassage } from '../../types';

// Maturita 2024, riadny (marcový) termín – test EČ MS zo SJL, kód 24 1403.
// Prepis podľa oficiálneho testu NIVaM (2024.pdf). Zvýraznené časti sú v <strong class="hl">,
// podčiarknuté v <u>, zakryté sivé miesta v <span class="ms-blank">.
export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · P. Kováč – Ak beháte s hudbou… (úlohy 01 – 08)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <h3 class="passage-title">Ak beháte s hudbou, pohyb je efektívnejší a zrejme ste aj rýchlejší, naznačuje nový výskum</h3>
        <p class="passage-note">(upravené)</p>
        <p>Nová štúdia o behu naznačuje, že čím viac sa pri pohybe sústredíme na to, ako ho vykonávame, tým je pre nás namáhavejší. Len čo však nájdeme určité rozptýlenie, vynaložené úsilie bude pre naše telo menej náročné – subjektívne aj objektívne. Tvrdia to vedci z Iránu a z USA, ktorí pracovali so skupinou 27 žien. Každá z <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> absolvovala na bežeckom páse štyri behy, zakaždým so sústredením sa na niečo iné.</p>
        <p>Pri zameraní sa na vlastný pohyb účastníčky výskumu pociťovali vyššiu námahu aj únavu. Keď pri rovnakom behu sledovali video, unavili sa menej. <strong class="hl">Nešlo však len o subjektívny pocit. Nižšia únava sa priaznivo odzrkadlila aj na ukazovateľoch, ktoré počas behu mapovali stav organizmu. Napríklad na nižších hodnotách laktátu či efektívnejšej spotrebe kyslíka.</strong></p>
        <p><strong class="hl">Závery výskumu sú v protiklade s tým, čo tréneri často odporúčajú začínajúcim bežcom. Kážu im, aby sa sústredili na správne dýchanie, vnímali údery srdca a kontrolovali prácu nôh. Zdá sa však, že to môže byť kontraproduktívne.</strong></p>
        <p><strong class="hl">Štúdia by mohla byť aj podporným dôkazom pre takzvanú hypotézu obmedzenej akcie.</strong> Ide o teóriu, ktorá naznačuje, že v prípade, ak naše telo vykonáva naučený pohyb podvedome, je pri tejto činnosti efektívnejšie, ako keď telo vedome <u>kontrolujeme</u>.</p>
        <p class="passage-source">Peter Kováč, 16. 11. 2021, dennikn.sk</p>
      </div>
    `
  },
  ukazka_2: {
    // Meno autora je v origináli zakryté (úloha 13 sa pýta na autora diela Drak sa vracia).
    label: 'Ukážka 2 · Drak sa vracia (úlohy 09 – 16)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <h3 class="passage-title"><span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> – Drak sa vracia</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-indent:0">[…]</p>
        <p>Dnes vedela, za toľký čas rozležalo sa jej to v hlave, že on jej vlastne nikdy nepatril, pretože nepatril nikomu. Bol vždy sám. Sám proti všetkým, proti nej i proti sebe samému. Ak si niekto mohol robiť nárok na neho, mohol to byť len sám belzebub, vládca pekiel. Len on sám bol svedkom všetkých tých skutkov a myšlienok, čo privodili nešťastie na celú dedinu.</p>
        <p>Lebo že sa stal nešťastím dediny, bolo už celkom isté. Ohne, povodne, hlad a choroby sprevádzali jeho kroky a boli pamiatkou na jeho prítomnosť. <strong class="hl">Tak aspoň usúdila dedina a taká musela byť pravda. Veď nikto ani poriadne nevedel, kde sa tu vzal a odkiaľ prišiel. Starý Lepiš Madlušovie našiel ho vraj pred rokmi povyše Boce, keď sa vracal cez Čertovicu z jarmoku v Brezne.</strong> Lepiš bol už vtedy napoly slepý, ale jeho kôň, kôň, ktorý bol múdrejší ako teplický richtár, zastal vraj vtedy sám od seba na ceste a nepohol sa, kým gazda nezišiel z voza a nenahmatal podľa hlasu v tme vedľa cesty uzimené, drobné tielko.</p>
        <p>Nik nevie, ako vtedy starý Lepiš kalkuloval, jedni vravia, že si chcel iba vychovať z chlapca opatrovníka, iní tvrdia, že vedľa decka našiel i plný mešec dukátov. Dosť na tom, stihol ho ešte vyučiť svojmu remeslu a v dedine sa o ňom dozvedeli až potom, keď už bol hrnčiar načisto slepý a keď ho chlapča vodilo za ruku do krčmy a do sklepa.</p>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · U. Eco – Meno ruže (úlohy 17 – 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <p class="passage-author">Umberto Eco</p>
        <h3 class="passage-title">Meno ruže</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>„Uhádol si. Nechcel som, aby Malachiáš zomrel. Povedal som mu, aby stoj čo stoj knihu našiel a aby ju doniesol sem, ale aby ju neotváral. Povedal som mu, že má silu tisícich škorpiónov. Ale ten <strong class="hl">blázon</strong> prvýkrát chcel konať na vlastnú päsť. Nechcel som jeho smrť, bol verným vykonávateľom mojich príkazov. Ale nehovor mi, čo vieš, ja viem, že to vieš. Nechcem živiť tvoju pýchu, na to si celkom stačíš ty sám. Dnes predpoludním som v skriptóriu počul, ako sa pýtaš Benedikta na Coena Cypriani. Bol si veľmi blízko k pravde. Neviem, ako si prišiel na tajomstvo zrkadla, ale keď som sa od opáta dozvedel, že si sa pred ním zmienil o finis Africae, bol som si istý, že sem čoskoro prídeš. Preto som ťa čakal. A teraz mi povedz, čo vlastne chceš.“</p>
        <p>„Chcem vidieť,“ povedal Viliam, „posledný rukopis toho zväzku, v ktorom je jeden text arabský, jeden sýrsky a jeden výklad alebo prepis Coena Cypriani. Chcem vidieť tú grécku kópiu napísanú na plátennom pergamene, čiže papieri, ktorý bol vtedy ešte veľmi vzácny a vyrábal sa práve v Silose, neďaleko tvojho rodného Burgosu.“</p>
        <div class="passage-footnotes">
          <p><strong>Vysvetlivky:</strong></p>
          <p><em>skriptórium</em> – stredoveká pisárska dielňa v kláštoroch alebo v školách</p>
        </div>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka 4 · I. Bukovčan – Kým kohút nezaspieva (úlohy 25 – 32)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 4</div>
        <p class="passage-author">Ivan Bukovčan</p>
        <h3 class="passage-title">Kým kohút nezaspieva</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-indent:0; margin-bottom:0.55rem;"><strong>PRVÉ DEJSTVO</strong><br />Siedmy výstup – Fischl a predošlí</p>
        <p style="text-indent:0; margin-bottom:0.85rem;"><strong class="hl">(Do svetla konečne vkročí starší človek, akoby v smútku; čierny kabát, čierny klobúk, plstené čierne topánky, tmavé rukavice; ten klobúk takmer nikdy nesníma z hlavy.)</strong></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">PANI</span> (užasnuto): <em>Pán Fischl… vy?!</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span>: <em>Dobrý večer, pán učiteľ.</em> (Podáva ruky.) <em>Ruky bozkávam, milostivá pani.</em> (Srdečne starcovi.) <em>Dobrý večer, pán Terezčák!</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">ŠUSTEK</span>: <em>Preboha – nemáte cigaretu?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span> (zdvorilo): <em>Pre vás, pán doktor, vždycky.</em> (Vytiahne tabatierku.) <em>Aj vy ste mali… ten pech?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">ŠUSTEK</span>: <em>Už som sa ponáhľal na stanicu a vtedy ma…</em> (Nervózne si berie cigaretu.) <em>Môžem ešte jednu…?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span>: <em>Nech sa páči, koľko chcete.</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">ONDREJ</span> (napäto): <em>A vás… vás chytili až teraz?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span>: <em>Mňa…? Totiž…</em> (Pauza.) <em>Mňa sem poslali.</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">ONDREJ</span>: <em>Tak vy nie ste…</em> (Sklamaný.) <em>Ten jedenásty?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span> (Tomkovi): <em>Pán učiteľ, veliteľ mesta major von Lucas ma požiadal o… istú službu. Najprv som odmietol, no potom…</em> (Zaváha, hryzie si peru.)</p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">TOMKO</span> (čaká): <em>Počúvam, pán Fischl.</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span> (zdráhavo): <em>Keď som sa dozvedel, ktoré osoby boli zaistené…</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">ŠUSTEK</span>: <em>Zaistené…?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span>: <em>… respektíve zadržané, potom som už súhlasil, že… no, že sa stanem akýmsi prostredníkom medzi vami.</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">TOMKO</span>: <em>Vidíte…?</em> (Všetkým povzbudivo.) <em>Nevravel som, že sa to vysvetlí?</em></p>
        <p style="text-indent:0; margin-bottom:0.42rem;"><span class="passage-speaker">FISCHL</span>: <em>Musím vás, bohužiaľ, informovať o smutnej udalosti… o zákernej vražde, ktorej obeťou sa dnes večer stal…</em></p>
        <p style="text-indent:0; margin-bottom:0;"><span class="passage-speaker">BABICA</span>: <em>Ten vojak…? To už vieme, pán Fischl!</em></p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka 5 · T. Lehenová – Vybraná spoločnosť (úlohy 33 – 40)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 5</div>
        <p class="passage-author">Taťjana Lehenová</p>
        <h3 class="passage-title">Vybraná spoločnosť</h3>
        <div class="passage-poem" style="max-width:22rem; margin:0 auto;">
          <div style="margin-bottom:0.85rem;">
            Dostala som chuť<br />
            na <strong class="hl">malý</strong> spoločenský večer;<br />
            len pre vybranú spoločnosť.<br />
            Na dvere vešiam ceduľky:
          </div>
          <div style="text-align:center; margin-bottom:0.45rem;">
            <em>Nerušiť!</em>
          </div>
          <div style="text-align:center; margin-bottom:0.45rem;">
            <em>Nie sme doma,<br />
            spíme a maľujeme!</em>
          </div>
          <div style="text-align:center; margin-bottom:0.95rem;">
            <em>Zatvorené pre všetkých!</em>
          </div>
          <div>
            Už sa teším, ako si zapálim sviečku,<br />
            pustím hudbu celkom tichučko,<br />
            nalejem pohár červeného<br />
            a s knižkou,<br />
            položenou len tak ledabolo pri ruke,<br />
            začnem rozhovor s pozvanými –<br />
            obrátená do seba.
          </div>
        </div>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka 6 · K. Vocelka – Habsburgovci v dejinách (úlohy 41 – 48)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 6</div>
        <p class="passage-author">Karl Vocelka</p>
        <h3 class="passage-title">Habsburgovci v dejinách</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-indent:0;">Aké stopy zanechal dvor Habsburgovcov v obchodnom svete mesta Viedeň?</p>
        <p><u>Vďaka zásobovaniu dvora boli mnohí majitelia podnikov vyznamenaní titulom c.&nbsp;a&nbsp;k. dvorný dodávateľ; niektoré z nich, ako kaviareň Demel alebo hotel a reštaurácia Sacher, sa stali nostalgickými atrakciami.</u></p>
        <p>Dvor vo Viedni bol nielen panovnícke centrum a od 18. storočia najmä byrokratický veľkopodnik, ale aj miesto, kde sa spotrebovalo veľké množstvo tovaru. Napríklad denne sa pripravovalo 500 porcií raňajok a obed pre 2&nbsp;000 zamestnancov dvora. Preto bola s dvorom hospodársky úzko spojená veľká skupina Viedenčanov a osôb zo širokého okolia. Od roku 1782 sa pre týchto ľudí používal titul cisársko-kráľovský dodávateľ, od roku 1867 sa nazývali c.&nbsp;a&nbsp;k. dvornými dodávateľmi. Boli to obchodníci a podnikatelia so zvláštnou cisárskou výsadou. Smeli dodávať na cisársky dvor a túto činnosť aj verejne oznamovať, čo pre každý taký podnik znamenalo istý druh „pečate kvality“. Iba vo Viedni bolo viac ako 500 dvorných dodávateľov, okrem toho mali tento titul aj mnohé podniky v Ischli, Budapešti, v Karlových Varoch alebo v Prahe, ako aj v zahraničí (dokonca v krajinách ako Brazília, Egypt a Japonsko). Na konci monarchie bolo už 1&nbsp;223 dvorných dodávateľov. Skupiny týchto vyznamenaných dodávateľov sa nachádzali vo všetkých odvetviach a pri prechádzke viedenským vnútorným mestom sa nájde ešte veľa firemných štítov, ktoré na to poukazujú.</p>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka 7 · Inzerát a žiadosť o brigádu (úlohy 49 – 56)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 7</div>
        <p class="ms-subtext-tag">TEXT A</p>
        <p style="text-indent:0; margin-bottom:0.45rem;">Inzerát pridaný 10. 03. 2024:</p>
        <p style="text-indent:0;"><strong><em>Cestovná kancelária Vodný raj hľadá animátorov do vodáckych letných táborov!</em></strong><br /><em>Obľubuješ prácu s deťmi a mládežou, leto a vodu, oplývaš technickým a IT nadaním, fyzickou zdatnosťou a dochvíľnosťou; máš skúsenosti z detských letných táborov, ukončené vzdelanie pedagogického, resp. psychologického zamerania a chceš si zarobiť 30&nbsp;€/deň?<br />Pošli žiadosť, CV a <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> na: leto2024@vodny-raj.com a my sa určite ozveme!</em></p>
        <p class="ms-subtext-tag" style="margin-top:1.15rem !important;">TEXT B</p>
        <div class="ms-letter-box">
          <p class="ms-letter-sender">Ondrej Tóth, č.&nbsp;d. 823, 930&nbsp;31 Dobrohošť, tel.: 0901&nbsp;123&nbsp;456, e-mail: ondrototh@mejl.sk</p>
          <p class="ms-letter-recipient">Cestovná kancelária Vodný raj<br />Letná 40<br />831&nbsp;03 Bratislava</p>
          <p class="ms-letter-date">Dobrohošť 12. 3. 2024</p>
          <p class="ms-letter-subject">Vec: Žiadosť o brigádnickú prácu študenta</p>
          <p>Na základe Vášho inzerátu z 10. marca 2024 Vás žiadam o prijatie na brigádnickú pozíciu animátor v detskom letnom tábore.</p>
          <p>Ponuka Vašej cestovnej kancelárie ma veľmi oslovila, keďže navštevujem 3. ročník strednej školy – pedagogickej a sociálnej akadémie – odbor animátor voľného času. Absolvoval som povinnú odbornú prax v školskom klube detí a <strong class="hl">v škôlke</strong> a mám aj skúsenosti so spoluorganizovaním projektu kurzov plávania batoliat. Aktívne sa venujem tenisu, plaveckému a vodáckemu športu. Na úrovni B1 ovládam anglický jazyk, dorozumiem sa aj po maďarsky a po taliansky. Medzi moje záľuby patrí hra na gitare a klavíri, rád spievam a pozerám filmy.</p>
          <p>V prílohe posielam svoj <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> životopis, ostatné informácie rád doplním na osobnom pohovore.</p>
          <p>Za kladné vybavenie žiadosti Vám vopred ďakujem.</p>
          <div class="ms-letter-sign"><span>S úctou</span><span><span class="ms-letter-sig-script">Tóth</span>Ondrej Tóth</span></div>
        </div>
      </div>
    `
  },
  ukazka_8: {
    label: 'Ukážka 8 · J. W. Goethe – Utrpenie mladého Werthera (úlohy 57 – 64)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 8</div>
        <p class="passage-author">Johann Wolfgang Goethe</p>
        <h3 class="passage-title">Utrpenie mladého Werthera</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-align:right; text-indent:0; margin-bottom:0.55rem;">16. júna</p>
        <p>Prečo Ti nepíšem? – Spytuješ sa, hoci patríš k učeným ľuďom. Mal si uhádnuť, že sa mám dobre a že… Slovom, nadviazal som známosť, ktorá mi hlbšie zasiahla srdce. Mám… ja neviem.</p>
        <p>Bude ťažké vyrozprávať Ti poporiadku, ako sa stalo, že som spoznal jednu z najroztomilejších stvoričiek. Teším sa tomu a som šťastný, a preto asi nebudem vedieť všetko pravdivo opísať.</p>
        <p>Poznal som anjela! – Fuj! Veď to vraví každý o svojej vyvolenej, všakver? A predsa nie som schopný napísať Ti, aká je dokonalá a prečo je dokonalá; slovom, celkom mi zaujala myseľ.</p>
        <p>Taká čistá duša a taký um, toľká dobrota a taká rozhodnosť a taká vyrovnanosť v každodennom živote a v práci!</p>
        <p><strong class="hl">To všetko, čo Ti tu o nej vravím, sú nesmierne, hlúpe táraniny, úbohé abstraktnosti, ktoré nevystihujú ani jedinú črtu jej bytosti. Nabudúce… Nie nabudúce, hneď teraz Ti to chcem vyrozprávať. Ak to nespravím teraz, nestane sa to nikdy. Lebo, medzi nami, odvtedy, čo som začal písať, chcel som už tri razy položiť pero, dať si osedlať koňa a rozbehnúť sa za ňou. A hoci som sa dnes ráno zaprisahal, že k nej nepôjdem, podchvíľou pristupujem k obloku, aby som pozrel, ako vysoko je ešte slnce.</strong></p>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
