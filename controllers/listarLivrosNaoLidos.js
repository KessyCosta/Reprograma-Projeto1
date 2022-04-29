//listarLivrosNaoLidos Deverá listar livros que ainda não foram lidos
const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const confirmaBusca = read.question('Deseja ver a lista de livros ainda nao lidos? S/N ').toUpperCase()
    
    if(confirmaBusca === 'S') {
        const filtraDesejados = livros.filter((item) => item.leu === false)
    console.table(filtraDesejados)
    }   
}
module.exports = listarLivrosNaoLidos