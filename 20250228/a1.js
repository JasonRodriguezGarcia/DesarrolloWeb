// probando el DOM

// si accedemos a un elemento de la pagina web 
// estando este fichero js al principio, dará un error porque
// se usa antes de cargar, se usa el defer en la llamada al este fichero
// para evitarlo
document.getElementById("titulo").innerHTML = "CAMbio"

// otra forma de hacer el cambio con eventlistener
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('titulo').innerHTML="CamBIO"
// })