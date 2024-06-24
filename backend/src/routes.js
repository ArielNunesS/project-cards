const express = require('express');
const routes = express.Router();

const CardsController = require('./controllers/CardsController');


// se tem algum protocolo sendo enviado para /cards =>
routes.post('/cards', CardsController.create);  // se for post acessa a função 'create'
routes.get('/cards', CardsController.read);     // se for get acessa a função 'read'
routes.delete('/cards/:id', CardsController.delete ); // se for delete acessa a função 'delete'
// necessário ser a rota de uma nota específica, pois deleta com base no id

module.exports = routes;
