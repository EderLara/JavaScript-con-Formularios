'use strict';

const formulario = document.getElementById('formulario');
// Manejador de eventos:
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);     // FormData es un objeto que permite capturar los datos de un formulario
    
    let nombre = datos.get('nombre');    // Obtiene el valor del campo 'nombre'
    let apellido = datos.get('apellido');   // Obtiene el valor del campo 'apellido'
    let profesion = datos.get('profesion');    // Obtiene el valor del campo 'nombre'
    let correo = datos.get('correo');   // Obtiene el valor del campo 'apellido'
    let telefono = datos.get('telefono');    // Obtiene el valor del campo 'nombre'
    
    // Almacenamos los datos en el LocalStorage
    



    formulario.reset();     // Limpia los campos del formulario
    console.log(datos);
});