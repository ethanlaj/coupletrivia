import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Result from "./Result";

function Results(props) {
	const location = useLocation();
	const navigate = useNavigate();
	const player1 = location.state.player1;
	const player2 = location.state.player2;

	calculateScore(player1, player2.questions);
	calculateScore(player2, player1.questions);

	const winner =
		player1.score > player2.score
			? player1
			: player2.score > player1.score
			? player2
			: null;

	function handleClick() {
		navigate("/", {
			replace: true,
		});
	}

	return (
		<div className="beautyContainer w50">
			<div className="my-2 d-flex justify-content-between align-items-center w100">
				{winner && <h1>{winner.name + " Wins!"}</h1>}
				{!winner && <h1>{"It's a tie!"}</h1>}

				<button onClick={handleClick} className="btn btn-primary">
					Play Again
				</button>
			</div>

			<h2>Questions About {player1.name}</h2>
			{player1.questions.map((q) => (
				<Result key={q.question} question={q}></Result>
			))}

			<h2>Questions About {player2.name}</h2>
			{player2.questions.map((q) => (
				<Result key={q.question} question={q}></Result>
			))}
		</div>
	);
}
export default Results;

function calculateScore(playerObject, questionsObject) {
	playerObject.score = 0;

	for (let question of questionsObject) {
		let answer = question.answer.trim().toLowerCase();
		let guess = playerObject.answers
			.find((q) => q.question === question.question)
			.answer.trim()
			.toLowerCase();

		if (answer === guess) playerObject.score++;
		question.correct = answer === guess;
		question.guess = guess;
		question.guesser = playerObject.name;
	}
}
