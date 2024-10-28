import React from "react";
import { Box, Button, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../components/StatsCard";

const AdminPage = () => {
  return (
    <Box p={3}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        {/* <Typography variant="h4" component="h1">
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadOutlinedIcon />}
          sx={{ fontWeight: "bold" }}
        >
          Download Reports
        </Button> */}
      </Box>

      {/* STATISTICS GRID */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={0}
      >
        <StatBox
          title="Active Users"
          value="4,024"
          description="+5% from last week"
          progress={0.8}
          icon={<PointOfSaleIcon />}
        />
        <StatBox
          title="New Sign-Ups"
          value="786"
          description="New users today"
          progress={0.3}
          icon={<PersonAddIcon />}
        />
        <StatBox
          title="Total Users"
          value="5,389"
          description="Total registered users"
          progress={0.6}
          icon={<TrafficIcon />}
        />
      </Box>

      {/* Optionally reintegrate charts when needed */}
    </Box>
  );
};

export default AdminPage;
