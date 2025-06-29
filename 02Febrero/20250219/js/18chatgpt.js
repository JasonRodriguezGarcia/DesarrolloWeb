document.getElementById("botonEnvio").addEventListener("click", enviarMensaje)
main = document.querySelector("main")
main.scrollTo(0, main.scrollHeight)
texto = document.querySelector("#texto")
texto.focus()
pen = document.querySelector("#pen")

function togglePen() {
    if (texto.value.length > 0) {
        pen.classList.add("fa-bounce")
    } else
        pen.classList.remove("fa-bounce")
}

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
    }
    texto.focus()
    pen.classList.remove("fa-bounce")
}

function addImage() {   
    inputFichero = document.querySelector("#fichero")
    file = inputFichero.files[0]
    fileNombre = inputFichero.files[0].name
    console.log("file: ", file)
    console.log("fileNombre: ", fileNombre)
    const reader = new FileReader();

    if (file) {
        reader.readAsDataURL(file)

        reader.onload = function (e) {
            // si todo va bien
            console.log("todo bien!")
            miDiv = document.createElement("div")
            imagen = document.createElement("img")
            fileText = document.createElement("span")
            imagen.src = e.target.result
            imagen.title = fileNombre
            fileText.innerHTML = fileNombre
            fileText.style.fontSize = "10px"
            miDiv.appendChild(imagen)
            miDiv.appendChild(fileText)
            miDiv.classList.add("textoInput", "textoImagenTextoAnchura")
            main.appendChild(miDiv)
            
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
