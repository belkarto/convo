import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth.js";
import { SocketContext } from "../constants";

const WebSocketProvider = () => {
	const [socket, setSocket] = useState(null);
	const { Provider } = SocketContext;
	const { user } = useAuth();
	useEffect(() => {
		const sock = new WebSocket(
			`ws://localhost:8000/ws/chat/?au=${user?.access}`
		);

		sock.onopen = () => {
			console.log("connection established");
		};

		sock.onclose = (event) => {
			console.log("connection closed");
		};

		setSocket(sock);

		return () => {
			sock.close();
		};
	}, []);
	return (
		<Provider value={{ socket }}>
			<Outlet />
		</Provider>
	);
};

export default WebSocketProvider;
