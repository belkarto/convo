import propTypes from "prop-types";
import { useState } from "react";

function NoChatSelected() {
	return (
		<div className="flex items-center justify-center h-full text-xl sm:text-3xl text-gray-500 p-4 text-center">
			Select a chat to start messaging
		</div>
	);
}

function ConversationData({ chat }) {
	return (
		<div className="flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 bg-deep-black text-white">
			<img
				src={chat.avatar}
				alt={chat.name}
				className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
			/>
			<div className="flex-grow overflow-hidden">
				<h3 className="text-base sm:text-lg font-medium truncate">
					{chat.name}
				</h3>
				<p className="text-xs sm:text-sm text-gray-400 truncate">
					{chat.status}
				</p>
			</div>
		</div>
	);
}

ConversationData.propTypes = {
	chat: propTypes.object.isRequired
};

function Message({ message, isOwnMessage }) {
	return (
		<>
			<div
				className={`p-2 sm:p-3 max-w-[80%] w-fit ${
					isOwnMessage
						? "bg-vibrant-pink text-white ml-auto rounded-xl rounded-br-none"
						: "bg-deep-black text-white mr-auto rounded-xl rounded-bl-none"
				}`}
				style={{
					wordBreak: "break-word", // Breaks words that are too long
					overflowWrap: "anywhere" // Ensures breaking even in extreme cases
				}}
			>
				<p className="text-sm sm:text-base whitespace-pre-wrap break-words">
					{message}
				</p>
			</div>
		</>
	);
}

Message.propTypes = {
	message: propTypes.string.isRequired,
	isOwnMessage: propTypes.bool
};

function MessagesList({ messages }) {
	return (
		<div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 mb-14 flex flex-col">
			{messages.map((msg) => (
				<Message
					key={msg.id}
					message={msg.text}
					isOwnMessage={msg.isOwn}
				/>
			))}
		</div>
	);
}

MessagesList.propTypes = {
	messages: propTypes.array.isRequired
};

function InputMessage({ setMessages }) {
	const [newMessage, setNewMessage] = useState("");
	const handleSendMessage = (e) => {
		e.preventDefault();
		if (newMessage.trim() !== "") {
			setMessages((prevMessages) => [
				...prevMessages,
				{ id: prevMessages.length + 1, text: newMessage, isOwn: true }
			]);
			setNewMessage("");
		}
	};
	return (
		<form onSubmit={handleSendMessage} className="p-2 sm:p-4 flex">
			<input
				type="text"
				placeholder="Type a message..."
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				className="flex-grow p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-deep-black text-white focus:outline-none focus:ring-2 focus:ring-vibrant-pink transition"
			/>
			<button
				type="submit"
				className="ml-2 px-3 py-2 sm:px-4 sm:py-3 bg-vibrant-pink rounded-lg text-white text-sm sm:text-base hover:bg-soft-pink transition"
			>
				Send
			</button>
		</form>
	);
}

InputMessage.propTypes = {
	setMessages: propTypes.func.isRequired
};

function Conversation({ selectedConversation }) {
	const [messages, setMessages] = useState([
		{ id: 1, text: "Hi there!", isOwn: false },
		{ id: 2, text: "Hello!", isOwn: true },
		{
			id: 3,
			text: "ohhh do you know what happened today, they are going to launch a new product on the market, it's going to be amazing, I'm so excited, I can't wait to see it, do you know what it is?",
			isOwn: false
		},
		{
			id: 4,
			text: "I'm sorry, I don't know, but it would be good to know, I'm excited too to see it, i wanna go to the market to see it, it's going to be amazing",
			isOwn: true
		},
		{
			id: 5,
			text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			isOwn: false
		},
		{
			id: 6,
			text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
			isOwn: true
		}
	]);
	return (
		<div className="flex flex-1 flex-col h-screen max-h-screen text-white border-x border-deep-black">
			{selectedConversation ? (
				<>
					<ConversationData chat={selectedConversation} />
					<MessagesList messages={messages} />
					<div className="sticky bottom-0 bg-deep-black">
						<InputMessage setMessages={setMessages} />
					</div>
				</>
			) : (
				<NoChatSelected />
			)}
		</div>
	);
}

Conversation.propTypes = {
	selectedConversation: propTypes.object
};

export default Conversation;
