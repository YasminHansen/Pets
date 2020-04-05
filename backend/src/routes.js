const express = require('express');

const UserController = require('./controller/UserController');
const PetController = require('./controller/PetController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

//Cria sessão do usuário
routes.post('/session', SessionController.create);

//Rotas do Usuário
routes.get('/user', UserController.index);
// O método acima lista todos os usuários
// Esse método será excluído futuramente
routes.post('/user', UserController.create); //cria a rota de criação do usuário

routes.get('/profile', ProfileController.index);

//Rotas relacionada ao cadastro, edição e deleção de pet
routes.get('/pets', PetController.index); //lista todos os pets
routes.post('/pets', PetController.create); //cria a rota de criação de pet
routes.delete('/pets/:id', PetController.delete) //deleta um pet cadastrado


module.exports = routes; //exporta as rotas