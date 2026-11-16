// Consistency check of every built test (run after `astro build`, or via `npm run check`).
// Reads the test data embedded in dist/test/<slug>/index.html and reports
// errors (exit code 1) and warnings for the conventions described in PROJECT_GUIDE.md.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist/test';
// Topic group ids must match the icons in src/pages/test/[slug].astro (UI.topic_*)
const TOPIC_IDS = ['porozumenie', 'pravopis_lexika', 'tvaroslovie', 'skladba_literatura'];
// Mode and tool names are common nouns: lowercase in the middle of a sentence (Slovak spelling rules)
const MODE_WORDS = /(?<=[a-záäčďéíĺľňóôŕšťúýž,] )(Ostr[ýéého]+ test\w*|Precvičovan\w*|Nápoved\w*|Postup\w* riešenia)/;
const UNVOCALIZED_PREP = /\b([vV] 4\.\s*odsek|[sSzZ] [467]\.\s*[a-záäčďéíĺľňóôŕšťúýž])/;
const SPLIT_ADVERBS = /\b(do|od)\s+kedy\b/i;
// Words written in capitals for emphasis (abbreviations and case labels are fine)
const CAPS_OK = new Set(['EÚ', 'CO', 'CO₂', 'CO2', 'NIVaM', 'SJL', 'T9', 'ZŠ', 'PDF', 'OSN', 'USA', 'SR', 'EU', 'WWW', 'ZPH', 'II', 'III', 'IV']);

let errors = 0;
let warnings = 0;
const err = (slug, msg) => { errors++; console.log(`  ✖ [${slug}] ${msg}`); };
const warn = (slug, msg) => { warnings++; console.log(`  ⚠ [${slug}] ${msg}`); };

if (!existsSync(DIST)) {
  console.error('Chýba dist/test – najprv spusti `npm run build`.');
  process.exit(1);
}

for (const slug of readdirSync(DIST)) {
  const file = join(DIST, slug, 'index.html');
  if (!existsSync(file)) continue;
  const html = readFileSync(file, 'utf8');
  const m = html.match(/testData = (\{.*?\});\s*(?:let|const) testMeta/s) || html.match(/testData = (\{.*?\});/s);
  if (!m) { err(slug, 'nepodarilo sa nájsť testData v zostavenej stránke'); continue; }
  const d = JSON.parse(m[1]);
  const qs = d.questions;
  console.log(`\n${slug}: ${qs.length} úloh (${qs.filter((q) => q.type === 'choice').length} výber A – D, ${qs.filter((q) => q.type === 'text').length} krátka odpoveď)`);

  // ids and codes
  qs.forEach((q, i) => {
    if (q.id !== i + 1) err(slug, `úloha na pozícii ${i + 1} má id ${q.id}`);
    if (q.code !== String(q.id).padStart(2, '0')) err(slug, `úloha ${q.id} má code '${q.code}' (má byť '${String(q.id).padStart(2, '0')}')`);
    if (!q.category) err(slug, `úloha ${q.code} nemá category`);
    if (!q.hint) err(slug, `úloha ${q.code} nemá nápovedu (hint)`);
    if (!q.solutionSteps?.length) err(slug, `úloha ${q.code} nemá postup riešenia`);
    if (!q.solutionConclusion) err(slug, `úloha ${q.code} nemá záver postupu`);
    if (q.sharedContextId && !d.passages[q.sharedContextId]) err(slug, `úloha ${q.code}: ukážka '${q.sharedContextId}' neexistuje`);
    if (q.diagramId && !d.diagrams[q.diagramId]) err(slug, `úloha ${q.code}: obrázok '${q.diagramId}' neexistuje`);

    if (q.type === 'choice') {
      const keys = (q.options || []).map((o) => o.key).join('');
      if (keys !== 'ABCD') err(slug, `úloha ${q.code}: možnosti majú byť A, B, C, D (sú '${keys}')`);
      if (q.acceptedAnswers?.[0] !== q.correctAnswerDisplay) err(slug, `úloha ${q.code}: acceptedAnswers[0] (${q.acceptedAnswers?.[0]}) ≠ correctAnswerDisplay (${q.correctAnswerDisplay})`);
    } else {
      if (!q.acceptedAnswers?.length && !q.orderedWords?.length && !q.unorderedWords?.length) err(slug, `úloha ${q.code}: chýbajú uznávané odpovede`);
      if (q.caseSensitive && !q.caseHint) warn(slug, `úloha ${q.code}: caseSensitive bez caseHint (žiak nedostane cielenú radu k veľkému písmenu)`);
      const ph = (q.placeholder || '').toLocaleLowerCase('sk');
      const checkPool = [...(q.acceptedAnswers || []), ...(q.orderedWords || []), ...(q.unorderedWords || [])];
      const leak = checkPool.find((a) => a.length > 2 && ph.includes(a.toLocaleLowerCase('sk')));
      if (leak) err(slug, `úloha ${q.code}: placeholder prezrádza odpoveď „${leak}“`);
    }
  });

  // topic groups: 4 SJL areas, every task exactly once
  const seen = new Map();
  for (const g of d.topicGroups) {
    if (!TOPIC_IDS.includes(g.id)) warn(slug, `oblasť '${g.id}' nemá ikonu (použi ${TOPIC_IDS.join(', ')})`);
    for (const id of g.questionIds) seen.set(id, (seen.get(id) || 0) + 1);
  }
  qs.forEach((q) => {
    const n = seen.get(q.id) || 0;
    if (n !== 1) err(slug, `úloha ${q.code} je v oblastiach ${n}× (má byť práve raz)`);
  });

  // stepper groups: contiguous, cover all tasks
  let next = 0;
  for (const g of d.stepperGroups) {
    if (g.fromIndex !== next) err(slug, `navigátor: skupina „${g.label}“ začína na ${g.fromIndex}, čaká sa ${next}`);
    next = g.toIndex + 1;
  }
  if (next !== qs.length) err(slug, `navigátor pokrýva ${next} z ${qs.length} úloh`);

  // passage labels: "Ukážka N · Názov (úlohy 01 – 07)"
  for (const [key, p] of Object.entries(d.passages)) {
    if (!/^Ukážka/.test(p.label) || !/\(úloh[ay] [\d –a]+\)$/.test(p.label)) warn(slug, `ukážka '${key}': označenie „${p.label}“ nemá tvar „Ukážka N · Názov (úlohy 01 – 07)“`);
  }

  // spelling conventions in our own texts (hints, solutions, categories, commonMistakes)
  const own = [];
  qs.forEach((q) => {
    own.push([`${q.code} category`, q.category], [`${q.code} hint`, q.hint], [`${q.code} záver`, q.solutionConclusion], [`${q.code} caseHint`, q.caseHint || '']);
    (q.commonMistakes || []).forEach((cm, i) => own.push([`${q.code} chyba ${i + 1}`, cm.hint]));
    q.solutionSteps.forEach((s, i) => own.push([`${q.code} krok ${i + 1}`, `${s.title} ${s.text}`]));
  });
  for (const [where, text] of own) {
    const plain = text.replace(/\*\*|\/\/|__/g, '');
    const mode = plain.match(MODE_WORDS);
    if (mode) warn(slug, `${where}: „${mode[1]}“ uprostred vety píš malým písmenom`);
    const prep = plain.match(UNVOCALIZED_PREP);
    if (prep) warn(slug, `${where}: nevokalizovaná predložka pred číslovkou („${prep[1]}“)`);
    const splitAdv = plain.match(SPLIT_ADVERBS);
    if (splitAdv) warn(slug, `${where}: príslovka/spojka „${splitAdv[0]}“ sa píše spolu`);
    for (const w of plain.match(/\b[A-ZÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]{2,}\b/g) || []) {
      if (!CAPS_OK.has(w)) warn(slug, `${where}: „${w}“ verzálkami – na zdôraznenie použi **tučné** písmo`);
    }
  }
}

// SEO: titulok, popis, kanonická adresa na hlavnej doméne, náhľadový obrázok a JSON-LD na každej stránke
const siteUrl = (readFileSync('src/lib/site.ts', 'utf8').match(/SITE_URL = '([^']+)'/) || [])[1];
const seoPages = [['index', 'dist/index.html'], ...readdirSync(DIST).map((slug) => [slug, join(DIST, slug, 'index.html')])].filter(([, f]) => existsSync(f));
console.log(`\nSEO (${seoPages.length} stránok, doména ${siteUrl}):`);
for (const [name, file] of seoPages) {
  const html = readFileSync(file, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  if (!title) err(name, 'chýba <title>');
  else if (title.length > 65) warn(name, `titulok má ${title.length} znakov (Google zobrazí asi 60): „${title}“`);
  if (!desc) err(name, 'chýba meta description');
  else if (desc.length < 70 || desc.length > 165) warn(name, `popis má ${desc.length} znakov (ideál 70 – 160)`);
  const noindex = /<meta name="robots" content="noindex/.test(html);
  if (!noindex && !canonical.startsWith(siteUrl + '/')) err(name, `kanonická adresa „${canonical}“ nie je na doméne ${siteUrl}`);
  if (!/property="og:image" content="https?:\/\//.test(html)) err(name, 'chýba og:image');
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      err(name, 'neplatný JSON-LD');
    }
  }
}

console.log(`\n${errors ? '✖' : '✔'} chyby: ${errors}, upozornenia: ${warnings}`);
process.exit(errors ? 1 : 0);
