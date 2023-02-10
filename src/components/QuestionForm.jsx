import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionBank from "./QuestionBank";
import { toast } from "react-toastify";
import SelectedQuestions from "./SelectedQuestions";

function QuestionForm(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const player1 = location.state.player1;
	const player2 = location.state.player2;
	const currentPlayer = player1.questions ? player2 : player1;
	const otherPlayer = player1.questions ? player1 : player2;
	const nextLocation = player1.questions
		? "/play/player1"
		: "/startGame/player2";

	const [selectedQuestions, setQuestions] = useState([]);
	const [category, changeCategory] = useState("");

	useEffect(() => {
		setQuestions(selectedQuestions);
	}, [selectedQuestions]);

	function addQuestion(question, answer) {
		if (selectedQuestions.length >= 5)
			return toast.error("Maximum number of questions is 5!");

		let newQuestions = [...selectedQuestions];
		newQuestions.push({ question, answer });

		setQuestions(newQuestions);
	}

	function removeQuestion(question) {
		let newQuestions = [...selectedQuestions];
		newQuestions = newQuestions.filter((q) => q.question !== question);

		setQuestions(newQuestions);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (selectedQuestions.length < 5)
			return toast.error(
				"You must select 5 questions before continuing!"
			);

		changeCategory("");

		currentPlayer.questions = selectedQuestions;
		setQuestions([]);

		navigate(nextLocation, {
			replace: true,
			state: {
				player1,
				player2,
			},
		});
	}

	return (
		<div>
			<h1>{currentPlayer.name}'s Turn</h1>
			<p>
				{currentPlayer.name}, pick 5 questions for {otherPlayer.name} to
				answer about you. Try to challenge them, and don't let them see
				your answers!
			</p>

			{selectedQuestions.length > 0 && (
				<SelectedQuestions
					selectedQuestions={selectedQuestions}
					handleSubmit={handleSubmit}
					remove={removeQuestion}
				></SelectedQuestions>
			)}

			<QuestionBank
				add={addQuestion}
				selectedQuestions={selectedQuestions}
				category={category}
				changeCategory={changeCategory}
			></QuestionBank>
		</div>
	);
}

export default QuestionForm;
