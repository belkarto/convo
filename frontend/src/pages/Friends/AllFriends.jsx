import { useEffect } from "react";
import { Box, Typography, Button, Paper, Stack, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getInitials, getStatusColor } from "./utils";
import usePrivateAPI from "../../hooks/usePrivateAPI";

const AllFriends = () => {
	const privateAPI = usePrivateAPI();
	const friendsList = [
		{
			id: 1,
			name: "Sarah Connor",
			status: "Online",
			lastSeen: "Just now",
			avatar: "avatar.jpg"
		},
		{ id: 2, name: "John Doe", status: "Offline", lastSeen: "2 hours ago" },
		{ id: 3, name: "Alice Smith", status: "Online", lastSeen: "Just now" },
		{
			id: 4,
			name: "Bob Johnson",
			status: "Away",
			lastSeen: "5 minutes ago"
		}
	];

	useEffect(() => {
		async function fetchdata() {
			const res = await privateAPI("friends/");
			console.log(res.data);
		}

		fetchdata();
	});

	return (
		<Paper sx={{ bgcolor: "#2d3349", borderRadius: 3, p: 2 }}>
			<Stack spacing={2}>
				{friendsList.map((friend) => (
					<Paper
						key={friend.id}
						sx={{
							bgcolor: "#3c3f4a",
							p: 2,
							borderRadius: 2,
							"&:hover": { bgcolor: "#4c4f5a" }
						}}
					>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<Stack
								direction="row"
								spacing={2}
								alignItems="center"
							>
								<Avatar
									sx={{
										bgcolor: "#ffa3c1",
										color: "#22283a",
										fontWeight: "bold"
									}}
									src={friend.avatar || undefined}
									alt={friend.name}
								>
									{!friend.avatar && getInitials(friend.name)}
								</Avatar>
								<Box>
									<Typography
										sx={{
											color: "white",
											fontWeight: 500
										}}
									>
										{friend.name}
									</Typography>
									<Stack
										direction="row"
										spacing={1}
										alignItems="center"
									>
										<Box
											sx={{
												width: 8,
												height: 8,
												borderRadius: "50%",
												bgcolor: getStatusColor(
													friend.status
												)
											}}
										/>
										<Typography
											variant="body2"
											sx={{
												color: "#6b7280"
											}}
										>
											{friend.status} • {friend.lastSeen}
										</Typography>
									</Stack>
								</Box>
							</Stack>
							<Button
								endIcon={<SendIcon />}
								sx={{
									color: "#5bc0eb",
									"&:hover": { color: "#ff277f" }
								}}
							>
								Message
							</Button>
						</Stack>
					</Paper>
				))}
			</Stack>
		</Paper>
	);
};

export default AllFriends;
