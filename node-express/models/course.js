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
		const courses = await Course.getAll();
		courses.push({
			title: this.title,
			price: this.price,
			img: this.img,
			id: this.id
		});

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, '..', 'data', 'courses.json'), 
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

	static async update(course) {
		const courses = await Course.getAll();
		const idx = courses.findIndex(c => c.id === course.id);
		const updatedCourses = [
			...courses.slice(0, idx),
			course,
			...courses.slice(idx + 1)
		];

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, '..', 'data', 'courses.json'), 
				JSON.stringify(updatedCourses),
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
				path.join(__dirname, '..', 'data', 'courses.json'), 
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

	static async getById(id) {
		const courses = await Course.getAll();
		return courses.find(course => course.id === id);
	}
}

module.exports = Course;