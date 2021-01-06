const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.listen(PORT, () => {
  console.log('Server running...');
});