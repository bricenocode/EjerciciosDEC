// Define la función "maximo" que toma un array "numeros" como parámetro
function maximo(array) {
    // Usa el método "reduce" para encontrar el número máximo en el array

    // La función reduce() es una función de array que se utiliza para reducir un array a un solo valor.
    // Esta es una expresión condicional (también conocida como el operador ternario). 
    // Evalúa si num (el número actual) es mayor que max (el máximo encontrado hasta ahora).
    // Si num es mayor, devuelve num. De lo contrario, devuelve max.
    // Esta parte de la función está buscando el número más grande entre el máximo acumulado y el número actual.
    // array[0]: Es el primer elemento del array, que se usa como el valor inicial del acumulador max. 
    // Esto significa que al comienzo de la reducción, max se establece en el primer número del array.
    return array.reduce((max, num) => (num > max ? num : max), array[0]);
}

// Encuentra el máximo en el array dado
console.log(maximo([3, 7, 2, 5, 10, 1])); // Salida: 10
console.log(maximo([3, 7, 2, 2, 10, 1])); // Salida: 10


//reduce (funacionAcumuladora, valorInicial)
    //acumulador que almacena el valor acumulado. De de cada iteración
    //valorInical (opcional): que le das al acumulador 


/* function maximo(array) {

    let max = array[0]

    for (let i = 0; i < array.length; i++) {

        if (array[i] > max) {

            max = array[i]

        }

    }

    return max

} */