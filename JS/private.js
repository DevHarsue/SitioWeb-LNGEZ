'use strict'

// Mostramos los li privados
const liPrivate = document.querySelectorAll('.private')
liPrivate[0].style.display = "block"
liPrivate[1].style.display = "block"

// Boton de usuario
const botonUsuarioSesion = document.getElementById('inicio-sesion')
//Cambiar texto del boton a el nombre de usuario
botonUsuarioSesion.textContent = localStorage.getItem(sessionStorage.getItem('email')).toString()
// Escucha de click para enviar a cambiar datos
botonUsuarioSesion.addEventListener('click',()=>window.location.assign('changeDates.html'))

const botonCerrar = document.getElementById('cerrar-sesion')
// Mostrar boton cerrar sesion
botonCerrar.style.display='inline'
// al presionar boton de cerrar sesion
botonCerrar.addEventListener('click',()=>{	
	window.location.assign('index.html')
	sessionStorage.removeItem('private')
	sessionStorage.removeItem('email')
})