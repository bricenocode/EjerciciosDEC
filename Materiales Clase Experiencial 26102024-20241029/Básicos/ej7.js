// Define una función llamada "convertirNegativo" que toma un parámetro "num" (un número)
function convertirNegativo(num) {

    // Si el número es positivo, cambia su signo multiplicándolo por -1, si no, lo devuelve tal cual
    //num > 0 si el valor de num es mayor que cero (es decir, si es un número positivo)
    // Operador Ternario: ? : , La sintaxis del operador ternario es condición ? valor_si_verdadero : valor_si_falso.
    // Si la condición es verdadera, se ejecuta el primer valor; si es falsa, se ejecuta el segundo valor.
    // Resultado si la condición es verdadera: -num
    // Si num es mayor que 0 (positivo), se multiplica por -1 para cambiar su signo y se devuelve este nuevo valor. 
    // Por ejemplo, si num es 5, se devolverá -5.
    // Resultado si la condición es falsa: num
    // Si num no es mayor que 0 (es decir, es cero o negativo), simplemente se devuelve el valor de num tal como está. 
    //Por ejemplo, si num es -3 o 0, se devolverá -3 o 0 respectivamente.


    return num > 0 ? -num : num;

}

// Llama a la función con un número y muestra el resultado en la consola
console.log(convertirNegativo(5)); // Salida: -5
console.log(convertirNegativo(-3)); // Salida: -3
console.log(convertirNegativo(0)); // Salida: 0
