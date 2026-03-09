import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import SignIn from "../pages/auth/SignIn";

import Overview from "../pages/Dashboard/Overview";
import Wallets from "../pages/Dashboard/Wallets";
import Transactions from "../pages/Dashboard/Transaction";
import Assets from "../pages/Dashboard/Assets";

function AppRoutes() {
  return (
      <Routes>

        <Route path="/" element={<SignIn />} />

        <Route path="/dashboard" element={<DashboardLayout />}>

          <Route index element={<Overview />} />

          <Route path="wallets" element={<Wallets />} />

          <Route path="transactions" element={<Transactions />} />

          <Route path="assets" element={<Assets />} />

        </Route>

      </Routes>


  )
}

export default AppRoutes