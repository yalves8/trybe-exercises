// function testingScope(escopo) {

//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }


const testingScope = (escopo) => ((escopo === true) ? 'Não devo ser utilizada dora do meu escopo(if) ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)');
console.log(testingScope(true));


const num = [13, 3, 4, 10, 7, 2];

const oddsAndEvens = (array) => array.sort((a,b) => a-b);

console.log(oddsAndEvens(num))