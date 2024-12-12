//Ejercicios Medios de Arrays
//1

function contarFrecuenciaCaracteres(cadena) {
  const frecuenciaCaracteres = {};
  
  for (const caracter of cadena) {
    if (frecuenciaCaracteres[caracter]) {
      frecuenciaCaracteres[caracter]++;
    } else {
      frecuenciaCaracteres[caracter] = 1;
    }
  }

  return frecuenciaCaracteres;
}
console.log('Ejercicio 1:\n')
const cadena = "Universidad Alfonso el Sabio X"
console.log(contarFrecuenciaCaracteres(cadena))

//2
console.log('Ejercicio 2:\n')
function buscarElemento(arrayObjetos, valorBuscado) {
  return arrayObjetos.find(objeto => Object.values(objeto).includes(valorBuscado)) || null;
}
const arrayObjetosEjemplo = [
  { id: 1, nombre: 'Miguel' },
  { id: 2, nombre: 'Luz' },
  { id: 3, nombre: 'Luisa' }
];
console.log(buscarElemento(arrayObjetosEjemplo, 'Luisa'))

//3
function ordenarArrayNumeros(arrayNumeros) {
  return arrayNumeros.slice().sort((a, b) => a - b);
}
console.log('Ejercicio 3:\n')
const numeros = [5, 3, 8, 1, 2,2,5];
console.log(ordenarArrayNumeros(numeros));


//4
function filtrarNumerosPares(arrayNumeros) {
  return arrayNumeros.filter(numero => numero % 2 === 0);
}
console.log('Ejercicio 4:\n')
console.log(filtrarNumerosPares(numeros))

//5
function extraerNombres(arrayObjetos) {
  return arrayObjetos.map(objeto => objeto.nombre);
}

console.log('Ejercicio 5:\n')
console.log(extraerNombres(arrayObjetosEjemplo));

//6
function sumarElementos(arrayNumeros) {
  return arrayNumeros.reduce((suma, numero) => suma + numero, 0);
}
console.log('Ejercicio 6:\n')
console.log(sumarElementos(numeros))

//7
const coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  año: 2020,
  detalles() {
    console.log(`Coche: ${this.marca} ${this.modelo} (${this.año})`);
  }
};

console.log('Ejercicio 7:\n')
coche.detalles();
coche.año = 2021;

//8
  const boton = document.getElementById('botonCambiar')
  const campo = document.getElementById('campoTexto')
  boton.addEventListener('click', () => {
    campo.value = 'Texto Cambiado'
  })

//9
setTimeout(() => {
  console.log('Ejercicio 9:\n')
  console.log("Este mensaje aparece después de 3 segundos");
}, 3000);


//10
function sumarValores(arrayObjetos) {
  return arrayObjetos.reduce((suma, objeto) => suma + objeto.valor, 0);
}
const valores = [
  { valor: 5 },
  { valor: 10 },
  { valor: 15 }
];
console.log('Ejercicio 10:\n')
console.log(sumarValores(valores))

//11
function contarPalabras(cadena) {
  const palabras = cadena.trim().split(/\s+/);
  return palabras.length;
}
console.log('Ejercicio 11:\n')
console.log(contarPalabras(cadena))

//12
function todosPares(arrayNumeros) {
  return arrayNumeros.every(numero => numero % 2 === 0);
}

console.log('Ejercicio 12:\n')
console.log(todosPares(numeros))

function alMenosUnPar(arrayNumeros) {
  return arrayNumeros.some(numero => numero % 2 === 0);
}

//13
function contarElementos(arrayNumeros) {
  const contadorElementos = {};

  arrayNumeros.forEach(numero => {
    contadorElementos[numero] = (contadorElementos[numero] || 0) + 1;
  });

  return contadorElementos;
}

console.log('Ejercicio 12:\n')
console.log(contarElementos(numeros))