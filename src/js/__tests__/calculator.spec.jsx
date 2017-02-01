import {add, multiply} from 'js/calculator';
import Calculator from 'js/calculator2';
import addTs from 'js/calculator3';

describe('A calculator', () => {
  it('should add two numbers', () => {
    expect(addTs(2, 3)).toBe(5);
    expect(add(2, 3)).toBe(5);
    expect(Calculator.add(2, 3)).toBe(5);
  });
  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(Calculator.multiply(2, 3)).toBe(6);
  });
});