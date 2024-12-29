import { createContext, useContext } from "react";

export const AuthContext = createContext(null);
export const SocketContext = createContext(null);

export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh";

//endpoints
export const API_ENDPOINT = "http://localhost:8000/api";

export const ALL_FRIENDS = "friends/";
export const FRIEND_REQUESTS = "friends/requests/";
export const FRIEND_SEARCH = "friends/search/";
export const FRIEND_SUGGESTIONS = "friends/suggestions/";
