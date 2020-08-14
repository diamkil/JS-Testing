const round = require('../../src/math/round');

test('rounds a number to 2 decimals to give a positive number', () => {
	expect(round(34.08374, 2)).toBe(34.08);
});

test('rounds a number to 3 decimals to give a negative number', () => {
	expect(round(-45.08374, 3)).toBe(-45.084);
});

test('rounds a number to 3 decimals to give a positive number w/o decimals', () => {
	expect(round(5.000125, 3)).toBe(5);
});

test('rounds a number while not specifying decimals to give a positive number', () => {
	expect(round(5.008125)).toBe(5.01);
});
