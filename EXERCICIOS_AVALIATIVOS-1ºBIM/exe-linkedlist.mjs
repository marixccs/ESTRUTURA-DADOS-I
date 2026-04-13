import LinkedList from "./lib2/LinkedList.mjs";  // Caminho para a classe LinkedList

const lista = new LinkedList()

// Testando a lista inicial
console.log("A lista está vazia? ", lista.isEmpty ? "Sim, está vazia" : "Não!")

// Inserindo filmes na lista
lista.insert(0, 'The Godfather')
lista.insert(0, 'The Shawshank Redemption')
lista.insert(2, 'Schindler\'s List')
lista.insert(3, 'The Dark Knight')
lista.insert(4, 'Pulp Fiction')

console.log("Lista após inserções:", lista.print())

// Exercício 2: Reversão da Lista
lista.reverse()
console.log("Lista após reversão:", lista.print())

// Exercício 3: Contagem de Ocorrências
lista.insert(1, 'The Godfather')
console.log("Contagem de 'The Godfather':", lista.countOccurrences('The Godfather'))

// Exercício 4: Remoção de todas as ocorrências de 'The Godfather'
lista.removeAll('The Godfather')
console.log("Lista após remoção de todas as ocorrências de 'The Godfather':", lista.print())

// Exercício 5: Transformação em array
console.log("Lista como array:", lista.toArray())

// Exibindo histórico de remoções
let removido = lista.remove(0)
console.log({ removido })
console.log("Lista após remoção:", lista.print())
console.log("Histórico de remoções:", lista.history())