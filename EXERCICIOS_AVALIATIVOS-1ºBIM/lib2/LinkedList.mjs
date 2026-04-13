/*MARIANA CRUZ CARVALHO SOARES 
CÓD 26185
3º SEMESTRE ENGENHARIA DE SOFTWARE 
*/ 

/* Classe que representa a unidade de armazenamento da lista encadeada */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

export default class LinkedList {
    #head;
    #tail;
    #count;
    #removedHistory; // Histórico de remoções

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
        this.#removedHistory = []; // Inicializa o histórico de remoções
    }

    // Getter que retorna se a lista está vazia
    get isEmpty() {
        return this.#count === 0;
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count;
    }

    // Método para inserir um valor em qualquer posição
    insert(pos, val) {
        const inserted = new Node(val);

        if (this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        } else if (pos === 0) {
            inserted.next = this.#head;
            this.#head = inserted;
        } else if (pos >= this.#count) {
            this.#tail.next = inserted;
            this.#tail = inserted;
        } else {
            let before = this.#head;
            for (let i = 1; i < pos; i++) before = before.next;
            let after = before.next;
            inserted.next = after;
            before.next = inserted;
        }

        this.#count++;
    }

    // Método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val);
    }

    // Método para inserção na última posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val);
    }

    // Método para remoção de um nodo na lista
    remove(pos) {
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;

        let removed;

        if (pos === 0) {
            removed = this.#head;
            this.#head = this.#head.next;

            if (this.#count === 1) this.#tail = null;
        } else {
            let before = this.#head;
            for (let i = 1; i < pos; i++) before = before.next;
            removed = before.next;
            let after = removed.next;
            before.next = after;

            if (pos === this.#count - 1) this.#tail = before;
        }

        this.#count--;
        this.#removedHistory.push(removed.data); // Adiciona o valor removido ao histórico
        return removed.data;
    }

    // Método para remover o primeiro elemento da lista (atalho)
    removeHead() {
        return this.remove(0);
    }

    // Método para remover o último elemento da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1);
    }

    // Método para retornar o histórico de elementos removidos (Exercício 1)
    history() {
        return this.#removedHistory; // Retorna o histórico de remoções
    }

    // Método para verificar a posição de um valor na lista
    indexOf(val) {
        if (this.isEmpty) return -1;
        let node = this.#head;
        for (let i = 0; i < this.#count; i++) {
            if (node.data === val) return i;
            node = node.next;
        }
        return -1;
    }

    // Método para retornar (sem remover) o valor de um nodo na posição dada
    peek(pos) {
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;
        let node = this.#head;
        for (let i = 0; i < pos; i++) node = node.next;
        return node.data;
    }

    // Método para retornar (sem remover) o valor do primeiro nodo da lista (atalho)
    peekHead() {
        return this.peek(0);
    }

    // Método para retornar (sem remover) o valor do último nodo da lista (atalho)
    peekTail() {
        return this.peek(this.#count - 1);
    }

    // Método para exibir a lista encadeada (método auxiliar)
    print() {
        let output = '( ';
        let node = this.#head;
        for (let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', ';
            output += `[${i}]: ${node.data}`;
            node = node.next;
        }
        output += ` ), count: ${this.#count}`;
        return output;
    }

    // Exercício 2: Reversão da Lista
    reverse() {
        let prev = null;
        let current = this.#head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Atualiza o head e tail após a reversão
        this.#head = prev;
        this.#tail = current;
    }

    // Exercício 3: Contagem de Ocorrências
    countOccurrences(val) {
        let count = 0;
        let node = this.#head;
        while (node !== null) {
            if (node.data === val) count++;
            node = node.next;
        }
        return count;
    }

    // Exercício 4: Remoção de Todas as Ocorrências
    removeAll(val) {
        let node = this.#head;
        let prev = null;

        while (node !== null) {
            if (node.data === val) {
                if (prev === null) {
                    // Remoção no início
                    this.#head = node.next;
                } else {
                    prev.next = node.next;
                }
                this.#count--;
            } else {
                prev = node;
            }
            node = node.next;
        }
    }

    // Exercício 5: Transformar Lista em Array
    toArray() {
        let arr = [];
        let node = this.#head;
        while (node !== null) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }
}