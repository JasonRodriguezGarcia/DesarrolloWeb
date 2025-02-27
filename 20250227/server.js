import { createServer } from 'node:http';
import fs from 'node:fs';
import url  from 'node:url';

const hostName = "127.0.0.1" ;
const port = 3000;

//sacar datos via get en el server
const server = createServer((req, res) => {
    // Retrieving .htlm file name
    const requestURL = req.url;
    console.log(requestURL);
    let urlHTML = requestURL.slice(1, requestURL.search(".html")+5);
    console.log(urlHTML);

    if (req.method === "POST" ){

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


            res.end(JSON.toString(resultado))
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

        
        // // Retrieving URL and parsing (to object) to work with 
        // const parsedURL = url.parse(req.url, true);
        // console.log(`parsedURL:\n`, parsedURL);
        // // Once URL is parse we can work with their objects
        // //      Retrieving query string content
        // //          { edad: '550', nombre: 'pepes' }
        // const queryData = parsedURL.query;
        // //      Retrieving query objects
        // const precio =queryData.precio;
        // const cantidad = queryData.cantidad;
        // const filenombre = urlHTML;

        // fs.readFile(filenombre, (err, data) => {
        //     if (err) {
        //         res.statusCode = 404;
        //         res.setHeader('Content-Type', 'text/plain');
        //         res.end('Not Found');
        //     } else {
        //         res.statusCode = 200;
        //         var responseData = data.toString()
        //             .replace("{{nombre}}",precio)
        //             .replace("{{edad}}", edad);
        //         res.setHeader('Content-Type', 'text/html');
        //         res.end(responseData);
        //     }
        //  });
    };
});

server.listen(port, hostName, () => {
    console.log(`Server running on http://${hostName}:${port}`);
});
