// import React from "react";
// import {
// 	Box,
// 	Typography,
// 	List,
// 	ListItem,
// 	ListItemAvatar,
// 	ListItemText,
// 	Avatar,
// 	IconButton,
// 	Divider
// } from "@mui/material";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import BlockIcon from "@mui/icons-material/Block";
// import ChatIcon from "@mui/icons-material/Chat";
//
// function Friends() {
// 	const friends = [
// 		{ id: 1, name: "Alice" },
// 		{ id: 2, name: "Bob" }
// 	];
//
// 	const friendRequests = [{ id: 3, name: "Charlie" }];
//
// 	return (
// 		<Box sx={{ padding: 2, maxWidth: 400, margin: "0 auto" }}>
// 			<Typography variant="h5" gutterBottom>
// 				Friends
// 			</Typography>
//
// 			{/* Friends List */}
// 			<Typography variant="h6">Your Friends</Typography>
// 			<List>
// 				{friends.map((friend) => (
// 					<ListItem
// 						key={friend.id}
// 						secondaryAction={
// 							<IconButton edge="end" aria-label="chat">
// 								<ChatIcon />
// 							</IconButton>
// 						}
// 					>
// 						<ListItemAvatar>
// 							<Avatar>{friend.name[0]}</Avatar>
// 						</ListItemAvatar>
// 						<ListItemText primary={friend.name} />
// 					</ListItem>
// 				))}
// 			</List>
//
// 			<Divider sx={{ my: 2 }} />
//
// 			{/* Friend Requests */}
// 			<Typography variant="h6">Friend Requests</Typography>
// 			<List>
// 				{friendRequests.map((request) => (
// 					<ListItem
// 						key={request.id}
// 						secondaryAction={
// 							<>
// 								<IconButton edge="end" aria-label="add">
// 									<PersonAddIcon />
// 								</IconButton>
// 								<IconButton edge="end" aria-label="block">
// 									<BlockIcon />
// 								</IconButton>
// 							</>
// 						}
// 					>
// 						<ListItemAvatar>
// 							<Avatar>{request.name[0]}</Avatar>
// 						</ListItemAvatar>
// 						<ListItemText primary={request.name} />
// 					</ListItem>
// 				))}
// 			</List>
// 		</Box>
// 	);
// }
//
// export default Friends;
// import { UserPlus, Users, Search } from "lucide-react";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";

const FriendsPage = () => {
	const friendsList = [
		{ id: 1, name: "Sarah Connor", status: "Online", lastSeen: "Just now" },
		{ id: 2, name: "John Doe", status: "Offline", lastSeen: "2 hours ago" },
		{ id: 3, name: "Alice Smith", status: "Online", lastSeen: "Just now" },
		{
			id: 4,
			name: "Bob Johnson",
			status: "Away",
			lastSeen: "5 minutes ago"
		}
	];

	return (
		<div className="min-h-screen bg-[#22283a]">
			<div className="max-w-4xl mx-auto p-6">
				{/* Header Section */}
				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center gap-3">
						<GroupIcon size={32} className="text-[#ff277f]" />
						<h1 className="text-3xl font-bold text-white">
							Friends
						</h1>
					</div>
					<button className="flex items-center gap-2 bg-[#ff277f] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
						<PersonAddIcon size={20} />
						<span>Add Friend</span>
					</button>
				</div>

				{/* Search Bar */}
				<div className="relative mb-6">
					<SearchIcon
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280]"
						size={20}
					/>
					<input
						type="text"
						placeholder="Search friends..."
						className="w-full bg-[#2d3349] text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff277f] placeholder-[#6b7280]"
					/>
				</div>

				{/* Friends List */}
				<div className="bg-[#2d3349] rounded-xl p-4">
					<div className="space-y-4">
						{friendsList.map((friend) => (
							<div
								key={friend.id}
								className="flex items-center justify-between bg-[#3c3f4a] p-4 rounded-lg hover:bg-opacity-80 transition-all"
							>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-[#ffa3c1] rounded-full flex items-center justify-center text-[#22283a] font-bold">
										{friend.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div>
										<h3 className="text-white font-medium">
											{friend.name}
										</h3>
										<div className="flex items-center gap-2">
											<span
												className={`w-2 h-2 rounded-full ${
													friend.status === "Online"
														? "bg-[#00ffbf]"
														: friend.status ===
															  "Away"
															? "bg-[#ffcf6d]"
															: "bg-[#6b7280]"
												}`}
											/>
											<span className="text-[#6b7280] text-sm">
												{friend.status} •{" "}
												{friend.lastSeen}
											</span>
										</div>
									</div>
								</div>
								<button className="text-[#5bc0eb] hover:text-[#ff277f] transition-colors">
									Message
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendsPage;
