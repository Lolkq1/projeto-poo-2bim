import sistemaPedido from "./sistemas/sistemaPedido"
import sistemaDrone from "./sistemas/sistemaDrone"
import sistemaEntrega from "./sistemas/sistemaEntrega"
const prompt = require("prompt-sync");

do{
    console.log("BEM VINDO AO SISTEMA PRINCIPAL")
    console.log("OPÇÕES:\n1- SISTEMA DE DRONES\n2- SISTEMA DE PEDIDO\n3- SISTEMA DE ENTREGAS")
    mainOpt = parseInt(prompt("Opção: "))
    switch(mainOpt){
        case 1:
            sistemaDrone()
            break
        case 2:
            sistemaPedido()
            break
        case 3:
            sistemaEntrega()
            break
        case 4:
            break
        default:
            console.log("Opção inválida")
            break
    }
}while(mainOpt != 4)
