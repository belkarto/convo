import React from "react";
import ConverstionsList from "./ConverstionsList";
import ProfileDetails from "./ProfileDetails";
import Conversation from "./Conversation";

function Chat() {
	return (
		<div>
			<ConverstionsList />
			<Conversation />
			<ProfileDetails />
		</div>
	);
}

export default Chat;
