let nome, cpf, valor, opcao;
let saldoTotal = 500;
let acumuladoValor = 0;
let maiorValor = 0;
let contador = 0;

nome = prompt("Digite seu nome: ");
cpf = prompt("Digite seu cpf:");

do {
    valor = Number(prompt("Digite um valor:"));
    if(valor < 1){
        valor = Number(prompt("Digite um valor maior que 0:"));
    }
    acumuladoValor += valor;
    if(valor > maiorValor){
        maiorValor = valor;
    }
    opcao = Number(prompt("Escolha uma opcao:\nDigite (0) para saque\nDigite (1) para deposito"));
    if(opcao){
        saldoTotal += valor;
    }else{
        if(valor < saldoTotal){
            saldoTotal -= valor;
        }else{
            alert("Não foi possível realizar o saque.");
        }
    }
    contador++;
    opcao = Number(prompt("Deseja continuar?\nDigite (1) para continuar\nDigite (2) para parar")) - 1;
} while(!opcao);

console.log("Saldo total: " + saldoTotal);
console.log("Maior valor inserido: " + maiorValor);
console.log("Média dos valores inseridos: " + (acumuladoValor / contador).toFixed());

