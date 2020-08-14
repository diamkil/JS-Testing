const add = require('../../src/math/add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 9.50 + 10.02 to equal 19.52', () => {
  expect(add(9.50, 10.02)).toBe(19.52);
});
