/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de
realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que 
na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno 
deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, 
um string com a frase: “Delta é negativo”.*/

function Bhaskara(ax2, bx, c) {
    const delta = (bx**2) - (4 * ax2 * c) 
    if(delta < 0 ) {
        console.log('Delta é Negativo')
    } else {
        let raizDelta = Math.sqrt(delta)
        let resultadoX1 = (- bx + raizDelta) / (2 * ax2)
        let resultadoX2 = (- bx - raizDelta) / (2 * ax2)
        
        return console.log('Resultado de Delta: ' + raizDelta), 
               console.log('Resultado de x¹: ' + resultadoX1), 
               console.log('Resultado de x²: ' + resultadoX2) 
    }
}

Bhaskara(2, -16, -18)