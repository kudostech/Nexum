import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis,  } from "@fortawesome/free-solid-svg-icons";

import nexumcoin from "../../assets/nexumcoin.png";
import tetherus from "../../assets/tetherus.png";
import ethereum from "../../assets/ethereum.png";

function Assets() {
  return (
    <section className="rounded-md bg-white">
      
      {/* HEADER */}
      <div className="flex justify-between px-6 mt-4">
        <h1>
          <span className="font-bold">My Wallet</span> 3
        </h1>

        <div className="flex gap-2 mb-4">
          <button className="bg-blue-300 rounded-md px-5">Buy</button>
          <button className="bg-blue-100 rounded-md p-2">Transfer</button>
          <button className="bg-blue-100 rounded-md p-2">
            Add new wallet
          </button>
        </div>
      </div>


      {/* WALLET + CRYPTO */}
      <div className="flex gap-2 mx-2">
        
        {/* LEFT SIDE */}
        <div className="flex flex-1 border border-gray-300">

          {/* WALLET LIST */}
          <div className="flex-1 m-2 flex justify-around flex-col gap-2">
            {[1,2,3].map((_, i) => (
              <div key={i} className="flex p-3 pl-5 rounded-2xl">
                <div className="flex flex-col gap-2 ">
                  <h1>INTERNAL</h1>
                  <h1>Nexum</h1>
                </div>

                <div className="flex-1 ml-3 bg-blue-950 flex items-center px-2 rounded-2xl">
                  <img src={nexumcoin} alt="" />
                  <h1 className="text-white ml-2">NEXUM</h1>
                </div>
              </div>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="bg-gray-300 w-0.5 "></div>

          {/* BALANCE PANEL */}
          <div className="flex-1 my-2 rounded-2xl pb-4">
            <h1 className="font-bold m-2">Wallet Balance</h1>
            <hr className="text-gray-300" />

            <div className="bg-blue-300 flex flex-col items-center rounded-2xl m-3 py-4">
              <h1>Total Balance</h1>
              <h1 className="font-bold text-3xl">22,476.00</h1>
            </div>

            <h1 className="p-3">Network Balance</h1>

            <div className="flex px-3">
              <div className="flex-1 flex gap-3">
                <div className="bg-blue-500 w-1"></div>
                <div>
                  <h1 className="text-gray-400">ERC20</h1>
                  <h1>$2,000.00</h1>
                </div>
              </div>

              <div className="flex-1 flex gap-3">
                <div className="bg-yellow-500 w-1"></div>
                <div>
                  <h1 className="text-gray-400">BEP20</h1>
                  <h1>$2,000.00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CRYPTO ASSETS */}
        <div className="flex-1 border py-4 border-gray-300 rounded-md">
          <h1>
            <span className="font-bold mx-3">Crypto Assets</span>2
          </h1>

          <hr className="mt-2 text-gray-300" />

          <div className="flex justify-between mt-2 mx-4">

            {/* NEXUM */}
            <div className="bg-gray-200 rounded-2xl mt-2 p-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <img src={nexumcoin} alt="" />
                  <h1>Nexum Coin</h1>
                </div>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>

              <h1 className="text-gray-500 mt-2">Total Balance</h1>

              <div className="flex gap-6 justify-between">
                <h1 className="font-bold">$20,564.55</h1> <br />
                <h1 className="text-gray-500">120.54NEXM</h1>
              </div>
            </div>

            {/* USDT */}
            <div className="bg-gray-200 rounded-2xl mt-2 p-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <img src={tetherus} className="w-4 h-4" alt="" />
                  <h1>Tether US</h1>
                </div>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>

              <h1 className="text-gray-500 mt-2">Total Balance</h1>

              <div className="flex justify-between">
                <h1 className="font-bold">$1,673.52</h1>
                <h1 className="text-gray-500">1673.52USDT</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* NETWORKS */}
      <div className="flex px-2 gap-4 my-10">
        <div className="border border-gray-300 rounded-2xl flex-1">

          <div className="flex gap-4 py-6">
            <h1 className="font-bold px-6">Networks</h1>
          </div>

          <div className="flex bg-gray-100 py-3 justify-around">
            <h1>Asset</h1>
            <h1>ERC20</h1>
            <h1>BEP20</h1>
            <h1>Total</h1>
            <h1>Action</h1>
          </div>

          {/* ROWS */}
          <div className="flex justify-around py-4">
            <div className="flex items-center gap-1">
              <img src={tetherus} className="w-4 h-4" alt="" />
              <span>USDT</span>
            </div>
            <h1>1102</h1>
            <h1>200</h1>
            <h1>1302</h1>
            <div className="flex gap-2 text-blue-400">
              <h1>Buy</h1>
              <h1>Transfer</h1>
            </div>
          </div>

          <hr className="text-gray-300" />

          <div className="flex justify-around py-4">
            <div className="flex items-center gap-1">
              <img src={nexumcoin} className="w-4 h-4" alt="" />
              <span>NEXM</span>
            </div>
            <h1>800</h1>
            <h1>600</h1>
            <h1>1400</h1>
            <div className="flex gap-2 text-blue-400">
              <h1>Buy</h1>
              <h1>Transfer</h1>
            </div>
          </div>

          <hr  className="text-gray-300"/>

          <div className="flex justify-around py-4">
            <div className="flex items-center gap-1">
              <img src={ethereum} className="w-4 h-4" alt="" />
              <span>ETH</span>
            </div>
            <h1>26615</h1>
            <h1>500</h1>
            <h1>26615</h1>
            <div className="flex gap-2 text-blue-400">
              <h1>Buy</h1>
              <h1>Transfer</h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Assets;