import controladorPedido from "../controladores/controladorPedido";
const prompt = require("prompt-sync");

// Lembrar depois de adicionar um id fixo a drones e pedido 
// lembrar deposi de adicionar carga como atributo do pedido


function sistemaPedido(){
    do {
        console.log("1- CADASTRO DE PEDIDO\n2- ENCONTRAR PEDIDO\n3 - SAIR")
        let opcao = parseInt(prompt("Escolha uma opção: "))

        switch(opcao){
            case 1:
                console.log("CADASTRO DE PEDIDO:")
                let idPedido = "alguma coisa ai que depois eu conserto"
                let descricao = prompt("Descrição: ")
                let destino = prompt("Destino: ")
                let status = false    
                controladorPedido.registrarPedido(idPedido, descricao, destino, status)
            
            case 2:
                console.log("ENCONTRAR PEDIDO:")
                let idPedido2 = parseInt(prompt("Informe o id do drone: "))
                let pedidoEnc = controladorDrone.encontrarPedido(idPedido2)
                if(!pedidoEnc){
                    return console.log("Pedido não encontrado!")
                }
                console.log(`ID: ${pedidoEnc.getId()}. Capacidade: ${pedidoEnc.getCapacidade()}. Status: ${pedidoEnc.getStatus()}`)

            case 3:
                break
            default:
                console.log("Opção inválida")
            }
    } while (opcao != 3);
}

module.exports = sistemaPedido