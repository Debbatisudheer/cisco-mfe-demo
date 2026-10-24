import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import RemoteErrorBoundary from "./components/RemoteErrorBoundary";

const DeviceDashboard = React.lazy(
  () => import("deviceApp/DeviceDashboard")
);

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#071a2b",
        color: "#ffffff",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Cisco Network Dashboard</h1>

      <p
        style={{
          color: "#9fb3c8",
          marginBottom: "30px",
        }}
      >
        Shell Application — Host
      </p>

      <div
        style={{
          background: "#0d2438",
          padding: "24px",
          borderRadius: "10px",
          border: "1px solid #1f4b68",
        }}
      >
        <h2>Device Monitoring-Micro app</h2>

        <RemoteErrorBoundary>
          <Suspense
            fallback={
              <p style={{ color: "#64ffda" }}>
                Loading Device Micro-Frontend...
              </p>
            }
          >
            <DeviceDashboard />
          </Suspense>
        </RemoteErrorBoundary>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);