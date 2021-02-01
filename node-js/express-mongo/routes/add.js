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
	const { title, price, img } = req.body;
	const course = new Course({
		title, 
		price,
		img,
		userId: req.user
	});

	try {
		course.save();
		res.redirect('/courses');
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;