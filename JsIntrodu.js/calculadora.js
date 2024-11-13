

let num1,op,num2;
num1 = Number(prompt("Informe o primeiro numero: "))

op = prompt("Informe a operação(| + | - | x | / |): ")

num2 = Number(prompt("Informe o segundo numero: "))

switch (op) {
    case "+":
        console.log(`Resultado, ${num1} + ${num2} = ${num1 + num2}`)
        break;
        case  "-":
        console.log(`Resultado, ${num1} - ${num2} = ${num1 - num2}`)
        break;
        case "*":
        console.log(`Resultado, ${num1} x ${num2} = ${num1 * num2}`)
        break;
        case  "/":
        console.log(`Resultado, ${num1} / ${num2} = ${num1 / num2}`)
        break;

    default:
        console.log("Resultado Inválido")
        break;
}


