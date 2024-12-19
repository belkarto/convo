import { Box } from "@mui/material";
import IntroSection from "./IntroSection";
import RecentChats from "./RecentChats";
import Feutures from "./Feutures";
import Activity from "./Activity";

const HomePage = () => {
	return (
		<Box
			sx={{
				height: "100vh", // Set fixed height
				overflow: "hidden", // Prevent body scrolling
				display: "flex",
				flexDirection: "column",
				bgcolor: "#22283a"
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					overflow: "auto", // Enable scrolling for content
					p: 3
				}}
			>
				<Box
					sx={{
						maxWidth: "lg",
						mx: "auto"
					}}
				>
					{/* Intro Section */}
					<IntroSection />
					{/* Quick Actions */}
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								md: "1fr 1fr"
							},
							gap: 3,
							mb: 6
						}}
					>
						{/* Recent Chats */}
						<RecentChats />
						{/* Activity */}
						<Activity />
					</Box>

					{/* Features */}
					<Feutures />
				</Box>
			</Box>
		</Box>
	);
};

export default HomePage;
