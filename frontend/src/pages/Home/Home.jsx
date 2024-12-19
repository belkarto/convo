import { Box } from "@mui/material";
import IntroSection from "./IntroSection";
import RecentChats from "./RecentChats";
import Feutures from "./Feutures";
import Activity from "./Activity";

const HomePage = () => {
	return (
		<Box className="h-screen overflow-hidden flex flex-col bg-deep-black">
			<Box className="flex-grow overflow-auto p-3">
				<Box className="max-w-screen-lg mx-auto">
					<IntroSection />
					<Box className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
						<RecentChats />
						<Activity />
					</Box>
					<Feutures />
				</Box>
			</Box>
		</Box>
	);
};

export default HomePage;
