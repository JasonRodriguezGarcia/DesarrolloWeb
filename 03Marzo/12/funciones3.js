// ACTIVIDAD: Convertir estas funciones en unas arrow funciones:

// function saludo(nombre, edad) {
//     if (edad >= 18) {
//       return `Hola, ${nombre}. Eres mayor de edad.`;
//     } else {
//       return `Hola, ${nombre}. Eres menor de edad.`;
//     }
//   }
  const saludo = (nombre, edad) => {
    if (edad >= 18) {
      return `Hola, ${nombre}. Eres mayor de edad.`;
    } else {
      return `Hola, ${nombre}. Eres menor de edad.`;
    }
  }

// Crear una function tradicional y luego convertirla en una arrow function
// para calcular el promedio de un array de notas

let notas = [2, 5, 3, 2, 9, 8];

console.log(notasCalculo(notas))
function notasCalculo(array) {
    let suma = 0
    for (let index = 0; index < array.length; index++) {
        suma += array[index]
        console.log(array[index])
    }
    return suma
}

const notasCalculo2 = (array) =>{
    let suma = 0
    for (let index = 0; index < array.length; index++) {
        suma += array[index]
        console.log(array[index])
    }
    return suma
}
console.log(notasCalculo(notas))