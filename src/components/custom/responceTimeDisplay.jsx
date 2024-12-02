import React from "react";

const ResponseTimeDisplay = ({ responseTime }) => {
  // Determine the background color based on the response time
  const getBackgroundColor = (time) => {
    if (time <= 120) return "green";
    if (time <= 200) return "blue";
    if (time <= 380) return "yellow";
    if (time <= 720) return "orange";
    return "red";
  };

  // Calculate the width percentage based on response time
  const getWidthPercentage = (time) => {
    if (time <= 120) return "20%";
    if (time <= 200) return "40%";
    if (time <= 380) return "60%";
    if (time <= 720) return "80%";
    return "100%";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "10px", padding: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Response Time</span>
        <span>{responseTime}ms</span>
      </div>
      <div
        style={{
          width: getWidthPercentage(responseTime),
          height: "8px",
          backgroundColor: getBackgroundColor(responseTime),
          borderRadius: "30px",
          marginTop: "5px",
          transition: "width 0.5s ease, background-color 0.5s ease",
        }}
      ></div>
    </div>
  );
};

export default ResponseTimeDisplay;
