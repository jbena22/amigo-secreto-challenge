// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Autor: Jhonattan Gabriel Benavides Concha
Fecha inicio: 12-09-2025
Fecha fin:
Versión: 1.0 
*/

//Array para almacenar nombres
let amigos = [];

function agregarAmigo(){
    //Limpiar resultado
    document.getElementById("resultado").innerHTML = "";

    //.trim() elimina espacios. 
    //.toUpperCase() convierte el nombre en mayúsculas.
    let nombre = document.getElementById("amigo").value.trim().toUpperCase(); //Variable para capturar nuevo nombre
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/; //Permite letras con mínimo 2 caracteres

    //Valida que el nombre:
    //1. No esté vacío (longitud mayor a 1 carácter).
    //2. Cumpla con la expresión regular.
    //3. No exista ya en el array.
    //Si todo es correcto, se actualiza el array de amigos y llama a la función actualizarListaAmigos();
    //de lo contrario, se muestra un mensaje de alerta.
    if ( nombre.length >= 1 && soloLetras.test(nombre) && !amigos.includes(nombre)){       
        amigos.push(nombre);
        actualizarListaAmigos();
    } else{
        alert("Por favor, inserte un nombre. Además, no debe repetirse."); 
    }  
    
    //Limpia el campo
    document.getElementById("amigo").value = "";
}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos"); //Variable para capturar nuevo elemento de la lista
    lista.innerHTML = ""; //Limpia la lista existente

    //Recorre el array de amigos y crea un elemento <li> por cada uno,
    //agregándolo a la lista
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    //Valida que haya amigos disponibles;
    //de lo contrario, se muestra un mensaje de alerta
    if (amigos.length >= 1){
        let indice = Math.floor(Math.random()*amigos.length); //Generar un índice aleatorio entre el tamaño del array
        let sorteado = amigos[indice]; //Obtener el nombre sorteado
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${sorteado}`; //Mostrar el resultado en pantalla
        
        //Limpiar array y lista amigos
        amigos = []; 
        document.getElementById("listaAmigos").innerHTML = "";
    } else{
        alert("No hay amigos disponibles para sortear!")
    }
}