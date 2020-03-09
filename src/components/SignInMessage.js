import React from 'react';
import { Link } from 'react-router-dom';
const style = {
	marginBottom: '20px'
};
export default function SignInMessage() {
	return (
		<div className="default-text" style={style}>
			Already have an account?
			<span className="default-text-cta">
				<Link to="/"> Sign in</Link>
			</span>
		</div>
	);
}
