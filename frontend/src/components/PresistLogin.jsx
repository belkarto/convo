import { Outlet } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const PresistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const { user } = useAuth();

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};

		!user?.access ? verifyRefreshToken() : setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log(`isLoading ${isLoading}`);
		console.log(`aT: ${JSON.stringify(user?.access)}`);
	}, [isLoading]);

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PresistLogin;
