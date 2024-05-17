import React, { useState } from "react";
import "./Product.css";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const Product = () => {
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const pricePerItem = 20;

  const handleRemoveHandler = () => {
    const newAmount = Math.max(amount - 1, 0);
    const newPrice = newAmount > 0 ? newAmount * pricePerItem : 0;
    setAmount(newAmount);
    setPrice(newPrice);
  };

  const handleAddHandler = () => {
    const newAmount = amount + 1;
    const newPrice = newAmount * pricePerItem;
    setAmount(newAmount);
    setPrice(newPrice);
  };

  return (
    <div className="sp-container">
      <NavBar />
      <Announcement />
      <div className="sp-wrapper">
        <div className="sp-image-container">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className="sp-info-container">
          <div className="title">
            <h1 className="sp-title">Denim JumpSuit</h1>
          </div>
          <div className="sp-desc">
            <p>
              Elevate your style with our Denim Jumpsuit, crafted for comfort
              and chic appeal. This versatile piece combines classic denim with
              modern tailoring, offering a flattering silhouette and effortless
              sophistication. Perfect for casual outings or evening gatherings,
              this jumpsuit exudes confidence and timeless elegance. Embrace the
              allure of denim with our must-have wardrobe essential.
            </p>
          </div>
          <div className="price">
            <p>${price === 0 ? pricePerItem : price}</p>
          </div>
          <div className="filter-container">
            <div className="filter">
              <h3>Color</h3>
              <div
                className="f-color"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="f-color"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="f-color"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className="filter">
              <h3>Size</h3>
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
          <div className="add-to-cart">
            <div className="amount-container">
              <button className="remove" onClick={handleRemoveHandler}>
                <RemoveOutlinedIcon className="a-icon" />
              </button>
              <div className="amount">{amount}</div>
              <button className="add" onClick={handleAddHandler}>
                <AddOutlinedIcon className="a-icon" />
              </button>
            </div>
            <button className="add-cart">ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
