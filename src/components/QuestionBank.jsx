import React, { Fragment, useState } from "react";
import CategorySelect from "./CategorySelect";
import questions from "../questions.json";
import QuestionsTable from "./QuestionsTable";

function QuestionBank(props) {
	const categories = Object.keys(questions);
	const [category, changeCategory] = useState("");

	function handleCategoryChange(e) {
		changeCategory(e.target.value);
	}

	return (
		<Fragment>
			<h2>Question Bank</h2>
			<CategorySelect
				onChange={handleCategoryChange}
				value={category}
				categories={categories}
			></CategorySelect>

			<QuestionsTable questions={questions[category]}></QuestionsTable>
		</Fragment>
	);
}

export default QuestionBank;
