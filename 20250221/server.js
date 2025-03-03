import { createServer } from 'node:http';
import fs from 'node:fs';

const server = createServer((req, res) => {


    // /login
    var url = req.url;

    var fileName = "";
    
    if (url === "/") {
        fileName = "index.html";
    }
    else {
        fileName = "login.html";
    }
    
    if(req.method === "POST") {
        let body = ""
        // recibimos los datos poco a poco
        req.on("data", chunk => {
            body += chunk.toString() // Collect chunk
        })

        req.on("end", () => {
            console.log("Full request body: ", body)
            res.end()
        })
    }

    // creo que este fs.readFile sobra, puesto por error¿?
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.write("Archivo no exiete");
            res.end();
        }
        else {
            res.write(data.toString());
            res.end();
        } 
    });
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
