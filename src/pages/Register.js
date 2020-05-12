import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { saveToDb, generateId } from "../bankHelperFunctions";

function Register() {
  const { db } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  const [incorrectLogin, setRegisterError] = useState('');
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [initialDeposit, setInitialDeposit] = useState('');	
	
  const handleSubmit = (event) => {
    event.preventDefault();
    verifyRegister(firstname, lastname, username, password, initialDeposit);
  }

  // things only change after component rerender
  useEffect(() => {
		console.log("user: ", user);
	}, [user]);

  // checks if a database user has been returned 
  const verifyRegister = (firstname, lastname, username, password, initialDeposit) => {
		// check if user is not already registered
		const userObjectArray = db.filter(current => current.username === username);
    if (userObjectArray.length !== 0) {
			setRegisterError("Username is taken");
      return;
		}
		// prepare user object 
		const userObject = 	{
			"id": generateId,
			"username": username,
			"name": firstname + lastname,
			"balance": initialDeposit,
			"password": password,
			"fund_requests":[]
		};
		// add user to the db
		// https://stackoverflow.com/questions/55301477/fs-writefile-is-not-working-on-my-reactjs-nodejs-app
		// saveToDb("../database.json", userObject); // broken with fs package
		// see saveToDb() in bankHelperFunctions.js
		setUser(userObjectArray[0]); // set user as current user
    
  };

  return (
    <div className="register container">
      <div><p style={{color:"red"}}>{incorrectLogin}</p></div>
      <form onSubmit={handleSubmit}>
          <h3 className="mb-3">Register</h3>
					<div className="alert alert-info" role="alert">
						To register, you need an initial deposit of at least 20€ (euros)
					</div>

					<div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control mt-2 mb-2" value={firstname} placeholder="Enter first name" onChange={(e) => setFirstname(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control mt-2" value={lastname} placeholder="Enter last name" onChange={(e) => setLastname(e.target.value)} required/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control mt-2 mb-2" value={username} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                <input type="password" className="form-control mt-2" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required/>
              </div>
            </div>
          </div>

					<div className="form-group">
            <div className="row">
              <div className="col-md-12">
                <input type="number" min="20" className="form-control mt-2 mb-2" value={initialDeposit} placeholder="Enter an initial deposit" onChange={(e) => setInitialDeposit(e.target.value)} required/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="btn btn-success btn-block mt-2 mb-2">Register</button>
              </div>
              <div className="col-md-6">
								<a href="/login" className="btn btn-primary btn-block mt-2 active" role="button" aria-pressed="true">Back to Login</a>
              </div>
            </div>
          </div>

      </form>

    </div>
  );
}

export default Register;