import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InputGroup from "./common/InputGroup";
import QuestionBank from "./QuestionBank";

function QuestionForm(props) {
	const location = useLocation();
	const { player1, player2 } = location.state;

	const [selectedQuestions, setQuestions] = useState([]);

	function addQuestion(question, answer) {
		let newQuestions = [...selectedQuestions];
		newQuestions.push({ question, answer });

		setQuestions(newQuestions);
	}

	function removeQuestion(question) {
		let newQuestions = [...selectedQuestions];
		newQuestions.filter((q) => q.question !== question);

		setQuestions(newQuestions);
	}

	return (
		<div>
			<h1>Question Selection</h1>
			<p>
				{player1}, pick 5 questions for {player2} to answer about you.
				Try to challenge them, and don't let them see your answers!
			</p>

			<QuestionBank
				add={addQuestion}
				remove={removeQuestion}
			></QuestionBank>
		</div>
	);
}

export default QuestionForm;
