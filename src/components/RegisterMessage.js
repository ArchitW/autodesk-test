import React from 'react';
import { Link } from 'react-router-dom';
export default function RegisterMessage() {
	return (
		<div className="default-text">
			NEW TO AUTODESK? <span className="default-text-cta"><Link to="/register">CREATE ACCOUNT</Link></span>
		</div>
	);
}
