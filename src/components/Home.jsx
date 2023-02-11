import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	async function start() {
		// let gameID = await gameService.createGame();
		// navigate("/startGame", { state: { gameID } });
		navigate("/startGame");
	}

	return (
		<div className="beautyContainer">
			<h3>Welcome to Couple Trivia!</h3>
			<p>How well do you know your partner?</p>
			<button className="btn btn-primary" onClick={start}>
				Start
			</button>
		</div>
	);
};

export default Home;
