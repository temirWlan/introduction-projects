const { Router } = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
	res.render('add', {
		title: 'Adding course',
		isAdd: true
	});
});

router.post('/', (req, res) => {
	const { body: { title, price, img } } = req;
	const course = new Course(title, price, img);
	course.save();

	res.redirect('/courses');
});

module.exports = router;