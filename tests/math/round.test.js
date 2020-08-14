const round = require('../../src/math/round');

test('rounds 34.08374 with 2 decimal placed to 34.08', () => {
	expect(round(34.08374, 2)).toBe(34.08);
});

test('rounds -45.08374 with 3 decimal placed to -45.084', () => {
	expect(round(-45.08374, 3)).toBe(-45.084);
});

test('rounds 5.000125 with 3 decimal placed to 5', () => {
	expect(round(5.000125, 3)).toBe(5);
});

test('rounds 5.000125 without specifying decimal placed to 5', () => {
	expect(round(5.000125)).toBe(5);
});
