const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const streets = require('./router');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/btc', streets);

app.listen(3001, () => console.log('Run server http://localhost:3001'));