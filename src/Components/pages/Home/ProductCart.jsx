import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import auth from "../../../firebase.init.js";
import { addproduct } from "../../../store/CartSlice/CartSlice.js";
import Loading from "../Shared/Loading.jsx";
import {  toast } from 'react-toastify';
import axios from "axios";
const ProductCart = ({ pizza }) => {
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const { image, name, size, price } = pizza;
  if (loading) {
    return <Loading />;
  }

  const addItem = async (item) => {
    const newItem = {
      productId: item._id,
      email: user?.email,
      name: item.name,
      category: item.category,
      image: item.image,
      price: item.price,
      totalprice: item.price,
      quantity: 1,
      size: item.size,
    };
    dispatch(addproduct(newItem));
    await axios
      .post("http://localhost:5000/user/addtocart", newItem)
      .then((res) => {
        if(res.data.status){
          toast.success('Product Added');
        }
      });

  };

  return (
    <div className="shadow-2xl rounded-2xl px-2 py-2 sm:px-6 sm:py-6">
      <img className="w-28 mx-auto mb-4" src={image} alt="" />
      <h3 className="text-xl sm:text-2xl text-center font-semibold">{name}</h3>
      <h3 className="text-xs sm:text-sm text-center uppercase">{size}</h3>
      <div className="sm:flex justify-between mt-4 items-center">
        <h3 className="font-bold sm:w-1/2 w-full text-xl sm:text-3xl text-center">
          ${price}
        </h3>
        <div
          onClick={() => addItem(pizza)}
          className="text-xl sm:w-1/2 w-full cursor-pointer px-2  border-primary border rounded-full hover:text-white hover:bg-primary smooth text-center my-2 sm:my-0"
        >
          <span className="font-bold">+</span> Add
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
