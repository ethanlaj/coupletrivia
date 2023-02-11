import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputGroup from "./common/InputGroup";

function AnswerForm(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const player1 = location.state.player1;
	const player2 = location.state.player2;
	const currentPlayer = player1.answers ? player2 : player1;
	const otherPlayer = player1.answers ? player1 : player2;
	const nextLocation = player1.answers ? "/results" : "/play/player2";

	const [data, setData] = useState({});
	const [errors, setErrors] = useState({});

	const questionsToAnswer = !player1.answers
		? player2.questions
		: player1.questions;

	useEffect(() => {
		let questionsClone =
			"{" +
			questionsToAnswer.map((q) => `"${q.question}": ""`).join(", ") +
			"}";
		questionsClone = JSON.parse(questionsClone);

		setData(questionsClone);
		setErrors({});
	}, [questionsToAnswer]);

	function handleChange(e) {
		const newData = { ...data };

		const id = e.target.id;
		newData[id] = e.target.value;

		setData(newData);
	}

	function handleSubmit(e) {
		e.preventDefault();

		for (let [id, answer] of Object.entries(data)) {
			if (answer.trim().length === 0)
				return setErrors({ [id]: "Answer is required!" });
		}

		setErrors({});

		currentPlayer.answers = [];
		for (let answer of Object.entries(data))
			currentPlayer.answers.push({
				question: answer[0],
				answer: answer[1],
			});

		navigate(nextLocation, {
			replace: true,
			state: {
				player1,
				player2,
			},
		});
	}

	return (
		<div className="beautyContainer w50">
			<h1>{currentPlayer.name}'s Turn!</h1>
			<p>
				{currentPlayer.name}, time to answer questions about{" "}
				{otherPlayer.name}! Do you know them well enough to get all of
				the answers correct?!
			</p>

			<form onSubmit={handleSubmit}>
				{questionsToAnswer.map((q, index) => (
					<InputGroup
						key={q.question}
						id={q.question}
						label={q.question}
						value={data[q.question]}
						error={errors[q.question]}
						handleChange={handleChange}
					></InputGroup>
				))}
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}

export default AnswerForm;
