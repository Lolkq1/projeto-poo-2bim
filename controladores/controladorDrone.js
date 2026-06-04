const drone = require('../classes/drone')

class controladorDrone {
    drones = []
    constructor() {

    }

    encontrarDrone(id) {
        for (x of drones) {
            if (x.getId() === id) {
                return x
            }
        }
        return false
    }

    registrarDrone(id, capacidade, status) {
        if (!(status === true || status === false)) {
            return false
        }
        for (x of this.drones) {
            if (x.getId() === id) {
                return false
            }
        }
        let drone2 = new drone(id, capacidade, status)
        this.drones.push(drone2)
        return drone2;
    }
}

module.exports = controladorDrone