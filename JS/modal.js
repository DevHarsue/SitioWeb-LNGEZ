'use strict'

// Seleccionamos el mensaje del modal
const mensajeModal = document.querySelector('.modal').firstElementChild.firstElementChild
// Boton del modal
const botonModal = document.getElementById('boton-ok')

// Seleccionamos el modal
const modal = document.querySelector('.modal')

// Funcion para aparecer modal con animacion
const aparecerModal = mensaje=>{
	modal.style.display='flex'
	modal.classList.add('aparecerTransparencia')
	modal.classList.remove('desaparecerTransparencia')
	mensajeModal.textContent=mensaje
}

// Funcion para cerrar modal con animacion
const cerrarModal = (direccion=null)=>{
	modal.classList.add('desaparecerTransparencia')
	modal.classList.remove('aparecerTransparencia')	

	setTimeout(()=>modal.style.display='none',300)
	
	if (direccion!=null) window.location.assign(direccion)
}