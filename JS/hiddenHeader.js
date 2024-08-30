'use strict'

/////////////////////Desaparecer header cuando se vea el footer/////////////////////

// Seleccionamos el header y el footer
const footer = document.querySelector('.footer')
const header = document.querySelector('.header')

// Funcion que pide como parametro intersectionObserver
const verificarVisibilidad = (entry)=>{
	// la funcion recibe como parametro la entidad que se esta observando
	// Si la entidad(footer) se esta viendo y header no tiene la animacion desaparecerVertical
	if (entry[0].isIntersecting && !header.classList.contains('desaparecerVertical')) {
		cambiarClase(header,'desaparecerVertical','aparecerVertical')
	}// aparecer header
	else if(header.classList.contains('desaparecerVertical')) {
		cambiarClase(header,'aparecerVertical','desaparecerVertical')
	}	
}

// Objeto JSON que pide intersectionObserver
const opciones = {
	rootMargin: '-50%'
}

// creamos el objeto intersectionObserver
const observer = new IntersectionObserver(verificarVisibilidad,opciones)
// Lo ponemos a observar el footer
observer.observe(footer)