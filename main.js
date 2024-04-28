document.addEventListener('DOMContentLoaded', function() {
  // Obtiene referencias a los elementos del DOM
  const loginForm = document.getElementById('loginForm');
  const dashboard = document.getElementById('dashboard');
  const addTransaction = document.getElementById('addTransaction');
  const budgetSection = document.getElementById('budgetSection');
  const goalsSection = document.getElementById('goalsSection');

  // Maneja el envío del formulario de inicio de sesión
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
    // Aquí agregarías la lógica para validar el inicio de sesión
    // Por ahora, simplemente mostraremos el tablero principal
    showDashboard();
  });

  // Muestra el tablero principal y oculta las otras secciones
  function showDashboard() {
    dashboard.style.display = 'block';
    addTransaction.style.display = 'none';
    budgetSection.style.display = 'none';
    goalsSection.style.display = 'none';
  }

  // Maneja la navegación entre las diferentes secciones
  document.getElementById('addTransactionBtn').addEventListener('click', function() {
    dashboard.style.display = 'none';
    addTransaction.style.display = 'block';
    budgetSection.style.display = 'none';
    goalsSection.style.display = 'none';
  });

  document.getElementById('budgetBtn').addEventListener('click', function() {
    dashboard.style.display = 'none';
    addTransaction.style.display = 'none';
    budgetSection.style.display = 'block';
    goalsSection.style.display = 'none';
  });

  document.getElementById('goalsBtn').addEventListener('click', function() {
    dashboard.style.display = 'none';
    addTransaction.style.display = 'none';
    budgetSection.style.display = 'none';
    goalsSection.style.display = 'block';
  });

  document.getElementById('logoutBtn').addEventListener('click', function() {
    // Aquí agregarías la lógica para cerrar sesión
    // Por ahora, simplemente recargaremos la página para simular el cierre de sesión
    location.reload();
  });
});
