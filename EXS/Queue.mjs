/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/
export default class Queue {

    #data       // Vetor privado
    #operationCount // contador operacoes

    constructor() {
        this.#operationCount = 0 // contador vazio
        this.#data = []     // Vetor vazio
    }

    // Método para inserção na fila
    enqueue(val) {
        this.#operationCount++
        this.#data.push(val)
    }

    // Método para remoção da fila
    dequeue() {
        if(this.isEmpty) return undefined
        this.#operationCount++
        return this.#data.shift()    
    }

    // Método para consultar o início da fila sem remover o elemento
    peek() {
      return this.#data[0]
    }

    // Getter para informar se a fila está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
      return this.#data.length === 0
    }

    get operationCount(){
      return this.#operationCount
    }

    // Método que imprime a fila (para efeitos de depuração)
    print() {
      let output = '[ '
      for(let i = 0; i < this.#data.length; i++) {
        if(output !== '[ ') output += ', '
        output += `(${i}): ${this.#data[i]}`
      }
      return output + ' ]'
    }
}