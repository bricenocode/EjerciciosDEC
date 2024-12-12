const formulario = document.querySelector('#formulario');
const mensajesContainer = document.querySelector('.messages'); 

document.addEventListener('DOMContentLoaded', () => {
        recuperarMensajes();
        formulario.addEventListener('submit', insertarMensaje);
        
    });
    
    const insertarMensaje = (e) => {
        e.preventDefault();
    
        const id = nextID();
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;
        
        const mensajes = {
            id,
            nombre,
            correo,
            mensaje
        };
    
        guardarMensaje(mensajes);
        imprimirMensaje(mensajes);
    
        formulario.reset();
    }
    
    const nextID = () => {
        let lastId = parseInt(localStorage.getItem("lastId")) || 0;
        lastId++;
        localStorage.setItem("lastId", lastId);
        return lastId;
    }
    
    const guardarMensaje = (mensajes) => {
        let mensajesRecuperados = JSON.parse(localStorage.getItem('mensajes')) || [];
        mensajesRecuperados.push(mensajes);
        localStorage.setItem('mensajes', JSON.stringify(mensajesRecuperados));
    }
    
    const imprimirMensaje = ({id, nombre, correo, mensaje}) => {
        const containerMessages = document.createElement('div');
        containerMessages.classList.add('mensaje');
        containerMessages.setAttribute('data-id', id);
    
        containerMessages.innerHTML = `
            <div>
                <p><span>Nombre: </span>${nombre}</p>
                <p><span>Correo: </span>${correo}</p>
                <p><span>Mensaje: </span>${mensaje}</p>
            </div>
            <div>
                <button class="buttonEditar">Editar</button>
                <button class="buttonEliminar">Eliminar</button>
            </div>
        `;
    
        mensajesContainer.appendChild(containerMessages);
    
        // Asignar eventos a los botones creados dinámicamente
        containerMessages.querySelector('.buttonEliminar').addEventListener('click', () => eliminarMensaje(id));
        containerMessages.querySelector('.buttonEditar').addEventListener('click', () => editarMensaje(id));
    }
    
    function recuperarMensajes(){
        let mensajesRecuperados = JSON.parse(localStorage.getItem('mensajes')) || [];
        mensajesRecuperados.forEach(mensaje => {
            imprimirMensaje(mensaje);
        });
    }
    
    function eliminarMensaje(id) {
        let mensajesRecuperados = JSON.parse(localStorage.getItem('mensajes')) || [];
        mensajesRecuperados = mensajesRecuperados.filter(mensaje => mensaje.id !== id);
        localStorage.setItem('mensajes', JSON.stringify(mensajesRecuperados));
    
        // Eliminar el elemento del DOM
        const mensajeElemento = document.querySelector(`[data-id='${id}']`);
        if (mensajeElemento) {
            mensajesContainer.removeChild(mensajeElemento);
        }
    }
    
    function editarMensaje(id) {
        // Puedes agregar lógica para editar el mensaje aquí
        console.log(`Editando mensaje con ID: ${id}`);
    }
    