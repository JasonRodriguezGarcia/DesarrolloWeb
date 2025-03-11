// actividad para practicar arrayslet
let frutas = [
    "manzana",
    "Aplátano",
    "kiwi"
]
// optenemos valor con un get
console.log(frutas.length)
console.log(frutas[1])
console.log(frutas[1][0])
console.log(frutas[5])
// frutas[0] = "mango"
frutas.push("mango") // añade por el final
console.log(frutas)
let x = frutas.pop() // borrar por el principio
console.log(x)
console.log(frutas)
let y = frutas.shift() // borrar por el final
console.log("borrado por el final: ", y)
console.log(frutas)
let z = frutas.unshift("pera") // añade al principio
console.log(z)
console.log(frutas)
frutas.splice(1, 0, "mango") // en pos 1, borro ninguno(0), inserto "mango"
console.log(frutas)

for (const fruta of frutas) {
    console.log(fruta)
}
console.log("^^^^^^^^^^^^")
frutas.forEach(fruta => { console.log(fruta)})

console.log("^^^^^^^^^^^^")

console.log(frutas.sort())
console.log(frutas.sort().reverse())
// frutas.sort(function(a, b) (a<b))

console.log("^^^^^^^^^^^^")
console.log(frutas.indexOf("mango")) // si hay 2 devuelve el índice del primero

console.log("^^^^^^^^^^^^")
let x1 = frutas.find(fruta=>
    fruta === "pera") // si no encuentra devuelve undefined
console.log(x1)

frutas.push("pera")
let x2 = frutas.filter(fruta =>
    fruta === "pera"
)
console.log(x2)
