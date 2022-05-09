function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
         console.log(`Meu nome é ${nome}`)
    }
    
}

const p1 = new Pessoa('Mael')
p1.falar()
console.log(p1.nome)