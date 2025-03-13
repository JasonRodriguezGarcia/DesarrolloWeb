import {Ropa, Pantalon, Camiseta} from './Ropa.js';  

// Create a Dog instance
const pantalon1 = new Pantalon('Pantalon', 'Azul', "M", "Slim fit");
const pantalon2 = new Pantalon('Pantalon', 'Verde', "L", "Straight");
const pantalon3 = new Pantalon('Pantalon', 'Azul', "XL", "Slim fit");
const camiseta1 = new Camiseta('Camiseta', 'Azul', "M", "Manga corta");
const camiseta2 = new Camiseta('Camiseta', 'Verde', "L", "Manga larga");

const ropa = []
ropa.push(pantalon1)
ropa.push(pantalon2)
ropa.push(pantalon3)
ropa.push(camiseta1)
ropa.push(camiseta2)

// Get buttons from the DOM
let body = document.querySelector("body")
let mostrarBoton = document.querySelector("#mostrarBoton")
let anadirBoton = document.querySelector("#anadirBoton")
let mostrarRopa = false

debugger

// mostrarBoton.onclick = function() {
mostrarBoton.addEventListener("click", () => {
    if (mostrarRopa) return
    mostrarRopa = true
    console.log(ropa)
    let miUL = document.createElement("ul")
    for (const element of ropa) {
        let miLI = document.createElement("li")
        // debugger 
        // miLI.innerHTML = `${element.descripcion} ${element.color} ${element.talla}`
        // if (element.hasOwnProperty("estilo"))
        //     miLI.innerHTML += `${element.estilo}`
        // else
        //     miLI.innerHTML += `${element.longitud}`
        // console.log(element)
        miLI.innerHTML = element.mostrarRopa()
        miUL.appendChild(miLI)
    }
    body.appendChild(miUL)
})

anadirBoton.addEventListener("click", () => {

})