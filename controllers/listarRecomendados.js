//listarRecomendados Deverá listar livros que já foram lidos e que são recomendados

const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const confirmaBusca = read.question('Deseja listar os livros recomendados? S/N ').toUpperCase()
    
    if(confirmaBusca === 'S') {
      const filtraLidos = livros.filter((item) => item.leu)
    const filtraLidosRecomendados = filtraLidos.filter((item) => item.recomenda)
    console.table(filtraLidosRecomendados)  
    } 
}
module.exports = listarRecomendados