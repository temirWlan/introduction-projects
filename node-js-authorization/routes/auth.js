const { Router } = require('express');
const User = require('../models/user');
const router = Router();


router.get('/login', async (req, res) => {
	res.render('login', {
		title: 'Authorization',
		isLogin: true
	});
});

router.post('/login', async (req, res) => {
	const user = await User.findById('5ffe5a2a98a9e80498104426');

	req.session.user = user;
	req.session.isAuthenticated = true;
	req.session.save(err => {
		if (err) {
			throw new Error(err);
		}
		
		res.redirect('/');
	});
});

router.get('/logout', async (req, res) => {
	req.session.destroy(() => {
		res.redirect('/auth/login#login');
	});
});

module.exports = router;