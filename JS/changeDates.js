'use strict'

// Escuvha de evento para cambioar formulario
const formularioBotones = document.getElementById('formulario-botones')
formularioBotones.addEventListener('submit',e=>{
	e.preventDefault()
	// configurar el siguiente forumlario dependiendo del boton presionado
	if(e.submitter.id=='btn-usuario')cambiarFormulario('Nuevo Usuario','text',document.getElementById('usuario').textContent)
	if(e.submitter.id=='btn-correo')cambiarFormulario('Nuevo Correo','email',document.getElementById('correo').textContent)
	if(e.submitter.id=='btn-clave')cambiarFormulario('Nueva Contraseña','password',document.getElementById('clave').textContent)
})

//Formulario de cambio de dato
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit',e=>{
	e.preventDefault()
	// si ya se hizo el cambio esperar a recargar la pagina
	if (cambio) return 0

	// valor a comprobar
	let valor = inputCambio.value.toString()	

	//comprobar que no se este usando el usuario ni el correo
	if (localStorage.getItem(valor.toUpperCase()) !== null && inputCambio.type != 'password') configurarModal("El dato ya esta siendo usado por algun usuario.",false)	
	//si es el usuario que se esta cambiando
	else if (inputCambio.type == 'text') cambiar(valor,comprobarParametrosUsuario,"Nombre de Usuario cambiado satisfactoriamente.",mensajeUsuario)
	//si es el correo que se esta cambiando
	else if (inputCambio.type == 'email') cambiar(valor,comprobarParametrosCorreo,"Correo cambiado satisfactoriamente.",mensajeCorreo)
	//si es la contraseña que se esta cambiando
	else if (inputCambio.type == 'password') cambiar(valor,comprobarParametrosComprobacion,"Contraseña cambiada satisfactoriamente.",mensajeClave)
	//aparecer modal con mensaje 
	aparecerModal(mensaje)
})

// variable para comprobar que ya se haya cambiado algun dato
let cambio = false
// Mensaje para modal
let mensaje=''

// funcion para cambiar entre menu de elegir y de cambio
const cambiarFormulario = (string,type,dato)=>{
	//ponemos como titulo el dato a cambiar
	document.querySelector('.main__form-cambio').firstElementChild.textContent=dato
	//le damos el type al input
	inputCambio.type = type
	//completamos el texto de introduce
	inputCambio.previousElementSibling.textContent+=string
	
	//si no es la contraseña que estamos cambiando
	if (type!='password') {
		// Quitamos el input de comprobar contraseñas
		inputClave.style.display = 'none'
		inputClave.previousElementSibling.style.display = 'none'
	}
	//cambio de menu con animacion
	document.querySelector('.main__form-elegir').classList.add('desaparecerTransparencia')
	setTimeout( () => {
		document.querySelector('.main__form-elegir').style.display = 'none'
		document.querySelector('.main__form-cambio').style.display = 'flex'
		document.querySelector('.main__form-cambio').classList.add('aparecerTransparencia')
	}, 300)
}

// funcion para comprobar si el dato a cambiar es correcto  
const cambiar = (valor,funcionParametros,msj,msjError) =>{
	// Si el dato cumple con los parametros
	if (funcionParametros(inputCambio)) {
		// borramos los datos ya registrados
		borrarItems()
		// comprobamos cual dato va a ser cambiado y lo igualamos al nuevo valor
		if (msj.toLowerCase().includes('usuario')) usuario = valor
		else if (msj.toLowerCase().includes('correo')) correo = valor
		else if (msj.toLowerCase().includes('contraseña')) clave = valor

		// agregamos los datos nuevos
		agregarItems()
		// Decimos que el cambio ya se ha efectuado
		cambio = true			
		// configuramos el modal
		configurarModal(msj,true)
	} 
	// Si no se esta cumpliendo los parametros y es la contraseña que se esta cambiando
	// comprobar que no sean iguales para decir que deben ser iguales 
	else if (msj.toLowerCase().includes('contraseña') && inputCambio.value !== inputClave.value) configurarModal(mensajeComprobacion,false)
	// sino se esta cumpliendo los parametros y no es la contraseña que se esta cambiando, configurar modal con mensaje
	else configurarModal(msjError,false)
}

// Borrar registro
const borrarItems = ()=>{
	localStorage.removeItem(usuario.toString().toUpperCase())
	localStorage.removeItem(correo.toString().toUpperCase())
	sessionStorage.removeItem('email')
}

// Volver a registrar
const agregarItems = ()=>{
	localStorage.setItem(correo.toString().toUpperCase(),usuario.toString().toUpperCase())
	localStorage.setItem(usuario.toString().toUpperCase(),clave.toString())
	sessionStorage.setItem('email',correo.toString().toUpperCase())
}

// Configurar el modal para posteriormente hacerlo apararecer
const configurarModal = (msj,correcto)=>{
	// si es true es porque ya se hizo el cambio
	if (correcto) agregarColor(mensajeModal,'green','red')
	// Sino le damos color rojo 
	else agregarColor(mensajeModal,'red','green')
	// Igualamos al mensaje que se mostrara
	mensaje = msj
}