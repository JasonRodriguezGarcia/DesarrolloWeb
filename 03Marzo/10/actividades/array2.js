// Arrays

let coches = ["Toyota", "Ferrari", "Mercedes"];
coches[1] = "Tesla"; 
coches.push("Chevrolet");

// Mostrar 'Mercedes'
// Cambiar el primer elemento a 'BMW'
// Eliminar el último elemento usando pop()
// Buscar el índice de 'BMW' usando IndexOf(...) - si no existe un valor, ¿que resultado consigues?
// Verificar si existe 'Toyota' en el array usando .includes(...). ¿Qué valor devuelve?
// ¿Qué hace coches.sort(); y coches.reverse();?
console.log(coches)
console.log(coches[2])
let x = coches.pop()
console.log("imprimo", coches)
console.log("No encontrado= ", coches.indexOf("BWM"))
console.log("Toyota?", coches.includes("Totota"))
console.log("ordenado:", coches.sort())
console.log("invertido:", coches.sort().reverse())
console.log("******************")

let mixedArray = [42, "Hello", true, { name: "Alice" }, [1, 2, 3], null];
// ¿Funciona? No falta poner .length al "< mixedArray"
for (let index = 0; index < mixedArray.length; index++) {
    console.log(`Valor es ${mixedArray[index]}`);
    console.log();
}

console.log("************")
// Queremos imprimir solo los tipos ded datos string y number. Usar un bucle for y typeof
for (let index = 0; index < mixedArray.length; index++) {
    const element = mixedArray[index];
    // console.log(typeof(element))
    console.log((typeof(element) === "number" ||typeof(element) === "string")? element : "")
    
}
