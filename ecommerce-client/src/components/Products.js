import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import Product from "./Product";

const Products = ({ category, filters, sorting }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //CATEGORY

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:8000/api/Products?category=${
                category.charAt(0).toLocaleUpperCase() + category.slice(1)
              }`
            : `http://localhost:8000/api/Products`
        );
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  //FILTERING
  useEffect(() => {
    setFilteredProducts(
      products?.filter((product) =>
        Object.entries(filters).every(([key, value]) =>
          product[key].includes(value)
        )
      )
    );
  }, [filters]);

  useEffect(() => {
    if (sorting === "newest")
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    else if (sorting === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sorting === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sorting]);

  return (
    <div className="ps-container">
      <h2>Products</h2>
      {filteredProducts.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
