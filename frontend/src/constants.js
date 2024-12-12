import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh";

//endpoints
export const API_ENDPOINT = "http://localhost:8000/api";
