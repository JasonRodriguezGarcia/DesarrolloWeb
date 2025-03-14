// clases
// https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/
//
class Guitarra {
    // encapsulación de precioDeCoste (privatizar dejando no visible)
    #precioDeCoste = 100 // atributo privado o metodo privado precedidos de #

    constructor(marca, cuerdas) { //marca, cuerdas atributos o propiedades - abstraccion
        this.marca = marca;
        this.cuerdas = cuerdas;
    }
    mostrarPrecioDeVenta() {
        return this.#precioDeCoste * 1.2
    }
    // métodos
    tocar() {
        console.log(`ting ... ting ... de las ${this.cuerdas} cuerdas!!`)
        return `ting ... ting ... de las ${this.cuerdas} cuerdas!!`
    }

    tocarAlto() {
        console.log(`ting ... ting ... ${this.cuerdas} alto!!`.toUpperCase())
    }

    tocarMuyFuerte() {
        this.cuerdas --
        console.log(`TING ... TING ... ${this.cuerdas} MUY FUERTE!!`.toUpperCase())
    }

}
// usar objeto
const guitar = new Guitarra("Fender", 6) // instanciar, creamos una versión de Guitarra
console.log(guitar.marca)
guitar.marca = "Les Paul"
console.log(guitar.marca)
console.log(guitar.cuerdas)
guitar.tocar()
guitar.tocarAlto()
guitar.tocarMuyFuerte()
console.log(guitar.cuerdas)
guitar.tocarMuyFuerte()
console.log(guitar.cuerdas)
guitar.tocarMuyFuerte()
console.log(guitar.cuerdas)
//console.log(guitar.precio) // no funciona porque es privado
console.log(guitar.mostrarPrecioDeVenta())

// herencia -- clase padre - clase hijo
console.log("*****************")
class GuitarraElectrica extends Guitarra{
    // constructor igual que el padre
    constructor(marca, cuerdas, distorsion) { //marca, cuerdas atributos o propiedades - abstraccion
        super(marca, cuerdas) // atributos de clase padre del cual heredamos
        this.distorsion = distorsion // atributos propios de GuitarraElectrica
    }
    enchufar() {
        console.log("Esta enchufado")
    }
    tocarAlto() { // Poliformismo - modificando un método del padre
        if (this.distorsion === true)
            console.log(`DISTORSIOOOONNNNN!!`)
    }
}

const ge = new GuitarraElectrica("Fender", 6, true)

console.log(ge.cuerdas)
console.log(ge.distorsion)
ge.tocar()
ge.enchufar()
ge.tocarAlto()


// module.exports = { Guitarra, GuitarraElectrica} // In Node.js CommonJS

//export default Guitarra
// ó
export { Guitarra, GuitarraElectrica }