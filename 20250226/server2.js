import { createServer } from 'node:http';
import fs from 'node:fs';
import querystring from 'node:querystring';
import url  from 'node:url';

const hostnombre = "127.0.0.1" ;
const port = "3000";
//sacar datos via get en el server
const server = createServer((req, res) => {
    if (req.method === "GET"){
        const parsedURL = url.parse(req.url, true);
        const queryData = parsedURL.query;
        const nombre =queryData.nombre;
        const edad = queryData.edad;
        const filenombre ="querystring3.html";
         fs.readFile(filenombre, (err, data) => {
                    if (err) {
                        res.statusCode = 404;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Not Found');
                    } else {
                        res.statusCode = 200;
                       
                        var responseData =data.toString().replace("{{nombre}}",nombre);
                        responseData=responseData.toString().replace("{{edad}}", edad);
                        res.setHeader('Content-Type', 'text/html');
                        res.end(responseData);
                    }
         });
        
    };
});
server.listen(port, () => {
    console.log('Server running on http://127.0.0.1:3000/');
});
