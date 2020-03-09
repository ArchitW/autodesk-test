import React from 'react';
import './Step2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Step2(props) {
	if (props.currentStep !== 2) {
		return null;
	}
	console.log(props.previousButton);

	return (
		<React.Fragment>
			<div className="form-group slide-right">
				<div className="back-button" onClick={props.goBack}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</div>
				<h2 className="sub-header header-style">Welcome</h2>
				<div className="user-style">{props.username.split('@')[0]}</div>
				<label htmlFor="password">Password</label>
				<input
					className="form-control"
					id="password"
					name="password"
					type="password"
					placeholder="Enter password"
					value={props.password}
					onChange={props.handleChange}
				/>
			</div>
			<button className="btn btn-primary btn-block">Sign in</button>
		</React.Fragment>
	);
}
