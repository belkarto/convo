import { useState } from "react";
import {
	Search as SearchIcon,
	MoreVert as MoreVertIcon,
	Circle as StatusIcon
} from "@mui/icons-material";
import propTypes from "prop-types";

function ConversationItem({ chat, handleConversationClick, isSelected }) {
	return (
		<div
			key={chat.id}
			onClick={() => handleConversationClick(chat)}
			className={`
              flex items-center p-4 cursor-pointer 
              transition-all duration-200  hover:bg-soft-pink
                ${isSelected ? "bg-vibrant-pink" : "bg-deep-black"}
            `}
		>
			<div className="relative mr-4">
				<img
					src={chat.avatar}
					alt={chat.name}
					className="w-12 h-12 rounded-full object-cover"
				/>
				<StatusIcon
					className={`absolute bottom-0 right-0 ${chat.status === "online" ? "text-vibrant-mint-green" : "text-warm-yellow"} text-sm  rounded-full`}
					style={{ fontSize: "16px" }}
				/>
			</div>

			<div className="flex-grow overflow-hidden">
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<h3 className="text-lg font-medium truncate">
							{chat.name}
						</h3>
						{chat.unreadMessages > 0 && (
							<span className="bg-vibrant-pink  rounded-full px-2 py-0.5 text-xs">
								{chat.unreadMessages}
							</span>
						)}
					</div>
					<span className="text-xs text-gray-400">
						{chat.lastMessageTime}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<p
						className={`
                  text-sm truncate 
                  ${chat.isItOwnMessage ? "text-gray-400 italic" : "text-gray-300"}
                `}
					>
						{chat.isItOwnMessage ? "You: " : ""}
						{chat.lastMessage}
					</p>
				</div>
			</div>
		</div>
	);
}

ConversationItem.propTypes = {
	chat: propTypes.object,
	handleConversationClick: propTypes.func,
	isSelected: propTypes.bool
};

function ConversationsList({
	conversations,
	setSelectedConversation,
	selectedConversation,
	setConversations
}) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	const handleConversationClick = async (chat) => {
		setSelectedConversation(chat);

		const updatedConversations = conversations.map((conv) =>
			conv.id === chat.id ? { ...conv, unreadMessages: 0 } : conv
		);
		setConversations(updatedConversations);

		// NOTE: Mark the conversation as read
		// await markConversationAsRead(chat.id);

		console.log("Selected conversation:", chat);
	};

	return (
		<div className=" text-white w-1/3 max-w-80 h-screen overflow-hidden flex flex-col">
			<div className="p-4 flex justify-between items-center border-b border-[#333]">
				<h2 className="text-2xl font-semibold text-[#E0E0E0]">Chats</h2>
				<button className="text-gray-400 hover:text-white transition-colors">
					<MoreVertIcon />
				</button>
			</div>

			{/* NOTE: Search bar */}
			<form
				onSubmit={handleSearch}
				className="p-4 border-b border-[#333]"
			>
				<div className="relative">
					<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
					<input
						type="text"
						placeholder="Search conversations..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] rounded-lg text-white 
              focus:outline-none focus:ring-2 focus:ring-vibrant-pink
              placeholder-gray-500 transition-all duration-300"
					/>
				</div>
			</form>

			<div className="flex-grow overflow-y-auto">
				{conversations.map((chat) => (
					<ConversationItem
						key={chat.id}
						chat={chat}
						handleConversationClick={handleConversationClick}
						isSelected={selectedConversation?.id === chat.id}
					/>
				))}
			</div>
		</div>
	);
}

ConversationsList.propTypes = {
	conversations: propTypes.array,
	setSelectedConversation: propTypes.func,
	selectedConversation: propTypes.object,
	setConversations: propTypes.func
};

export default ConversationsList;
