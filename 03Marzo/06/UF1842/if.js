// https://github.com/chekulhan/Desarrollo-Web/blob/main/UF1842-Web-Components/javascript/02.1-if.js
//Actividades de IF condicion

// Si la contraseña es correcta, muestra "Acceso permitido", si no, "Contraseña incorrecta".
// Simulando input
let passwordGuardado = "secreto123";
let passwordIngresado = "secreto123"; 

if (passwordGuardado === passwordIngresado) console.log("Acceso permitido")
else console.log("Contraseña incorrecta!!")



// Indicar si un numero es par o impar
let numero = 9;
if (numero % 2 === 0) console.log("numero par\n")
else console.log("numero impar\n")


// ternarios, forma compacts para escribir una condicion IF
// 1==1 ? "igual": "no igual";
let aa = 1
console.log(`${aa === 1 ? "Son iguales" : "NO SON iguales" }\n`)

// Si la temperatura es mayor a 25, mostrar un mensaje que hace calor. Si no, otro mensaje
let temperatura = 30;
if (temperatura > 25) console.log("Hace calor\n")
else console.log("No hace calor\n")

// convertir la actividad de mod % en un ternario
console.log(`${numero % 2 === 0 ? "numero par\n": "numero impar\n"}`)

/*Dado un número del 0 al 100, asigna una calificación según la siguiente escala:
90 - 100 → Sobresaliente 🏆
70 - 89 → Aprobado ✅
50 - 69 → Necesita mejorar 🧐
< 50 → Reprobado ❌
*/
let nota = 75
if (nota < 50) console.log("Reprobado\n")
else if (nota < 70) console.log("Necesita mejorar\n")
else if (nota < 90) console.log("Aprobrado\n")
else console.log("Sobresaliente\n")

/* Actividad de HTML de banca
Objetivo:
Vas a crear una página web donde el usuario podrá introducir su saldo de cuenta bancaria, 
el número de transacciones recientes y si es cliente preferente.
Basado en estos datos, la página le dará una recomendación o advertencia sobre su situación financiera.

Formulario de Entrada de Datos: Crea un formulario donde los usuarios puedan introducir los siguientes datos:
- Saldo de la cuenta (en euros).
- Número de transacciones recientes (cuántas veces han movido dinero en la cuenta).
- ¿Es cliente preferente? (un checkbox que el usuario puede marcar).

Reglas de Negocio: Cuando el usuario ingrese su información y presione el botón de "Verificar Estado", el sistema debe mostrar un mensaje personalizado según las siguientes reglas:
- Si el saldo es mayor a 10,000 euros y el usuario es preferente, mostrar un mensaje con una recomendación especial (tipo de interés alto).
- Si el saldo es mayor a 10,000 euros pero el usuario no es preferente, mostrar un mensaje diciendo que puede abrir una cuenta premium.
- Si el saldo está entre 1,000 y 10,000 euros y el usuario ha hecho menos de 3 transacciones recientes, mostrar una advertencia para mantener el saldo.
- Si el saldo es menor de 1,000 euros, mostrar una advertencia diciendo que podría haber cargos por saldo insuficiente.

Por ejemplo:
Si el saldo es 5000 y el número de transacciones recientes es 1, el mensaje podría ser:
"Tu saldo es saludable. Te recomendamos mantener tu saldo por encima de 1,000 para evitar cargos adicionales."
*/
// clientebanco.html SIN RUTA todo con html y JS en un fichero





