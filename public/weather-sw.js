// Service Worker for Weather Page Offline Functionality
// Caches weather data and provides offline experience

const CACHE_NAME = 'weather-app-v1';
const WEATHER_CACHE = 'weather-data-v1';

// Files to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/tempo',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  // Weather icons and images
  '/images/weather-icons/sunny.svg',
  '/images/weather-icons/cloudy.svg',
  '/images/weather-icons/rainy.svg',
  '/images/weather-icons/stormy.svg'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/weather',
  '/api/forecast'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Weather SW: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Weather SW: Static assets cached');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== WEATHER_CACHE) {
              console.log('Weather SW: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Weather SW: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle API requests with network-first strategy
  if (isApiRequest(url)) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Handle static assets with cache-first strategy
  if (isStaticAsset(url)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  // Default: try network first, fallback to cache
  event.respondWith(
    fetch(request)
      .catch(() => caches.match(request))
  );
});

// Background sync for weather data updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'weather-sync') {
    event.waitUntil(syncWeatherData());
  }
});

// Push notifications for weather alerts
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/weather-icon-192.png',
      badge: '/images/weather-badge-72.png',
      tag: 'weather-alert',
      requireInteraction: true,
      actions: [
        {
          action: 'view',
          title: 'Ver Detalhes'
        },
        {
          action: 'dismiss',
          title: 'Dispensar'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/tempo')
    );
  }
});

// Helper functions
function isApiRequest(url) {
  return url.pathname.startsWith('/api/') || 
         url.hostname === 'api.openweathermap.org';
}

function isStaticAsset(url) {
  return url.pathname.startsWith('/static/') ||
         url.pathname.startsWith('/images/') ||
         url.pathname.endsWith('.css') ||
         url.pathname.endsWith('.js') ||
         url.pathname.endsWith('.png') ||
         url.pathname.endsWith('.jpg') ||
         url.pathname.endsWith('.svg');
}

// Network-first strategy for API requests
async function handleApiRequest(request) {
  const cache = await caches.open(WEATHER_CACHE);
  
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const responseClone = networkResponse.clone();
      await cache.put(request, responseClone);
      
      // Add timestamp to track freshness
      const timestampRequest = new Request(request.url + '_timestamp');
      await cache.put(timestampRequest, new Response(Date.now().toString()));
      
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
  } catch (error) {
    console.log('Weather SW: Network failed, trying cache');
    
    // Check if cached data is still fresh (within 30 minutes)
    const timestampRequest = new Request(request.url + '_timestamp');
    const timestampResponse = await cache.match(timestampRequest);
    
    if (timestampResponse) {
      const timestamp = parseInt(await timestampResponse.text());
      const isStale = Date.now() - timestamp > 30 * 60 * 1000; // 30 minutes
      
      if (!isStale) {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          // Add offline indicator header
          const headers = new Headers(cachedResponse.headers);
          headers.set('X-Served-By', 'sw-cache');
          headers.set('X-Cache-Timestamp', timestamp.toString());
          
          return new Response(cachedResponse.body, {
            status: cachedResponse.status,
            statusText: cachedResponse.statusText,
            headers: headers
          });
        }
      }
    }
    
    // Return offline fallback
    return new Response(JSON.stringify({
      error: 'Offline',
      message: 'Dados não disponíveis offline',
      cached: false
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Cache-first strategy for static assets
async function handleStaticAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return offline fallback for images
    if (request.url.includes('weather-icon')) {
      return new Response('', { status: 404 });
    }
    throw error;
  }
}

// Handle navigation requests
async function handleNavigation(request) {
  try {
    return await fetch(request);
  } catch (error) {
    // Return cached page or offline fallback
    const cache = await caches.open(CACHE_NAME);
    const cachedPage = await cache.match('/tempo') || await cache.match('/');
    
    if (cachedPage) {
      return cachedPage;
    }
    
    // Return basic offline page
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tempo - Offline</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { 
              font-family: system-ui, sans-serif; 
              text-align: center; 
              padding: 2rem;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              min-height: 100vh;
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .container {
              background: rgba(255, 255, 255, 0.1);
              padding: 2rem;
              border-radius: 1rem;
              backdrop-filter: blur(10px);
            }
            .icon { font-size: 4rem; margin-bottom: 1rem; }
            h1 { margin: 0 0 1rem 0; }
            p { margin: 0.5rem 0; opacity: 0.9; }
            button {
              background: rgba(255, 255, 255, 0.2);
              border: 1px solid rgba(255, 255, 255, 0.3);
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              cursor: pointer;
              margin-top: 1rem;
            }
            button:hover {
              background: rgba(255, 255, 255, 0.3);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">☁️</div>
            <h1>Modo Offline</h1>
            <p>Você está offline no momento.</p>
            <p>Alguns dados em cache podem estar disponíveis.</p>
            <button onclick="window.location.reload()">Tentar Novamente</button>
          </div>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Background sync for weather data
async function syncWeatherData() {
  console.log('Weather SW: Background sync started');
  
  try {
    // Get user's favorite locations from IndexedDB or localStorage
    const locations = ['Luanda', 'Huambo', 'Benguela']; // Default locations
    
    for (const location of locations) {
      try {
        const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
        if (response.ok) {
          const cache = await caches.open(WEATHER_CACHE);
          await cache.put(`/api/weather?location=${location}`, response.clone());
          console.log(`Weather SW: Synced data for ${location}`);
        }
      } catch (error) {
        console.log(`Weather SW: Failed to sync ${location}:`, error);
      }
    }
    
    // Notify clients about successful sync
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        success: true
      });
    });
    
  } catch (error) {
    console.log('Weather SW: Background sync failed:', error);
    
    // Notify clients about failed sync
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        success: false,
        error: error.message
      });
    });
  }
}

// Periodic cleanup of old cache entries
setInterval(async () => {
  const cache = await caches.open(WEATHER_CACHE);
  const requests = await cache.keys();
  
  for (const request of requests) {
    if (request.url.includes('_timestamp')) {
      const response = await cache.match(request);
      if (response) {
        const timestamp = parseInt(await response.text());
        const isOld = Date.now() - timestamp > 24 * 60 * 60 * 1000; // 24 hours
        
        if (isOld) {
          await cache.delete(request);
          // Also delete the corresponding data request
          const dataUrl = request.url.replace('_timestamp', '');
          await cache.delete(dataUrl);
          console.log('Weather SW: Cleaned old cache entry:', dataUrl);
        }
      }
    }
  }
}, 60 * 60 * 1000); // Run every hour

