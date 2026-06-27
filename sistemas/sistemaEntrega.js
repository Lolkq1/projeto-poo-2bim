const Entregaclasse = require('../classes/entrega')
const controladorEntregaclasse = require('../controladores/controladorEntrega')
const prompt = require('prompt-sync')();
const controladorEntrega = new controladorEntregaclasse();

function sistemaEntrega(){

  var opcao = 0

  do{
    console.log("1-fazer entrega drone, 2-finalizar entrega drone, 3-sair")
    opcao = parseInt(prompt("escolha uma opcao"))

    switch(opcao){

        case 1:
            console.log('criando nova entrega...')
            let id_drone = parseInt(prompt('qual o id do drone'))
            let id_pedido = parseInt(prompt('qual o id do pedido'))
            let status = prompt('qual o status do ')
            let novaEntrega = new Entregaclasse(id_drone, id_pedido, status)
            controladorEntrega.entregas.push(novaEntrega)
            console.log('entrega criaada')
            break;

        case 2:
            let idPedido2 = parseInt(prompt('qual o id do pedido'))
            let entregaAchada = controladorEntrega.encontrarEntrega(idPedido2)

            if(entregaAchada){
                entregaAchada.setStatus("entregue")
                console.log('entrega finalizada')
            }
            else{
                console.log('entrega nao encontrada :c')
            }
            break;
    }

  } while(opcao !== 3);

}

sistemaEntrega();


module.exports = sistemaEntrega;