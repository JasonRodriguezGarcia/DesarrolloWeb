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

    if (inputTexto.value != '') {
        nuevoParrafo = document.createElement("p")
        nuevoParrafo.innerHTML = '<sup class="sup">*Yo*</sup>' + inputTexto.value
        nuevoParrafo.classList.add("textoInput", "textoInputAnchura")
        document.querySelector("main").appendChild(nuevoParrafo)
        inputTexto.value = ""
        main.scrollTo(0, main.scrollHeight)
        texto.focus()
    }
}

function addImage() {
    
    inputFichero = document.querySelector("#fichero")
    file = inputFichero.files[0]
    const reader = new FileReader();

    if (file) {
        reader.readAsDataURL(file)

        reader.onload = function (e) {
            // sitodo va bien
            console.log("todo bien!")
            // div.innerHTML = e.target.result
            // div.textContent = e.target.result
            imagen = document.createElement("img")
            imagen.src = e.target.result
            imagen.classList.add("textoInput", "ficheroMargenes")
            main.appendChild(imagen)
        }
        reader.onloadend = function (e) {
            file = ''
            main.scrollTo(0, main.scrollHeight)
            texto.focus()
        }
        reader.onerror = function(e) {
            console.log("error")
        }
    }

}
