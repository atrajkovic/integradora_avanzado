nombre = document.getElementById('nombre')
apellido = document.getElementById('apellido')
telefono = document.getElementById('telefono')
mail = document.getElementById('email')
mensaje = document.getElementById('mensaje')
enviar = document.getElementById('enviar')

nombre.addEventListener('input', validarNombre, false)
apellido.addEventListener('input', validarApellido, false)
telefono.addEventListener('input', validarTelefono, false)
mail.addEventListener('input', validarMail, false)
mensaje.addEventListener('input', validarMensaje, false)
enviar.addEventListener('click', validarTodo, false)

function validarTodo(){
    validarNombre()
    validarApellido()
    validarMensaje()
    validarTelefono()
    validarMail()
}

function validarNombre(){
    if (nombre.value == ""){
        nombre.setCustomValidity('El nombre no puede quedar vacío')
        nombre.style.borderBottom = "2px solid #f54242"
    } else{
        nombre.setCustomValidity('')
        nombre.style.borderBottom = "2px solid #54f542"
    }
}

function validarApellido(){
    if (apellido.value == ''){
        apellido.setCustomValidity('El apellido no puede quedar vacío')
        apellido.style.borderBottom = "2px solid #f54242"
    } else{
        apellido.setCustomValidity('')
        apellido.style.borderBottom = "2px solid #54f542"
    }
}

function validarMail(){
    if (mail.value == ''){
        mail.setCustomValidity('El correo electrónico no puede quedar vacío')
        mail.style.borderBottom = "2px solid #f54242"
    } else{
        mail.setCustomValidity('')
        mail.style.borderBottom = "2px solid #54f542"
    }
}
function validarMensaje(){
    if (mensaje.value.length <= 20){
        mensaje.setCustomValidity('El mensaje debe contener mas de 20 caracteres')
        mensaje.style.border = "2px solid #f54242"
    } else{
        mensaje.setCustomValidity('')
        mensaje.style.border = "2px solid #54f542"
    }
}

function validarTelefono(){
    formato = /[0-9]/

    if (telefono.value == ""){
        telefono.setCustomValidity('El teléfono no puede quedar vacío')
        telefono.style.borderBottom = "2px solid #f54242"
    } else if (telefono.value.match(formato)) {
        telefono.setCustomValidity('')
        telefono.style.borderBottom = "2px solid #54f542"
    } else {
        telefono.setCustomValidity('El teléfono no puede contener carácteres no numéricos')
        telefono.style.borderBottom = "2px solid #f54242"
        }
}