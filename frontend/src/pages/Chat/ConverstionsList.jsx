import propTypes from "prop-types";

function ConverstionsList({ conversations, setSelectedConversation }) {
	return (
		<div className="w-1/4  h-screen overflow-y-auto">
			<div className="p-4 border-b flex justify-between items-center">
				<h2 className="text-xl font-bold">Chats</h2>
			</div>
			{conversations.map((chat) => (
				<div
					key={chat.id}
					className={`p-4 flex items-center hover:bg-vibrant-pink cursor-pointer 
            ${chat.unreadMessages > 0 ? "bg-blue-50" : ""}`}
					onClick={() => setSelectedConversation(chat)}
				>
					<div className="flex-grow">
						<div className="flex justify-between">
							<span className="font-semibold">{chat.name}</span>
							<span className="text-xs text-gray-500">
								{chat.lastMessageTime}
							</span>
						</div>
						<div className="flex justify-between">
							<p
								className={`text-sm truncate ${chat.isItOwnMessage ? "text-gray-500" : "font-semibold"}`}
							>
								{chat.lastMessage}
							</p>
							{chat.unreadMessages > 0 && (
								<span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">
									{chat.unreadMessages}
								</span>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

ConverstionsList.propTypes = {
	conversations: propTypes.array.isRequired,
	setSelectedConversation: propTypes.func.isRequired
};

export default ConverstionsList;
