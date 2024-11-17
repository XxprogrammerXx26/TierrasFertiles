// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault(); // Evita el envío del formulario de forma tradicional
    
    // Obtener los valores de los campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simular una verificación de usuario
    if (username === 'admin' && password === '1234') {
        // Si el inicio de sesión es exitoso, redirige a una página de inicio (simulada)
        alert('Inicio de sesión exitoso');
        window.location.href = 'dashboard.html'; // Redirigir a una página falsa de dashboard
    } else {
        // Si las credenciales son incorrectas
        alert('Usuario o contraseña incorrectos');
    }
}

// Función para manejar el registro de usuario
function register(event) {
    event.preventDefault(); // Evita el envío del formulario de forma tradicional
    
    // Obtener los valores de los campos de entrada
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    // Simular un proceso de registro
    alert(`Registro exitoso para ${username}`);
    
    // Redirigir a la página de inicio de sesión (login)
    window.location.href = 'login.html'; // Redirige al login después del registro
}


// Función para manejar la recuperación de la contraseña
function forgotPassword() {
    // Simula el proceso de recuperación de contraseña
    alert('Te hemos enviado un correo para restablecer tu contraseña.');
    // Aquí podrías redirigir a otra página de recuperación si fuese necesario
}
