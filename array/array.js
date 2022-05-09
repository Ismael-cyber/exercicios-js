console.log(typeof Array, new Array, typeof []) // Array é um objeto em Javascript
// trabalhar com dados homogêneos em uma array - diz as Escrituras de boas Práticas

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // método para adicionar elementos no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // lista do array vai estar ordenada, ele reorganiza o array
console.log(aprovados)

delete aprovados[1] 
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // função para deletar e adicionar os elementos
console.log(aprovados)