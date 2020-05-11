import React, { useContext } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu  from "./Menu";

function Nav() {

	const { user } = useContext(UserContext);

  return (
		<div className="">
			<Menu />
			{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
			{ /* Conditional routing - If a user object exists, git the user access to the other pages, else send them to the login */
				user === null ?
					<Switch>
						<Route path="*">
							<Login />
						</Route>
					</Switch>
				: 
					<Switch>
						<Route path="/deposit">
							<Deposit />
						</Route>
						<Route path="/withdraw">
							<Withdraw />
						</Route>
						<Route exact path="/:token">
							<Home />
						</Route>
						<Route exact path="/">
							<Home /> 
						</Route>
					</Switch>
			} 
		</div>
  );
}

export default Nav;
