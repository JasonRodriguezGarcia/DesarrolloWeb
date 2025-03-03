// este añade contenido a un fichero

// importar modulo - fs
import fs from 'node:fs'
// Crear un document de Markdown
let contenido = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola test de fs</h1>
</body>
</html>
`

fs.appendFile("test1.html", contenido, (err) => {
        if (err) {
        console.log("Hay un error !! Si ya tal ...")
    } else {
        console.log("Archivo actualizado")
    }
})
