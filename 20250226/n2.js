// Programa para preguntar al usuario de Scrum las preguntas de un daily standup
// 1 pregunta a la vez, mostrando una frase y finalmente termina

console.log("Qué hiciste ayer?")
// standard input (linea consola terminal)
// esta escuhando 'data' y copia a input
process.stdin.once('data', (input1) =>{
    process.stdout.write(`Has dicho que ayer hiciste ${input1}\n`) // tambien imprime en consola pero ...

    console.log("Qué harás hoy?")
    // standard input (linea consola terminal)
    // esta escuhando 'data' y copia a input
    process.stdin.once('data', (input2) =>{
        process.stdout.write(`Has dicho que hoy harás ${input2}\n`) // tambien imprime en consola pero ...

        console.log("Qué problema tienes?")
        // standard input (linea consola terminal)
        // esta escuhando 'data' y copia a input
        process.stdin.once('data', (input3) =>{
            process.stdout.write(`Has dicho que el problema de hoy es ${input3}\n`) // tambien imprime en consola pero ...
            process.exit() // para salir del programa
        });
    });
    
});


// si pulsamos control+c para terminar ...

// ejecuta el siguiente código para indicar final
// process.stdin.on('end', (input) =>{
//     process.stdout.write(`Adios...`) // tambien imprime en consola pero ...
//     process.exit() // para salir del programa
// });

