import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import cart from "../../../assets/img/cart-black.png";
import emptycart from "../../../assets/img/empty-cart.png";
const DesktopCart = ({ userOrders }) => {
  return (
    <section className="bg-[#eee9e9] py-24 sm:block hidden">
      <div className="container">
        <div className="flex items-center">
          <img src={cart} alt="" />
          <h2 className="text-2xl ml-2 font-semibold">Order Summary</h2>
        </div>
        <hr className="border-1 my-2 border-primary" />
        {userOrders.map((order) => (
          <>
            <div>
              <div
                key={order?._id}
                className="flex justify-between py-4 items-center"
              >
                <div className="flex  items-center ">
                  <img className="w-28 mr-4" src={order?.image} alt="" />
                  <div>
                    <h4 className="text-2xl">{order?.name}</h4>
                    <h5 className="text-xl">{order?.size}</h5>
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
                <div className="text-xl">${order?.price}</div>
                <div className="text-xl">
                  <button className="text-sm px-4 py-2  cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right">
              Total{" "}
              {userOrders.reduce(function (accumulator, item) {
                return accumulator + item.price;
              }, 0)}
            </div>
          </>
        ))}
      </div>
      {!userOrders && (
        <div>
          {console.log(userOrders)}
          <h1>No Order Found</h1>
          <img className="w-1/2 mx-auto" src={emptycart} alt="" />
        </div>
      )}
    </section>
  );
};

export default DesktopCart;
