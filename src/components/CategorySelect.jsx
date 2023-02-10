import React from "react";

function CategorySelect({ categories, onChange, value }) {
	return (
		<select value={value} onChange={onChange} className="form-select">
			<option value="">Choose Category</option>
			{categories.map((c) => (
				<option value={c} key={c}>
					{c}
				</option>
			))}
		</select>
	);
}

export default CategorySelect;
