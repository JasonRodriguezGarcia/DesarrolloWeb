// https://github.com/chekulhan/Desarrollo-Web/blob/main/UF1842-Web-Components/javascript/01.2-tipos.de.datos.actividad.js

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
    console.log("Puede entrar en el gimnasio\n")
} else {
    if (tienePermiso) {
        console.log("Puede entrar en el gimnasio\n")
    } else
        console.log("Puede entrar en el gimnasio\n")
}

// De referencia / Objetos

// ¿Qué esperas ver en la propiedad de nombre de persona1 y persona2. ¿Porque? 
let persona1 = { nombre: "Juan", edad: 25 };
let persona2 = persona1;  // Asignamos la referencia de persona1 a persona2
persona2.nombre = "Carlos";
console.log(persona1)
console.log(persona1, "\n")
// al asignar persona1 a persona2 se copia todo y al cambiar persona2 afecta a persona1


// Agregar una propiedad 'pais' al objeto
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
  };
// solucion
persona.pais = "Chiquitistán"
console.log(persona, "\n")
  

// ¿Qué tipo de dato es saludar
const saludar = function(name) {
    return `Hola, ${name}!`;
  };
console.log(typeof(saludar), "\n")



// Crea una función llamada imprimirPelicula que tome el objeto pelicula como argumento y imprima todas sus propiedades.
// OUTPUT
// Título: 
// Director:
// Año: 
let pelicula = {
    titulo: "El imperio contra Paca",
    director: "Cecile B.Mille",
    año: 1980
}
function imprimirPelicula(peli) {
    console.log(`
        \nTítulo: ${peli.titulo}
        \nDirector: ${peli.director}
        \nAño: ${peli.año}\n
    `)

}
imprimirPelicula(pelicula)

