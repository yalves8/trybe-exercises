const express = require('express');
const bodyParser = require('body-parser');
const streets = require('./router');

const app = express();

app.use(bodyParser.json());

app.use('/user', streets);

app.listen(3001, () => console.log('Run server http://localhost:3000'));