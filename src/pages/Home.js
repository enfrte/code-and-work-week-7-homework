import React from 'react';
//import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Home() {
	let { token } = useParams();
	console.log("Home params", token); // Can't display token fo rsome reason :(

	return (
		<div className="">
			Home Component {token} 
		</div>
	);
}

export default Home;
