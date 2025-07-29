document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        limpiarErrores();

        const nombre = document.getElementById('name');
        const apellido = document.getElementById('surname');
        const email = document.getElementById('email');
        const ciudad = document.getElementById('ciudad');

        let esValido = true;

        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'Por favor, ingrese su nombre.');
            esValido = false;
        }

        if (apellido.value.trim() === '') {
            mostrarError(apellido, 'Por favor, ingrese su apellido.');
            esValido = false;
        }

        if (!validarEmail(email.value)) {
            mostrarError(email, 'Por favor, ingrese un correo electrónico válido.');
            esValido = false;
        }

        if (ciudad.value === '') {
            mostrarError(ciudad, 'Por favor, seleccione una ciudad.');
            esValido = false;
        }

        if (esValido) {
            formulario.submit(); 
        }
    });

    function mostrarError(input, mensaje) {
        input.classList.add('input-error');

        const error = document.createElement('div');
        error.className = 'mensaje-error';
        error.innerText = mensaje;

        input.parentElement.appendChild(error);
    }

    function limpiarErrores() {
        document.querySelectorAll('.input-error').forEach(input => {
            input.classList.remove('input-error');
        });

        document.querySelectorAll('.mensaje-error').forEach(error => {
            error.remove();
        });
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    formulario.addEventListener('reset', function () {
    limpiarErrores(); 
});
});
