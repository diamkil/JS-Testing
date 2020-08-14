const multiply = require('../../src/math/multiply');

test('multiplies 10 * 50 to equal 500', () => {
	expect(multiply(10, 50)).toBe(500);
});

test('multiplies -9 * 4 to equal -36', () => {
	expect(multiply(-9, 4)).toBe(-36);
});

test('multiplies 7.23 * 9.30 to equal 67.24', () => {
	expect(multiply(7.23, 9.30)).toBe(67.24);
});

test('multiplies -8.52 * 29.494 to equal -251.29', () => {
	expect(multiply(-8.52, 29.494)).toBe(-251.29);
});
