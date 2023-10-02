const express = require('express');
const app = express.Router();
const postEmail = require('../controller/controllerEmail');


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.post('/envio/', postEmail.postEmail);
app.get('/', (req, res)=> {
    res.send("Hello World");
})

module.exports = app