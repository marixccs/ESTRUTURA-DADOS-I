export default class Queue{

    #data //Vetor print
    
    constructor(){
        this.#data=[]

    }

    //método de inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    //método de remoção na fila, não é pop pq tira o que entrou por último
   // o desenfileramento usa shift para remover da posição 0
   dequeue(){
      return this.#data.shift()
   }

   //método para consultar o início da fila sem remover o elemento 
   //peek é olhadinha
   //return puxa o dado
   peek(){
        return this.#data[0]
   }

   get isEmpty(){
        return this.#data.length === 0 
   }

   //método para imprimir a fila (efeitos de depuração)
   print(){
        let output = '[ '
        for(let i=0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
   }
}