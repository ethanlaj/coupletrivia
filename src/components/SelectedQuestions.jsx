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

			<button onClick={handleSubmit} className="btn btn-primary">
				Done
			</button>
		</Fragment>
	);
}

export default SelectedQuestions;
