import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css';
//import database from "./database.json";
//import helper from "./bankHelperFunctions";

function App() {

  //console.log(database); // :S
  //console.log(helper.helpText);
  
  return (
    <Router>
      <div className="App container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>|
            </li>
            <li>
              <Link to="/deposit">Deposit</Link>|
            </li>
            <li>
              <Link to="/withdraw">Withdraw</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/deposit/">
            <Deposit />
          </Route>
          <Route path="/withdraw/">
            <Withdraw />
          </Route>
          <Route exact path="/:token">
            <Home />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>

      </div>
      
    </Router>
  );
}

export default App;
