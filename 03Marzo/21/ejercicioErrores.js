// Pregunta 6: Agregar el manejo de errores a este código, para el caso de division por 0.
// En la consola añadimos 1º la función
function dividir(a, b) {
    // console.log(`El resultado de la división es: ${resultado}`);
    
    if (b == 0) {
        throw new Error("No se puede dividir por zero")
    }
    else {
        return a/b
    }
    
}

try {
    dividir(4,0) // cambiar luego a (4,0)
}
catch (error) {
    console.log("Ha habido un error: ", error.message)
}
finally {
    console.log("Finalizado!!")
}