import type { SharedPassage } from '../../types';

// Maturita 2026, riadny termín (marcový termín) – test EČ MS zo SJL, kód 26 1403.
// Prepis podľa oficiálneho testu NIVaM (2026.pdf).

export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · E. A. Poe – Vražda v ulici Morgue (úlohy 01 – 08)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <p class="passage-author">Edgar Allan Poe</p>
        <h3 class="passage-title">Vražda v ulici Morgue</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p><u>„Prečítajte teraz,“ odvetil Dupin, „túto pasáž z Cuviera.“</u></p>
        <p>Bol to podrobný anatomický i všeobecný opis veľkého žltohnedého orangutana z Východoindických ostrovov. Ozrutnú postavu, úžasnú silu a obratnosť, neskrotnú divosť a napodobňovacie schopnosti tohto cicavca každý dobre pozná. V tej chvíli som pochopil všetku hrôzu vraždy.</p>
        <p>„Opis prstov,“ povedal som, keď som dočítal, „sa presne zhoduje s vaším náčrtkom. […] Aj chumáč žltohnedej srsti zodpovedá zvieraťu, o ktorom píše Cuvier. Lenže jednotlivosti tejto hrôzyplnej záhady ešte vždy neviem pochopiť. Okrem toho občania počuli dva hlasy a jeden z nich patril nepochybne Francúzovi.“</p>
        <p>„Pravdaže, a iste sa pamätáte, že svedecké výpovede temer jednomyseľne pripisovali tomuto hlasu slová Mon Dieu! V daných okolnostiach ich veľmi dobre charakterizuje istý svedok (cukrár Montani) ako prejav hrešenia či výčitky. Nádej, že záhadu celkom rozlúštim, som preto staval najmä na týchto svojich slovách. Akýsi Francúz vie o vražde. Je možné – ba viac ako pravdepodobné – že za krvavé činy, ku ktorým došlo, nenesie nijakú zodpovednosť. Orangutan mu asi ušiel; vystopoval ho až do izby, je však vylúčené, aby sa mu ho podarilo dolapiť v rozruchu, ktorý nastal.“</p>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · R. Dilong – Helena nosí ľaliu (H. R.) (úlohy 09 – 16)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <p class="passage-author">Rudolf Dilong</p>
        <h3 class="passage-title">Helena nosí ľaliu (H. R.)</h3>
        <p class="passage-note">(upravené)</p>
        <div class="passage-poem">
          Pozeral anjel ľalie,<br />
          ľalií závoj malý je,<br />
          keby bol závoj hmlovinou<br />
          nad kvetnou poľnou rovinou.<br /><br />
          Keby bol spal ker spanilý,<br />
          ktorého cesty chránili,<br />
          široké, mĺkve chodníky,<br />
          tak biele ako spodníky.<br /><br />
          Keby bol vtáčik malučký<br />
          dieťaťu sadol na rúčky,<br />
          keby to dieťa vedelo,<br />
          čo ku oblakom letelo.<br /><br />
          Keby bol chlapec vtelený<br />
          do potokov a zelení,<br />
          keby tie snivé zelene<br />
          podobali sa Helene.<br /><br />
          Helena nosí ľaliu,<br />
          anjeli rozsypali ju,<br />
          keď raz po <strong class="hl">sladkej</strong> nedeli<br />
          s krásou jak Zdravas leteli.
        </div>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · Najlepšie bryndzové halušky? (úlohy 17 – 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <h3 class="passage-title">Najlepšie bryndzové halušky?<br />„Bryndzu na nich nevidíte!“ tvrdí šéf našich chovateľov oviec</h3>
        <p class="passage-note">(upravené)</p>
        <p>„Kvalitná bryndza halušky krásne obalí, splynie s nimi, takže ju na nich takmer nevidíte a na salaši preto možno aj sprvu frflete, no na jazyku ju už zacítite až-až,“ usmieva sa šéf slovenských chovateľov oviec a kôz Slavomír Reľovský. A tu je jeho top recept!</p>
        <p>„Na teplých haluškách sa rozpustí, lebo bryndza je vlastne syr, a to jeden z top na celom svete. Preto ju takmer nevidno,“ vysvetľuje.</p>
        <p>Vmiešavate do bryndze smotanu, keď robíte halušky? „Znamená to, že nemáte dobrú bryndzu, <u>lebo stopercentná ovčia nepotrebuje spoločnosť</u>,“ usmieva sa Slavomír, od ktorého sme vymámili rodinný recept na najlepšie bryndzové halušky, aké sme kedy jedli!</p>
        <h4 class="passage-subhead">Bryndzové halušky podľa Slavomíra Reľovského</h4>
        <p style="text-align: center; text-indent: 0;">4 PORCIE — PRÍPRAVA 20 MINÚT — VARENIE 5 AŽ 8 MINÚT</p>
        <p class="passage-lead-list">Suroviny:</p>
        <ul>
          <li>800 g zemiakov,</li>
          <li>200 g polohrubej múky,</li>
          <li>250 g ovčej bryndze (100-percentnej),</li>
          <li>soľ,</li>
          <li>opečená slaninka a nasekaná pažítka pri servírovaní (podľa chuti).</li>
        </ul>
        <p class="passage-lead-list" style="margin-top: 0.75rem;">Ako na to:</p>
        <ol>
          <li>Očistené zemiaky nastrúhajte a vyžmýkajte. Prisypte múku, soľ podľa chuti a vypracujte cesto.</li>
          <li>Cesto hádžte do osolenej vriacej vody z lopárika alebo cez haluškovač. Keď halušky vyplávajú navrch, sceďte ich rovno do misy s bryndzou. Hotové jedlo dobre premiešajte.</li>
          <li>Ak chcete, halušky podávajte s opečenou slaninkou, poliate výpekom a posypané nasekanou pažítkou.</li>
        </ol>
        <p style="text-align: center; text-indent: 0; margin-top: 0.75rem;">Dobrú chuť!</p>
        <p class="passage-source">dobrejedlo.pluska.sk</p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka 4 · J. Beňová – Ľudovít Štúr a slovenské divadlo (úlohy 25 – 32)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 4</div>
        <p class="passage-author">Juliana Beňová</p>
        <h3 class="passage-title">Ľudovít Štúr a slovenské divadlo</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Impulzom na pripomínanie si životných osudov a činnosti Ľudovíta Štúra je výročie jeho narodenia. Rôzne sociologické prieskumy už viackrát potvrdili, že väčšina Slovákov považuje práve Štúra za jednu z najvýznamnejších osobností slovenskej histórie. <u>Terminológiou súčasníkov možno povedať, že sa zrodila „superstar“ – v mnohých mestách má postavené pomníky, pomenovali po ňom ulice, námestia či literárno-jazykové súťaže, stal sa dôležitou maturitnou otázkou, natočili o ňom viacero filmov i dokumentov a nedávno bol dokonca zaregistrovaný ako obchodná značka.</u> Štúrovo meno dnes slúži ako reklama – v niektorých slovenských mestách boli otvorené kaviarne pod značkou SHTUR či ŠTÚR (nápojové a jedálne lístky sú písané štúrovskou slovenčinou), v ktorých je možné zakúpiť si množstvo reklamných predmetov so Štúrovým portrétom. Po známom televíznom seriáli Štúrovci (1991) vznikol v rámci RTVS dokument s názvom True Štúr, v ktorom vyšetrovateľ (stvárnil ho Róbert Roth) rieši okolnosti úmrtia Ľudovíta Štúra v televíznom formáte detektívky. V jubilejnom roku 2015 sa Štúrov portrét ocitol aj na striebornej a pamätnej dvojeurovej minci.</p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka 5 · Antigona (úlohy 33 – 40)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 5</div>
        <h3 class="passage-title"><span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> – Antigona</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p style="text-indent: 0;">(Z paláca privádzajú Ismenu)</p>
        <div class="passage-poem">
          <span class="passage-speaker">NÁČELNÍK ZBORU:</span><br />
          Hľa, už je tu Ismena –<br />
          a ako len narieka pre sestru!<br />
          A ako sa chmúri? Poriadne to pošpatilo<br />
          jej rumennú tváričku!<br />
          Poriadne zmokli tie čarovné líčka!<br />
          <span class="passage-speaker">KREON:</span><br />
          Tak čo ty? V dome si sa ku mne túlila<br />
          vždy ako had a tajne si mi pila krv<br />
          a ja som nevedel, že pestujem dve skazy,<br />
          číhajúce na môj trón! Vrav – priznávaš sa,<br />
          že aj ty si mala niečo spoločné s tým<br />
          pohrebom, či to chceš pod prísahou poprieť?<br />
          <span class="passage-speaker">ISMENA:</span><br />
          Priznávam sa. Ak s tým ona bude<br />
          súhlasiť, som pripravená niesť svoj podiel viny.<br />
          <span class="passage-speaker">ANTIGONA:</span><br />
          Ak je Spravodlivosť, toto nesmie dopustiť –<br />
          veď ty si váhala, a preto som<br />
          ťa odmietla vziať so sebou!<br />
          <span class="passage-speaker">ISMENA:</span><br />
          No teraz, keď si v tvŕdzi, neváham a v búrke nešťastia<br />
          som na tej istej lodi ako ty!<br />
          <span class="passage-speaker">ANTIGONA:</span><br />
          Čí je to čin, vie Hádes, vedia to tí v podsvetí!<br />
          A nemám rada tých, čo majú radi iba slovami.<br />
          <span class="passage-speaker">ISMENA:</span><br />
          Ach, sestra, veď mi nebráň zomrieť<br />
          s tebou! Bude to môj posledný hold mŕtvemu!
        </div>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka 6 · Opäť otvorili ferratu Kyseľ (úlohy 41 – 48)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 6</div>
        <h3 class="passage-title">Opäť otvorili ferratu Kyseľ,<br />v roklinách SLOVENSKÉHO RAJA je veľa vody</h3>
        <p class="passage-note">(upravené)</p>
        <p style="text-indent: 0;">17. <span class="ms-blank" aria-label="zakryté miesto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 2024 o 09.08 h</p>
        <p class="passage-lead-list"><strong>Na pohyb vo ferrate odporúčajú vysokú nepremokavú obuv</strong></p>
        <p>SPIŠSKÁ NOVÁ VES: Počas uplynulého víkendu opätovne otvorili FERRATU HORSKEJ ZÁCHRANNEJ SLUŽBY KYSEĽ V SLOVENSKOM RAJI. SPRÁVA NÁRODNÉHO PARKU (NP) SLOVENSKÝ RAJ však upozornila, že v rokline je veľa vody a tomu treba prispôsobiť správanie, obuv a oblečenie.</p>
        <p>„Práce na ferrate prebiehali až posledný týždeň a najintenzívnejšie posledný deň, aby bolo obdobie dlhej zimnej uzávery zmysluplné a príroda mala až doteraz od človeka pokoj. Dúfame, že návštevníci ocenia a užijú si to, čo nájdu na dne rokliny, ktorá zostáva bez výraznejšieho vplyvu človeka,“ uviedla SPRÁVA NP.</p>
        <p class="passage-lead-list" style="margin-top: 0.75rem;"><strong>Odporúčané sú aj náhradné ponožky a obutie</strong></p>
        <p>Správca turistickej infraštruktúry odporúča na pohyb vo ferrate vysokú nepremokavú obuv, je tiež vhodné vziať si so sebou okrem povinného ferratového setu aj náhradné ponožky a obutie, prípadne aj oblečenie.</p>
        <p>„Vody je v roklinách v súčasnosti ozaj veľké množstvo a turisti sa často nevyhnú tomu, že do nej musia stúpiť. Odmenou však bude pohľad na krásne vodopády,“ dodávajú ochranári.</p>
        <p>SPRÁVA NP zároveň upozorňuje na pondelkové uzatvorenie dvoch mostíkov v PRIELOME HORNÁDU. Ide o premostenia na BIELOM POTOKU a pod TOMÁŠOVSKÝM VÝHĽADOM. Dôvodom obmedzenia je ich rekonštrukcia.</p>
        <p class="passage-source">www.aktuality.sk</p>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka 7 · J. Jesenský – Moja domáca pani (úlohy 49 – 56)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 7</div>
        <p class="passage-author">Janko Jesenský</p>
        <h3 class="passage-title">Moja domáca pani</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p>Bolo naozaj veselo. Ani som sa nenazdal, že som taký vážený. Jednoduchý bankový úradník – a predsa, ako láskavo ma prijímali. Dcéry pána fabrikanta nevstali, ale vyskočili, keď som sa uklonil. Slečne Malvínke som povedal:</p>
        <p>„Slečna, smiem prosiť?“</p>
        <p>Ona zrovna vykríkla:</p>
        <p>„Ó, áno!“</p>
        <p>Ako ľahučko tancuje. Aká tanečnica, a predsa povedala: „Ó, áno!“ Muselo jej to radosť pôsobiť. Ináče by bola jednoducho vstala. Ale ona povedala s radosťou: „Ó, áno!“</p>
        <p>Slečne Žofii som sa len uklonil. Porozumela a hneď sa zavesila na moje rameno.</p>
        <p>Naklonila hlávku k môjmu plecu. Myslel som si, že som naozaj príjemným človekom. Prečo by bola naklonila hlávku? Bola by jednoducho rovno šla, keby som jej bol ľahostajným. Ale ona naklonila hlávku. Dovolil som si poznamenať:</p>
        <p>„Vy, slečna, museli ste mať znamenitého učiteľa…“</p>
        <p>„V čom?“ pýtala sa.</p>
        <p>„V tanci.“</p>
        <p>„Prečo?“</p>
        <p>„Tak ľahučko, krásne tancujete. Ani páper, keď v povetrí lieta. Viete, fúknete naň zdola, vyletí hore. Fúknete zhora, letí dolu. Fúknete zboku, letí náprotivným smerom. Kam vás človek chce potiahnuť, už to cítite a idete…“</p>
        <p>„Ale nevravte,“ a zasmiala sa.</p>
      </div>
    `
  },
  ukazka_8: {
    label: 'Ukážka 8 · L. N. Tolstoj – Anna Kareninová (úlohy 57 – 64)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 8</div>
        <p class="passage-author">Lev Nikolajevič Tolstoj</p>
        <h3 class="passage-title">Anna Kareninová</h3>
        <p class="passage-note">(úryvok, upravené)</p>
        <p><u>Anna šla so sklonenou hlavou a pohrávala sa so strapcami na kapucni. Jej tvár vyžarovala prenikavý jas; no nebol to jas radostný – pripomínal hrozivý jas požiaru v temnej noci. Keď zazrela muža, zodvihla hlavu a usmiala sa, akoby sa prebúdzala zo spánku.</u></p>
        <p>– Ty ešte nespíš? To je zázrak! – zvolala, ako si zhadzovala kapucňu, a šla ďalej do obliekarne. – A už je čas, Alexej Alexandrovič, – ozvala sa spoza dverí.</p>
        <p>– Anna, musím sa s tebou pozhovárať.</p>
        <p>– So mnou? – začudovala sa, vyšla von a pozrela na neho. – Čo sa stalo? O čom sa chceš zhovárať? – spýtala sa a sadla si. – Tak sa teda pozhovárajme, keď to musí byť. No lepšie by sme urobili, keby sme šli spať.</p>
        <p>Anna vravela, čo jej slina na jazyk priniesla, a ako sa tak počúvala, sama sa čudovala svojej schopnosti luhať. Ako prosto, ako prirodzene pôsobili jej slová a ako pravdivo vyznelo, že nechce nič iné, len spať! Cítila sa byť odiata do nepreniknuteľného panciera lži. Cítila, že jej nejaká neviditeľná sila pomáha a podporuje ju.</p>
        <p>– Anna, musím ťa varovať.</p>
        <p>– Varovať? – opýtala sa. – Pred čím?</p>
        <p>Pozrela tak nevinne, tak veselo, že kto by ju nepoznal, ako ju poznal manžel, nevybadal by v tóne ani v zmysle tých slov nič neprirodzené.</p>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
