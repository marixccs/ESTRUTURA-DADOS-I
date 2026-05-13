// const lista = new DoublyLinkedList();
// lista.insertHead(100);    [100]
// lista.insertTail(200);    [100, 200]
// lista.insertTail(300);    [100, 200, 300]
// lista.remove(200);        [100, 200, 300]  REMOVE É PELA POSIÇÃO 
// lista.insert(2, 150);     [100, 200, 150, 300]


// EXERCÍCIO 1 ABERTO
// Utilizando o algoritmo da DoublyLinkedList, em anexa, implemente o método swap(posX,posY). 
// Este método deve trocar os valores (data) dos nós localizados em qualquer duas posições informadas. 
// O método deve retornar undefined caso a lista esteja vazia ou se qualquer uma das posições for inválida, negativa ou maior que o número total de elementos. 

swap(posX,posY){

    if(this.isEmpty || pos < 0 || pos > this.#count -1){
        return undefined
    }

    const node1 = this.#findNode(posX)
    const node2 = this.#findNode(posY)

    const temp = node1.data
    node1.data = node2.data 
    node2.data = temp
}

// EXERCÍCIO 2 ABERTO
//Um sistema de embarque precisa remover os dois passageiros que estão no topo da pilha. Utilizando stack (pilha) abaixo, crie o método removeLastTwo() 
//que atualize a pilha removendo os dois elementos mais recentes. O método deve verificar se a pilha possui ao menos dois elementos antes de tentar remover,
//caso não possua, deve retornar undefined;

removeLastTwo(){
    if(this.#data.lenght < 2 ){
        return undefined
    }

    this.#data.pop()
    this.#data.pop()
}

