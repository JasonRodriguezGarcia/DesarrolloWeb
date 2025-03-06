// https://github.com/chekulhan/Desarrollo-Web/blob/main/UF1842-Web-Components/javascript/03.1-forloops.js

// Imprimir los números en orden inverso (del 5 al 1)
for (let index = 5; index > 0; index--) {
    console.log("numero: ", index)
}
console.log("***********************")

// Imprimir de 10 a 100 en incrementos de 10
for (let index = 10; index <=100 ; index+=10) {
    console.log("numero: ", index)
    
}
console.log("***********************")
// Imprimir todos los nombres excepto Carlos
let nombres = ["Ana", "Carlos", "Elena", "Luis"];
for (let index = 0; index < nombres.length; index++) {
    if (index == 1) continue
    console.log(nombres[index])
    
}
console.log("***********************")
// Vamos a buscar si el nombre existe en la lista
let invitados = ["Pedro", "Maria", "Juan"];
let buscar = "Maria";
let encontrado = false;
for (let index = 0; index < invitados.length; index++) {
    if (invitados[index] === buscar)
        console.log(`Nombre existente ${buscar}!!`)
}
console.log("***********************")

// Cuando llegues a 3, terminar de imprimor los valroes y salir del bucle
const numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
    if (numbers[index] === 3)
        break
}
console.log("***********************")
// usuarios en un Array
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
console.log("***********************")

// ¿funciona? No, let users debe ser let user
for (let user of users) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}
console.log("***********************")
//
// imprimir el nombre y su posicion (index)
const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach((name, index) => {
    console.log(index, name)
});
console.log("***********************")
// Mostrar el resultado de la suma de todos los numeros (50), usando for y/o foreach
const numberss = [5, 10, 15, 20];
let contador = 0
for (let index = 0; index < numberss.length; index++) {
    contador += numberss[index]
}
console.log("Total: ", contador)
console.log("***********************")

// En una pagina web tienes un lista de elementos: 
// testlistaelementos.html

// <div class="item">Item 1</div>
// <div class="item">Item 2</div>
// <div class="item">Item 3</div>
// <div class="item">Item 4</div>

// Aplicar un bucle para cambiar el estilo de todos los textos en la lista a color azul

// PISTA:
// let items = document.getElementsByClassName('item');

// */
