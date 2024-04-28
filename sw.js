// Nombre del caché
const CACHE_NAME = 'my-site-cache-v1';
// Archivos a cachear
const urlsToCache = [
  "/",
  "/index.html",
  "/nuevoapp.css",
  "/main.js"
];

// Escucha el evento 'install' para realizar la instalación del Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
  
  // Realiza la instalación del caché
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Caché abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Escucha el evento 'activate' para activar el Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker activado');
});

// Escucha el evento 'fetch' para interceptar las solicitudes de red
self.addEventListener('fetch', function(event) {
  console.log('Interceptando solicitud:', event.request.url);

  // Responde con recursos desde el caché
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Si se encuentra en caché, responde con el recurso almacenado
        if (response) {
          return response;
        }
        // Si no se encuentra en caché, realiza la solicitud de red normalmente
        return fetch(event.request);
      })
  );
});
