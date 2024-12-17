import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { SocketContext } from "../constants";

const WebSocketProvider = () => {
	const [socket, setSocket] = useState(null);
	const { Provider } = SocketContext;
	useEffect(() => {
		const sock = io("ws://localhost:8000/ws/chat");

		setSocket(sock);

		return () => {
			sock.disconnect();
		};
	}, []);
	return (
		<Provider value={{ socket }}>
			<Outlet />
		</Provider>
	);
};

export default WebSocketProvider;
