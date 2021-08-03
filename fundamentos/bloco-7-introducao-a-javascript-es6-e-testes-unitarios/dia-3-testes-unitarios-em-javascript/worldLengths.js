const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(array){
    let count = [];
    for(let index = 0; index < array.length;index +=1){
        count.push(array[index].length);
    }

    return count;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);