import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputGroup from "./common/InputGroup";

function AnswerForm(props) {
	const location = useLocation();
	const navigate = useNavigate();
	const player1 = location.state.player1;
	const player2 = location.state.player2;

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

		if (!player1.answers) {
			player1.answers = [];
			for (let answer of Object.entries(data))
				player1.answers.push({
					question: answer[0],
					answer: answer[1],
				});

			navigate("/play/player2", {
				replace: true,
				state: {
					player1,
					player2,
				},
			});
		} else {
			player2.answers = [];
			for (let answer of Object.entries(data))
				player2.answers.push({
					question: answer[0],
					answer: answer[1],
				});

			navigate("/results", {
				replace: true,
				state: {
					player1,
					player2,
				},
			});
		}
	}

	return (
		<div>
			<h1>Answer</h1>
			<p>
				{!player1.answers ? player1.name : player2.name}, time to answer
				questions about {!player1.answers ? player2.name : player1.name}
				! Do you know them well enough to get all of the answers
				correct?!
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
				<button>Submit</button>
			</form>
		</div>
	);
}

export default AnswerForm;
