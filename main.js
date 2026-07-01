import sistemaPedido from "./sistemas/sistemaPedido.js"
import sistemaDrone from "./sistemas/sistemaDrone.js"
import sistemaEntrega from "./sistemas/sistemaEntrega.js"
import promptt from 'prompt-sync'
let prompt = promptt()
let ultima = 0
do{
    console.log("BEM VINDO AO SISTEMA PRINCIPAL")
    console.log("OPÇÕES:\n1- SISTEMA DE DRONES\n2- SISTEMA DE PEDIDO\n3- SISTEMA DE ENTREGAS\n")
    let mainOpt = parseInt(prompt("Opção: "))
    ultima = mainOpt
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
}while(ultima != 4)
