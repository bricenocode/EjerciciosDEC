//Ejercicio 2

const datos = {
    nombre: 'Miguel',
    edad: 23,
    curso: 'DAW'
}

const obtenerDatos = (datos) => {
    return new Promise((resolve, reject) => {
        if(typeof datos !== 'object'){
            reject('El elemento dado no es un objeto de datos')
        }else{
            console.log('Obteniedo Datos...')
            setTimeout( () => {
                resolve(datos)
            },2000)
        }

    })
}

const procesarDatos = (datosAsincronos) => {
    return new Promise( (resolve, reject) => {
        if(typeof datosAsincronos !== 'object'){
            reject('El elemento dado no es un objeto de datos')
        }else{
            console.log('Procesando datos...')
            datosAsincronos['nombre'] = 'Miguel David';
            setTimeout( () => {
                resolve(datosAsincronos)
            }, 1000)
        }
    })
}

obtenerDatos(datos)
    .then( res => procesarDatos(res))
    .then( res => console.log(res))
    .catch( err => console.log(err))
