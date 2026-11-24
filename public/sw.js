// Service worker for the installed app (Add to home screen).
// Pages and data: network first, so pupils always get the latest fixes; the cached copy is used only offline.
// Hashed build files (/_astro/) never change, so they come from the cache first.
// The stats function (/api/) is never cached.
const CACHE = 'pisomnematurity-v4';

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
    <p>Tento ročník testu ešte nemáš uložený v zariadení. Pripoj sa na chvíľu na internet a otvor ho – potom ti pôjde aj offline.</p>
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
        caches.match(request, { ignoreSearch: isPage }).then((cached) => {
          if (cached) return cached;
          if (!isPage) return Response.error();
          if (url.pathname === '/') {
            return caches.match('/').then(
              (home) =>
                home ||
                new Response(OFFLINE_HTML, {
                  status: 503,
                  headers: { 'Content-Type': 'text/html; charset=utf-8' },
                })
            );
          }
          return new Response(OFFLINE_HTML, {
            status: 503,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
          });
        })
      )
  );
});
