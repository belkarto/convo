import React, { useEffect, useState } from "react";
import ConverstionsList from "./ConverstionsList";
import ProfileDetails from "./ProfileDetails";
import Conversation from "./Conversation";

function Chat() {
	const [conversations, setConversations] = useState([]);
	const [selectedConversation, setSelectedConversation] = useState(null);

	useEffect(() => {
		const mockData = [
			{
				id: 1,
				name: "John Doe",
				status: "online",
				lastMessage: "heyyy long time no see",
				isItOwnMessage: false,
				lastMessageTime: "12:00pm",
				unreadMessages: 2
			},
			{
				id: 2,
				name: "Jane Doe",
				status: "offline",
				lastMessage: "Hello, how are you?",
				isItOwnMessage: false,
				lastMessageTime: "2:00pm",
				unreadMessages: 1
			},
			{
				id: 3,
				name: "John Smith",
				status: "online",
				lastMessage: "I am ready to go",
				isItOwnMessage: true,
				lastMessageTime: "3:00pm",
				unreadMessages: 0
			},
			{
				id: 4,
				name: "Jane Smith",
				status: "offline",
				lastMessage: "what's up?",
				isItOwnMessage: false,
				lastMessageTime: "1:00am",
				unreadMessages: 23
			}
		];

		setConversations(mockData);
	}, []);

	return (
		<div className="flex h-screen">
			<ConverstionsList
				conversations={conversations}
				setSelectedConversation={setSelectedConversation}
			/>
			<Conversation selectedConversation={selectedConversation} />
			<ProfileDetails />
		</div>
	);
}

export default Chat;
