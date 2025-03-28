// creamos un servidor para pasar los parámetros a una página web
import { createServer} from 'node:http';
import url from 'node:url';
import fs from 'node:fs';

const hostName = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    // var url = req.url
    // var method = req.method
    // var fileName = ""
        // Retrieving .htlm file name
        const requestURL = req.url;
        // console.log(requestURL);
        let urlHTML = requestURL.slice(1,requestURL.search(".html")+5);
        // console.log(urlHTML);

    if (req.method === 'GET' && urlHTML === "querystring1.html") {
        const parsedUrl = url.parse(req.url, true); // The second argument 'true'
        // console.log(parsedUrl)
        const queryData = parsedUrl.query; // access to query object
        console.log(queryData)
        const nombre = queryData.nombre; // ?name
        const edad = queryData.edad;

        console.log(nombre, edad);

    }
        res.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://${hostName}:${port}`)
})