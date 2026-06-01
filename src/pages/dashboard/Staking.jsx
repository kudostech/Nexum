import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nexumcoin from "../../assets/nexumcoin.png"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";



function Staking() {
  return (
    <div>
     <div className=" flex m-10 gap-4">
<section className=" flex-1 border border-gray-300  bg-[#eaeaea] rounded-2xl">
<p className=" font-semibold m-6 text-xl">Staking Balance </p>
<hr  className="text-gray-400"/>
<div className=" flex gap-4 p-4">
  <div className=" bg-blue-950 text-center p-10 m-4 rounded-2xl">
    <p className=" text-white"> Platform Balance</p>
    <p className="text-4xl text-white"> $56,476.00</p>
  </div>
  <div className=" bg-green-200 p-4 my-4 rounded-2xl">
    <div className="flex items-center">
      <h1> Nexum Staking</h1>
      <img src={nexumcoin} className=" m-4 w-10 h-8" alt="logo" />
    </div>
    <h1> Total</h1>
    <h1 className="font-semibold"> $ 90,552</h1>
  </div>
   <div className=" bg-pink-200 p-4 my-4 rounded-2xl">
    <div className="flex items-center">
      <h1> USDC Staking</h1>
      <img src={nexumcoin} className=" m-4 w-10 h-8" alt="logo" />
    </div>
    <h1> Total</h1>
    <h1 className="font-semibold"> $ 20,564</h1>
  </div>
</div>
</section>

<section className=" flex-1 border border-gray-300  bg-white rounded-2xl">
<p className=" font-semibold m-6 text-xl">Cummulative Profit </p>
<hr  className="text-gray-400"/>
<div className=" flex gap-4 p-4">
  <div className=" bg-blue-950 text-center p-10 m-4 rounded-2xl">
    <p className=" text-white"> Total Profit</p>
    <p className="text-4xl text-white"> $56,476.00</p>
  </div>
  <div className=" bg-green-200 p-4 my-4 rounded-2xl">
    <div className="flex items-center">
      <h1> Nexum profit</h1>
      <img src={nexumcoin} className=" m-4 w-10 h-8" alt="logo" />
    </div>
    <h1> Total</h1>
    <h1 className="font-semibold"> $ 90,552</h1>
  </div>
   <div className=" bg-pink-200 p-4 my-4 rounded-2xl">
    <div className="flex items-center">
      <h1> USDC Staking</h1>
      <img src={nexumcoin} className=" m-4 w-10 h-8" alt="logo" />
    </div>
    <h1> Total</h1>
    <h1 className="font-semibold"> $ 20,564</h1>
  </div>


</div>
</section>
     </div>


          <div className=" flex m-10 gap-4">
<section className=" flex-1 border border-gray-300  bg-[#ffffff] rounded-2xl">
<p className=" font-semibold p-3 text-xl">Staking </p>
<hr  className="text-gray-400"/>
<p className=" px-4 py-6">Wallet</p>
<div className=" border border-gray-300 rounded-md p-2 mx-4 text-center text-gray-500 " > 
<span>Connect your wallet</span>
</div>

<p className=" p-4"> Target Asset</p>
<div className=" flex items-center justify-between border border-gray-300 mx-4 p-2 rounded-md w-94/100" type="text"  placeholder="">
<p className=" text-gray-500 font-light">Select target assets</p>
<FontAwesomeIcon icon={faAngleDown} />
</div>
<p className=" px-4 pt-4"> Crypto Asset</p>
<div className=" flex items-center justify-between border border-gray-300 m-4 p-2 rounded-md w-94/100" type="text"  placeholder="">
<p className=" text-gray-500 font-light">Select crypto assets</p>
<FontAwesomeIcon icon={faAngleDown} />
</div>

<button className=" rounded-md m-4 mb-40 px-60 py-2 text-white bg-blue-500"> continue</button>
</section>

<section className=" flex-1  border border-gray-300  bg-white rounded-2xl">
<p className=" font-semibold m-3 text-xl">Pool & Fund at work </p>
<hr  className="text-gray-400"/>
<div className="  gap-4 p-4">
  <div className=" bg-green-200 flex-1 h-40 my-4 rounded-2xl">
<h1 className="p-4">Pool</h1>
  </div>
   <div className=" flex-1 bg-pink-200 my-4 rounded-2xl">
    <h1 className="p-4">Fund at work</h1>
  </div>
  <div className=" bg-green-200 flex-1 h-50 my-4 rounded-2xl">
<h1 className="p-4">Pool</h1>
  </div>
   <div className=" flex-1 bg-pink-200 my-4 rounded-2xl">
    <h1 className="p-4">Fund at work</h1>
  </div>
</div>
</section>

     </div>
    <div className=" flex mx-10 gap-4  mb-20">
       <section className=" rounded-2xl flex-1 h-50 mb-10  ">
    <div className="flex gap-8 items-center p-3 border rounded-t-2xl ">
<h1 className="  font-bold">Your Stakes</h1>
<div className=" flex gap-8">
<h1> All</h1>
<h1> Locked </h1>
<h1> Completed </h1>
</div>
    </div>

    <div className="flex justify-around p-3 bg-gray-300 border">
      <h1>Asset</h1>
      <h1> Locked Period</h1>
      <h1> Amount</h1>
      <h1> Start Date</h1>
      <h1> End Date
      </h1>
      <h1> Status</h1>

    </div>


    <div className="flex border justify-around p-3 ">
      <h1 className="font-bold">USDC</h1>
      <h1> 3 months</h1>
      <h1> $ 5,540.00</h1>
      <h1> 20-04-2022</h1>
      <h1>20-07-2022
      </h1>
      <h1 className="text-green-400"> Completed</h1>

    </div>
    <div className="flex border justify-around p-3 ">
      <h1 className="font-bold">USDC</h1>
      <h1> 3 months</h1>
      <h1> $ 5,540.00</h1>
      <h1> 20-04-2022</h1>
      <h1>20-07-2022
      </h1>
      <h1 className="text-green-400"> Completed</h1>

    </div>

    <div className="flex border justify-around p-3 rounded-b-2xl ">
      <h1 className="font-bold">USDC</h1>
      <h1> 3 months</h1>
      <h1> $ 5,540.00</h1>
      <h1> 20-04-2022</h1>
      <h1>20-07-2022
      </h1>
      <h1 className="text-green-400"> Completed</h1>

    </div>


     </section>
       <section className=" rounded-2xl flex-1 h-50 mb-10  ">
    <div className="flex gap-8 items-center p-3 border rounded-t-2xl ">
<h1 className="  font-bold">Networks</h1>
<div className=" flex gap-8">
<h1> Nexum</h1>
<h1> Wallet 2 </h1>
<h1> Wallet 3 </h1>
</div>
    </div>

    <div className="flex justify-around p-3 bg-gray-300 border">
      <h1>Asset</h1>
      <h1> ERC20</h1>
      <h1> BEP20</h1>
      <h1> Total</h1>
      <h1> Action
      </h1>
   

    </div>


    <div className="flex border justify-around p-3 ">
      <h1 className="font-bold">USDC</h1>
      <h1> 1102</h1>
      <h1> 200</h1>
      <h1> 1302</h1>
      <h1 className="text-blue-400">Stake
      </h1>
      

    </div>
    <div className="flex border justify-around p-3 pb-15.5 rounded-b-2xl">
      <h1 className="font-bold">NEXM</h1>
      <h1> 800</h1>
      <h1> 600</h1>
      <h1> 400</h1>
      <h1 className="text-blue-400"> Stake</h1>

    </div>

    


     </section>
    </div>
    </div>
  );
}

export default Staking;