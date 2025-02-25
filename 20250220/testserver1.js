// console.log("HOLA...");
// let texto = 'Hola a todos';

// console.log("x" + texto.substring(12, 4) + "x");

// const str = "Hello, welcome to La Coruña programming!!";

// console.log(str.slice (7, 14));
// console.log(str.slice (18, 27));
// console.log(str.slice (28, 39));
// // console.log(str.split)
// // console.log(strip)
// importamos módulo para poder acceder a leer ficheros
const fs = require('fs'); 
// funcion con 2 opciones de retorno
// error si no ha podido leer el archivo
// data por si ha podido devuelte un valor
// funcion de respuesta callback()
// fs.readFile("../20250219/18chatgpterminatorR.html", "utf-8", (error, data) => {
//     if (error) {
//         console.log("Error por lo que sea, si eso ya tal ...")
//     }
//     else {
//         console.log(data.toString());
//     }
// });

// son funciones asíncronas
let content = `<h1>Hola a "tós"!!`
fs.writeFile("test100.html", content, (err) => {
    if (err) {
        console.log("Hay un error, si eso también ya tal ...")
    } else {
        console.log("Exito al crear archivo")
    }
})
