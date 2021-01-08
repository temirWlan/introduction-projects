const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
const cartRoutes = require('./routes/cart');

const app = express();

const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);
app.use('/cart', cartRoutes);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.listen(PORT, () => {
  console.log('Server running...');
});