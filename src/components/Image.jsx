import React from "react";

export default function Image(props) {
	return (
		<>
			<img
				className="object-cover h-full"
				src={`img/${props.name}.webp`}
				alt=""
			/>
		</>
	);
}
