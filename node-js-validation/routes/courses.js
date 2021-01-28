const { Router } = require('express');
const { validationResult } = require('express-validator');
const Course = require('../models/course');
const router = Router();
const auth = require('../middlewares/auth');
const { courseValidators } = require('../utils/validators');

router.get('/', async (req, res) => {
	try {
		const courses = await Course.find()
			.populate('userId', 'email name')
			.select('price title img');
		
		res.render('courses', {
			title: 'Courses',
			isCourses: true,
			userId: req.user ? req.user._id.toString() : null,
			courses
		});
	} catch(e) {
		console.log(e);
	}
});

router.get('/:id/edit', auth, async (req, res) => {
	if (!req.query.allow) {
		return res.redirect('/');
	}

	try {
		const course = await Course.findById(req.params.id);

		if (course.userId.toString() !== req.user._id.toString()) {
			return res.redirect('/courses');
		}

		res.render('course-edit', {
			title: `Edit course ${course.title}`,
			course
		})
	} catch(e) {
		console.log(e);
	}
});

router.post('/edit', auth, courseValidators, async (req, res) => {
	const errors = validationResult(req);
	const { id } = req.body;
	delete req.body.id;

	if (!errors.isEmpty()) {
		res.status(422).redirect(`courses/${id}/edit?allow=true`);
	}

	try {
		const course = await Course.findById(id);

		if (course.userId.toString() !== req.user._id.toString()) {
			return res.redirect('/courses');
		}

		Object.assign(course, req.body);
		await course.save();
		res.redirect('/courses');
	} catch(e) {
		console.log(e);
	}
});

router.get('/:id', async (req, res) => {
	const course = await Course.findById(req.params.id);

	res.render('course', {
		layout: 'empty',
		title: `Course ${course.title}`,
		course
	});
});

router.post('/remove', auth, async (req, res) => {
	try {
		await Course.deleteOne({ 
			_id: req.body.id,
			userId: req.user._id
		});

		res.redirect('/courses');
	} catch(e) {
		console.log(e);
	}
})

module.exports = router;