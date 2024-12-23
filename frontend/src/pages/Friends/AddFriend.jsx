import { Box, Typography, Button, Paper, Stack, Avatar } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { getInitials } from "./utils";

const AddFriend = () => {
	const suggestedFriends = [
		{ id: 1, name: "David Miller", mutualFriends: 8 },
		{ id: 2, name: "Sophie Brown", mutualFriends: 4 },
		{ id: 3, name: "James Wilson", mutualFriends: 6 }
	];

	return (
		<Paper sx={{ bgcolor: "#2d3349", borderRadius: 3, p: 2 }}>
			<Typography variant="h6" sx={{ color: "white", mb: 2 }}>
				Suggested Friends
			</Typography>
			<Stack spacing={2}>
				{suggestedFriends.map((suggestion) => (
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
									<Typography
										variant="body2"
										sx={{ color: "#6b7280" }}
									>
										{suggestion.mutualFriends} mutual
										friends
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
