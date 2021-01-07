const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const homeRouters = require('./routes/home');
const coursesRouters = require('./routes/courses');
const addRouters = require('./routes/add');

const app = express();

const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', homeRouters);
app.use('/courses', coursesRouters);
app.use('/add', addRouters);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.listen(PORT, () => {
  console.log('Server running...');
});