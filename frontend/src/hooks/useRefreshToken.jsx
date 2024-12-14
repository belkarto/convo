import API from "../API";
import useAuth from "./useAuth";

const useRefreshToken = () => {
	const { setUser } = useAuth();

	const refresh = async () => {
		const response = await API.post(
			"refresh/",
			{},
			{
				withCredentials: true
			}
		);
		console.log("Refresh token response:", response.data);

		setUser((prev) => {
			return {
				...prev,
				isAuth: true,
				access: response.data.access
			};
		});
		return response.data.access;
	};

	return refresh;
};

export default useRefreshToken;
