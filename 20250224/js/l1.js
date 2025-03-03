// Esta actividad para practicar haciendo el DOM
// Jason RG
// 24-02-2025

document.body.append("Hola de nuevo") // solo texto no HTML

// creamos un elemento párrafo
const p = document.createElement("p")
p.innerHTML = "ETO E LA OTIA"
p.style.color = "blue"

document.body.appendChild(p)

const div = document.querySelector("div")
// div.style.visibility="hidden"


console.log(div.innerHTML) // html
console.log(div.innerText) // texto visible
console.log(div.textContent) // incluye espacios

// document.body.removeChild(div)

const h1 = document.querySelector("h1")
console.log(h1.getAttribute('title')) // recuperamos atributo title
h1.setAttribute('title', 'Otro título') // cambiamos atributo

h1.classList.add('color-rojo') // añadimos clases
h1.classList.add('borde')

const d1 = document.querySelector("div")

if (d1) {// comprobamos si existe
    d1.classList.add("color-rojo")
} 


console.log(h1.dataset)
