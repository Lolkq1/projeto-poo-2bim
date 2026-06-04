class drone {
    #id;
    #capacidade;
    #status;
    constructor(id, capacidade, status) {
        this.#id = id
        this.#capacidade = capacidade
        this.#status = status
    }
    getId() {
        return this.#id
    }
    getCapacidade() {
        return this.#capacidade
    }
    getStatus() {
        return this.#status
    }
    changeStatus() {
        this.#status = !this.#status
    }
}

module.exports = drone