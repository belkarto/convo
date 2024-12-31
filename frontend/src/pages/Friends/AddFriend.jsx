import { Box, Typography, Button, Paper, Stack, Avatar } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { getInitials } from "./utils";
import { useEffect, useState } from "react";
import usePrivateAPI from "../../hooks/usePrivateAPI";
import { FRIEND_SEARCH, FRIEND_SUGGESTIONS } from "../../constants";
import useDebounce from "../../hooks/useDebounce";

const AddFriend = ({ searchQuery }) => {
	const [listUsers, setListUsers] = useState([]);
	const privateAPI = usePrivateAPI();
	const debouncedQuery = useDebounce(searchQuery, 1000);

	useEffect(() => {
		const fetchSuggestedFriends = async () => {
			try {
				const response = await privateAPI.get(FRIEND_SUGGESTIONS);
				setListUsers(response.data);
			} catch (error) {
				console.error("Error fetching suggestions:", error);
			}
		};

		const fetchUsers = async () => {
			try {
				if (!debouncedQuery) return;
				const response = await privateAPI.get(FRIEND_SEARCH, {
					params: { username: debouncedQuery }
				});
				setListUsers(response.data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		// Fetch based on debounced query
		if (debouncedQuery) fetchUsers();
		else fetchSuggestedFriends();
	}, [debouncedQuery, privateAPI]);
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
			<Typography variant="h6" sx={{ color: "white", mb: 2 }}>
				Suggested Friends
			</Typography>
			<Stack spacing={2}>
				{listUsers.map((suggestion) => (
					<Paper
						key={suggestion.id}
						sx={{
							bgcolor: "#3c3f4a",
							p: 2,
							borderRadius: 2
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
								>
									{getInitials(suggestion.name)}
								</Avatar>
								<Box>
									<Typography
										sx={{
											color: "white",
											fontWeight: 500
										}}
									>
										{suggestion.name}
									</Typography>
								</Box>
							</Stack>
							<Button
								startIcon={<PersonAddIcon />}
								sx={{
									color: "#5bc0eb",
									"&:hover": { color: "#ff277f" }
								}}
							>
								Add Friend
							</Button>
						</Stack>
					</Paper>
				))}
			</Stack>
		</Paper>
	);
};

export default AddFriend;
