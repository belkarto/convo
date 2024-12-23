export const getInitials = (name) => {
	return name
		.split(" ")
		.map((n) => n[0])
		.join("");
};

export const getStatusColor = (status) => {
	switch (status) {
		case "Online":
			return "#00ffbf";
		case "Away":
			return "#ffcf6d";
		default:
			return "#6b7280";
	}
};
