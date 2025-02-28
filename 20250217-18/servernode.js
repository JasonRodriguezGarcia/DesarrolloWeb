// server.mjs
// ejecutar en terminal con node --watch servernode.js
import { createServer } from 'node:http';
import fs from 'node:fs';

// const fs = require('fs'); 

// const server = createServer((req, res) => {
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // res.end('Hello World!');
//     res.writeHead(200, { 'Content-Type': 'text/xml' });
//     // res.end('<h1>Hello World!</h1>');
//     res.end(`<?xml version="1.0" encoding="UTF-8"?>
// <!-- Este es un comentario al principio del documento XML -->

// <catalogo>
//     <!-- Comentario dentro de un elemento -->

//     <libro categoria="programación" idioma="es">
//         <titulo>Introducción a XML</titulo>
//         <autor>Juan Pérez</autor>
//         <anio>2025</anio>
//         <editorial>Editorial Técnica</editorial>
//         <descripcion>Este libro es una guía completa sobre XML.</descripcion>
// <!-- Ejemplo de codificación de caracteres escapados -->
//         <comentario>El signo mayor &gt; se usa para comparar valores.</comentario>
//     </libro>

//     <libro categoria="diseño web" idioma="en">
//         <titulo>Fundamentos de HTML y CSS</titulo>
//         <autor>María López</autor>
//         <anio>2024</anio>
//         <editorial>Ediciones Creativas</editorial>
//         <descripcion>Un enfoque práctico para diseñadores web.</descripcion>
//         <comentario>El símbolo menor &lt; se utiliza en etiquetas HTML.</comentario>
//     </libro>

//     <libro categoria="base de datos" idioma="es">
//         <titulo>SQL para Principiantes</titulo>
//         <autor>Carlos Gómez</autor>
//         <anio>2023</anio>
//         <editorial>Grupo Editorial</editorial>
//         <descripcion>Aprende SQL desde cero con ejemplos prácticos.</descripcion>
//     </libro>

// <!-- Fin del catálogo -->
// </catalogo>
//         `);
// });

const server = createServer((req, res) => {
    // /login
    let url = req.url.slice(1,);
    console.log(url);
    let fileName = "";
    if (url === "") {
        fileName = "index.html";
    }
    else if (url === "login") {
        fileName = "login.html";
    }
    else if (url == "json") {
        fileName = "json.html";
    }
    // console.log(req.url);

    fs.readFile(fileName, "utf-8", (error, data) => {
        if (error) {
            res.statusCode = 404;
            res.write ("Archivo no existe");
            res.end();
        }
        else {
            res.write(data.toString());
            res.end();
            // console.log(data.toString());
        }
    });
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`