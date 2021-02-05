const { map } = require('./');

describe('map', () => {
	let array;
	let fn;	

	beforeEach(() => {
		array = [1, 2, 3, 5, 8, 13];
		fn = jest.fn(x => x ** 2);
		map(array, fn);
	});

	test('should call callback', () => {
		expect(fn).toBeCalled();
	});

	test(`should call callback array length times`, () => {
		expect(fn).toBeCalledTimes(6);
		expect(fn.mock.calls.length).toBe(6);
	});

	test('should return square of each item', () => {
		expect(fn.mock.results[0].value).toBe(1);
		expect(fn.mock.results[1].value).toBe(4);
		expect(fn.mock.results[2].value).toBe(9);
	});

	test('should fn work', () => {
		fn
			.mockReturnValueOnce(100)
			.mockReturnValueOnce(200)
			.mockReturnValue('19')

		expect(fn()).toBe(100);
		expect(fn()).toBe(200);
		expect(fn()).toBe('19');
		expect(fn()).toBe('19');
	});

});