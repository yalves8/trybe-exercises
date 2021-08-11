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

function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((book) => book.author.birthYear === 1947).author.name;
}



assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
    let nameBook;
    // escreva aqui o seu código

    // Variável nameBook que receberá o valor do menor nome;
    books.forEach((livro) => {
        if (nameBook === undefined) {
            nameBook = livro.name;
        } else if (nameBook.length > livro.name.length) {
            nameBook = livro.name;
        }
    });
    return nameBook;
}

function testesmallerName() {
    let nameBook;
    // escreva aqui o seu código

    // Variável nameBook que receberá o valor do menor nome;
    books.forEach((livro) => {
        if (!nameBook || nameBook.length > livro.name.length) {
            nameBook = livro.name;
        }
    });
    return nameBook;
}


assert.strictEqual(smallerName(), 'Duna');

const expectedResult1 = {
    author: {
        birthYear: 1948,
        name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
};

function getNamedBook() {
    // escreva seu código aqui
    return books.find((nome) => nome.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult1);

const expectedResult = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: { name: 'Stephen King', birthYear: 1947 },
        releaseYear: 1986,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
    },
];

function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);


const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
    return books.every((aut) => 
    aut.author.birthYear >= 1900 && aut.author.birthYear <= 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult2);

const expectedResult3 = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => 
  books.some((algum) => (algum.author.birthYear === book.author.birthYear) &&
   (algum.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult3);

