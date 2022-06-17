import React from "react";
import logo from "../../../assets/img/logo.png";
import cart from "../../../assets/img/cart.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Tab and Desktop menu */}
      <div className="hidden sm:block">
        <nav className="flex justify-between items-start container py-4">
          <div>
            <img className="ml-4 sm:ml-0" src={logo} alt="" />
          </div>
          <div>
            <ul className="sm:flex items-center">{menus}</ul>
          </div>
        </nav>
      </div>
      {/* mobile menu */}
      <div className="block sm:hidden container my-4">
        <nav className="flex justify-between items-start">
          <div>
            <div className="ml-6" onClick={() => setShow(!show)}>
              {show ? <AiOutlineMenu /> : <HiMenuAlt2 />}
            </div>
            <ul
              className={`sm:flex items-center smooth absolute ${
                show ? "-top-40 left-4" : "top-10 left-4"
              }`}
            >
              {menus}
            </ul>
          </div>
          <div>
            <img className="w-16" src={logo} alt="" />
          </div>
          <div>
            <img
              className="bg-primary px-2 rounded-full py-1"
              src={cart}
              alt=""
            />
          </div>
        </nav>
      </div>
    </>
  );
};

const menus = (
  <>
    <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
      <a href="/">Menu</a>
    </li>
    <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
      <a href="/">Offers</a>
    </li>
    <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
      <a href="/">Register</a>
    </li>
    <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
      <a href="/">Login</a>
    </li>
  </>
);
export default Navbar;
