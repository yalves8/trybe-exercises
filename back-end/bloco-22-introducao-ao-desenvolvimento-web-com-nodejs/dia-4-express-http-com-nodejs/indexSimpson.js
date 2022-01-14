const fs = require('fs').promises;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const updateJson = (arq) => {
    return fs.writeFile(arq, JSON.stringify(arq));    
};

const readJson = () => {
    /* try {
        const read = fs.readFileSync(arq, 'utf8');
        return JSON.parse(read);
    } catch(err) {
        return console.log('erro');;
    } */

    return fs.readFile('./simpson.json', 'utf8')
        .then((content) => JSON.parse(content));
}

module.exports = { updateJson, readJson};

