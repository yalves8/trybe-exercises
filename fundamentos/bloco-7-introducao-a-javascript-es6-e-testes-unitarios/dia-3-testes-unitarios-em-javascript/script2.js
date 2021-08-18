// escreva a função addOne aqui
const assert = require('assert');

function addOne(array){
    const novo = [];
    for(let i = 0; i < array.length; i +=1){
        novo.push(array[i]+1);
    }
    return novo;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);