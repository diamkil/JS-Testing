const divide = require('../src/divide');

test('divides 10 / 5 to equal 2', () => {
  expect(divide(10, 5)).toBe(2);
});

test('divides 1787 / 735 to equal 2.43', () => {
  expect(divide(1787, 735)).toBe(2.43);
});
