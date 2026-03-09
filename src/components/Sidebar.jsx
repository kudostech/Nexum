import { Link } from "react-router";

import React from "react";

function Sidebar() {
  return (
    <div className=" w-64 bg-black text-white min-h-screen p-6">
      <h1 className=" text-2xl font-bold mb-10">Nexum</h1>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/wallets">Wallets</Link>
        </li>
        <li>
          <Link to="/dashboard/transactions"> Transactions</Link>
        </li>
        <li>
          <Link to="/dashboard/assets">Assets</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
