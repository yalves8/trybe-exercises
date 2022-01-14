const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/ping', function(req, res) {
    return res.status(200).json({message: 'pong'});
});

app.listen(3001), () => {
    console.log('Aplicação na porta 3001 ');
}