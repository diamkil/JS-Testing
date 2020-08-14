const difference = require('../src/difference');

test('substracts 2 - 1 to equal 1', () => {
  expect(difference(2, 1)).toBe(1);
});

test('substracts 1 - 2 to equal -1', () => {
  expect(difference(1, 2)).toBe(-1);
});
