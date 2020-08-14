const add = require('../../src/math/add');

test('adding two numbers to give a positive number (w/o decimals)', () => {
	expect(add(1, 2)).toBe(3);
});

test('adding two numbers to give a negative number (w/o decimals)', () => {
	expect(add(254, -442)).toBe(-188);
});

test('adding two numbers to give a positive number (w/ decimals)', () => {
	expect(add(9.50, 10.02)).toBe(19.52);
});

test('adding two numbers to give a negative number (w/ decimals)', () => {
	expect(add(-967.921, 47.78)).toBe(-920.14);
});
