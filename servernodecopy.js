// server.mjs
// ejecutar en terminal con node --watch servernode.js

import { createServer } from 'node:http';

const server = createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World!');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Hello World!</h1>');
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola a todos</h1>
    <p>Mi primera página del servidor en Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti consectetur quaerat ut libero voluptatem sequi at iusto dolor aperiam quasi, laborum minima dolore neque quod impedit alias dolorum asperiores.</p>
</body>
</html>        
        `);
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`