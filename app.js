const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const routes = require('./src/routes/routes');

const app = express();

// Configuração de middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', routes); 

// Middleware de erro
app.use(errorMiddleware);

module.exports = app;