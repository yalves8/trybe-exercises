const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const streets = require('./router');
const { erroRota } = require('./errorRouter'); //exercicio3
const res = require('express/lib/response');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//app.use('/user', streets); exercicio1
//app.use('/btc', streets); exercicio2
app.use('/posts', streets); 

//exercicio3
app.use('*', function(_req,res,next) {
    res.status(404).json({status: 404, message: 'Opsss router not found'});
    next();
});

app.use(erroRota);
app.listen(3001, () => console.log('Run server http://localhost:3001'));