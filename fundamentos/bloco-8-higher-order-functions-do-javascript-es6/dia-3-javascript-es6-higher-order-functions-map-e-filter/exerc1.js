const assert = require('assert');

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
    // escreva seu código aqui
    return books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);

const expectedResult1 = [
    {
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },
];

function nameAndAge() {
    // escreva seu código aqui
    return books.sort((a, b) => (a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear)).map((elemento) => {
        return { age: elemento.releaseYear - elemento.author.birthYear, author: elemento.author.name };
    });
}

assert.deepStrictEqual(nameAndAge(), expectedResult1);

const expectedResult2 = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
    }
];

function fantasyOrScienceFiction() {
    // escreva seu código aqui
    const genero = books.filter((book) => (
        book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
    ));
    return genero.sort((a, b) => a.id - b.id);
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult2);

const expectedResult3 = [
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
    },
];

function oldBooksOrdered() {
    // escreva seu código aqui
    return books.sort((a, b) => (2021 - b.releaseYear) - (2021 - a.releaseYear)).filter((elemento) =>
        (2021 - elemento.releaseYear) >= 60);
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult3);

const expectedResult4 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    const genero = fantasyOrScienceFiction();
    return genero.map((nomes) => nomes.author.name).sort();
}


assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult4);