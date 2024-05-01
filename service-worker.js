// service-worker.js

// Instalar el service worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
});

// Activar el service worker
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});

// Intercepta las solicitudes y maneja el caché
self.addEventListener('fetch', event => {
  console.log('Interceptando solicitud:', event.request.url);
  // Puedes implementar la lógica de caché aquí
});
