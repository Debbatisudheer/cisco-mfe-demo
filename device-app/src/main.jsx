import React from "react";
import { createRoot } from "react-dom/client";
import DeviceDashboard from "./DeviceDashboard";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeviceDashboard />
  </React.StrictMode>
);