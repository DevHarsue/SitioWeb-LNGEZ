'use strict'

// si se esta iniciado sesion se muestran los li privados (simbolos y procesos)
const liPrivate = document.querySelectorAll('.private')
if (sessionStorage.getItem('private')==='true') {
	liPrivate[0].style.display = "block"
	liPrivate[1].style.display = "block"
}

// Al presionar boton acceder dependiendo de si esta o no iniciado sesion
const botonSesion = document.getElementById('inicio-sesion')
botonSesion.addEventListener('click',()=>{	
	window.location.assign('session.html')
	if (sessionStorage.getItem('private')==='true') window.location.assign('changeDates.html')
})

// Al presionar boton registro
const botonRegistro = document.getElementById('btn-registro')
botonRegistro.addEventListener('click',()=>window.location.assign('register.html'))

// Escucha de click para el boton cerrar sesion
const botonCerrar = document.getElementById('cerrar-sesion')
botonCerrar.addEventListener('click',()=>{	
	window.location.assign('index.html')
	sessionStorage.removeItem('private')
	sessionStorage.removeItem('email')
})

// si se esta iniciado session se cambian los botonoes del header
if (sessionStorage.getItem('private')==='true') {
	// Le cambiamos el texto de "acceder" a el "nombre de usuario"
	botonSesion.textContent = localStorage.getItem(sessionStorage.getItem('email')).toString()
	// Mostramos el boton de cerrar sesion
	botonCerrar.style.display='inline'
	// Quitamos el boton de registro
	botonRegistro.style.display='none'	
}
// Si no estamos iniciado sesion quitamos el boton de cerrar sesion
else botonCerrar.style.display='none'
