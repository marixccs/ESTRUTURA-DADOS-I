import Deque from "./lib2/Deque_ex3.mjs"; 

let deque = new Deque(5); // Capacidade máxima de 5 elementos
console.log(deque.print()); // Imprime o deque inicial

// Inserindo no início
deque.insertFront("Arroz");
deque.insertFront("Feijão");
deque.insertFront("Macarrão");
console.log(deque.print()); // Imprime o deque após inserções

// Inserindo no final
deque.insertBack("Sabão em pó");
deque.insertBack("Água sanitária");
console.log(deque.print()); // Imprime o deque após inserções no final

// Tentando inserir quando a capacidade estiver cheia
deque.insertBack("Café"); // Não será inserido, pois excede o limite de 5
console.log(deque.print()); // Verifica o deque

// Removendo elementos
deque.removeFront();
deque.removeBack();
console.log(deque.print()); // Imprime o deque após remoções