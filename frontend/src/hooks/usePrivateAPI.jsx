import { PrivateAPI } from "../API";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const usePrivateAPI = () => {
	const refresh = useRefreshToken();
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = window.location.pathname;

	useEffect(() => {
		const reqInterceptor = PrivateAPI.interceptors.request.use(
			(config) => {
				if (!config.headers.Authorization) {
					config.headers.Authorization = `Bearer ${user?.access}`;
				}
				return config;
			},
			(err) => {
				Promise.reject(err);
			}
		);

		const respInterceptor = PrivateAPI.interceptors.response.use(
			(response) => {
				return response;
			},
			async (error) => {
				// NOTE:
				// when the access token expires this async func will be trigerd
				const originalRequest = error?.config;
				if (error.response.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;
					const { token, resStatus } = await refresh();
					console.log("Refresh token response:", token, resStatus);
					if (resStatus !== 200) {
						// <Navigate to="/auth" state={{ from: location }} replace />
						navigate(
							"/auth",
							{ replace: true },
							{ state: { from: location } }
						);
					}
					originalRequest.headers.Authorization = `Bearer ${token}`;
					return PrivateAPI(originalRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			PrivateAPI.interceptors.response.eject(respInterceptor);
			PrivateAPI.interceptors.request.eject(reqInterceptor);
		};
	}, [user, refresh]);

	return PrivateAPI;
};

export default usePrivateAPI;
