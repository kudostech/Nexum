import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import staking from "../assets/Staking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripVertical,
  faSun,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faArrowRightArrowLeft,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className=" flex  bg-white items-center px-10 py-5 gap-80">

      <div className=" flex items-center gap-2 ">
        <img className="w-6" src={logo} alt="" />
        <h1 className="font-bold text-xl">NEXUM</h1>
      </div>

      <div className=" flex gap-10">
        <div className=" flex items-center text-blue-500">
          <FontAwesomeIcon icon={faGripVertical} />
          <h1 className=" font-extrabold"> Dashboard</h1>
        </div>

        <div className=" flex items-center gap-1 ">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          <h1 className=" "> Transactions</h1>
        </div>

        <div className=" flex items-center gap-1 ">
          <img src={staking} alt="" />
          <h1 className=" "> Staking</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className=" bg-gray-200 flex gap-4 rounded-md items-center p-3">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <FontAwesomeIcon icon={faBell} />

        <img src={profile} className=" w-16 h-10 rounded-4xl" alt="profile" />
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </nav>
  );
}

export default Navbar;
