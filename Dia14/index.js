function cadastrarNovoColaborador(){
    let condicao = prompt("Deseja cadastrar outro colaborador? (s/n)");
    if(condicao === "s"){
        cadastrarColaborador();
    }else{
        return 0;
    }
}




function aumentoDeSalario(nome, salario){
let porcent;
let salarioNovo = salario;
    if(salario <= 1500){
        salarioNovo *= 1.2;
        porcent = 20;
    }else{
        if(salario <= 2000){
            salarioNovo *= 1.15;
            porcent = 15;
        }else{
            if(salario <= 3000){
                salarioNovo *= 1.1;
                porcent = 10;
            }else{
                salarioNovo *= 1.05;
                porcent = 5;
            }
        }
    }
    alert(`Nome do colaborador: ${nome};\nSalário: ${salario};\nPorcentagem de aumento: ${porcent}%;\nSalário reajustado: ${salarioNovo}.`);
    cadastrarNovoColaborador();
}

function cadastrarColaborador(){
    let nome = prompt("Digite seu nome:");
    let salario = Number(prompt("Digite seu salário:"));
    aumentoDeSalario(nome, salario);
}

cadastrarColaborador();