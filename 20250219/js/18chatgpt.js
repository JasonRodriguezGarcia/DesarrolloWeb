document.getElementById("botonEnvio").addEventListener("click", enviarMensaje)
main = document.querySelector("main")
main.scrollTo(0, main.scrollHeight)
texto = document.querySelector("#texto")
texto.focus()

function enviarMensaje() {
//     document.querySelector("main").innerHTML += `
//         <p>${}
//     `
    inputTexto = document.querySelector("#texto")
    nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerHTML = '<sup class="sup">*Yo*</sup>' + inputTexto.value
    nuevoParrafo.classList.add("textoInput")
    document.querySelector("main").appendChild(nuevoParrafo)
    inputTexto.value = ""
    main.scrollTo(0, main.scrollHeight)
    texto.focus()
}

function addImage(e) {
    
}
