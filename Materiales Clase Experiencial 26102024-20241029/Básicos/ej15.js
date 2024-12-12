// Define una función llamada "contieneValor" que toma dos parámetros: "arr" (un array) y "valor" (el valor a buscar)
function contieneValor(arr, valor) {
    // Usa el método "includes" para verificar si el valor está en el array y devuelve el resultado
    return arr.includes(valor);
}

// Llama a la función con un array y un valor y muestra el resultado en la consola
console.log(contieneValor([1, 2, 3, 4], 3)); // Salida: true
console.log(contieneValor([1, 2, 3, 4], 5)); // Salida: false

