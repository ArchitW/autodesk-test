import React from 'react';
import { Link } from 'react-router-dom';
export default function LearnMore() {
	return (
		<div>
			<h2 className="sub-header">Learn More</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat a ligula tincidunt blandit.
				Donec laoreet, enim in varius convallis, libero felis ultrices lacus, vitae dapibus mauris libero nec
				massa. Donec ut rhoncus lacus. Fusce eu volutpat neque. Nam porttitor consectetur est, eget malesuada
				arcu tempus id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
				Cras nec maximus magna. Nulla et velit tempor velit facilisis sollicitudin vel nec nulla. Phasellus
				pretium ex ut leo pellentesque fringilla. Phasellus tincidunt tincidunt lorem, ac pretium nisl
				pellentesque nec. Ut fringilla metus rhoncus ex tincidunt, id rutrum nunc vehicula. Nulla ullamcorper
				sollicitudin massa, a molestie augue porttitor sit amet.
			</p>

			<p>
				click <Link to="/"> Here </Link> to go back
			</p>
		</div>
	);
}
