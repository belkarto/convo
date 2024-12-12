import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
	const { user, setUser, logout } = useAuth();
	const location = useLocation();

	return user?.isAuth ? (
		<Outlet />
	) : (
		<Navigate to="/auth" state={{ from: location }} replace />
	);
}

export default PrivateRoute;

// useEffect(() => {
// 	checkAuth();
// }, []);
//
// const checkAuth = async () => {
// 	const token = localStorage.getItem(ACCESS_TOKEN);
//
// 	if (!token) {
// 		await handleTokenRefresh();
// 		return;
// 	}
//
// 	try {
// 		const decoded = jwtDecode(token);
// 		const tokenExpiration = decoded.exp;
// 		const now = Date.now() / 1000;
//
// 		if (tokenExpiration < now) {
// 			await handleTokenRefresh();
// 		} else {
// 			setUser({
// 				...user,
// 				isAuth: true
// 			});
// 		}
// 	} catch (e) {
// 		await handleTokenRefresh();
// 	}
// };
//
// const handleTokenRefresh = async () => {
// 	const refreshToken = localStorage.getItem(REFRESH_TOKEN);
//
// 	if (!refreshToken) {
// 		setUser({
// 			...user,
// 			isAuth: false
// 		});
// 		return <Navigate to="/auth" />;
// 	}
//
// 	try {
// 	} catch (e) {
// 		setUser({
// 			...user,
// 			isAuth: false
// 		});
// 		logout();
// 	}
// };
//
