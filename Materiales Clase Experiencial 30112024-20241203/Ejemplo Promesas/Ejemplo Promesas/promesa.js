// 1. Crear la función esperar que devuelva una promesa
function esperar(segundos) {
    return new Promise((resolve, reject) => {
      if (segundos <= 0) {
        reject("El número de segundos debe ser mayor que 0");
      } else {
        setTimeout(() => {
          resolve(`¡El tiempo de espera de ${segundos} segundos ha terminado!`);
        }, segundos * 1000);
      }
    });
  }
  
  // 2. Llamar a la función esperar
  esperar(3)  // Espera 3 segundos
    .then((mensaje) => {
      console.log(mensaje);  // Si la promesa se resuelve, muestra el mensaje
    })
    .catch((error) => {
      console.log(error);  // Si la promesa se rechaza, muestra el error
    });
  