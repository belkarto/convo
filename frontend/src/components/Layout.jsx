import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function Layout() {
	return (
		<div className="App h-screen flex">
			<Navbar />
			<div className="flex-1 flex flex-col">
				<TopBar />
				<main className="flex-1 overflow-y-hidden bg-light-black">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default Layout;
