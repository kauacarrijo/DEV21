let opcao, valorDesejado;
opcao = prompt("Escolha uma opção:\n1 - Abastecer com gasolina;\n2 - Abastecer com álcool;\n3 - Calibrar os pneus.");

switch(opcao){
    case "1":
        valorDesejado = Number(prompt("Digite o valor desejado: (R$)"));
        console.log(`Foi abastecido ${(valorDesejado / 5).toFixed(0)} litros de gasolina!`);
        break;
    case "2":
        valorDesejado = Number(prompt("Digite o valor desejado: (R$)"));
        console.log(`Foi abastecido ${(valorDesejado / 3).toFixed(0)} litros de álcool!`);
        break;
    case "3":
        console.log("Pneus calibrados com sucesso!");
        break;
}