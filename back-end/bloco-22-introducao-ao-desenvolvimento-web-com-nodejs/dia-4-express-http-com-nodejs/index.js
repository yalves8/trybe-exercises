const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const { updateJson, readJson } = require('./indexSimpson');

//exercicio1
app.get('/ping', function (_req, res) {
    return res.status(200).json({ message: 'pong' });
});

//exercicio2
app.post('/hello', function (req, res) {
    const { name } = req.body;
    return res.status(200).json({ message: `Hello, ${name}!` });
});

//exercicio3
app.post('/greetings', function (req, res) {
    const { name, age } = req.body;
    if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
    res.status(401).json({ message: 'Unauthorized ' });
});


//exercicio5
app.get('/simpsons', function (req, res) {
    readJson().then(() => res.status(200).json({message: 'Deu certo!' })).catch((err) => res.status(500).json({message: `${err.message}`}));    
});

app.listen(3001, () => {
    console.log('Aplicação na porta 3001 ');
});