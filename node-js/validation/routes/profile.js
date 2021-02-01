const { Router } = require('express');
const router = Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
	res.render('profile', {
		title: 'Profile',
		isProfile: true,
		user: req.user.toObject()
	});
});

module.exports = router;
