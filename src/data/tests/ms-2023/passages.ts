import type { SharedPassage } from '../../types';

// Maturita 2023, riadny (marcový) termín – test EČ MS zo SJL, kód 23 1403.
// Prepis podľa PDF NIVaM (2023.pdf). Zvýraznené časti originálu sú v <strong class="hl">.

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · D. Hevier – Alebo čuším, alebo kričím (úlohy 01 – 08)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <p class="passage-author">Rozhovor so spisovateľom, prekladateľom, výtvarníkom a… Danielom Hevierom</p>
        <h3 class="passage-title">Alebo čuším, alebo kričím</h3>
        <p class="passage-note">(úryvok)</p>
        <p>[…]</p>
        <p><strong>Mnoho ľudí sa ma pýtalo, či ešte vôbec píšeš, že si sa ako spisovateľ stratil z očí. Opak je však paradoxne pravdou…</strong></p>
        <p>— Niekedy je písanie ponorná riečka – text sa vynorí až po dlhom plynutí v skrytosti. Mám niekoľko takých knižiek, ktoré sú doteraz ponorené. Ale píšu sa. Alebo: píšu ma. A okrem toho: literatúra je iba jedna z mojich živností. Okrem toho sa venujem hudbe, intenzívne maľujem (čoraz viac), hrám divadlo, filmujem, príležitostne učím i učím sa, mám za sebou dizertáciu a jej obhajobu, stretávam sa s ľuďmi, pohybujem sa v rôznych spoločenstvách…</p>
        <p>[…]</p>
        <p><strong>V novej reedícii vyšli aj niektoré tvoje staršie detské tituly (<em>Básnička ti pomôže</em>, <em>Hovorníček</em>, <em>Heviho diktátor</em>).</strong></p>
        <p>— Deti sa rodia, dorastajú, učia sa chodiť, písať, čítať… Ak je moja staršia knižka použiteľná aj do dnešných čias, som, prirodzene, rád.</p>
        <p>[…]</p>
        <p><strong>Pre teba bol veľký zlom v živote, keď si začal maľovať. Maľuješ teraz dokonca intenzívnejšie než na začiatku tohto tvojho „objavu“.</strong></p>
        <p>— Áno, zlom, ktorý sa stal dobrom. Výtvarno silno vnímam od malička, rovnako ako hudbu či pohyb. Pred desiatimi rokmi som si už prestal iba kupovať farby a prestal iba hromadiť výtvarné monografie, začal som aj maľovať na vlastnej koži. Prvé dva roky to bolo ako horúčka, nerobil som nič iné. Dnes už maľujem miernejšie, ale toto leto sa mi napríklad podarilo spôsobiť si „maliarsky lakeť“; tak veľa a silno som maľoval, že som potom celé týždne nemohol pohnúť rukou.</p>
        <p class="passage-source">S otcom sa zhováral Daniel Hevier ml.<br />Knižná revue</p>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · J. A. Rimbaud – Spáč v údolí (úlohy 09 – 16)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <p class="passage-author">Jean Arthur Rimbaud</p>
        <h3 class="passage-title">Spáč v údolí</h3>
        <div class="passage-poem">
          Hľa, diera zelene, kam sa spev rieky norí,<br />
          bláznivo rozšantiac zdrap striebra na tráve,<br />
          kde slnce jagá sa z vrcholu divej hory,<br />
          hľa, malé údolie v kypiacej páľave.<br /><br />
          Spí, ústa dokorán, vojačik prostovlasý,<br />
          šiju mu obmýva žerucha belasá,<br />
          spí, bledý, pod mráčkom, tam kde zem trávu tasí,<br />
          v zelenej posteli, kde svetlo zlieva sa.<br /><br />
          S nohami v kosatcoch spí, tvár mu smiechom svieti,<br />
          takýmto úsmevom smejú sa choré deti.<br />
          Príroda, zahrej ho, to už chlad ide naň.<br /><br />
          Vôňa mu k záchvevu nozdry už neprebudí,<br />
          spí v slnku s rukami na svojej tichej hrudi,<br />
          bok sa mu červenie z dvoch otvorených rán.
        </div>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Z webovej poradne (úlohy 17 – 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <h3 class="passage-title">Z webovej poradne</h3>
        <p class="passage-note">(upravené)</p>
        <p><strong>Slovo <em>rozmerný</em> má iný význam ako <em>jednorozmerný</em>, <em>dvojrozmerný</em> a pod., preto sú tieto prídavné mená logicky nesprávne, dokonca nezmyselné. Nemalo by byť <em>jednorozmerový</em>, <em>dvojrozmerový</em>?</strong> – Vychádzajúc z významu prídavného mena <em>rozmerný</em> „majúci veľký rozmer“ možno zložené prídavné mená vyjadrujúce počet rozmerov <em>jednorozmerný</em>, <em>dvojrozmerný</em>, <em>trojrozmerný</em>, <em>viacrozmerný</em> vnímať ako významovo nepresné, no ich používanie v slovenčine sa takto ustálilo (podobne napríklad prídavné meno <em>smerný</em> má význam „udávajúci smer vývoja“ a prídavné mená <em>jednosmerný</em>, <em>dvojsmerný</em> vyjadrujú počet smerov). Neznamená to však, že podoby prídavných mien s príponou <em>-ový</em> – <em>jednorozmerový</em>, <em>dvojrozmerový</em>, <em>trojrozmerový</em>, <em>viacrozmerový</em>, <em>mnohorozmerový</em>, ktoré sa v slovenských kodifikačných príručkách neuvádzajú, sú nesprávne. Podľa dokladov z internetu sa používajú, a to najmä v odborných textoch, napr. <em>jednorozmerová chromatografia</em>, <em>trojrozmerový problém</em>, <em>viacrozmerový prístup</em>, <em>viacrozmerové chápanie</em>, <em>mnohorozmerový regulačný obvod</em>.</p>
        <p>Variantnosť synonymných prídavných mien s odlišnými príponami je v slovenčine bežná a niektoré podoby sa do lexikografických diel dostávali postupne, napr. v 1. zväzku Slovníka slovenského jazyka z r. 1959 alebo v prvých dvoch vydaniach Krátkeho slovníka slovenského jazyka (1987, 1989) sa uvádzalo iba prídavné meno <em>krátkovlnný</em>, no od 3. vydania KSSJ (1997) sa doplnila aj podoba <em>krátkovlnový</em>.</p>
        <p class="passage-source">Kultúra slova, 2018</p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka 4 · M. Kukučín – Keď báčik z Chochoľova umrie… (úlohy 25 – 32)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 4</div>
        <p class="passage-author">Martin Kukučín</p>
        <h3 class="passage-title">Keď báčik z Chochoľova umrie…</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Prirodzená vec, že málo bývaval doma. Výročité alebo iné sviatky, nedele a tu i tu deň alebo dva odpočinku, ale ináč vždy na vozíku, na železnici alebo na jarmoku. Najmä po jarmokoch chodil nielen do blízkeho okolia, ale i po druhých vidiekoch. Nie div, že naďaleko poznalo ho každé dieťa. Ale on – ako všetci vychytení ľudia – málokoho poznal dôkladne, alebo podľa mena: zato každému dával sa do známosti ako starému známemu. A často podarilo sa mu oklamať ľudí, lebo podľa kroja a výrečnosti hneď sa vynašiel, kto z ktorej dediny a akého je stavu a povolania, a podľa toho vedel sa i držať.</p>
        <p>„Daj Boh šťastia, Ondrej!“ počul volať chlapa v čiernej umastenej košeli.</p>
        <p>Ondrej hneď vedel, že to skadesi <strong class="hl">valach</strong>, ale nevedel skade, ani kedy s ním bol na slove.</p>
        <p>„Pán Boh uslyš, Ďuro! Akože sa máš?“ poďakoval mu, a hneď ho i obdaril menom len tak naslepo.</p>
        <p>„Len tak, len tak. Ale ma ešte znáte?“ tešil sa valach. „Ja že ste ma od zalanska zabudli. Čo som vám tú vlnu predal, už sme sa viac nesňali…“</p>
        <p>„Kdeže by ťa neznal, Juríčko! Dobre, ako vlastného brata.“</p>
        <p>A podával mu usmiaty ruku.</p>
        <p>„No, keď ma tak znáte – no!“ divil sa natešený valach. „Ale ja som Mišo, nie Ďuro!“</p>
        <p>„Ľaľa! Bodajže ťa i s hlavou!“ A pľasol sa širokou dlaňou po čele. „Pravdaže, Mišo, teraz mi huplo do hlavy.“</p>
        <p>„To sa vám plietol náš bača – to je Ďuro.“</p>
        <p>„To-to-to – teraz už viem, už viem.“</p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka 5 · R. Pupala – Zrkadlo (úlohy 33 – 40)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 5</div>
        <p class="passage-author">Richard Pupala</p>
        <h3 class="passage-title">Zrkadlo</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Zaparkoval pred domom, vypol motor. Zostal sedieť, niekoľko minút, hľadel pred seba. Mal pocit, že si nepamätá cestu, ktorú práve absolvoval; bol v dome po pradedovi a teraz je medzi panelákmi sídliska, kde býva. Pohľad mu padol na sedadlo spolujazdca, na prázdny rám zrkadla, čierny pletenec divých makov. Nepamätal sa, že by ho bral so sebou.</p>
        <p>[…]</p>
        <p>Vošiel do kúpeľne, aby sa osprchoval, najprv si však musel opláchnuť tvár. Zahľadel sa do zrkadla nad umývadlom. Triasol sa; nie navonok, hoci by bolo príhodnejšie, keby mu aspoň drkotali zuby. Zajtra sa oholím, napadlo mu. Nabral do dlaní tečúcu vodu a sklonil sa.</p>
        <p>Keď zase zodvihol zrak, spozoroval pomalý, kradmý pohyb. Na stene za jeho chrbtom viselo malé zrkadlo, ktoré tam dala namontovať Klára, aby si pri česaní vlasov videla temeno hlavy. Z nekonečne rozloženého priestoru na neho hľadel premenený Kizek. Už sa nebál; nič ho nebolelo. Hľadel mu priamo do očí, nemilosrdným pohľadom, s takou nenávisťou, až mu zimomriavky prenikli do srdca ako črepy.</p>
        <p>Obzrel sa. Nikto tam nebol…</p>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka 6 · Najkrajšie na Slovensku (úlohy 41 – 48)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 6</div>
        <h3 class="passage-title">Najkrajšie na Slovensku</h3>
        <p class="passage-note">(úryvok)</p>
        <p>Slovensko je výnimočná krajina. Dajte sa očariť jej krásami a užite si neopakovateľnú atmosféru, ktorú vám ponúka.</p>
        <p><strong>Banská Bystrica a okolie</strong></p>
        <p><strong>1. tip: História a okolie Medeného mesta</strong><br />Centrom regiónu s najvýznamnejšími banskými pamiatkami a banskou tradíciou na území bývalých stredoslovenských banských miest je Banská Bystrica. Preslávila sa ťažbou <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>, preto ju aj nazývali Medené mesto.</p>
        <p><strong>2. tip: Tam, kde razia mince</strong><br />Určite príjemnou zastávkou pre vás bude Bazilika minor v Starých Horách, kam kvôli nálezom striebra uhorský kráľ Belo IV. pozval banských odborníkov z Nemecka. V Kremnici, Zlatom meste, sa už sedemsto rokov razia mince v najstaršej nepretržite fungujúcej prevádzke na svete.</p>
        <p><strong>3. tip: Strieborné mesto</strong><br />Ďalším skvostom, ktorý nesmiete vynechať, je Strieborné mesto – Banská Štiavnica. Mesto a okolie boli v roku 1993 zapísané do Zoznamu svetového dedičstva UNESCO.</p>
        <p><strong>4. tip: Retro kúpalisko aj UNESCO pamiatka</strong><br />Zvolen s dominantou Zvolenský zámok patrí medzi najstaršie mestá na Slovensku. Pred návratom do Banskej Bystrice ešte navštívte kúpeľné mesto Sliač. Okrem retro kúpaliska s liečivou minerálnou vodou sa ochladíte aj v miestnom Kostole sv. Mikuláša z 13. storočia. Zastavte sa aj v pamiatke UNESCO – drevenom evanjelickom kostole v Hronseku.</p>
        <p class="passage-source">slovakia.travel, upravené</p>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka 7 · W. Shakespeare – Veľa kriku pre nič (úlohy 49 – 56)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 7</div>
        <p class="passage-author">William Shakespeare</p>
        <h3 class="passage-title">Veľa kriku pre nič</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <div class="passage-poem">
          piate <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br /><br />
          <span class="passage-speaker">Claudio:</span><br />
          A ja dám krk, že on ju takisto.<br />
          Mám v ruke list. Hľa – jeho rukopis!<br />
          Mizerný sonet – jeho úroveň.<br />
          A múza – Beatrice.<br />
          <span class="passage-speaker">Hero:</span><br />
          Mám tu druhý,<br />
          čo vypadol z jej vrecka. Hľa, jej písmo!<br />
          Písala to, ten list som našla u nej.<br />
          Vyznanie lásky – Benedikovi.<br />
          <span class="passage-speaker">Benedik:</span><br />
          Zázrak! Naše ruky čosi píšu a naše srdcia<br />
          o tom nevedia. Tak dobre, chcem ťa za ženu.<br />
          No prisahám, že iba zo súcitu.<br />
          <span class="passage-speaker">Beatrice:</span><br />
          Aj ja ťa neodmietnem, ale, namojhriešnu,<br />
          museli ma dlho presviedčať, a čiastočne<br />
          to robím aj preto, aby som ti zachránila<br />
          život. Vraj sa z lásky ku mne ideš uzožierať.<br />
          <span class="passage-speaker">Leonato:</span><br />
          No tak! <em>(Beatrice.)</em> Uzožieranie zastaví len<br />
          bozk. <em>(Podá jej ruku Benedikovi.)</em>
        </div>
      </div>
    `
  },
  ukazka_8: {
    label: 'Ukážka 8 · P. Jilemnický – Muzika (úlohy 57 – 64)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 8</div>
        <p class="passage-author">Peter Jilemnický</p>
        <h3 class="passage-title">Muzika</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Teda už zas prišiel utorok, ešte nebol dobre po nedeli vyspatý, kravatu mal kdesi pri ľavom uchu a sivú tvár. Doviedol Zoé do kancelárie pred ôsmou hodinou, sadol s ňou k písaciemu stroju a teraz sa díval – hu, aké mal ošklivé oči. Poradové čísla začali tancovať a nebola to už muzika, ten tanec zaváňal potrebným chlebom, každé z nich sa škerilo hladnými zubami a chceli Zoé zožrať. Preto ona pre svoju osobu zaviedla si nový <strong class="hl">exhibit</strong> a začala:</p>
        <div class="ms-table-wrap">
          <table class="ms-table">
            <thead>
              <tr>
                <th scope="col" rowspan="2" class="is-center">Poradové<br />číslo</th>
                <th scope="col" rowspan="2" class="is-center">Kedy došlo</th>
                <th scope="col" rowspan="2" class="is-center">Od koho<br />(číslo a dátum)</th>
                <th scope="col" rowspan="2" class="is-center">Obsah</th>
                <th scope="col" rowspan="2" class="is-center">Ako bolo<br />vybavené</th>
                <th scope="col" colspan="2" class="is-center">Deň</th>
              </tr>
              <tr>
                <th scope="col" class="is-center">vybavenia</th>
                <th scope="col" class="is-center">odoslania</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="is-center">1/1924</td>
                <td class="is-center">—</td>
                <td class="is-center">Vlastné</td>
                <td class="is-center">Ľúbostný list<br />tulákovi<br />na Popokatepetl<br />(?)</td>
                <td class="is-center">Odoslané –<br />Rádio Dvorček<br />Južná Amerika</td>
                <td class="is-center">19. VIII.<br />1924</td>
                <td class="is-center">19. VIII.<br />1924</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="ms-exhibit-letter">
          Milý môj tulák,<br />
          stvorili sme ešte viac ako zázrak, stvorili sme<br />
          krásny večer. To každý nevie. Bohvie, ktorý vietor<br />
          ťa svetom ženie a ktorá voda ťa nesie. Bohvie,<br />
          kde infikuješ hnilobu meštiackeho života bacilom<br />
          zdravej vzbury, jedno; ja ti za ten večer ďakujem<br />
          a moja vďaka ťa nájde v najširšom svete. Ži, ty<br />
          hnedý chlapče, a jedz krásu života sťa každodenný<br />
          chlieb. Pošli mi pero z kajky!<br />
          Zoé
        </div>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
