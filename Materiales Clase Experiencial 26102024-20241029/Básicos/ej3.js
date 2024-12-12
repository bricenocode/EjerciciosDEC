// Define una función llamada "esPar" que toma un parámetro "num" (un número)
function esPar(num) {
    // Retorna "true" si el número es divisible por 2, es decir, si su residuo al dividirlo entre 2 es 0
    return num % 2 === 0;
}

// Llama a la función con números y muestra los resultados en la consola
console.log(esPar(4)); // Salida: true
console.log(esPar(7)); // Salida: false
