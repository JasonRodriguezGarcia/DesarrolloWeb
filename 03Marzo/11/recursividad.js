function sumar(a, b) {
    return a + b; 
}

// factorial
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
function factorial(n){
    if (n == 0) { // caso base - terminar
        console.log(n)
        return 1
    }
    else { // caso recursividad - llamar de nuevo
        console.log(n)
        return n * factorial(n-1)
    }
}

const x = factorial(4)  // >> 24
console.log("Recursividad: ", x)

console.log("--------------")
// cuenta atrás sin bucle y con recursividad
function cuentaAtras(n) {
    if (n === 0) {
        // console.log(n)
        return
    } else {
        console.log(n)
        return cuentaAtras(n-1)
    }
}
const y = cuentaAtras(3)
console.log("Cuenta atrás: ", y)

