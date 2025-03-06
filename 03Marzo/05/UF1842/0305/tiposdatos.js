let saludo = "hola"
let nombre = "maria"
console.log(`\n${saludo}, ${nombre}\n`)

let num1 = 10;
let num2 = 5;
console.log(`Sumar: ${num1+num2}\nRestar: ${num1-num2}\nMultiplicar: ${num1*num2}\nDividir: ${num1/num2}\n`)

let valor1 = null;
let valor2;
console.log(typeof(valor1), typeof(valor2), "\n")

let i = 10;
let j = 3;
console.log(`${10/3}\n${(10/3).toFixed(2)}\n`)

let isAdmin = true;
let isUser = false;

console.log(isAdmin && isUser);   
console.log(isAdmin || isUser);   
console.log(!isUser);  

const x = new String("Hello");
console.log("\n", typeof x, "\n"); 

const num11 = 42;  
const num22 = new Number(42); 
console.log(`${typeof(num11)} -- ${typeof(num22)}\n`)

const xx = "Hola";
const yy = "Hola";
console.log(xx === yy, "\n");

const a = new String("Hello");
const b = new String("Hello");
console.log(a === b); // ¿Qué esperas? AL SER OBJETOS FALSE


// Convertirlos tipos de datos en String
let num = 100;
let bool = true;




// Has recibido datos de un formulario FORM de HTML
// Verificamos si el nombre y la edad son válidos.
// Crear una funcion para verificar el usuario : verificamosUsuario(user)
// Comprobar que los tipos de datos no son undefined ni null
let usuario = {
    nombre: "Juan",
    edad: undefined,  // Edad no proporcionada
  };
function verificamosUsuario(user) {
    if((usuario.nombre === undefined || usuario.edad === undefined)
        || usuario.nombre === null || usuario.edad === null ) {
            console.log("Datos erróneos!!\n")
    } else 
        console.log("DATOS CORRECTOS ...\n")
}
verificamosUsuario(usuario)


// Los usuarios pueden entrar en el gimnasio si tiene 18 o mas años.
//Si son menores (<18), necesitan el permiso de sus padres
// 
let edad = 20;  // Edad del usuario
let tienePermiso = true;  // Si el usuario tiene permiso
if (edad >= 18) {
    console.log("Puede entrar en el gimnasi \n")
} else {
    if (tienePermiso) {
        console.log("Puede entrar en el gimnasio\n")
    } else
        console.log("Puede entrar en el gimnasio\n")
}


// Verificar si el usuario tiene al menos 5 compras en el historial, es mayor de 18 años y está suscrito a un programa de fidelidad.
let historialDeCompra = 6;  // El número de compras realizadas
let edadd = 25;  // Edad del usuario
let isSuscrito = true;  // Si está suscrito al programa de fidelidad
// Lógica para verificar si el usuario es elegible para el descuento

// tiene mas de 10 compras y es mayor a 21 o es suscrito
console.log("¡Felicidades! Eres elegible para un descuento."); 



