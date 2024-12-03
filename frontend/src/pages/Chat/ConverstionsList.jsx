// import propTypes from "prop-types";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { useState } from "react";
// import { Avatar } from "@mui/material";
//
// function ConversationsList({
// 	conversations,
// 	setSelectedConversation,
// 	selectedConversation
// }) {
// 	const [searchQuery, setSearchQuery] = useState("");
//
// 	const handleSearch = (e) => {
// 		e.preventDefault();
// 		console.log("Searching for:", searchQuery);
// 	};
//
// 	const handleConversationClick = (chat) => {
// 		setSelectedConversation(chat);
// 	};
//
// 	return (
// 		<div className="w-1/4 h-screen overflow-y-auto">
// 			{/* NOTE: head of conversations */}
// 			<div className="p-4 flex justify-between items-center">
// 				<h2 className="text-xl font-bold">Chats</h2>
// 			</div>
//
// 			<form
// 				onSubmit={handleSearch}
// 				className="flex items-center w-11/12 mx-auto mb-4"
// 			>
// 				<SearchOutlinedIcon className="text-slate-gray absolute ml-2 pointer-events-none" />
// 				<input
// 					type="text"
// 					placeholder="Search..."
// 					value={searchQuery}
// 					onChange={(e) => setSearchQuery(e.target.value)}
// 					className="pl-10 pr-4 py-2 w-full bg-light-black rounded-lg outline-none focus:ring-2 focus:ring-vibrant-pink"
// 				/>
// 			</form>
// 			{/* NOTE: List of conversations */}
// 			{conversations.map((chat) => (
// 				<div
// 					key={chat.id}
// 					className={`flex items-center cursor-pointer ${
// 						selectedConversation &&
// 						selectedConversation.id === chat.id
// 							? "bg-vibrant-pink" // Apply bg-vibrant-pink for the selected conversation
// 							: "bg-deep-black" // Default background
// 					}`}
// 					onClick={() => handleConversationClick(chat)}
// 				>
// 					<Avatar alt={chat.username} src={chat.avatar} />
// 					<div className="flex-grow">
// 						<div className="flex justify-between">
// 							<span className="font-semibold">{chat.name}</span>
// 							<span className="text-xs text-gray-500">
// 								{chat.lastMessageTime}
// 							</span>
// 						</div>
// 						<div className="flex justify-between">
// 							<p
// 								className={`text-sm truncate ${chat.isItOwnMessage ? "text-gray-500" : "font-semibold"}`}
// 							>
// 								{chat.lastMessage}
// 							</p>
// 							{chat.unreadMessages > 0 && (
// 								<span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">
// 									{chat.unreadMessages}
// 								</span>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
//
// ConversationsList.propTypes = {
// 	conversations: propTypes.array.isRequired,
// 	setSelectedConversation: propTypes.func.isRequired,
// 	selectedConversation: propTypes.object
// };
//
// export default Conv

import React, { useState } from "react";
import {
	Search as SearchIcon,
	MoreVert as MoreVertIcon,
	Circle as StatusIcon
} from "@mui/icons-material";

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
		<div className="bg-[#1E1E1E] text-white w-80 h-screen overflow-hidden flex flex-col">
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
              transition-all duration-200 
              ${
					selectedConversation && selectedConversation.id === chat.id
						? "bg-[#8E2DE2] bg-opacity-50 border-l-4 border-[#8E2DE2]"
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

export default ConversationsList;
