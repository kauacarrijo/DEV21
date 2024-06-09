let i, j, listaUm, listaDois, numeroAux;
listaUm = [];
listaDois = [];
numeroAux = Number(prompt("Digite a quantidade de números você quer colocar na sua lista:"));

for(i = 0; i < numeroAux; i++){
    listaUm[i] = prompt(`Digite o número ${i + 1}`);
}

for(i = 0; i < numeroAux; i++){
    console.log(listaUm[i]);
}

for(i = 0, j = numeroAux - 1; i < numeroAux; i++){
    listaDois[i] = listaUm[j];
    j--;
}

for(i = 0; i < numeroAux; i++){
    console.log(listaDois[i]);
}