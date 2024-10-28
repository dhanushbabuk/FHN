import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { styled } from "@mui/material/styles";

const sidebarItems = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
  { name: "Manage Users", icon: <PeopleIcon />, path: "/admin/manage-users" },
  {
    name: "User Activity Logs",
    icon: <PeopleIcon />,
    path: "/admin/user-activities",
  },
  { name: "Invoices", icon: <DashboardIcon />, path: "/admin/invoices" },
  { name: "Profile", icon: <PeopleIcon />, path: "/profile" },
];

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

function Sidebar() {
  return (
    <div
      style={{ width: "250px", height: "100vh", backgroundColor: "#123786" }}
    >
      <List>
        {sidebarItems.map((item) => (
          <StyledLink to={item.path} key={item.name}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
