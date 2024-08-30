'use strict'

// Animacion label del input
const inputCambio = document.getElementById('input-cambio')
inputCambio.addEventListener('click',e=>animacionLabel(e))
inputCambio.addEventListener('keyup',e=>animacionLabel(e))

// Animacion label de input de clave
const inputClave = document.getElementById('input-cambio-clave')
inputClave.addEventListener('click',e=>animacionLabel(e))
inputClave.addEventListener('keyup',e=>animacionLabel(e))

// boton atras
const botonAtras = document.querySelector('.boton-atras')
botonAtras.addEventListener('click',()=>window.location.assign('index.html'))

//boton ok del modal mensaje 
botonModal.addEventListener("click",()=>{
	if(mensajeModal.classList.contains('green')) cerrarModal('changeDates.html')
	cerrarModal()
})

// obtener usuario, correo y clave
let usuario = localStorage.getItem(sessionStorage.getItem('email'))
let correo = sessionStorage.getItem('email')
let clave = localStorage.getItem(usuario)

///////////////////////Dar datos a los h6////////////////////
document.getElementById('usuario').textContent=usuario
document.getElementById('correo').textContent=correo
document.getElementById('clave').textContent=''
for (let i = 0; i < clave.length; i++) {
	document.getElementById('clave').textContent+='*'
}