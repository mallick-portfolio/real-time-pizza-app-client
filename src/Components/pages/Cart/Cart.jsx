import React from "react";
import cart from "../../../assets/img/cart-black.png";
import pizza from "../../../assets/img/pizza.png";
const Cart = () => {
  return (
    <section className="bg-[#eee9e9] py-24">
      <div className="container ">
        <div className="flex items-center">
          <img src={cart} alt="" />
          <h2 className="text-2xl ml-2 font-semibold">Order Summary</h2>
        </div>
        <hr className="border-1 my-2 border-primary" />
        <div className="flex justify-between py-4 items-center">
          <div className="flex items-center">
            <img className="w-28 mr-4" src={pizza} alt="" />
            <div>
              <h4 className="text-2xl">Name</h4>
              <h5 className="text-xl">Size</h5>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-3xl mr-2">+</button>
            <input type="text" className="focus:outline-none w-1/3 text-center" />
            <button className="text-3xl ml-2">-</button>
          </div>
          <div>lorem</div>
          <div>lorem</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
