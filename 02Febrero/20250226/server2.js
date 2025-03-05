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
    let urlHTML = requestURL.slice(1,requestURL.search(".html")+5);
    console.log(urlHTML);

    if (req.method === "GET" && urlHTML === "querystring3.html"){
        
        // Retrieving URL and parsing (to object) to work with 
        const parsedURL = url.parse(req.url, true);
        console.log(`parsedURL:\n`, parsedURL);
        // Once URL is parse we can work with their objects
        //      Retrieving query string content
        //          { edad: '550', nombre: 'pepes' }
        const queryData = parsedURL.query;
        //      Retrieving query objects
        const nombre =queryData.nombre;
        const edad = queryData.edad;
        const filenombre = urlHTML;

        fs.readFile(filenombre, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Not Found');
            } else {
                res.statusCode = 200;
                var responseData = data.toString()
                    .replace("{{nombre}}",nombre)
                    .replace("{{edad}}", edad);
                res.setHeader('Content-Type', 'text/html');
                res.end(responseData);
            }
         });
    };
});

server.listen(port, hostName, () => {
    console.log(`Server running on http://${hostName}:${port}`);
});
