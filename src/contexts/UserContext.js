import React, { createContext, useState } from 'react';
import database from "../database.json";
//import helper from "../bankHelperFunctions";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	//console.log(helper.helpText);
	const [db, setDatabase] = useState(database);
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
				db, setDatabase
			}}>
				{props.children}
			</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
