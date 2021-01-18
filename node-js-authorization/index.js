const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const csrf = require('csurf')
const Handlebars = require('handlebars');
const exphbs  = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
const cartRoutes = require('./routes/cart');
const ordersRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const User = require('./models/user');
const varMiddleware = require('./middlewares/variables');
const userMiddleware = require('./middlewares/user');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://temirlan:6QzGLVlMhMD3rao0@cluster0.cmepq.mongodb.net/shop';

const store = new MongoStore({
	collection: 'sessions',
	uri: MONGODB_URI
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
	secret: 'secret text',
	resave: false,
	saveUninitialized: false,
	store
}));
app.use(csrf());
app.use(varMiddleware);
app.use(userMiddleware);
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', ordersRoutes);
app.use('/auth', authRoutes);


app.engine('hbs', exphbs({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	defaultLayout: 'main',
	extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

async function start() {
	try {
		await mongoose.connect(MONGODB_URI, { 
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		app.listen(PORT, () => {
		  console.log('Server running...');
		});
	} catch(err) {
		console.log(err);
	}
}   

start();