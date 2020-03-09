import React, { Component } from 'react';
import FieldValidation from './FieldValidation';
import SignInMessage from './SignInMessage';
import Footer from './Footer';
import './Register.css';
require('./Register.css');
export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstNameValue: '',
			lastNameValue: '',
			emailValue: '',
			reEmailValue: '',
			passwordValue: '',
			rePasswordValue: '',
			firstNameError: false,
			lastNameError: false,
			userNameError: false,
			reUserNameError: false,
			passwordError: false,
			rePasswordError: false
		};
		this.HandleFirstNameInput = this.HandleFirstNameInput.bind();
		this.HandleLastNameInput = this.HandleLastNameInput.bind();
		this.HandleEmailInput = this.HandleEmailInput.bind();
		this.HandleReEmailInput = this.HandleReEmailInput.bind();
		this.HandlePasswordInput = this.HandlePasswordInput.bind();
		this.HandleRePasswordInput = this.HandleRePasswordInput.bind();

		this.HandleFormSubmission = this.HandleFormSubmission.bind();
	}

	HandleFirstNameInput = (event) => this.setState({ firstNameValue: event.target.value });
	HandleLastNameInput = (event) => this.setState({ lastNameValue: event.target.value });
	HandleEmailInput = (event) => this.setState({ emailValue: event.target.value });
	HandleReEmailInput = (event) => this.setState({ reEmailValue: event.target.value });
	HandlePasswordInput = (event) => this.setState({ passwordValue: event.target.value });
	HandleRePasswordInput = (event) => this.setState({ rePasswordValue: event.target.value });

	HandleFormSubmission = (event) => {
		this.setState({
			firstNameError: false,
			lastNameError: false,
			userNameError: false,
			reUserNameError: false,
			passwordError: false,
			rePasswordError: false
		});
		console.log(this.state);
		event.preventDefault();
		if (this.state.firstNameValue === '') {
			this.setState((prevState) => ({
				firstNameError: !prevState.firstNameError
			}));
		}
		if (this.state.lastNameValue === '') {
			this.setState((prevState) => ({
				lastNameError: !prevState.lastNameError
			}));
		}
		if (!this.validateEmail(this.state.emailValue)) {
			this.setState((prevState) => ({
				userNameError: !prevState.userNameError
			}));
		}
		if (this.state.emailValue !== this.state.reEmailValue) {
			this.setState((prevState) => ({
				reUserNameError: !prevState.reUserNameError
			}));
		}
		if (this.state.passwordValue.length < 8) {
			this.setState((prevState) => ({
				passwordError: !prevState.passwordError
			}));
		}
		if (this.state.passwordValue !== this.state.rePasswordValue) {
			this.setState((prevState) => ({
				rePasswordError: !prevState.rePasswordError
			}));
		}
		//need refactoring with this logic
		if (
			this.state.firstNameError === false &&
			this.state.lastNameError === false &&
			this.state.userNameError === false &&
			this.state.reUserNameError === false &&
			this.state.passwordError === false &&
			this.state.rePasswordError === false &&
			this.state.firstNameValue !== '' &&
			this.state.lastNameValue !== '' &&
			this.state.emailValue !== '' &&
			this.state.reEmailValue !== '' &&
			this.state.passwordValue !== '' &&
			this.state.rePasswordValue !== ''
		) {
			this.props.history.push('/?success=true&user=' + this.state.emailValue);
		}
	};
	validateEmail = (email) => {
		// eslint-disable-next-line
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	render() {
		return (
			<React.Fragment>
				<div className="wrapper scale-up-center">
					<h2 className="sub-header">Create account</h2>
					<form onSubmit={this.HandleFormSubmission}>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="first-name">First name</label>
								<input
									type="text"
									className={`form-control ${this.state.firstNameError
										? 'validation-error-text-box'
										: ''}`}
									placeholder=""
									value={this.state.firstNameValue}
									onChange={this.HandleFirstNameInput}
								/>
								{this.state.firstNameError && (
									<FieldValidation errorMessage="Please enter your first name" msgfor="firstName" />
								)}
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Last name</label>
								<input
									type="text"
									className={`form-control ${this.state.lastNameError
										? 'validation-error-text-box'
										: ''}`}
									placeholder=""
									value={this.state.lastNameValue}
									onChange={this.HandleLastNameInput}
								/>
								{this.state.lastNameError && (
									<FieldValidation errorMessage="Please enter your last name" msgfor="lastName" />
								)}
							</div>
						</div>
						<div className="form-group">
							<label>Username</label>
							<input
								className={`form-control ${this.state.userNameError
									? 'validation-error-text-box'
									: ''}`}
								type="text"
								placeholder=""
								value={this.state.emailValue}
								onChange={this.HandleEmailInput}
							/>
							{this.state.userNameError && (
								<FieldValidation errorMessage="Please enter a valid username" msgfor="email" />
							)}
						</div>
						<div className="form-group">
							<label>Re-type username</label>
							<input
								className={`form-control ${this.state.reUserNameError
									? 'validation-error-text-box'
									: ''}`}
								type="text"
								placeholder=""
								value={this.state.reEmailValue}
								onChange={this.HandleReEmailInput}
							/>
							{this.state.reUserNameError && (
								<FieldValidation
									errorMessage="Please enter the same username"
									msgfor="emailVerification"
								/>
							)}
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								className={`form-control ${this.state.passwordError
									? 'validation-error-text-box'
									: ''}`}
								type="password"
								placeholder=""
								value={this.state.passwordValue}
								onChange={this.HandlePasswordInput}
							/>
							{this.state.passwordError && (
								<FieldValidation errorMessage="Password at least 8 characters long" msgfor="password" />
							)}
						</div>
						<div className="form-group">
							<label>Re-type password</label>
							<input
								className={`form-control ${this.state.rePasswordError
									? 'validation-error-text-box'
									: ''}`}
								type="password"
								placeholder=""
								value={this.state.rePasswordValue}
								onChange={this.HandleRePasswordInput}
							/>
							{this.state.rePasswordError && (
								<FieldValidation errorMessage="Password does not match" msgfor="passwordVerification" />
							)}
						</div>
						<div className="form-group">
							<button className="btn btn-primary btn-block">Create account</button>
						</div>
					</form>
				</div>
				<SignInMessage />
				<Footer bottom="auto" />
			</React.Fragment>
		);
	}
}
