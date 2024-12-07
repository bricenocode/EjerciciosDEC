const formulario = document.getElementById('formulario');

const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const nacimientoInput = document.getElementById('nacimiento');
const terminosInput = document.getElementById('terminos');

const nombreLabel = document.getElementById('nombreLabel');
const correoLabel = document.getElementById('correoLabel');
const nacimientoLabel = document.getElementById('nacimientoLabel');
const terminosLabel = document.getElementById('terminosLabel');
const telefonoLabel = document.getElementById('telefonoLabel');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(e) {
    e.preventDefault();

    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const nacimiento = nacimientoInput.value;
    const telefono = telefonoInput.value;
    const terminos = terminosInput.checked;

    // Patrones de validación
    const nombreRegex = /^[a-zA-Z]{3,}$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]+$/;

    const errores = {};

    if (!nombre || !nombreRegex.test(nombre)) {
        errores['nombre'] = 'El Nombre debe tener al menos 3 caracteres';
    }
    if (!correo || !correoRegex.test(correo)) {
        errores['correo'] = 'El Correo debe tener el formato correcto';
    }
    if (!telefono || !telefonoRegex.test(telefono)) {
        errores['telefono'] = 'El teléfono debe tener solo números';
    }
    if (!nacimiento) {
        errores['nacimiento'] = 'La fecha de nacimiento debe ser ingresada';
    }
    if (!terminos) {
        errores['terminos'] = 'Debe aceptar los términos y condiciones';
    }

    if (Object.keys(errores).length === 0) {
        mostrarMensaje('exito', errores);
        limpiarFormulario();
    } else {
        mostrarMensaje('error', errores);
    }
}

function mostrarMensaje(tipo, errores) {
    const erroresIndices = Object.keys(errores);
    const erroresSelect = document.querySelectorAll('.mensaje');
    erroresSelect.forEach(error => error.remove());

    // Remover la clase de borde rojo de todos los inputs
    [nombreInput, correoInput, telefonoInput, nacimientoInput].forEach(input => {
        input.classList.remove('borde-rojo');
    });

    if (tipo === 'error') {
        for (let i = 0; i < erroresIndices.length; i++) {
            let inyectado = document.getElementById(`${erroresIndices[i]}Label`);
            let inputError = document.getElementById(erroresIndices[i]);

            // Añadir borde rojo al campo con error
            inputError.classList.add('borde-rojo');

            if (!document.getElementById(`${erroresIndices[i]}Error`)) {
                const mensaje = document.createElement('P');
                mensaje.classList = 'mensaje error';
                mensaje.textContent = `${errores[erroresIndices[i]]}`;
                inyectado.appendChild(mensaje);
            }
        }
    } else {
        const mensajeExito = document.querySelector('.exito');
        if (!mensajeExito) {
            const mensaje = document.createElement('P');
            mensaje.classList = 'mensaje exito';
            mensaje.textContent = 'Formulario Registrado Exitosamente!';
            formulario.appendChild(mensaje);
            setTimeout(() => {
                mensaje.remove();
            }, 3000);
        }
    }
}

function limpiarFormulario() {
    formulario.reset();
    [nombreInput, correoInput, telefonoInput, nacimientoInput].forEach(input => {
        input.classList.remove('borde-rojo');
    });
}
