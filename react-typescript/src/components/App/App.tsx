import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import { AboutPage, TodosPage } from '../../pages';


const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/todos-page" component={TodosPage} />
				<Route exact path="/about-page" component={AboutPage} />
			</Switch>
		</Router>
	);
};

export default App;
