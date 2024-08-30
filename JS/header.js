'use strict'

/////////////////////Animacion al presionar menu/////////////////////

// escucha de click para cualquier parte de la pantalla en mobile
addEventListener('click',()=>{
	// hacer desaparecer menu si estamos en mobile y no se esta cambiando el menu y se esta mostrando 
	if (!mq.matches && cambio && menu.classList.contains('aparecerHorizontal')) desaparecerMenu()
})

// escucha de click para el boton del menu 
const botonMenu = document.getElementById('button-menu')
botonMenu.addEventListener('click',e=>{
	// para que no se escuche el click en toda la pantalla
	e.stopPropagation()

	// Aparecer menu si no se esta mostrando ya y si no se esta cambiando el menu
	if (!menu.classList.contains('aparecerHorizontal') && cambio) aparecerMenu()
	//Desaparecer menu si se da click el boton
	else if (cambio) desaparecerMenu()
})

// para evitar que se guarde el menu si damos click en el mismo
const menu = document.querySelector('.header__nav-ul')
menu.addEventListener('click',e=>e.stopPropagation())

// variable para detectar si ya se ha terminado la animacion del menu 
let cambio = true

// Funcion para cambair clase
const cambiarClase = (item,agregar,remover)=>{
	// agregamos una clase
	item.classList.add(agregar)
	// borramos otra
	item.classList.remove(remover)
}

// Funcion para aparecer menu cambiando el icono
const aparecerMenu = ()=>{
	cambiarClase(menu,'aparecerHorizontal','desaparecerHorizontal')
	cambiarImg('IMG/flecha.png')
}

// Funcion para desaparecer menu cambiando el icono
const desaparecerMenu = ()=>{
	cambiarClase(menu,'desaparecerHorizontal','aparecerHorizontal')
	cambiarImg('IMG/menu.png')
}

// funcion para cambiar el icono del boton
const cambiarImg = cadena=>{	
	// Seleccionamos la imagen
	let img = botonMenu.firstChild	

	// Cambiar la clase para la animacion de giro la img del boton
	if (img.classList.contains('girarNormal')) cambiarClase(img,'girarReversa','girarNormal')
	else cambiarClase(img,'girarNormal','girarReversa')

	// Se iguala a false, para que durante este la animacion no su pueda cambiar el estado del menu 
	cambio = false	
	// cuando se acabe la animacion
	setTimeout(()=>{			
		botonMenu.firstChild.src = cadena					
		cambio=true
	}, 700)	
}
