import React from "react";
import "./ProductList.css";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div className="pl-container">
      <NavBar />
      <Announcement />
      <div className="filter-container">
        <div className="pl-title">
          <h1>Dresses</h1>
        </div>
        <div className="filters">
          <div className="filter">
            <span className="filter-text">Filter Products:</span>
            <div className="select">
              <select name="" id="">
                <option value="" disabled selected>
                  Color
                </option>
                <option value="">White</option>
                <option value="">Black</option>
                <option value="">Red</option>
                <option value="">Blue</option>
                <option value="">Yellow</option>
                <option value="">Green</option>
              </select>
              <select name="" id="">
                <option value="" disabled selected>
                  Size
                </option>
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
            </div>
          </div>
          <div className="filter">
            <span className="filter-text">Sort Products: </span>
            <select name="" id="">
              <option value="" disabled selected>
                Newest
              </option>
              <option value="">Price (asc)</option>
              <option value="">Price (dsc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
