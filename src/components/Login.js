import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Register from './Register';
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			username: '',
			password: '',
			userNameError: false
		};
	}
	componentDidMount() {
		if (this.props.user !== '') {
			this.setState((prevState) => {
				return { username: this.props.user };
			});
		}
	}
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { username, password } = this.state;
		alert(`Your registration detail: \n 
           Username: ${username} \n
           Password: ${password}`);
	};

	_next = () => {
		if (!this.state.username.includes('@') || this.state.username === '') {
			this.setState((prevState) => {
				return { currentStep: 1, userNameError: !prevState.userNameError };
			});
		} else {
			let currentStep = this.state.currentStep;
			currentStep = currentStep >= 1 ? 2 : currentStep + 1;
			this.setState({
				currentStep: currentStep
			});
		}
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep
		});
	};

	nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep < 2) {
			return (
				<button className="btn btn-primary btn-block" type="button" onClick={this._next}>
					<span className="button-text"> Next </span>
				</button>
			);
		}
		return null;
	}
	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			registerForm: !this.state.registerForm
		});
	};
	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<Step1
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						username={this.state.username}
						userNameError={this.state.userNameError}
						goBack={this._prev}
					/>
					<Step2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						username={this.state.username}
						goBack={this._prev}
					/>
					{this.nextButton()}
				</form>
				<div>{this.state.registerForm && <Register />}</div>
			</React.Fragment>
		);
	}
}
