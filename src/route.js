const { render } = require('ejs')
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// const 'route', guarda todas as funcionalidades de rotas que o express tem.
const route = express.Router()

//Definir as rotas
//req = request, res = response
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//Exemplo de rota
//Formato que o formulário de dentro da modal tem que passar informação
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

// Exportando o route para dentro de server js
module.exports = route