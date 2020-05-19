import React from 'react';
import { BrowserRouter as Route, Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
		<div className="menu">
			<nav>
				<ul>
					<li>
						<NavLink exact to="/" activeClassName="is-active">Home</NavLink>
					</li>
					<li>
						<NavLink to="/deposit" activeClassName="is-active">Deposit</NavLink>
					</li>
					<li>
						<NavLink to="/withdraw" activeClassName="is-active">Withdraw</NavLink>
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
