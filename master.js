//Capturar el titulo - DOM
let nombre= prompt('Indique su nombre');
let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
//Condicionales
if(nombre === ''){
    titulo.innerHTML = 'Bienvenid@ Invitad@';
}else{
    titulo.innerHTML = `Bienvenid@ ${nombre}`;
}

parrafo.innerHTML +=` <strong>Saludos a ${nombre}<strong>`;

//Funciones - Creando la misma
//                  Parámetro
function bienvenida(dato){
    alert('bienvenid@ al sitio web '+dato )
}
//Invocando - LLamando a la función
//         Argumento -  Valor
bienvenida(nombre);
//bienvenida(nombre);
//bienvenida(nombre);




