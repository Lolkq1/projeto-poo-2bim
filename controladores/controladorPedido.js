const pedido = require("../classes/pedido");

class controladorPedido {
    pedidos = []
    constructor() {

    }
    registrarPedido(id, descricao, destino, status, capacidade) {
        for (x of this.pedidos) {
            if (x.getId() === id) {
                return false
            }
        }
        let pedido2 = new pedido(id, descricao, destino, status, capacidade)
        this.pedidos.push(pedido2)
        return pedido2;
    }
    encontrarPedido(id){
        for(x in pedidos){
            if(x.getId() === id){
                return x
            }
            return false
        }
    }

}

module.exports = controladorPedido