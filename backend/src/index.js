const express = require('express'); //importando o módulo express para a variável
const cors = require('cors');
const routes = require('./routes'); //importa o arquivo com as rotas


const app = express(); //armazena a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333); //manda a aplicação ouvir a porta 3333 -> localhost:3333
//para rodar a aplicação basta rodar "npm start" no terminal na pasta backend