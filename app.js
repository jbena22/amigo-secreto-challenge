// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Autor: Jhonattan Gabriel Benavides Concha
Fecha inicio: 12-09-2025
Fecha fin:
Versión: 1.0 
*/

//Array para almacenar nombres
let amigos = [];
//Variable para capturar nuevo nombre
let nombre;

function agregarAmigo(){
    nombre = document.getElementById("amigo").value.trim(); //.trim() elimina espacios 
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/; //Permite letras con mínimo 2 caracteres
    
    //Si la condición es verdadera actualiza el array de amigos, 
    //si no envía mensaje de alerta.
    if ( nombre.length >= 1 && soloLetras.test(nombre)){
        amigos.push(nombre);
        console.log(amigos);
    } else{
        alert("Por favor, inserte un nombre."); 
    }  
    
    //Limpia el campo
    document.getElementById("amigo").value = "";
}