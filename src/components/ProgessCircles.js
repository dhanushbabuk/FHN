import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const normalizedProgress = progress * 100; // Convert decimal to percentage

  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        variant="determinate"
        value={normalizedProgress}
        size={size}
        thickness={4}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {`${Math.round(normalizedProgress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircle;
