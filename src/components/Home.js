import React from 'react';
import { useParams } from "react-router-dom";

function Home() {

	const params = useParams();
	console.log(params);
	
	if (params.token === "asdf") {
		return (
			<div className="deposit container">
				{params.token} logged in
			</div>
		);
	}
}

export default Home;
