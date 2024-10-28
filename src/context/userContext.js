// src/context/UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: "Guest", name: "Guest" });

  const login = (username, password, role) => {
    if (username === "admin" && password === "adminpass" && role === "Admin") {
      setUser({ role: "Admin", name: "Admin User" });
    } else if (
      username === "user" &&
      password === "userpass" &&
      role === "User"
    ) {
      setUser({ role: "User", name: "Standard User" });
    } else {
      alert("Incorrect username or password");
      //   setUser({ role: "Guest", name: "Guest" });
      return;
    }
  };

  const logout = () => {
    setUser({ role: "Guest", name: "Guest" }); // Reset user to default state
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
