const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) { 
    return resultado && bolsista
})
console.log(resultado)

// Desafio 2: Algum aluno é bolsista?
// SOLUÇÃO DO PROFESSOR
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))



/*const resultado2 = alunos.map(a => a.bolsista).reduce(function(resultado2, bolsista) {
    if(resultado2 || bolsista) {
        console.log('Tem um bolsista sim')
    }
    else {
        console.log('Sou não')
    }
    
})
console.log(resultado2) MINHA SOLUÇÃO!!!!*/