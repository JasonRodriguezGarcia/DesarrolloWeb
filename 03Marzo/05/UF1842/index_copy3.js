import express from 'express';
// path fileURLToPatch a añadir junto a __filename __dirname
// ya que no están en ES Modules

// versión 3 index.js con la actividad
import path from 'path';
import { fileURLToPath } from 'url';  // __dirname no esta disponible con ES Modules

const app = express(); // instanciar (crear) aplicacion
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware que se pone tras instanciar la app
// indicamos que las páginas estáticas están en public
app.use(express.static(path.join(__dirname, 'public')));



function logger(req, res, next) {
    console.log(`LOGGER: ${req.url}`);
    next(); // que continue ejecutando el resto del código, sin esto se para aquí
}

// OJO importante donde colocarlo, ya que se ejecuta a partir de donde se ponga
app.use(logger); // añadiendo midleware, ejemplo comprobación usuario logeado

// añadir ruta /, para añadir mas repetir
app.get('/', (req, res) => {
    // indicamos que el fichero está dentro de views
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});    

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'aboutus.html'));
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

app.get('/actividad', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'actividad.html'));
});
app.get('/win', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'win.html'));
});
app.get('/lose', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'lose.html'));
});


// más midleware
// si hasta agui no encontró una ruta, ejecutar esto
app.use((req, res) => {
    res.status(404).send("Error quillo: Página no existe");
})

app.listen(3001, () => {
    console.log('Server running in http://localhost:3001')
})