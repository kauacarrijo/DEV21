let numeroEscolhido, listaNumeros, listaIndices, i, j;
listaNumeros = [];
listaIndices = [];

for(i = 0; i < 10; i++){
    listaNumeros[i] = Number(prompt(`Digite o elemento ${i + 1}`));
}

numeroEscolhido = Number(prompt("Escolha um número para ser procurado:"));

for(i = 0, j = 0; i < 10; i++){
    if(listaNumeros[i] === numeroEscolhido){
        listaIndices[j] = i;
        j++;
    }
}

console.log(`O número ${numeroEscolhido} foi encontrado nos índices ${listaIndices}.`);