// src/components/Sidebar.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
// import MailIcon from "@mui/icons-material/Mail";

function Sidebar() {
  return (
    <div
      style={{ width: "250px", height: "100vh", backgroundColor: "#123456" }}
    >
      <List>
        {[
          "Dashboard",
          "Manage Team",
          "Contacts Information",
          "Invoices",
          "Profile",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <DashboardIcon /> : <PeopleIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
