// src/components/UserProfile.js
import React from "react";
import { useUser } from "../context/userContext";
import LogoutButton from "./LogoutButton";

function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <LogoutButton />
      {/* Display user statistics and other profile information here */}
    </div>
  );
}

export default UserProfile;
