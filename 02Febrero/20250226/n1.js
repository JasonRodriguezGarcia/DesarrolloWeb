console.log("1");

setTimeout(() =>{ 
    console.log("2")
}, 2000);

console.log("3");


// en Node js
console.log(globalThis.process); // no funciona en el navegador

// standard input (linea consola terminal)
// esta escuhando 'data' y copia a input
process.stdin.on('data', (input) =>{
    console.log(`Has dicho ${input}`); // imprime en consola el input
    process.stdout.write(`Has dicho ${input}`) // tambien imprime en consola pero ...
    // process.exit() // para salir del programa
});

// si pulsamos control+c para terminar ...

// ejecuta el siguiente código para indicar final
process.stdin.on('end', (input) =>{
    process.stdout.write(`Adios...`) // tambien imprime en consola pero ...
    process.exit() // para salir del programa
});

