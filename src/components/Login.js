// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

function Login({ role }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password, role);
    if (user.role !== "Guest") {
      navigate(role === "Admin" ? "/admin" : "/profile");
    }
  };

  return (
    <div>
      <h1>Login as {role}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
