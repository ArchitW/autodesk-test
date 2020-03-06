import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Register from '../components/Register';
import LearnMore from '../components/LearnMore';
const AppRouter = () => (
	<Router>
		<Switch>
			<Route path="/" component={App} exact={true} />
			<Route path="/register" component={Register} />
			<Route path="/learn-more" component={LearnMore} />
		</Switch>
	</Router>
);

export default AppRouter;
