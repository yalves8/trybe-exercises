const aleatorio = require('./randomNumber.js');
jest.mock("./randomNumber.js");

describe("testing random numbers", () => {

    const mockPre = jest.spyOn(aleatorio, "random");
    it('número deve ser 10', () => {
        mockPre.mockReturnValue(10);
        expect(mockPre()).toBe(10);
    });

    it('substitui a função random para uma função de dividir', () => {
        mockPre.mockImplementation((a,b) => a/b);
        expect(mockPre(10,2)).toBe(5);
    });

    it('substitui para multiplicação', () => {
        mockPre.mockImplementation((a,b,c) => a*b*c);
        expect(mockPre(1,2,3)).toBe(6);
        mockPre.mockReset();
        expect(mockPre()).toBe(undefined);
        mockPre.mockImplementation((a) => a*a);
        expect(mockPre(2)).toBe(4);
    });

});