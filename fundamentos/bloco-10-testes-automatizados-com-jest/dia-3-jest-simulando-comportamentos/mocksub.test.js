const math = require('./math');
jest.mock("./math");

test("Subtração", () => {
  
  math.subtrair.mockImplementation((a,b) => a-b);
  math.subtrair(5,1);
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair(5,1)).toBe(4);
  
});

