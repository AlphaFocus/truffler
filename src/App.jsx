import { Routes, Route } from "react-router-dom";

import Order from "./pages/Order";
import Home from "./pages/Home";
import Guest from "./layouts/Guest";
import Tour from "./pages/Tour";

function App() {
	return (
		<>
			<Guest>
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/tour" Component={Tour} />
					<Route path="/order" Component={Order} />
				</Routes>
			</Guest>
		</>
	);
}

export default App;
