import { Avatar, Badge, Box, Paper, Stack, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const RecentChats = () => {
	const recentChats = [
		{
			id: 1,
			name: "Team Alpha",
			message: "Great work everyone!",
			time: "2m ago",
			unread: 3,
			avatar: "T"
		},
		{
			id: 2,
			name: "Sarah Connor",
			message: "When is the next meeting?",
			time: "5m ago",
			unread: 1,
			avatar: "S"
		},
		{
			id: 3,
			name: "Project X Group",
			message: "The latest updates are live",
			time: "15m ago",
			unread: 0,
			avatar: "P"
		}
	];
	return (
		<Paper
			sx={{
				bgcolor: "#2d3349",
				p: 3,
				borderRadius: 4,
				"&:hover": {
					bgcolor: "#3c3f4a",
					transition: "all 0.3s"
				}
			}}
		>
			<Stack
				direction="row"
				spacing={2}
				alignItems="center"
				sx={{ mb: 3 }}
			>
				<Box
					sx={{
						p: 1,
						bgcolor: "rgba(255, 39, 127, 0.1)",
						borderRadius: 2
					}}
				>
					<ChatIcon sx={{ color: "#ff277f", fontSize: 30 }} />
				</Box>
				<Typography variant="h6" sx={{ color: "white" }}>
					Recent Chats
				</Typography>
			</Stack>
			<Stack spacing={2}>
				{recentChats.map((chat) => (
					<Paper
						key={chat.id}
						sx={{
							bgcolor: "#3c3f4a",
							p: 2,
							borderRadius: 2,
							"&:hover": {
								bgcolor: "#4c4f5a",
								cursor: "pointer"
							}
						}}
					>
						<Stack direction="row" spacing={2} alignItems="center">
							<Avatar sx={{ bgcolor: "#ff277f" }}>
								{chat.avatar}
							</Avatar>
							<Box sx={{ flexGrow: 1 }}>
								<Typography sx={{ color: "white" }}>
									{chat.name}
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "#6b7280" }}
								>
									{chat.message}
								</Typography>
							</Box>
							<Box sx={{ textAlign: "right" }}>
								<Typography
									variant="caption"
									sx={{ color: "#6b7280" }}
								>
									{chat.time}
								</Typography>
								{chat.unread > 0 && (
									<Badge
										badgeContent={chat.unread}
										color="error"
										sx={{
											"& .MuiBadge-badge": {
												bgcolor: "#ff277f"
											}
										}}
									/>
								)}
							</Box>
						</Stack>
					</Paper>
				))}
			</Stack>
		</Paper>
	);
};

export default RecentChats;
