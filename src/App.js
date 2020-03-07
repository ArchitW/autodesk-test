import React from 'react';
import RegisterMessage from './components/RegisterMessage';
import FieldValidation from './components/FieldValidation';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<div className="wrapper">
				<h2 className="sub-header">Sign in</h2>
				<div className="form-group">
					<label>Username</label>
					<input className="" type="text" placeholder="name@example.com" />
					<FieldValidation errorMessage="" />
				</div>
				<div className="form-group">
					<button className="btn btn-primary btn-block">Next</button>
				</div>
			</div>
			<RegisterMessage />
		</React.Fragment>
	);
}

export default App;
