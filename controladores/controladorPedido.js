import pedido from '../classes/pedido.js'

class controladorPedido {
    constructor() {
        this.pedidos = []
    }
    registrarPedido(id, descricao, destino, status, capacidade) {
        for (let x of this.pedidos) {
            if (x.getId() === id) {
                return false
            }
        }
        let pedido2 = new pedido(id, descricao, destino, status, capacidade)
        this.pedidos.push(pedido2)
        return pedido2;
    }
    encontrarPedido(id){
        for(let x of this.pedidos){
            if(x.getId() === id){
                return x
            }
            return false
        }
    }

}

export default controladorPedido