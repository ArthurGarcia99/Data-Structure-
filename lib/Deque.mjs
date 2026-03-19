export default class Deque {
    #data // vetor privado

    constructor() {
        this.#data = []
    }

    //metodo para inserção no inicio da estrutura
    insertFront(val) {
        this.#data.unshift(val)
    }

    //metodo para inserção no final da estrutura
    insertBack(val) {
        this.#data.push(val)
    }

    //metodo para remoção do inicio da estrutura
    removeFront() {
        return this.#data.shift()
    }

    //metodo para remoção do final da estrutura
    removeBack() {
        return this.#data.pop()
    }

    //metodo para consultar o inicio da estrutura
    peekFront() {
        return this.#data[0]
    }

    //metodo para consultar final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    //metodo para verificar se o vetor esta vazio ou nao
    get isEmpty() {
        return this.#data.length === 0 ? "Sim, está vazia." : "Não."
    }

    //metodo de impressão
    print() {
        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") {
                output += ", ";
            }
            output += `(${i + 1}): ${this.#data[i]}`;
        }
        return output + " ]";
    }
}