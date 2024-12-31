import { createContext, useContext } from "react";

export const AuthContext = createContext(null);
export const SocketContext = createContext(null);

export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh";

//endpoints
export const API_ENDPOINT = "http://localhost:8000/";

export const LOGIN = "api/login/";
export const SIGNUP = "api/signup/";
export const LOGOUT = "api/logout/";
export const REFRESH = "api/refresh/";

export const ALL_FRIENDS = "api/friends/";
export const FRIEND_REQUESTS = "api/friends/requests/";
export const FRIEND_SEARCH = "api/friends/search/";
export const FRIEND_SUGGESTIONS = "api/friends/suggestions/";
