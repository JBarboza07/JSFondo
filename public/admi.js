import { getUsers } from "./services/llamados.js";
const mostrar = document.getElementById("mostrar")
const todasLasConsultas =  await getUsers("consultas")
const nombre = document.createElement("p")
todasLasConsultas.forEach(element => {
    console.log(element);
    nombre.textContent = element.nombreEstudiante
    mostrar.appendChild(nombre)
    
});
