let modelos = ["A", "B", "C", "D", "E", "F"];
let anos = [2024, 2013, 1998, 2021, 2012, 1980];
let valores = [61, 52, 543, 34, 25, 16];
let condicao = true;
let auxAnos, auxModelos, auxValores, j, i = 0;

while(condicao){
    modelos[i] = prompt(`Digite o modelo do carro ${i + 1}:`);
    anos[i] = Number(prompt(`Digite o ano do carro ${i + 1}:`));
    valores[i] = Number(prompt(`Digite o valor do carro ${i + 1}:`));
    i++;
    condicao = prompt("Deseja cadastrar um novo carro? (s/n)")
    if(condicao == "s"){
        condicao = true;
    }else{
        condicao = false;
    }
}

console.log("Carros cadatrados:");

for(i = 0; i < modelos.length; i++){
    console.log(`${modelos[i]}, ${anos[i]} Valor: ${valores[i]}`);
}

for(i = 0; i < anos.length - 1; i++){
    auxAnos = anos[i];
    auxModelos = modelos[i];
    auxValores = valores[i];

    for(j = i + 1; j < valores.length; j++){
        if(valores[i] > valores[j]){
            anos[i] = anos[j];
            anos[j] = auxAnos;
            modelos[i] = modelos[j];
            modelos[j] = auxModelos;
            valores[i] = valores[j];
            valores[j] = auxValores;
            auxAnos = anos[i];
            auxModelos = modelos[i];
            auxValores = valores[i];
        }
    }
}

console.log("Modelos ordenado por preço:");

for(i = 0; i < modelos.length; i++){
    console.log(`${modelos[i]}, ${anos[i]} Valor: ${valores[i]}`);
}