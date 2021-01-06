const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.use(express.static('public'))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home',
		isHome: true
	});
});

app.get('/courses', (req, res) => {
	res.render('courses', {
		title: 'Courses',
		isCourses: true
	});
});

app.get('/adding-course', (req, res) => {
	res.render('adding-course', {
		title: 'Adding course',
		isAddingCourse: true
	});
});


app.listen(PORT, () => {
  console.log('Server running...');
});