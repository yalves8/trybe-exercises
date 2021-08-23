const {sum, myRemove} = require("./sum.js")


describe('soma', () => {
    it("soma 4+1 = 5", () => {
        expect(sum(4,1)).toBe(5)
    });
    it("soma 0+0 = 0", () => {
        expect(sum(0,0)).toBe(0)
    });
    test('testa se lança erro', () => {
        expect(() => {sum(4,"5")}).toThrow();
    })
    it('testa se aparece mensagem de erro', () => {
        expect(() => {sum(4,"5")}).toThrowError(new Error('parameters must be numbers'));
    });
});

describe('função remover numero de array', () => {
    test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
    });

    test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4]);
    });

    test("Verifique se o array passado por parâmetro não sofreu alterações", () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
    });

    test("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
    });
});


