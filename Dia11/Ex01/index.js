let nomeAlunos, notaAlunos, i, quantidadeAlunos, condicao, somaNotas;
nomeAlunos = [];
notaAlunos = [];
i = 0;
somaNotas = 0;

do{
    nomeAlunos[i] = prompt(`Digite o nome do aluno ${i + 1}:`);
    notaAlunos[i] = parseInt(prompt(`Digite a nota do aluno ${nomeAlunos[i]}:`));
    somaNotas += notaAlunos[i];
    i++;
    condicao = Number(prompt("Digite \"1\" para continuar;\nDigite \"0\" para encerrar."));

} while(condicao);

for(i = 0; i < nomeAlunos.length; i++){
    console.log(`Nota do aluno ${nomeAlunos[i]}: ${notaAlunos[i]}`);
}

console.log("Soma das notas: " + somaNotas);
console.log(`Média geral da turma: ${(somaNotas / nomeAlunos.length).toFixed()}`);