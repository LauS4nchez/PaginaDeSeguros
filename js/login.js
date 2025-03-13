document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();  // Evitar el comportamiento por defecto del formulario
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const result = await response.json();
  
    if (response.ok) {
      // Si el login es exitoso
      alert('Inicio de sesión exitoso');
      window.location.href = '/dashboard';  // Redirigir al dashboard o página principal
    } else {
      // Si hubo un error con las credenciales
      alert(result.message || 'Error en el inicio de sesión');
    }
  });
  