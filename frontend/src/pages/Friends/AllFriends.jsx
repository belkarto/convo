import { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Stack, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getInitials, getStatusColor } from "./utils";
import usePrivateAPI from "../../hooks/usePrivateAPI";
import { ALL_FRIENDS } from "../../constants";

const AllFriends = ({ searchQuery }) => {
	const privateAPI = usePrivateAPI();
	const [friendsList, setFriendsList] = useState([]);
	const [apiFriendsList, setApiFriendsList] = useState([]);

	useEffect(() => {
		async function fetchFriends() {
			const res = await privateAPI(ALL_FRIENDS);
			console.log(res.data);
			setApiFriendsList(res.data);
			setFriendsList(res.data);
		}

		fetchFriends();
		return () => {};
	}, [privateAPI]);

	useEffect(() => {
		console.log("Search query changed to: ", searchQuery);
		// Filter the friends list based on the search query
		const filteredFriends = apiFriendsList.filter((friend) =>
			friend.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFriendsList(filteredFriends);
	}, [searchQuery, apiFriendsList]);

	return (
		<Paper
			sx={{
				bgcolor: "#2d3349",
				borderRadius: 3,
				p: 2,
				overflow: "auto"
			}}
			className="h-screen"
		>
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
