
//FUNCIONES
function Estudiante(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.calificaciones = [];
    
}

function mostrarInfoEstudiante(Estudiante){
    //Validación de si es objeto
    if(typeof Estudiante !== 'object'){return 'Tiene que introducir un objecto estudiante\n'}
    const info = `Datos del estudiante: \n - Nombre: ${Estudiante.nombre} \n - Edad: ${Estudiante.edad} \n - Calificaciones: ${Estudiante.calificaciones}\n`
    return info
    }

function calcularPromedio(Estudiante){
    //Validación de si es objeto
    if(typeof Estudiante !== 'object'){return 'Tiene que introducir un objecto estudiante\n'}

    //Calculamos la suma de total las calificaciones del array
    const total = Estudiante.calificaciones.reduce((total, califacion) => total + califacion, 0);
    //Calculamos la cantidad de calificaciones que hay en el array
    const numeroCalificaciones = Estudiante.calificaciones.length;
    //Calculamos el promedio haciendo la siguiente división
    const promedio = (total / numeroCalificaciones);
    return `El promedio de las calificaciones de ${Estudiante.nombre} es: ${promedio}\n`
}

function agregarCalifacion(Estudiante, calificacion){
   //Validación de si es objeto
    if(typeof Estudiante !== 'object'){return 'Tiene que introducir un objecto estudiante\n'}
    //Validación de si la calificacion se encuentra en el rango requerido
    if(calificacion < 0 || calificacion > 10){
        return 'La calificacion debe estar entre 0 y 10\n '
    }
    Estudiante.calificaciones.push(calificacion)
    return 'Calificación añadida!'
}

//Prueba de la APP
const estudiante1 = new Estudiante('Miguel', 23);
const estudiante2 = new Estudiante('David', 18);
const estudiante3 = new Estudiante('Angel', 20);
const estudiante4 = new Estudiante('Luisa', 22);
const estudiante5 = new Estudiante('Johanna', 19);


//Añadimos calificaciones a todos menos a uno, pero para que hacerlo manual si tenemos la función random

for (let index = 0; index < 5; index++) {
    console.log(agregarCalifacion(estudiante1, Math.round(Math.random()*10)))
    console.log(agregarCalifacion(estudiante2, Math.round(Math.random()*10)))
    console.log(agregarCalifacion(estudiante3, Math.round(Math.random()*10)))
    console.log(agregarCalifacion(estudiante4, Math.round(Math.random()*10)))
}

//Mostramos la información de cada uno

console.log(mostrarInfoEstudiante(estudiante1))
console.log(mostrarInfoEstudiante(estudiante2))
console.log(mostrarInfoEstudiante(estudiante3))
console.log(mostrarInfoEstudiante(estudiante4))
console.log(mostrarInfoEstudiante(estudiante5))


//Calculamos el promedio de cada uno

console.log(calcularPromedio(estudiante1))
console.log(calcularPromedio(estudiante2))
console.log(calcularPromedio(estudiante3))
console.log(calcularPromedio(estudiante4))
console.log(calcularPromedio(estudiante5))

