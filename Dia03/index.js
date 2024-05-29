let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let altura = Number(prompt("Digite sua altura(cm):")) / 100;
let peso = Number(prompt("Digite seu peso(Kg):"));
const anoAtual = 2024;
const anoDeNascimento = anoAtual - idade;
const imc = peso / (altura * altura);
console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoDeNascimento}, tem ${altura} de altura, pesa ${peso}Kg e seu IMC é ${imc.toFixed(2)}Kg/m2`);