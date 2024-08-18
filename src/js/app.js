document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar las credenciales
  if (username === 'anamazovi' && password === 'curso2024') {
    alert('Inicio de sesión exitoso');
    // Redirigir a la nueva página (dashboard.html)
    window.location.href = 'bienvenida.html';
  } else {
    alert('Credenciales incorrectas');
  }
});