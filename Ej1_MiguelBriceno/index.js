//Realizado por Miguel Briceño

/*
*  Enunciado:
* - Tener una función para agregar libros a una lista.
* - Mostrar todos los libros disponibles.
* - Buscar un libro por su título.
* - Calcular el precio total de todos los libros.
* - Permitir que el cliente aplique un descuento en base a una condición.
* - Incluir un objeto Libro y una clase Biblioteca.
* */

// Clase Biblioteca
class Biblioteca {
    constructor() {
        this.libros = []; // Usamos libros en plural para la lista
    }

    //Método para añadir libros
    aniadirLibro(libro) {
        this.libros.push(libro);
        console.log(libro.titulo + ' añadido!');
    }

    //Método para mostrar los libros
    mostrarLibros() {
        if (this.libros.length > 0) {
            console.log("Lista de libros:");
            this.libros.forEach((libro, i) => {
                console.log(`${i + 1}. ${libro.titulo} || Precio: ${libro.precio}€`);
            });
        } else {
            console.log('No hay libros. Añade uno!');
        }
    }

    // Método para buscar un libro por su título
    buscarLibro(titulo) {
        const libroEncontrado = this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (libroEncontrado) {
            console.log(`Información del libro:\n Título: ${libroEncontrado.titulo} \n Precio: ${libroEncontrado.precio}€`);
        } else {
            console.log(`No se encontró el libro ${titulo}. Si quieres, añádelo!`);
        }
    }

    //Método para calcular el precio total de todos los libros
    precioTotalLibros() {
        let total = 0;

        for (let i = 0; i < this.libros.length; i++) {
            total += this.libros[i].precio;
        }

        if (total) {
            return total.toFixed(2);
        } else {
            return 'No hay libros. Añádelos!';
        }
    }

    //Método para aplicar un descuento según una condición
    aplicarDescuento(titulo) {
        const libroEncontrado = this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (!libroEncontrado) {
            console.log(`El libro no existe, no puedo aplicar un descuento.`);
            return;
        }
        const precio = libroEncontrado.precio;
        let porcentaje = 0;
        let precioRebajado = 0;

        if (precio >= 50) {
            porcentaje = 25;
        } else if (precio >= 30) {
            porcentaje = 20;
        } else {
            porcentaje = 10;
        }

        precioRebajado =( precio - (precio * (porcentaje / 100))).toFixed(2);
        console.log(`El libro "${libroEncontrado.titulo}" con el precio de ${libroEncontrado.precio}€ tiene un descuento del ${porcentaje}%, quedando en ${precioRebajado}€.`);
    }
}

//Creamos objetos de Libros
const libro1 = {
    titulo: 'Código Limpio',
    precio: 20.59
};

const libro2 = {
    titulo: 'Javascript: The Definitive Guide',
    precio: 53.68
};

const libro3 = {
    titulo: 'El señor de los anillos',
    precio: 8.6
};

// Ejemplo de uso de la clase Biblioteca

// Crear una instancia de la clase Biblioteca
const miBiblioteca = new Biblioteca();

// Agregar libros a la biblioteca
miBiblioteca.aniadirLibro(libro1);
miBiblioteca.aniadirLibro(libro2);
miBiblioteca.aniadirLibro(libro3);

// Mostrar todos los libros
miBiblioteca.mostrarLibros();

// Buscar un libro
miBiblioteca.buscarLibro('Harry Potter');
miBiblioteca.buscarLibro('javaScript: ThE DeFiniTive GuIdE');

// Calcular el precio total de los libros
console.log('Precio total de los libros:', miBiblioteca.precioTotalLibros());

// Aplicar un descuento a un libro
miBiblioteca.aplicarDescuento('Harry Potter');
miBiblioteca.aplicarDescuento('Código LiMpIO');
