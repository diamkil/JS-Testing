const multiply = require('../../src/math/multiply');

test('multiplying two numbers to give a positive number (w/o decimals)', () => {
	expect(multiply(10, 50)).toBe(500);
});

test('multiplying two numbers to give a negative number (w/o decimals)', () => {
	expect(multiply(-9, 4)).toBe(-36);
});

test('multiplying two numbers to give a positive number (w/ decimals)', () => {
	expect(multiply(7.23, 9.30)).toBe(67.24);
});

test('multiplying two numbers to give a negative number (w/ decimals)', () => {
	expect(multiply(-8.52, 29.494)).toBe(-251.29);
});
