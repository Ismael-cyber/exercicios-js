// Função em JS é FIRST_CLASS Object (Citizens)
// Higher-order function 

//criar de forma literal
function fun1() { }

// Armazenar uma função em uma variavel 
const fun2 = function() {}

// Armazenar em um array
const array = [function(a,b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar uma função em atributo de um objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//Passar função como paramêtro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter um função 
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)