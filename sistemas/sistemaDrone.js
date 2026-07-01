import {controladorDrone} from '../controladores/controladorEntrega2.js'
import promptt from 'prompt-sync'
let prompt = promptt()


export default function sistemaDrone(){
    let ultima = 0
    do{
        console.log("1- CADASTRO DE DRONE\n2- ENCONTRAR DRONE\n3 - SAIR\n")
        let opcao = parseInt(prompt("Escolha uma opcão:"))
        ultima = opcao    
        switch(opcao){
            case 1:
                console.log("CADASTRO DE DRONE:")
                let idDrone = () =>{return controladorDrone.drones.length + 1}
                let capacidade = parseFloat(prompt("Capacidade: "))
                let status = false    
                controladorDrone.registrarDrone(idDrone(), capacidade, status)
                console.log("Drone criado com sucesso! ID:"+parseInt(idDrone()-1))
                break
            case 2:
                console.log("ENCONTRAR DRONE:")
                let idDrone2 = parseInt(prompt("Informe o id do drone: "))
                let droneEnc = controladorDrone.encontrarDrone(idDrone2)
                if(!droneEnc){
                    return console.log("Drone não encontrado!")
                    break
                }
                console.log(`\n \nID: ${droneEnc.getId()}.\nCapacidade: ${droneEnc.getCapacidade()}.\nStatus: ${droneEnc.getStatus()}\n \n`)
                break

            case 3:
                break
            default:
                console.log("Opção inválida")
                break
            }
    } while(ultima != 3)
}