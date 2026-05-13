/* O(1), porque a operação de acesso ao primeiro elemento do array é feita em tempo constante,
independente do tamanho do aaray 
ele não percorre o vetor, vai direto na posição que solicitamos */ 


function exempleO1(array){
    const inicio = performance.now() //inicia contagem de tempo 
    if(array.length === 0) return null 
    const elemento = array[3]
    const fim = performance.now()
    //cada inteiro equivale a 4bytes em uso na memória
    const memoriaPilhaMB = (array.length * 4) / (1024 * 1024)

    let memoriaTotalMB = "N/A"
    if(typeof process !== "undefined" && process.memoryUsage){
        memoriaTotalMB = process.memoryUsage().heapUsage / 1024 / 1024         
    }
    console.clear()
    console.log("--- Análise de complexidade Iterativa O(1) ---")
    console.log("Tamanho da entrada: ", array.length)
    console.log("Resultado: ", elemento)
    console.log("Tempo de Exeucucação: ", fim - inicio, " MS") 
    console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB, " MB")
    console.log("Memória total usada pelo processo: ", 
        typeof memoriaTotalMB === "number" ? memoriaPilhaMB.toFixed(6) + " MB": memoriaPilhaMB)
}

/* O(log n), porque a cada iteração, valor de i é multiplicado por 2, o que significa que o número de iterações 
necessárias para que i atinja "n" é logarítmico em relação a "n"
*/

function exempleLogN(n){
    let i = 1
    while (i < n){
        console.log(i)
        i *= 2
    }
}

/* O(n), porque a função percorre todos os elementos do array uma vez
realizando uma operação constante para cada elemento */

function exempleOn(array){

    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }

}

let dados = Array.from({length: 15}, () => Math.random());

// O (n log n)

function exempleNlogN(array){
    array.sort() //ele é um O(n log n), ordenação por recursividade, ele divide já ordenando, o mais usado
    for(let i = 0; i< array.length; i++){
        console.log(array[i]) 
    }
}
const array = [5,6,7,8,9,2,3,4,1]
exempleNlogN(array)