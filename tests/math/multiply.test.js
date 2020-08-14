const multiply = require('../src/math/multiply');

test('multiplies 10 * 50 to equal 500', () => {
  expect(multiply(10, 50)).toBe(500);
});

test('multiplies 723 * 930 to equal 672 390', () => {
  expect(multiply(723, 930)).toBe(672390);
});
