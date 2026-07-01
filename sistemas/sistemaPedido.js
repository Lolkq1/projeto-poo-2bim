import {controladorPedido} from "../controladores/controladorEntrega2.js";
import promptt from 'prompt-sync'
let prompt = promptt()
export default function sistemaPedido(){
    let ultima = 0
    do {
        console.log("1- CADASTRO DE PEDIDO\n2- ENCONTRAR PEDIDO\n3- MODiFICAR DESCRIÇÃO\n4- MODIFICAR STATUS\n5- MODIFICAR DESTINO\n6-SAIR")
        let opcao = parseInt(prompt("Escolha uma opção: "))
        ultima = opcao
        switch(opcao){
            case 1:
                console.log("CADASTRO DE PEDIDO:")
                let idPedido = ()=>{return controladorPedido.pedidos.length + 1}
                let descricao = prompt("Descrição: ")
                let destino = prompt("Destino: ")
                let status = "Iniciado"    
                let carga = parseFloat(prompt("Carga: "))
                controladorPedido.registrarPedido(idPedido(), descricao, destino, status, carga)
                break
            case 2:
                console.log("ENCONTRAR PEDIDO:")
                let idPedido2 = parseInt(prompt("Informe o id do pedido: "))
                let pedidoEnc = controladorPedido.encontrarPedido(idPedido2)
                if(!pedidoEnc){
                    return console.log("Pedido não encontrado!")
                    break
                }
                console.log(`\n \nID: ${pedidoEnc.getId()}. \nDescricao: ${pedidoEnc.getDescricao()}. \nCapacidade: ${pedidoEnc.getCapacidade()}. \nStatus: ${pedidoEnc.getStatus()}. \nDestino: ${pedidoEnc.getDestino()}\n \n`)
                break
            case 3:
                console.log("MODIFICAR DESCRIÇÃO:")
                let idPedido3 = parseInt(prompt("Informe o id do pedido: "))
                let pedidoEnc2 = controladorPedido.encontrarPedido(idPedido3)
                if(!pedidoEnc2){
                    return console.log("Pedido não encontrado!")
                    break
                }
                let novaDesc = prompt("Nova descrição: ")
                pedidoEnc2.setDescricao(novaDesc)
                break
            case 4:
                let idPedido4 = parseInt(prompt("Informe o id do pedido:"))
                let pedidoEnc3 = controladorPedido.encontrarPedido(idPedido4)
                if (!pedidoEnc3) {
                    return console.log("Pedido não encontrado!")
                }
                console.log("PARA QUAL STATUS VC DESEJA ALTERAR O SEU PEDIDO?\n1-Iniciado\n2-Em andamento\n3-Finalizado")
                let oi = parseInt(prompt("Status: "))
                switch (oi) {
                    case 1:
                        pedidoEnc3.setStatus("Iniciado")
                        break;
                    case 2:
                        pedidoEnc3.setStatus("Em andamento")
                        break;
                    case 3:
                        pedidoEnc3.setStatus("Finalizado")
                        break;
                    default:
                        console.log("Inválido.")
                        break;
                }
                break;
            case 5:
                let idPedido5 = parseInt(prompt("Informe o id do pedido:"))
                let oi2 = prompt("novo destino:")
                let pedidoEnc4 = controladorPedido.encontrarPedido(idPedido5)
                if (!pedidoEnc4) {
                    return console.log("Pedido não encontrado!")
                }
                pedidoEnc4.setDestino(oi2)
                console.log('destino alterado com sucesso!')
                break
            default:
                console.log("Opção inválida")
                break
            }
    } while (ultima !== 6);
}
