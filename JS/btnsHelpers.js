'use strict'

// Botones de ayuda
const btnUsuario = document.getElementById('btn-usuario')
const btnCorreo = document.getElementById('btn-correo')
const btnClave = document.getElementById('btn-clave')
const btnComprobacion = document.getElementById('btn-comprobacion')

// Escucha de clicks para los botones de ayuda
btnUsuario.addEventListener('click',()=>accionBotonAyuda(mensajeUsuario))
btnCorreo.addEventListener('click',()=>accionBotonAyuda(mensajeCorreo))
btnClave.addEventListener('click',()=>accionBotonAyuda(mensajeClave))
btnComprobacion.addEventListener('click',()=>accionBotonAyuda(mensajeComprobacion))

const accionBotonAyuda = mensaje=>{
	agregarColor(mensajeModal,'green','red')
	aparecerModal(mensaje)
}
