const { sum, nativeNull } = require('./');

describe('Sum', () => {
	test('Should return sum of two values', () => {
	  expect(sum(3, 7)).toBe(10);
	  expect(sum(1, 99)).toEqual(100);
	});

	test('Should return value correctly comparing to other', () => {
	  expect(sum(1, 4)).toBeGreaterThan(4);
	  expect(sum(1, 4)).toBeGreaterThanOrEqual(5);
	  expect(sum(1, 4)).toBeLessThan(7);
	  expect(sum(1, 4)).toBeLessThanOrEqual(5);
	});

	test('Should sum 2 float correct values', () => {
	  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
	});
});

describe('Native null', () => {
	test('Should return false value null', () => {
		expect(nativeNull()).toBe(null);
		expect(nativeNull()).toBeNull();
		expect(nativeNull()).toBeFalsy();
		expect(nativeNull()).toBeDefined();
		expect(nativeNull()).not.toBeTruthy();
		expect(nativeNull()).not.toBeUndefined();
	});
});
