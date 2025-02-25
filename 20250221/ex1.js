// este crea o sobreescribe (si existe) un fichero

// importar modulo - fs
import fs from 'node:fs'
// Crear un document de Markdown
let contenido = `
# (h1) Mi primer archivo de markdown (lenguaje de marcas)

## (h2)Introducción
Esto es mi introducción y **bold** e *italics* y que mas

## Cuerpo
Una lista:
- JavaScrís
    * en firefós
    * en krome
- Javas
    * mi programa
    * mi otro programa
- acHeTeeMeLe

## Mi página güé es
[my página web](http://portfolio-jrg.free.nf)


`


fs.writeFile("test1.md", contenido, (err) => {
    if (err) {
        console.log("Hay un error !! Si ya tal ...")
    } else {
        console.log("Exito al crear archivo")
    }
})
