/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). 
*/

function Triangulo(x, y, z) {
    const ladox = x
    const ladoy = y
    const ladoz = z
    if(ladox === ladoy && ladoy === ladoz && ladoz === ladox) {
        console.log(`Este triângulo é Equilátero, ${ladox}, ${ladoy}, ${ladoz}`)
    }
    else if(ladox === ladoy && ladoy === ladox && ladoz != ladox) 
    {
        console.log(`Este triângulo é um Isóceles, ${ladox}, ${ladoy}, ${ladoz}`)
    }
    else if(ladox != ladoy && ladoy != ladoz && ladoz != ladox) 
    {
        console.log(`Este triângulo é um Escaleno, ${ladox}, ${ladoy}, ${ladoz}`)
    }
    
}

Triangulo(2, 2, 2)
Triangulo(2, 2, 4)
Triangulo(2, 3, 5)


