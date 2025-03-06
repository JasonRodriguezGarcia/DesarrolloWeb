// for (let index = 0; index < 10; index++) {
// for (let index = 0; index < 10; index+=2) {
for (let index = 5; index < 10; index+=2) {
            if (index == 5) {
        // break; // salimos del bucle en 5
        continue; // saltamos el 5
    }
    console.log(`Mensaje .... ${index}!!!`)
}
console.log("**************")

for (let index = 10; index > 0; index-=2) {
    if (index == 5) {
        // break; // salimos del bucle en 5
        continue; // saltamos el 5
    }
    console.log(`Mensaje .... ${index}!!!`)
}
console.log("**************")

const numeros = [1, 5, 2, 7];

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index]
    console.log(numeros[index])
    
}
console.log("**************")

for (const numero of numeros) {
    console.log(numero)
}