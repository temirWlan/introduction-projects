const { Router } = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = Router();
const regEmail = require('../emails/registration');
require('dotenv').config();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	}
});


router.get('/login', async (req, res) => {
	res.render('login', {
		title: 'Authorization',
		isLogin: true,
		loginError: req.flash('loginError'),
		registerError: req.flash('registerError')
	});
});

router.get('/logout', async (req, res) => {
	req.session.destroy(() => {
		res.redirect('/auth/login#login');
	});
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const candidate = await User.findOne({ email });

		if (candidate) {
			const isSame = await bcrypt.compare(password, candidate.password);

			if (isSame) {
				req.session.user = candidate;
				req.session.isAuthenticated = true;
				req.session.save(err => {
					if (err) {
						throw new Error(err);
					}
		
					res.redirect('/');
				});
			} else {
				req.flash('loginError', 'User with this address does not exist');
				res.redirect('/auth/login');	
			}
		} else {
			req.flash('loginError', 'User with this address does not exist');
			res.redirect('/auth/login');
		}
	} catch(e) {
		console.log(e);
	}
});

router.post('/register', async (req, res) => {
	try {
		const { name, email, password, confirm } = req.body;
		const candidate = await User.findOne({ email });

		if (candidate) {
			req.flash('registerError', 'User with such email already exists');
			res.redirect('/auth/login#register');
		} else {
			const hashPassword = await bcrypt.hash(password, 10);
			const user = new User({
				name, 
				email, 
				password: hashPassword,
				cart: { 
					items: []
				}
			});
			await user.save();
			res.redirect('/auth/login#login');

			await transporter.sendMail(regEmail(email), (err, data) => {
				if (err) {
					throw new Error(err);
				} else {
					console.log('Email sent');
				}
			});
		}
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;