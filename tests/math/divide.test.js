const divide = require('../../src/math/divide');

test('dividing two numbers to give a positive number (w/o decimals)', () => {
	expect(divide(10, 5)).toBe(2);
});

test('dividing two numbers to give a positive number (w/ decimals)', () => {
	expect(divide(1787, 735)).toBe(2.43);
});
