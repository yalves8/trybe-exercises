require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const CepController = require('./controller.js/CepController');


app.get('/ping', CepController.messagePing);
app.get('/cep/:cep', CepController.findByCep);
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))