import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import SignIn from "../pages/auth/SignIn";
import Transactions from "../pages/dashboard/Transactions";
import Dashboard from "../pages/dashboard/Dashboard";
import Staking from "../pages/dashboard/Staking";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="staking" element={<Staking />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
