const inputAgregar = document.querySelector("#inputAgregar")
const btnAgregar = document.querySelector("#btnAgregar")
const spanTotalTareas = document.querySelector("#totalTareas")
const spanTareasRealizadas = document.querySelector("#totalTareasRealizadas")
const listaDeTareas = document.querySelector("#listaDeTareas")


const tareas = [
    {id: 01, nombre: "&nbsp;2kg de manzanas", completado: false},
    {id:02, nombre: "&nbsp;arroz", completado: false},
    {id:03, nombre: "&nbsp;3kg de papas", completado: false}
]

tareas.forEach(tarea => {listaDeTareas.innerHTML += `<li> ${tarea.id} ${tarea.nombre}<button onclick="borrar(${tarea.id})"> x </button> <button onclick="checkearTarea(${tarea.id})"> Completar Tarea </button> </li> `
spanTotalTareas.innerHTML = tareas.length})

function renderTareas(){
    let html = ""
    for(let tarea of tareas){
        html += `<li> ${tarea.id} ${tarea.nombre} <button onclick="borrar(${tarea.id})"> x </button> <button onclick="checkearTarea(${tarea.id})"> Completar Tarea </button></li>`    
    }
    listaDeTareas.innerHTML = html
    spanTotalTareas.innerHTML = tareas.length
    spanTareasRealizadas.innerHTML = tareas.filter((tarea) => tarea.completado === true).length
}

btnAgregar.addEventListener("click", () => {
    const valorInput = inputAgregar.value
    tareas.push({id: Date.now(), nombre: valorInput, completado: false})
    inputAgregar.value = ""

    
    renderTareas();
}) 

function borrar(id){
    const index = tareas.findIndex((tarea => tarea.id == id))
    tareas.splice(index,1)
    spanTotalTareas.innerHTML = tareas.length
    renderTareas();  
}

function checkearTarea(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas[index].completado = true
    renderTareas()
}
