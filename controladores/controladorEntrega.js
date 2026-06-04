const entrega = require('../classes/entrega')

class controladorEntrega {
   entregas = []
   constructor() {}

   encontrarEntrega(id_pedido) {
    for (x of entregas) {
        if (x.getIDPedido() === id_pedido) {
            return x
        }
    }
    
    return false
   }
   
}

module.exports = controladorEntrega