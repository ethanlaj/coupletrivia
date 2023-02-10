import InputGroup from "./common/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function QuestionModal({
	show,
	onHide,
	data,
	errors,
	handleChange,
	handleSubmit,
}) {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>Add Question</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<InputGroup
					id="question"
					label="Question"
					value={data["question"]}
					error={errors["question"]}
					handleChange={handleChange}
				></InputGroup>
				<InputGroup
					id="answer"
					label="Answer"
					value={data["answer"]}
					error={errors["answer"]}
					handleChange={handleChange}
				></InputGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleSubmit}>
					Add Question
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default QuestionModal;
