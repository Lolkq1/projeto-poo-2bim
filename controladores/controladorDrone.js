import drone from '../classes/drone.js'

class controladorDrone {
    constructor() {
        this.drones = []
    }

    encontrarDrone(id) {
        for (let x of this.drones) {
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
        for (let x of this.drones) {
            if (x.getId() === id) {
                return false
            }
        }
        let drone2 = new drone(id, capacidade, status)
        this.drones.push(drone2)
        return drone2;
    }
}

export default controladorDrone