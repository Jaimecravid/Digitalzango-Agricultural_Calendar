const CACHE_NAME = 'digitalzango-v2';
const WEATHER_CACHE = 'weather-data-cache';

// Next.js handles static assets via /_next/, so we only cache the app shell routes
const urlsToCache = [
  '/',
  '/inicio',
  '/calendario',
  '/guias',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // FIX 1: Force immediate update
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('DigitalZango: Caching essential files');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // FIX 2: Take control immediately
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== WEATHER_CACHE) {
            console.log('DigitalZango: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Weather API (Stale-while-revalidate)
  if (event.request.url.includes('openweathermap.org')) {
    event.respondWith(
      caches.open(WEATHER_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => {
            console.log('DigitalZango: Offline - using cached weather');
          });
          return response || fetchPromise;
        });
      })
    );
  } else {
    // App Shell: Cache First, fallback to Network
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  }
});
