# MaturitaSJL – návod

Príprava na maturitu zo slovenského jazyka a literatúry: testy externej časti (EČ MS) s nápovedou
a postupom riešenia a prehľad slohových útvarov písomnej formy (PFIČ MS). Astro, statická stránka.

## Príkazy

| Príkaz | Čo robí |
| --- | --- |
| `npm run dev` | vývojový náhľad (http://localhost:4321), zmeny sa prejavia hneď |
| `npm run build` | zostaví stránku do `dist/` |
| `npm run preview` | náhľad zostavenej stránky |
| `npm run check` | zostaví stránku a skontroluje testy (počty, kľúč, skupiny, SEO) |
| `npm run novy-test -- 2023` | vytvorí šablónu nového ročníka (8 ukážok, 64 úloh) |

## Pridanie nového ročníka testu

1. **PDF:** test a kľúč z NIVaM sú v `zdroje-nivam/` (`MS<rok>-test-SJL.pdf`, `MS<rok>-kluc-SJL.pdf`).
   Priečinok nie je v gite.
2. **Šablóna:** `npm run novy-test -- <rok>` vytvorí `src/data/tests/ms-<rok>/` a zapíše ročník
   do `src/data/tests/index.ts`. Ročník sa na stránke ešte nezobrazí.
3. **Prepis** (s Claude: „prepíš test <rok>“):
   - `passages.ts` – 8 ukážok. Verše v `<div class="passage-poem">` s `<br />`, zvýraznené časti
     `<strong class="hl">`, poznámka „(úryvok, upravené)“ v `<p class="passage-note">`,
     tabuľky `<table class="ms-table">`, grafy prekresliť do SVG (vzor: `ms-2022/passages.ts`).
   - `questionsPart1.ts`, `questionsPart2.ts` – úlohy 01 – 32 a 33 – 64. Pri každej ukážke
     5 úloh s výberom A – D a 3 s krátkou odpoveďou.
   - **Kľúč:** pri krátkej odpovedi zapíš do `acceptedAnswers` všetky varianty z kľúča (lomka = alternatíva).
     Ak kľúč píše „prihliadať na vecnú správnosť, uznať aj odpoveď s pravopisnými chybami“,
     pridaj `lenient: true` – odpoveď sa potom porovná bez diakritiky a veľkosti písmen.
     Ak kľúč píše „slovo musí byť napísané pravopisne správne“, `lenient` nedávaj.
   - **Nápoveda:** kde v texte hľadať alebo na aké pravidlo myslieť – bez prezradenia odpovede.
   - **Postup riešenia:** 2 kroky – riešenie s dokladom z textu a „prečo nie ostatné“ / „ako hodnotí kľúč“.
   - `index.ts` – mená autorov v `stepperGroups` a každá úloha v práve jednej skupine `topicGroups`
     (Čítanie s porozumením · Literatúra · Pravopis a lexikológia · Morfológia, skladba a štylistika).
4. **Zapnutie:** v `src/data/testsCatalog.ts` prepni ročník na `status: 'ready'`
   (hlavná stránka sa riadi rovnakým zoznamom).
5. **Kontrola:** `npm run check` musí skončiť „chyby: 0“. Potom `npm run preview` a prejsť test.
6. **Garant** skontroluje nápovedy a postupy riešenia.

Poznámka: test 2022 má kód 20 1403 a na titulke „Maturita 2020“ – pripravený na rok 2020
(maturita sa pre pandémiu nekonala), použitý v riadnom termíne 2022.

## Slohové útvary

Obsah je v `src/data/sloh.ts` (8 útvarov, témy 2007 – 2026, kritériá NIVaM 2026, kontrolné zoznamy).
Novú tému pridáš riadkom `t(<rok>, '<útvar>', '<téma>', { author, spec })` – každý rok má presne 4 témy.
Oficiálne témy sú na www2.nucem.sk (Maturita → rok → „Témy PFIČ MS – slovenský jazyk a literatúra“).

**Pôvod a literatúra:** texty vychádzajú z prezentácií „Rukoväť na písanie slohovej práce“ (projekt EÚ
Moderná škola – základ úspechu, SOŠ podnikania Trenčín, 2014; súbory v `Desktop/sloh`). Údaje o projekte
(`PROJEKT`), zoznam literatúry (`LITERATURA`) a priradenie prezentácie a literatúry ku každému útvaru (`ZDROJE`)
sú na konci `src/data/sloh.ts`. Zobrazujú sa na `/sloh/` (titulná strana, sekcia „Pôvod a zdroje“)
a na konci stránky každého útvaru („Pôvod a literatúra“). Výklad v prezentáciách nebol – `prezentacia: null`.

## Spustenie na internete (GitHub + Netlify)

1. Doména **pisomnematurity.sk** je v `SITE_URL` v `src/lib/site.ts` a v `public/robots.txt`.
   PAY by square QR kód `public/images/qr-dar.svg` má správu `Dar - pisomnematurity.sk` (príjemca Beno Peter, Mgr,
   IBAN SK97 1100 0000 0029 3029 3777). Pri zmene ho vygeneruj knižnicami `bysquare` + `qrcode` (npm) a uprav aj text pri QR v `src/pages/index.astro`.
2. Indexovanie je zapnuté (`ALLOW_INDEXING = true` v `src/lib/site.ts`): každá stránka má kanonickú adresu na
   pisomnematurity.sk, štruktúrované dáta (JSON-LD) a vlastný obrázok na zdieľanie. Pri testovacom nasadení na inej
   adrese ho prepni na `false`. Po spustení pridaj web do Google Search Console a odošli `https://pisomnematurity.sk/sitemap.xml`.
   `npm run check` kontroluje SEO (titulok do 65 znakov, popis 70 – 165, canonical, og:image, platný JSON-LD) na všetkých stránkach.
3. Repozitár na GitHube, v Netlify „Import from Git“ (build `npm run build`, priečinok `dist`).
4. Súhlas NIVaM s použitím maturitných testov (pätička už obsahuje vetu o súhlase).

## Logo, ikony a obrázok na zdieľanie

Názov **Písomné maturity** (doména pisomnematurity.sk) je v `SITE_NAME`, `SITE_TAGLINE` a `SITE_DOMAIN` v `src/lib/site.ts`.
Značka – hrot plniaceho pera s kvapkou atramentu – je v `src/components/BrandMark.astro` (rovnaké SVG aj v `public/favicon.svg`
a v `public/pwa.js`). Ikony aplikácie (`icon-192/512`, `icon-maskable-512`, `apple-touch-icon`, `favicon.ico`) a obrázok
na zdieľanie `og-image.png` sa vyrenderujú z `scripts/brand/icon.html` a `scripts/brand/og.html` príkazom
`node scripts/brand/render.mjs` (potrebuje Edge alebo Chrome). Ten istý príkaz vytvorí aj obrázky pre jednotlivé
testy a slohové útvary v `public/og/` (šablóna `scripts/brand/og-page.html`; údaje číta z katalógu testov,
zo `stepperGroups` testov a zo `src/data/sloh.ts`). **Po pridaní ročníka alebo zmene tém ho spusti znova.**
Po zmene ikon zvýš verziu `CACHE` v `public/sw.js`.

## Farby a písma

Paleta „atrament a zlato“: hlavná stránka a sloh v `:root` súboru `src/styles/ms.css`,
stránka testu cez triedu `.acc-atrament` v `src/styles/global.css`. Nadpisy Fraunces, text Inter Tight,
v teste čitateľné písmo Atkinson Hyperlegible Next.
