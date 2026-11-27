// Service worker pre offline režim a nainštalovanú aplikáciu (Pridať na plochu).
// Stránky: najprv sieť (študent vždy dostane najnovšie opravy), offline sa použije uložená kópia.
// Po prvom otvorení ľubovoľnej stránky sa na pozadí potichu pred-uložia všetky ročníky, slohy, štýly, slovenské písma a obrázky ukážok.
const CACHE = 'pisomnematurity-v16';
const WARM_MARKER = '/__offline-warm-done';

const CORE_SHELL = [
  '/',
  '/pwa.js',
  '/sounds.js',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.png',
  '/apple-touch-icon.png'
];

const OFFLINE_HTML = `<!doctype html>
<html lang="sk">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Si offline – Písomné maturity</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 1.5rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f6f4ef; color: #151a2d; }
    .card { max-width: 28rem; background: #fff; border: 1px solid #e5e0d5; border-radius: 12px; padding: 2rem 1.75rem; text-align: center; box-shadow: 0 10px 30px rgba(16, 24, 40, 0.06); }
    h1 { margin: 0 0 0.65rem; font-size: 1.35rem; line-height: 1.3; }
    p { margin: 0 0 1.35rem; color: #3c4158; line-height: 1.6; font-size: 0.96rem; }
    a { display: inline-block; padding: 0.75rem 1.35rem; border-radius: 8px; background: #1e2a5e; color: #fff; font-weight: 700; text-decoration: none; font-size: 0.95rem; }
    a:hover { background: #2e3f88; }
  </style>
</head>
<body>
  <main class="card">
    <h1>Chýba pripojenie na internet</h1>
    <p>Táto stránka sa nestihla uložiť do zariadenia. Pripoj sa na chvíľu na internet a otvor úvodnú stránku – všetky testy aj slohové útvary sa automaticky uložia pre offline režim.</p>
    <a href="/">Späť na úvodnú stránku</a>
  </main>
</body>
</html>`;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function putInCache(request, response) {
  if (response.ok && response.type === 'basic') {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}

async function matchCached(request, url, isPage) {
  const direct = await caches.match(request, { ignoreSearch: isPage });
  if (direct || !isPage) return direct;
  const altPath = url.pathname.endsWith('/')
    ? url.pathname.slice(0, -1) || '/'
    : url.pathname + '/';
  return caches.match(altPath, { ignoreSearch: true });
}

let warmingPromise = null;

async function runPool(items, concurrency, worker) {
  const queue = items.slice();
  const runners = Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (item !== undefined) await worker(item);
    }
  });
  await Promise.all(runners);
}

async function fetchAndCacheText(cache, path) {
  const existing = await cache.match(path);
  if (existing) {
    return { ok: true, text: await existing.text() };
  }
  try {
    const res = await fetch(path, { credentials: 'same-origin' });
    if (!res.ok) return { ok: false, text: '' };
    await cache.put(path, res.clone());
    return { ok: true, text: await res.text() };
  } catch (err) {
    return { ok: false, text: '' };
  }
}

async function ensureCached(cache, path) {
  if (await cache.match(path)) return true;
  try {
    const res = await fetch(path, { credentials: 'same-origin' });
    if (!res.ok) return false;
    await cache.put(path, res);
    return true;
  } catch (err) {
    return false;
  }
}

async function warmOfflineCache() {
  const cache = await caches.open(CACHE);
  if (await cache.match(WARM_MARKER)) return;

  let allOk = true;
  const pagePaths = new Set(['/']);

  try {
    const smRes = await fetch('/sitemap.xml', { credentials: 'same-origin' });
    if (smRes.ok) {
      const xml = await smRes.text();
      let m;
      const locRe = /<loc>([^<]+)<\/loc>/g;
      while ((m = locRe.exec(xml)) !== null) {
        try {
          pagePaths.add(new URL(m[1].trim()).pathname);
        } catch (e) {}
      }
    }
  } catch (e) {
    allOk = false;
  }

  const astroAssets = new Set();
  const mediaAssets = new Set();

  await runPool(Array.from(pagePaths), 2, async (pagePath) => {
    const { ok, text } = await fetchAndCacheText(cache, pagePath);
    if (!ok) {
      allOk = false;
      return;
    }
    const clean = text.replace(/\\\//g, '/');
    let m;
    const astroRe = /(?:href|src)=["'](\/_astro\/[^"']+)["']/g;
    while ((m = astroRe.exec(clean)) !== null) astroAssets.add(m[1]);
    const imgRe = /\/images\/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|webp|svg)/g;
    while ((m = imgRe.exec(clean)) !== null) mediaAssets.add(m[0]);
  });

  const fontAssets = new Set();
  await runPool(Array.from(astroAssets), 3, async (assetPath) => {
    if (assetPath.endsWith('.css')) {
      const { ok, text } = await fetchAndCacheText(cache, assetPath);
      if (!ok) {
        allOk = false;
        return;
      }
      let m;
      const fontRe = /url\((['"]?)(\/_astro\/[^)'"]+-latin(?:-ext)?-[^)'"]+\.woff2)\1\)/g;
      while ((m = fontRe.exec(text)) !== null) fontAssets.add(m[2]);
    } else {
      const ok = await ensureCached(cache, assetPath);
      if (!ok) allOk = false;
    }
  });

  const extraAssets = [
    ...CORE_SHELL.filter((p) => p !== '/'),
    ...Array.from(fontAssets),
    ...Array.from(mediaAssets)
  ];
  await runPool(extraAssets, 3, async (assetPath) => {
    const ok = await ensureCached(cache, assetPath);
    if (!ok) allOk = false;
  });

  if (allOk && pagePaths.size > 1) {
    await cache.put(WARM_MARKER, new Response('1'));
  }
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'WARM_OFFLINE_CACHE') {
    if (!warmingPromise) {
      warmingPromise = warmOfflineCache().finally(() => {
        warmingPromise = null;
      });
    }
    event.waitUntil(warmingPromise);
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/.netlify/')) return;

  if (url.pathname.startsWith('/_astro/')) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((res) => putInCache(request, res)))
    );
    return;
  }

  const isPage = request.mode === 'navigate';
  event.respondWith(
    fetch(request)
      .then((res) => putInCache(request, res))
      .catch(() =>
        matchCached(request, url, isPage).then((cached) => {
          if (cached) return cached;
          if (!isPage) return Response.error();
          if (url.pathname === '/') {
            return caches.match('/').then(
              (home) =>
                home ||
                new Response(OFFLINE_HTML, {
                  status: 503,
                  headers: { 'Content-Type': 'text/html; charset=utf-8' }
                })
            );
          }
          return new Response(OFFLINE_HTML, {
            status: 503,
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        })
      )
  );
});
