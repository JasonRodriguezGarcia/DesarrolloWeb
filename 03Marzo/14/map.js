const numeros = [1, 2, 4, 7, 8, 11, 15]

const n2 = numeros.map(numero=> console.log(numero))
console.log(n2)
const n3 = numeros.map(numero=> numero * 2)
console.log("Imprimo", n3)
console.log("***********")
const n = numeros.map((numero, index) => {
    return (`Número: ${numero} index: ${index}`)
})
console.log(n)
console.log("***********")

const frutas = ["manzana", "pera", "kiwis"]
const frutaNew = frutas.map(fruta => fruta.toUpperCase())
console.log(frutaNew)

console.log("***********")
const nombres = ["Juan", "Ana", "Luis", "Carlos", "Maria"]
// Devolver una lista nueva (array) con:
// El nombre Juan tiene 4 caracteres y está en la posición 0
// El nombre Ana tiene 3 caracteres y es´ta en la posición 1
const nueva = nombres.map((nombre, index) => {
    return `El nombre ${nombre} tiene ${nombre.length} y está en la posición ${index}`
})
console.log(nueva)

console.log("***********")
// Lista nueva con las tareas que tienen priodad Alta (anteriores a la fecha actual)

const tareas = [
    {tarea: "Finish report", fechaCumplir: "2025-03-10"},
    {tarea: "Sacar basura", fechaCumplir: "2025-03-20"},
    {tarea: "Cambiar arena al gato", fechaCumplir: "2025-03-10"},
    {tarea: "Capar al gato", fechaCumplir: "2025-03-20"}
]
const prioridadAlta = tareas.map(tarea => {
    if (new Date(tarea.fechaCumplir) < new Date("2025-03-14")) {
        // return tarea
        return {tarea: tarea.tarea, prioridad: "ALTA"}
    } else return

})
console.log("Prioridad Alta: ", prioridadAlta)
console.log("******************")
const prioridadAlta2 = tareas.filter(el => {
    if (new Date(el.fechaCumplir) < new Date("2025-03-14")) {
        // return tarea
        return {tarea: el.tarea, prioridad: "ALTA"}
    }

})
console.log("prioridad2: ", prioridadAlta2)