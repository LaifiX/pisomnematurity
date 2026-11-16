// Vyrenderuje ikony aplikácie a obrázok pre zdieľanie z HTML v scripts/brand/ do public/.
// Spustenie: node scripts/brand/render.mjs   (potrebuje Microsoft Edge alebo Google Chrome; cesta cez BROWSER=...)
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const pub = path.join(root, 'public');
const candidates = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium'
].filter(Boolean);
const browser = candidates.find((p) => fs.existsSync(p));
if (!browser) throw new Error('Nenašiel sa Edge ani Chrome – nastav BROWSER=<cesta>');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const port = 9500 + Math.floor(Math.random() * 300);
const userDir = path.join(process.env.TEMP || process.env.TMPDIR || '/tmp', `brand-render-${port}`);
const proc = spawn(browser, ['--headless=new', `--remote-debugging-port=${port}`, '--hide-scrollbars', '--allow-file-access-from-files', `--user-data-dir=${userDir}`, 'about:blank'], { stdio: 'ignore' });

let list;
for (let i = 0; i < 60; i++) {
  try { list = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (list.length) break; } catch {}
  await sleep(200);
}
const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send('Page.enable');

async function render(file, query, w, h, transparent) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: false });
  await send('Emulation.setDefaultBackgroundColorOverride', transparent ? { color: { r: 0, g: 0, b: 0, a: 0 } } : {});
  await send('Page.navigate', { url: pathToFileURL(path.join(root, 'scripts', 'brand', file)).href + (query || '') });
  await sleep(1500);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => true)', awaitPromise: true });
  await sleep(200);
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  return Buffer.from(shot.result.data, 'base64');
}

const out = (name, buf) => { fs.writeFileSync(path.join(pub, name), buf); console.log('✔', name, buf.length, 'B'); };

out('og-image.png', await render('og.html', '', 1200, 630, false));
out('icon-192.png', await render('icon.html', '', 192, 192, true));
out('icon-512.png', await render('icon.html', '', 512, 512, true));
out('icon-maskable-512.png', await render('icon.html', '?maskable=1', 512, 512, false));
out('apple-touch-icon.png', await render('icon.html', '?square=1', 180, 180, false));

// favicon.ico: PNG obrázky 16, 32 a 48 px v kontajneri ICO
const sizes = [16, 32, 48];
const pngs = [];
for (const s of sizes) pngs.push(await render('icon.html', '', s, s, true));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = sizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0); e.writeUInt8(s, 1); e.writeUInt8(0, 2); e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(pngs[i].length, 8); e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  return e;
});
out('favicon.ico', Buffer.concat([header, ...entries, ...pngs]));

// ---------- obrázky na zdieľanie pre jednotlivé testy a slohové útvary (public/og/) ----------
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const ogDir = path.join(pub, 'og');
fs.mkdirSync(ogDir, { recursive: true });
const shot = async (name, data) => {
  const buf = await render('og-page.html', '?d=' + encodeURIComponent(JSON.stringify(data)), 1200, 630, false);
  fs.writeFileSync(path.join(ogDir, name), buf);
  console.log('✔ og/' + name, buf.length, 'B');
};

// testy: katalóg (slug, rok, školský rok, stav) + názvy ukážok zo stepperGroups
const catalog = read('src/data/testsCatalog.ts');
const readyTests = catalog.split(/\r?\n\s*\{\r?\n/).slice(1).map((block) => ({
  slug: (block.match(/slug: '([^']+)'/) || [])[1],
  year: (block.match(/year: (\d{4})/) || [])[1],
  schoolYear: (block.match(/schoolYear: '([^']+)'/) || [])[1],
  status: (block.match(/status: '([^']+)'/) || [])[1]
})).filter((t) => t.slug && t.status === 'ready');
for (const t of readyTests) {
  const idx = read(`src/data/tests/${t.slug}/index.ts`);
  const labels = [...idx.matchAll(/label: 'Ukážka \d+ · ([^']+)'/g)].map((m) => m[1]);
  await shot(`${t.slug}.png`, {
    kind: 'test',
    kicker: `Riadny termín ${t.schoolYear}`,
    title: `Maturita ${t.year}`,
    sub: 'Test externej časti zo slovenčiny: 64 úloh, 100 minút, s nápovedou a postupom riešenia.',
    cardTitle: 'Ukážky v teste',
    items: labels
  });
}

// slohové útvary: názov, krátky popis, počet tém 2007 – 2026 a posledný rok
const sloh = read('src/data/sloh.ts');
const utvary = [...sloh.matchAll(/\r?\n {4}slug: '([^']+)',\r?\n {4}name: '([^']+)',\r?\n {4}short: '([^']+)'/g)].map((m) => ({ slug: m[1], name: m[2], short: m[3] }));
const hasDeck = (slug) => new RegExp(String.raw`'?${slug}'?: \{ prezentacia: '`).test(sloh);
for (const u of utvary) {
  const years = [...sloh.matchAll(new RegExp(String.raw`t\((\d{4}), '${u.slug}'`, 'g'))].map((m) => Number(m[1]));
  const n = years.length;
  await shot(`sloh-${u.slug}.png`, {
    kind: 'sloh',
    kicker: 'Slohový útvar na maturite',
    title: u.name,
    sub: u.short.replace(/<[^>]+>/g, ''),
    cardTitle: hasDeck(u.slug) ? 'Rukoväť na písanie slohovej práce' : 'Písomná forma internej časti',
    deck: u.name,
    deckSub: 'znaky, kompozícia, jazyk, témy 2007 – 2026 a kritériá NIVaM',
    stat: n ? `${n}×` : '',
    statLabel: n ? `na maturite v rokoch 2007 – 2026, naposledy ${Math.max(...years)}` : ''
  });
}
await shot('sloh.png', {
  kind: 'sloh',
  kicker: 'Písomná forma internej časti',
  title: 'Slohové útvary',
  sub: 'Osem útvarov, ktoré môže NIVaM zadať: znaky, kompozícia, jazyk a všetky témy 2007 – 2026.',
  cardTitle: 'Rukoväť na písanie slohovej práce',
  deck: 'Úvaha, rozprávanie, charakteristika a ďalšie',
  deckSub: 'podľa prezentácií z roku 2014, aktualizované 2026',
  stat: '28',
  statLabel: 'bodov môžeš získať za slohovú prácu'
});

ws.close();
proc.kill();
process.exit(0);
