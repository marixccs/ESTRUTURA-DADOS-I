import Stack from "./lib2/Stack_ex4.mjs"; 

let pilha = new Stack(3); // Capacidade máxima de 3 elementos
console.log(pilha.print()); // Imprime a pilha inicial

// Inserindo elementos
pilha.push("Passo 1");
pilha.push("Passo 2");
pilha.push("Passo 3");
console.log(pilha.print()); // Imprime a pilha após inserções

// Tentando inserir um elemento quando a pilha atingir o limite
pilha.push("Passo 4"); // Não será inserido
console.log(pilha.print()); // Verifica a pilha