import React from 'react';
import FieldValidation from './FieldValidation';
export default function Step1(props) {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<React.Fragment>
			<h2 className="sub-header">Sign in</h2>

			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					className={`form-control ${props.userNameError ? 'validation-error-text-box' : ''}`}
					id="username"
					name="username"
					type="text"
					placeholder="name@example.com"
					value={props.username}
					onChange={props.handleChange}
				/>
				{props.userNameError && <FieldValidation errorMessage="The username is not recognized." />}
			</div>
		</React.Fragment>
	);
}
