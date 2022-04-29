const valores = [7.7, 8.9, 6.3, 9.2] // Array é muito dinâmico 
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10  // Forma de acessar o array
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')  // Método para adicionar mais valores num vetor
console.log(valores) 

console.log(valores.pop())  // Método Pop deleta o ultimo valor dentro do array 
delete valores[0] // Função delete elimina qualquer valor desejavel 
console.log(valores)

console.log(typeof valores)