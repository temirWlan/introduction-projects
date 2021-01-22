const { Router } = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = Router();
const regEmail = require('../emails/registration');
const resetEmail = require('../emails/reset');
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

router.get('/reset', (req, res) => {
	res.render('reset', {
		title: 'Password recorery',
		error: req.flash('error')
	});
});

router.post('/reset', (req, res) => {
	try {
		crypto.randomBytes(32, async (err, buffer) => {
			if (err) {
				req.flash('error', 'Something went wrong. Please try again');
				return res.redirect('/auth/reset');
			}

			const token = buffer.toString('hex');
			const candidate = await User.findOne({ email: req.body.email });

			if (candidate) {
				candidate.resetToken = token;
				candidate.resetTokenExp = Date.now() + (60 * 60 * 1000);
				await candidate.save();
				await transporter.sendMail(resetEmail(candidate.email, token), (err, data) => {
					if (err) {
						throw new Error(err);
					} else {
						console.log('Email sent');
					}
				});
				res.redirect('/auth/login');
			} else {
				req.flash('Email could not found');
				res.redirect('/auth/reset');
			}
		});
	} catch(e) {

	}
});

router.get('/password/:token', async (req, res) => {
	try {
		if (!req.params.token) {
			return res.redirect('/auth/login');
		}

		const user = await User.findOne({
			resetToken: req.params.token,
			resetTokenExp: {$gt: Date.now()}
		});

		if (!user) {
			res.redirect('/auth/login');
		} else {
			res.render('password', {
				title: 'Password',
				error: req.flash('error'),
				userId: user._id.toString(),
				token: req.params.token
			});
		}
	} catch(e) {
		console.log(e);
	}
});

router.post('/password', async (req, res) => {
	try {
		const { userId, token } = req.body;

		const user = await User.findOne({
			_id: userId,
			resetToken: token,
			resetTokenExp: {$gt: Date.now()} 
		});

		if (user) {
			user.password = await bcrypt.hash(req.body.password, 10);
			user.resetToken = undefined;
			user.resetTokenExp = undefined;
			await user.save();
			res.redirect('/auth/login');
		} else {
			res.redirect('/auth/login');
		}
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;