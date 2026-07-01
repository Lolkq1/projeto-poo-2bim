class pedido {
    #id;
    #descricao;
    #destino;
    #status;
    #capacidade;
    constructor(id, descricao, destino, status, capacidade) {
        this.#id = id;
        this.#descricao = descricao;
        this.#destino = destino;
        this.#status = status;
        this.#capacidade = capacidade
    }
    getId() {
        return this.#id
    }
    getDescricao() {
        return this.#descricao
    }
    getStatus(){
        return this.#status
    }
    getCapacidade(){
        return this.#capacidade
    }
    setDescricao(descricao) {
        this.#descricao = descricao
    }
    setStatus(status) {
        this.#status = status
    }
    setDestino(destino) {
        this.#destino = destino
    }
    getDestino() {
        return this.#destino
    }
}

export default pedido