import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import usePrivateAPI from "../../hooks/usePrivateAPI";
import useWebSocket from "../../hooks/useWebSocket.js";

function Home() {
	const privateAPI = usePrivateAPI();
	const [something, setSomething] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { socket } = useWebSocket();
	useEffect(() => {
		const makeReq = async () => {
			try {
				const res = await privateAPI.get("test/");
				console.log(res.data);
				setSomething(res.data.this_res);
			} catch (err) {
				console.error(err);
				navigate("/auth", { state: { from: location }, replace: true });
			}
		};

		makeReq();

		if (socket) {
			socket.send(JSON.stringify({ message: "hello from me me" }));
		}
	});
	return (
		<div>
			Home
			<p>{something}</p>
		</div>
	);
}

export default Home;
