import React from "react";

function DeviceDashboard() {
  return (
    <div
      style={{
        padding: "24px",
        background: "#0b1f33",
        color: "white",
        borderRadius: "8px",
        fontFamily: "Arial",
      }}
    >
      <h2>Cisco Device Monitoring-Micro app</h2>

      <p>Device: Router-01</p>
      <p>Status: Online</p>
      <p>CPU Usage: 42%</p>
      <p>Memory Usage: 61%</p>
    </div>
  );
}

export default DeviceDashboard;