import React from 'react';
import RegisterMessage from './components/RegisterMessage';
import Login from './components/Login';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
function App(props) {
	const query = new URLSearchParams(props.location.search);
	const isRegistered = query.get('success');

	const user = query.get('user');
	return (
		<React.Fragment>
			{isRegistered && <PopUp />}

			<div className="wrapper">
				<Login user={isRegistered ? user : ''} />
			</div>
			<RegisterMessage />
			<Footer />
		</React.Fragment>
	);
}

export default App;
