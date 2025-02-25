// server.mjs
// ejecutar en terminal con node --watch servernode.js
import { createServer } from 'node:http';

const nombre = "Jason";
const server = createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World!');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Hello World!</h1>');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Esta web pertenece a ©️${nombre} Ltd.</h>
</body>
</html>`);
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`