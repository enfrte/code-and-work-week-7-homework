import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/Auth";
import './App.css';
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="app container">
      <UserContextProvider>
        <Router>
          <Auth />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
