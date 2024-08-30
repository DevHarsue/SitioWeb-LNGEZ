'use strict'

// bajar labels de inputs al dar click en cualqioer parte de la pantalla
addEventListener('click',()=>{
	let labels = document.getElementsByTagName('label')	
	for (let i = 0;i < labels.length;i++) {
		if (labels[i].classList.contains("labelArriba") && labels[i].nextElementSibling.value == '') {
			labels[i].classList.add("labelAbajo")
			labels[i].classList.remove("labelArriba")
		}
	}
})

const mensajeUsuario = "El nombre de Usuario tiene que ser mayor o igual a 4 caracteres y menor o igual a 16 caracteres, no debe contener espacios."
const mensajeCorreo = "El Correo debe seguir el formato: ejemplo@ejemplo.com"
const mensajeClave ="La Contraseña debe ser mayor o igual a 8 caracteres y menor o igual a 16 caracteres, debe tener mayuscula,minusculas y numeros, no debe contener espacios."
const mensajeComprobacion ="Los campos de contraseña deben ser iguales."

// funcion para ejecutar animacion hacia arriba
const animacionLabel = (e)=>{
	e.stopPropagation()
	e.target.previousElementSibling.classList.add("labelArriba")
	e.target.previousElementSibling.classList.remove("labelAbajo")
}

// funcion para cambiar color
const agregarColor = (item,color,removeColor)=>{
	item.classList.add(color)
	item.classList.remove(removeColor)
}

// funciones para comprobar parametros en los inputs
const comprobarParametrosGenerales = (item)=>(item.value.includes(' ') || item.value.length < 4  || item.value == '') ? false : true

const comprobarParametrosUsuario = (item)=>(comprobarParametrosGenerales(item) && item.value.length <= 16) ? true : false

const comprobarParametrosCorreo = (item)=>(comprobarParametrosGenerales(item) && item.value.includes('@') && item.value.toLowerCase().includes('.com')) ? true : false

const comprobarParametrosClave = (item)=>(comprobarParametrosGenerales(item) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/.test(item.value)) ? true : false

const comprobarParametrosComprobacion = (item)=>(comprobarParametrosClave(item) && item.value===inputClave.value) ? true : false