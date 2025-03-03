import { getUsers } from "./services/llamados.js"
const loginForm = document.getElementById('button')

loginForm.addEventListener('click', async(e)=>{
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const Users = await getUsers("users")
    const validUser = Users.find(user => user.correoUsuario === email && user.claveUsuario === password)
    if(!validUser){
        return alert('Usuario o contraseña incorrectos!')
    }
 
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'tickets.html'

})