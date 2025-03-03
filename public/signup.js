import { getUsers, postUsers } from "./services/llamados.js"

const signupForm = document.getElementById('button')
signupForm.addEventListener('click', async(e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const usuario ={
        "nombreUsuario":name,
        "claveUsuario":password,
        "correoUsuario":email,
        "rolUsuario":"estudiante"
    }
    await postUsers(usuario,"users")
    alert('Registro Exitoso!')
    window.location.href = 'login.html'

})