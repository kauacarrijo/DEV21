let fome = prompt("Está com fome? (Sim/Não)");
let dinheiro = prompt("Tem dinheiro? (Sim/Não)");
let restaurante;

if(fome === "Não" || dinheiro === "Não") {
    console.log("Hoje a janta será em casa!");
}else {
    restaurante = prompt("O restaurante está aberto? (Sim/Não)");
    if(restaurante === "Não") {
        console.log("Peça um delivery!");
    }else {
        console.log("Hoje o jantar será no seu restaurante preferido!");
    }
}