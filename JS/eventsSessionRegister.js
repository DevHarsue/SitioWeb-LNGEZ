'use strict'

// Este archivo cargar en session.html y en register.html

// si se esta iniciado sesion que no deje volver a iniciar
if (sessionStorage.getItem('private')==='true') window.location.assign('index.html')

// boton para regresar a index
const botonAtras = document.querySelector('.boton-atras')
botonAtras.addEventListener('click',()=>window.location.assign('index.html'))

// constantes a utilizar en ambos htmls
const formulario = document.getElementById('formulario')
const inputClave = document.getElementById('clave')
const inputCorreo = document.getElementById('correo')

// escucha de eventos para animacion de labels
inputCorreo.addEventListener("click",e=>animacionLabel(e))
inputClave.addEventListener("click",e=>animacionLabel(e))
inputCorreo.addEventListener("keyup",e=>animacionLabel(e))
inputClave.addEventListener("keyup",e=>animacionLabel(e))
