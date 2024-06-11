let nomes = [];
let senhas = [];
let condicao = true;
let i, indice, nome, senha, contador = 0;

const encontrarIndice = (nome) => {
    for(i = 0; i < nomes.length; i++){
        if(nome === nomes[i]){
            return i;
        }
    }
    return -1;
}

while(condicao){
    let opcao = Number(prompt("Escolha uma opção:\n(1) para cadastrar um usuário;\n(2) para realizar o login;\n(3) para excluir um cadastro;\n(4) para encerrar o programa."));
    switch(opcao){
        case 1:
            nomes[contador] = prompt("Digite o nome:");
            senhas[contador] = prompt("Digite a senha de 4 dígitos númericos:");
            contador++;
            break;
        case 2:
            nome = prompt("Digite seu nome:");
            indice = encontrarIndice(nome);
            if(indice !== -1){
                senha = prompt("Digite sua senha");
                if(senha == senhas[i]){
                    alert("Login realizado com sucesso!");
                }else{
                    alert("Senha incorreta.");
                }
            }else{
                alert("Nome não encontrado.");
            }
            break;
        case 3:
            nome = prompt("Digite o nome do usuario a ser excluido:");
            indice = encontrarIndice(nome);
            if(indice !== -1){
                for(i = indice; i < nomes.length - 1; i++){
                    nomes[i] = nomes[i + 1];
                    senhas[i] = senhas[i + 1];
                }
                nomes.length--;
                senhas.length--;
                alert("Cadastro excluído com sucesso!");
            }else{
                alert("Nome de usuário não encontrado.");
            }
            break;
        case 4:
            condicao = false;
            break;
        default:
            alert("Escolha uma opção !válida!.");
            break;
    }
}