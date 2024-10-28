import React from "react";
import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProgressCircle from "../components/ProgessCircles";

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  boxShadow: theme.shadows[3], // Utilize theme shadows for a subtle effect
  borderRadius: theme.shape.borderRadius, // Use theme's border radius
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

const Title = styled(Typography)({
  fontSize: 16, // Slightly larger for better readability
  fontWeight: "bold",
});

const StatNumber = styled(Typography)({
  fontSize: 28, // Larger font size for emphasis
  fontWeight: 500, // Medium weight for the number
});

function StatsCard({ title, value, description, progress }) {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          mb={2}
        >
          <Box flexGrow={1}>
            <Title color="textSecondary" gutterBottom>
              {title}
            </Title>
            <StatNumber sx={{ color: theme.palette.secondary.main }}>
              {value}
            </StatNumber>
            <Typography variant="body2" component="p" sx={{ fontSize: 14 }}>
              {description}
            </Typography>
          </Box>
          <Box ml={4}>
            {" "}
            {/* Margin left for spacing */}
            <ProgressCircle progress={progress} size={50} />
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default StatsCard;
