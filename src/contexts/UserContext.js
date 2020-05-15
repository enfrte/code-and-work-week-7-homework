import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	
	const database = [
		{
			"id":1585844765400,
			"username": "leon",
			"name":"Leon Ford",
			"balance":100,
			"password":"qwerty",
			"fund_requests":[]
		},
		{"id":1585845030433,"username":"tarja","name":"Tarja Ford","balance":200,"password":"qwerty","fund_requests":[]}
	];

	const [db, setDb] = useState(database);
	//console.log("database", db);

	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [authToken, setAuthToken] = useState(null);
	const [userToken, setUserToken] = useState(null);

	return (
    <div>
			<UserContext.Provider value={{
				user, setUser,  
				loggedIn, setLoggedIn,
				authToken, setAuthToken,
				userToken, setUserToken,
				db, setDb
			}}>
				{props.children}
			</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
