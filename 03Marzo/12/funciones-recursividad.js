// si se define una función después del sition en el que se llama
// funciona igual debido a Hoisting (elevación)

// funcion para calcular el área de un rectángulo
console.log(`Area rectángulo ${areaRectangulo(3, 4)}`)
function areaRectangulo(lado1, lado2) {
    return lado1 * lado2
}

// función para repetir x veces
const mensaje = repeatMessage("Hola! ", 3)
console.log(mensaje)
function repeatMessage(texto, veces) {
    return texto.repeat(veces)
}

// crear funcion recursiva para sumar los números de cada 2 elementos
// sumarSegundo(7) = 7+5+3+1 = 16
// sumarSegundo(6) = 6+4+2 = 12
function sumarSegundo(numero) {
    if (numero <= 0) {
        return 0
    } else {
        console.log(numero)
        return numero + sumarSegundo(numero-2)
    }
}
console.log(a=sumarSegundo(7))
console.log(a)

console.log("**************")

//////////////
let val = 10 // valor primitivo
function modificarVal(x) {
    x = x * 2
    console.log("Dentro de la funcion: ", x) // devuelve 20
} // 
modificarVal(val) // devuelve 10
console.log(val)

// let val2 = {width: 5} // valor mutable
// function modificarVal(obj) {
//     obj.width = obj.width  * 2 // por referencia
//     console.log("DENTRO DE LA FUNCION: ", obj) // devuelve 10
// } // 
// modificarVal(val2) // devuelve 
// console.log(val2)
// 
// objetos y arrays en funciones se cambian y se mantienen al salir de la función



