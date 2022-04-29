const livros = require('../database') //para acessar os livros em database
const read = require('readline-sync') //para fazer perguntas no terminal

const buscarLivros = () => {
    //quando o 1 é chamado lá no app , entra aqui nesse código e faz essa pergunta no terminal
    const confirmaBusca = read.question('Deseja buscar por categoria? S/N ').toUpperCase()

    //quando a pessoa responde sim, entra aqui nesse if e mostra no console todas as categorias existentes
    if(confirmaBusca === 'S') {
        const categorias = livros.map(livro => livro.categoria) //map para mapear as categorias em lista
        console.table(categorias); //table é para mostrar em forma de tabela

        const inputCategoria = read.question('Digite uma categoria conforme a tabela acima: ')

        const confirmacao = read.question('Tem certeza? S/N ').toUpperCase() //necessário por enquanto

        if (confirmacao === 'S') { //filter  //o 'Ss é referente ao Sim da última pergunta
           const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria) // para cada livro, olha pra categorai dele e verifica se ele é exatamente igual o que apessoa digitou, se for, olha a categoria, de um em um , se isso acontecer me mostra no console.
            console.table(livrosFiltrados)
        } 
    }
}

module.exports = buscarLivros