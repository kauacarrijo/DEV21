let numeroEscolhido, listaNumeros, i;
listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeroEscolhido = Number(prompt("Escolha um número"));
for(i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] === numeroEscolhido){
        console.log("Indice " + i);
    }
}