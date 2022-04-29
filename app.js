const read = require('readline-sync') //readline-sync é uma biblioteca que você consegue responder perguntas no terminal.
const buscarLivros = require('./controllers/buscarLivros') //para acessar o buscarLivros dentro do meu app
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(` 
================== MENU ===================
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Buscar livros nao lidos

5 - SAIR

Digite um numero[1-5]: 
`)

switch(resposta) {
    case '1': 
        buscarLivros() //chamar a função buscarLivros
        break
    case '2':
        listarLivrosOrdenados() //chamar a função listarLivrosOrdenados
        break
    case '3':
        listarRecomendados() //chamar a função listarRecomendados
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default: 
        console.log('Fim do algoritmo');
}
