import React, { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "./socketContext";

const OnlineUsersContext = createContext();
const OnlineUsersProvider = ({ children }) => {
  const { socket } = useSocket();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [socket]);
  return (
    <OnlineUsersContext.Provider value={{ onlineUsers, setOnlineUsers }}>
      {children}
    </OnlineUsersContext.Provider>
  );
};

const useOnlineUsers = () => useContext(OnlineUsersContext);
export { useOnlineUsers, OnlineUsersProvider };
