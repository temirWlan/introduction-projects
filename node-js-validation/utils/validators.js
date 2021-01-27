const { body } = require('express-validator');

exports.registerValidators = [
	body('name').isLength({ min: 3 }).withMessage('Min length of name shoud be 3'),
	body('email').isEmail().withMessage('Fill the correct email'),
	body('password', 'Min length of password shoud be 8').isLength({ min: 8, max: 70 }).isAlphanumeric(),
	body('confirm').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('Passwords shoud be same');
		}

		return true;
	})
];