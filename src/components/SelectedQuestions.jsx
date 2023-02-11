import React, { Fragment } from "react";
import QuestionsTable from "./QuestionsTable";

function SelectedQuestions({ selectedQuestions, handleSubmit, remove }) {
	function handleXClick(question) {
		remove(question);
	}

	return (
		<Fragment>
			<h2>Selected Questions</h2>

			<QuestionsTable
				onClick={handleXClick}
				questions={selectedQuestions}
			></QuestionsTable>

			<button
				onClick={handleSubmit}
				className="mb-4 btn btn-primary w100"
			>
				Done
			</button>
		</Fragment>
	);
}

export default SelectedQuestions;
