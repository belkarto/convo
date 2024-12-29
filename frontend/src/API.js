import axios from "axios";
import { API_ENDPOINT } from "./constants";

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
