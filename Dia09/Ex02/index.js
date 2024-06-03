let nome, idade, salario, condicao, i;
let aumento = 1.015;

do{
    nome = prompt("Digite seu nome:");
    idade = Number(prompt("Digite sua idade:"));
    salario = Number(prompt("Digite seu sálario:"));

    condicao = Number(prompt(`Olá ${nome}, você tem ${idade} anos de idade, e seu sálario é de R$ ${salario},00.\n\nDigite (0) para confirmar seus dados;\nDigite (1) caso queira inserir seus dados novamente.`));

}while(condicao);

for(i = 1; i <= 10; i++){
    salario *= aumento;
    console.log(`Seu sálario no ${i}º ano será: R$${salario.toFixed(2)}`);
    aumento = (aumento * 2) - 1;
}