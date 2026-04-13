/*MARIANA CRUZ CARVALHO SOARES 
CÓD 26185
3º SEMESTRE ENGENHARIA DE SOFTWARE 
*/ 

export default class Queue {
    #data; // Vetor privado
    #operationCount; // Contador de operações privado

    constructor() {
        this.#data = []; 
        this.#operationCount = 0; // Inicializando o contador
    }

    // Método para inserção na fila
    enqueue(val) {
        this.#data.push(val);
        this.#operationCount++; // Incrementa a contagem de operações
    }

    // Método para remoção da fila
    dequeue() {
        this.#operationCount++; // Incrementa a contagem de operações
        return this.#data.shift();
    }

    // Método para acessar o contador de operações
    getOperationCount() {
        return this.#operationCount;
    }

    // Método para consultar o início da fila sem remover o elemento
    peek() {
        return this.#data[0];
    }

    // Getter para informar se a fila está ou não vazia
    get isEmpty() {
        return this.#data.length === 0;
    }

    // Método que imprime a fila (para efeitos de depuração)
    print() {
        let output = '[ ';
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== '[ ') output += ', ';
            output += `(${i}): ${this.#data[i]}`;
        }
        return output + ' ]';
    }
}