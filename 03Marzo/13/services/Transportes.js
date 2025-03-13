///////////
// definiendo clase
class Transportes {
    #tarifa = [{tipo: "patinete", precioTarifa: 0.15}, {tipo: "bicicleta", precioTarifa: 0.10}]
    constructor(distancia, peso, tipoDeTransporte) {
        this.distancia = distancia
        this.peso = peso
        this.tipoDeTransporte = tipoDeTransporte
    }
    calcularCoste (){
        // return 'ok'
        return `${this.distancia * this.peso * (this.tipoDeTransporte == "patinete" ? 
                    this.#tarifa[0].precioTarifa : this.#tarifa[1].precioTarifa)}`
    }
}

export { Transportes }