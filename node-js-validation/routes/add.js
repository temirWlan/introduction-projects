const { Router } = require('express');
const { validationResult } = require('express-validator');
const router = Router();
const Course = require('../models/course');
const auth = require('../middlewares/auth');
const { courseValidators } = require('../utils/validators');

router.get('/', auth, (req, res) => {
	res.render('add', {
		title: 'Adding course',
		isAdd: true
	});
});

router.post('/', auth, courseValidators, (req, res) => {
	const { title, price, img } = req.body;
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).render('add', {
			title: 'Adding course',
			isAdd: true,
			error: errors.array()[0].msg,
			data: {
				title, 
				price,
				img
			}
		});
	}

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