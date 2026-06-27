const entrega = require("./classes/entrega")

let controladorEntrega = new require('./controladores/controladorEntrega')()
let controladorPedido = new require('./controladores/controladorPedido')()
let controladorDrone = new require('./controladores/controladorDrone')()

controladorEntrega.finalizarEntrega = (id_pedido) => {
        let a = this.encontrarEntrega(id_pedido)
        let b = controladorDrone.encontrarDrone(a.getIDDrone())
        b.changeStatus()
        a.setStatus("Entregue")
}

controladorEntrega.registrarEntrega = (id_drone, id_pedido, status) => {
    let a = false
    let b = false

    for (x of controladorPedido.pedidos) {
        if (x.getId() === id_pedido) {
            a = true
        }
    }
    for (x of controladorDrone.drones) {
        if (x.getId() === id_drone) {
            b = true
        }
    }

    if (!(a && b)) {
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