// Define una función llamada "filtrarPares" que toma un parámetro "arr" (un array)
function filtrarPares(arr) {
    // Usa el método "filter" para obtener solo los números pares del array
    // filter() es un método de los arreglos en JavaScript que crea un nuevo array 
    // con todos los elementos que cumplen con la condición especificada en la función proporcionada.
    // En este caso, se está usando para crear un nuevo array que contenga solo los números pares.
    // num => num % 2 === 0:

    // Esta es una función de flecha que actúa como un predicado para el método filter().
    // num es el parámetro que representa cada elemento del array arr a medida que se itera sobre él.
    // num % 2 === 0 es una expresión que verifica si num es par. 
    // % es el operador módulo, que devuelve el residuo de la división de num entre 2.
    // Si el residuo es 0 (es decir, num % 2 === 0), significa que num es un número par, y la condición es verdadera.
    
    return arr.filter(num => num % 2 === 0);
}



/* function(num){

    return num % 2 === 0

}  */

// Llama a la función con un array y muestra el resultado en la consola
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // Salida: [2, 4, 6]
