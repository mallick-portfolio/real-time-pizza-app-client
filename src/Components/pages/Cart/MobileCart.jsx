import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../store/CartSlice/CartSlice.js";
const MobileCart = ({ userOrders }) => {
  const dispatch = useDispatch();
  return (
    <section className="block sm:hidden container">
      {userOrders.map((order) => (
        <div
          key={order._id}
          className=" flex py-2 my-2 rounded-md shadow-xl justify-between items-center"
        >
          <div className="w-1/3">
            {console.log(order)}
            <img className="w-12" src={order?.image} alt="" />
          </div>
          <div className="w-1/3">
            <h2>{order?.size}</h2>
            <h2>${order?.price}</h2>
          </div>
          <div className="w-1/3">
            <div className="flex items-center">
              <button
                onClick={() => dispatch(incrementQuantity(order?._id))}
                className="text-sm px-2 py-1  cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center"
              >
                <BsPlusLg />
              </button>

              <input
                readOnly
                type="text"
                value={order?.quantity}
                className="focus:outline-none w-1/3 text-center"
              />
              <button
                onClick={() => dispatch(decrementQuantity(order?._id))}
                className="text-sm px-2 py-1  cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center"
              >
                <FaMinus />
              </button>
            </div>
          </div>
          <button className="text-sm px-4 py-1 cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth ml-4">
            <ImCross />
          </button>
        </div>
      ))}
      <div className="text-right container">
        <h2 className="text-2xl">
          Total = $
          {userOrders.length &&
            userOrders.reduce(function (accumulator, item) {
              return accumulator + item.price;
            }, 0)}
        </h2>
      </div>
    </section>
  );
};

export default MobileCart;
