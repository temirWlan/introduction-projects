const { Router } = require('express');
const Course = require('../models/course');
const router = Router();

function mapCartItems(cart) {
	return cart.items.map(item => ({
		...item.courseId._doc, 
		count: item.count
	}));
}

function calculatePrice(courses) {
	return courses.reduce((total, course) => {
		return total += course.count * course.price;
	}, 0);
}

router.get('', async(req, res) => {
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

router.post('/add', async(req, res) => {
	const course = await Course.findById(req.body.id);
	
	await req.user.addToCart(course);
	res.redirect('/cart');
});

router.delete('/remove/:id', async(req, res) => {
	await req.user.removeFromCart(req.params.id);

	const user = req.user
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