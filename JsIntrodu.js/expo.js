const prompt = require('prompt-sync')();

// Entrada do usuário
let base = parseInt(prompt("Insira a base para a sua operação: "));
let exp = parseInt(prompt("Insira o expoente para a sua operação: "));

// Verificação de entradas inválidas
if (isNaN(base) || isNaN(exp)) {
    console.log("Por favor, insira números válidos.");
} else {
    let resultado = 1;

    // Se o expoente for maior que 0, calculamos a potência
    for (let i = 0; i < exp; i++) {
        resultado *= base;
    }

    // Se o expoente for zero, qualquer número elevado a 0 é 1
    if (exp === 0) {
        resultado = 1;
    }

    console.log(`Resultado: ${resultado}`);
}
