import React from "react";
import logo from "../../../assets/img/logo.png";
import cart from "../../../assets/img/cart.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import Loading from "./Loading.jsx";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const orders = useSelector((state) => state.cart.product);
  const [show, setShow] = useState(true);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <>
      {/* Tab and Desktop menu */}
      <div className="hidden sm:block">
        <nav className="flex justify-between items-start container py-4">
          <Link to={"/"}>
            <img className="ml-4 sm:ml-0" src={logo} alt="" />
          </Link>
          <div>
            <ul className="sm:flex items-center">
              <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
                <a href="/">Menu</a>
              </li>
              <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
                <a href="/">Offers</a>
              </li>
              {!user?.email && (
                <>
                  <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
              {user?.email && (
                <li className="ml-6 my-1 sm:my-0 hover:text-primary smooth">
                  <button onClick={() => signOut(auth)}>Log Out</button>
                </li>
              )}
              <li className="ml-6 my-1 relative sm:my-0 hover:text-primary smooth">
                <Link to={"/cart"}>
                  {orders.length ? (
                    <span className="absolute right-1 top-1 rounded-full bg-white w-5 h-5 top right p-0 m-0 text-primary font-mono text-sm  leading-snug text-center">
                      {orders?.length ? orders?.length : ""}
                    </span>
                  ) : (
                    ""
                  )}
                  <img
                    className="bg-primary px-4 cursor-pointer rounded-full py-1"
                    src={cart}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* mobile menu */}
      <div className="block sm:hidden container my-4">
        <nav className="flex justify-between items-start">
          <div>
            <div className="" onClick={() => setShow(!show)}>
              {show ? (
                <AiOutlineMenu className="text-xl hover:text-primary" />
              ) : (
                <HiMenuAlt2 className="text-xl hover:text-primary" />
              )}
            </div>
            <ul
              className={`sm:flex items-center py-4 rounded-lg bg-[#fb723b] ml-6 smooth absolute z-50 ${
                show ? "-top-40 -left-2" : "top-10 -left-2"
              }`}
            >
              <li className="my-1 sm:my-0 px-6 smooth text-white">
                <a href="/">Menu</a>
              </li>
              <li className="my-1 sm:my-0 px-6 smooth text-white">
                <a href="/">Offers</a>
              </li>
              {!user?.email && (
                <>
                  <li className="my-1 sm:my-0 px-6 smooth text-white">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="my-1 sm:my-0 px-6 smooth text-white">
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
              {user?.email && (
                <li className="my-1 sm:my-0 px-6 smooth text-white">
                  <button onClick={() => signOut(auth)}>Log Out</button>
                </li>
              )}
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-16" src={logo} alt="" />
          </Link>
          <Link to={"/cart"}>
            {orders.length ? (
              <span className="absolute right-4 top-2 rounded-full bg-primaryhover w-5 h-5 top right p-0 m-0 text-white font-mono text-sm  leading-snug text-center">
                {orders?.length ? orders?.length : ""}
              </span>
            ) : (
              ""
            )}
            <img
              className="bg-primary px-2 rounded-full py-1"
              src={cart}
              alt=""
            />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
