const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 950 + 1002 to equal 1952', () => {
  expect(sum(950, 1002)).toBe(1952);
});
