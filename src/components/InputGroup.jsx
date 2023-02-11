import React from "react";

const InputGroup = (props) => {
	const { id, label, value, error, handleChange } = props;

	return (
		<div className="inputContainer">
			<label htmlFor={id} className="form-label">
				{label}
			</label>
			<input
				id={id}
				onChange={handleChange}
				className="form-control"
				value={value}
			/>
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
		</div>
	);
};

export default InputGroup;
