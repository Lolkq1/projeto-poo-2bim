import entrega from '../classes/entrega.js'

class controladorEntrega {
   constructor() {
        this.entregas = []
   }

   criarEntrega(id_pedido, id_drone, status) {
        let c = new entrega(id_pedido, id_drone, status)
        this.entregas.push(c)
        return c
   }

   encontrarEntrega(id_pedido) {
    for (let x of this.entregas) {
        if (x.getIDPedido() === id_pedido) {
            return x
        }
    }
    return false
   }
   
}

export default controladorEntrega