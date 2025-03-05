import { createServer } from 'node:http'
// otra manera de invocar createServer con ES module scope
// const { createServer } = require('node:http');

import fs from 'node:fs'
// otra menera de invocar fs
// const { fs } = require('node:fs')
import querystring from 'node:querystring'
// otra manera de invocar querystring
// const { querystring} = require()

// SERVER DETAILS
const hostName = "127.0.0.1"
const port = 3000

// The createServer() method of http creates a new HTTP server and returns it.
// The server is set to listen on the specified port NUMBER and HOST NAME. When the server is ready, 
// the callback function is called, in this case informing us that the server is running.

// Whenever a new request is received, the request event is called, providing two objects: a 
// request (an http.IncomingMessage object) and a response (an http.ServerResponse object).
// Those 2 objects are essential to handle the HTTP call.
// THE FIRST (req) provides the request details AND you 
// could access the request headers and request data.
// THE SECOND (res) is used to return data to the caller.

const server = createServer((req, res) => {

    // /login
    var url = req.url
    var method = req.method
    var fileName = ""

    // creating url's routes
    if (url === "/") {
        fileName = "index.html"
    } else
    if (url === "/register") {
        fileName = "register.html"
    } else
    if (url === "/thanks") {
        fileName = "thanks.html"
    } else
    if (url === "/login") {
        fileName = "login.html"
    }

    // attending to methods
    if(method === "GET") { // al usarse las rutas lee las páginas con su fileName
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                // we set the statusCode property to 404, to indicate on response path not founded.
                res.statusCode = 404
                // We set the Content-Type header
                res.setHeader('Content-Type', 'text/plain')
                res.write("Archivo no existe")
                res.end()
            }
            else {
                //we set the statusCode property to 200, to indicate on response a successful response.
                //res.statusCode = 200 // status code by default¿?, nothing happens without this line
                // We set the Content-Type header
                //res.setHeader('Content-Type', 'text/html') // text/html by default¿?, nothing happens without this line
                res.statusCode = 302 // statusCode for FOUNDED
                console.log("Devolviendo fichero: ", fileName)
                res.write(data.toString())
                console.log("url: ", url, " --- method: ", method)
                res.end()
            } 
        })    
    }
    if(url === "/register" && method === "POST") {
        let body = ""
        // recibimos los datos poco a poco
        req.on("data", chunk => {
            body += chunk.toString() // Collect chunk
        })
        req.on("end", () => {
            // mostramos datos en consola
            console.log("Full request body: ", body)
            const formData = querystring.parse(body)
            console.log(formData.txtNombre)
            console.log(formData.correo)
            
            const content = 
                `Nombre: ${formData.txtNombre}\n`+
                `Correo: ${formData.correo}\n`
            console.log("***Datos:\n" + content)
            fs.writeFile("example.txt", JSON.stringify(formData), (err) => {
                if (err) {
                    console.log("Hay un error, si eso también ya tal ...")
                } else {
                    console.log("Exito al crear archivo")
                    res.writeHead(302, {'Location': '/thanks'}) // redirecting to /thanks
                    res.end()
                }
            })
        })
            
    }
})

// runs a simple http server locally on defined port (3000) and hostName (127.0.0.1)
server.listen(port, hostName, () => {
    // console.log('Server running - Listening on 127.0.0.1:3000')
    console.log(`Server running - Listening on ${hostName}:${port}`)
})
