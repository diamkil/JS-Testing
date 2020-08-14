const add = require('../../src/math/add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 950 + 1002 to equal 1952', () => {
  expect(add(950, 1002)).toBe(1952);
});
