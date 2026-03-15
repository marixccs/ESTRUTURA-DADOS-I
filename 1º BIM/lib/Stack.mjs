// let pilha = []

// pilha[0] = 8;
// pilha[1] = 5;
// pilha[2] = 4;
// pilha[3] = 10;

// console.log(pilha)

//SE REMOVER NO MEIO DEIXA DE SER PILHA, PASSA A SER OUTRA ESTRUTURA.

export default class Stack {
    #data

    constructor(){
        this.#data = []
    }

    //METODO DE INSERÇÃO NO VETOR

    push(val){
        this.#data.push(val)
    }

    //METODO PARA REMOÇÃO DO VALOR
    pop(){
        return this.#data.pop()
        
    }
    //METODO PARA CONSULTAR O TOPO DA PILHA
    peek(){
        return this.#data[this.#data.length - 1]
    }

    
    get isEmpty(){
     return this.#data == 0 ? true : false
    }
    print(){
        return JSON.stringify(this.#data)
    }
}