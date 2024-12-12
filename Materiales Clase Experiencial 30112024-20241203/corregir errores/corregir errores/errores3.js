let persona = {
    nombre: "Juan",
    edad: 30
  };
  
  // Acceder correctamente a una propiedad existente
  if (persona.direccion) {
    console.log(persona.direccion.calle);
  } else {
    console.log("La dirección no está definida.");
  }
  