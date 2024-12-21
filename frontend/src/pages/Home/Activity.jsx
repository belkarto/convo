import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Activity = () => {
	const activities = [
		{
			color: "#00ffbf",
			title: "12 Active Friends",
			description: "Connect with them now",
			action: "View Online"
		},
		{
			color: "#ffcf6d",
			title: "5 Pending Messages",
			description: "Catch up on conversations",
			action: "Read All"
		},
		{
			color: "#ffa3c1",
			title: "3 New Friend Requests",
			description: "Expand your network",
			action: "Review"
		}
	];
	return (
		<Paper
			sx={{
				bgcolor: "#2d3349",
				p: 3,
				borderRadius: 4
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
						bgcolor: "rgba(91, 192, 235, 0.1)",
						borderRadius: 2
					}}
				>
					<TrendingUpIcon sx={{ color: "#5bc0eb", fontSize: 30 }} />
				</Box>
				<Typography variant="h6" sx={{ color: "white" }}>
					Activity
				</Typography>
			</Stack>
			<Stack spacing={2}>
				{activities.map((activity, index) => (
					<Paper
						key={index}
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
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Box>
								<Typography
									sx={{
										color: activity.color,
										fontWeight: 500
									}}
								>
									{activity.title}
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "#6b7280" }}
								>
									{activity.description}
								</Typography>
							</Box>
							<Button
								variant="outlined"
								size="small"
								sx={{
									color: activity.color,
									borderColor: activity.color,
									"&:hover": {
										borderColor: activity.color,
										bgcolor: "rgba(255,255,255,0.05)"
									}
								}}
							>
								{activity.action}
							</Button>
						</Stack>
					</Paper>
				))}
			</Stack>
		</Paper>
	);
};

export default Activity;
