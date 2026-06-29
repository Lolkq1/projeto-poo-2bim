import controladorPedido from "../controladores/controladorPedido";
function sistemaPedido(){
    do {
        console.log("1- CADASTRO DE PEDIDO\n2- ENCONTRAR PEDIDO\n3 - MODiFICAR DESCRIÇÃO\n4-SAIR")
        let opcao = parseInt(prompt("Escolha uma opção: "))

        switch(opcao){
            case 1:
                console.log("CADASTRO DE PEDIDO:")
                let idPedido = ()=>{return controladorPedido.pedidos.length + 1}
                let descricao = prompt("Descrição: ")
                let destino = prompt("Destino: ")
                let status = true    
                let carga = parseFloat(prompt("Carga: "))
                controladorPedido.registrarPedido(idPedido(), descricao, destino, status, carga)
            
            case 2:
                console.log("ENCONTRAR PEDIDO:")
                let idPedido2 = parseInt(prompt("Informe o id do pedido: "))
                let pedidoEnc = controladorDrone.encontrarPedido(idPedido2)
                if(!pedidoEnc){
                    return console.log("Pedido não encontrado!")
                }
                console.log(`ID: ${pedidoEnc.getId()}. Capacidade: ${pedidoEnc.getCapacidade()}. Status: ${pedidoEnc.getStatus()}`)

            case 3:
                console.log("MODIFICAR DESCRIÇÃO:")
                let idPedido3 = parseInt(prompt("Informe o id do pedido: "))
                let pedidoEnc = controladorDrone.encontrarPedido(idPedido2)
                if(!pedidoEnc){
                    return console.log("Pedido não encontrado!")
                }
                let novaDesc = prompt("Nova descrição: ")
                pedidoEnc.setDescricao(novaDesc)

            case 4:
                break
            default:
                console.log("Opção inválida")
            }
    } while (opcao != 4);
}

module.exports = sistemaPedido