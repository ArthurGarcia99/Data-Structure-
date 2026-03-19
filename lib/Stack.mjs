export default class Stack{
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // metodo para inserção no vetor
    Inserir(vaL){
        this.#data.push(vaL)
    }

    // metodo de remoção do vetor
    remover(){
        return this.#data.pop()
    }

    // verificar o topo da pilha
    peek(){
        return  this.#data[this.#data.length - 1]
    }

    get isEmpty(){
    return this.#data.length === 0
    }
    
    print(){
        return JSON.stringify(this.#data)
    }
    
}