// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/userContext";
import Login from "./components/Login";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login/admin" element={<Login role="Admin" />} />
          <Route path="/login/user" element={<Login role="User" />} />
          <Route path="/admin" element={<UserManagement />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
