const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    const array = [];
    for (let person in people) {
        greeting += people[person];
        array.push(greeting);
        greeting = 'Hello ';
    }
    return array;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(greetPeople(parameter),result);
