import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import pages from "./pages";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<pages.Home />} />
				<Route path="/chat" element={<pages.Chat />} />
				<Route path="/friends" element={<pages.Friends />} />
				{/* <Route path="/settings" element={<pages.Settings />} /> */}
				{/* <Route path="/profile" element={<pages.Profile />} /> */}
				{/* <Route path="*" element={<pages.NotFound />} /> */}
			</Routes>
		</div>
	);
}

export default App;
