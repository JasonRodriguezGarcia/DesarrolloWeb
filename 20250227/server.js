import { createServer } from 'node:http';
import querystring from 'node:querystring'
import fs from 'node:fs';
import url  from 'node:url';

const hostName = "127.0.0.1" ;
const port = 3000;

//sacar datos via get en el server
const server = createServer((req, res) => {
    // Retrieving .htlm file name
    const requestURL = req.url;
    console.log(requestURL);
    // let urlHTML = requestURL.slice(1, requestURL.search(".html")+5);
    // console.log(urlHTML);

    if (req.method === "POST"  && requestURL === "/calcular"){

        let body = ""
        // recibimos los datos poco a poco
        req.on("data", chunk => {
            body += chunk.toString() // Collect chunk
        })
        req.on("end", () => {
            // mostramos datos en consola
            console.log("Full request body: ", body)
            const formData = querystring.parse(body)
            console.log(formData.precio)
            console.log(formData.cantidad)
            
            const content = 
                `Precio: ${formData.precio}\n`+
                `Cantidad: ${formData.cantidad}\n`
            console.log("***Datos:\n" + content)

            // hacer calculos
            const resultado = formData.precio * formData.cantidad * 1.12
            console.log (resultado)

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify({ "Resultado" : resultado }))
            // fs.writeFile("example.txt", JSON.stringify(formData), (err) => {
            //     if (err) {
            //         console.log("Hay un error, si eso también ya tal ...")
            //     } else {
            //         console.log("Exito al crear archivo")
            //         res.writeHead(302, {'Location': '/thanks'}) // redirecting to /thanks
            //         res.end()
            //     }
            // })
        })
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify({ "url error": "Not found"}))
    };
});

server.listen(port, hostName, () => {
    console.log(`Server running on http://${hostName}:${port}`);
});
