/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no 
  console a soma, subtração, multiplicação e divisão desses valores. */

function Continha(valor1, valor2) {
   const soma = (valor1 + valor2)   
   const sub = (valor1 - valor2)
   const mult = (valor1 * valor2)
   const div = (valor1 /valor2)
   console.log(soma, sub, mult, div) 
}

Continha(100, 2)

// 2 Forma 
const continha2 = (x, y) => console.log(x + y, x - y, x * y, x / y)
continha2(32, 4)