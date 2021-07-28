// Configurando o banco de dados

const sqlite3 = require('sqlite3')

// Declarando desta maneira pois preciso usar somente uma funcionalidade do banco sqlite, no caso chamada 'open'
const { open } = require('sqlite') //Abrir uma conexão com o banco de dados. Esse é o papel do open.

module.exports = () => 
    open({
        // Vai receber o caminho do nosso banco de dados
        filename: './src/db/rocketq.sqlite',
        //Driver: é quem comanda o banco de dados. a gente somente passa instruções para ele em sql.
        driver: sqlite3.Database, 
    })
