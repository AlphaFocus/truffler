import React from "react";

export default function Icon(props) {
	return (
		<>
			<img src={`img/${props.name}.png`} alt="" />
		</>
	);
}
