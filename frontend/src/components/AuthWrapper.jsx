import { useContext, useState } from "react";
import { AuthContext } from "../constants";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
	const { Provider } = AuthContext;
	const [user, setUser] = useState({
		username: "",
		email: "",
		avatar: "/avatar.jpg",
		isAuth: false
	});
	const navigate = useNavigate();

	const login = async (email, password) => {
		const data = {
			user: {
				username: email.split("@")[0],
				email: email
			},
			accessToken: "1234567890",
			refreshToken: "0987654321"
		};
		localStorage.setItem("user", JSON.stringify(data.user));
		localStorage.setItem("accessToken", data.accessToken);
		localStorage.setItem("refreshToken", data.refreshToken);
		setUser({
			...data.user,
			isAuth: true
		});
		navigate("/");
	};

	const register = async (fullName, email, password) => {
		const data = {
			user: {
				username: email.split("@")[0],
				email: email
			},
			accessToken: "123456789",
			refreshToken: "987654321"
		};

		localStorage.setItem("user", JSON.stringify(data.user));
		localStorage.setItem("accessToken", data.accessToken);
		localStorage.setItem("refreshToken", data.refreshToken);
		setUser({
			...data.user,
			isAuth: true
		});
		navigate("/");
	};

	const logout = async () => {
		localStorage.removeItem("user");
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		setUser({
			...user,
			isAuth: false
		});
		navigate("/auth");
	};

	return (
		<Provider value={{ user, setUser, login, register, logout }}>
			{children}
		</Provider>
	);
};

AuthWrapper.propTypes = {
	children: propTypes.node.isRequired
};

export default AuthWrapper;
