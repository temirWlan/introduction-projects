const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

class Course {
	constructor(title, price, img) {
		this.title = title;
		this.price = price;
		this.img = img;
		this.id = uuid();
	}

	async save() {
		const { courses } = await Course.getAll();
		courses.push({
			title: this.title,
			price: this.price,
			img: this.img,
			id: this.id
		});

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, '..', 'data', 'db.json'), 
				JSON.stringify(courses),
				err => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				}
			);
		});
	}

	static getAll() {
		return new Promise((resolve, reject) => {
			fs.readFile(
				path.join(__dirname, '..', 'data', 'db.json'), 
				'utf-8', 
				(err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.parse(data));
					}
				}
			);
		})
	}
}

module.exports = Course;