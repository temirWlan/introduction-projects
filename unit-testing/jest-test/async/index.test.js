const axios = require('axios');
const Ajax = require('./');

jest.mock('axios');

describe('Ajax', () => {
	describe('echo', () => {

		test('should return async value', async () => {
			const result = await Ajax.echo('my data');

			expect(result).toBe('my data');
		});

		test('should return value with promise', () => {
			return Ajax.echo('my data').then(res => {
				expect(res).toBe('my data');
			})
		});

		test('should catch value with promise', () => {
			return Ajax.echo().catch(err => {
				expect(err).toBeInstanceOf(Error);
			});
		});

		test('should catch value with promise', async () => {
			try {
				await Ajax.echo();
			} catch(e) {
				expect(e.message).toBe('error');
			}
		});

	});

	describe('get', () => {

		let res, todos;

		beforeEach(() => {
			todos = [
				{
					id: 1,
					title: 'Todo 1',
					completed: false
				}
			];

			res = {
				data: {
					todos
				}
			};
		});

		test('should return data', () => {
			axios.get.mockReturnValue(res);

			return Ajax.get().then(data => {
				expect(data.todos).toEqual(todos);
			});
		})

	});
});