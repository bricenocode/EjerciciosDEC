//Variables
const formulario = document.getElementById('registrationForm')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const dob = document.getElementById('dob')
const terms = document.getElementById('terms')
const mensajeExito = document.getElementById('successMessage')

//Eventos
document.addEventListener('DOMContentLoaded', () => { 
  formulario.addEventListener('submit', validar)
  fullName.addEventListener('input',validarInput)
  email.addEventListener('input',validarInput)
  password.addEventListener('input',validarInput)
  confirmPassword.addEventListener('input',validarInput)
  dob.addEventListener('input',validarInput)
  terms.addEventListener('input',validarInput)
})

//Funciones
function validarInput(e){
  const elemento = e.target
  if(elemento.value.trim() === ''){
    imprimirError(elemento, `Campo ${elemento.id} Obligatorio`)
    return;
  }
  limpiarError(elemento)
  console.log(validarFecha())
}

function imprimirError(referencia, mensaje){
  referencia.nextElementSibling.textContent = mensaje
}

function limpiarError(referencia){
  referencia.nextElementSibling.textContent = ''
}

function validar(e){
  e.preventDefault();
  const emailRegex = /^[^@]+@[^@]+\.[^@]{2,}$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[^@]{8,}$/;

  let error = false;
    /*
      El campo de Nombre completo debe ser obligatorio y debe tener un 
      mínimo de 3 caracteres. Si el usuario ingresa un valor con menos de 3 
      caracteres, debe mostrar un mensaje de error. 
    */  

      if(fullName.value.length < 3){
        imprimirError(fullName, 'El nombre debe tener minimo 3 caracteres')
        error = true
      }
  /*
      El campo de Correo electrónico debe ser obligatorio y debe seguir el 
      formato estándar de un correo electrónico (ej. usuario@dominio.com). 
      Si el formato es incorrecto, debe mostrar un mensaje de error. 
    */
      if(!emailRegex.test(email.value.trim())){
        imprimirError(email, 'El email debe tener el formato correcto')
        error = true
      }
  /*
      El campo de Contraseña debe ser obligatorio y debe cumplir con las 
      siguientes restricciones: 
      - Mínimo de 8 caracteres. 
      - Al menos una letra mayúscula. 
      - Al menos un número. 
  */
      if(!passwordRegex.test(password.value)){
        imprimirError(password, 'Debe tener mínimo 8 caracteres, 1 mayúscula, y 1 número')
        error = true
      }

  /*
      El campo de Confirmar contraseña debe coincidir exactamente con el 
      campo de Contraseña. Si no coincide, debe mostrar un mensaje de 
      error. 
  */
      if(password.value !== confirmPassword.value){
        imprimirError(confirmPassword, 'No coinciden')
        error = true
      }
  /*
      El campo de Fecha de nacimiento debe ser obligatorio y debe validar 
      que el usuario tenga al menos 18 años de edad. Si el usuario no es 
      mayor de 18 años, debe mostrar un mensaje de error. 
  */
      if(!validarFecha()){
        imprimirError(dob, 'Debes ser mayor de 18 años')
        error = true
      }

  /*
    El checkbox de aceptación de términos y condiciones debe estar 
    marcado para que el formulario se pueda enviar. Si no está marcado, 
    debe mostrar un mensaje indicando que es obligatorio aceptarlos
  */
      if(!terms.checked){
        imprimirError(terms, 'Debes aceptar los términos y condiciones')
        error = true
      }

      if(!error){
        imprimirExito();
        formulario.reset();
      }
}

function imprimirExito(){
  mensajeExito.style.display = "block";
  setTimeout(() => {
    mensajeExito.style.display = "none"; 
  }, 3000);
}

function validarFecha(){
  //Variables
  let esMayor = false;
  const fecha = new Date()
  const fechaArray=  dob.value.split('-')

  //Fecha nacimiento
  const diaNacimiento = +fechaArray[2]
  const mesNacimiento = +fechaArray[1]
  const anioNacimiento = +fechaArray[0]


  const diaActual = fecha.getDay()
  const mesActual = fecha.getMonth()+1
  const anioActual = fecha.getFullYear()

  let edad = anioActual - anioNacimiento

  if(mesNacimiento < mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)){
      edad--;
  
  
  if(edad >= 18 ){
    esMayor = true
  }
  
  return esMayor;
}


}

