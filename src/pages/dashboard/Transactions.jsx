import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCopy } from "@fortawesome/free-solid-svg-icons";
import tetherus from "../../assets/tetherus.png"
import nexumcoin from "../../assets/nexumcoin.png"

function Transactions() {
  return (
    <div>
      <section className="bg-white mt-10 mx-22 rounded-t-xl ">
        <div className=" flex p-3 items-center justify-between">
          <h1 className=" text-xl font-medium "> Transactions</h1>

          <div className=" flex gap-6 ">
            <h1 className=" cursor-pointer text-blue-500 font-semibold">Crypto assets</h1>
            <h1 className=" cursor-pointer"> Platform Transfer</h1>
          </div>

          <div className=" gap-3 flex">
            <button className=" rounded-md border border-gray-200">
              <p className="p-2">
                <span className="text-gray-400 font-light">Type: </span>Transfer{" "}
                <FontAwesomeIcon icon={faAngleDown} />{" "}
              </p>
            </button>
            <button className=" rounded-md border border-gray-200">
              <p className="p-2">
                <span className="text-gray-400 font-light">Type: </span>{" "}
                Platform <FontAwesomeIcon icon={faAngleDown} />{" "}
              </p>
            </button>
            <button className=" rounded-md border border-gray-200">
              <p className="p-2">
                <span className="text-gray-400 font-light">Status: </span> In
                progress <FontAwesomeIcon icon={faAngleDown} />{" "}
              </p>
            </button>
          </div>
        </div> 
      </section>
      <div className="py-3 border-b- bg-gray-200  mx-22 flex justify-around items-center">
        <p>Assets</p>
      <p> Wallet </p>
      <p> Type</p>
      <p>Amount</p>
      <p> Destination</p>
      <p> Time</p>
      <p>Status</p>
      </div>
      <div className="py-4 bg-white  mx-22 pl-20 pr-3 flex justify-between">
       <div className="flex items-center gap-2"> <img className="h-4" src={tetherus} alt="" /> <span className=" font-medium"> USDT</span> </div>
      <p> Platform </p>
      <p> Buy</p>
      <p>5,540.00</p>
<div className=" flex items-center"><p> 3jdwV8eyHu...</p><FontAwesomeIcon icon={faCopy} className=" " style={{color: "gray", background: "white"}} /></div>
<p> 11 Apr,18:10</p>
<div className="text-green-400 flex gap-2 items-center"> <div className="bg-green-400 h-2 w-2 border rounded-full"></div> <h1> Completed</h1> </div>
      </div>
 <hr  className="text-gray-200 mx-22"/>
      <div className="py-4 bg-white  mx-22 pl-20 pr-3 flex justify-between">
       <div className="flex items-center gap-2"> <img className="h-4" src={nexumcoin} alt="" /> <span className=" font-medium"> NEXM</span> </div>
      <p> Wallet 2 </p>
      <p> Transfer</p>
      <p>0.065</p>
<div className=" flex items-center">      <p>jdwV8eyHu...</p><FontAwesomeIcon icon={faCopy} className=" " style={{color: "gray", background: "white"}} /></div>
<p> 11 Feb,06:50</p>
<div className="text-red-400 flex gap-2 items-center underline"> <div className="bg-red-400 h-2 w-2 border rounded-full"></div> <h1> Declined </h1> </div>
      </div>
       <hr  className="text-gray-200 mx-22"/>
<div className="py-4 bg-white  mx-22 pl-20 pr-3 flex justify-between">
       <div className="flex items-center gap-2"> <img className="h-4" src={nexumcoin} alt="" /> <span className=" font-medium"> NEXM</span> </div>
      <p> Platform </p>
      <p> Transfer</p>
      <p>24.543</p>
<div className=" flex items-center"><p> 3jdwV8eyHu...</p><FontAwesomeIcon icon={faCopy} className=" " style={{color: "gray", background: "white"}} /></div>
<p> 11 May,11:24</p>
<div className="text-blue-500 flex gap-2 items-center"> <div className="bg-blue-500 h-2 w-2 border rounded-full"></div> <h1> In progress</h1> </div>
      </div>
 <hr  className="text-gray-200 mx-22"/>
      <div className="py-4 bg-white  mx-22 pl-20 pr-3 flex justify-between">
       <div className="flex items-center gap-2"> <img className="h-4" src={nexumcoin} alt="" /> <span className=" font-medium"> NEXM</span> </div>
      <p> Wallet 2 </p>
      <p>Buy</p>
      <p>0.065</p>
<div className=" flex items-center">      <p>jdwV8eyHu...</p><FontAwesomeIcon icon={faCopy} className=" " style={{color: "gray", background: "white"}} /></div>
<p> 11 May,11:24</p>
<div className="text-blue-500 flex gap-2 items-center"> <div className="bg-blue-500 h-2 w-2 border rounded-full"></div> <h1> In progress</h1> </div>
      </div>

<hr  className="text-gray-200 mx-22"/>
      <div className="py-4 bg-white  mx-22 pl-20 pr-3 flex justify-between">
       <div className="flex items-center gap-2"> <img className="h-4" src={nexumcoin} alt="" /> <span className=" font-medium"> NEXM</span> </div>
      <p> Wallet 3 </p>
      <p>Buy</p>
      <p>0.065</p>
<div className=" flex items-center">      <p>jdwV8eyHu...</p><FontAwesomeIcon icon={faCopy} className=" " style={{color: "gray", background: "white"}} /></div>
<p> 11 May,11:24</p>
<div className="text-green-400 flex gap-2 items-center"> <div className="bg-green-400 h-2 w-2 border rounded-full"></div> <h1> Completed</h1> </div>
      </div>
<hr  className="text-gray-200 mx-22"/>
      <div className="mb-10 py-4 bg-white  mx-22 pl-20 pr-3 flex justify-between rounded-b-2xl">
       <div className="flex items-center gap-2"> <img className="h-4" src={nexumcoin} alt="" /> <span className=" font-medium"> NEXM</span> </div>
      <p> Platform</p>
      <p>Transfer</p>
      <p>0.065</p>
<div className=" flex items-center">      <p>jdwV8eyHu...</p><FontAwesomeIcon icon={faCopy} className=" " style={{color: "gray", background: "white"}} /></div>
<p> 11 May,11:24</p>
<div className= "  text-green-400 flex gap-2 items-center"> <div className="bg-green-400 h-2 w-2 border rounded-full"></div> <h1> Completed</h1> </div>
      </div>

    </div>
  );
}
export default Transactions;
