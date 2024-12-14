import { useContext, useState } from "react";
import { AuthContext } from "../constants";
import propTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../API";

const AuthProvider = ({ children }) => {
	const { Provider } = AuthContext;
	const [user, setUser] = useState({
		username: "",
		email: "",
		avatar: "",
		isAuth: false
	});
	const navigate = useNavigate();
	const location = useLocation();

	const login = async (username, password) => {
		const from = location.state?.from?.pathname || "/";
		try {
			const res = await API.post(
				"login/",
				{ username, password },
				{
					withCredentials: true
				}
			);
			console.log(res.data);

			setUser({ ...res.data, avatar: "/avatar.jpg" });
			navigate(from, { replace: true });
		} catch (err) {
			// alert("Wrong credential");
			if (!err?.response) {
				alert("Server is offline");
				return;
			} else if (err.response.status === 401) {
				alert("Wrong credential");
				return;
			} else if (err.response?.status === 400) {
				alert("Please fill in all fields");
			} else {
				alert("Login Failer");
			}
		}
	};

	const register = async (username, email, password) => {
		console.log(username + " -- " + email + " -- " + password);
		// setUser({
		// 	...user,
		// 	isAuth: true
		// });
		// navigate("/");
	};

	const logout = async () => {
		localStorage.removeItem("user");
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		setUser({
			username: "",
			email: "",
			avatar: "",
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

AuthProvider.propTypes = {
	children: propTypes.node.isRequired
};

export default AuthProvider;
