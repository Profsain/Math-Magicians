import calculate from '../logic/calculate';

describe('Calculate operations test', () => {
  test('Clear calculate result to 0', () => {
    const result = calculate({}, 'AC');
    expect(result.total).toBe(0);
  });

  test('Calculate 4 + 4 should equal 8', () => {
    let result = calculate({}, '4');
    result = calculate(result, '+');
    result = calculate(result, '4');
    result = calculate(result, '=');
    expect(result.total).toBe('8');
  });

  test('Calculate 20 - 5 should equal 15', () => {
    let result = calculate({}, '20');
    result = calculate(result, '-');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('15');
  });
  test('Calculate 5 x 5 should equal 25', () => {
    let result = calculate({}, '5');
    result = calculate(result, 'x');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('25');
  });

  test('Calculate 20 ÷ 4 should equal 5', () => {
    let result = calculate({}, '20');
    result = calculate(result, '÷');
    result = calculate(result, '4');
    result = calculate(result, '=');
    expect(result.total).toBe('5');
  });
});
