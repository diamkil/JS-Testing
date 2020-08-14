const add = require('../../src/math/add');

test('adds 1 + 2 to equal 3', () => {
	expect(add(1, 2)).toBe(3);
});

test('adds 254 + -442 to equal -188', () => {
	expect(add(254, -442)).toBe(-188);
});

test('adds 9.50 + 10.02 to equal 19.52', () => {
	expect(add(9.50, 10.02)).toBe(19.52);
});

test('adds -967.921 + 47.78 to equal -920.14', () => {
	expect(add(-967.921, 47.78)).toBe(-920.14);
});
