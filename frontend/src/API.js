import axios from "axios";
import { ACCESS_TOKEN, API_ENDPOINT } from "./constants";

const API = axios.create({
	baseURL: API_ENDPOINT
});

export const PrivateAPI = axios.create({
	baseURL: API_ENDPOINT,
	headers: {
		"Content-Type": "application/json"
	},
	withCredentials: true
});

export default API;
// API.interceptors.request.use(
// 	(config) => {
// 		const token = localStorage.getItem(ACCESS_TOKEN);
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );
