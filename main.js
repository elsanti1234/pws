// Verifica si el navegador soporta Service Worker
if ('serviceWorker' in navigator) {
    // Espera a que la página esté completamente cargada antes de registrar el Service Worker
    window.addEventListener('load', function() {
      // Registra el Service Worker
      navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
          // Registro exitoso
          console.log('Service Worker registrado correctamente:', registration);
        })
        .catch(function(error) {
          // Error en el registro
          console.error('Error al registrar el Service Worker:', error);
        });
    });
  } else {
    // Si el navegador no soporta Service Worker, imprime un mensaje de advertencia
    console.warn('Service Worker no soportado en este navegador.');
  }
  
  // Aquí puedes incluir el resto de la lógica de tu aplicación  

// Espera a que el documento esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
  
    // Mostrar formulario de inicio de sesión al hacer clic en "Iniciar Sesión"
    loginBtn.addEventListener("click", function() {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    });
  
    // Mostrar formulario de registro al hacer clic en "Registrarse"
    registerBtn.addEventListener("click", function() {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });
  
    // Manejar el envío del formulario de inicio de sesión
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
      // Aquí puedes agregar la lógica para enviar los datos del formulario de inicio de sesión al servidor
      console.log("Iniciar sesión...");
    });
  
    // Manejar el envío del formulario de registro
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
      // Aquí puedes agregar la lógica para enviar los datos del formulario de registro al servidor
      console.log("Registrarse...");
    });
  
    // Puedes agregar más lógica para manejar otras interacciones del usuario aquí
  });
  