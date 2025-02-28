// server.mjs
// ejecutar en terminal con node --watch servernode.js
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.statusCode = 400;
    res.statusMessage = "Esto es una prueba";
    res.end();
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`