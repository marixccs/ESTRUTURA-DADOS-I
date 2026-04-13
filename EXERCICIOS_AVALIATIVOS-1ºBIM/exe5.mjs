import Deque from "./lib2/Deque_ex5.mjs";  

let deque = new Deque();
console.log(deque.print()); // Imprime o deque inicial

// Inserindo elementos únicos
deque.insertFront("Arroz");
deque.insertBack("Feijão");
deque.insertBack("Macarrão");
console.log(deque.print()); // Imprime o deque após inserções

// Tentando inserir um valor duplicado
deque.insertFront("Feijão"); // Não será inserido, pois é duplicado
console.log(deque.print()); // Verifica o deque após tentativa de inserção duplicada