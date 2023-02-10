import React, { Fragment } from "react";
import QuestionRow from "./QuestionRow";

function QuestionsTable({ questions, onClick }) {
	return (
		<Fragment>
			{questions && (
				<table className="table table-hover">
					<tbody>
						{questions.map((q) => (
							<QuestionRow
								key={q.question || q}
								question={q}
								onClick={onClick}
							></QuestionRow>
						))}
					</tbody>
				</table>
			)}
		</Fragment>
	);
}

export default QuestionsTable;
