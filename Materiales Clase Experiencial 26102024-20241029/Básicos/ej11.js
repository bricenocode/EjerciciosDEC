// Define una función llamada "numeroMasGrande" que toma un parámetro "arr" (un array)
function numeroMasGrande(arr) {
    // Usa el método "Math.max" junto con el operador "..." para encontrar el valor máximo del array
    // utiliza el método Math.max() en JavaScript para encontrar el valor máximo en un conjunto de números
    // ...arr: es una característica de JavaScript que permite expandir (o "descomponer") un iterable, 
    // como un array o un objeto, en elementos individuales. 
    // trabaja con funciones que esperan recibir varios argumentos, como es el caso de Math.max()

    return Math.max(...arr);
}

// Llama a la función con un array y muestra el resultado en la consola
console.log(numeroMasGrande([1, 5, 3, 9, 2])); // Salida: 9
