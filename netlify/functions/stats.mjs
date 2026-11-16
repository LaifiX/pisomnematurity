// Visitor counter and heart likes for the homepage, stored in Netlify Blobs.
// One POST per browser session ({ visit: true }) and at most one per browser for the heart ({ like: true });
// every call returns both counts, so the page never needs a separate read request.
import { getStore } from '@netlify/blobs';

const START = { visits: 0, likes: 0 };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  let body = {};
  try {
    const parsed = await req.json();
    if (parsed && typeof parsed === 'object') body = parsed;
  } catch (err) {}

  try {
    const store = getStore({ name: 'sjl-site-stats', consistency: 'strong' });
    const saved = await store.get('counts', { type: 'json' });
    const counts = { ...START, ...(saved && typeof saved === 'object' ? saved : {}) };

    if (body.visit === true) counts.visits += 1;
    if (body.like === true) counts.likes += 1;
    if (body.visit === true || body.like === true) await store.setJSON('counts', counts);

    return json({ visits: counts.visits, likes: counts.likes });
  } catch (err) {
    return json({ error: 'Stats temporarily unavailable' }, 503);
  }
};

export const config = { path: '/api/stats' };
