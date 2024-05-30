let nome, idade, cartaDeMotorista, carro;
nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

if(idade < 18) {
    console.log(`${nome}, você não pode dirigir.`);
}else {
    cartaDeMotorista = prompt("Possui carta de motorista? (Sim/Não)");
    if(cartaDeMotorista === "Não") {
        console.log(`${nome}, você não pode dirigir.`);
    }else {
        carro = prompt("Tem algum carro? (Sim/Não)");
        if(carro === "Não") {
            console.log(`${nome}, você pode dirigir mas não tem um carro.`);
        }else {
            console.log(`${nome}, você será motorista!`);
        }
    }
}