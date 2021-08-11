const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 === 70

// function division(x, y) {
//     return x / y;
//   }

//   const expected = division(9, 3);

//   assert.strictEqual(expected, 4, 'Nove dividido por três é igual a três');


// function division(x, y) {
//     if (y === 0) throw new Error('parameter y must not be 0'); 
//     return x / y;
// }
// assert.throws(() => division(10, 0));
//assert.strictEqual(division(10, 0), 5); // OK

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // implemente seus testes aqui

// console.log(sum(4,'5'));


// function myRemove(arr, item) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index += 1) {
//         if (item !== arr[index]) {
//             newArr.push(arr[index]);
//         }
//     }
//     return newArr;
// }

// console.log(myRemove([1, 2, 3, 4], 3));
// console.log(myRemove([1, 2, 3, 4], 5));


function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
        if (arr[index] === item) {
            arr.splice(index, 1);
            index -= 1;
            len -= 1;
        }
    }

    return arr;
}

assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,3,4] );
// console.log(myRemove([1, 2, 3, 4], 5));
