import controladorDrone from '../controladores/controladorDrone'
const prompt = require('prompt-sync');


export default function sistemaDrone(){
    do{
        console.log("1- CADASTRO DE DRONE\n2- ENCONTRAR DRONE\n3 - SAIR")
        let opcao = parseInt(prompt("Escolha uma opcão:"))
        
        switch(opcao){
            case 1:
                console.log("CADASTRO DE DRONE:")
                let idDrone = () =>{return controladorDrone.drones.length + 1}
                let capacidade = parseFloat(prompt("Capacidade: "))
                let status = false    
                controladorDrone.registrar(idDrone(), capacidade, status)
                break
            case 2:
                console.log("ENCONTRAR DRONE:")
                let idDrone2 = parseInt(prompt("Informe o id do drone: "))
                let droneEnc = controladorDrone.encontrarDrone(idDrone2)
                if(!droneEnc){
                    return console.log("Drone não encontrado!")
                    break
                }
                console.log(`ID: ${droneEnc.getId()}. Capacidade: ${droneEnc.getCapacidade()}. Status: ${droneEnc.getStatus()}`)
                break

            case 3:
                break
            default:
                console.log("Opção inválida")
                break
            }
    } while(opcao != 3)
}