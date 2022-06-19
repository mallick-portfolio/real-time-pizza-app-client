import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading.jsx";
import ProductCart from "./ProductCart.jsx";

const Products = () => {
  const { isLoading, data: pizzas } = useQuery("repoData", () =>
    fetch("http://localhost:5000/pizzas").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="mb-24">
      <h1 className="text-3xl mb-8 font-semibold">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza) => (
          <ProductCart key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Products;
