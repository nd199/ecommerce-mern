import React, { useState } from "react";
import "./ProductList.css";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState("newest");
  const [showSize, setShowSize] = useState(true);

  const changeFilterHandler = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    if (name === "type" && value === "Electronics") {
      setShowSize(false);
    } else if (name === "type") {
      setShowSize(true);
    }
  };

  const resetAllHandler = () => {
    setFilters({});
    setShowSize(true);
  };

  return (
    <div className="pl-container">
      <NavBar />
      <Announcement />
      <div className="pl-filter-container">
        <div className="pl-title">
          <h1>Our Products</h1>
        </div>
        <div className="pl-filters">
          <div className="pl-filter">
            <span className="pl-filter-text">Filter Products :</span>
            <div className="select">
              <select name="color" onChange={changeFilterHandler}>
                <option value="" disabled>
                  Color
                </option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
              </select>
              {showSize && (
                <select name="size" onChange={changeFilterHandler}>
                  <option value="" disabled>
                    Size
                  </option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              )}
              <select name="type" onChange={changeFilterHandler}>
                <option value="" disabled>
                  Type
                </option>
                <option value="Clothes">Clothes</option>
                <option value="Electronics">Electronics</option>
                <option value="Shoes">Shoes</option>
                <option value="Kids-Only">Kids Only</option>
                <option value="Groceries">Groceries</option>
              </select>
            </div>
          </div>
          <div className="pl-filter">
            <span className="pl-filter-text">Sort Products: </span>
            <select
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <span>
          <button className="reset-Button" onClick={resetAllHandler}>
            Reset Filters
          </button>
        </span>
      </div>
      <Products category={category} filters={filters} sorting={sorting} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
