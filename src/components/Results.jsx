import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Result from "./Result";

function Results(props) {
	const location = useLocation();
	const player1 = location.state.player1;
	const player2 = location.state.player2;

	calculateScore(player1, player2.questions);
	calculateScore(player2, player1.questions);

	return (
		<Fragment>
			<h1>Questions About {player1.name}</h1>
			{player1.questions.map((q) => (
				<Result question={q}></Result>
			))}
			<h1>Questions About {player2.name}</h1>
			{player2.questions.map((q) => (
				<Result question={q}></Result>
			))}
		</Fragment>
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
		question.guess = guess;
		question.guesser = playerObject.name;
	}
}
