import Queue from "./lib2/Queue_ex1.mjs";

let fila = new Queue();  // Criação da fila
console.log(fila.print()); // Imprime a fila inicial
console.log("Está vazia?", fila.isEmpty); // Verifica se a fila está vazia

// Enfileirando elementos
fila.enqueue("Carlos");
fila.enqueue("Ana");
fila.enqueue("Jorge");

console.log(fila.print()); // Imprime a fila após inserções
console.log("Total de operações:", fila.getOperationCount()); // Exibe o contador de operações

// Desenfileirando um elemento
let atendido = fila.dequeue();
console.log({ atendido });
console.log(fila.print()); // Imprime a fila após desenfileiramento
console.log("Total de operações:", fila.getOperationCount()); // Exibe o contador de operações