import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import pages from "./pages";
import AuthWrapper from "./components/AuthWrapper";

function App() {
	return (
		<div className="App h-screen flex">
			<AuthWrapper>
				<Navbar />
				<div className="flex-1 flex flex-col">
					<TopBar />
					<main className="flex-1 overflow-y-hidden bg-light-black">
						<Routes>
							<Route path="/" element={<pages.Home />} />
							<Route path="/chat" element={<pages.Chat />} />
							<Route
								path="/friends"
								element={<pages.Friends />}
							/>
							<Route path="/auth" element={<pages.AuthPages />} />
							{/* <Route path="/settings" element={<pages.Settings />} /> */}
							{/* <Route path="/profile" element={<pages.Profile />} /> */}
							{/* <Route path="*" element={<pages.NotFound />} /> */}
						</Routes>
					</main>
				</div>
			</AuthWrapper>
		</div>
	);
}

export default App;
