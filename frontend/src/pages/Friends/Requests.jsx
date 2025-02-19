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
import { useEffect, useState } from "react";
import { FRIEND_REQUESTS } from "../../constants";
import usePrivateAPI from "../../hooks/usePrivateAPI";

const Requests = () => {
	const privateAPI = usePrivateAPI();
	const [friendRequests, setFriendRequests] = useState([]);

	const removeFromList = (id) => {
		console.log(id);
		setFriendRequests(
			friendRequests.filter((request) => request.id !== id)
		);
	};
	const acceptRequest = async (url, id) => {
		try {
			const res = await privateAPI.put(url);
			if (res.data.success) {
				removeFromList(id);
			}
			console.log("reeeees", res.data);
		} catch (error) {
			// do nothing
		}
	};

	const rejectRequest = async (url, id) => {
		try {
			const res = await privateAPI.put(url);
			if (res.data.success) {
				removeFromList(id);
			}
			console.log(res.data);
		} catch (error) {
			// do nothing
		}
	};

	useEffect(() => {
		async function fetchRequests() {
			const res = await privateAPI(FRIEND_REQUESTS);
			console.log(res.data);
			setFriendRequests(res.data);
		}

		fetchRequests();

		return () => {};
	}, [privateAPI]);

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
									onClick={async () =>
										await acceptRequest(
											request.acceptRequest,
											request.id
										)
									}
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
									onClick={() =>
										rejectRequest(
											request.rejectRequest,
											request.id
										)
									}
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
