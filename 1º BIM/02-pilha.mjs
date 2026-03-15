
import Stack from "./lib/stack.mjs";

let pilha = new Stack()

console.log(pilha.print())
console.log(`Esta vazia? ${pilha.isEmpty}`)
pilha.push(35)
pilha.push(77)
pilha.push(19)
console.log(pilha.print())

let removido = pilha.pop()

console.log({removido}, pilha.print())
