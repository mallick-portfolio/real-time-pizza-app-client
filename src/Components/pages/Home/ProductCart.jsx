import React from "react";
const ProductCart = ({ pizza }) => {
  const { image, name, size, price } = pizza;
  return (
    <div className="shadow-2xl rounded-2xl px-2 py-2 sm:px-6 sm:py-6">
      <img className="w-28 mx-auto mb-4" src={image} alt="" />
      <h3 className="text-xl sm:text-2xl text-center font-semibold">{name}</h3>
      <h3 className="text-xs sm:text-sm text-center uppercase">{size}</h3>
      <div className="sm:flex justify-between mt-4 items-center">
        <h3 className="font-bold sm:w-1/2 w-full text-xl sm:text-3xl text-center">${price}</h3>
        <div className="text-xl sm:w-1/2 w-full cursor-pointer px-2  border-primary border rounded-full hover:text-white hover:bg-primary smooth text-center my-2 sm:my-0">
          <span className="font-bold">+</span> Add
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
