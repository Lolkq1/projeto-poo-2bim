class pedido {
    #id;
    #descricao;
    #destino;
    #status;
    constructor(id, descricao, destino, status) {
        this.#id = id;
        this.#descricao = descricao;
        this.#destino = destino;
        this.#status = status;
    }
    getId() {
        return this.#id
    }
    getDescricao() {
        return this.#descricao
    }
    setDescricao(descricao) {
        this.#descricao = descricao
    }
    setStatus(status) {
        this.#status = status
    }
}

module.exports = pedido