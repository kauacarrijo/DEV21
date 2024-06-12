function options(){
    let option = Number(prompt(`Escolha uma opção:
        (1) para cadastrar um usuário;
        (2) para realizar o login;
        (3) para excluir um cadastro;
        (4) para encerrar o programa.`));
    return option;
}

function register(arrayName, arrayPassword){
    arrayName.push(prompt("Digite o nome:"));
    arrayPassword.push(prompt("Digite a senha:"));
}

function login(name, password){
    let index = names.indexOf(name);
    if(index !== -1 && passwords[index] === password){
        return true;
    }else{
        return false;
    }
}

function deleteUser(name){
    let index = names.indexOf(name);
    if(index !== -1){
        names.splice(index, 1);
        passwords.splice(index, 1);
        alert("Cadastro excluído com sucesso!");
    }else{
        alert("Cadastro não encontrado!");
    }
}

let names = [];
let passwords = [];
let contidion = true;
let name, password, validation;

while(contidion){
    let option = options();
    switch(option){
        case 1:
            register(names, passwords);
            break;
        case 2:
            name = prompt("Digite seu nome:");
            password = prompt("Digite sua senha");
            validation = login(name, password);
            if(validation){
                alert("Login feito com sucesso!");
            }else{
                alert("Nome ou senha incorretos!");
            }
            break;
        case 3:
            name = prompt("Digite seu nome:");
            deleteUser(name);
            break;
        case 4:
            contidion = false;
            break;
        default:
            alert("Escolha uma opção !válida!.");
            break;
    }
}