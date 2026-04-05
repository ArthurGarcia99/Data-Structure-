/****************************************************************
    ESTUTURA DE DADOS DEQUE
    
    - Deque = Double-Ended Queue (fila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (insertFront/insertBack) e desenfileiramento (removeFront/
      removeBack), acontecendo em qualquer uma das extremidades da estrutura.
    - Como consequência, o deque NÃO SEGUE o princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação dos deques são situações em que filas precisam aceitar
      a inserção de itens prioritários e a desistência do último item.
*/

export default class Deque {

    #data       // Vetor privado
    #capacidadeMax // capacidade maxima da deque

    constructor(capacidadeMax) {
        this.#data = []     // Vetor vazio
        this.#capacidadeMax = capacidadeMax 
    }

    // Método para inserção no início da estrutura
    insertFront(val) {
        for(let i = 0; i < this.#data.length; i++){
            if(val === this.#data[i]){
                throw new Error("Este valor já existe dentro da Deque.")
            }
        }
        
        if(this.#data.length < this.#capacidadeMax){ 
            this.#data.unshift(val)
        }else{
            throw new Error("Capacidade Maxima Atingida!")
        }
    }

    // Método para inserção no final da estrutura
    insertBack(val) {
        for(let i = 0; i < this.#data.length; i++){
            if(val === this.#data[i]){
                throw new Error("Este valor já existe dentro da Deque.")
            }
        }
        
        if(this.#data.length < this.#capacidadeMax){
            this.#data.push(val)
        }else{
            throw new Error("Capacidade Maxima Atingida!")
        }
    }

    // Método para remoção do início da estrutura
    removeFront() {
        return this.#data.shift()
    }

    // Método para remoção do final da estrutura
    removeBack() {
        return this.#data.pop()
    }

    // Método para consultar o início da estrutura
    peekFront() {
        return this.#data[0]
    }

    // Método para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se o deque está ou não vazio
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime o deque (para efeitos de depuração)
    print() {
        let output = '[ '
        for(let i = 0; i < this.#data.length; i++) {
          if(output !== '[ ') output += ', '
          output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
    }
}
