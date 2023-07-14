const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (!email || !password) {
        document.querySelector('#text_error').innerText = 'Porfavor rellena todos los campos :)';
        return;
    }
    try {
        // cookie
        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (res.ok) {
            const token = await res.text();
            document.cookie = `accessToken=${token}`;
            window.location.href = '/dashboard';
        } else {
            document.querySelector('#text_error').innerText = 'Datos incorrectos.';
        }

        // header
        // const res = await fetch('/signin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email, password })
        // });

        // const { token } = await res.json();
        // if (token) {
        //     localStorage.setItem('accessToken', token);
        //     window.location.href = '/dashboard';
        // } else {
        //     document.querySelector('#text_error').innerText = 'Datos incorrectos.';
        // }
    } catch (error) {
        alert('Error al iniciar sesión');
    }
})