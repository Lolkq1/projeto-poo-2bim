class entrega {
    #id_drone;
    #id_pedido;
    #status
    constructor(id_drone, id_pedido, status) {
        this.#id_drone = id_drone;
        this.#id_pedido = id_pedido;
        this.#status = status
    }

    setStatus(status) {
        this.#status = status
    }

    getStatus() {
        return this.#status;
    }

    getIDPedido() {
        return this.#id_pedido
    }

    getIDDrone() {
        return this.#id_drone
    }
}

module.exports = entrega