import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth.js";
import { SocketContext } from "../constants";

const WebSocketProvider = () => {
	const [socket, setSocket] = useState(null);
	const { Provider } = SocketContext;
	const { user } = useAuth();
	useEffect(() => {
		const sock = new WebSocket(`ws://localhost:8000/?au=${user?.access}`);

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
