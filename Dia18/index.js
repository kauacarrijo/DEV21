class Livro {
    Titulo;
    Autor;
    Editora;
    AnoDePublicacao;
    Disponibilidade = true;
    constructor(titulo, autor, editora, anoDePublicacao){
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoDePublicacao = anoDePublicacao;
    }
}

class Biblioteca {
    Nome;
    Endereco;
    Telefone;
    AcervoDeLivros = [];
    constructor(nome, endereco, telefone, acervoDeLivros){
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoDeLivros = acervoDeLivros;
    }

    BuscarLivro(nomeLivro){
        this.AcervoDeLivros.forEach(livro => {
            if(livro.Titulo == nomeLivro){
                console.log(`Título: ${livro.Titulo}\nAutor: ${livro.Autor}\nEditora: ${livro.Editora}\nAno de publicação: ${livro.AnoDePublicacao}\nDisponibilidade: ${livro.Disponibilidade}`);
            }
        })
    }

    EmprestimoLivro(nomeLivro){
        let emprestado = false;
        this.AcervoDeLivros.forEach(livro => {
            if(livro.Titulo == nomeLivro){
                if(livro.Disponibilidade){
                    livro.Disponibilidade = false;
                    emprestado = true;
                    console.log("Livro emprestado.");
                }else{
                    console.log("Livro indisponível.");
                }
            }
        })
        return emprestado;
    }

    DevolucaoLivro(nomeLivro){
        this.AcervoDeLivros.forEach(livro => {
            if(livro.Titulo == nomeLivro){
                if(!livro.Disponibilidade){
                    livro.Disponibilidade = true;
                    console.log("Livro devolvido.");
                }
            }
        })
    }
}

let livros = [];
livros.push(new Livro("Dom Casmurro", "Machado de Assis", "Editora A", 1899));
livros.push(new Livro("O Alquimista", "Paulo Coelho", "Editora B", 1988));
livros.push(new Livro("Grande Sertão: Veredas", "João Guimarães Rosa", "Editora C", 1956));
livros.push(new Livro("Cem Anos de Solidão", "Gabriel García Márquez", "Editora D", 1967));
livros.push(new Livro("1984", "George Orwell", "Editora E", 1949));

let biblioteca = new Biblioteca("Biblioteca A", "Avenida Dona Maria", "62981995242", livros);
biblioteca.BuscarLivro("1984");
biblioteca.EmprestimoLivro("1984");
biblioteca.DevolucaoLivro("1984");