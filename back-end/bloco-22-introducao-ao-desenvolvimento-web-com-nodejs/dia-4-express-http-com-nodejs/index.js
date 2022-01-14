const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//exercicio1
app.get('/ping', function(_req, res) {
    return res.status(200).json({message: 'pong'});
});

//exercicio2
app.post('/hello', function(req,res) {
    const {name} = req.body;
    return res.status(200).json({message : `Hello, ${name}!`});
})

app.listen(3001, () => {
    console.log('Aplicação na porta 3001 ');
});