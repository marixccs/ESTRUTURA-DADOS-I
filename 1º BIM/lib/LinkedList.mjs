class Node{
    constructor(val){
        this.data = val 
        this.next = null
    }
}

export default class LinkedList{
    #head // início da lista (cabeça)
    #tail // final da lista (cauda)
    #count; // quantidade de nodos da lista 

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

// getter que retorna se a lista encadeada está vazia ou não 

    get isEmpty(){
        return this.#count === 0;
    }


// getter que retorna a quantidade de elementos da lista 

    get count(){
        return this.#count
    }

// Método para inserir em qualquer posição, sempre que chamar o insert tem que passar a posição e valor 
    insert(pos, val){
        //cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val) //objeto nó 

        //1º caso a lista está vazia 
        if(this.isEmpty){
            this.#head = inserted 
            this.#tail = inserted 
        }

        this.#count++
    }
}


// lista encadeada é utilizada em situações onde precisa manipular diversas informações: inserção de dados, apagar dados e quer tornar o sistema eficiente, pois utiliza menos processamento e memória.
