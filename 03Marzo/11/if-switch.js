// Actividad 1:
let isLoggedIn = true;

// Mostrar un mensaje de bienvenida si el usuario está loggedin. Si no, mostrar un mensaje que le invite a iniciar sesion.
console.log(isLoggedIn ? "Bienvenido" : "Quieres iniciar una sesión?")
switch (isLoggedIn){
    case true:
        console.log("BIENVENIDO...")
        break
    case false:
        console.log("QUIERES INCIAR UNA SESION?")
        break
}       

console.log("---------------")
// Actividad 2: Correjir el siguiente error
let fruta = "mango";

switch (fruta) {
    case "manzana":
    case "pera":
      console.log("Es una fruta normal.");
      break;
    case "banana":
    case "mango":
      console.log("Es una fruta tropical.");
      break;
  }
  
