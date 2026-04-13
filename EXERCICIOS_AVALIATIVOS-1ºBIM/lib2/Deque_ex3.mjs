/*MARIANA CRUZ CARVALHO SOARES 
CÓD 26185
3º SEMESTRE ENGENHARIA DE SOFTWARE 
*/

export default class Deque {

    #data;
    #maxSize; // Tamanho máximo do deque

    constructor(maxSize) {
        this.#data = [];
        this.#maxSize = maxSize; // Define o tamanho máximo
    }

    // Método para inserção no início da estrutura
    insertFront(val) {
        if (this.#data.length < this.#maxSize) {
            this.#data.unshift(val);
        } else {
            console.log("Erro: Capacidade máxima atingida.");
        }
    }

    // Método para inserção no final da estrutura
    insertBack(val) {
        if (this.#data.length < this.#maxSize) {
            this.#data.push(val);
        } else {
            console.log("Erro: Capacidade máxima atingida.");
        }
    }

    // Método para remoção do início da estrutura
    removeFront() {
        return this.#data.shift()
    }

    // Método para remoção do final da estrutura
    removeBack() {
        return this.#data.pop()
    }

    // Método para consultar o início da estrutura
    peekFront() {
        return this.#data[0]
    }

    // Método para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se o deque está ou não vazio
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime o deque (para efeitos de depuração)
    print() {
        let output = '[ '
        for(let i = 0; i < this.#data.length; i++) {
          if(output !== '[ ') output += ', '
          output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
    }
}
