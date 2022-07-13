import operate from "../logic/operate";

describe('Math operation testing', () => {
  test('Add 4 + 4 should return 8', () => {
    const result = operate(4, 4, '+');
    expect(result).toBe('8');
  });

  test('Subtract 4 from 10 should return 6', () => {
    const result = operate(10, 4, '-');
    expect(result).toBe('6');
  });

  test('Multiply 3 x 3 should return 9', () => {
    const result = operate(3, 3, 'x');
    expect(result).toBe('9');
  });

  test('Divid 9 / 3 should return 3', () => {
    const result = operate(9, 3, '÷');
    expect(result).toBe('3');
  });
});