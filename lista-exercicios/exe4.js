/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

// minha aplicação 
const restante = (dividendo,divisor ) => {
    const resultado = (dividendo /divisor )
    const resultadoFinal = dividendo % divisor   
    return console.log(resultado, resultadoFinal)
}

restante(150, 25)

// A do professor
 function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(150, 25) 
