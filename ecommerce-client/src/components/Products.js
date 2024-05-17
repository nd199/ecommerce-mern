import React from "react";
import "./Products.css";
import { popularProducts } from "../Data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="ps-container">
      <h2>Products</h2>
      {popularProducts.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
