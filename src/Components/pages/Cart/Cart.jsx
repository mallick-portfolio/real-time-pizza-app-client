import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../store/CartSlice/CartSlice.js";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Cart = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector((state) => state.cart.product);
  return (
    <section className="container">
      {userOrders.map((order) => (
        <div
          key={order.productId}
          className=" flex py-2 my-6 rounded-md shadow-md justify-between items-center"
        >
          <div className="w-1/3">
            <img className="w-12 sm:w-16" src={order?.image} alt="" />
          </div>
          <div className="w-1/3">
            <h2>{order?.size}</h2>
            <h2>${order?.totalprice}</h2>
          </div>
          <div className="w-1/3">
            <div className="flex items-center">
              <button
                onClick={() => dispatch(incrementQuantity(order?.productId))}
                className="text-sm px-2 py-1  cursor-pointer border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center"
              >
                <BsPlusLg />
              </button>

              <input
                readOnly
                type="text"
                value={order?.quantity}
                className="focus:outline-none w-1/3 sm:w-1/12 text-center"
              />
              <button
                onClick={() => dispatch(decrementQuantity(order?.productId))}
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
              return accumulator + item.totalprice;
            }, 0)}
        </h2>
      </div>
    </section>
  );
};

export default Cart;
