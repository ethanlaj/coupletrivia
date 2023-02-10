import React from "react";

function Result({ question: q }) {
	return (
		<div className="resultContainer">
			<p>Question: {q.question}</p>
			<p>
				{q.guesser}'s Answer: {q.guess}
			</p>
			<p>Correct Answer: {q.answer}</p>
		</div>
	);
}

export default Result;
