import React from "react";

function RecentTransactions() {
  return (
    <section className="bg-white p-6 rounded-md my-4">
      <h1 className="font-bold">Recent Transactions</h1>

      <div className="mt-4 border p-4 rounded-2xl border-gray-300">
        <p>USDT - Buy - $5,540</p>
        <p>NEXM - Transfer - $20,579</p>
      </div>

      <h2 className="mt-6 font-bold">Market Value</h2>
      <div className="border p-4 mt-2 border-gray-300 rounded-2xl">
        <p>USDT: -0.4%</p>
        <p>NEXM: +10.4%</p>
      </div>
    </section>
  );
}

export default RecentTransactions;