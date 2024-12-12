// Define una función llamada "capitalizarPrimeraLetra" que toma un parámetro "cadena" (una cadena de texto)
function capitalizarPrimeraLetra(cadena) {
    // Convierte la primera letra a mayúscula y añade el resto de la cadena sin cambios
    // cadena, es el argumento que representa la cadena de texto que se va a modificar.
    // El método charAt() devuelve el carácter en la posición especificada de la cadena.
    // toUpperCase(), este método se utiliza para convertir un carácter (o una cadena completa) a mayúsculas.


    return cadena.charAt(0).toUpperCase() + cadena.slice(1); // J + avascript
    // return cadena.charAt(0).toUpperCase() + cadena.slice(0); // J + javascript
    // return cadena.charAt(0).toUpperCase() + cadena.slice(5); // J + cript
    // return cadena.charAt(0).toUpperCase() + cadena.slice(1,5); // slice(inicio, fin) Javas

}

// Llama a la función con una cadena y muestra el resultado en la consola
console.log(capitalizarPrimeraLetra("javascript")); // Salida: "Javascript"
