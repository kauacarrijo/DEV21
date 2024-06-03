let imc, anoDeNascimento, nome, idade, peso, altura, profissao, condicao;
let anoAtual = 2024;

do{
    nome = prompt("Digite seu nome:");
    idade = Number(prompt("Digite sua idade:"));
    peso = Number(prompt("Digite seu peso: (Kg)"));
    altura = Number(prompt("Digite sua altura: (cm)"));
    profissao = prompt("Digite sua profissão:");

    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura / 100}M de altura e pesa ${peso}kg.`);

    if(idade >= 18){
        console.log("Está liberado para tomar umas geladas.")
    }else {
        console.log("Sem gelada para você.")
    }

    console.log("Sua idade em meses: " + idade * 12);
    console.log("Sua idade em semanas: " + idade * 52);
    console.log("Sua idade em dias: " + idade * 365);

    imc = peso / (2 * (altura / 100));

    if(imc < 18.5){
        console.log("Seu imc está menor que 18,5 Kg/m2, você está com Magreza");
    }else {
        if(imc <= 24.9){
            console.log("Seu imc está entre 18,5 Kg/m2 e 24.9 Kg/m2, você está Normal");
        }else{
            if(imc <= 30){
                console.log("Seu imc está entre 24.9 Kg/m2 e 30 Kg/m2, você está com Sobrepeso");
            }else{
                console.log("Seu imc está maior que 30 Kg/m2, você está com Obesidade");
            }
        }
    }

    anoDeNascimento = anoAtual - idade;

    console.log("Seu ano de nascimento é: " + anoDeNascimento);

    for(let i = anoDeNascimento, j = 0; i < anoAtual; i++, j++){
        console.log(`Em ${i} você tinha ${j} anos de idade.`);
    }

    condicao = Number(prompt("Deseja continuar?\nDigite (0) para parar;\nDigite (1) para continuar."));
}while(condicao);