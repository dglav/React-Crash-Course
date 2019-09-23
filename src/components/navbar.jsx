import React from 'react';

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-light bg-light justify-content-start">
				<span className="navbar-brand mb-0 h1">Navbar</span>
				<span className="badge badge-pill badge-secondary">{totalCounters}</span>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
