if (location.protocol === 'file:') {
  alert("❌ Please run this project using Live Server for full functionality.");
  throw new Error("Live Server required.");
}

function login() {
  const id = document.getElementById('login-id').value;
  const pass = document.getElementById('login-password').value;
  const error = document.getElementById('login-error');

  if (id === 'admin' && pass === 'admin') {
    window.location.href = 'admin.html';
  } else if (id !== '' && pass !== '') {
    localStorage.setItem('userId', id);
    window.location.href = 'user.html';
  } else {
    error.textContent = 'Invalid ID or password';
  }
}