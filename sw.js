const assets = [
  '/',
  '/index.html',
  '/page1.html',
  'page2.html',
  'page3.html',
  '/js/app.js',
  '/img/a.jgp',
  '/img/l.jgp',
  '/img/lalasae.jgp',
  '/img/biga.jgp',
  '/img/ba.jgp',
  '/img/back.jgp',
  '/img/biga1.jgp',
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open('site-static').then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
