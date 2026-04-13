import Stack from "./lib2/Stack_ex2.mjs"; 

let pilha = new Stack();
console.log(pilha.print()); // Imprime a pilha inicial

// Inserindo elementos
pilha.push("Página 1");
pilha.push("Página 2");
pilha.push("Página 3");
console.log(pilha.print()); // Imprime a pilha após inserções

// Removendo elementos
let removido = pilha.pop();
console.log({ removido });
console.log(pilha.print()); // Imprime a pilha após remoção

// Verificando o histórico de remoções
console.log("Histórico de remoções:", pilha.history());