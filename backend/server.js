const express = require('express');
const app = express();
const porta = 3005;
const nodemailer = require("nodemailer");
const rotas = require('./src/routes/Principal');

app.use(rotas);



app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
    console.log(`----------------------------------------`);
    console.log(`Servidor rodando no endereço: http://localhost:${porta}`);
});