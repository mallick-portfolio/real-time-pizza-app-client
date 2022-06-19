import React from "react";
import cart from "../../../assets/img/cart-black.png";
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
    <>
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
                    <button
                      onClick={() => dispatch(incrementQuantity(order?._id))}
                      className="text-xl  cursor-pointer px-4 py-1   border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center my-4"
                    >
                      <BsPlusLg />
                    </button>

                    <input
                      readOnly
                      type="text"
                      value={order?.quantity}
                      className="focus:outline-none w-1/6 text-center"
                    />
                    <button
                      onClick={() => dispatch(decrementQuantity(order?._id))}
                      className="text-xl  cursor-pointer px-4 py-1   border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center my-4"
                    >
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
            </>
          ))}
        </div>
        <div className="text-right container">
          <h2 className="text-2xl">
            Total = $
            {userOrders.reduce(function (accumulator, item) {
              return accumulator + item.price;
            }, 0)}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Cart;
