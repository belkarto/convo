import {
	Box,
	Typography,
	Paper,
	Stack,
	Avatar,
	IconButton
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { getInitials } from "./utils";

const Requests = () => {
	const friendRequests = [
		{ id: 1, name: "Emma Wilson", mutualFriends: 3 },
		{ id: 2, name: "Mike Thompson", mutualFriends: 5 },
		{ id: 3, name: "Lisa Anderson", mutualFriends: 2 }
	];

	return (
		<Paper sx={{ bgcolor: "#2d3349", borderRadius: 3, p: 2 }}>
			<Stack spacing={2}>
				{friendRequests.map((request) => (
					<Paper
						key={request.id}
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
									{getInitials(request.name)}
								</Avatar>
								<Box>
									<Typography
										sx={{
											color: "white",
											fontWeight: 500
										}}
									>
										{request.name}
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "#6b7280" }}
									>
										{request.mutualFriends} mutual friends
									</Typography>
								</Box>
							</Stack>
							<Stack direction="row" spacing={1}>
								<IconButton
									sx={{
										color: "#00ffbf",
										"&:hover": {
											bgcolor: "rgba(0, 255, 191, 0.1)"
										}
									}}
								>
									<CheckIcon />
								</IconButton>
								<IconButton
									sx={{
										color: "#ff277f",
										"&:hover": {
											bgcolor: "rgba(255, 39, 127, 0.1)"
										}
									}}
								>
									<CloseIcon />
								</IconButton>
							</Stack>
						</Stack>
					</Paper>
				))}
			</Stack>
		</Paper>
	);
};

export default Requests;
