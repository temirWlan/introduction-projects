const { Router } = require('express');
const router = Router();
const Course = require('../models/course');
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
	res.render('add', {
		title: 'Adding course',
		isAdd: true
	});
});

router.post('/', auth, (req, res) => {
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