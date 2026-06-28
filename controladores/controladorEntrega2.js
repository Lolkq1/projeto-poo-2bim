/*
coisas para fazer:

atualizar registro de entrega (implementando)


*/

const entrega = require("../classes/entrega")

let controladorEntrega = new require('./controladorEntrega')()
let controladorPedido = new require('./controladorPedido')()
let controladorDrone = new require('./controladorDrone')()

controladorEntrega.finalizarEntrega = (id_pedido) => {
        let a = this.encontrarEntrega(id_pedido)
        let b = controladorDrone.encontrarDrone(a.getIDDrone())
        b.changeStatus()
        a.setStatus("Entregue")
}

controladorEntrega.registrarEntrega = (id_drone, id_pedido, status) => {
    let a = false
    let b = false
    let drone = undefined
    let pedido = undefined
    for (x of controladorPedido.pedidos) {
        if (x.getId() === id_pedido && x.getStatus()) {
            a = true
            pedido = x
        }
    }
    for (x of controladorDrone.drones) {
        if (x.getId() === id_drone && x.getStatus() === false) { // verificação se o drone existe e se está liberado
            b = true
            drone = x
        }
    }
    
    if (!(a && b)) {
        return false
    }

    // fazer verificação da capacidade
    if(pedido.getCapacidade() > drone.getCapacidade()){
        return false
    }
    

    for (x of controladorEntrega.entregas) {
        if (x.getIDDrone() === id_drone || x.getIDPedido() === id_pedido) {
            return false
        }
    }

    let c = new entrega(id_drone, id_pedido, status)
    return c

}

module.exports = {
    controladorDrone, controladorEntrega, controladorPedido
}