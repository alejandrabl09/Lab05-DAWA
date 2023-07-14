// aqui accedemos al dom por medio de js y obtenemos un elemento por su id
// necesitamos el formulario para poder enviar los datos masna
const registerForm = document.getElementById('registerForm')

// utilizaremos un fetch con js y usaremos async await para mas placer
// recuerda que el fetch es una promesa, como tu y yo juntos, no mentira no te puedo prometer eso xd
// pero si te puedo prometer que te voy a querer mucho...
registerForm.addEventListener('submit', async (e) => {
    // quitamos el por defecto del formulario, osea que no refresque la pagina bbita
    e.preventDefault()
    // aqui solo obtenemos los valores de los inputs x medio de su id para manejarlos
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repeatPassword = document.getElementById('repeatpassword').value

    // que no deje nada vacio el user si no sas, su error
    // aqui estoy usando queryselector mi amor, hermosa, para que sepas que podemos manejar el dom
    // de diferentes maneras, va?
    if (!username || !email || !password || !repeatPassword) {
        // return alert('Porfavor rellena todos los campos, causita uu')
        document.querySelector('#text_error').innerText = 'Porfavor rellena todos los campos :)';
        return;
    }

    // verificamos que las contraseñas coincidan
    if (password !== repeatPassword) {
        document.querySelector('#text_error').innerText = 'Las contraseñas no coinciden.';
        return;
    }

    try {
        // enviamos la solicitud a nuestro endpoint signap
        const res = await fetch('/signup', {
            // hermosa, estas partes son las cabeceras de la solicitud, osea que tipo de datos
            // tenemos que enviar que es metodo post
            method: 'POST',
            // aqui le decimos que tipo de datos vamos a enviar, en este caso json
            headers: {
                'Content-Type': 'application/json'
            },
            // aqui enviamos los datos, en este caso el username, email y password a la api de registro
            body: JSON.stringify({ username, email, password })
        })
        // aqui obtenemos la respuesta de la api, en este caso el json que nos envia
        const data = await res.json()
        // verificamos si hay un error, si hay un error lo mostramos en pantalla
        if (data.error) {
            document.querySelector('#text_error').innerText = data.error;
            return;
        }
        // si todo sale bien, redireccionamos a la pagina de login
        window.location.href = '/login'

    } catch (error) {
        // si hay un error lo mostramos en consola
        console.log(error)
    }
})

