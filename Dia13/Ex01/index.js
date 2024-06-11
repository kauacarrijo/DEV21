class Computador{
    tipo;
    processador;
    video;
    armazenamento;
    memoriaRam;
    ssd;
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }
    exibirInfos(){
        alert(`Estamos falando de um ${this.tipo}, com processador ${this.processador}, placa de video ${this.video}, ${this.armazenamento}GB de armazenamento e ${this.memoriaRam}GB de memória RAM. (SSD: ${this.ssd})`);
    }
}

let tipo = prompt("Digite o tipo do seu computador: (Desktop ou Notebook)");
let processador = prompt("Digite o nome do seu processador:");
let video = prompt("Sua placa de video é Integrada ou Dedicada?");
let armazenamento = parseInt(prompt("Digite o número em GB de armazenamento do seu computador:"));
let memoriaRam = parseInt(prompt("Digite o número em GB de memória RAM do seu computador:"));
let ssd = prompt("Seu computador possui SSD? (True or False)");
let meuPc = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd);

meuPc.exibirInfos();