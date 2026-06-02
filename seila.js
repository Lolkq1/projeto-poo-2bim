class drone {
    // a capacidade é em kg.
    // true indica disponível, false indica indisponível.
    constructor(id, capacidade, status) {
        if (Number.isNaN(id) || Number.isNaN(capacidade) || !(status === true || status === false)) {
            console.log('dados inválidos')
            return false
        }
        for (x of drone.drones) {
            if (x.id === id) {
                console.log('id já utilizado.')
                return false
            }
        }    
        this.#id = id
        this.#capacidade = id
        this.#status = status
        drone.drones.push(this)
    }

    changeStatus() {
        this.#status = !this.#status
    }

    getStatus() {
        return this.#status
    }

}

class pedido {
    constructor(id, descricao, destino, status) {
        if (Number.isNaN(id) || !(status === true || status === false)) {
            console.log('dados inválidos')
            return false
        }
        for (x of pedido.pedidos) {
            if (x.id === id) {
                console.log('id já utilizado.')
                return false
            }
        }

        this.#id = id
        this.#descricao = descricao
        this.#destino = destino
        this.#status = status
        pedido.pedidos.push(this)
    }


}

class entrega {
    constructor(ID_drone, ID_pedido, status) {
        let a=false
        let b=false
        for (x of drone.drones) {
            if (ID_drone === x.id) {
                a=true
                break
            } 
        }
        for (x of pedido.pedidos) {
            if (ID_pedido === x.id) {
                b=true
                break
            }
        }
        if (!(a && b) || !(status === true || status === false)) {
            return "dados inválidos."
        }

        this.#ID_drone = ID_drone
        this.#ID_pedido = ID_pedido
        this.#status = status
    }
}
class Controlador {
    static drones = []
    static pedidos = []
    static entregas = []
    cadastroDrone(id, capacidade){
        let newDrone = new drone(id, capacidade)
        drones.push(newDrone)
    }
    registroPedido(id, descricao, destino){
        let newPedido = new pedido(id, descricao, destino)
        pedidos.push(newPedido)
    }
    inicarEntrega(entrega){
        entrega.drone.#status = false
        entrega.entrega.status = 'A caminho'
    }
    finalizarEntrega(entrega){
        entrega.drone.#status = true
        entrega.entrega.status = 'Entregue'
    }

}