import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import staking from "../assets/Staking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGripVertical,
  faSun,
  faBell,
  faAngleDown,
  faArrowRightArrowLeft,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className=" flex  bg-white items-center  py-5 justify-around ">
      <Link to="/dashboard">
        <span className=" flex gap-1 items-center text-blue-500">
          <img src={logo} alt="logo" />
          <h1 className=" font-extrabold"> Nexum</h1>
        </span>
      </Link>

      <div className=" flex gap-10">
        <Link to="/dashboard">
          <span className=" flex gap-1 items-center text-blue-500">
            <FontAwesomeIcon icon={faGripVertical} />
            <h1 className=" font-extrabold"> Dashboard</h1>
          </span>
        </Link>

        <Link to="/dashboard/Transactions" >
          <div className=" flex items-center gap-1 ">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <h1 className=" "> Transactions</h1>
          </div>
        </Link>

        <Link to="/dashboard/Staking">
        <div className=" flex items-center gap-1 ">
          <img src={staking} alt="" />
          <h1 className=" "> Staking</h1>
        </div>
        </Link>

      </div>


      <div className="flex items-center gap-4">
        <div className=" bg-gray-200 flex gap-4 rounded-md items-center p-3">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <FontAwesomeIcon icon={faBell} />
        <img src={profile} className=" w-10 h-9 rounded-4xl" alt="profile" />
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </nav>
  );
}

export default Navbar;
