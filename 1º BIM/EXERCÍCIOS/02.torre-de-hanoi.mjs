/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.

*/

import Stack from  "/Users/maria/Documents/ENG SOFTWARE 3-SEM/ED/E.D.UniFacef.2026.1.ES/lib/Stack.mjs"

// cria as 3 torres
let torreA = new Stack()
let torreB = new Stack()
let torreC = new Stack()

// estado inicial: 4 discos na TorreB
torreB.push(1)
torreB.push(2)
torreB.push(3)
torreB.push(4)

// imprime antes
console.log("=== ANTES ===")
console.log("TorreA:", torreA.print())
console.log("TorreB:", torreB.print())
console.log("TorreC:", torreC.print())

// função para mover um disco de uma torre para outra
function mover(origem, destino, nomeOrigem, nomeDestino) {
    if (origem.isEmpty) {
        throw new Error(`Erro: a ${nomeOrigem} está vazia`)
    }

    let disco = origem.pop()

    // validação: não pode colocar disco maior sobre menor
    if (!destino.isEmpty && disco < destino.peek()) {
        origem.push(disco)
        throw new Error(
            `Movimento inválido: disco ${disco} não pode ficar sobre disco ${destino.peek()}`
        )
    }

    destino.push(disco)
    console.log(`Moveu disco ${disco} de ${nomeOrigem} para ${nomeDestino}`)
}

// movimentações para levar tudo da TorreB para TorreA
mover(torreB, torreC, "TorreB", "TorreC")
mover(torreB, torreC, "TorreB", "TorreC")
mover(torreB, torreC, "TorreB", "TorreC")
mover(torreB, torreC, "TorreB", "TorreC")

mover(torreC, torreA, "TorreC", "TorreA")
mover(torreC, torreA, "TorreC", "TorreA")
mover(torreC, torreA, "TorreC", "TorreA")
mover(torreC, torreA, "TorreC", "TorreA")

// imprime depois
console.log("\n=== DEPOIS ===")
console.log("TorreA:", torreA.print())
console.log("TorreB:", torreB.print())
console.log("TorreC:", torreC.print())