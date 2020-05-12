import React, { useContext } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu  from "./Menu";
import Register from "../pages/Register";
import BankInfo from './BankInfo';

function Nav() {

	const { user } = useContext(UserContext);

  return (
		<main className="main">
			{ user !== null ? <Menu /> : "" }
			{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
			{ /* Conditional routing - If a user object exists, git the user access to the other pages, else send them to the login */
				user === null ?
					<Switch>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/login">
							<BankInfo />
							<Login />
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
						<Route exact path="/:token">
							<Home />
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
