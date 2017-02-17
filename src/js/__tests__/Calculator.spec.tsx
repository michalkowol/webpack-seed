import Calculator from 'js/Calculator';

describe('A calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  });
  it('should multiply two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});
