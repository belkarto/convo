import API from "../API";
import { REFRESH } from "../constants";
import useAuth from "./useAuth";

const useRefreshToken = () => {
	const { setUser } = useAuth();

	const refresh = async () => {
		try {
			const response = await API.post(
				REFRESH,
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
			return {
				token: response.data.access,
				resStatus: response.status
			};
		} catch (error) {
			console.log("Error refreshing token:");
			return {
				token: null,
				resStatus: error.response.status
			};
		}

		// const response = await API.post(
		// 	"refresh/",
		// 	{},
		// 	{
		// 		withCredentials: true
		// 	}
		// );
		// console.log("Refresh token response:", response.data);

		// setUser((prev) => {
		// 	return {
		// 		...prev,
		// 		isAuth: true,
		// 		access: response.data.access
		// 	};
		// });
		// return response.data.access;
	};

	return refresh;
};

export default useRefreshToken;
