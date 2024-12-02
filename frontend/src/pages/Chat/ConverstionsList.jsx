import { useState } from "react";
import {
	Search as SearchIcon,
	MoreVert as MoreVertIcon,
	Circle as StatusIcon
} from "@mui/icons-material";
import propTypes from "prop-types";

function ConversationsList({
	conversations,
	setSelectedConversation,
	selectedConversation
}) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	const handleConversationClick = (chat) => {
		setSelectedConversation(chat);
	};

	return (
		<div className=" text-white w-80 h-screen overflow-hidden flex flex-col">
			<div className="p-4 flex justify-between items-center border-b border-[#333]">
				<h2 className="text-2xl font-semibold text-[#E0E0E0]">Chats</h2>
				<button className="text-gray-400 hover:text-white transition-colors">
					<MoreVertIcon />
				</button>
			</div>

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
              focus:outline-none focus:ring-2 focus:ring-[#8E2DE2] 
              placeholder-gray-500 transition-all duration-300"
					/>
				</div>
			</form>

			<div className="flex-grow overflow-y-auto">
				{conversations.map((chat) => (
					<div
						key={chat.id}
						onClick={() => handleConversationClick(chat)}
						className={`
              flex items-center p-4 cursor-pointer 
              transition-all duration-200  bg-deep-black
              ${
					selectedConversation && selectedConversation.id === chat.id
						? "bg-deep-black bg-opacity-50 border-l-4 border-[#8E2DE2]"
						: "hover:bg-[#2A2A2A]"
				}
            `}
					>
						<div className="relative mr-4">
							<img
								src={chat.avatar}
								alt={chat.name}
								className="w-12 h-12 rounded-full object-cover"
							/>
							{chat.status === "online" && (
								<StatusIcon
									className="absolute bottom-0 right-0 text-green-500 text-sm bg-[#1E1E1E] rounded-full"
									style={{ fontSize: "16px" }}
								/>
							)}
						</div>

						<div className="flex-grow overflow-hidden">
							<div className="flex justify-between items-center">
								<div className="flex items-center space-x-2">
									<h3 className="text-lg font-medium truncate">
										{chat.name}
									</h3>
									{chat.unreadMessages > 0 && (
										<span className="bg-[#8E2DE2] text-white rounded-full px-2 py-0.5 text-xs">
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
				))}
			</div>
		</div>
	);
}

ConversationsList.propTypes = {
	conversations: propTypes.object,
	setSelectedConversation: propTypes.func,
	selectedConversation: propTypes.object
};

export default ConversationsList;
