import express from 'express';
// path fileURLToPatch a añadir junto a __filename __dirname
// ya que no están en ES Modules

// versión 5 index.js

// al usar /aboutus o /home a secas en la barra de navegación se INVOCA una petición GET (que es lo que ocurre por defecto
// cuando escribimos cualquier página web en la barra del navegador), que es detectada por nuestro programa con servidor
// express().

// esto es para el tema de directorios de los ficheros de los módulos
import path from 'path'; 
import { fileURLToPath } from 'url';  // __dirname no esta disponible con ES Modules

const app = express(); // instanciar (crear) aplicacion

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware que se pone tras instanciar la app
// indicamos que las páginas estáticas están en public
app.use(express.static(path.join(__dirname, 'public')));
// ayuda a decodificar el body y extraer información de él
app.use(express.urlencoded({ extended: true }));

// se crea una funcion para ser utilizada más adelante
// lo que hace esta función no es más que mostrar un texto LOGGER: con nuesta dirección url /
// probar con /aboutus
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

app.get('/aboutus', (req, res) => {
    // devolvemos en la respuesta un fichero html
    res.sendFile(path.join(__dirname, 'views', 'aboutus.html'));
});

app.get('/home', (req, res) => {
    // console.log("pepe");
    // devolvemos en la respuesta una cadena que en este caso es codigo html
    res.send(`
        <html>
        <head></head>
        <body>
        <h1><i>HOME:<br> Somo</i> mas la leche !!</h1><br><a href="/aboutus">Pinchar aqui</a>
    </body>
    </html>
    `);
});

app.get('/actividad', (req, res) => {
    // devolvemos en la respuesta un fichero html
    // indicamos que el fichero está dentro de views
    res.sendFile(path.join(__dirname, 'views', 'actividad.html'));
});
app.get('/win', (req, res) => {
    // devolvemos en la respuesta un fichero html
    res.sendFile(path.join(__dirname, 'views', 'win.html'));
});
app.get('/lose', (req, res) => {
    // devolvemos en la respuesta un fichero html
    res.sendFile(path.join(__dirname, 'views', 'lose.html'));
});
app.get('/registro', (req, res) => {
    // devolvemos en la respuesta un fichero html
    res.sendFile(path.join(__dirname, 'views', 'registro.html'));
});

// Prueba para capturar querystring, pegar la siguiente cadena en la barra del navegador
// http://localhost:3001/querystring?nombre=Jason&edad=52&pais=spagne
// devolverá una cadena json con los datos metidos
// ruta también usada en el ejercicio index.html
app.get('/querystring', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'lose.html'));
    console.log("querystring ...")
    console.log(`${req.url} y ${req.method}`)
    console.log(req.query)
    // no hace falta usar url.parse(), destructura el req.query
    const {nombre, edad, pais} = req.query;
    if (nombre && edad && pais) {
        console.log(`${nombre} tiene ${edad} años y es de ${pais}`)
    } else {
        console.log("FALTAN DATOS")
    }
    // res.json({resultado: 'ok'});
    // devolvemos una cadena json
    res.json({nombre: nombre, edad: edad, pais: pais})
});

// usado en el ejercicio index.html
app.post('/post', (req, res) => {
    console.log("POST:")
    // en lugar de chunk usamos middleware de express que codifica el body
    // express.urlencoded
    const {nombre} = req.body;
    console.log(`nombre: ${nombre}`)
    // devolvemos una cadena json
    res.json({resultado: 'ok'})
});
// usado en el ejercicio registro.html
app.post('/registro', (req, res) => {
    console.log("POST:")
    // en lugar de chunk usamos middleware de express que codifica el body
    // express.urlencoded
    console.log(req.body)
    const {nombre, correo, contrasena1} = req.body;
    
    console.log(`nombre: ${nombre}`)
    // devolvemos una cadena json
    res.json({
        resultado: 'ok',
        data: {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena1
        }
    })
});

app.get('/pedido', (req, res) => {
    // devolvemos en la respuesta un fichero html
    res.sendFile(path.join(__dirname, 'views', 'pedido.html'));
});
app.post('/pedido', (req, res) => {
    console.log("POST:")
    // en lugar de chunk usamos middleware de express que codifica el body
    // express.urlencoded
    console.log(req.body)
    const {cantidad} = req.body;
    console.log(`cantidad: ${cantidad}`)
    
    if (cantidad <= 100) {
        res.json({
            mensaje: "El valor del pedido debe ser mayor a 100 para ser procesado."
        })
    }
    if (cantidad > 500) {
        res.json({
            mensaje: "El valor del pedido debe ser menor a 500 para ser procesado."
        })
    }
    // devolvemos una cadena json
    res.json({
        resultado: 'ok',
        data: {
            cantidad: cantidad,
        }
    })
});

// más midleware
// si hasta agui no encontró una ruta, ejecutar esto
app.use((req, res) => {
    res.status(404).send("Error quillo: Página no existe");
})

app.listen(3001, '127.0.0.1', () => {
    console.log('Server running in http://localhost:3001')
})