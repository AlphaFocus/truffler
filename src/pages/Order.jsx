import axios from "axios";
import { useEffect, useState } from "react";

export default function Order() {
	const [users, setUsers] = useState(null);
	const baseURL = "http://127.0.0.1:8000/users";

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setUsers(response.data);
		});
	}, []);

	if (!users) return null;
	console.log(users);
	return (
		<div>
			{users.map((user) => (
				<li>{user.name}</li>
			))}
		</div>
	);
}
