const Lodash = require('./');

describe('Lodash', () => {
	let _;
	let arr, numArr, strArr;

	beforeEach(() => {
		_ = new Lodash();
		arr = ['string', 0, 1, NaN, '', true, false, null, undefined];
		numArr = [2.1, 2.3, 3.2, 4.1, 0.7];
		strArr = ['one', 'two', 'three'];
	});

	describe('compact', () => {

		test('should be defined', () => {
			expect(_.compact).toBeDefined();
			expect(_.compact).not.toBeUndefined();
		});

		test('should return truthy values from array', () => {
			const res = ['string', 1, true];
			expect(_.compact(arr)).toEqual(res);
		});

		test('should not contain falsy values in array', () => {
			expect(_.compact(arr)).not.toContain(false);
			expect(_.compact(arr)).not.toContain(null);
			expect(_.compact(arr)).not.toContain(undefined);
		});
	});

	describe('groupBy', () => {

		test('should be defined', () => {
			expect(_.groupBy).toBeDefined();
			expect(_.groupBy).not.toBeUndefined();
		});

		test('should group array by Math.floor', () => {
			const res = {
				2: [2.1, 2.3],
				3: [3.2],
				4: [4.1],
				0: [0.7]
			};

			expect(_.groupBy(numArr, Math.floor)).toEqual(res);
		});

		test('should group array by length', () => {
			const res = {
				5: ['three'],
				3: ['one', 'two']
			};

			expect(_.groupBy(strArr, 'length')).toEqual(res);
		});

		test('should return object', () => {
			expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
			expect(_.groupBy([], Math.trunc)).toBeInstanceOf(Object);
		});
	});
});