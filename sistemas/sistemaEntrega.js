import {controladorEntrega} from '../controladores/controladorEntrega2.js'
import promptt from 'prompt-sync'
let prompt = promptt()


export default function sistemaEntrega(){
    let ultima = 0
    do{
        console.log("1- CADASTRO DE ENTREGA\n2- ENCONTRAR ENTREGA\n3- ALTERAR STATUS DE ENTREGA \n4 - SAIR\n")
        let opcao = parseInt(prompt("Escolha uma opcão:"))
        ultima=opcao
        switch(opcao){
            case 1:
                console.log("CADASTRO DE ENTREGA:")
                //     class entrega {
                //     #id_drone;
                //     #id_pedido;
                //     #status
                //     constructor(id_drone, id_pedido, status) {
                //         this.#id_drone = id_drone;
                //         this.#id_pedido = id_pedido;
                //         this.#status = status
                //     }

                //     setStatus(status) {
                //         this.#status = status
                //     }

                //     getStatus() {
                //         return this.#status;
                //     }

                //     getIDPedido() {
                //         return this.#id_pedido
                //     }

                //     getIDDrone() {
                //         return this.#id_drone
                //     }
                // }

                // export default entrega
                let id_drone = parseInt(prompt("Insira o ID do drone."))
                let id_pedido = parseInt(prompt("Insira o ID do pedido."))
                let a = controladorEntrega.registrarEntrega(id_pedido, id_drone, "Não iniciada")
                if (!a) {
                    console.log("Erro ao registrar entrega: Pedido inexistente ou já concluido, drone inexistente ou indisponível, pedido com capacidade superior à do drone, drone e/ou pedido já registrados em uma entrega.")
                    break
                }
                console.log("Entrega registrada com sucesso!")
                break
            case 2:
                let id_pedido2 = parseInt(prompt("Insira o ID do pedido associado."))
                let k = controladorEntrega.encontrarEntrega(id_pedido2)
                if (!k) {
                    console.log("Entrega não encontrada.")
                    break;
                }
                    console.log(`\n \nID do pedido: ${id_pedido2} \nID do drone: ${k.getIDDrone()} \nStatus da entrega: ${k.getStatus()}\n \n`)
                    break
            case 3:
                let id_pedido3 = parseInt(prompt("Insira o ID do pedido associado."))
                let l = controladorEntrega.encontrarEntrega(id_pedido3)
                if (!l) {
                    console.log("Entrega não encontrada.")
                    break
                }
                let oi = parseInt(prompt("PARA QUAL STATUS VOCÊ DESEJA ALTERAR A ENTREGA?\n1-Não iniciada\n2-A caminho\n3-Finalizada\n"))
                    switch(oi) {
                        case 1:
                            l.setStatus("Não iniciada")
                            console.log("Alteração feita com sucesso!")
                            break;
                        case 2:
                            l.setStatus("A caminho")
                            console.log("Alteração feita com sucesso!")
                            break;
                        case 3:
                            l.setStatus("Finalizada")
                            console.log("Alteração feita com sucesso!")
                            break;
                        default:
                            console.log("Opção inválida.")
                            break;
                    }
                break
            default:
                console.log("Opção inválida")
                break
            }
    } while(ultima !== 4)
}