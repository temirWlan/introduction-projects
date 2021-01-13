const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Handlebars = require('handlebars');
const exphbs  = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
const cartRoutes = require('./routes/cart');
const User = require('./models/user');

const app = express();

const PORT = process.env.PORT || 3000;
// const hbs = exphbs.create({
// 	defaultLayout: 'main',
// 	extname: 'hbs'
// });
// hbs.engine

app.use(async (req, res, next) => {
	try {
		const user = await User.findById('5ffe5a2a98a9e80498104426');
		req.user = user;
		next();
	} catch(e) {
		console.log(e);
	}
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);
app.use('/cart', cartRoutes);


app.engine('hbs', exphbs({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	defaultLayout: 'main',
	extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

async function start() {
	try {
		const url = 'mongodb+srv://temirlan:6QzGLVlMhMD3rao0@cluster0.cmepq.mongodb.net/shop';
		await mongoose.connect(url, { 
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		const candidate = await User.findOne();

		if (!candidate) {
			const user = new User({
				email: 'temirlan.balguzhin@bk.ru',
				name: 'Temirlan',
				cart: {
					items: []
				}
			});

			await user.save();
		}

		app.listen(PORT, () => {
		  console.log('Server running...');
		});
	} catch(err) {
		console.log(err);
	}
}   

start();