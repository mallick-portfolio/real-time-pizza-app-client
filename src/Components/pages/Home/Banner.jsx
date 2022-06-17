import React from "react";
import pizza from "../../../assets/img/hero-pizza.png";
const Banner = () => {
  return (
    <div className="flex justify-between items-center mb-8 sm:mb-24">
      <div className="w-1/2">
        <h4 className="text-xl sm:text-2xl italic sm:mb-4">Are you hungry?</h4>
        <h1 className="text-4xl sm:text-6xl font-bold">Don't Wait</h1>
        <button className="text-xl  cursor-pointer px-4 py-1   border rounded-full text-white hover:bg-primaryhover bg-primary smooth text-center my-4">
          Order Now
        </button>
      </div>
      <div className="w-1/2">
        <img src={pizza} alt="" />
      </div>
    </div>
  );
};

export default Banner;
