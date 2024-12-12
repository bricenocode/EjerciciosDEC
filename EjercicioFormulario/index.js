const formulario = document.querySelector('#formulario');

// Elementos del formulario
const inputs = {
    nombre: document.querySelector('#nombre'),
    correo: document.querySelector('#correo'),
    movil: document.querySelector('#movil'),
    fecha: document.querySelector('#fecha'),
    genero: document.querySelector('input[name="genero"]:checked'),
    pais: document.querySelector('#pais'),
    terminos: document.querySelector('#terminos')
};

addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarEntradas);
});

function validarEntradas(e) {
    e.preventDefault();
    const error = {};

    // Validación de cada campo
    if (!inputs.nombre.value || !/^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(inputs.nombre.value.trim())) {
        error.nombre = 'Debes introducir un nombre correcto!';
    }
    if (!inputs.correo.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.correo.value.trim())) {
        error.correo = 'Debes introducir un correo correcto!';
    }
    if (!inputs.movil.value || !/^\d{9}$/.test(inputs.movil.value.trim())) {
        error.movil = 'Debes introducir un número telefónico válido';
    }
    if (!inputs.fecha.value) {
        error.fecha = 'Debes introducir una fecha';
    }
    if (!inputs.genero) {
        error.genero = 'Debes elegir un género';
    }
    if (!inputs.pais.value) {
        error.pais = 'Debes elegir un país';
    }
    if (!inputs.terminos.checked) {
        error.terminos = 'Debes aceptar los términos y condiciones';
    }

    // Mostrar errores o mensaje de éxito
    if (Object.keys(error).length > 0) {
        mostrarErrores(error);
    } else {
        mostrarMensaje();
        limpiarFormulario();
    }
}

function mostrarErrores(errores) {
    // Limpiar mensajes de error previos
    const mensajesError = document.querySelectorAll('.mensaje.error');
    mensajesError.forEach(m => m.remove());

    const claves = Object.keys(errores);

    // Crear y mostrar mensajes de error
    claves.forEach(clave => {
        const insertado = document.querySelector(`#${clave}Label`);
        if (insertado) {
            const mensaje = document.createElement('P');
            mensaje.textContent = errores[clave];
            mensaje.className = 'mensaje error';
            insertado.appendChild(mensaje);

            // Eliminar mensaje después de 3 segundos
            setTimeout(() => {
                mensaje.remove();
            }, 3000);
        }
    });
}

function mostrarMensaje() {
    const mensaje = document.createElement('P');
    mensaje.textContent = 'Formulario Realizado Correctamente!';
    mensaje.className = 'mensaje exito';
    formulario.appendChild(mensaje);

    // Eliminar mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}

function limpiarFormulario() {
    formulario.reset();
}
