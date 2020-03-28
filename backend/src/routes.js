const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login ou verificar se a ONG existe.
routes.post('/sessions', SessionController.create);

//Listagem de ONGS
routes.get('/ongs', OngController.index);
//Cdastro de ONGS
routes.post('/ongs', OngController.create);

//Listagem de incidentes específicos
routes.get('/profile', ProfileController.index);

//Lista os incidentes
routes.get('/incidents', IncidentController.index);
//Cadastro de incidentes
routes.post('/incidents', IncidentController.create);
//Deleta os incidentes
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;