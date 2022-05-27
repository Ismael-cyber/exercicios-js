for (let letra of 'Cod3er') {
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for (let i in assuntoEcma) {
    console.log(i)
}

for (let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { aboradado: true }],
    ['Set', { aboradado: true }],
    ['Promise', { aboradado: false }],
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for(let valor of assuntoMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
} 