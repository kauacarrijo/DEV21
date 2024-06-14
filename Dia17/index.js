class Hotel{
    Id;
    Nome;
    Categoria;
    Endereco;
    Telefone;
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva{
    Id;
    IdHotel;
    Resposavel;
    DiaEntrada;
    DiaSaida;
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

function CadastrarHotel(){
    let nome = prompt("Digite o nome do hotel:");
    let categoria = parseInt(prompt("Digite a categoria do hotel:"));
    let endereco = prompt("Digite o endereço do hotel:");
    let telefone = prompt("Digite o telefone do hotel");

    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++;
    hoteis.push(hotel);
}

function CadastrarReserva(){
    let idHotelReserva;
    let validacao = false;

    do{
        idHotelReserva = prompt("Digite o id do hotel:");
        for(let i = 0; i < hoteis.length; i++){
            if(idHotelReserva == hoteis[i].Id){
                i = hoteis.length;
                validacao = true;
            }else{
                if(i == hoteis.length - 1){
                    console.log("Id do hotel informado não existe.");
                    return 0;
                }
            }
        }
    } while(!validacao);

    let responsavel = prompt("Digite o nome do responsável:");
    let diaEntrada = Number(prompt("Digite o dia de entrada:"));
    let diaSaida;
    do{
        diaSaida = Number(prompt("Digite o dia de saída:"));
        if(diaSaida < diaEntrada){
            console.log("O dia de saída deve ser maior que o dia de entrada.");
        }
    }while(diaSaida < diaEntrada);

    let reserva = new Reserva(idReserva, idHotelReserva, responsavel, diaEntrada, diaSaida);
    idReserva++;
    reservas.push(reserva);
}

function ProcurarReservasPeloHotel(idHotelReserva){
    reservas.forEach(reserva => {
        if(reserva.IdHotel == idHotelReserva){
            let index = idHotelReserva - 1;
            console.log(`Hotel: ${hoteis[index].Nome} - Responsável: ${reserva.Responsavel} - Dia de entrada: ${reserva.DiaEntrada} - Dia de saída: ${reserva.DiaSaida}`);
        }
    })
}

function ProcurarHotelPelaReserva(idReservaHotel){
    let index = (reservas[idReservaHotel - 1].IdHotel) - 1;
    idReservaHotel -= 1;
    console.log(`Hotel: ${hoteis[index].Nome} - Endereco: ${hoteis[index].Endereco} - Dia de entrada: ${reservas[idReservaHotel].DiaEntrada} - Dia de saída: ${reservas[idReservaHotel].DiaSaida}`);
}

function ProcurarReservasPeloNome(nome){
    reservas.forEach(reserva => {
        if(reserva.Responsavel == nome){
            let index = (reserva.IdHotel) - 1;
            console.log(`Hotel: ${hoteis[index].Nome} - Endereco: ${hoteis[index].Endereco} - Responsável: ${reserva.Responsavel} - Dia de entrada: ${reserva.DiaEntrada} - Dia de saída: ${reserva.DiaSaida}`);
        }
    })
}

function ProcurarHoteisPelaCategoria(categoria){
    let arrayHoteis = [];
    hoteis.forEach(hotel => {
        if(hotel.Categoria == categoria){
            arrayHoteis.push(hotel);
        }
    })
    return arrayHoteis;
}

function AtualizarTelefone(idHotelReserva, telefone){
    hoteis[idHotelReserva - 1].Telefone = telefone;
    console.log("Número de telefone atualizado!");
}

//=================================================================

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;
let idAux, telefoneAux, hoteisProcurados, opcao, condicao = true;


do{
    opcao = prompt("Escolha uma opção:\n(1) - Cadastrar hotel\n(2) - Cadastrar Reserva\n(3) - Procurar reserva pelo hotel\n(4) - Procurar hotel pela reserva\n(5) - Procurar reserva pelo responsável\n(6) - Procurar hotéis por categoria\n(7) - Atualizar telefone de um hotel\n(8) - Encerrar o programa");
    switch(opcao){
        case "1":
            CadastrarHotel();
            break;
        case "2":
            CadastrarReserva();
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel:"));
            break;
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva:"));
            break;
        case "5":
            ProcurarReservasPeloNome(prompt("Digite o nome do responsável pela reserva:"));
            break;
        case "6":
            hoteisProcurados = ProcurarHoteisPelaCategoria(prompt("Digite a categoria que deseja procurar:"));
            console.log(hoteisProcurados);
            break;
        case "7":
            idAux = parseInt(prompt("Digite o id do hotel que deseja atualizar:"));
            telefoneAux = prompt("Digite o novo telefone:");
            AtualizarTelefone(idAux, telefoneAux);
            break;
        case "8":
            condicao = false;
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}while(condicao);