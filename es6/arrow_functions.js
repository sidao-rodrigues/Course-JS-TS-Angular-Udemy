/*var dobroDoValor = function(numero) {
    return numero * 2;
}
*///forma normal 
//agora com arrow_function


// para um único parâmetro não precisa colocar os parenteses, apenas ele solto. Para mais parâmetros precisa-se dos parenteses, e se não
//possuir parâmetros precisa-se colocar os parenteses vazio ()

var dobroDoValor = numero => {
    return numero * 2;
}

var dobroDoValorMultiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

var dobroDoValorVazio = () => {
    return 5 * 2;
}

//pode-se ainda enxugar o retorno dessa maneira

var dobroDoValorEnxuto = numero => numero * 2;

console.log(dobroDoValor(7));
console.log(dobroDoValorEnxuto(8));
console.log(dobroDoValorMultiplicar(7,3));
console.log(dobroDoValorVazio());