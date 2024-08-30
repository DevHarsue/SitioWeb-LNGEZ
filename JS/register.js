'use strict'

// inputs que no estan declarados en eventsSessionRegister.js
const inputUsuario = document.getElementById('usuario')
const inputComprobacion = document.getElementById('comprobacion')

// Animacion de label
inputUsuario.addEventListener("click",e=>animacionLabel(e))
inputComprobacion.addEventListener("click",e=>animacionLabel(e))

// escucha de evento para cuando cambie el valor del input de usuario
inputUsuario.addEventListener('keyup',e=>comprobacion(e,e.target,comprobarParametrosUsuario,mensajeUsuario))

// escucha de evento para cuando cambie el valor del input de correo
inputCorreo.addEventListener('keyup',e=>comprobacion(e,e.target,comprobarParametrosCorreo,mensajeCorreo))

// escucha de evento para cuando cambie el valor del input de clave
inputClave.addEventListener('keyup',e=>comprobacion(e,e.target,comprobarParametrosClave,mensajeClave))

// llamar a la funcion para comprobar que las contraseñas son iguales
inputComprobacion.addEventListener('keyup',e=>comprobacion(e,e.target,comprobarParametrosComprobacion,mensajeComprobacion))

// boton para enviar el formulario
formulario.addEventListener('submit',(e)=>{
	e.preventDefault()	
	// Para evitar bug de enviar dos veces el formulario
	if (registro) return 0

	// color rojo predeterminado al modal	
	agregarColor(mensajeModal,'red','green')

	// Corroboramos que los datos ingresados a los inputs sean correctos
	user = comprobacion(null,inputUsuario,comprobarParametrosUsuario,mensajeUsuario)
	mail = comprobacion(null,inputCorreo,comprobarParametrosCorreo,mensajeCorreo)	
	pass = comprobacion(null,inputComprobacion,comprobarParametrosComprobacion,mensajeComprobacion)
	comprobacion(null,inputClave,comprobarParametrosClave,mensajeClave)
	

	//Comprobacion que el usuario no exista
	if (localStorage.getItem(inputUsuario.value.toUpperCase()) !== null) {
		user = false
		mensaje = "El Usuario ya ha sido registrado antes."
	}
	//Comprobacion que el correo no exista
	else if (localStorage.getItem(inputCorreo.value.toUpperCase()) !== null) {
		mail = false
		mensaje = "El Correo ya ha sido registrado antes."
	}
	else if(inputClave.value == '' || inputComprobacion == '' || inputUsuario == '' || inputCorreo == ''){
		mensaje = "LLENA TODOS LOS CAMPOS."
	}

	// registrar
	if (user && pass && mail) {
		// Guardar key = correo, value = user
		localStorage.setItem(inputCorreo.value.toString().toUpperCase(),inputUsuario.value.toString().toUpperCase())
		// Guardar key = user, value = pass
		localStorage.setItem(inputUsuario.value.toString().toUpperCase(),inputClave.value.toString())
		// Le damos color verde al modal
		agregarColor(mensajeModal,'green','red')
		mensaje = "REGISTRO REALIZADO CORRECTAMENTE."
		// Decimos que ya registramos 
		registro=true
	}
	// Aparecer el modal 
	aparecerModal(mensaje)	
})

// Escucha de evento para boton del modal
botonModal.addEventListener('click',()=>{
	// Si el modal se lanza despues del registro
	if (user && pass && mail && registro) cerrarModal('session.html')	
	else cerrarModal()	
})

// Variables que comprueban que los datos sean correctos
let user = false
let pass = false
let mail = false

// Mensaje por default
let mensaje = "LLENA TODOS LOS CAMPOS."

// Variable para evitar registro dos veces 
let registro=false

const comprobacion = (e=null,item,funcion,msj)=>{
	// Para cuando es llamada al presionar teclas
	if (e != null) animacionLabel(e)
	
	// Comprueba que se cumplan los parametros
	if (funcion(item)) {
		// Agrega el color verde al input
		agregarColor(item,'green','red')
		return true
	}else{
		// Agrega color rojo al input
		agregarColor(item,'red','green')
		// Le da el mensaje de error al modal
		mensaje = msj
		return false
	}
}

