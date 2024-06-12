function numerosComuns(arrayUm, arrayDois){
    let arrayAux = [];
    let k = 0;
    for(let i = 0; i < arrayUm.length; i++){
        for(let j = 0; j < arrayDois.length; j++){
            if(arrayUm[i] == arrayDois[j]){
                arrayAux[k] = arrayUm[i];
                k++;
                j = arrayDois.length;
            }
        }
    }
    return arrayAux;
}

let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];
let arrayComum = numerosComuns(arrayA, arrayB);
console.log(arrayComum);