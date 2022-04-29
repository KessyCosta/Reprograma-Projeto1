//listarLivrosOrdenados Deverá retornar todos os livros ordenados de forma crescente 
//por quantidade de páginas.
const livros = require('../database.js')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const confirmaBusca = read.question('Deseja listar os livros por quantidade de paginas? S/N  ').toUpperCase()
    
    if(confirmaBusca === 'S') {
        const listarPorPaginas = livros.sort((a,b) => {
            return a.paginas - b.paginas
        })
    console.table(listarPorPaginas)
    }
}
    


module.exports = listarLivrosOrdenados
