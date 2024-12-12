// Función que calcula el área de un círculo
function calcularAreaCirculo(radio) {
    if (radio <= 0) {
      console.log("El radio debe ser mayor que 0.");
      return;
    }
    return Math.PI * radio * radio;
  }
  
  // Llamada correcta a la función con un parámetro
  console.log(calcularAreaCirculo(2));  // Pasa el valor de 'radio' a la función
  