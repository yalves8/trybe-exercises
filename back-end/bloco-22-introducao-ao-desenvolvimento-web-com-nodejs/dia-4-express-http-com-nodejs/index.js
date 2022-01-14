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


//exercicio 5 e 6
app.get('/simpsons', function (_req, res) {
    const leitura = readJson().then((content) => res.status(200).json(content)).catch((err) => res.status(500).json({ message: `${err.message}` }));
    return leitura;
});

//exercicio 7
app.get('/simpsons/:id', function (req, res) {
    const { id } = req.params;
    const leitura = readJson().then((content) => {
        const findArq = content.find((r) => r.id === id);
        if (!findArq) return res.status(404).json({ message: 'Simpson not found!' });
        res.status(200).json(findArq);
    });
    return leitura;
});


app.listen(3001, () => {
    console.log('Aplicação na porta 3001 ');
});