const path = require('path');
const fs = require('fs');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'cart.json'
);

class Cart {
	static async add(course) {
		const { courses, price } = await Cart.fetch();

		const idx = courses.findIndex(c => c.id === course.id);
		const candidate = courses[idx];

		if (candidate) {
			course.count++;
		} else {
			course.count = 1;
			courses.push(course);
		}

		price += +course.price;

		return new Promise((resolve, reject) => {
			fs.writeFile(p, JSON.stringify({ courses, price }), err => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	static async fetch() {
		return new Promise((resolve, reject) => {
			fs.readFile(p, 'utf-8', (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.parse(data));
					}
				}
			);
		});
	} 
}

module.exports = Cart;