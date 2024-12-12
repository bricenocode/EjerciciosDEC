async function programaPrincipal() {
  try {
    // Datos que vamos a enviar con la petición POST
    const datosParaEnviar = {
      nombre: "Juan Pérez",
      email: "juan@ejemplo.com"
    };

    // Realiza una petición POST a la URL especificada
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", // Indicamos que es una solicitud POST
      headers: {
        "Content-Type": "application/json", // Especificamos que el contenido es JSON
      },
      body: JSON.stringify(datosParaEnviar) // Convertimos los datos a formato JSON
    });

    // Comprobamos si la petición fue exitosa
    if (respuesta.ok) {
      // Si la respuesta es correcta, convertimos los datos a JSON
      let datos = await respuesta.json();
      console.log("Datos recibidos:", datos);
    } else {
      // Si hay un error en la respuesta
      console.log("Error de red, código:", respuesta.status);
    }
  } catch (error) {
    // Capturamos errores de red u otros errores que puedan ocurrir
    console.log("Error en la solicitud:", error);
  }
}

// Llamamos a la función principal
programaPrincipal();
