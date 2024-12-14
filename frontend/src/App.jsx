import { Route, Routes } from "react-router-dom";
import "./App.css";
import pages from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import PresistLogin from "./components/PresistLogin";

function App() {
	return (
		<Routes>
			{/* private routes */}
			<Route element={<PresistLogin />}>
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<pages.Home />} />
						<Route path="/chat" element={<pages.Chat />} />
						<Route path="/friends" element={<pages.Friends />} />
					</Route>
				</Route>
			</Route>
			{/* public routes */}
			<Route path="/auth" element={<pages.AuthPages />} />
		</Routes>
	);
}

export default App;
