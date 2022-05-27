console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(module.exports === this)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()