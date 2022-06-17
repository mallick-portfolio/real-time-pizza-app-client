import React from "react";
import cart from "../../../assets/img/cart-black.png";
import pizza from "../../../assets/img/pizza.png";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
const Cart = () => {
  return (
    <>
      <section className="bg-[#eee9e9] py-24 sm:block hidden">
        <div className="container">
          <div className="flex items-center">
            <img src={cart} alt="" />
            <h2 className="text-2xl ml-2 font-semibold">Order Summary</h2>
          </div>
          <hr className="border-1 my-2 border-primary" />
          <div className="flex justify-between py-4 items-center">
            <div className="flex  items-center ">
              <img className="w-28 mr-4" src={pizza} alt="" />
              <div>
                <h4 className="text-2xl">Name</h4>
                <h5 className="text-xl">Size</h5>
              </div>
            </div>
            <div className="flex items-center ">
              <button className="text-xl  cursor-pointer px-4 py-1   border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center my-4">
                <BsPlusLg />
              </button>
              <input
                readOnly
                type="text"
                value={4}
                className="focus:outline-none w-1/6 text-center"
              />
              <button className="text-xl  cursor-pointer px-4 py-1   border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center my-4">
                <FaMinus />
              </button>
            </div>
            <div className="text-xl">Price</div>
            <div className="text-xl">Total Price</div>
          </div>
        </div>
      </section>
      <section className="container flex justify-between items-center">
        <div className="w-1/3">
          <img className="w-12" src={pizza} alt="" />
          <h2>Name</h2>
        </div>
        <div className="w-1/3">
          <h2>Size</h2>
          <h2>Price</h2>
        </div>
        <div className="w-1/3">
          <div className="flex items-center">
            <button className="text-xl px-2 cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center">
              <BsPlusLg />
            </button>
            <input
              readOnly
              type="text"
              value={4}
              className="focus:outline-none w-1/2 text-center"
            />
            <button className="text-xl px-2 cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center">
              <FaMinus />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
