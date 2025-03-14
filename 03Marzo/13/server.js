import express from 'express';
import fs from "node:fs"
import { Transportes } from "./services/Transportes.js"

// path fileURLToPatch a añadir junto a __filename __dirname
// ya que no están en ES Modules

// versión 6 index.js

// al usar /aboutus o /home a secas en la barra de navegación se INVOCA una petición GET (que es lo que ocurre por defecto
// cuando escribimos cualquier página web en la barra del navegador), que es detectada por nuestro programa con servidor
// express().

// esto es para el tema de directorios de los ficheros de los módulos
import path from 'path'; 
import { fileURLToPath } from 'url';  // __dirname no esta disponible con ES Modules

const app = express(); // instanciar (crear) aplicacion

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



/////////////////
// middleware que se pone tras instanciar la app
// indicamos que las páginas estáticas están en public
app.use(express.static(path.join(__dirname, 'public')));
// ayuda a decodificar el body y extraer información de él
app.use(express.urlencoded({ extended: true }));

// se crea una funcion para ser utilizada más adelante
// lo que hace esta función no es más que mostrar un texto LOGGER: con nuesta dirección url /
function logger(req, res, next) {
    console.log(`LOGGER: ${req.url}`);
    next(); // que continue ejecutando el resto del código, sin esto se para aquí
}

// OJO importante donde colocarlo, ya que se ejecuta a partir de donde se ponga
app.use(logger); // añadiendo midleware, ejemplo comprobación usuario logeado

// añadir ruta /, para añadir mas repetir
app.get('/', (req, res) => {
    // devolvemos en la respuesta un fichero html
    // indicamos que el fichero está dentro de views
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});    


// // Prueba para capturar querystring, pegar la siguiente cadena en la barra del navegador
// // http://localhost:3001/querystring?nombre=Jason&edad=52&pais=spagne
// // devolverá una cadena json con los datos metidos
// // ruta también usada en el ejercicio index.html
// app.get('/querystring', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'views', 'lose.html'));
//     console.log("querystring ...")
//     console.log(`${req.url} y ${req.method}`)
//     console.log(req.query)
//     // no hace falta usar url.parse(), destructura el req.query
//     const {nombre, edad, pais} = req.query;
//     if (nombre && edad && pais) {
//         console.log(`${nombre} tiene ${edad} años y es de ${pais}`)
//     } else {
//         console.log("FALTAN DATOS")
//     }
//     // res.json({resultado: 'ok'});
//     // devolvemos una cadena json
//     res.json({nombre: nombre, edad: edad, pais: pais})
// });

// app.get('/pedido', (req, res) => {
//     // devolvemos en la respuesta un fichero html
//     res.sendFile(path.join(__dirname, 'views', 'pedido.html'));
// });
// app.post('/pedido', (req, res) => {
//     console.log("POST:");
//     // en lugar de chunk usamos middleware de express que codifica el body
//     // express.urlencoded
//     console.log(req.body);
//     const {cantidad} = req.body;
//     console.log(`cantidad: ${cantidad}`);
//     // uso de lógica de negocios en back-end
//     let mensaje = "";
//     if (cantidad <= 100) {
//         // res.json({
//         //     mensaje: "El valor del pedido debe ser mayor a 100 para ser procesado."
//         // })
//         mensaje = "El valor del pedido debe ser mayor a 100 para ser procesado.";
//     } else if (cantidad > 500) {
//         // res.json({
//         //     mensaje: "El valor del pedido debe ser menor a 500 para ser procesado."
//         // })
//         mensaje = "El valor del pedido debe ser menor a 500 para ser procesado.";
//     } else
//         mensaje = "Gracias. Pedido procesado.";
//     res.status(200).render("resultado", {mensaje});
    
// });

/////////////TRANSPORTES
app.get('/transportes', (req, res) => {
    // devolvemos en la respuesta un fichero html
    const calculo = ""
    res.render('transportes', { calculo });

});

app.post('/transportes', (req, res) => {
    // devolvemos en la respuesta un fichero html

    console.log(req.body)
    const {distancia, peso, tipoDeTransporte} = req.body
    const transporte = new Transportes(
        distancia,
        peso,
        tipoDeTransporte 
    )
    console.log(transporte.calcularCoste())
    const calculo = transporte.calcularCoste().toFixed(2)
    // res.sendFile(path.join(__dirname, 'views', 'transportes.html'));
    res.status(200).render("transportes", { calculo })
});

// más midleware
// al final del todo SIEMPRE!!!!!!!!!!!!!!!
// si hasta agui no encontró una ruta, ejecutar esto
app.use((req, res) => {
    res.status(404).send("Error quillo: Página no existe");
})

app.listen(3001, '127.0.0.1', () => {
    console.log('Server running in http://localhost:3001')
})