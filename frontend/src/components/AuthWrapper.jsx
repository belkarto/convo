import { useState } from "react";
import { AuthContext } from "../constants";
import propTypes from "prop-types";

const AuthWrapper = ({ children }) => {
	const { Provider } = AuthContext;
	const [user, setUser] = useState({
		username: "john_doe",
		email: "john_doe@mail.com",
		avatar: "/avatar.jpg",
		isAuth: true
	});

	return <Provider value={{ user, setUser }}>{children}</Provider>;
};

AuthWrapper.propTypes = {
	children: propTypes.node.isRequired
};

export default AuthWrapper;
