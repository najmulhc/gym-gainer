import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import headerlogo from "../../img/logoheader.png";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const logOut = (e) => {
    signOut(auth);
  };
  return (
    <header className="shadow-md w-full fixed top-0 left-0  bg-white z-50 ">
      <div className="md:flex items-center md:justify-between  container md:mx-auto  py-4 ">
        <div className="flex  items-center">
          <Link to="/">
            {" "}
            <img src={headerlogo} className="h-12 pl-8 md:pl-0" alt="" />
          </Link>
        </div>
        <div
          className="text-3xl  absolute right-8 top-6 cursor-pointer text-choco md:hidden "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:gap-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-out ${
            open ? "top-20" : "top-[-490px]"
          } text-choco`}
        >
          <li className="md:ml-4 pl-4 md:my-0 my-4 hover:text-orange-600 font-semibold text-gray-800">
            <Link to="/">Home</Link>
          </li>
          <li className="md:ml-4 pl-4 md:my-0 my-4 hover:text-orange-600 font-semibold text-gray-800">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="md:ml-4 pl-4 md:my-0 my-4 hover:text-orange-600 font-semibold text-gray-800">
            <Link to="/checkout">Checkout</Link>
          </li>
          <li className="md:ml-4 pl-4 md:my-0 my-4 hover:text-orange-600 font-semibold text-gray-800">
            <Link to="/about">About me</Link>
          </li>
          {user ? (
            <li className="md:ml-4 pl-4 md:my-0 my-4 hover:text-orange-600 font-semibold text-gray-800">
              <Link to="/" onClick={logOut}>
                {user.displayName}(Log out)
              </Link>
            </li>
          ) : (
            <li className="md:ml-4 pl-4 md:my-0 my-4 hover:text-orange-600 font-semibold text-gray-800">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
