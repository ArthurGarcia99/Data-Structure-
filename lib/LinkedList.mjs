class Node{
    constructor(val){  // Como o atributo não é privado, não há necessidade de criar esses atributos (basta criar dentro do construtor)
        this.data = val
        this.next = null
    }
}

export default class LinkedList{
    #head // inicio da lista (cabeça)
    #tail // fim da lista (Calda)
    #count // quantidade de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    //getter que retorna se alista encadeada está vazia ou não
    get isEmpty(){
        return this.#count === 0;
    }

    //getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    }

    //metodo para inserir em qualquer posição
    insert(pos, val){
        //cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val);
        
        // 1 caso: a lista esta vazia
        if(this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }
        //2 caso: lista não vazia inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head;
            this.#head = inserted;
        }
        //3 caso: inserção no final
        else if(pos >= this.#count){
            this.#tail.next = inserted;
            this.#tail = inserted;
        }
        
        //4 caso: inserção no meio da lista
        else{
            let before = this.#head
            for(let i = 1; i < pos; i++){
                before = before.next
            }

            let after = before.next;

            inserted.next = after;
            before.next = inserted;
        }

        this.#count++
    }

    //metodo para inserção na primeira posição (atalho)
    insertHead(val){
        this.insert(0, val)
    }
    
    //metodo para inserção na ultima posição (atalho)
    insertTail(val){
        this.insert(this.#count, val)
    }

    //metodo para remoção de um nodo na lista
    remove(pos){
        //1 caso: a lista esta vazia ou a posição informada esta fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        let removed

        //2 caso: remoção do inicio da lista
        if(pos === 0){
            removed = this.#head
            this.#head = this.#head.next
        }
    }


}