/*MARIANA CRUZ CARVALHO SOARES 
CÓD 26185
3º SEMESTRE ENGENHARIA DE SOFTWARE 
*/

export default class Stack {

    #data       // Vetor privado
    #maxSize; // Tamanho máximo da pilha

    constructor(maxSize) {
        this.#data = [];
        this.#maxSize = maxSize;
    }

    // Método para inserção no vetor
    push(val) {
        if (this.#data.length < this.#maxSize) {
            this.#data.push(val);
        } else {
            console.log("Erro: Capacidade máxima atingida.");
        }
    }

    // Método para remoção do vetor
    pop() {
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

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////