import React from "react";
import { useLocation } from "react-router-dom";

function Results(props) {
	const location = useLocation();
	console.log(location);

	return <div></div>;
}

export default Results;
