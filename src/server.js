// Importando o express
const express = require('express')
const route = require('./route')
const path = require('path')

// Criando um server e executando
const server =  express();

// Informando ao express que a nossa view engine,o responsável será o 'ejs'
server.set('view engine', 'ejs')

//Dizendo ao express onde ficaram meus arquivos HTML, CSS...
server.use(express.static("public"))

//Pegando o caminho da pasta onde está o nosso projeto. __dirname: significa onde estamos no caso aqui: dentro de = __dirname = src/
server.set('views', path.join(__dirname, 'views'))

//Midleware
server.use(express.urlencoded({extended: true}))

//Express, use o arquivo route
server.use(route)

server.listen(3000, () => console.log('RODANDO!'))









/*nodemon . = nodemon src/server.js || nodemon . faz referência ao 'main' */