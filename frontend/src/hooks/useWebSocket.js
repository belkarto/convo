import { useContext } from "react";
import { SocketContext } from "../constants";

const useWebSocket = () => useContext(SocketContext);

export default useWebSocket;
