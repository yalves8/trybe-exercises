const express = require('express');
const bodyParser = require("body-parser");
const { Book } = require('./models');

// const userController = require('./src/controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/book', async (_req, res) => {
    try {
        const books = await Book.findAll();

        return res.status(200).json(books);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
    };
});

app.listen(3000, () => console.log(`Ouvindo na porta ${PORT}!`));

// module.exports = app;