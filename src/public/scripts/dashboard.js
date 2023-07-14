// Obtenemos el token de la cookie
// const token = getCookie('accessToken');

// async function cargarDashboard() {
//     if (!token) {
//         // Si el token no existe, redirigimos al usuario al login
//         window.location.href = '/login';
//         return;
//     }

//     try {
//         const res = await fetch('/dashboard', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': token,
//             },
//         });
//         if (res.ok) {
//             const data = await res.json();
//             // Mostramos el nombre de usuario en el dashboard
//             document.querySelector('#username').textContent = data.username;
//         } else {
//             // Si hay un error al obtener los datos del dashboard, redirigimos al usuario al login
//             window.location.href = '/login';
//         }
//     } catch (error) {
//         alert('Error al cargar el dashboard');
//     }
// }

// cargarDashboard();

// function getCookie(name) {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].trim();
//         if (cookie.startsWith(name + '=')) {
//             return cookie.substring(name.length + 1);
//         }
//     }
//     return null;
// }