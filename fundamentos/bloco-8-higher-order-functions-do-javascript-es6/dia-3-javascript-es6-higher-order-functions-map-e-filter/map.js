// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const completo = (nome) => {
//     console.log(`${nome.firstName} ${nome.lastName}`);
// };

// let nomeCompleto;

// nomeCompleto = persons.map((full) => {
//     return { nome: full.firstName, sobrenome: full.lastName }
// });

// persons.forEach((elemento) => completo(elemento));

// const procura = (elemento) => {
//     if (elemento.firstName.startsWith('M')) {
//         console.log(elemento.firstName); 
//     }
// };

// persons.forEach((ele) => procura(ele));

// //negativo
// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// //produtos
// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const junta = (produtos, precos) =>
//     produtos.map((prod, index) => {
//         {[prod]: precos[index]}
//         console.log(`${prod}: ${precos[index]}`);
//     }
//     );

// junta(products, prices);

// ou


// const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
//     { [product]: listPrices[index] }
// ));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

