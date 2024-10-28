// src/components/UserManagement.js
import React from "react";
import { useUser } from "../context/userContext";
// import LogoutButton from "./LogoutButton";
import Navbar from "./Navbar";
import Sidebar from "../Global/Sidebar/Sidebar";
import StatsCard from "./StatsCard";
// import Map from "./Map";
function UserManagement() {
  const { user } = useUser();

  if (user.role !== "Admin") {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      {/* <h1>User Management</h1>
      <p>Only admin can see this page</p>
      <LogoutButton /> */}
      {/* Admin functionalities like add, edit, delete users */}
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: "20px" }}>
          <Navbar />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <StatsCard title="Emails Sent" value="12,361" percentage="+14%" />
            <StatsCard
              title="Sales Obtained"
              value="431,225"
              percentage="+21%"
            />
            <StatsCard title="New Clients" value="32,441" percentage="+5%" />
            <StatsCard
              title="Traffic Received"
              value="1,325,134"
              percentage="+43%"
            />
          </div>
          {/* <LineChart /> */}
          {/* <BarChart > */}
          {/* <PieChart /> */}
          {/* <Map /> */}
        </main>
      </div>
    </div>
  );
}

export default UserManagement;
