'use strict'

/////////////////////Media/////////////////////

// Este script configura la pagina si se cambia la resolucion despues de ser cargada

// La condicion es como en css
const mq = matchMedia('(min-width:768px)')

// Seleccionamos el boton para abrir el menu
const containerBotonMenu = document.querySelector('.container-button-menu')

mq.addEventListener('change',()=>{
	//si es escritorio
	if (mq.matches) {
		// quitamos el boton para abri el menu
		containerBotonMenu.style.display='none'
		// Mostramos el menu
		menu.classList.remove('aparecerHorizontal')
		menu.classList.remove('desaparecerHorizontal')
	}	
	else {// Si es mobile
		// mostramos el boton para abrir
		containerBotonMenu.style.display='inline'
		menu.classList.remove('aparecerHorizontal')
		menu.classList.remove('desaparecerHorizontal')	
		botonMenu.firstChild.src = 'IMG/menu.png'							
	} 
})