let numeroAux, listaFibonacci, i;
numeroAux = Number(prompt("Digite um número:"));
listaFibonacci = [numeroAux - 1, numeroAux];

for(i = 2; i < 10; i++){
    listaFibonacci[i] = listaFibonacci[i - 2] + listaFibonacci[i - 1];
}

for(i = 0; i < 10; i++){
    console.log(listaFibonacci[i]);
}