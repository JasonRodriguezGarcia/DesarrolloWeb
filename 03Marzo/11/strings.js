// emplear: replace(), toUpperCase(), trim(), concat(), split(), toLowerCase(), repeat()



let str1 = "   Hello, World!   ";
// resultado esperado; 'Hello, World!
console.log(str1.trim())


let str2 = "Hello, Javascript!";
// resultado esperado; 'Hola, Javascript!
console.log(str2.replace("Hello", "Hola"))

console.log("-----------------")
let str3 = "Hello, World!";
// resultado esperado; 'HELLO, WORLD!'
// resultado esperado; 'hello, world!'
console.log(str3.toUpperCase())
console.log(str3.toLowerCase())

console.log("-----------------")
let str4 = "Hello";
// resultado esperado; ['H', 'e', 'l', 'l', 'o']
console.log(str4.split(""))

console.log("-----------------")
let str5 = "apple,banana,orange";
// resultado esperado; ['apple', 'banana', 'orange']
console.log(str5.split(","))

console.log("-----------------")
let str11 = "Hello";
let str21 = "World";
console.log(str11.concat(", ", str21)) // podemos poner más (", ", str21, str33, ...)
// resultado esperado; 'Hello, World!'

console.log("-----------------")
let str6 = "Hi! ";
// resultado esperado; 'Hi! Hi! Hi! '

console.log(str6.repeat(3))
// -------------------------

// Qué resultado esperas?
let str = "Hello, World!";
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("World!"));  // true
console.log(str.startsWith("World"));  // false

// Qué resultado esperas?
let str22 = "Hello, World!";
console.log(str22.includes("World"));  // true
console.log(str22.includes("JavaScript")); // false