const encode = require("./encode.js");

describe('testando numeros convertidos', () => {
    test('a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
        expect(encode('aeiou')).toBe('12345');
    });
});