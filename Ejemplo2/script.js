

//Formulario
const formulario = document.getElementById('formulario')

//Labels
const nombreLabel = document.getElementById('nombre')
const emailLabel = document.getElementById('correo')

//Inputs
const nombreInput = document.getElementById('nombreInput')
const emailInput = document.getElementById('correoInput')

nombreInput.addEventListener('input', validar)
emailInput.addEventListener('input', validar)



function validar(e){
  e.preventDefault()
  //Prevenimos el envio para controlar el formulario nosotros mismos
  if(e.target.value.trim() === ''){
    mostrarError(e.target.parentElement, `El campo ${(e.target.id).toString().split('Input')[0]} no puede estar vacío`)
    return;
  }

  if(e.target.id === 'correoInput' && !validarEmail(e.target.value)){
    mostrarError(e.target.parentElement, `El email es incorrecto`)
    return;
  }
  limpiarAlerta(e.target.parentElement)
  formulario.addEventListener('submit', enviarFormulario)
}

function mostrarError(referencia, mensaje){
  //Limpiamos la alerta anterior si tuviese
  limpiarAlerta(referencia)
  //Creamos el error HTML
  const error = document.createElement('P')
  error.textContent = mensaje
  error.classList.add('toast','--error')

  //Inyectar al formulario
  referencia.appendChild(error)
}

function mostrarExito(){
  //Creamos el error HTML
  const exito = document.createElement('P')
  exito.textContent = 'Formulario enviado exitosamente!'
  exito.classList.add('toast','--exito')

  //Inyectar al formulario
  formulario.appendChild(exito)
  setTimeout(() => {
    formulario.remove()
  }, 3000);
}

function limpiarAlerta(referencia){
  const alerta = referencia.querySelector('.--error')
  if(alerta){
    alerta.remove()
  }
}

function validarEmail(email){
  const regex = /^[^@]+@[^@]+\.[^@]{2,}$/
  const resultado = regex.test(email)
  return resultado;
}

function enviarFormulario(e){
  e.preventDefault();
  mostrarExito();
}