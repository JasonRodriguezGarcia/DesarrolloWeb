const persona1 = {} // es igual que "const persona = new Object()"
const persona = {
    nombre: "Pepe",
    edad: 12,
    isAdmin: true
}
console.log(persona)
console.log(typeof(persona))
console.log(persona.edad)
console.log(persona["edad"])
let variable = "edad"
console.log(persona[variable])
console.log("********")
persona.edad = 18
persona["isLoggedIn"] = true // añadiendo atributos --> clave valor
console.log(persona)
delete persona.isLoggedIn // borrando atributo
console.log(persona)

if ('isAdmin' in persona) { // si una clave (atributo) existe
    console.log("EXISTE!!")
}

for (const key in persona) {
    console.log(key)    // cogemos el nombre de la clave
    console.log(persona[key]) // cogemos el valor
}
console.log("*************")
const persona11 = {
    nombre: "Pepe",
    edad: 12,
    isAdmin: true
}
const persona22 = {
    nombre: "Pepe",
    edad: 12,
    isAdmin: true
}

const arrPersonas = [persona11, persona22]

arrPersonas.forEach(element => {
    console.log(element)
    console.log(element.nombre)
})
console.log("***********")
const arrPersonas2 = [
    {nombre: "Juan", edad: 12},
    {nombre: "Maria", edad: 22},
    {nombre: "Pepe", edad: 41},
]
arrPersonas2.forEach(persona => {
    console.log(persona)
})