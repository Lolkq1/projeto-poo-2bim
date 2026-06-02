let controladorEntrega = new require('./controladores/controladorEntrega')()
let controladorPedido = new require('./controladores/controladorPedido')()
let controladorDrone = new require('./controladores/controladorDrone')()

controladorEntrega.finalizarEntrega = (id_pedido) => {
        let a = this.encontrarEntrega(id_pedido)
        let b = controladorDrone.encontrarDrone(a.getIDDrone())
        b.changeStatus()
        a.setStatus("Entregue")
}

module.exports = {
    controladorDrone, controladorEntrega, controladorPedido
}