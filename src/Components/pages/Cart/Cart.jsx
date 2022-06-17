import React from "react";

import { useSelector } from "react-redux";
import MobileCart from "./MobileCart.jsx";
import DesktopCart from "./DesktopCart.jsx";
const Cart = () => {
  const userOrders = useSelector((state) => state.cart.product);
  return (
    <>
      <DesktopCart userOrders={userOrders} />
      <MobileCart userOrders={userOrders} />
    </>
  );
};

export default Cart;
