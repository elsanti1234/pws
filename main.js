// Manejar el clic del botón "Iniciar Sesión"
document.getElementById('loginBtn').addEventListener('click', function() {
  // Envía un mensaje al Service Worker indicando que se hizo clic en el botón "Iniciar Sesión"
  navigator.serviceWorker.controller.postMessage({ action: 'login-clicked' });
});

// Manejar el clic del botón "Registrarse"
document.getElementById('registerBtn').addEventListener('click', function() {
  // Envía un mensaje al Service Worker indicando que se hizo clic en el botón "Registrarse"
  navigator.serviceWorker.controller.postMessage({ action: 'register-clicked' });
});

// Manejar el clic del botón "Cerrar Sesión"
document.getElementById('logoutBtn').addEventListener('click', function() {
  // Envía un mensaje al Service Worker indicando que se hizo clic en el botón "Cerrar Sesión"
  navigator.serviceWorker.controller.postMessage({ action: 'logout-clicked' });
});
