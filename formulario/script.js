const datos = {
  nombre:'',
  email:'',
  password:'',
  newPassword:'',
  fecha:'',
  terminos:false
}

//Variables
  //Formulario
  const formulario = document.getElementById('formulario')

  //Inputs
  const nombreInput = document.getElementById('nombre')
  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')
  const newPasswordInput = document.getElementById('newPassword')
  const fecha = document.getElementById('fecha')
  const terminos = document.getElementById('terminos')

  //Labels

//Eventos

nombreInput.addEventListener('input', validarObligatorios)
emailInput.addEventListener('input', validarObligatorios)
passwordInput.addEventListener('input', validarObligatorios)
newPasswordInput.addEventListener('input', validarObligatorios)
fecha.addEventListener('input', validarObligatorios)
terminos.addEventListener('input', validarObligatorios)

formulario.addEventListener('submit', validar)


let validado = false;


function validar(e){
  e.preventDefault();
  if(datos.nombre === '' && datos.email === '' && datos.fecha === '' && datos.password === '' && datos.newPassword === '' && !datos.terminos){
    mostrarError(formulario,'Todos los campos son obligatorios')
  }else{
    limpiarError(formulario)
    mostrarExito(formulario, 'Formulario enviado correctamente');
    formulario.reset()
  }
}
//Funciones
function validarObligatorios(e){
    limpiarError(e.target)
    if(!regexValidacion(nombreInput ,/^[^@]{3,}$/)){
      mostrarError(nombreInput, 'El nombre debe tener al menos 3 caracteres')
    }else{
      datos.nombre = nombreInput.value
    }
    if(!regexValidacion(emailInput ,/^[^@]+@[^@]+\.[^@]{2,}$/)){
      mostrarError(emailInput, 'El correo debe tener el formato correcto')
    }else{
      datos.email = emailInput.value
    }
    if(!regexValidacion(passwordInput ,/^(?=.*[A-Z])(?=.*\d).{8,}$/)){
      mostrarError(passwordInput, 'La contraseña debe tener al menos 8 caracteres, 1 letra en mayúscula, y un numero')
    }else{
      datos.password = passwordInput.value
    }
    if(newPasswordInput.value !== passwordInput.value){
      mostrarError(newPasswordInput, 'Las contraseñas deben ser iguales')
    }else{
      datos.newPassword = newPasswordInput.value
    }
    if(!esMayor()){
      mostrarError(fecha, 'Debes ser mayor de 18 años')
    }else{
      datos.fecha = fecha.value
    }
    if(!terminos.checked){
      datos.terminos = false;
      mostrarError(terminos, 'Debes aceptar los términos y condiciones')
    }else{
      datos.terminos = true;
    }
  
}

function esMayor(){
  let mayor = false
  const fechaNacimiento = new Date(fecha.value)
  const fechaActual = new Date()
  //edad de la persona pero es necesario veriificar el dia y mes
  let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
  //Mes
  const mesNacimiento = fechaNacimiento.getMonth()
  const mesActual = fechaActual.getMonth()
  //Dia
  const diaNacimiento = fechaNacimiento.getDay()
  const diaActual = fechaActual.getDay()

  if(mesNacimiento > mesActual || (diaNacimiento > diaActual && mesNacimiento == mesActual)){
    edad--;
  }

  if(edad >= 18){
    mayor = true;
  }

return mayor
}

function mostrarError(referencia, mensaje){
  //Borrar si el mensaje ya existe
  limpiarError(referencia)

  //Crear objeto 
  const error = document.createElement('P')
  error.classList.add('toast', '--error')
  error.textContent = mensaje
  
  referencia.parentElement.append(error)
  referencia.style.border = '1px solid red'
}

function mostrarExito(referencia, mensaje){
  const exito = document.createElement('p')
  exito.classList.add('toast', '--exito')
  exito.textContent = mensaje

  referencia.appendChild(exito)

  setTimeout(() => {
    exito.remove()
  }, 3000);
}

function limpiarError(referencia){
  const error = referencia.parentElement.querySelector('.--error') 
  if(error){
    error.remove()
    referencia.style.border = '1px solid black'
  }
}

