let nota, sexo, mediaGeral;
let condicao = 1;
let numeroDeAlunos = 0;
let notaGeral = 0;
let quantidadeHomens = 0;
let maiorNotaHomens = 0;
let mulheresNotaMaisSete = 0;

while(condicao){
    nota = Number(prompt("Digite a nota: (0-10)"));
    sexo = prompt("Digite o sexo: (Masculino/Feminino)");
    notaGeral += nota;
    if(sexo === "Masculino"){
        quantidadeHomens++;
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota;
        }
    }
    if(sexo === "Feminino" && nota > 7){
        mulheresNotaMaisSete++;
    }
    numeroDeAlunos++;
    condicao = Number(prompt("Deseja cadastrar outra nota?\nDigite (0) para não;\nDigite (1) para sim."))
}

mediaGeral = notaGeral / numeroDeAlunos;

console.log("Média geral: " + mediaGeral);
console.log("Quantidade de homes: " + quantidadeHomens);
console.log("Quantidade de mulheres que tiveram nota acima de 7: " + mulheresNotaMaisSete);
console.log("Maior nota entre os homens: " + maiorNotaHomens);