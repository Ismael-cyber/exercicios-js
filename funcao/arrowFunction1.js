let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return está implicito
console.log(dobro(Math.PI)) 

let ola1 = function() {
    return 'Olá!'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())
console.log(ola1())