const CACHE = 'klinik-v4';
const ASSETS = [
  './index.html',
  './tap-counter.html',
  './dscrb65.html',
  './centor.html',
  './otit.html',
  './wells.html',
  './chadsva.html',
  './ottawa-ankle.html',
  './cspine.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
