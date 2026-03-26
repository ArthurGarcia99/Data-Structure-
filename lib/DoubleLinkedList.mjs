class Node {
    constructor(val){
        this.prev = null;
        this.data = val;
        this.next = null;
    }
}

export default class DoubleLinkedList{

    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    //metodo privado que encontra um nodo por sua posição
    #findNode(pos){
        let node

        //nodo encontra-se na primeira metade da lista
        if(pos < this.#count/2){
            node = this.#head

            for(let i = 0; i < pos; i++){
                node = node.next
            }
            //nodo encontra-se na segunda metade da lista
        }else{
            node = this.#tail

            for(let i = count - 1; i > pos; i--){
                node = node.prev
            }
        }

        return node
    }

    //metodo de inserção em qualquer posição
    insert(pos, val){
        let inserted = new Node(val)

        //1 caso: lista vazia
        if(this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }
        //2 caso: inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;
        }
        //3 caso: inserção na ultima posição
        else if(pos >= this.#count){
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;
        }
        //4º caso: inserção em posição intermediaria
        else {
            let nodePos = this.#findNode(pos);
            let before = nodePos.prev;

            before.next = inserted;

            inserted.prev = before;

            inserted.next = nodePos;

            nodePos.prev = inserted;
        }

        this.#count++
    }



}