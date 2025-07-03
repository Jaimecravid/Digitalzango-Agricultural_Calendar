// DigitalZango Agricultural Calendar Service Worker
const CACHE_NAME = 'digitalzango-agricultural-v1';
const WEATHER_CACHE = 'weather-data-cache';
const AGRICULTURAL_CACHE = 'agricultural-data-cache';

// Cache essential files
const urlsToCache = [
  '/',
  '/calendario',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('DigitalZango: Caching essential files');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - handle offline requests
self.addEventListener('fetch', (event) => {
  // Handle weather API requests with caching
  if (event.request.url.includes('/api/weather')) {
    event.respondWith(
      caches.open(WEATHER_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            // Return cached data and fetch fresh data in background
            fetch(event.request).then(fetchResponse => {
              cache.put(event.request, fetchResponse.clone());
            }).catch(() => {
              console.log('DigitalZango: Using cached weather data (offline)');
            });
            return response;
          }
          
          // No cache, try to fetch
          return fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          }).catch(() => {
            // Return offline message for weather
            return new Response(JSON.stringify({
              error: 'Weather data unavailable offline',
              cached: false
            }), {
              headers: { 'Content-Type': 'application/json' }
            });
          });
        });
      })
    );
  }
  
  // Handle agricultural data requests
  else if (event.request.url.includes('/api/crops') || event.request.url.includes('/api/tools')) {
    event.respondWith(
      caches.open(AGRICULTURAL_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
  
  // Handle other requests normally
  else {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== WEATHER_CACHE && cacheName !== AGRICULTURAL_CACHE) {
            console.log('DigitalZango: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
