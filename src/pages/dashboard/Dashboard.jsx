import React from "react";

import WalletOverview from "../../components/dashboard/WalletOverview";
import Transactions from "../../components/dashboard/RecentTransactions";
import Assets from "../../components/dashboard/Assets";

function Dashboard() {
  return (
    <>
    

      <div className="px-22 mt-10 flex flex-col gap-6">
        <WalletOverview />
        <Assets />
        <Transactions />
      </div>
    </>
  );
}

export default Dashboard;