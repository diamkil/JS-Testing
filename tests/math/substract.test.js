const substract = require('../../src/math/substract');

test('substracts 2 - 1 to equal 1', () => {
  expect(substract(2, 1)).toBe(1);
});

test('substracts 1 - 2 to equal -1', () => {
  expect(substract(1, 2)).toBe(-1);
});
