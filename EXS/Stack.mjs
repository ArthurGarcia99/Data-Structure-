/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export default class Stack {

    #data       // Vetor privado
    #historyData // vetor elementos removidos
    #capacidadeMax // capacidade maxima da pilha

    constructor(capacidadeMax) {
        this.#data = []     // Vetor vazio
        this.#historyData = [] // vetor removidos vazio
        this.#capacidadeMax = capacidadeMax
    }

    // Método para inserção no vetor
    push(val) {
        if(this.#data.length < this.#capacidadeMax){
            this.#data.push(val)
        }else{
            throw new Error("Capacidade Maxima Atingida!")
        }
    }

    // Método para remoção do vetor
    pop() {
        this.#historyData.push(this.#data[this.#data.length - 1])
        return this.#data.pop()
    }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    history() {
        let output = 'Removidos = [ '
        for(let i = 0; i < this.#historyData.length; i++) {
        if(output !== 'Removidos = [ ') output += ', '
            output += `(${i}): ${this.#historyData[i]}`
        }
        return output + ' ]' 
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////