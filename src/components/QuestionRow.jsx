import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function QuestionRow({ question, onClick }) {
	const isSelectedQuestions = typeof question === "object";
	const questionText = isSelectedQuestions ? question.question : question;

	const [hovering, setHover] = useState(false);

	const handleMouseEnter = () => setHover(true);
	const handleMouseLeave = () => setHover(false);

	return (
		<tr onClick={() => !isSelectedQuestions && onClick(questionText)}>
			<td>{questionText}</td>
			{isSelectedQuestions && (
				<td
					className="answer"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{hovering ? question.answer : "*******"}
				</td>
			)}
			{isSelectedQuestions && (
				<td
					className="removeQuestion"
					onClick={() => onClick(questionText)}
				>
					<FontAwesomeIcon icon={faX} />
				</td>
			)}
		</tr>
	);
}

export default QuestionRow;
