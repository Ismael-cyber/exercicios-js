/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros 
e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob 
o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de 
juros compostos.
*/

function CalcularJuroSimples(cap, i, t) {
    const valor = cap
    const calculo = valor * i * t
    return console.log(calculo), console.log(valor + calculo)
}

CalcularJuroSimples(1200, 0.02, 14)

function CalcularJuroComposto(cap, i, t) {
    const montante = (cap * (1 + i)**t) 
    const calculoJuros = montante - cap
    const valorJuros = calculoJuros
    return console.log(montante.toFixed(2)), console.log(valorJuros.toFixed(2))   
}

CalcularJuroComposto(620, 0.015, 24)