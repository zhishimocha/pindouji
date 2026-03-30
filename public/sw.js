const CACHE_NAME = 'pindouji-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // API请求不走缓存
  if (e.request.url.includes('/api/')) return;

  e.respondWith(
    // 网络优先：先请求服务器，拿到就更新缓存；网络失败才降级用缓存
    fetch(e.request).then(res => {
      if (!res || res.status !== 200 || res.type !== 'basic') return res;
      const clone = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      return res;
    }).catch(() =>
      caches.match(e.request).then(cached => cached || caches.match('/'))
    )
  );
});
