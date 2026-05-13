import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faWallet } from "@fortawesome/free-solid-svg-icons";

import Piechart from "../../assets/piechart.png";
import network from "../../assets/network.png";
import tetherus from "../../assets/tetherus.png";
import ethereum from "../../assets/ethereum.png";
import nexumcoin from "../../assets/nexumcoin.png";
import bnb from "../../assets/bnb.png";

function WalletOverview() {
  return (
    <>
      {/* LEFT SIDE */}
      <div className="bg-white rounded-2xl flex-1">
        <div className="flex justify-between text-xl items-center font-medium p-6">
          <h1>Nexum Platform</h1>
          <FontAwesomeIcon className="cursor-pointer" icon={faEllipsis} />
        </div>

        <hr className="text-gray-300" />

        <div className="m-6">
          {/* TOP CARDS */}
          <div className="flex gap-5">
            <section className="flex-1 bg-blue-950 rounded-xl p-12">
              <h3 className="text-white text-center">Platform Balance</h3>
              <h6 className="mt-4 text-white font-extrabold text-2xl text-center">
                $56,476.00
              </h6>
            </section>

            <section className="flex-1 rounded-2xl bg-green-100">
              <h1 className="font-light text-gray-900 pt-6 px-4">
                Incoming <br /> Funds
              </h1>
              <h3 className="px-4 pt-5 text-gray-600 font-light">Total</h3>
              <h3 className="font-medium px-4 pt-2">$200,552</h3>
            </section>

            <section className="flex-1 bg-pink-100 rounded-2xl">
              <h1 className="font-light text-gray-900 pt-6 px-4">
                Outgoing <br /> Funds
              </h1>
              <h3 className="px-4 pt-5 text-gray-600 font-light">Total</h3>
              <h3 className="font-medium px-4 pt-2">$200,552</h3>
            </section>
          </div>

          {/* RECENT BANK */}
          <section className="border-gray-300 border mt-4 rounded-2xl">
            <div className="justify-between flex p-3">
              <h6>Recent Bank Transfer</h6>
              <h4 className="text-blue-400 font-extralight underline cursor-pointer">
                View all
              </h4>
            </div>

            <hr className="text-gray-300" />

            <div className="flex justify-around py-2">
              <h1 className="font-light">11 Feb</h1>
              <h1 className="font-light">AA1234593</h1>
              <h1 className="font-light">Incoming</h1>
              <h1 className="font-bold">$2,000.00</h1>

              <div className="flex gap-2">
                <div className="rounded-full bg-green-500 p-1 my-2"></div>
                <h3 className="text-green-500 font-light">Completed</h3>
              </div>
            </div>

            <div className="mt-4 flex justify-around pb-3">
              <h1 className="font-light">11 Feb</h1>
              <h1 className="font-light">AA1234593</h1>
              <h1 className="font-light">Outgoing</h1>
              <h1 className="font-bold">$5,000.00</h1>

              <div className="flex gap-2">
                <div className="rounded-full bg-blue-500 p-1 my-2"></div>
                <h3 className="text-blue-500">In progress</h3>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white rounded-2xl flex-1">
        <div className="flex justify-between text-xl items-center font-medium p-6">
          <h1>Wallet Overview</h1>
          <FontAwesomeIcon className="cursor-pointer" icon={faEllipsis} />
        </div>

        <hr className="text-gray-300" />

        <div className="m-6">
          <div className="flex gap-5">
            <section className="flex-1 bg-blue-300 rounded-xl py-12">
              <h3 className="text-center font-light">
                Total wallet Balance
              </h3>
              <h6 className="mt-4 font-extrabold text-2xl text-center">
                $320,476.00
              </h6>
            </section>

            <section className="rounded-2xl bg-white border px-4 border-gray-300">
              <div className="flex">
                <img className="w-24 py-4 p-2" src={Piechart} alt="piechart" />

                <div className="flex-1 pt-1">
                  <div className="flex gap-1">
                    <div className="rounded-full bg-blue-500 p-1 mt-2"></div>
                    <h3 className="text-gray-500 font-light">
                      Internal Wallet <br />
                      <span className="text-black font-bold">
                        $2,176.00
                      </span>
                    </h3>
                  </div>

                  <div className="flex gap-1 mt-4">
                    <div className="rounded-full bg-orange-400 p-1 mt-2"></div>
                    <h3 className="text-gray-500 font-light">
                      Private wallets <br />
                      <span className="text-black font-bold">
                        $318,300.00
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex mt-5 items-center gap-2">
                <FontAwesomeIcon icon={faWallet} />
                <img src={network} alt="network" />
              </div>
            </section>
          </div>

          {/* SMALL ASSETS */}
          <section className="flex gap-3 mt-4">
            <div className="bg-gray-100 px-8 py-6 border rounded-md border-gray-300">
              <div className="flex gap-2 items-center">
                <h3>TetherUS</h3>
                <img className="w-4 h-4" src={tetherus} alt="" />
              </div>
              <h1 className="mt-2">$2,564.55</h1>
              <h4 className="mt-2">120.50 USDT</h4>
            </div>

            <div className="bg-gray-100 px-6 py-6 border rounded-md border-gray-300">
              <div className="flex gap-2 items-center">
                <h3>Ethereum</h3>
                <img className="w-5 h-5" src={ethereum} alt="" />
              </div>
              <h1 className="mt-2">$2,564.55</h1>
              <h4 className="mt-2">120.50 ETH</h4>
            </div>

            <div className="bg-gray-100 px-4 py-6 border rounded-md border-gray-300">
              <div className="flex items-center gap-2">
                <h3>Nexum coin</h3>
                <img className="w-10 h-5" src={nexumcoin} alt="" />
              </div>
              <h1 className="mt-2 text-center">$2,564.55</h1>
              <h4 className="mt-2 text-center">120.50 NEXM</h4>
            </div>

            <div className="bg-gray-100 px-4 py-6 border rounded-md border-gray-300">
              <div className="flex items-center gap-2">
                <h3>BNB</h3>
                <img className="w-5 h-5" src={bnb} alt="" />
              </div>
              <h1 className="mt-2">$2,564.55</h1>
              <h4 className="mt-2">120.50 BNB</h4>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WalletOverview;