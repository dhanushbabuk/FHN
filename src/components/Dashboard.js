// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        <Link to="/login/admin">
          <button>Login as Admin</button>
        </Link>
        <Link to="/login/user">
          <button>Login as User</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
