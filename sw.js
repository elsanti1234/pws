// Nombre del caché
const CACHE_NAME = 'https://elsanti1234.github.io/pws/';
// Archivos a cachear
const urlsToCache = [
  "/",
  "/index.html",
  "/main.js",
  "/nuevoapp.css"
];

// Instalación del Service Worker
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

// Activación del Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker activado');
});

// Interceptar solicitudes de red
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

// Escucha los mensajes enviados desde la página web
self.addEventListener('message', function(event) {
  if (event.data && event.data.action === 'login-clicked') {
    // Aquí puedes agregar la lógica para manejar el clic del botón "Iniciar Sesión"
    console.log('Se hizo clic en el botón "Iniciar Sesión"');
  } else if (event.data && event.data.action === 'register-clicked') {
    // Aquí puedes agregar la lógica para manejar el clic del botón "Registrarse"
    console.log('Se hizo clic en el botón "Registrarse"');
  } else if (event.data && event.data.action === 'logout-clicked') {
    // Aquí puedes agregar la lógica para manejar el clic del botón "Cerrar Sesión"
    console.log('Se hizo clic en el botón "Cerrar Sesión"');
  }
});
