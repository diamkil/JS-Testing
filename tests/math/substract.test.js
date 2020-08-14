const substract = require('../../src/math/substract');

test('substracts 2 - 1 to equal 1', () => {
	expect(substract(2, 1)).toBe(1);
});

test('substracts 1 - 2 to equal -1', () => {
	expect(substract(1, 2)).toBe(-1);
});

test('substracts 9.12 - 55.73 to equal -46.61', () => {
	expect(substract(9.12, 55.73)).toBe(-46.61);
});

test('substracts 99.2 - 57.709 to equal 41.49', () => {
	expect(substract(99.2, 57.709)).toBe(41.49);
});
