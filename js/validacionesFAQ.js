document.addEventListener('DOMContentLoaded', function () {
        const formComentario = document.getElementById('form-comentario');
    const comentario = document.getElementById('comentario');

    formComentario.addEventListener('submit', function (e) {
        e.preventDefault();
        limpiarErroresComentario();

        if (comentario.value.trim() === '' || comentario.value.length > 150) {
            mostrarError(comentario, 'Tu consulta no puede estar vacia ni superar los 150 caracteres.');
            return;
        }

        alert('Gracias por tu consulta. La responderemos lo mas pronto posible.');
        formComentario.reset();
    });

    formComentario.addEventListener('reset', function () {
        limpiarErroresComentario();
    });

    function limpiarErroresComentario() {
        comentario.classList.remove('input-error');
        const error = comentario.parentElement.querySelector('.mensaje-error');
        if (error) error.remove();
    }
});
