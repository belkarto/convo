import { useContext } from "react";
import { AuthContext } from "../constants";

const useAuth = () => useContext(AuthContext);

export default useAuth;
