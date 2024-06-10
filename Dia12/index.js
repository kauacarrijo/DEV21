let nomes = [];
let senhas = [];
let condicao = true;
let nome, senha, contador = 0;
let opcao = Number(prompt("Escolha uma opção:\n(1) para cadastrar um usuário;\n(2) para realizar o login;\n(3) para excluir um cadastro;\n(4) para encerrar o programa."));

console.log("AAAAAAAAAAAAAAAAAAAAAAAA")

while(condicao){
    switch(opcao){
        case 1:
            nomes[contador] = prompt("Digite o nome:");
            senhas[contador] = prompt("Digite a senha de 4 dígitos númericos:");
            contador++;
            break;
        case 2:
            nome = prompt("Digite seu nome:");
            senha = prompt("Digite sua senha");
            break;
        case 3:
            break;
        default:
            condicao = false;
    }
}