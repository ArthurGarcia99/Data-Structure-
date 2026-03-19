export default class Queue{

    #data // vetor privado

    constructor(){
        this.#data = [];    
    }
    
    // metodo para inserção na fila
    enqueue(val){
        this.#data.push(val);
    }

    //metodo para remoção na fila
    dequeue(){
        return this.#data.shift();
    }

    //metodo para consultar o inicio da fila sem remover o elemento
    peek(){
        return this.#data[0];
    }

    //a fila esta vazia
    get isEmpty(){
        return this.#data.length === 0;
    }

    //metodo de impressão da filha

    print(){
        let output = "[ ";
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", ";
            }
            output += `(${i+1}): ${this.#data[i]}`;
        }
        return output + " ]";
    }


}