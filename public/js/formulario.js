'use strict';

const formulario = document.getElementById('formulario');
// Manejador de eventos:
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);     // FormData es un objeto que permite capturar los datos de un formulario
    
    datos.get('nombre');    // Obtiene el valor del campo 'nombre'
    datos.get('apellido');   // Obtiene el valor del campo 'apellido'
    formulario.reset();     // Limpia los campos del formulario
    console.log(datos);
});