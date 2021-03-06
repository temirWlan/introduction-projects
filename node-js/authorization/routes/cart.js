const { Router } = require('express');
const Course = require('../models/course');
const router = Router();
const auth = require('../middlewares/auth');

function mapCartItems(cart) {
	return cart.items.map(item => ({
		...item.courseId._doc, 
		count: item.count,
		id: item.courseId.id
	}));
}

function calculatePrice(courses) {
	return courses.reduce((total, course) => {
		return total += course.count * course.price;
	}, 0);
}

router.get('', auth, async(req, res) => {
	const user = await req.user 
		.populate('cart.items.courseId')
		.execPopulate();
	const courses = mapCartItems(user.cart);

	res.render('cart', {
		title: 'Cart',
		isCart: true,
		courses,
		price: calculatePrice(courses)
	});
});

router.post('/add', auth, async(req, res) => {
	const course = await Course.findById(req.body.id);
	
	await req.user.addToCart(course);
	res.redirect('/cart');
});

router.delete('/remove/:id', auth, async(req, res) => {
	await req.user.removeFromCart(req.params.id);

	const user = await req.user
		.populate('cart.items.courseId')
		.execPopulate();
	const courses = mapCartItems(user.cart);
	const cart = {
		courses,
		price: calculatePrice(courses)
	};

	res.status(200).json(cart);
});

module.exports = router;