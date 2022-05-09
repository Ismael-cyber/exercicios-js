const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

// 1 solução
console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil === true
}))

// 2 solução
const resultadoPreco = produtos.filter(function(p) {
    return p.preco > 500
})
const resultadoFragil = produtos.filter(function(p){
    return p.fragil
}) 
console.log(resultadoPreco, resultadoFragil)

// Solução do Professor
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))