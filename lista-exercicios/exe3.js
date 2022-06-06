//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a 
//base elevada ao expoente.

// minha aplicação 
const exponenciacao = (base, expoente) => {
    return console.log(base ** expoente)
}

exponenciacao(5, 2) 

/* function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3)) */