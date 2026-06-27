import controladorDrone from '../controladores/controladorDrone'
const prompt = require('prompt-sync');


function sistemaDrone(){
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
            
            case 2:
                console.log("ENCONTRAR DRONE:")
                let idDrone2 = parseInt(prompt("Informe o id do drone: "))
                let droneEnc = controladorDrone.encontrarDrone(idDrone2)
                if(!droneEnc){
                    return console.log("Drone não encontrado!")
                }
                console.log(`ID: ${droneEnc.getId()}. Capacidade: ${droneEnc.getCapacidade()}. Status: ${droneEnc.getStatus()}`)

            case 3:
                break
            default:
                console.log("Opção inválida")
            }
    } while(opcao != 3)
}

module.exports = sistemaDrone