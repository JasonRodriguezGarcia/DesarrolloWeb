import express from 'express'; // usamos la forma moderna tipo "ES modele" de importar modulos la antigua es "commonjs"

// version 1 index.js
// al usar /aboutus o /home a secas en la barra de navegación se INVOCA una petición GET (que es lo que ocurre por defecto
// cuando escribimos cualquier página web en la barra del navegador), que es detectada por nuestro programa con servidor
// express().
const app = express(); // instanciar (crear) aplicacion, en definitiva usamos express() que se añade a una constante app

// se crea una funcion para ser utilizada más adelante
// lo que hace esta función no es más que mostrar un texto LOGGER: con nuesta dirección url /
// probar con /aboutus
function logger(req, res, next) {
    console.log(`LOGGER: ${req.url}`);
    next(); // que continue ejecutando el resto del código, sin esto se para aquí
}

// OJO importante donde colocarlo, ya que se ejecuta a partir de donde se ponga, si se pone más abajo
// todo lo que esté antes no aparecerá en consola (que es lo que hace la función logger)
app.use(logger); // esta es una forma de añadir midleware, otro sería ejemplo comprobación usuario logeado

// añadimos ruta / para una peticion .get
// para añadir mas repetir el mismo código app.get.... 
// para probarlo poner localhost:3001/ en la barra del navegador y responderá con Mi primer web... en el navegador
// en la consola del servidor 
app.get('/', (req, res) => {
    // console.log("pepe");
    res.send("Mi primer web server con express");
});


// añadida otra ruta /aboutus para una petición .get
// lo que hacemos es enviar en la respuesta (res) código html que puede ser interpretado por el navegador
app.get('/aboutus', (req, res) => {
    // console.log("pepe");
    res.send(`
        <html>
        <head></head>
        <body>
        <h1><i>ABOUT US:<br> Somo</i> la leche !!</h1><br><a href="/home">Pinchar aqui</a>
        </body>
        </html>
        `);
    });

app.get('/home', (req, res) => {
    // console.log("pepe");
    res.send(`
        <html>
        <head></head>
        <body>
        <h1><i>HOME:<br> Somo</i> mas la leche !!</h1><br><a href="/aboutus">Pinchar aqui</a>
    </body>
    </html>
    `);
});

// más midleware
// si hasta agui no encontró una ruta, ejecutar esto
app.use((req, res) => {
    res.status(404).send("Error quillo: Página no existe");
})

app.listen(3001, () => {
    console.log('Server running in http://localhost:3001')
})