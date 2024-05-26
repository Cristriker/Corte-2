function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    if (mensaje === '') {
        alert('Por favor, ingrese un mensaje.');
        return false;
    }

    return true;
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});
