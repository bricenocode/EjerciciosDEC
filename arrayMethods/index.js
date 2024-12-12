
/**/
const letras = ['a','b','c','d','e','f'];
let numeros = [0,1,2,3,4,5,6,7,8,9,10];
const cadena = 'JavaScript'



console.log('Array methos:\n')
const method1 = numeros.push(256);
console.log(numeros +' linea1 ' + typeof numeros);
console.log('\n')
const method2 = numeros.length;
console.log(method2+' linea2 ' + typeof method2);
console.log('\n')
const method3 = numeros.join(' ');
console.log(method3+' linea3 ' + typeof method3);
console.log('\n')
const method4 = numeros.map( numero => numero);
console.log(method4+' linea4 ' + typeof method4);
console.log('\n')
const method5 = numeros.filter( numero => numero !== 3);
console.log(method5+' linea5 ' + typeof method5);
console.log('\n')
const method6 = numeros.concat(letras);
console.log(method6+' linea6 ' + typeof method6);
console.log('\n')
for( const [clave,valor] of Object.entries(numeros)){
    console.log( `${clave} - ${valor}`+' linea7')
}
console.log('\n')
const method7 = numeros.unshift(235);
console.log(numeros+' linea7 ' + typeof numeros);
console.log('\n')
const method8 = numeros.fill('-', 0, 3);
console.log(numeros+' linea8 ' + typeof numeros);
console.log('\n')
const method9 = numeros.find( numero => numero < 5)
console.log(method9+' linea9 ' + typeof method9);
console.log('\n')
 numeros = [0,1,2,3,4,5,6,7,8,9,10];
const method10 = numeros.reduce( (total, numero) => total + numero ,0)
console.log(method10+' linea10 ' + typeof method10);
console.log('\n')