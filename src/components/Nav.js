import React, { useContext } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { isLoggedIn } from "../helpers/helper-functions";

import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import Home from "../pages/Home";
import Menu  from "./Menu";
import Register from "../pages/Register";
import BankInfo from './BankInfo';
import Login from "../pages/Login";

function Nav() {
	const { user } = useContext(UserContext);

	console.log("Nav isLoggedIn", isLoggedIn(user));
	console.log("---", user, isLoggedIn, user === isLoggedIn);
  return (
		<main className="main">
			{ isLoggedIn(user) ? <Menu /> : "" }
			{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
			{ /* Conditional routing - If a user object exists, give the user access to the other pages, else send them to the login */
				!isLoggedIn(user) ?
					<Switch>
						<Route path="/register" render={ (routeProps) => (<Register {...routeProps} />) } />
						<Route path="/login">
							<div className="login-group-container">
								<BankInfo />
								<Login />
							</div>
						</Route>
						<Route path="*">
							<BankInfo />
							<Login />
						</Route>
					</Switch>
				: 
					<Switch>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/deposit">
							<Deposit />
						</Route>
						<Route path="/withdraw">
							<Withdraw />
						</Route>
						<Route path="/login">
							<div className="login-group-container">
								<BankInfo />
								<Login />
							</div>
						</Route>
						<Route exact path="/">
							<Home /> 
						</Route>
					</Switch>
			} 
		</main>
  );
}

export default Nav;
