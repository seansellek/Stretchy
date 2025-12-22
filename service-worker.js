// Stretchy - Service Worker
// Network-first caching strategy to ensure app code is always fresh

const CACHE_VERSION = 'v1';
const CACHE_NAME = `stretchy-${CACHE_VERSION}`;

// Files to cache for offline support
const STATIC_CACHE_FILES = [
  '/Stretchy/',
  '/Stretchy/index.html',
  '/Stretchy/styles.css',
  '/Stretchy/app.js',
  '/Stretchy/workouts.js',
  '/Stretchy/manifest.json',
  '/Stretchy/icons/icon-192x192.png',
  '/Stretchy/icons/icon-512x512.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching static files');
        return cache.addAll(STATIC_CACHE_FILES);
      })
      .then(() => {
        // Force the waiting service worker to become the active service worker
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - network-first strategy for app code, cache-first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Network-first strategy for HTML, CSS, and JS files
  // This ensures the app code is ALWAYS fresh
  if (
    request.method === 'GET' &&
    (url.pathname.endsWith('.html') ||
     url.pathname.endsWith('.css') ||
     url.pathname.endsWith('.js') ||
     url.pathname === '/Stretchy/' ||
     url.pathname === '/Stretchy')
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response before caching
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseToCache);
            });

          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(request);
        })
    );
    return;
  }

  // Cache-first strategy for static assets (images, icons, etc.)
  if (
    request.method === 'GET' &&
    (url.pathname.endsWith('.png') ||
     url.pathname.endsWith('.jpg') ||
     url.pathname.endsWith('.svg') ||
     url.pathname.endsWith('.json'))
  ) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request)
            .then((response) => {
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });

              return response;
            });
        })
    );
    return;
  }

  // For everything else, just fetch from network
  event.respondWith(fetch(request));
});

// Handle service worker updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
