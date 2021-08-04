const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ola, seila] = saudacoes;
console.log(ola);


//////////////////////

const array = ['gato', 'água', 'arroz'];
const [comida, animal, bebida] = array;

console.log(comida, animal, bebida); // arroz gato água

////////////////

const numerosPares = [1, 3, 5, 6, 8, 10, 12].filter((elemento) => elemento % 2 === 0);

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
