//Ejercicio 1
const temporizador = (milisegundos) => {
        return new Promise( (resolve, reject) => {
                if(milisegundos < 0 ){
                    reject('El numero es incorrecto, no puede ser negativo');
                }else {
                    setTimeout(() => {
                        resolve('El temporizador ha finalizado!')
                    }, milisegundos)
                }
    })
}
//Numero positivo
temporizador(2500)
    .then( res => console.log(res))
    .catch( err => console.log(err))
//Numero negativo
temporizador(-1000)
    .then( res => console.log(res))
    .catch( err => console.log(err))

