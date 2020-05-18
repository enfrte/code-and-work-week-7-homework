import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

function Menu() {
  return (
		<div className="menu">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>|
					</li>
					<li>
						<Link to="/deposit">Deposit</Link>|
					</li>
					<li>
						<Link to="/withdraw">Withdraw</Link>|
					</li>
					<li>
						<Link to="/login">Logout</Link>
					</li>
				</ul>
			</nav>
		</div>
  );
}

export default Menu;
