// Ya no es necesario requerir node-fetch en Node.js 17+
async function obtenerUsuarios() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
      if (respuesta.ok) {
        let datos = await respuesta.json();
        // Mostramos los datos en la consola
        console.log("Usuarios obtenidos:", JSON.stringify(datos, null, 2));
      } else {
        console.log("Error de red, código:", respuesta.status);
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  }
  
  async function enviarDatos() {
    const datosParaEnviar = {
      nombre: "Juan Pérez",
      email: "juan@ejemplo.com"
    };
  
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosParaEnviar)
      });
  
      if (respuesta.ok) {
        let datos = await respuesta.json();
        console.log("Datos enviados correctamente:", JSON.stringify(datos, null, 2));
      } else {
        console.log("Error de red, código:", respuesta.status);
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  }
  
  obtenerUsuarios();
  enviarDatos();
  
  