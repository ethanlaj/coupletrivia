import React from "react";

function Result({ question: q }) {
	return (
		<div
			className={
				"resultContainer " + (q.correct ? "correct" : "incorrect")
			}
		>
			<h4>{q.question}</h4>
			<p>
				{q.guesser}'s Answer: {q.guess}
			</p>
			<p>Correct Answer: {q.answer}</p>
		</div>
	);
}

export default Result;
