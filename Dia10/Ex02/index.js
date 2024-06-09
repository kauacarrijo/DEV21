let i, j, listaUm, listaDois;
listaUm = [];
listaDois = [];

for(i = 0; i < 5; i++){
    listaUm[i] = prompt(`Digite o número ${i + 1}`);
}

for(i = 0; i < 5; i++){
    console.log(listaUm[i]);
}

for(i = 0, j = 4; i < 5; i++){
    listaDois[i] = listaUm[j];
    j--;
}

console.log(listaDois);