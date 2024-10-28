// src/components/StatsCard.js
import React from "react";

function StatsCard({ title, value, percentage }) {
  return (
    <div
      style={{
        backgroundColor: "#234567",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{percentage}</p>
    </div>
  );
}

export default StatsCard;
