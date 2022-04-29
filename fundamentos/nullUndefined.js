let valor // não inicializada
console.log(valor)  // Valor undefined

valor = null // Valor que não tem nenhum valor dentro dela, e não aponta nenhum endereço
console.log(valor)
//console.log(valor.toString())   // ERRO !! AO ACESSAR O QUE ESTÁ NULO 

const  produto = {}
console.log(produto.preco) // Não Está definido o preco no produto
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco 
console.log(!!produto.preco)
console.log(produto)