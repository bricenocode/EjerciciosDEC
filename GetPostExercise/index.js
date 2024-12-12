

const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');
const title = document.getElementById('title');
const URL = 'https://jsonplaceholder.typicode.com/todos'
addEventListener('DOMContentLoaded', () => {
    obtenerTareas()
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        enviarTarea()
        formulario.reset()
    })
})

async function obtenerTareas(){

    const respuesta = await fetch(URL)
    if(respuesta.ok){
        const datos = await respuesta.json();
        datos.map( dato => mostrarTareas(dato))
    }else{
        console.log("Error de estado: ", respuesta.status);
    }
}

function mostrarTareas(dato){
    const tarea = document.createElement('li')
    tarea.innerHTML = `
        <p>Tarea ${dato.id} - ${dato.title} || ${dato.completed ? 'Completado' : 'No completado'}</p>
    `;
    lista.appendChild(tarea);
}

async function enviarTarea(){
    const tareaNueva = {
        title: title.value,
        completed: false
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tareaNueva),
    };

    try{
        const respuesta = await fetch(URL,options)
        if(respuesta.ok){
            const datos = await respuesta.json();
            mostrarTareas((datos))
        }else{
            console.log("Error de estado: ", respuesta.status);
        }
    }catch(error){
        console.log(error)
    }
}