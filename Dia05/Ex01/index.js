let numeroUm, numeroDois, operação;
numeroUm = Number(prompt("Digite o primeiro numero:"));
numeroDois = Number(prompt("Digite o segundo numero:"));
operação = prompt("Digite a operação: (Soma / Subtração / Multiplicação / Divisão / Resto)");

switch(operação){
    case "Soma":
        console.log(numeroUm + numeroDois);
        break;
    case "Subtração":
        console.log(numeroUm - numeroDois);
        break;
    case "Multiplicação":
        console.log(numeroUm * numeroDois);
        break;
    case "Divisão":
        console.log(numeroUm / numeroDois);
        break;
    case "Resto":
        console.log(numeroUm - numeroDois);
        break;
}