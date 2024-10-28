// UserManagement.js
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "../Global/Sidebar/Sidebar";
// import AdminDashboard from "./StatsCard";
import AdminPage from "../AdminManagementPage.js/AdminPage";
import ManageUsers from "../Users/ManageUsers";
import Navbar from "../Global/Navbar/Navbar";
// Import other necessary components

function AdminManagement() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Navbar />
        <Routes>
          <Route index element={<AdminPage />} />
          <Route path="manage-users" element={<ManageUsers />} />
          {/* Define other paths as necessary */}
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminManagement;
