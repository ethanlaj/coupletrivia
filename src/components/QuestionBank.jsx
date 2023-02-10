import React, { Fragment, useState } from "react";
import CategorySelect from "./CategorySelect";
import questions from "../questions.json";
import QuestionsTable from "./QuestionsTable";
import QuestionModal from "./QuestionModal";

function QuestionBank({ add, selectedQuestions }) {
	const categories = Object.keys(questions);
	const [category, changeCategory] = useState("");

	// States used in the modal
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState({ question: "", answer: "" });
	const [errors, setErrors] = useState({});

	const handleClose = () => setShowModal(false);

	function handleChange(e) {
		const newData = { ...data };

		const id = e.target.id;
		newData[id] = e.target.value;

		setData(newData);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const question = data.question.trim();
		const answer = data.answer.trim();

		if (question.length === 0)
			return setErrors({ question: "Question is required!" });

		if (selectedQuestions.find((q) => q.question === question))
			return setErrors({ question: "Question already exists!" });

		if (answer.length === 0)
			return setErrors({ answer: "Answer is required!" });

		setErrors({});

		add(question, answer);
		setShowModal(false);
	}

	function openModal(question) {
		const newData = { ...data };

		newData.question = question;
		newData.answer = "";

		setData(newData);
		setErrors({});

		setShowModal(true);
	}

	function handleRowClick(question) {
		openModal(question);
	}

	function handleCategoryChange(e) {
		changeCategory(e.target.value);
	}

	return (
		<Fragment>
			<QuestionModal
				show={showModal}
				onHide={handleClose}
				data={data}
				errors={errors}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			></QuestionModal>

			<h2>Question Bank</h2>
			<button className="btn btn-primary" onClick={() => openModal("")}>
				Add Custom Question
			</button>

			<CategorySelect
				onChange={handleCategoryChange}
				value={category}
				categories={categories}
			></CategorySelect>

			<QuestionsTable
				questions={questions[category]}
				onClick={handleRowClick}
			></QuestionsTable>
		</Fragment>
	);
}

export default QuestionBank;
