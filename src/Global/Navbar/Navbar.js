// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import UserProfileDropdown from "./UserProfileDashboard";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <InputBase
          startAdornment={<SearchIcon />}
          placeholder="Search..."
          style={{ color: "inherit", marginRight: 20 }}
        />
        <UserProfileDropdown />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
