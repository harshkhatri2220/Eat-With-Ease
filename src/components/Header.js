import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // const {loggedInUser} = useContext(userContext);
// console.log(loggedInUser)

//subscribing the store using selector
const cartItems = useSelector((store) => store.cart.item);
// console.log(cartItems)

  return (
    <div className=" flex justify-between items-center shadow-lg  sticky top-0 w-full mb-4 backdrop-blur-sm  z-10">
      <div className="logo-container">
        <img className=" w-28" src={LOGO_URL} alt="logo" />
      </div>
      <div className=" flex justify-center items-center">
        <ul className=" flex">
          <li className=" px-3">
            {onlineStatus == true ? <h3>online:🟢</h3> : <h3>offline:🔴</h3>}
          </li>
          <li className=" px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" px-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className=" px-3">
            <Link to={"/contactUs"}>Contact Us</Link>
          </li>
          <li className=" px-3">
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <button
            className=" px-3"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          {/* <li className=" px-3">
            {loggedInUser}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
