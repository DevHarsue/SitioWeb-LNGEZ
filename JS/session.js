'use strict'

// Escucha de evento del formulario
formulario.addEventListener('submit',(e)=>{
	e.preventDefault()
	let key = localStorage.getItem(inputCorreo.value.toString().toUpperCase())
	// comprobamos que el correo exista y que la contraseña se correcta
	if (key != null && localStorage.getItem(key.toString().toUpperCase()) == inputClave.value) {
		window.location.assign('index.html')
		sessionStorage.setItem('private','true')
		sessionStorage.setItem('email',inputCorreo.value.toString().toUpperCase())
	}else{
		aparecerModal('Contraseña o Correo Incorrecto!')
	}
})

// boton ok del modal
botonModal.addEventListener('click',()=>cerrarModal())
