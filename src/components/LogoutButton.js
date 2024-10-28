// src/components/LogoutButton.js
import React from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="text-red-600" onClick={handleLogout}>
      Logout
    </div>
  );
}

export default LogoutButton;
