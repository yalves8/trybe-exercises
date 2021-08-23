const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const par = (pares) => pares % 2 === 0;
const soma = (acc, valor) => acc + valor;

const somaPar = (array) => array.filter(par).reduce(soma);
console.log(somaPar(numbers));

//ou 

const somaT = (acu, val) => (val % 2 === 0) ? acu + val : acu;
const total = numbers.reduce(somaT);
console.log(total);