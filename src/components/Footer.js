import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
	const style = {
		color: '#999999',
		bottom: props.bottom ? 'auto' : '10px'
	};
	return (
		<div className="footer default-text " style={style}>
			Your account for everything Autodesk<br />
			<span className="default-text-cta">
				<Link to="/learn-more">Learn More</Link>
			</span>
		</div>
	);
}
