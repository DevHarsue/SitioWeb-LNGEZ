'use strict'
// Este script esta en archivos html como admin.html,simbolos.html y algunos otros
// Si no se esta iniciado session, lo enviamos a iniciar sesion
if ( sessionStorage.getItem('private') !== 'true') window.location.assign('session.html')
