import propTypes from "prop-types";

function Conversation({ selectedConversation }) {
	return (
		<div className="w-1/2">
			{selectedConversation ? (
				selectedConversation.name
			) : (
				<div className="flex items-center justify-center h-full text-3xl text-gray-500">
					Select a chat to start messaging
				</div>
			)}
		</div>
	);
}

Conversation.propTypes = {
	selectedConversation: propTypes.object
};

export default Conversation;
