import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "./common/InputGroup";

const requiredError = "Player name is required!";
const sameNameError = "Player names must be unique!";

function PlayerForm(props) {
	const navigate = useNavigate();
	const [data, setData] = useState({ player1: "", player2: "" });
	const [errors, setErrors] = useState({});

	function handleChange(e) {
		const newData = { ...data };

		const id = e.target.id;
		newData[id] = e.target.value;

		setData(newData);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (data.player1.trim().length === 0)
			return setErrors({ player1: requiredError });

		if (data.player2.trim().length === 0)
			return setErrors({ player2: requiredError });

		if (data.player1 === data.player2)
			return setErrors({ player2: sameNameError });

		setErrors({});

		navigate("/startGame/player1", {
			state: {
				player1: { name: data.player1 },
				player2: { name: data.player2 },
			},
		});
	}

	return (
		<div>
			<h1>Player Information</h1>
			<form onSubmit={handleSubmit}>
				<InputGroup
					id={"player1"}
					label={"Player 1 Name"}
					value={data["player1"]}
					error={errors["player1"]}
					handleChange={handleChange}
				></InputGroup>

				<InputGroup
					id={"player2"}
					label={"Player 2 Name"}
					value={data["player2"]}
					error={errors["player2"]}
					handleChange={handleChange}
				></InputGroup>
				<button className="btn btn-primary">Pick Questions</button>
			</form>
		</div>
	);
}

export default PlayerForm;
