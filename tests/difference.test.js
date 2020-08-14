const difference = require('../src/difference');

test('substracts 2 - 1 to equal 1', () => {
  expect(difference(2, 1)).toBe(1);
});
