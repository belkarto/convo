import { useState } from "react";
import {
	Box,
	Typography,
	Button,
	Paper,
	Stack,
	InputBase,
	Tab,
	Tabs
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import AllFriends from "./AllFriends";
import Requests from "./Requests";
import AddFriend from "./AddFriend";

const FriendsPage = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<Box
			sx={{
				minHeight: "100vh",
				bgcolor: "#22283a",
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Box
				sx={{
					maxWidth: "lg",
					mx: "auto",
					width: "100%",
					p: 3,
					flexGrow: 1,
					overflow: "auto"
				}}
			>
				{/* Header Section */}
				<Stack direction="row" alignItems="center" spacing={2}>
					<GroupIcon sx={{ color: "#ff277f", fontSize: 32 }} />
					<Typography
						variant="h4"
						sx={{ color: "white", fontWeight: "bold" }}
					>
						Friends
					</Typography>
				</Stack>

				{/* Navigation Tabs */}
				<Tabs
					value={activeTab}
					onChange={(e, newValue) => setActiveTab(newValue)}
					sx={{
						mb: 3,
						"& .MuiTabs-indicator": { bgcolor: "#ff277f" },
						"& .MuiTab-root": {
							color: "#6b7280",
							"&.Mui-selected": { color: "#ff277f" }
						}
					}}
				>
					<Tab label="All Friends" />
					<Tab label="Requests" />
					<Tab label="Add Friends" />
				</Tabs>

				{/* Search Bar */}
				<Paper
					sx={{
						display: "flex",
						alignItems: "center",
						bgcolor: "#2d3349",
						mb: 3,
						p: 1,
						borderRadius: 2
					}}
				>
					<SearchIcon sx={{ color: "#6b7280", mx: 2 }} />
					<InputBase
						placeholder="Search friends..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						sx={{
							flex: 1,
							color: "white",
							"& ::placeholder": { color: "#6b7280" }
						}}
					/>
				</Paper>

				{/* Content Sections */}
				{activeTab === 0 && <AllFriends searchQuery={searchQuery} />}

				{activeTab === 1 && <Requests searchQuery={searchQuery} />}

				{activeTab === 2 && <AddFriend searchQuery={searchQuery} />}
			</Box>
		</Box>
	);
};

export default FriendsPage;
