/*
coisas para fazer:

atualizar registro de entrega (implementando)


*/

import entrega from "../classes/entrega.js"
import conentrega from './controladorEntrega.js'
import conpedido from './controladorPedido.js'
import condrone from './controladorDrone.js'
let controladorEntrega = new conentrega()
let controladorPedido = new conpedido()
let controladorDrone = new condrone()

controladorEntrega.finalizarEntrega = (id_pedido) => {
        let a = this.encontrarEntrega(id_pedido)
        let b = controladorDrone.encontrarDrone(a.getIDDrone())
        b.changeStatus()
        a.setStatus("Entregue")
}

controladorEntrega.registrarEntrega = (id_drone, id_pedido, status) => {
    let a = false
    let b = false
    let drone
    let pedido
    for (let x of controladorPedido.pedidos) {
        if (x.getId() === id_pedido && x.getStatus() !== "Finalizado") {
            a = true
            pedido = x
        }
    }
    for (let x of controladorDrone.drones) {
        if (x.getId() === id_drone && !x.getStatus()) { // verificação se o drone existe e se está liberado
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
    

    for (let x of controladorEntrega.entregas) {
        if ((x.getIDDrone() === id_drone || x.getIDPedido() === id_pedido) && x.getStatus() !== "Finalizada") {
            return false
        }
    }

    let c = controladorEntrega.criarEntrega(id_pedido, id_drone, status)
    return c
}


export {controladorDrone, controladorEntrega, controladorPedido}