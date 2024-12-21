import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Paper, Typography } from "@mui/material";

const Feutures = () => {
	const features = [
		{
			icon: <PublicIcon fontSize="large" />,
			title: "Connect Globally",
			description:
				"Chat with friends worldwide with real-time translation"
		},
		{
			icon: <BoltIcon fontSize="large" />,
			title: "Instant Messaging",
			description: "Lightning-fast conversations with smart notifications"
		},
		{
			icon: <ShieldIcon fontSize="large" />,
			title: "Secure Chats",
			description: "Military-grade encryption for your privacy"
		}
	];
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: {
					xs: "1fr",
					sm: "1fr 1fr",
					md: "1fr 1fr 1fr"
				},
				gap: 3,
				mb: 3
			}}
		>
			{features.map((feature, index) => (
				<Paper
					key={index}
					sx={{
						bgcolor: "#2d3349",
						p: 3,
						borderRadius: 4,
						textAlign: "center",
						height: "100%"
					}}
				>
					<Box
						sx={{
							width: 60,
							height: 60,
							bgcolor: "#3c3f4a",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mx: "auto",
							mb: 2,
							color: "#5bc0eb"
						}}
					>
						{feature.icon}
					</Box>
					<Typography variant="h6" sx={{ color: "white", mb: 1 }}>
						{feature.title}
					</Typography>
					<Typography sx={{ color: "#6b7280" }}>
						{feature.description}
					</Typography>
				</Paper>
			))}
		</Box>
	);
};

export default Feutures;
