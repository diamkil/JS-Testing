const substract = require('../../src/math/substract');

test('substracting two numbers to give a positive number (w/o decimals)', () => {
	expect(substract(2, 1)).toBe(1);
});

test('substracting two numbers to give a negative number (w/o decimals)', () => {
	expect(substract(1, 2)).toBe(-1);
});

test('substracting two numbers to give a negative number (w/ decimals)', () => {
	expect(substract(9.12, 55.73)).toBe(-46.61);
});

test('substracting two numbers to give a positive number (w/ decimals)', () => {
	expect(substract(99.2, 57.709)).toBe(41.49);
});
