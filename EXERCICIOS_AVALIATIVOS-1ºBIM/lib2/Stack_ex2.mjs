/*MARIANA CRUZ CARVALHO SOARES 
CÓD 26185
3º SEMESTRE ENGENHARIA DE SOFTWARE 
*/

export default class Stack {
    #data; // Vetor privado
    #historyData; // Histórico de remoções privado

    constructor() {
        this.#data = [];
        this.#historyData = []; // Inicializando o histórico
    }

    // Método para inserção no vetor
    push(val) {
        this.#data.push(val);
    }

    // Método para remoção do vetor
    pop() {
        const removedItem = this.#data.pop();
        this.#historyData.push(removedItem); // Adiciona ao histórico de remoções
        return removedItem;
    }

    // Método para consultar o topo (última posição) da pilha
    peek() {
        return this.#data[this.#data.length - 1];
    }

    // Getter para informar se a pilha está ou não vazia
    get isEmpty() {
        return this.#data.length === 0;
    }

    // Método para retornar o histórico de remoções
    history() {
        return this.#historyData;
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data);
    }
}