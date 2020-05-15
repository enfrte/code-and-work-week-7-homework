import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
//import Auth from "./components/Auth";
import Nav from "./components/Nav";

import './App.css';
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="app">
      <UserContextProvider>
        <Router>
          <Nav />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
