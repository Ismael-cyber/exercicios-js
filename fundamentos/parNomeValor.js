// par none/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa'  // contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)