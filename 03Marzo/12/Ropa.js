class Ropa {
    constructor(descripcion, color, talla) {
        this.descripcion = descripcion
        this.color = color
        this.talla = talla
    }

    mostrarRopa() {
        return `${this.descripcion} ${this.color} ${this.talla}`
    }
}

class Pantalon extends Ropa {
    constructor(descripcion, color, talla, estilo) {
        super(descripcion, color, talla); // Call the parent class constructor
        this.estilo = estilo;
    }
    mostrarRopa() {
        return `${this.descripcion} ${this.color} ${this.talla} ${this.estilo}`
    }    
}

class Camiseta extends Ropa {
    constructor(descripcion, color, talla, longitud) {
        super(descripcion, color, talla); // Call the parent class constructor
        this.longitud = longitud;
    }
    mostrarRopa() {
        return `${this.descripcion} ${this.color} ${this.talla} ${this.longitud}`
    }    
    
}

export { Ropa, Pantalon, Camiseta }