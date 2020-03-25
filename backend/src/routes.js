const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// ONGS
routes.get('/ongs', OngController.index); // Listar
routes.post('/ongs', OngController.create); // Criar


routes.get('/profile', ProfileController.index);


// INCIDENTS
routes.get('/incidents', IncidentController.index); // Listar
routes.post('/incidents', IncidentController.create); // Criar
routes.delete('/incidents/:id', IncidentController.delete); // Deletar


module.exports = routes;