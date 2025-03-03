import { postUsers } from "./services/llamados.js";

const fecha = new Date()


bookingForm.addEventListener("click", async function(event) {
    event.preventDefault(); 

    const studentName = document.getElementById("studentName").value;
    const email = document.getElementById("email").value;
    const Consults = document.getElementById("Consults").value;

    const consulta = {
        "nombreEstudiante": studentName,
        "correoEstudiante": email,
        "consultas": Consults,
    
        
        "horaConsulta": fecha.getHours()+":"+fecha.getMinutes(),
        "fechaConsulta": fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()
    }

    if (studentName && email) {
        await postUsers(consulta,"consultas")
        document.getElementById("responseMessage").innerHTML = `<p class="success">Consulta reservada con éxito para el ${consulta}+${fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()} a las ${fecha.getHours()+":"+fecha.getMinutes()}. ¡Gracias por tu reserva, ${studentName}!</p>`;
    } else {
        document.getElementById("responseMessage").innerHTML = "<p class='error'>Por favor, completa todos los campos del formulario.</p>";
    }
});
