import propTypes from "prop-types";

function NoChatSelected() {
	return (
		<div className="flex items-center justify-center h-full text-3xl text-gray-500">
			Select a chat to start messaging
		</div>
	);
}

function ConversationData({ chat }) {
	return (
		<div className="flex">
			<img
				src={chat.avatar}
				alt={chat.name}
				className="w-12 h-12 rounded-full object-cover"
			/>

			<div className="flex-grow overflow-hidden">
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<h3 className="text-lg font-medium truncate">
							{chat.name}
						</h3>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-sm truncate ">{chat.status}</p>
				</div>
			</div>
		</div>
	);
}

ConversationData.propTypes = {
	chat: propTypes.object
};

function Conversation({ selectedConversation }) {
	return (
		<div className="w-1/2">
			{selectedConversation ? (
				<ConversationData chat={selectedConversation} />
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
