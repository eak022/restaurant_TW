import React, { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser);

  const login = (user) => setUser(user);
  
  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  function getUser() {
    try {
      const temp = localStorage.getItem("user");
      if (temp) {
        return JSON.parse(temp);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    }
    return null;
  }

  useEffect(() => {
    try {
      const temp = JSON.stringify(user);
      localStorage.setItem("user", temp);
    } catch (error) {
      console.error("Failed to stringify user for localStorage", error);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
