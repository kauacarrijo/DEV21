let i, j, listaUm, listaDois;
listaUm = [];
listaDois = [];

for(i = 0; i < 5; i++){
    listaUm[i] = prompt(`Digite o número ${i + 1}`);
}

console.log("Lista original: " + listaUm);

for(i = 0, j = 4; i < 5; i++){
    listaDois[i] = listaUm[j];
    j--;
}

console.log("Lista invertida: " + listaDois);