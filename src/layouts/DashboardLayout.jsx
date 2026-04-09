import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />
 <Outlet />
    </div>
  );
}

export default DashboardLayout;
