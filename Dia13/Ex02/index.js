class Carro{
    nome;
    potencia;
    velocidadeMaxima;
    aceleracao;
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }

    tempoDeCorrida(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
        return resultado;
    }
}

class Corrida{
    nome;
    tipo;
    distancia;
    participantes;
    vencedor;
    constructor(nome, tipo, distancia, participantes){
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = participantes;
    }

    corrida(){
        let menorTempo = 99999999;
        for(let i = 0; i < this.participantes.length; i++){
            let tempoDeCorrida = this.participantes[i].tempoDeCorrida(this.distancia);
            if(tempoDeCorrida < menorTempo){
                this.vencedor = this.participantes[i].nome;
                menorTempo = tempoDeCorrida;
            }
        }
    }

    vencedorCorrida(){
        alert(`O vencedor da última corrida foi ${this.vencedor}!`);
    }
}

let carros = [];
let corrida, localCorrida, tipoCorrida, distanciaCorrida;
let numeroDeCarros = Number(prompt("Digite o número de carros participantes:"));

for(let i = 0; i < numeroDeCarros; i++){
    let nome = prompt(`Digite o nome da equipe do carro ${i + 1}:`);
    let potencia = Number(prompt(`Digite o número de cavalos de potência do carro ${i + 1}:`));
    let velocidadeMaxima = Number(prompt(`Digite a maior velocidade que o carro ${i + 1} pode alcançar:`));
    let aceleracao = Number(prompt(`Digite o tempo em segundos que o carro ${i + 1} leva para ir de 0 a 100 km/h:`));
    let carro = new Carro(nome, potencia, velocidadeMaxima, aceleracao);
    carros[i] = carro;
}

localCorrida = prompt("Digite o nome do local da corrida:");
tipoCorrida = prompt("Digite o tipo da corrida:");
distanciaCorrida = prompt("Digite o total em metros da corrida:");
corrida = new Corrida(localCorrida, tipoCorrida, distanciaCorrida, carros);

corrida.corrida();
corrida.vencedorCorrida();