var name = 'ijul-coba-pwa';
var files = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/pwa.js',
  '/js/analytic.js',
  '/js/particles.js',
  '/css/style.css',
  '/img/fav.png',
  '/img/me.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  caches.open(name).then(function(cache) {
    console.log('[ServiceWorker] Caching app shell');
    return cache.addAll(files);
  })
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});