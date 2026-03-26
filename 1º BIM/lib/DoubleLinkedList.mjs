import { useInsertionEffect } from "react"

class Node{
    constructor(val){
        this.prev = null 
        this.data = val 
        this.next = null 
    }
}

export default class DoublyLinkesList{

    #head 
    #tail
    #count

    constructor(){
        this.#head = null 
        this.#tail = null 
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0 //utiliza 3 === para comparar o tipo 
    }

    get count{
        return this.#count
    }

    // método PRIVADO #, para ser usado só internamente 
    // método privado que encontra um nodo pela sua posição
    // como possui dois ponteiros, pode ir a partir tanto pelo head quanto pelo tail 
    // e não por ordem sequencial que nem linked list
    // eliminar metade da lista e seguir pelo caminho mais rápido 

    #findNode(pos){
        let node 
        if(pos < this.#count / 2){
            node = this.#head 
            for(let i = 0; i < pos; i++){
                node = node.next 
            }
        }
        else{
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--){
                node = node.prev
            }
        }
        return node;

        insert(pos, val){
            let inserted = new Node(val)

            //1º caso: lista vazia 
            if(this.isEmpty){
                this.#head = inserted;
                this.#tail = inserted;
            }
            //2º caso: pos = 0 e lista não vazia, inserir valor na posição 0
            else if(pos === 0){
                inserted.next = this.#head
                this.#head.prev = inserted 
                this.#head = inserted
            }
            
            // 3º caso: inserção na última posição 
            else if(pos >= this.#count){
                inserted.prev = this.#tail
                this.#tail.next = inserted 
                this.#tail = inserted
            }

           // 4º caso: inserção em posição intermediária
        }
    }


}






