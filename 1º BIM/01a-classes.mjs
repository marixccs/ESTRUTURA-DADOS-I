class FormaGeometrica{
    #base
    #altura
    #tipo

    // constructor(base, altura, tipo){
    //     this.#base = base;
    //     this.#altura = altura;
    //     this.#tipo = tipo;

    // }

    get base(){
        return this.#base
    }
    get altura(){
        return this.#altura
    }
    get tipo(){
        return this.#tipo
    }
    set base(valor){
        if(typeof valor !== Number && valor <= 0){
            throw new Error("Erro: a base precisa ser numéria e maior que zero")
        }
        this.#base = valor
        
    }

    set altura(valor){
        if(typeof valor !== Number &&  valor <= 0){
            throw new Error("Erro: a altura precisa ser numéria e maior que zero")
        }
        this.#altura = valor
        

    }

    set tipo(valor){
        if(!["R", "T", "E"].includes(valor.toUpperCase())){
            throw new Error("Erro: o tipo precisa ser um dos valores 'R', 'T', 'E'")
        }
        this.#tipo = valor
    }
    calcArea(){
        
        switch(this.#tipo){
            case 'R':
                
                return this.base * this.altura
                break
            case 'T':
                return (this.#base * this.#altura) / 2
                break
            case 'E':
                return (this.#base / 2) * (this.#altura / 2) * Math.PI  
        }
    }
}

let forma1 = new FormaGeometrica()

forma1.altura = 7
forma1.base = 12
forma1.tipo = 'R'

console.log(`A area: ${forma1.calcArea()}`)

let forma2 = new FormaGeometrica()
forma2.altura = 7
forma2.base = 12
forma2.tipo = 'E'

console.log(`A area: ${forma2.calcArea()}`)


//VAI CAIR NA PROVA
//TORRE DE HANOI - MOVIMENTAR OS DISCOS ENTRES AS HASTES 